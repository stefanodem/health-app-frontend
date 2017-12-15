import { combineReducers } from 'redux';
import user from './user_reducer';
import feed from './feed_reducer';

export default combineReducers({
  user, feed
})