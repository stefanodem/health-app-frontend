import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import { isEmpty } from 'lodash';
import * as actions from '../../actions';
import { Post, ButtonBack, NewPostButton } from '../../components';
import { user } from '../../testData/testUser2';

class FeedScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      title: 'Feed',
      headerTitle: 'Feed',
      headerLeft: (
        <ButtonBack
          onPress={ () => navigate('MyCircles') } />
      ),
      headerRight: (
        <NewPostButton
          color="red"
          navigate={navigate}
          to="AddToCircle" />
      ),
    }
  }

  componentDidMount () {
    const uid = this.props.user.userInfo.uid;
    const circleId = this.props.navigation.state.params;
    // Add circleInfo --> send circleInfo via action to feed_reducer --> store circleInfo in feed_reducer
    // make circleId available for newPosts
    this.props.fetchAndHandleUserPosts(uid, circleId);
  }

  _handleLikes = (postId, likeCount, liked) => {
    const uid = this.props.user.userInfo.uid;
    let addLike;
    if (liked) {
      addLike = false;
      this.props.removeLike(uid, postId, likeCount, addLike);
    } else {
      addLike = true;
      this.props.addLike(uid, postId, likeCount, addLike);
    }
  }

  _handleReplies = (params) => {
    console.log("Commented");
    this.props.navigation.navigate('Thread', params);
  }

  _handleShares = () => {
    console.log("Shared");
  }

  _onProfilePress = (uid) => {
    console.log("Pressed profile")
    //TODO:
    //this.props.navigation.navigate('UserProfile', params);

    //move to User Profile Screen:
    //this.props.fetchAndHandleUser(uid)
  }

  _keyExtractor = (item, index) => item.postId;

  _renderPost = ({ item }) => {
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

    if (isEmpty(posts)) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}> {'No posts yet'} </Text>
        </View>
      )
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
