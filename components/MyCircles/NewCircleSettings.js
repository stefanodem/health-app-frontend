import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  newCircleStyles,
} from './styles';

import { FormLabel, FormInput } from 'react-native-elements';
import AvatarRowList from '../UI/AvatarRowList';
import Avatar from '../UI/Avatar';

const NewCircleSettings = (props) => {
  const { newPostText, onChangeText, createdAt, sendTo, user, avatar, value } = props;

  return (
    <View
      >

      <View
        style={ newCircleStyles.container } >

        <Avatar
          //onPress={ onProfilePress }
          size={'small'}
          source={ avatar } />

        <View
          style={ newCircleStyles.input }
          >

          <FormLabel>Circle Name</FormLabel>
          <FormInput
            autoFocus
            value={value}
            onChangeText={ (text) => onChangeText(text) }
            />

        </View>


      </View>


      <Text style={newCircleStyles.description} >{'Please provide a circle subject and optional icon'}</Text>

      <AvatarRowList
        sendTo={sendTo}
        rowText={'Circlers: '} />

    </View>
  );
}

export default NewCircleSettings;
