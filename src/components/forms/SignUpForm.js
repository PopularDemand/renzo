import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { View, Button, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const FormInput = ({ input, ...inputProps }) => {
  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    </View>
  );
};


export const SignUpForm = ({ handleSubmit }) => {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View className="form-group">
        <Text>Username</Text>
        <Field name="user[username]" component={FormInput} />
      </View>
      <View className="form-group">
        <Text>Email</Text>
        <Field name="user[email]" component={FormInput} />
      </View>
      <View className="form-group">
        <Text>Password</Text>
        <Field name="user[password]" component={FormInput} />
      </View>
      <View className="form-group">
        <Text>Confirm Password</Text>
        <Field name="user[password_confirmation]" component={FormInput} />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  },
  button: {}
});

export default reduxForm({
  form: 'signUp'
})(SignUpForm);
