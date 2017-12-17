import React from 'react';
import {
  View,
} from 'react-native';

import {
  post,
} from './styles';

import Header from './Header/Header';
import Body from './Body/Body';
import InteractionBar from './InteractionBar/InteractionBar';
import InteractionInfo from './InteractionBar/InteractionInfo';

const Post = (props) => {

  const { body, createdAt, likeCount, postId, liked } = props.post;
  const replyCount = props.post.replies.length;
  const { name, avatar } = props.user;
  const handleLikes = props.handleLikes;
  const handleComments = props.handleComments;
  const handleShares = props.handleShares;
  const onProfilePress = props.onProfilePress;

  //TODO: add touchable opacity for clicking on whole post
  const renderMessages = () => {
    return (
      <View style={ post.mainStyle }>

        <Header
          userName={name}
          userAvatar={avatar}
          createdAt={createdAt}
          onProfilePress={onProfilePress}
        />

        <Body
          postBody={body}
        />

        <InteractionInfo
          likeCount={likeCount}
          replyCount={replyCount}
        />

        <InteractionBar
          liked={liked}
          handleLikes={handleLikes}
          handleComments={handleComments}
          handleShares={handleShares}
        />

      </View>
    )
  }

  return (
    <View>

      { renderMessages() }

    </View>
  );
}

export default Post;