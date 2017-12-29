import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ButtonBack from '../components/Navigation/Header/ButtonBack';
import ButtonRight from '../components/Navigation/Header/ButtonRight';
import NewPost from '../components/Feed/NewPost';

class NewPostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    return {
      title: 'Add a new post',
      headerTitle: 'Add a new post', //can be String, React Element or React Component
      //header: can be React Element or a function --> for customizing headers
      //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
      headerLeft: (
        <ButtonBack
          onPress={ goBack }
        />
      ), // TODO: change ButtonRight to receive onPress method (onNewPostSubmit)
      headerRight: (
        <ButtonRight
          icon="send"
          navigate={navigate}
          to="Feed"
        />
      ),
    }
  }

  //function: for each uid in this.props.newPost.cirlce
  //--> retrieve entities object and send to NewPost component

  render() {
    const { updateNewPostText, addAndHandleNewPost } = this.props;
    const { newPostText, isPosting, circle } = this.props.newPost;

    return (
      <NewPost
        name='Fridli'
        //user={this.props.user}
        createdAt={Date.now()}
        body='Hi'
        sendTo={circle}
        newPostText={newPostText}
        onChangeText={updateNewPostText}
      />
    );
  }
}

function mapStateToProps ({ newPost }) {
  return {
    newPost,
  }
}

export default connect(mapStateToProps, actions)(NewPostScreen);
