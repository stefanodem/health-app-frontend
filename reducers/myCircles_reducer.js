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
  ADD_TO_CIRCLE,
  REMOVE_FROM_CIRCLE,
  CLEAR_CIRCLE,
  UPDATE_NEWCIRCLE_TEXT,
} from '../actions/types';

import { isInCircle } from '../services/utils'

const initialState = {
  isFetching: true,
  isPosting: false,
  error: '',
  lastUpdated: '',
  addCircle: {
    circleNameText: '',
    circleDescriptionText: '',
    usersInCircle: [],

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
        error: '',
      };
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
          usersInCircle: [],
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
    case ADD_TO_CIRCLE:
      return isInCircle(action.entity, state.usersInCircle)
      ? state
      : {
        ...state,
        usersInCircle: [
          ...state.usersInCircle,
          action.entity,
        ],
      }
    case REMOVE_FROM_CIRCLE:
      return isInCircle(action.entity, state.usersInCircle)
      ? {
        ...state,
        usersInCircle: state.usersInCircle.filter(entity => entity.entityId !== action.entity.entityId),
      }
      : state
    case CLEAR_CIRCLE:
      return {
        ...state,
        addCircle: {
          circleNameText: '',
          circleDescriptionText: '',
          usersInCircle: [],
        },
        usersInCircle: [],
      }
    case UPDATE_NEWCIRCLE_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    default:
      return state;
  }
}