import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import { SignUpForm } from '../../forms';
import { authSignUp } from '../../../store/auth/actions';

export function AuthScreen({ navigation, handleSignUp, form }) {
  return (
    <View style={styles.container}>
      <SignUpForm onSubmit={handleSignUp} />
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleSignUp: (userParams) => {
    dispatch(authSignUp(userParams));
  }
});

export default connect(
  ({ form }) => form,
  mapDispatchToProps
)(AuthScreen);

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
