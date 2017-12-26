import {
  FETCHING_ENTITIES,
  FETCHING_ENTITIES_SUCCESS,
  FETCHING_ENTITIES_ERROR,
  REMOVE_FETCHING,
  POSTING_NEWPOST,
  POSTING_NEWPOST_SUCCESS,
  POSTING_NEWPOST_ERROR,
  REMOVE_POSTING,
  ADD_TO_CIRCLE,
  REMOVE_FROM_CIRCLE,
  CLEAR_CIRCLE,
  UPDATE_NEWPOST_TEXT,
} from '../actions/types';

const initialState = {
  isFetching: true,
  isPosting: false,
  error: '',
  lastUpdated: '',
  newPostText: '',
  circle: [],
  entities: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
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
    case REMOVE_FETCHING:
      return {
        ...state,
        error: '',
        isFetching: false,
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
      };
    case POSTING_NEWPOST_ERROR:
      return {
        ...state,
        isPosting: false,
        error,
      };
    // case REMOVE_POSTING:
    //   return {
    //     ...state,
    //     error: '',
    //     isPosting: false,
    //   };
    case ADD_TO_CIRCLE:
      return state.circle.includes(action.entityId)
      ? {
        ...state,
        circle: [
          ...state.circle,
          action.entityId,
        ],
      }
      : state
    case REMOVE_FROM_CIRCLE:
      return state.circle.includes(action.entityId)
      ? {
        ...state,
        circle: state.circle.filter(entity => entity !== action.entityId),
      }
      : state
    case CLEAR_CIRCLE:
      return {
        ...state,
        circle: [],
      }
    case UPDATE_NEWPOST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    default:
      return state;
  }
}