import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import Post from '../../components/Feed/Post';
import ButtonBack from '../../components/Navigation/Header/ButtonBack';
import NewPostButton from '../../components/Navigation/Header/NewPostButton';

import { user } from '../../testData/testUser2';

//TODO: where do we initially get the uid?
//after authentication
//or Async.Storage if auth is persisted through sessions
//const UID = '11111';

class MyCirclesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      title: 'MyCircles',
      headerTitle: 'MyCircles',
      headerRight: (
        <NewPostButton
          color="red"
          navigate={navigate}
          to="Feed" />
      ),
    }
  }

  componentDidMount () {
    //setAndHandleFeedListener?
    //move to authentication:
    //this.props.fetchAndHandleUser(UID);
    //this.props.fetchAndHandleCircles(this.props.user.userInfo.uid);
  }

  render() {

    // if (isFetching) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   );
    // }

    return (
      <View>

        <Text>{'Hi'}</Text>

      </View>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  }
}

export default connect(mapStateToProps, actions)(MyCirclesScreen);
