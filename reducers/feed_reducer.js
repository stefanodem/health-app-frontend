import {
  FETCHING_FEED_DATA,
  FETCHING_POSTS_SUCCESS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_REPLIES_SUCCESS,
  FETCHING_POSTS_ERROR,
  POSTING_FEED_DATA,
  POSTING_REPLY_SUCCESS,
  POSTING_REPLY_ERROR,
  POSTING_NEWPOST,
  POSTING_NEWPOST_SUCCESS,
  POSTING_NEWPOST_ERROR,
  UPDATE_NEWPOST_TEXT,
  REMOVE_POSTING,
  ADD_POST,
  ADD_LIKE,
  REMOVE_LIKE,
  UPDATE_REPLY_TEXT,
  ADD_MULTIPLE_POSTS,
  REMOVE_FETCHING,
} from '../actions/types';

const initialState = {
  isFetching: true,
  isPosting: false,
  error: '',
  lastUpdated: '',
  feedActions: {
    replyText: '',
    postText: '',
  },
  posts: {},
  postReplies: {},
  shares: {},
  newPostText: '',
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
    case POSTING_FEED_DATA:
      return {
        ...state,
        isPosting: true,
      };
    case POSTING_REPLY_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: '',
        feedActions: {
          replyText: '',
          postText: '',
        },
        postReplies: action.replies,
      };
    case UPDATE_REPLY_TEXT:
      return {
        ...state,
        feedActions: {
          ...state.feedActions,
          replyText: action.replyText,
        }
      };
    case POSTING_REPLY_ERROR:
      return {
        ...state,
        isPosting: false,
        error,
      };
    case POSTING_NEWPOST:
      return {
        ...state,
        isPosting: true,
      };
    case POSTING_NEWPOST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: '',
        newPostText: '',
      };
    case POSTING_NEWPOST_ERROR:
      return {
        ...state,
        isPosting: false,
        error,
        newPostText: '',
      };
    case UPDATE_NEWPOST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    case REMOVE_POSTING:
      return {
        ...state,
        error: '',
        isPosting: false,
      };
    case ADD_MULTIPLE_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    case ADD_LIKE:
      return typeof state.posts[action.postId] === 'undefined'
      ? state
      : {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            likeCount: action.likeCount,
            liked: true,
          }
        },
      };
    case REMOVE_LIKE:
      return typeof state.posts[action.postId] === 'undefined'
      ? state
      : {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            likeCount: action.likeCount,
            liked: false,
          }
        },
      };
    default:
      return state;
  }
}