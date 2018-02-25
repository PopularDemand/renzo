// I'm not tied to this abstraction.
// Definitely will want to tie this into a decorator.
// Look into where to inject the cable
export function AppearanceChannelSubscription(cable) {
  this.cable = cable;

  this.subscribe = function() {
    this.channel = cable.subscriptions.create(
      { channel: 'RoomChannel' }, // Name of channel class

      // `this` is the AppearanceChannelSubscription
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
