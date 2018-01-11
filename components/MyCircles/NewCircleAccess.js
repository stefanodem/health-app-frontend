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

const NewCircleAccess = (props) => {
  const { onNewCircleSubmit, usersInCircle, circleName, circleAvatar, healthGoals } = props;

  _renderSettingsListItems = (healthGoals) => {
    return healthGoals.map(healthGoal => {
      return (
        {/*<SettingsList.Item
          hasNavArrow={false}
          switchState={this.state.switchValue}
          switchOnValueChange={this.onValueChange}
          hasSwitch={true}
          title='Switch Example'/>*/}
      )
    })
  }

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

      <View style={{flex:1, marginTop:50}}>
        <SettingsList>
          <SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/>
            {this._renderSettingsListItems(healthGoals)}
        </SettingsList>
      </View>

      {/*<View style={{flex:1, marginTop:50}}>
        <SettingsList>
        <SettingsList.Header headerText='First Grouping' headerStyle={{color:'white'}}/>
          <SettingsList.Item
            icon={
              <View style={{height:30,marginLeft:10,alignSelf:'center'}}>
                <Image style={{alignSelf:'center',height:30, width:30}} source={require('./images/about.png')}/>
              </View>
            }
            itemWidth={50}
            title='Icon Example'
            onPress={() => Alert.alert('Icon Example Pressed')}
          />
          <SettingsList.Item
            hasNavArrow={false}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasSwitch={true}
            title='Switch Example'/>
          <SettingsList.Item
            title='Different Colors Example'
            backgroundColor='#D1D1D1'
            titleStyle={{color:'blue'}}
            arrowStyle={{color:'blue'}}
            onPress={() => Alert.alert('Different Colors Example Pressed')}/>
          <SettingsList.Header headerText='Different Grouping' headerStyle={{color:'white', marginTop:50}}/>
          <SettingsList.Item titleInfo='Some Information' hasNavArrow={false} title='Information Example'/>
          <SettingsList.Item title='Settings 1'/>
          <SettingsList.Item title='Settings 2'/>
          <SettingsList.Item
            id="stages"
            title='stages'
            isEditable={true}
            value={this.state.stages.toString()}
            onTextChange={(text) => this.setState({stages: text})}
          />
        </SettingsList>
      </View>*/}

    </View>
  );
}

export default NewCircleAccess;
