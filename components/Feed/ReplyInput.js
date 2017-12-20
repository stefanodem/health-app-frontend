import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-elements';

import {
  replyInput,
} from './styles';

const _renderSendButton = (isPosting) => {
  if (isPosting) {
    return (
      <ActivityIndicator size="small" />
    )
  }

  return (
    <Icon
      name="send"
      color="rgb(0,122,255)"
    />
  )
}

const ReplyInput = (props) => {

  const { onChangeReply, onReplySubmit, replyText, userId, postId, isPosting } = props;

  //TODO: the value should be derived from redux
  //--> hook up value to Reply.js and pass to ReplyInput as props
  //TODO: find better solution than hardcode keyboardVerticalOffset
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={ 70 }
      behavior="padding"
    >
      <View
        style={ replyInput.container }
      >

        <TextInput
          value={ replyText }
          placeholder="Reply"
          onChangeText={ (text) => onChangeReply(text) }
          style={ replyInput.input }
          multiline={ true }
        />

        <TouchableOpacity
          onPress={ () => onReplySubmit(userId, postId, replyText) }
        >

          <View
            style={ replyInput.sendButton }
          >

            {_renderSendButton(isPosting)}

          </View>

        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

export default ReplyInput;
