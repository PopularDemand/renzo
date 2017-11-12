import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import { SignUpForm } from '../../forms';
// import * as authActions from '../../../store/auth/actions';
const authActions = {};
authActions.authSignUp = (userParams) => ({
  type: 'AUTH_SIGN_UP',
  body: userParams
})

export function AuthScreen({ navigation, handleSignUp, form }) {
  return (
    <View style={styles.container}>
      <SignUpForm onSubmit={handleSignUp} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  form: state.form
});

const mapDispatchToProps = (dispatch) => ({
  handleSignUp: (userParams) => {
    console.log(userParams);
    dispatch(authActions.authSignUp(userParams));
  }
})

export default connect(
  mapStateToProps,
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
