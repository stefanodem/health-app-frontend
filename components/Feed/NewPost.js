import React from 'react';
import {
  View,
} from 'react-native';

import {
  post,
} from './styles';

import PostHeader from './Header/PostHeader';

const NewPost = (props) => {

  const { body, createdAt, likeCount, postId, liked } = props.post;
  const replyCount = props.post.replies.length;
  const { name, avatar } = props.user;
  const handleLikes = props.handleLikes;
  const handleComments = props.handleComments;
  const handleShares = props.handleShares;
  const onProfilePress = props.onProfilePress;

  //TODO: add touchable opacity for clicking on whole post


  return (
    <View style={ post.mainStyle }>

      <PostHeader
        userName={name}
        userAvatar={avatar}
        createdAt={createdAt}
        onProfilePress={onProfilePress}
      />

    </View>
  );
}

export default NewPost;
