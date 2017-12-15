import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

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
        style={ replyInput.container }
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
          {/*<Icon
            name="send"
            color="rgb(0,122,255)"
          />*/}
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

export default ReplyInput;
