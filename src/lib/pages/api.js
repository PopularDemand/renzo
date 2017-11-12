import { makeAPIRequest } from '../utils';

export async function getHomepage() {
  try {
    return await makeAPIRequest('/');
  } catch (error) {
    console.error('get homepage error: ', error);
  }
}
