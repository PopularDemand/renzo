import { withProps, lifecycle, compose } from 'recompose';
import { GameChannelSubscription } from '../../lib/sockets/api';

export const withGameChannel = compose(
  withProps((props) => {
    const cable = props.cable || props.screenProps.cable;
    if (!cable) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error('No cable prop passed to withGameChannel');
      }
      console.warn('Performance severely degraded. Please submit a bug report and retry.');
      return;
    }

    return {
      gameChannel: new GameChannelSubscription(cable)
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.gameChannel.subscribe();
    }
  })
);
