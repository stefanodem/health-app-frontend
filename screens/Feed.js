import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

//import testUser from '../testData/testUser';
//TODO: integrate testPosts into testUser
import { testUser } from '../testData/testUser';

class FeedScreen extends Component {

  // const user = this.props.user;
  // const userName = this.props.user.name;
  // const userPicture = this.props.user.picture;
  // const userMessages = this.props.user.messages;
  // const messageDate = '';

  fetchPosts = () => {

  }

  //TODO: Handle with redux actions:
  handleLikes = () => {
    console.log("Liked");
  }

  handleComments = (post) => {
    console.log("Commented");
    console.log("comment post: " + post.body)
    this.props.navigation.navigate('Thread', post);
  }

  handleShares = () => {
    console.log("Shared");
  }

  onProfilePress = () => {
    console.log("Pressed profile")
  }

  _keyExtractor = (item, index) => item.postId;

  //TODO: Hook up to backend
  //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
  renderPosts = ({item}) => {
    const userInfo = testUser.info;

    return (
      <Post
        key={item.postId}
        post={item}
        user={userInfo}
        handleLikes={this.handleLikes}
        handleComments={this.handleComments.bind(this, { item, userInfo })}
        handleShares={this.handleShares}
        onProfilePress={this.onProfilePress}
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

    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={ testUser.posts }
        renderItem={ this.renderPosts }
      />
    );
  }
}

//TODO: set up backend and connect to redux
// function mapStateToProps({ user, post }) {
//   return {
//     user: user.info,
//     post
//   }
// }

export default connect(null, actions)(FeedScreen);
