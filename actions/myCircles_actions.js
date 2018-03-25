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
  GET_SELECTED_HEALTH_GOALS,
  TOGGLE_CIRCLE_DATA_ACCESS,
} from './types';

import _values from 'lodash/values';

import { fetchPosts, fetchUserPosts, fetchReplies, addReplyText, fetchEntities, fetchHealthCards } from '../services/api';

const fetchingCircles = () => {
  return {
    type: FETCHING_CIRCLES,
  }
}

const fetchingCirclesSuccess = (circles, lastUpdated) => {
  return {
    type: FETCHING_CIRCLES_SUCCESS,
    circles,
    lastUpdated
  }
}

const fetchingCirclesError = (error) => {
  return {
    type: FETCHING_CIRCLES_ERROR,
    error: error,
  }
}

const postingCircles = () => {
  return {
    type: POSTING_CIRCLES,
  }
}
//TODO: think about how circle will be updated (similar to replies: post-call --> return the new circle object --> add to circles)
const postingCirclesSuccess = (circleName, circleDescription, circleUsers) => {
  return {
    type: POSTING_CIRCLES_SUCCESS,
    circleName,
    circleDescription,
    circleUsers,
  }
}

const postingCirclesError = (error) => {
  return {
    type: POSTING_CIRCLES_ERROR,
    error: error,
  }
}

const fetchingEntities = () => {
  return {
    type: FETCHING_ENTITIES,
  }
}

const fetchingEntitiesSuccess = (entities) => {
  return {
    type: FETCHING_ENTITIES_SUCCESS,
    entities,
  }
}
const fetchingEntitiesError = (error) => {
  return {
    type: FETCHING_ENTITIES_ERROR,
    error: error,
  }
}

const addingToCircle = (entity) => {
  return {
    type: ADD_TO_CIRCLE,
    entity,
  }
}

const removingFromCircle = (entity) => {
  return {
    type: REMOVE_FROM_CIRCLE,
    entity,
  }
}

const fetchingHealthCards = () => {
  return {
    type: FETCHING_HEALTHCARDS,
  }
}

const fetchingHealthCardsSuccess = (healthCards) => {
  return {
    type: FETCHING_HEALTHCARDS_SUCCESS,
    healthCards,
  }
}
const fetchingHealthCardsError = (error) => {
  return {
    type: FETCHING_HEALTHCARDS_ERROR,
    error: error,
  }
}

const togglingHealthGoal = (sectionId, healthCardId) => {
  return {
    type: TOGGLE_HEALTH_GOAL,
    sectionId,
    healthCardId,
  }
}

const togglingCircleDataAccess = (healthCardId) => {
  return {
    type: TOGGLE_CIRCLE_DATA_ACCESS,
    healthCardId,
  }
}

const filterSelectedHealthGoals = (healthCards) => {
  let selectedHealthGoals = {};

  for (let i = 0; i < _values(healthCards).length; i++) {
    let healthGoals = _values(_values(healthCards)[i].data)
    healthGoals.forEach(goal => { if (goal.selected) selectedHealthGoals[goal.id] = goal })
  }

  return selectedHealthGoals;
}

export const getSelectedHealthGoals = (healthCards) => {
  return {
    type: GET_SELECTED_HEALTH_GOALS,
    healthGoals: filterSelectedHealthGoals(healthCards),
  }
}

export const toggleCircleDataAccess = (healthCardId) => async (dispatch) => {
  dispatch(togglingCircleDataAccess(healthCardId));
}

export const clearCircle = () => {
  return {
    type: CLEAR_CIRCLE,
  }
}

// export const fetchAndHandleCircles = (circleId) => async (dispatch) => {
//   dispatch(fetchingCircles());
//   try {
//     let posts = await fetchCircles(circleId);
//     if (posts) {
//       dispatch(fetchingCirclesSuccess());
//       return posts;
//     } else {
//       //handle non posts
//     }
//   } catch(e) {
//     fetchingCirclesError(e);
//   }
// }

export const fetchAndHandleUserCircles = (uid) => async (dispatch) => {
  dispatch(fetchingCircles());
  try {
    let circles = await fetchUserCircles(uid);
    if (circles) {
      dispatch(
        fetchingCirclesSuccess(
          circles,
          //Object.keys(posts).sort((a, b) => posts[b].timestamp - posts[a].timestamp),
          Date.now()
        )
      );
    } else {
      fetchingCirclesError('There are no circles yet');
    }
  } catch(e) {
    fetchingCirclesError(e);
  }
}

export const addAndHandleCircles = (uid, circleName, circleDescription, circleUsers) => async (dispatch) => {
  dispatch(postingFeedData())
  let newCircle = await addCircle(uid, circleName, circleDescription, circleUsers);
  // if (newCircle) {
  //   dispatch(postingCirclesSuccess(newCircle));
  // }
  dispatch(postingCirclesSuccess(circleName, circleDescription, circleUsers))
  try {
  } catch(e) {
    postingReplyError(e);
  }
}
//TODO think about how to update newCircle information
//1) property by property or 2) entire object
export const updateNewCircleText = (newCircleText) => {
  return {
    type: UPDATE_NEWCIRCLE_TEXT,
    newCircleText,
  }
}

export const fetchAndHandleEntities = (uid) => async (dispatch) => {
  dispatch(fetchingEntities());
  try {
    let entities = await fetchEntities(uid);
    if (entities) {
      dispatch(fetchingEntitiesSuccess(entities));
    } else {
      //handle non posts
    }
  } catch(e) {
    fetchingEntitiesError(e);
  }
}

export const addToCircle = (entityId) => async (dispatch) => {
  dispatch(addingToCircle(entityId));
  try {
    //dispatch(addingLike(postId));
  } catch(e) {

  }
}

export const removeFromCircle = (entityId) => async (dispatch) => {
  dispatch(removingFromCircle(entityId));
  try {
    //dispatch(addingLike(postId));
  } catch(e) {

  }
}

export const toggleHealthGoal = (sectionId, healthCardId) => async (dispatch) => {
  dispatch(togglingHealthGoal(sectionId, healthCardId));
}

export const fetchAndHandleHealthCards = (uid) => async (dispatch) => {
  dispatch(fetchingHealthCards());
  try {
    let healthCards = await fetchHealthCards(uid);
    if (healthCards) {
      dispatch(fetchingHealthCardsSuccess(healthCards));
    } else {
      //handle non posts
    }
  } catch(e) {
    fetchingHealthCardsError(e);
  }
}



