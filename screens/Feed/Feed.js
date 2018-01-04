import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import Post from '../../components/Feed/Post';
import ButtonBack from '../../components/Navigation/Header/ButtonBack';

import { user } from '../../testData/testUser2';

//TODO: where do we initially get the uid?
//after authentication
//or Async.Storage if auth is persisted through sessions
//const UID = '11111';

class FeedScreen extends Component {

  componentDidMount () {
    //setAndHandleFeedListener?
    //move to authentication:
    //this.props.fetchAndHandleUser(UID);
    this.props.fetchAndHandleUserPosts(this.props.user.userInfo.uid);
  }

  _fetchPosts = () => {

  }

  _handleLikes = (postId, likeCount, liked) => {
    console.log("Liked");
    if (liked) {
      this.props.removeLike(postId, likeCount);
    } else {
      this.props.addLike(postId, likeCount);
    }
  }

  _handleReplies = (params) => {
    console.log("Commented");
    this.props.navigation.navigate('Thread', params);
  }

  _handleShares = () => {
    console.log("Shared");
    //TODO: build shareScreen
    //this.props.navigation.navigate('Share', params);
  }

  _onProfilePress = (uid) => {
    console.log("Pressed profile")
    //TODO:
    //this.props.navigation.navigate('UserProfile', params);

    //move to User Profile Screen:
    //this.props.fetchAndHandleUser(uid)
  }

  _keyExtractor = (item, index) => item.postId;

  //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
  _renderPost = ({ item }) => {
    //TODO: think about using {...this.props} to pass props down to 'Post'
    return (
      <Post
        key={item.postId}
        post={item}
        user={item.user}
        handleLikes={() => this._handleLikes(item.postId, item.likeCount, item.liked)}
        handleReplies={() => this._handleReplies({ post: item })}
        handleShares={this._handleShares}
        onProfilePress={this._onProfilePress} />
    )
  }

  _renderFeed = (keyExtractor, posts, renderPosts) => {
    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={ posts }
        renderItem={ renderPosts } />
    )
  }

  render() {
    //TODO: research and include flatlist features,
    //e.g. pull to refresh, scroll loading, etc.
    //https://facebook.github.io/react-native/docs/flatlist.html

    const posts = this.props.feed.posts;
    const isFetching = this.props.feed.isFetching;

    if (isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View>

        {
          this._renderFeed(
              this._keyExtractor,
              _values(posts),
              this._renderPost)
        }

      </View>
    );
  }
}

function mapStateToProps({ feed, user }) {
  return {
    feed,
    user
  }
}

export default connect(mapStateToProps, actions)(FeedScreen);
