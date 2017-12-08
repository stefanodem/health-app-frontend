import { combineReducers } from 'redux';
import user from './user_reducer';
import post from './post_reducer';

export default combineReducers({
  user, post
})