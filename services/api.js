// import { ref } from 'config/constants';
// import axios from 'axios';
import { testUser } from '../testData/testUser';

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
export const fetchPost = (uid) => {
  const { posts } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(posts), 2000));
}

//TODO: Hook up to backend
export const fetchUser = (uid) => {
  const { userInfo } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(userInfo), 2000));
}