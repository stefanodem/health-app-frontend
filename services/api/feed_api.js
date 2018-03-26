import axios from 'axios';
import { ROOT_URL } from '../../config/constants';
import { normalize } from 'normalizr';
import { postListSchema, replyListSchema } from '../../store/schema';
import { testUser } from '../../testData/testUser';
import { user, posts, replies, entities } from '../../testData/testUser2';
import { feed } from '../../testData/feedDummyData';

export const fetchUserPosts = async (uid, circleId) => {
  try {
    const url = ROOT_URL + `/users/${uid}/circles/${circleId}/posts`;
    let response = await axios.get(url);
    const normalized_response = normalize(response.data.posts, postListSchema);
    return normalized_response.entities.posts;
  } catch(e) {
    return e;
  }
}

export const fetchReplies = async (postId) => {
  try {
    const url = ROOT_URL + `/posts/${postId}/replies`;
    let response = await axios.get(url);
    const normalized_response = normalize(response.data.replies, replyListSchema);
    return normalized_response.entities.replies;
  } catch(e) {
    return e;
  }
}

export const handleLike = async (uid, postId, addLike) => {
  try {
    const url = ROOT_URL + `/users/${uid}/posts/${postId}/like`;
    let response = addLike ? await axios.post(url) : await axios.delete(url);
    return response;
  } catch(e) {
    return e;
  }
}

//TODO: Hook up to backend
export const fetchPosts = (postId) => {
  return new Promise(resolve => setTimeout(() => resolve(posts), 1000));
}

export const fetchUserPosts2 = (uid, circleId) => {
  const feedz = typeof circleId === 'number' ? feed[circleId] : posts;

  return new Promise(resolve => setTimeout(() => resolve(feedz), 1000));
}

export const fetchUserLikes = (uid) => {
  const { userInfo } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(user), 1000));
}

export const fetchReplies2 = (postId) => {
  return new Promise(resolve => setTimeout(() => resolve({ [postId]: replies[postId] }), 500));
}

export const fetchUser = (uid) => {
  const { userInfo } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(user), 1000));
}

export const addReplyText = (userId, postId, replyText) => {
  //TODO: handle replyId generation --> probably on backend side
  const reply = {
      replyId: 13,
      user: {
        uid: '123456',
        name: 'Stefano De Micheli',
        avatar: 'http://profile.actionsprout.com/default.jpeg',
      },
      createdAt: Date.now(),
      body: replyText,
    };
  return new Promise(resolve => setTimeout(() => resolve(reply), 1000));
}

export const fetchEntities = (uid) => {
  return new Promise(resolve => setTimeout(() => resolve(entities), 300));
}

export const addNewPostText = (entityId, newPostText) => {

}


