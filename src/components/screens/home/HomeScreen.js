import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Earth } from '../../svg';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>RenZo</Text>
        <Earth fill="blue" />
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Game')}
        />
        <Text style={{ color: '#ccc', position: 'absolute', bottom: 20 }}>
          Shake your phone to open the developer menu.
        </Text>
      </View>
  );
}

HomeScreen.navigationOptions = { title: 'Home' };

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
