import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import Avatar from '../../UI/Avatar';

import {
  postHeader,
} from '../styles';

const NewPostHeader = (props) => {

  const { name, sendTo, createdAt } = props;

  _renderSendTo = (entities) => {
    return entities.map(entity => {
      return (
        <Avatar
          key={entity.entityId}
          size='small'
          source={entity.avatar}
        />
      )
    })
  }

  return (
    <View>

      <View
        style={ postHeader.container }
      >

        <View
          style={ postHeader.title }
        >
          <Text style={ postHeader.name }> { name } </Text>
          <Text style={ postHeader.date }> { createdAt } </Text>
        </View>

      </View>

      <View
        style={{flexDirection: 'row'}}
      >
        <Text> { 'To: ' } </Text>
        { this._renderSendTo(sendTo) }
      </View>

    </View>
  );
}

export default NewPostHeader;
