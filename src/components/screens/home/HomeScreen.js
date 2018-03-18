import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Text, View, Button } from 'react-native';
import { Rotate } from '../../core/transforms';
import { Earth } from '../../svg';
import { getHomepage } from '../../../lib/pages/api';

import styles from './styles';

// TODO: move to authScreen
import { authSignOut } from '../../../store/auth/actions';

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: () => {
    dispatch(authSignOut());
  }
});

const enhance = compose(
  connect(
    ({ auth }) => ({ auth }),
    mapDispatchToProps
  )
);

export function HomeScreen({ navigation, auth, handleSignOut }) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>RenZo</Text>
        <Rotate>
          <Earth fill="blue" style={styles.icon} />
        </Rotate>
        {auth.username &&
          <Text>The current user is {auth.username}</Text>
        }
        <Button
          title="Play Now"
          onPress={() => navigation.navigate('Game')}
        />
        <Button
          title="sign up"
          onPress={() => navigation.navigate('Auth')}
        />
        <Button
          title="sign out"
          onPress={handleSignOut}
        />
      </View>
  );
}

HomeScreen.navigationOptions = { header: null };

export default enhance(HomeScreen);
