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

const InteractionComponent = ({ name, icon, callback, color }) => {
  return (
    <TouchableOpacity
      style={ interaction.component }
      onPress={ callback }
    >
      <Icon
        name={icon}
        color={color}
        style={ interaction.icon }
      />
      <Text style={ interaction.text }> {name} </Text>
    </TouchableOpacity>
  )
}

const InteractionBar = ({ handleLikes, handleComments, handleShares, liked }) => {

  const likeColor = liked ? 'red' : 'black';
  const replyColor = 'black';
  const shareColor = 'black';

  return (
    <View
      style={ interaction.mainContainer }
    >
      <InteractionComponent
        name={"Like"}
        icon={"heart"}
        color={likeColor}
        callback={ handleLikes }
      />
      <InteractionComponent
        name={"Reply"}
        icon={"comment"}
        color={replyColor}
        callback={ handleComments }
      />
      <InteractionComponent
        name={"Share"}
        icon={"share"}
        color={shareColor}
        callback={ handleShares }
      />
    </View>
  );
}

export default InteractionBar;