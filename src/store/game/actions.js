import { createGame, subscribeToGame } from '../../lib/game/api';

export const GAME_TYPES = {
  CREATE_REQUEST: 'GAME/CREATE_REQUEST',
  CREATE_SUCCESS: 'GAME/CREATE_SUCCESS',
  CREATE_FAILURE: 'GAME/CREATE_FAILURE',
  SUBSCRIBE_REQUEST: 'GAME/SUBSCRIBE_REQUEST',
  SUBSCRIBE_SUCCESS: 'GAME/SUBSCRIBE_SUCCESS',
  SUBSCRIBE_FAILURE: 'GAME/SUBSCRIBE_FAILURE'
};

export function gameCreate(gameParams) {
  return async function(dispatch) {
    dispatch(gameCreateRequest());
    function onSuccess(game) {
      dispatch(gameCreateSuccess(game));
      return Promise.resolve(game);
    }

    function onFailure(error) {
      dispatch(gameCreateFailure(error));
      return Promise.resolve(error);
    }

    try {
      const game = await createGame(gameParams);
      if (game.error) {
        // TODO: change server to return more than string
        // or make standard function to handle res/errors
        // from this server
        return onFailure(new Error(game.error));
      }
      return onSuccess(game);
    } catch (error) {
      return onFailure(error);
    }
  }
}

export const gameCreateRequest = () => ({
  type: GAME_TYPES.CREATE_REQUEST
});

export const gameCreateSuccess = (game) => ({
  type: GAME_TYPES.CREATE_SUCCESS,
  body: game
});

export const gameCreateFailure = (error) => ({
  type: GAME_TYPES.CREATE_FAILURE,
  error
});

// Game Subscribe

export function gameSubscribe(gameParams) {
  return async function(dispatch) {
    dispatch(gameSubscribeRequest());
    function onSuccess(channel) {
      dispatch(gameSubscribeSuccess(channel));
      return Promise.resolve(channel);
    }

    function onFailure(error) {
      dispatch(gameSubscribeFailure(error));
      return Promise.resolve(error);
    }

    try {
      const gameChannel = await subscribeToGame(gameParams);
      if (gameChannel.error) {
        // TODO: change server to return more than string
        // or make standard function to handle res/errors
        // from this server
        return onFailure(new Error(gameChannel.error));
      }
      return onSuccess(gameChannel);
    } catch (error) {
      return onFailure(error);
    }
  }
}

export const gameSubscribeRequest = () => ({
  type: GAME_TYPES.SUBSCRIBE_REQUEST
});

export const gameSubscribeSuccess = (channel) => ({
  type: GAME_TYPES.SUBSCRIBE_SUCCESS,
  body: channel
});

export const gameSubscribeFailure = (error) => ({
  type: GAME_TYPES.SUBSCRIBE_FAILURE,
  error
});
