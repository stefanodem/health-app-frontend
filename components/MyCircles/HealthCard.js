import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

import PageIndicator from '../UI/PageIndicator';

import {
  healthCardStyles,
} from './styles';

const HealthCard = (props) => {

  const { name, backgroundImage, color, selected } = props;
  //let icon = '';
  let backgroundColor = 'red';

  if (selected) backgroundColor = 'green';

  return (
    <Image
      source={{uri: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'}}
      style={healthCardStyles.image} >

      <View style={[healthCardStyles.shape, { backgroundColor: backgroundColor }]} />

      <View style={healthCardStyles.textContainer}>
       {/* <View style={ { justifyContent: 'flex-end' } }>
          <Icon
            //iconStyle={ { justifyContent: 'flex-end' } }
            size={35}
            name={icon}
            color={iconColor} />
        </View>*/}
        <Text style={healthCardStyles.text}>{name}</Text>
      </View>

    </Image>
  )
}

export default HealthCard;
