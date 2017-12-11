//import { saveUser } from 'services/api';
//import { fetchUser } from 'helpers/api'

import {
  //AUTH_USER,
  //UNAUTH_USER,
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
  REMOVE_FETCHING_USER,
} from './types';

//Description: this will probably be used for profile detail views

// export function authUser (uid) {
//   return {
//     type: AUTH_USER,
//     uid,
//   }
// }

// export function unauthUser () {
//   return {
//     type: UNAUTH_USER,
//   }
// }

function fetchingUser() {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserSuccess (uid, user, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

function fetchingUserFailure (error) {
  console.warn(error);
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user',
  }
}

export function removeFetchingUser () {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

export const fetchAndHandleUser = (uid) => async (dispatch) => {
  dispatch(fetchingUser());
  try {
    let user = await fetchUser(uid);
    dispatch(fetchingUserSuccess(uid, user, Date.now()));
  } catch(e) {
    dispatch(fetchingUserFailure(e));
  }
}
