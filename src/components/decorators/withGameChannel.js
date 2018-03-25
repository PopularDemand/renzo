import { withProps, lifecycle, compose } from 'recompose';
import { GameChannelSubscription } from '../../lib/sockets/api';

const sleep = (ms) => new Promise((res) => res(setTimeout(ms)));

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

    const subscription = new GameChannelSubscription(cable);

    subscription.subscribe();
    let count = 0;
    while(!subscription.channel) {
      sleep(50);
      if (count > 100) break;
      count++;
    }

    return { gameChannel: subscription.channel }
  })
);
