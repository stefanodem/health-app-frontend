import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ReplyInput from '../components/Feed/ReplyInput';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

class ThreadScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    return {
      title: 'Thread',
      headerTitle: 'Thread', //can be String, React Element or React Componen
      //header: can be React Element or a function --> for customizing headers
      //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
      headerLeft: (
        <ButtonBack
          onPress={ goBack }
        />
      )
    }
  }

  onChangeReply() {

  }

  handleReply() {

  }

  renderPost() {
    //TODO: hook up to backend
    const { post, userInfo } = this.props.navigation.state.params;

    if (!post) {
      return (
        <Text>Empty</Text>
      )
    }
    //TODO: use {...this.props} to send pass all props to component
    return (
      <Post
        key={post.postId}
        post={post}
        user={userInfo}
        handleLikes={this.handleLikes}
        //handleComments={this.handleComments.bind(this, post)}
        handleShares={this.handleShares}
        onProfilePress={this.onProfilePress}
      />
    );
  }

  renderReplies() {
    return (
      <ReplyInput
        onChangeReply={ this.onChangeReply }
        handleReply={this.handleReply}
      />
    )
  }

  render() {
    return (
      <View style={{flex: 1}} >
        <ScrollView>
          { this.renderPost() }
          { this.renderReplies() }
        </ScrollView>
        <View>
          { this.renderReplies() }
        </View>
      </View>
    );
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(null, actions)(ThreadScreen);