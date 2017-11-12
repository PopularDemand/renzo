import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Rotate } from '../../core/transforms';
import { Earth } from '../../svg';

async function signUp() {
  try {
    const body = JSON.stringify({
      user: {
        username: 'alexayay',
        password: 'password',
        password_confirmation: 'password',
        email: 'wgpuck@yahoo.com'
      }
    });
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const res = await fetch('https://zo-serve.herokuapp.com/users', {
      method: 'POST',
      headers,
      body
    });
    const currentUser = await res.json();
    console.log(currentUser);
  } catch (error) {
    console.error('error: ', error);
  }
}

async function signOut() {
  try {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const res = await fetch('https://zo-serve.herokuapp.com/signout', {
      method: 'DELETE',
      headers
    });
    const currentUser = await res.json();
    console.log(currentUser);
  } catch (error) {
    console.error('error: ', error);
  }
}

async function getUsers() {
  try {
    const res = await fetch('https://zo-serve.herokuapp.com/users');
    const users = await res.json();
    console.log(users);
  } catch (error) {
    console.log('error: ', error);
  }
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
          onPress={signUp}
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
