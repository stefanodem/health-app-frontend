// import { ref } from 'config/constants';
// import axios from 'axios';
import { testUser } from '../../testData/testUser';
import { user, posts, replies, entities } from '../../testData/testUser2';
import { feed } from '../../testData/feedDummyData';

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

export const fetchUserPosts = (uid, circleId) => {
  const feedz = typeof circleId === 'number' ? feed[circleId] : posts;

  return new Promise(resolve => setTimeout(() => resolve(feedz), 1000));
}

export const fetchUserLikes = (uid) => {
  const { userInfo } = testUser;
  return new Promise(resolve => setTimeout(() => resolve(user), 1000));
}

export const fetchReplies = (postId) => {
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


