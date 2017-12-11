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

const InteractionInfo = ({ likeCount, replyCount, commentCount }) => {

  return (
    <View
      style={ interaction.infoContainer }
    >

      <Text
        style={ interaction.infoText }
      >
        { `Likes: ${likeCount}` }
      </Text>

      <Text
        style={ interaction.infoText }
      >
        { `Replies: ${replyCount}` }
      </Text>

    </View>
  );
}

export default InteractionInfo;