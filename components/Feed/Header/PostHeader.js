import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import Avatar from '../../UI/Avatar';

import {
  postHeader,
} from '../styles';

const PostHeader = (props) => {

  const { name, avatar, createdAt, onProfilePress } = props;

  return (
    <View
      style={ postHeader.container }
    >
      <Avatar
        onPress={ onProfilePress }
        source={ avatar }
      />
      <TouchableOpacity
        onPress={ onProfilePress }
      >
        <View
          style={ postHeader.title }
        >
          <Text style={ postHeader.name }> { name } </Text>
          <Text style={ postHeader.date }> { createdAt } </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PostHeader;
