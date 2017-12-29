import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  post, replyInput,
} from './styles';

import NewPostHeader from './Header/NewPostHeader';

const NewPost = (props) => {
  const { newPostText, onChangeText, createdAt, sendTo } = props;

  //TODO: change to user
  const name = props.name;

  //TODO: add touchable opacity for clicking on whole post

  return (
    <View style={ post.mainStyle }>

      <NewPostHeader
        name={name}
        sendTo={sendTo}
        createdAt={createdAt}
      />

      <TextInput
        value={ newPostText }
        placeholder="What would you like to share?"
        onChangeText={ (text) => onChangeText(text) }
        //style={{flex: 1}}
        multiline={ true }
      />

    </View>
  );
}

export default NewPost;
