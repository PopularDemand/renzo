function GameChannelSubscription(cable) {
  this.cable = cable;

  this.subscribe = function() {
    this.channel = cable.subscriptions.create(
      { channel: 'GameChannel' }, // Name of channel class
      {
        // Default actioncable callbacks
        connected: () => {
          console.log('connected');
          this.channel.echo({ data: 'front end connected' });
        },
        disconnected: () => console.log('disconnected'),
        received: (data) => {
          console.log('received: ', data);
        },
        rejected: () => console.log('rejected'),

        // Custom callbacks defined on channel class
        echo: (data) => this.channel.perform('echo', data)
      }
    );
  }
}

export default GameChannelSubscription;