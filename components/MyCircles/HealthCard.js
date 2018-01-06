import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import PageIndicator from '../UI/PageIndicator';

import {
  healthCardStyles,
} from './styles';

const HealthCard = (props) => {

  const { name, backgroundColor, image } = props;

  return (
    <Image
      source={{uri: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'}}
      style={healthCardStyles.image} >

      <View style={healthCardStyles.shape} />

      <View style={healthCardStyles.textContainer}>
        <Text style={healthCardStyles.text}>{name}</Text>
      </View>

    </Image>
  )
}

export default HealthCard;
