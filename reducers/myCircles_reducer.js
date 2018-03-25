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
  REMOVE_POSTING,
  UPDATE_NEWCIRCLE_TEXT,
  TOGGLE_HEALTH_GOAL,
  FETCHING_HEALTHCARDS,
  FETCHING_HEALTHCARDS_SUCCESS,
  FETCHING_HEALTHCARDS_ERROR,
  GET_SELECTED_HEALTH_GOALS,
} from '../actions/types';

import { isInCircle } from '../services/utils'

const DEFAULT_AVATAR = 'https://image.flaticon.com/icons/png/128/32/32441.png'

const toggleHealthCardSelection = (state, sectionId, healthCardId) => {
  let newState = Object.assign({}, state);
  newState.healthCards[sectionId].data[healthCardId].selected = !newState.healthCards[sectionId].data[healthCardId].selected;
  return newState
}

const initialState = {
  isFetchingEntities: true,
  isFetchingCircles: true,
  isFetchingHealthCards: true,
  isPostingCircles: false,
  error: '',
  lastUpdated: '',
  addCircle: {
    circleName: '',
    circleAvatar: DEFAULT_AVATAR,
    usersInCircle: [],
    circleDataAccess: [],
    healthGoals: [],
  },
  healthCards: {},
  entities: {},
  circles: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CIRCLES:
      return {
        ...state,
        isFetchingCircles: true,
      };
    case FETCHING_CIRCLES_SUCCESS:
      return {
        ...state,
        isFetchingCircles: false,
        circles: action.circles,
        lastUpdated: action.lastUpdated,
        error: '',
      };
    case POSTING_CIRCLES_ERROR:
      return {
        ...state,
        isFetchingCircles: false,
        error: action.error,
      };
    case POSTING_CIRCLES:
      return {
        ...state,
        isPostingCircles: true,
      };
    case POSTING_CIRCLES_SUCCESS:
      return {
        ...state,
        isPostingCircles: false,
        error: '',
        addCircle: {
          circleName: '',
          circleAvatar: '',
          usersInCircle: [],
          circleDataAccess: [],
          healthGoals: [],
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
        isPostingCircles: false,
        error,
      };
    case REMOVE_POSTING:
      return {
        ...state,
        error: '',
        isPostingCircles: false,
      };
    case FETCHING_ENTITIES:
      return {
        ...state,
        isFetchingEntities: true,
      };
    case FETCHING_ENTITIES_SUCCESS:
      return {
        ...state,
        isFetchingEntities: false,
        error: '',
        entities: action.entities,
      };
    case FETCHING_ENTITIES_ERROR:
      return {
        ...state,
        isFetchingEntities: false,
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
    case CLEAR_CIRCLE:
      return {
        ...state,
        addCircle: {
          circleName: '',
          circleAvatar: DEFAULT_AVATAR,
          usersInCircle: [],
          circleDataAccess: [],
          healthGoals: [],
        },
      }
    case UPDATE_NEWCIRCLE_TEXT:
      return {
        ...state,
        addCircle: {
          ...state.addCircle,
          circleName: action.newCircleText,
        },
      };
    case TOGGLE_HEALTH_GOAL:
      let newState = toggleHealthCardSelection(state, action.sectionId, action.healthCardId);

      return newState;
    case FETCHING_HEALTHCARDS:
      return {
        ...state,
        isFetchingHealthCards: true,
      };
    case FETCHING_HEALTHCARDS_SUCCESS:
      return {
        ...state,
        healthCards: action.healthCards,
        isFetchingHealthCards: false,
        error: '',
      };
    case FETCHING_HEALTHCARDS_ERROR:
      return {
        ...state,
        isFetchingHealthCards: false,
        error: action.error,
      };
    case GET_SELECTED_HEALTH_GOALS:
      return {
        ...state,
        addCircle: {
          ...state.addCircle,
          healthGoals: action.healthGoals,
        }
      }
    default:
      return state;
  }
}