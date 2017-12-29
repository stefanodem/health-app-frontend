import React from 'react';
import {
  View,
} from 'react-native';

import {
  post,
} from './styles';

import PostHeader from './Header/PostHeader';
import PostBody from './Body/PostBody';

const Reply = (props) => {

  const { body, createdAt } = props.post;
  const { name, avatar } = props.post.user;
  const onProfilePress = props.onProfilePress;

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

    </View>
  );
}

export default Reply;