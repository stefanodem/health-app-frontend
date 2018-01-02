import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import Avatar from '../../UI/Avatar';

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
          <Text style={ newPost.header.date }> { createdAt } </Text>

        </View>

      </View>

      <View
        style={newPost.header.container} >

        <Text style={newPost.header.title}> { 'To: ' } </Text>

        { this._renderSendTo(sendTo) }

      </View>

    </View>
  );
}

export default NewPostHeader;
