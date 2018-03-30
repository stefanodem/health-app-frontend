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
import { NewPost, ButtonBack, ButtonRight } from '../../components';

class NewPostScreen extends Component {

  //TODO: research how to connect react navigation to redux
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    //const { addAndHandleNewPost, circleId } = navigation.state.params

    const handleNewPostSubmit = async (onPress, navigate, to, navParams) => {
        await onPress();
        navigate(to, navParams);
    }

    if (navigation.state.params) {
      const { addAndHandleNewPost, uid, circleId, newPostText } = navigation.state.params;

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
            onPress={() => handleNewPostSubmit(() => addAndHandleNewPost(uid, circleId, newPostText), navigate, "Feed", circleId)} />
        ),
      }
    }
  }

//it seems setParams is called when newPostText is empty
//need to find way to call setParams after text is finished
  componentDidMount(){
    //set navigation params so it can access props data
    const { setParams } = this.props.navigation;
    setParams({
      addAndHandleNewPost: this.props.addAndHandleNewPost,
      circleId: this.props.feed.circleId,
      uid: this.props.user.userInfo.uid,
      newPostText: this.props.feed.newPostText,
    });
  }

  _setParams (setParams) {
    //const { setParams } = this.props.navigation;
    setParams({
      addAndHandleNewPost: this.props.addAndHandleNewPost,
      circleId: this.props.feed.circleId,
      uid: this.props.user.userInfo.uid,
      newPostText: this.props.feed.newPostText,
    });
  }

  render() {
    const { updateNewPostText, addAndHandleNewPost } = this.props;
    const { newPostText, isPosting, circleId } = this.props.feed;
    const { usersInCircle } = this.props.myCircles.addCircle;
    const { userInfo } = this.props.user;
    const { setParams } = this.props.navigation;


    //TODO: create newPost bar that allows you to attach other formats besides text (e.g. health data)
    return (
      <NewPost
        user={userInfo}
        createdAt={Date.now()}
        sendTo={usersInCircle}
        newPostText={newPostText}
        onChangeText={updateNewPostText}
        setParams={() => this._setParams(setParams)} />
    );
  }
}

function mapStateToProps ({ feed, myCircles, user }) {
  return {
    feed,
    myCircles,
    user,
  }
}

export default connect(mapStateToProps, actions)(NewPostScreen);
