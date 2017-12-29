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

const PostInteractionInfo = ({ likeCount, replyCount, commentCount }) => {

  return (
    <View
      style={ postInteraction.infoContainer }
    >

      <Text
        style={ postInteraction.infoText }
      >
        { `Likes: ${likeCount}` }
      </Text>

      <Text
        style={ postInteraction.infoText }
      >
        { `Replies: ${replyCount}` }
      </Text>

    </View>
  );
}

export default PostInteractionInfo;
