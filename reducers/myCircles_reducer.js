import {
  FETCHING_CIRCLES,
  FETCHING_CIRCLES_SUCCESS,
  FETCHING_CIRCLES_ERROR,
  POSTING_CIRCLES,
  POSTING_CIRCLES_SUCCESS,
  POSTING_CIRCLES_ERROR,
  FETCHING_ENTITIES,
  FETCHING_ENTITIES_SUCCESS,
  FETCHING_ENTITIES_ERROR,
  ADD_TO_CIRCLE,
  REMOVE_FROM_CIRCLE,
  CLEAR_CIRCLE,
  REMOVE_CIRCLES,
  REMOVE_FETCHING,
  REMOVE_POSTING,
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
  entities: {},
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
    case FETCHING_ENTITIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_ENTITIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        entities: action.entities,
      };
    case FETCHING_ENTITIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ADD_TO_CIRCLE:
      return isInCircle(action.entity, state.addCircle.usersInCircle)
      ? state
      : {
        ...state,
        addCircle: {
          ...state.addCircle,
          usersInCircle: [
            ...state.addCircle.usersInCircle,
            action.entity,
          ],
        },
      }
    case REMOVE_FROM_CIRCLE:
      return isInCircle(action.entity, state.addCircle.usersInCircle)
      ? {
        ...state,
        addCircle: {
          ...state.addCircle,
          usersInCircle: [
            ...state.addCircle.usersInCircle,
            state.addCircle.usersInCircle.filter(entity => entity.entityId !== action.entity.entityId),,
          ],
        },
      }
      : state
    // case ADD_TO_CIRCLE:
    //   return isInCircle(action.entity, state.usersInCircle)
    //   ? state
    //   : {
    //     ...state,
    //     usersInCircle: [
    //       ...state.usersInCircle,
    //       action.entity,
    //     ],
    //   }
    // case REMOVE_FROM_CIRCLE:
    //   return isInCircle(action.entity, state.usersInCircle)
    //   ? {
    //     ...state,
    //     usersInCircle: state.usersInCircle.filter(entity => entity.entityId !== action.entity.entityId),
    //   }
    //   : state
    case CLEAR_CIRCLE:
      return {
        ...state,
        addCircle: {
          circleNameText: '',
          circleDescriptionText: '',
          usersInCircle: [],
        },
      }
    case UPDATE_NEWCIRCLE_TEXT:
      return {
        ...state,
        addCircle: {
          circleNameText: action.newCircleText,
          ...state.addCircle.circleDescriptionText,
          ...state.addCircle.usersInCircle,
        },
      };
    default:
      return state;
  }
}