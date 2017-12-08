import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_ERROR,
  ADD_POST,
  ADD_MULTIPLE_POSTS,
  REMOVE_FETCHING,
} from './types';

import fetchPost from '../services/api';

import testPosts from '../testData/testUser';

const fetchingPosts = () => {
  return {
    type: FETCHING_POSTS,
  }
}

const fetchingPostsSuccess = () => {
  return {
    type: FETCHING_POSTS_SUCCESS,
  }
}

const fetchingPostsError = (error) => {
  return {
    type: FETCHING_POSTS_ERROR,
    error: error,
  }
}

// const fetchTestPost = () => {
//   return testPosts;
// }

export const fetchAndHandlePosts = (postId) => async (dispatch) => {
  dispatch(fetchingPosts());
  try {
    let posts = await fetchPost();
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
