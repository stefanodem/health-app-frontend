// import { ref } from 'config/constants';
// import axios from 'axios';
import { testUser } from '../testData/testUser';
import { user, posts, replies } from '../testData/testUser2';

// function saveUser (user, userId) {
//   return ref.child(`usersDucks/${user.uid}/${userId}`)
//     .set({...user, userId})
// }

// export function fetchUser (uid) {
//   return ref.child(`users/${uid}`).once('value')
//     .then((snapshot) => snapshot.val())
// }
// --> current reducer expects following object:
// {
//   name: '',
//   uid: '',
//   avatar: '',
// },

//TODO: Hook up to backend
export const fetchPosts = (postId) => {
  return new Promise(resolve => setTimeout(() => resolve(posts), 1000));
}

export const fetchUserPosts = (uid) => {
  return new Promise(resolve => setTimeout(() => resolve(posts), 1000));
}

export const fetchReplies = (postId) => {
  return new Promise(resolve => setTimeout(() => resolve({ [postId]: replies[postId] }), 500));
}

//TODO: Hook up to backend
export const fetchUser = (uid) => {
  const { userInfo } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(user), 1000));
}