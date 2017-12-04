import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { withHandlers, compose } from 'recompose';
import { isFunction } from 'lodash';
import { SignUpForm } from '../../forms';
import { authSignUp } from '../../../store/auth/actions';

import styles from './styles';

export function AuthScreen({ handleSignUp, auth }) {
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
    return dispatch(authSignUp(userParams));
  }
});

export const enhance = compose(
  connect(
    ({ form, auth }) => ({ form, auth }),
    mapDispatchToProps
  ),
  withHandlers(({ handleSignUp, navigation }) => ({
    handleSignUp: () => (userParams) => {
      if (isFunction(handleSignUp)) {
        handleSignUp(userParams)
          .then((payload) => {
            if (!(payload instanceof Error)) {
              navigation.navigate('Home');
            }
          })
      }
    }
  }))
);

export default enhance(AuthScreen);
