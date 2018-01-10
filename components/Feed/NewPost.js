import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  post, replyInput, newPost
} from './styles';

import NewPostHeader from './Header/NewPostHeader';

const NewPost = (props) => {
  const { newPostText, onChangeText, createdAt, sendTo, user } = props;

  return (
    <View style={ post.mainStyle }>

      <NewPostHeader
        name={user.name}
        avatar={user.avatar}
        sendTo={sendTo}
        createdAt={createdAt} />

      <TextInput
        autoFocus
        style={newPost.textInput}
        value={newPostText}
        placeholder={"What would you like to share?"}
        onChangeText={ (text) => onChangeText(text) }
        multiline={ true } />

    </View>
  );
}

export default NewPost;
