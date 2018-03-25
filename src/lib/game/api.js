import { makeAPIRequest } from '../utils';

export async function createGame(gameParams = {}) {
  try {
    return await makeAPIRequest('/games', {
      method: 'POST',
      body: JSON.stringify(gameParams)
    });
  } catch (error) {
    console.error('create fame error: ', error);
  }
}

export async function subscribeToGame (gameParams) {
  const channel = await gameParams.cable.subscriptions.create(
    { channel: 'GameChannel', game_id: gameParams.id },
    {
      // Default actioncable callbacks
      connected: () => {
        console.log('connected');
      },
      disconnected: () => console.log('disconnected'),
      received: (data) => {
        console.log('dispatching!')
        cable.dispatch(data);
      },
      rejected: () => console.log('rejected'),

      // Custom callbacks defined on channel class
      initializeRound: () => this.channel.perform('initialize_round'),
      makeSelection: (data) => this.channel.perform('make_selection', data)
    }
  );
  return channel;
};
