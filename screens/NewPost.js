import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ButtonBack from '../components/Navigation/Header/ButtonBack';
import ButtonRight from '../components/Navigation/Header/ButtonRight';

class NewPostScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    return {
      title: 'Add a new post',
      headerTitle: 'Add a new post', //can be String, React Element or React Component
      //header: can be React Element or a function --> for customizing headers
      //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
      headerLeft: (
        <ButtonBack
          onPress={ goBack }
        />
      ),
      headerRight: (
        <ButtonRight
          icon="send"
          navigate={navigate}
          to="Feed"
        />
      ),
    }
  }

  render() {
    return (
      <View style={{flex: 1}} >
        <Text>{this.props.newPost.circle}</Text>
      </View>
    );
  }
}

function mapStateToProps ({ newPost }) {
  return {
    newPost,
  }
}

export default connect(mapStateToProps, actions)(NewPostScreen);
