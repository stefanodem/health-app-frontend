import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  avatarStyle,
} from './styles';

const Avatar = ({ onPress, source, size }) => {
  let style = avatarStyle.default;

  if (size === 'small') {
    style = avatarStyle.small;
  } else if (size === 'medium') {
    style = avatarStyle.medium;
  } else if (size === 'large') {
    style = avatarStyle.large;
  };

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={ onPress } >

        <Image
          style={ style }
          source={{ uri: source }} />

      </TouchableOpacity>
    )
  } else {
    return (
      <Image
        style={ style }
        source={{ uri: source }} />
    )
  }
}

export default Avatar;
