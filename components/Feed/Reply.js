import React from 'react';
import {
  View,
} from 'react-native';

import {
  post,
} from './styles';

import Header from './Header/Header';
import Body from './Body/Body';

const Reply = (props) => {

  const { body, createdAt } = props.post;
  const { name, avatar } = props.post.user;
  const onProfilePress = props.onProfilePress;

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

      </View>
    )
  }

  return (
    <View>

      { renderMessages() }

    </View>
  );
}

export default Reply;