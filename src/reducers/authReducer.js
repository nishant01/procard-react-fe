import { authConstants } from '../constants/authConstants';

//let user = JSON.parse(localStorage.getItem('user'));
//const initialState = user ? { loggedIn: true, user } : {};

export const authReducer = (state = initialAuthState, action) => {
  console.log("action", action)
  console.log("state", state)
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...action.response, ...{"isLoggedIn": true}
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...action.response, ...{"isLoggedIn": true}
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {
        ...state, ...{"isLoggedIn": false}
      };
    default:
      return state
  }
}