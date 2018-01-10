import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NewCircleSettings, ButtonBack, ButtonRight} from '../../components';

class NewCircleSettingsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      title: 'New Circle',
      headerTitle: 'New Circle',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="create"
          onPress={() => navigate("NewCircleAccess")} />
      ),
    }
  }

  render() {
    const { updateNewCircleText } = this.props;
    const { usersInCircle, circleName } = this.props.myCircles.addCircle;
    const defaultAvatar = 'http://www.free-icons-download.net/images/black-camera-logo-icon-47221.png'

    return (
      <NewCircleSettings
        avatar={defaultAvatar}
        createdAt={Date.now()}
        sendTo={usersInCircle}
        value={circleName}
        onChangeText={updateNewCircleText}
        />
    );
  }
}

function mapStateToProps ({ myCircles }) {
  return {
    myCircles,
  }
}

export default connect(mapStateToProps, actions)(NewCircleSettingsScreen);
