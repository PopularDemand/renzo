import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { SignUpForm } from '../../forms';
import { authSignUp } from '../../../store/auth/actions';

import styles from './styles';

export function AuthScreen({ navigation, handleSignUp, form, auth }) {
  return (
    <View style={styles.container}>
      <SignUpForm
        onSubmit={handleSignUp}
        auth={auth}
      />
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleSignUp: (userParams) => {
    dispatch(authSignUp(userParams));
  }
});

export default connect(
  ({ form, auth }) => ({ form, auth }),
  mapDispatchToProps
)(AuthScreen);
