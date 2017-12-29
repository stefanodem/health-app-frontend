import React from 'react';
import {
  View,
} from 'react-native';

import {
  post,
} from './styles';

import PostHeader from './Header/PostHeader';
import PostBody from './Body/PostBody';
import PostInteractionBar from './InteractionBar/PostInteractionBar';
import PostInteractionInfo from './InteractionBar/PostInteractionInfo';

const Post = (props) => {

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
        name={name}
        avatar={avatar}
        createdAt={createdAt}
        onProfilePress={onProfilePress}
      />

      <PostBody
        body={body}
      />

      <PostInteractionInfo
        likeCount={likeCount}
        replyCount={replyCount}
      />

      <PostInteractionBar
        liked={liked}
        handleLikes={handleLikes}
        handleComments={handleComments}
        handleShares={handleShares}
      />

    </View>
  );
}

export default Post;
