import { combineReducers } from 'redux';
import user from './user_reducer';
import feed from './feed_reducer';
import newPost from './newPost_reducer';
import myCircles from './myCircles_reducer';

export default combineReducers({
  user, feed, newPost, myCircles,
})