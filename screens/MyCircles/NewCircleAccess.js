import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import _values from 'lodash/values';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { NewCircleAccess, ButtonBack, ButtonRight } from '../../components';

class NewCircleAccessScreen extends Component {

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

  componentWillMount () {
    this.props.getSelectedHealthGoals(this.props.myCircles.healthCards);
  }

  render() {
    const { addAndHandleCircles, toggleCircleDataAccess } = this.props;
    const { addCircle, isPostingCircles, healthCards } = this.props.myCircles;
    const { usersInCircle, circleName, circleAvatar, healthGoals } = this.props.myCircles.addCircle;

    return (
      <NewCircleAccess
        healthGoals={_values(healthGoals)}
        circleName={circleName}
        circleAvatar={circleAvatar}
        usersInCircle={usersInCircle}
        toggleCircleDataAccess={toggleCircleDataAccess}
        onNewCircleSubmit={addAndHandleCircles} />
    );
  }
}

function mapStateToProps ({ myCircles }) {
  return {
    myCircles,
  }
}

export default connect(mapStateToProps, actions)(NewCircleAccessScreen);
