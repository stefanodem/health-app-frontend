import {
  //AUTH_USER,
  //UNAUTH_USER,
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
  REMOVE_FETCHING_USER,
} from '../actions/types';

//DUMMY USER:
const DUMMYUSER = {
  isFetching: true,
  error: '',
  lastUpdated: null,
  userInfo: {
    uid: '11111',
    name: 'Steve the Chief',
    avatar: 'http://profile.actionsprout.com/default.jpeg',
  },
  posts: [1, 2, 3, 4, 5, 6],
}

const initialUserState = {
  lastUpdated: 0,
  userInfo: {
    name: '',
    uid: '',
    avatar: '',
  },
  posts: [],
}

function user(state = DUMMYUSER, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.user,
        lastUpdated: action.timestamp,
        posts: action.posts,
      }
    default:
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
  //isAuthed: false,
  //authedId: '',
}

export default function(state = DUMMYUSER, action) {
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_USER_SUCCESS:
      return action.user === null
      ? {
        ...state,
        isFetching: false,
        error: `Error while fetching user id: ${action.uid}`
      }
      : {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: user(state[action.uid], action),
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case REMOVE_FETCHING_USER :
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}