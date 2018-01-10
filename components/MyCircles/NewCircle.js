import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  newCircleStyles,
} from './styles';

import AvatarRowList from '../UI/AvatarRowList';
import Avatar from '../UI/Avatar';

const NewCircle = (props) => {
  const { newPostText, onChangeText, createdAt, sendTo, user } = props;

  return (
    <View
      >

      <View
         >

        <Avatar
          //onPress={ onProfilePress }
          source={ '' } />

        <View
          style={ newCircleStyles.input.container } >

          <TextInput
            style={ newCircleStyles.input.text }
            value={ 'herro' }
            placeholder="Circle Subject"
            onChangeText={ (text) => onChangeReply(text) }
            multiline={ true } />

        </View>

        <Text>{'Please provide a circle subject and optional icon'}</Text>

      </View>

      <AvatarRowList
        sendTo={sendTo}
        rowText={'Circlers: '} />

    </View>
  );
}

export default NewCircle;
