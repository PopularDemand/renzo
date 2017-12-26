import React from 'react';
import { Provider } from 'react-redux';
import ActionCable from 'react-native-actioncable';
// import ActionCableProvider from 'react-actioncable-provider';
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

// const cable = ActionCable.createConsumer('wss://localhost:3000/cable');
const cable = ActionCable.createConsumer('wss://actioncableex.herokuapp.com/cable');

// Addtional props passed to every screen as this.props.screenProps
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
