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
import { NewCircle, ButtonBack, ButtonRight} from '../../components';

class NewCircleScreen extends Component {

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
          onPress={() => navigate("NewPost")} />
      ),
    }
  }

  render() {
    // const { updateNewPostText, addAndHandleNewPost } = this.props;
    // const { newPostText, isPosting, circle } = this.props.newPost;
    // const { userInfo } = this.props.user;
    const { usersInCircle } = this.props.myCircles.addCircle;

    return (
      <NewCircle
        createdAt={Date.now()}
        sendTo={usersInCircle}
        //newPostText={newPostText}
        //onChangeText={updateNewPostText}
        />
    );
  }
}

function mapStateToProps ({ myCircles }) {
  return {
    myCircles,
  }
}

export default connect(mapStateToProps, actions)(NewCircleScreen);
