import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Rotate } from '../../core/transforms';
import { Earth } from '../../svg';
import { getHomepage } from '../../../lib/pages/api';

// TODO: move to authScreen
import { signUp, signOut } from '../../../lib/users/api';

let i = 10;
const customSignUp = () => {
  signUp(JSON.stringify({
    user: {
      username: `test${i}`,
      password: 'password',
      password_confirmation: 'password',
      email: `test${i}@test.com`
    }
  }));
  i++;
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>RenZo</Text>
        <Rotate>
          <Earth fill="blue" style={styles.icon} />
        </Rotate>
        <Button
          title="Play Now"
          onPress={() => navigation.navigate('Game')}
        />
        <Button
          title="sign in"
          onPress={customSignUp}
        />
        <Button
          title="sign out"
          onPress={signOut}
        />
      </View>
  );
}

HomeScreen.navigationOptions = { header: null };

const spacing = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 32,
    letterSpacing: .5,
    marginBottom: spacing
  },
  icon: {
    marginBottom: spacing
  }
});
