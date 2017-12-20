import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList } from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

//import { testUser } from '../testData/testUser';
import { user } from '../testData/testUser2';

//TODO: where do we initially get the uid?
//after authentication
//or Async.Storage if auth is persisted through sessions
const UID = '11111';

class FeedScreen extends Component {

  componentDidMount () {
    //setAndHandleFeedListener?
    //move to authentication:
    //this.props.fetchAndHandleUser(UID);

    this.props.fetchAndHandleUserPosts(UID);
  }

  _fetchPosts = () => {

  }

  //TODO: Handle with redux actions:
  //TODO: allow only one like per user
  _handleLikes = (postId, likeCount, liked) => {
    console.log("Liked");
    if (liked) {
      this.props.removeLike(postId, likeCount);
    } else {
      this.props.addLike(postId, likeCount);
    }
  }

  _handleComments = (params) => {
    console.log("Commented");
    this.props.navigation.navigate('Thread', params);
  }

  _handleShares = () => {
    console.log("Shared");
  }

  _onProfilePress = (uid) => {
    console.log("Pressed profile")
    //this.props.navigation.navigate('UserProfile');

    //move to User Profile Screen:
    //this.props.fetchAndHandleUser(uid)
  }

  _keyExtractor = (item, index) => item.postId;

  //TODO: Hook up to backend
  //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
  _renderPosts = ({ item }) => {
    //TODO: think about using {...this.props} to pass props down to 'Post'
    //console.log(this.props)
    return (
      <Post
        key={item.postId}
        post={item}
        user={item.user}
        handleLikes={() => this._handleLikes(item.postId, item.likeCount, item.liked)}
        handleComments={() => this._handleComments({ post: item })}
        handleShares={this._handleShares}
        onProfilePress={this._onProfilePress}
      />
    )
  }

  render() {
    //TODO: research and include flatlist features,
    //e.g. pull to refresh, scroll loading, etc.
    //https://facebook.github.io/react-native/docs/flatlist.html

    const posts = this.props.feed.posts;

    if (this.props.feed.isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={ _values(posts) }
        renderItem={ this._renderPosts }
      />
    );
  }
}

//TODO: set up backend and connect to redux
function mapStateToProps({ user, feed }) {
  return {
    user,
    feed
  }
}

export default connect(mapStateToProps, actions)(FeedScreen);
