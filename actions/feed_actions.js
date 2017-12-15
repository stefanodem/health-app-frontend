import {
  FETCHING_FEED_DATA,
  FETCHING_POSTS_SUCCESS,
  FETCHING_USER_POSTS_SUCCESS,
  FETCHING_REPLIES_SUCCESS,
  FETCHING_POSTS_ERROR,
  ADD_LIKE,
  ADD_REPLY,
  ADD_POST,
  ADD_MULTIPLE_POSTS,
  REMOVE_FETCHING,
} from './types';

import { fetchPosts, fetchUserPosts, fetchReplies } from '../services/api';

const fetchingFeedData = () => {
  return {
    type: FETCHING_FEED_DATA,
  }
}

const fetchingPostsSuccess = () => {
  return {
    type: FETCHING_POSTS_SUCCESS,
  }
}

const fetchingUserPostsSuccess = (posts, lastUpdated) => {
  return {
    type: FETCHING_USER_POSTS_SUCCESS,
    posts,
    lastUpdated,
  }
}

const fetchingRepliesSuccess = (replies) => {
  return {
    type: FETCHING_REPLIES_SUCCESS,
    replies,
  }
}
const fetchingPostsError = (error) => {
  return {
    type: FETCHING_POSTS_ERROR,
    error: error,
  }
}

const addingLike = (postId, likeCount) => {
  return {
    type: ADD_LIKE,
    postId,
    likeCount
  }
}

export const fetchAndHandlePosts = (postId) => async (dispatch) => {
  dispatch(fetchingFeedData());
  try {
    let posts = await fetchPosts();
    if (posts) {
      dispatch(fetchingPostsSuccess());
      return posts;
    } else {
      //handle non posts
    }
  } catch(e) {
    fetchingPostsError(e);
  }
}

export const fetchAndHandleUserPosts = (uid) => async (dispatch) => {
  dispatch(fetchingFeedData());
  try {
    let posts = await fetchUserPosts(uid);
    if (posts) {
      dispatch(
        fetchingUserPostsSuccess(
          posts,
          //Object.keys(posts).sort((a, b) => posts[b].timestamp - posts[a].timestamp),
          Date.now())
      );
    } else {
      //handle non posts
    }
  } catch(e) {
    fetchingPostsError(e);
  }
}

export const fetchAndHandleReplies = (postId) => async (dispatch) => {
  dispatch(fetchingFeedData());
  try {
    let replies = await fetchReplies(postId);
    if (replies) {
      dispatch(
        fetchingRepliesSuccess(
          replies,
          //Object.keys(replies).sort((a, b) => replies[b].timestamp - replies[a].timestamp),
        )
      );
    } else {
      //handle non posts
    }
  } catch(e) {
    fetchingPostsError(e);
  }
}

export const addLike = (postId, likeCount) => async (dispatch) => {
  likeCount++
  dispatch(addingLike(postId, likeCount));
  try {
    //dispatch(addingLike(postId));
  } catch(e) {

  }
}
