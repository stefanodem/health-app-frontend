import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

//import testUser from '../testData/testUser';
//TODO: integrate testPosts into testUser
import { testPosts, testUser } from '../testData/testUser';

class FeedScreen extends Component {

  // const user = this.props.user;
  // const userName = this.props.user.name;
  // const userPicture = this.props.user.picture;
  // const userMessages = this.props.user.messages;
  // const messageDate = '';

  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     title: 'MyFeed',
  //     headerTitle: 'Feed', //can be String, React Element or React Componen
  //     //header: can be React Element or a function --> for customizing headers
  //     //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
  //     headerLeft: (
  //       <ButtonBack />
  //     )
  //   }
  // }


  fetchPosts = () => {

  }

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

  renderPosts() {
    //TODO: hook up to backend
    //TODO: testPosts.posts will be integrated into testUser
    //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
    const userInfo = testUser.info;

    if (!testUser) {
      return (
        <Text>Empty</Text>
      )
    }

    return testUser.posts.map(post => {
      return (
        <Post
          key={post.postId}
          post={post}
          user={userInfo}
          handleLikes={this.handleLikes}
          handleComments={this.handleComments.bind(this, { post, userInfo })}
          handleShares={this.handleShares}
          onProfilePress={this.onProfilePress}
        />
      )
    });
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
      <ScrollView>
        { this.renderPosts() }
      </ScrollView>
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
