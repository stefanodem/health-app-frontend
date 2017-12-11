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

export const fetchPost = (uid) => {
  const { posts } = testUser;
  setTimeout(() => posts, 2000);
}

//TODO: Hook up to backend
export const fetchUser = (uid) => {
  const { userInfo } = testUser;
  setTimeout(() => userInfo, 2000);
}