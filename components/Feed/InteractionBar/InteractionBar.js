import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  interaction,
} from '../styles';

const InteractionComponent = ({ name, icon, callback }) => {
  return (
    <TouchableOpacity
      style={ interaction.componentStyle }
      onPress={ callback }
    >
      <Icon name={icon} style={ interaction.iconStyle }/>
      <Text style={ interaction.textStyle }> {name} </Text>
    </TouchableOpacity>
  )
}

const InteractionBar = ({ handleLikes, handleComments, handleShares }) => {

  // const handleLikes = props.handleLikes;
  // const handleComments = props.handleComments;
  // const handleShares = props.handleShares;

  return (
    <View
      style={ interaction.mainStyle }
    >
      <InteractionComponent
        name={"Like"}
        icon={"heart"}
        callback={ handleLikes }
      />
      <InteractionComponent
        name={"Comment"}
        icon={"comment"}
        callback={ handleComments }
      />
      <InteractionComponent
        name={"Share"}
        icon={"share"}
        callback={ handleShares }
      />
    </View>
  );
}

export default InteractionBar;