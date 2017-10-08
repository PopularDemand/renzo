import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import { HomeScreen } from '../components/screens/home';
import { GameScreen } from '../components/screens/game';

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen }
}, {
  navigationOptions: {
    headerStyle: { marginTop: Constants.statusBarHeight }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

