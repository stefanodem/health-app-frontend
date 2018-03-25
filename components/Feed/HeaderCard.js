import React from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';

import {
  post,
} from './styles';

import { formatTimestamp } from '../../services/utils/feed_utils';

const HeaderCard = (props) => {

  const { handleLikes, handleReplies, handleShares, onProfilePress } = props;
  const { body, createdAt, likeCount, postId, liked } = props.post;
  const replyCount = props.post.replies.length;
  const { name, avatar } = props.user;

  return (

    <View
      style={post.mainStyle} >



    </View>

  );
}

const replyInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  sendButton: {
    alignSelf: 'center',
    padding: 15,
  },
})

export default Post;
