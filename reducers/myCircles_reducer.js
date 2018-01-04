import {
  FETCHING_CIRCLES,
  FETCHING_CIRCLES_SUCCESS,
  FETCHING_CIRCLES_ERROR,
  POSTING_CIRCLES,
  POSTING_CIRCLES_SUCCESS,
  POSTING_CIRCLES_ERROR,
  REMOVE_CIRCLES,
  REMOVE_FETCHING,
  REMOVE_POSTING,
  UPDATE_NEWCIRCLE_TEXT,
} from '../actions/types';

const initialState = {
  isFetching: true,
  isPosting: false,
  error: '',
  lastUpdated: '',
  addCircle: {
    circleNameText: '',
    circleDescriptionText: '',
    circleUsers: [],

  },
  circles: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CIRCLES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_CIRCLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',      };
    case POSTING_CIRCLES_ERROR:
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
    case POSTING_CIRCLES:
      return {
        ...state,
        isPosting: true,
      };
    case POSTING_CIRCLES_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: '',
        addCircle: {
          circleNameText: '',
          circleDescriptionText: '',
          circleUsers: [],
        },
        circles: {
          ...state.postReplies,
          [action.postId] : {
            ...state.postReplies[action.postId],
            replies: {
              ...state.postReplies[action.postId].replies,
              [action.replyId]: action.reply,
            }
          }
        }
      };
    case POSTING_CIRCLES_ERROR:
      return {
        ...state,
        isPosting: false,
        error,
      };
    case REMOVE_POSTING:
      return {
        ...state,
        error: '',
        isPosting: false,
      };
    default:
      return state;
  }
}