import React from 'react';
import { Provider } from 'react-redux';
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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>      
        <Routes />
      </Provider>
    );
  }
}
