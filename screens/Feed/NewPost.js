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
import ButtonBack from '../../components/Navigation/Header/ButtonBack';
import ButtonRight from '../../components/Navigation/Header/ButtonRight';
import NewPost from '../../components/Feed/NewPost';

class NewPostScreen extends Component {

  //TODO: research how to connect react navigation to redux
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    const handleNewPostSubmit = async (onPress, navigate, to) => {
        await onPress();
        navigate(to);
    }

    return {
      title: 'Add a new post',
      headerTitle: 'Add a new post',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="send"
          onPress={() => handleNewPostSubmit(() => {}, navigate, "Feed")} />
      ),
    }
  }

  //--> retrieve entities object and send to NewPost component

  render() {
    const { updateNewPostText, addAndHandleNewPost } = this.props;
    const { newPostText, isPosting, circle } = this.props.newPost;
    const { userInfo } = this.props.user;

    //TODO: create newPost bar that allows you to attach other formats besides text (e.g. health data)
    return (
      <NewPost
        user={userInfo}
        createdAt={Date.now()}
        sendTo={circle}
        newPostText={newPostText}
        onChangeText={updateNewPostText}
        onNewPostSubmit={addAndHandleNewPost} />
    );
  }
}

function mapStateToProps ({ newPost, user }) {
  return {
    newPost,
    user,
  }
}

export default connect(mapStateToProps, actions)(NewPostScreen);
