//Users
const users = {
  uid:,
  firstName:,
  secondName:,
  email:,
  profileImage:,
  language:,
  location:,
  description:,
  createdAt:,
  timeZone:,
  lastUpdate:,
  posts:
    [
      //postID?
      1, 2, 3, 4
    ],
}

const posts = {
  id:
  user: {
    uid: ,
    name: ,
    screenName: ,
    profileImage: ,
  }
  body: ,
  likeCount: ,
  type: ,
  replies: [
    //replyId?
    1, 2, 3, 4
  ],
  timestamp: ,
}

const replies = {
  id: ,
  replier: {
    uid: ,
    name: ,
    screenName: ,
    profileImage: ,
  }
  body: ,
  timestamp: ,
}

const shares = {
  id: ,
  sharingUid: ,
  sharedUid: ,
  timestamp: ,
}

const feed = {
  uid:
    [
      {
        postID: ,

      }
    ]
}

const privateMessage = {
  id:,
  userSenderId:,
  userReceiverId:,
  content:,
  title:,
  sendDate:,
}