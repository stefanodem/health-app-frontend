import React from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import buttonStyle from './styles';

export default ({ label, onPress }) => (

  <TouchableHighlight
    underlayColor='#35b5ff'
    onPress={onPress}
    style={buttonStyle.container}
  >

    <Text style={buttonStyle.label}>{label}</Text>

  </TouchableHighlight>
)