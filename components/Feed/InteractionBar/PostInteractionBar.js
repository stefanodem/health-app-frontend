import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  postInteraction,
} from '../styles';

const InteractionComponent = ({ name, icon, callback, color }) => {
  return (
    <TouchableOpacity
      style={ postInteraction.component }
      onPress={ callback } >

      <Icon
        name={icon}
        color={color}
        style={ postInteraction.icon } />

      <Text style={ postInteraction.text }> {name} </Text>

    </TouchableOpacity>
  )
}

const PostInteractionBar = ({ handleLikes, handleReplies, handleShares, liked }) => {

  const likeColor = liked ? 'red' : 'black';
  const replyColor = 'black';
  const shareColor = 'black';

  return (
    <View
      style={ postInteraction.mainContainer } >

      <InteractionComponent
        name={"Like"}
        icon={"heart"}
        color={likeColor}
        callback={ handleLikes } />

      <InteractionComponent
        name={"Reply"}
        icon={"comment"}
        color={replyColor}
        callback={ handleReplies } />

      <InteractionComponent
        name={"Share"}
        icon={"share"}
        color={shareColor}
        callback={ handleShares } />

    </View>
  );
}

export default PostInteractionBar;
