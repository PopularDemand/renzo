import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Earth } from '../svg';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>RenZo</Text>
        <Earth fill="blue" />
        <Text style={{ color: '#ccc', position: 'absolute', bottom: 20 }}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 32,
    letterSpacing: .5
  }
});
