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
  TOGGLE_HEALTH_GOAL,
  FETCHING_HEALTHCARDS,
  FETCHING_HEALTHCARDS_SUCCESS,
  FETCHING_HEALTHCARDS_ERROR,
} from '../actions/types';

import { isInCircle } from '../services/utils'

const DEFAULT_AVATAR = 'https://image.flaticon.com/icons/png/128/32/32441.png'
const healthGoalsData = [
  'Diabetes', 'Fitness', 'Diet', 'Sleep', 'Gagi', 'Bisi', 'Fudi', 'Schnäbi', 'Pimmeli'
]

const healthGoalsData2 = {
  1: {
    id: 1,
    name: 'Diabetes',
    selected: false,
  },
  2: {
    id: 2,
    name: 'Fitness',
    selected: false,
  },
  3: {
    id: 3,
    name: 'Diet',
    selected: false,
  },
  4: {
    id: 4,
    name: 'Sleep',
    selected: false,
  },
  5: {
    id: 5,
    name: 'Gagi',
    selected: false,
  },
  6: {
    id: 6,
    name: 'Bisi',
    selected: false,
  },
  7: {
    id: 7,
    name: 'Fudi',
    selected: false,
  },
  8: {
    id: 8,
    name: 'Schnäbi',
    selected: false,
  },
  9: {
    id: 9,
    name: 'Pimmeli',
    selected: false,
  },
}

const toggleHealthCardSelection = (state, sectionId, healthCardId) => {
  let newState = Object.assign({}, state);
  newState.healthCards[sectionId].data[healthCardId].selected = !newState.healthCards[sectionId].data[healthCardId].selected;
  return newState
}

// const removeProperty = (obj, prop) => {
//   let newObj = Object.assign({}, obj);
//   delete newObj[prop];
//   return newObj;
// }

const initialState = {
  isFetching: true,
  isPosting: false,
  error: '',
  lastUpdated: '',
  addCircle: {
    circleName: '',
    circleAvatar: DEFAULT_AVATAR,
    usersInCircle: [],
    healthGoals: {},
  },
  circleAcces: {

  },
  healthCards: {
    // 1: {id: 1, title: 'RECOMMENDED FOR YOU', data: healthGoalsData2, selected: false},
    // 2: {id: 2, title: 'HEALTH CONDITIONS', data: healthGoalsData2, selected: false},
    // 3: {id: 3, title: 'LIFESTYLE', data: healthGoalsData2, selected: false},
    // 4: {id: 4, title: 'EATING HEALTHY', data: healthGoalsData2, selected: false},
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
          circleName: '',
          circleAvatar: '',
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
          circleName: '',
          circleAvatar: DEFAULT_AVATAR,
          usersInCircle: [],
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
      //let updatedObj = removeProperty(state.addCircle.healthGoals, action.healthGoals.id);
      let newState = toggleHealthCardSelection(state, action.sectionId, action.healthCardId);

      return newState;
    case FETCHING_HEALTHCARDS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_HEALTHCARDS_SUCCESS:
      return {
        ...state,
        healthCards: action.healthCards,
        isFetching: false,
        error: '',
      };
    case FETCHING_HEALTHCARDS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}