import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, FlatList, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ReplyInput from '../components/Feed/ReplyInput';
import Reply from '../components/Feed/Reply';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

//import { replies } from '../testData/testUser2';

class ThreadScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    return {
      title: 'Thread',
      headerTitle: 'Thread', //can be String, React Element or React Component
      //header: can be React Element or a function --> for customizing headers
      //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
      headerLeft: (
        <ButtonBack
          onPress={ goBack }
        />
      )
    }
  }

  componentDidMount() {
    const { postId } = this.props.navigation.state.params.post;
    this.props.fetchAndHandleReplies(postId)
  }

  _handleReply() {

  }

  _keyExtractor = (item, index) => item.replyId;

  _renderPost() {
    //TODO: hook up to backend
    const { post } = this.props.navigation.state.params;
    const postId = post ? post.postId : null;

    if (!post) {
      return (
        <Text>No posts yet</Text>
      )
    }
    //TODO: use {...this.props} to send pass all props to component
    return (
      <Post
        key={post.postId}
        post={post}
        user={post.user}
        handleLikes={this.handleLikes}
        //handleComments={this.handleComments.bind(this, post)}
        handleShares={this.handleShares}
        onProfilePress={this.onProfilePress}
      />
    );
  }

  _renderReplies = ({ item }) => {
    return (
      <Reply
        key={item.replyId}
        post={item}
        user={item.user}
        onProfilePress={this._onProfilePress}
      />
    )
  }

  render() {
    const { updateReplyText, replyText } = this.props;
    const { postId } = this.props.navigation.state.params.post;
    const replies = this.props.postReplies[postId]
                    ? this.props.postReplies[postId].replies
                    : null;

    if (this.props.isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    console.log(this.props)
    return (
      <View style={{flex: 1}} >

        <ScrollView>

          { this._renderPost() }

          <FlatList
            keyExtractor={this._keyExtractor}
            data={ _values(replies) }
            renderItem={ this._renderReplies }
          />

        </ScrollView>

        <ReplyInput
          replyText={replyText}
          onChangeReply={ updateReplyText }
          handleReply={this._handleReply}
        />

      </View>
    );
  }
}

function mapStateToProps ({ feed }) {
  return {
    isFetching: feed.isFetching,
    postReplies: feed.postReplies,
    replyText: feed.feedActions.replyText,
  }
}

export default connect(mapStateToProps, actions)(ThreadScreen);