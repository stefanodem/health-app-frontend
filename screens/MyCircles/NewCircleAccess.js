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

    if (navigation.state.params) {
      const { uid, name, description, addAndHandleCircles } = navigation.state.params;
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
            onPress={() => handleNewCircleSubmit(() => addAndHandleCircles(uid, name, description), navigate, "MyCircles")} />
        ),
      }
    }
  }

  componentWillMount () {
    this.props.getSelectedHealthGoals(this.props.myCircles.healthCards);
  }

  componentDidMount(){
    //set navigation params so it can access props data
    const { setParams } = this.props.navigation;
    console.log(this.props)
    setParams({
      uid: this.props.user.userInfo.uid,
      name: this.props.myCircles.addCircle.circleName,
      description: '',
      addAndHandleCircles: this.props.addAndHandleCircles,
    });
  }

  // _filterSelectedHealthGoals = (healthCards) => {
  //   let selectedHealthGoals = [];

  //   for (let i = 0; i < _values(healthCards).length; i++) {
  //     let healthGoals = _values(_values(healthCards)[i].data)
  //     healthGoals.forEach(goal => { if (goal.selected) selectedHealthGoals.push(goal) })
  //   }

  //   return selectedHealthGoals;
  // }

  render() {
    const { addAndHandleCircles } = this.props;
    const { addCircle, isPostingCircles, healthCards } = this.props.myCircles;
    const { usersInCircle, circleName, circleAvatar, healthGoals } = this.props.myCircles.addCircle;

    return (
      <NewCircleAccess
        healthGoals={healthGoals}
        circleName={circleName}
        circleAvatar={circleAvatar}
        usersInCircle={usersInCircle} />
    );
  }
}

function mapStateToProps ({ myCircles, user }) {
  return {
    myCircles,
    user,
  }
}

export default connect(mapStateToProps, actions)(NewCircleAccessScreen);
