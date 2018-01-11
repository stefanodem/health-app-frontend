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
import { NewCircleAccess, ButtonBack, ButtonRight } from '../../components';

class NewPostScreen extends Component {

  //TODO: research how to connect react navigation to redux
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    const handleNewCircleSubmit = async (onPress, navigate, to) => {
        await onPress();
        navigate(to);
    }

    return {
      title: 'Circle Access',
      headerTitle: 'Circle Access',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="send"
          onPress={() => handleNewCircleSubmit(() => {}, navigate, "MyCircles")} />
      ),
    }
  }

  render() {
    const { addAndHandleCircles } = this.props;
    const { newPostText, isPosting } = this.props.myCircles;
    const { usersInCircle, circleName, circleAvatar } = this.props.myCircles.addCircle;

    return (
      <NewCircleAccess
        circleName={circleName}
        circleAvatar={circleAvatar}
        usersInCircle={usersInCircle}
        onNewCircleSubmit={addAndHandleCircles} />
    );
  }
}

function mapStateToProps ({ myCircles }) {
  return {
    myCircles,
  }
}

export default connect(mapStateToProps, actions)(NewPostScreen);
