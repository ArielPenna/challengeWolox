/* eslint-disable func-names */
import { GET_TECHS, CREATE_USER } from './constants';

// ----------------- CREA UN USUARIO
export function createUser(user) {
  console.log('actionUser', user);
  return function (dispatch) {
    const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
      })
      .then((data) => {
        dispatch({ type: CREATE_USER, payload: data });
        window.location = '/techList';
        alert('El usuario se creó correctamente');
      })
      .catch((err) => console.error(err));
  };
}

// ------------ TODAS LAS TECHs  -----------------------------------------------------------

export function getTechs() {
  return function (dispatch) {
    return fetch('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs')
      .then((res) => res.json())
      .then((data) => {
        console.log('Action:', data);
        return dispatch({ type: GET_TECHS, payload: data });
      })
      .catch((err) => console.error(err));
  };
}
