import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import {
  header,
} from '../styles';

const PostHeader = (props) => {

  const { userName, userAvatar, createdAt, onProfilePress } = props;

  return (
    <View
      style={ header.container }
    >
      <TouchableOpacity
        onPress={ onProfilePress }
      >
        <Image
          style={ header.image }
          source={{ uri: userAvatar }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={ onProfilePress }
      >
        <View
          style={ header.title }
        >
          <Text style={ header.name }> { userName } </Text>
          <Text style={ header.date }> { createdAt } </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PostHeader;