import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, AsyncStorage, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from '../components/Feed/Post';
import ReplyInput from '../components/Feed/ReplyInput';
import Reply from '../components/Feed/Reply';
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

  _onChangeReply() {

  }

  _handleReply() {

  }

  _keyExtractor = (item, index) => item.replyId;

  _renderPost() {
    //TODO: hook up to backend
    const { item, userInfo } = this.props.navigation.state.params;

    if (!item) {
      return (
        <Text>Empty</Text>
      )
    }
    //TODO: use {...this.props} to send pass all props to component
    return (
      <Post
        key={item.postId}
        post={item}
        user={userInfo}
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
        key={item.postId}
        post={item}
        user={item.userInfo}
        onProfilePress={this._onProfilePress}
      />
    )
  }

  render() {
    const { item, userInfo } = this.props.navigation.state.params;

    return (
      <View style={{flex: 1}} >

        <ScrollView>

          { this._renderPost() }

          <FlatList
            keyExtractor={this._keyExtractor}
            data={ item.replies }
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