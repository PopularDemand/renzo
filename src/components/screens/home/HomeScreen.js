import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Rotate } from '../../core/transforms';
import { Earth } from '../../svg';
import { getHomepage } from '../../../lib/pages/api';

// TODO: move to authScreen
import { signUp, signOut } from '../../../lib/users/api';

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
          onPress={() => navigation.navigate('Auth')}
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
