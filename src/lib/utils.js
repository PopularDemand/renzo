import merge from 'lodash/merge';

export async function makeAPIRequest(path, options = {}) {
  const init = merge({}, options, {
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  });
  const res = await fetch(`https://zo-serve.herokuapp.com${path}`, init);
  return await res.json();
}
