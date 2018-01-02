import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import Post from '../../components/Feed/Post';
import ReplyInput from '../../components/Feed/ReplyInput';
import Reply from '../../components/Feed/Reply';
import ButtonBack from '../../components/Navigation/Header/ButtonBack';

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
          onPress={ goBack } />
      ),
      headerRight: null,
    }
  }

  componentDidMount() {
    const { postId } = this.props.navigation.state.params.post;
    this.props.fetchAndHandleReplies(postId)
  }

  _onReplySubmit() {

  }

  _keyExtractor = (item, index) => item.replyId;

  _renderPost() {
    const { post } = this.props.navigation.state.params;
    const postId = post ? post.postId : null;

    if (!post) {
      return (
        <Text>No posts yet</Text>
      )
    }

    return (
      <Post
        key={post.postId}
        post={post}
        user={post.user}
        handleLikes={this.handleLikes}
        //handleComments={this.handleComments.bind(this, post)}
        handleShares={this.handleShares}
        onProfilePress={this.onProfilePress} />
    );
  }

  _renderReplies = ({ item }) => {
    return (
      <Reply
        key={item.replyId}
        post={item}
        user={item.user}
        onProfilePress={this._onProfilePress} />
    )
  }

  render() {
    //TODO decide whether to use updateReplyText/addAndHandleReply (redux action) or move to separate function in Thread component
    const { updateReplyText, addAndHandleReply } = this.props;
    const { isPosting, isFetching, replyText } = this.props.feed;
    const { postId, user } = this.props.navigation.state.params.post;
    const replies = this.props.feed.postReplies[postId]
                    ? this.props.feed.postReplies[postId].replies
                    : null;

    if (isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{flex: 1}} >

        <ScrollView>

          { this._renderPost() }

          <FlatList
            keyExtractor={this._keyExtractor}
            data={ _values(replies) }
            renderItem={ this._renderReplies } />

        </ScrollView>

        <ReplyInput
          userId={user.uid}
          postId={postId}
          replyText={replyText}
          onChangeReply={updateReplyText}
          onReplySubmit={addAndHandleReply}
          isPosting={isPosting} />

      </View>
    );
  }
}

function mapStateToProps ({ feed }) {
  return {
    feed,
  }
}

export default connect(mapStateToProps, actions)(ThreadScreen);