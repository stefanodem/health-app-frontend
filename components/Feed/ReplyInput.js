import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  replyInput,
} from './styles';

const ReplyInput = (props) => {

  const { onChangeReply } = props;

  return (
    <View
      style={ replyInput.mainStyle }
    >

      <TextInput
        placeholder="Reply"
        onChangeText={ onChangeReply }
        keyboardType="default"
        returnKeyType="send"
      />

      <TouchableOpacity
        style={ replyInput.submitButton }
      >
      </TouchableOpacity>

    </View>
  );
}

export default ReplyInput;
