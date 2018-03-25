import React from 'react';
import { Provider } from 'react-redux';
import ActionCable from 'react-native-actioncable';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import store from '../store';
import { HomeScreen } from '../components/screens/home';
import { GameScreen } from '../components/screens/game';
import { AuthScreen } from '../components/screens/auth';

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
  Auth: { screen: AuthScreen }
}, {
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: { marginTop: Constants.statusBarHeight },
  }
});

const cable = ActionCable.createConsumer('ws://zo-serve.herokuapp.com/cable');
cable.dispatch = store.dispatch;

// Additional props passed to every screen as this.props.screenProps
const screenProps = { cable };

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>      
        <Routes screenProps={screenProps} />
      </Provider>
    );
  }
}
