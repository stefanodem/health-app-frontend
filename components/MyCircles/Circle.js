import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import {
  circle,
} from './styles';

const Circle = (props) => {

  const { navigate, to } = props;

  //TODO: move underLayColor to styles.js

  return (
    <TouchableOpacity
      style={circle.circleContainer}
      onPress={ () => navigate(to) } >

      <View style={circle.circleShapeView} ></View>

    </TouchableOpacity>
  );
}

export default Circle;
