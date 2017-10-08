import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function GameScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Not much to do here!</Text>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

GameScreen.navigationOptions = { title: 'RenZo' };

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
