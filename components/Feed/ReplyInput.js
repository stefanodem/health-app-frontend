import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

import {
  replyInput,
} from './styles';

const ReplyInput = (props) => {

  const { onChangeReply, handleReply } = props;

  //TODO: the value should be derived from redux
  //--> hook up value to Reply.js and pass to ReplyInput as props
  //TODO: find better solution than hardcode keyboardVerticalOffset
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={ 70 }
      behavior="padding"
    >
      <View
        style={ replyInput.mainStyle }
      >

        <TextInput
          //value={ "Hi" }
          placeholder="Reply"
          onChangeText={ onChangeReply }
          style={ replyInput.input }
          multiline={ true }
        />

        <TouchableOpacity
          onPress={ handleReply }
        >
          <Text style={replyInput.send}>Send</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

export default ReplyInput;
