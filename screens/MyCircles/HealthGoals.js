import React, { Component } from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import { HealthCardSection, PageIndicator, ButtonBack, ButtonRight } from '../../components';

import { user } from '../../testData/testUser2';

class HealthGoalsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      title: 'Health Goals',
      headerTitle: 'Choose Your Health Goals',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="create"
          onPress={() => navigate("InviteToCircle")} />
      ),
    }
  }

  componentDidMount () {
    this.props.fetchAndHandleHealthCards(this.props.user.userInfo.uid);
  }

  _keyExtractor = (item, index) => item.id;

  _renderHealthCardSection = ({ item }) => {
    const { toggleHealthGoal } = this.props;

    return (
      <HealthCardSection
        sectionId={item.id}
        onPress={toggleHealthGoal}
        title={item.title}
        data={item.data} />
    )
  }

  render() {
    const { navigation } = this.props;
    const { healthCards, isFetching } = this.props.myCircles;

    //const { circleId } = this.props.circles;
    //const circles = this.props.myCircles.circles;

    if (isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={this._keyExtractor}
        data={_values(healthCards)}
        renderItem={ this._renderHealthCardSection } />
    );
  }
}

// const healthGoalsData = [
//   'Diabetes', 'Fitness', 'Diet', 'Sleep', 'Gagi', 'Bisi', 'Fudi', 'Schnäbi', 'Pimmeli'
// ]

// const healthGoalsSections = [
//   {id: 1, title: 'RECOMMENDED FOR YOU', data: healthGoalsData},
//   {id: 2, title: 'HEALTH CONDITIONS', data: healthGoalsData},
//   {id: 3, title: 'LIFESTYLE', data: healthGoalsData},
//   {id: 4, title: 'EATING HEALTHY', data: healthGoalsData},
// ]



function mapStateToProps({ user, myCircles }) {
  return {
    user,
    myCircles,
  }
}

export default connect(mapStateToProps, actions)(HealthGoalsScreen);

