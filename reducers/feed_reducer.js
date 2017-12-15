import {
  FETCHING_FEED_DATA,
  FETCHING_POSTS_SUCCESS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_REPLIES_SUCCESS,
  FETCHING_POSTS_ERROR,
  ADD_POST,
  ADD_MULTIPLE_POSTS,
  REMOVE_FETCHING,
} from '../actions/types';

const initialState = {
  isFetching: true,
  error: '',
  lastUpdated: '',
  posts: {},
  postReplies: {},
  shares: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FEED_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_POST:
    case FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        //[action.message.messageId]: action.message,
      };
    case FETCHING_USER_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        lastUpdated: action.lastUpdated,
        posts: action.posts,
        //[action.message.messageId]: action.message,
      };
    case FETCHING_REPLIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        //alternative: cache previous replies
        //e.g. postReplies[action.replies.postId]: action.replies
        postReplies: action.replies,
      };
    case FETCHING_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case REMOVE_FETCHING:
      return {
        ...state,
        error: '',
        isFetching: false,
      };
    case ADD_MULTIPLE_POSTS :
      return {
        ...state,
        ...action.posts,
      };
    default:
      return state;
  }
}