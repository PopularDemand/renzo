import { makeAPIRequest } from '../utils';

export async function signUp(userParams) {
  try {
    return await makeAPIRequest('/users', {
      body: userParams,
      method: 'POST'
    });
  } catch (error) {
    console.error('user sign up error: ', error);
  }
}

export async function signIn(userParams) {
  try {
    return await makeAPIRequest('/signin', {
      method: 'POST',
      body: userParams
    });
  } catch (error) {
    console.error('user sign in error: ', error);
  }
}

export async function signOut() {
  try {
    return await makeAPIRequest('/signout', {
      method: 'DELETE'
    });
  } catch (error) {
    console.error('user sign out error: ', error);
  }
}

export async function getAllUsers() {
  try {
    return await makeAPIRequest('/users')
  } catch (error) {
    console.error('get all users error: ', error);
  }
}

export async function getUser(id) {
  try {
    return await makeAPIRequest(`/users/${id}`);
  } catch (error) {
    console.error('get user error: ', error);
  }
}
