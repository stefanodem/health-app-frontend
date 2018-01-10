import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import Avatar from '../../UI/Avatar';
import AvatarRowList from '../../UI/AvatarRowList';
import { formatTimestamp } from '../../../services/utils/feed_utils';

import {
  postHeader, newPost,
} from '../styles';

const NewPostHeader = (props) => {

  const { name, sendTo, createdAt, avatar } = props;

  _renderSendTo = (entities) => {
    return entities.map(entity => {
      return (
        <Avatar
          key={entity.entityId}
          size='small'
          source={entity.avatar} />
      )
    })
  }

  return (
    <View>

      <View
        style={ newPost.header.container } >

        <Avatar
          //onPress={ onProfilePress }
          source={ avatar } />

        <View
          style={ newPost.header.title } >

          <Text style={ newPost.header.name }> { name } </Text>
          <Text style={ newPost.header.date }> { formatTimestamp(createdAt) } </Text>

        </View>

      </View>

      <AvatarRowList
        sendTo={sendTo}
        rowText={'To:'} />

    </View>
  );
}

export default NewPostHeader;
