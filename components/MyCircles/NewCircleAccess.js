import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import SettingsList from 'react-native-settings-list';

import { Avatar, AvatarRowList } from '../UI';

import {
  newCircleAccesStyles
} from './styles';

const _renderSettingsListItems = (healthGoals) => {
  return healthGoals.map(healthGoal => {

    return (
      <SettingsList.Item
        key={healthGoal.id}
        hasNavArrow={false}
        switchState={() => {}}
        switchOnValueChange={() => {}}
        hasSwitch={true}
        title={healthGoal.name}/>
    )
  })
}

const NewCircleAccess = (props) => {
  const { usersInCircle, circleName, circleAvatar, healthGoals } = props;

  return (
    <View>

      <View
        style={ newCircleAccesStyles.container } >

        <Avatar
          //onPress={ onProfilePress }
          source={ circleAvatar } />

        <View
          style={ newCircleAccesStyles.title } >

          <Text style={ newCircleAccesStyles.name }> { circleName } </Text>

        </View>

      </View>

      <AvatarRowList
        sendTo={usersInCircle}
        rowText={'Circlers: '} />

      <View>
        <SettingsList>
          <SettingsList.Header headerText='Define data access to your circle' headerStyle={{color:'black'}}/>
            {_renderSettingsListItems(healthGoals)}
        </SettingsList>
      </View>

    </View>
  );
}

export default NewCircleAccess;
