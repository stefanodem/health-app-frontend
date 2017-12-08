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

const Header = (props) => {

  const { userName, userAvatar, postDate, onProfilePress } = props;

  return (
    <View
      style={ header.mainStyle }
    >
      <TouchableOpacity
        onPress={ onProfilePress }
      >
        <Image
          style={ header.imageStyle }
          source={{ uri: userAvatar }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={ onProfilePress }
      >
        <View
          style={ header.titleStyle }
        >
          <Text style={ header.nameStyle }> { userName } </Text>
          <Text style={ header.dateStyle }> { postDate } </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Header;