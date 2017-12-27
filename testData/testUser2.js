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
