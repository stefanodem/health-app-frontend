// import { ref } from 'config/constants';
// import axios from 'axios';

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

}