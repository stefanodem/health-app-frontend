import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Avatar from './Avatar';

import {
  avatarRowListStyle,
} from './styles';

const AvatarRowList = ({ sendTo, rowText }) => {

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
    <View
      style={avatarRowListStyle.container} >

      <Text style={avatarRowListStyle.title}> { rowText } </Text>

      { sendTo &&
        this._renderSendTo(sendTo) }

    </View>
  )
}

export default AvatarRowList;
