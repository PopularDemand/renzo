import React from 'react';
import { branch, renderNothing } from 'recompose';
import { Text, View } from 'react-native';

export const enhance = branch(({ message }) => !message, renderNothing);

export const FormError = ({ message }) => (
  <View>
    <Text>{message}</Text>
  </View> 
);

export default enhance(FormError);
