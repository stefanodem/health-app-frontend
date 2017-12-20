import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  body,
} from '../styles';

const Body = (props) => {

  const { postBody } = props;

  return (
    <View
      style={ body.container }
    >
      <Text> { postBody } </Text>
    </View>
  );
}

export default Body;