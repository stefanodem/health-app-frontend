import React from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';

import {
  post,
} from './styles';

import PostHeader from './Header/PostHeader';
import PostBody from './Body/PostBody';
import PostInteractionBar from './InteractionBar/PostInteractionBar';
import PostInteractionInfo from './InteractionBar/PostInteractionInfo';
import { formatTimestamp } from '../../services/utils/feed_utils';

const Post = (props) => {

  const { handleLikes, handleReplies, handleShares, onProfilePress } = props;
  const { body, createdAt, likeCount, postId, liked } = props.post;
  const replyCount = props.post.replyCount;
  const { name, avatar } = props.user;

  //TODO: move underLayColor to styles.js

  return (
    <TouchableHighlight
      underlayColor={'grey'}
      onPress={handleReplies} >

      <View
        style={post.mainStyle} >

        <PostHeader
          name={name}
          avatar={avatar}
          createdAt={formatTimestamp(createdAt)}
          onProfilePress={onProfilePress} />

        <PostBody
          body={body} />

        <PostInteractionInfo
          likeCount={likeCount}
          replyCount={replyCount} />

        <PostInteractionBar
          liked={liked}
          handleLikes={handleLikes}
          handleReplies={handleReplies}
          handleShares={handleShares}
          likeCount={likeCount}
          replyCount={replyCount} />

      </View>

    </TouchableHighlight>
  );
}

export default Post;
