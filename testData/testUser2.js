export const user = {
  lastUpdated: null,
  userInfo: {
    uid: '11111',
    name: 'Steve the Chief',
    avatar: 'http://profile.actionsprout.com/default.jpeg',
  },
  posts: [1, 2, 3, 4, 5, 6],
}

export const entities = {
  1234: {
    name: 'Dr. Schmock',
    type: 'person',
    entityId: 1234,
    avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
    users: {
      1234: {
        uid: 1234,
        name: 'Dr. Schmock',
        avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
      },
    },
  },
  9999: {
    name: 'Circle of Trust',
    type: 'group',
    entityId: 9999,
    avatar: 'https://pbs.twimg.com/profile_images/420241225283674113/xoCDeFzV.jpeg',
    users: {
      1234: {
        uid: 1234,
        name: 'Steve the Chief',
        avatar: 'http://profile.actionsprout.com/default.jpeg',
      },
      5678: {
        uid: 5678,
        name: 'Dr. Schmock',
        avatar: 'http://profile.actionsprout.com/default.jpeg',
      },
    },
  },
  3453: {
    name: 'Coach Coughlin',
    type: 'person',
    entityId: 3453,
    avatar: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2013/11-november/131114-coughlin-300.jpg',
    users: {
      3453: {
        uid: 3453,
        name: 'Coach Coughlin',
        avatar: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2013/11-november/131114-coughlin-300.jpg',
      },
    },
  },
}

export const posts = {
  1: {
    lastUpdated: null,
    postId: 1,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 1,
    liked: true,
    replies: [1, 2],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
  2: {
    lastUpdated: null,
    postId: 2,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 2,
    liked: false,
    replies: [3, 4],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
  3: {
    lastUpdated: null,
    postId: 3,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 3,
    liked: false,
    replies: [5, 6],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
  4: {
    lastUpdated: null,
    postId: 4,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 4,
    liked: false,
    replies: [7, 8],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
  5: {
    lastUpdated: null,
    postId: 5,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 5,
    liked: false,
    replies: [9, 10],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
  6: {
    lastUpdated: null,
    postId: 6,
    user: {
      uid: '11111',
      name: 'Steve the Chief',
      avatar: 'http://profile.actionsprout.com/default.jpeg',
    },
    createdAt: 1511854675244,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likeCount: 6,
    liked: false,
    replies: [11, 12],
    shares: [
      {
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
      },
    ]
  },
}

export const replies = {
  1: {
    postId: 1,
    lastUpdated: null,
    replies: {
      1: {
        replyId: 1,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "1 Thats so cool man"
      },
      2: {
        replyId: 2,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "2 No way bro"
      },
    }
  },
  2: {
    postId: 2,
    lastUpdated: null,
    replies: {
      3: {
        replyId: 3,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "3 Thats so cool man"
      },
      4: {
        replyId: 4,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "4 No way bro"
      },
    }
  },
  3: {
    postId: 3,
    lastUpdated: null,
    replies: {
      5: {
        replyId: 5,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "5 Thats so cool man"
      },
      6: {
        replyId: 6,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "6 No way bro"
      },
    }
  },
  4: {
    postId: 4,
    lastUpdated: null,
    replies: {
      7: {
        replyId: 7,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "7 Thats so cool man"
      },
      8: {
        replyId: 8,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "8 No way bro"
      },
    }
  },
  5: {
    postId: 5,
    lastUpdated: null,
    replies: {
      9: {
        replyId: 9,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "9 Thats so cool man"
      },
      10: {
        replyId: 10,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "10 No way bro"
      },
    }
  },
  6: {
    postId: 6,
    lastUpdated: null,
    replies: {
      11: {
        replyId: 11,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "11 Thats so cool man"
      },
      12: {
        replyId: 12,
        user: {
          uid: '123',
          name: 'SpongeBob',
          avatar: 'http://www.avatarsdb.com/avatars/spongebob_happy.jpg',
        },
        createdAt: 1511854675244,
        body: "12 No way bro"
      }
    }
  }
}

export const circles = {
  1: {
    circleId: 1,
    circle: "Managing my Diabetes",
    lastUpdated: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  2: {
    circleId: 2,
    circle: 'Fitness',
    lastUpdated: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  3: {
    circleId: 3,
    circle: 'Paleo Diet',
    lastUpdated: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
  4: {
    circleId: 4,
    circle: 'Sleep',
    lastUpdated: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
}

const healthCards1 = {
  1: { id: 1, name: 'Diabetes', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  2: { id: 2, name: 'Fitness', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  3: { id: 3, name: 'Diet', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  4: { id: 4, name: 'Sleep', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  5: { id: 5, name: 'Gagi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  6: { id: 6, name: 'Bisi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  7: { id: 7, name: 'Fudi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  8: { id: 8, name: 'Schnäbi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  9: { id: 9, name: 'Pimmeli', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
}

const healthCards2 = {
  10: { id: 10, name: 'Diabetes', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  11: { id: 11, name: 'Heart Disease', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  12: { id: 12, name: 'Depression', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  13: { id: 13, name: 'Insomnia', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  14: { id: 14, name: 'Gagi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  15: { id: 15, name: 'Bisi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  16: { id: 16, name: 'Fudi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  17: { id: 17, name: 'Schnäbi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  18: { id: 18, name: 'Pimmeli', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
}

const healthCards3 = {
  19: { id: 19, name: 'Cycling', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  20: { id: 20, name: 'Fitness', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  21: { id: 21, name: 'Sleep Walking', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  22: { id: 22, name: 'Diet', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  23: { id: 23, name: 'Gagi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  24: { id: 24, name: 'Bisi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  25: { id: 25, name: 'Fudi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  26: { id: 26, name: 'Schnäbi', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
  27: { id: 27, name: 'Pimmeli', selected: false, backgroundImage: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg', color: 'red' },
}

export const healthCardSections = {
  1: {id: 1, title: 'RECOMMENDED FOR YOU', data: healthCards1},
  2: {id: 2, title: 'HEALTH CONDITIONS', data: healthCards2},
  3: {id: 3, title: 'LIFESTYLE', data: healthCards3},
}


