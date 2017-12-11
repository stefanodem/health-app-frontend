import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

import { testUser } from '../testData/testUser';

class FeedScreen extends Component {

  // const user = this.props.user;
  // const userName = this.props.user.name;
  // const userPicture = this.props.user.picture;
  // const userMessages = this.props.user.messages;
  // const messageDate = '';

  componentDidMount () {
    //setAndHandleFeedListener?

  }

  _fetchPosts = () => {

  }

  //TODO: Handle with redux actions:
  _handleLikes = () => {
    console.log("Liked");
  }

  _handleComments = (post) => {
    console.log("Commented");
    console.log("comment post: " + post.body)
    this.props.navigation.navigate('Thread', post);
  }

  _handleShares = () => {
    console.log("Shared");
  }

  _onProfilePress = (uid) => {
    console.log("Pressed profile")
    this.props.fetchAndHandleUser(uid)
  }

  _keyExtractor = (item, index) => item.postId;

  //TODO: Hook up to backend
  //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
  _renderPosts = ({ item }) => {
    const userInfo = testUser.userInfo;

    return (
      <Post
        key={item.postId}
        post={item}
        user={userInfo}
        handleLikes={this._handleLikes}
        handleComments={this._handleComments.bind(this, { item, userInfo })}
        handleShares={this._handleShares}
        onProfilePress={this._onProfilePress}
      />
    )
  }

  render() {
    // if (!this.state.mapLoaded) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   );
    // }

    //TODO: research and include flatlist features,
    //e.g. pull to refresh, scroll loading, etc.
    //https://facebook.github.io/react-native/docs/flatlist.html
    console.log(this.props)
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={ testUser.posts }
        renderItem={ this._renderPosts }
      />
    );
  }
}

//TODO: set up backend and connect to redux
function mapStateToProps({ user, post }) {
  return {
    user,
    post
  }
}

export default connect(null, actions)(FeedScreen);
