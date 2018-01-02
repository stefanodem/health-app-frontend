import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  titleStyle,
} from './styles';

const Title = ({ name, createdAt, horizontal, stacked }) => {
  let style = titleStyle.stacked;

  if (horizontal) {
    style = titleStyle.horizontal;
  }

  return (
    <View
      style={ style.title } >

      <Text style={ style.name }> { name } </Text>
      <Text style={ style.date }> { createdAt } </Text>

    </View>
  )
}

export default Title;
