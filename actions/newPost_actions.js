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
} from './types';

import { fetchEntities, addNewPostText } from '../services/api';

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

const postingNewPost = () => {
  return {
    type: POSTING_NEWPOST,
  }
}

const postingNewPostSuccess = () => {
  return {
    type: POSTING_NEWPOST_SUCCESS,
  }
}

const postingNewPostError = (error) => {
  return {
    type: POSTING_NEWPOST_ERROR,
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

export const clearCircle = () => {
  return {
    type: CLEAR_CIRCLE,
  }
}

export const fetchAndHandleEntities = (uid) => async (dispatch) => {

  console.log(uid)
  dispatch(fetchingEntities());
  try {
    let entities = await fetchEntities(uid);
    console.log(entities)
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

export const addAndHandleNewPost = (entityIds) => async (dispatch) => {
  dispatch(postingNewPost())
  let newPost = await addNewPostText(entityIds);
  // if (reply) {
  //   dispatch(postingReplySuccess(reply));
  // }
  dispatch(postingNewPostSuccess())
  try {
  } catch(e) {
    postingNewPostError(e);
  }
}

export const updateNewPostText = (newPostText) => {
  return {
    type: UPDATE_NEWPOST_TEXT,
    newPostText,
  }
}
