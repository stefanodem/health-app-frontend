import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ReplyInput from '../components/Feed/ReplyInput';
import Reply from '../components/Feed/Reply';
import ButtonBack from '../components/Navigation/Header/ButtonBack';

import { replies } from '../testData/testUser2';

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

  componentDidMount() {
    //this.props.fetchReplies(postId)
  }

  _onChangeReply() {

  }

  _handleReply() {

  }

  _keyExtractor = (item, index) => item.id;

  _renderPost() {
    //TODO: hook up to backend
    const { post } = this.props.navigation.state.params;

    if (!post) {
      return (
        <Text>Empty</Text>
      )
    }
    //TODO: use {...this.props} to send pass all props to component
    return (
      <Post
        key={post.id}
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
        key={item.id}
        post={item}
        user={item.user}
        onProfilePress={this._onProfilePress}
      />
    )
  }

  render() {
    console.log(this.props)
    const { post } = this.props.navigation.state.params;
    console.log(_values(replies[post.id].replies))
    return (
      <View style={{flex: 1}} >

        <ScrollView>

          { this._renderPost() }

          <FlatList
            keyExtractor={this._keyExtractor}
            data={ _values(replies[post.id].replies) }
            renderItem={ this._renderReplies }
          />

        </ScrollView>

        <ReplyInput
          onChangeReply={ this._onChangeReply }
          handleReply={this._handleReply}
        />

      </View>
    );
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(null, actions)(ThreadScreen);