import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
  UIManager,
  FlatList,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import ButtonBack from '../../components/Navigation/Header/ButtonBack';
import ButtonRight from '../../components/Navigation/Header/ButtonRight';
import AnimatedAvatar from '../../components/UI/AnimatedAvatar';
import Circle from '../../components/MyCircles/Circle';

import { entities } from '../../testData/testUser2';

class AddToCircleScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;
    return {
      title: 'Add to circle',
      headerTitle: 'Add to circle',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="create"
          onPress={() => navigate("NewPost")} />
      ),
    }
  }

  componentDidMount() {
    this.props.clearCircle();
    this.props.fetchAndHandleEntities(this.props.user.userInfo.uid);
  }

  _keyExtractor = (item, index) => item.entityId;

  _renderEntities = ({ item }) => {
    const { addToCircle, removeFromCircle } = this.props;

    return (
      <Circle
        entity={item}
        addToCircle={addToCircle}
        removeFromCircle={removeFromCircle}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    const { entities } = this.props.newPost;
    const { addToCircle, removeFromCircle } = this.props;

    if (this.props.newPost.isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    //TODO move CircleShape & EntityCircles to components
    return (
    <View style={{ flex: 1 }}>

      <Circle navigate={navigate} to={"NewPost"} />

      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/*<FlatList
          horizontal
          keyExtractor={this._keyExtractor}
          data={ _values(entities) }
          renderItem={ this._renderEntities }
        />*/}

        <AnimatedAvatar
          entity={entities["1234"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

        <AnimatedAvatar
          entity={entities["3453"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

        <AnimatedAvatar
          entity={entities["9999"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

      </View>

    </View>
    );
  }
}

function mapStateToProps ({ newPost, user }) {
  return {
    newPost,
    user
  }
}

export default connect(mapStateToProps, actions)(AddToCircleScreen);
