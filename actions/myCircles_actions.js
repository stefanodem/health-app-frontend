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
} from './types';

import { fetchPosts, fetchUserPosts, fetchReplies, addReplyText } from '../services/api';

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
