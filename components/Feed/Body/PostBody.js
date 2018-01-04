import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  postBody,
} from '../styles';

const PostBody = (props) => {

  const { body } = props;

  return (
    <View
      style={ postBody.container } >

      <Text style={ postBody.text }> { body } </Text>

    </View>
  );
}

export default PostBody;
