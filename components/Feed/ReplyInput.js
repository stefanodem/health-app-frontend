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

  const { onChangeReply } = props;

  //TODO: the value should be derived from redux
  //--> hook up value to Reply.js and pass to ReplyInput as props
  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
      <View
        style={ replyInput.mainStyle }
      >

        <TextInput
          //value={ "Hi" }
          placeholder="Reply"
          onChangeText={ onChangeReply }
          keyboardType="default"
          returnKeyType="send"
          style={ replyInput.input }
        />

        <TouchableOpacity onPress={() => {}}>
          <Text style={replyInput.send}>Send</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

export default ReplyInput;
