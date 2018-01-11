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
import { SearchBar } from 'react-native-elements';
import * as actions from '../../actions';
import { Circle, ButtonBack, ButtonRight, AnimatedAvatar } from '../../components';

class InviteToCircleScreen extends Component {

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
          onPress={() => navigate("NewCircleSettings")} />
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
    const { entities, isFetchingEntities } = this.props.myCircles;
    const { addToCircle, removeFromCircle } = this.props;

    if (isFetchingEntities) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
    <View style={{ flex: 1 }}>

      <SearchBar
        round
        onChangeText={this._keyExtractor}
        onClearText={this._keyExtractor}
        placeholder='Type Here...' />

      <Circle navigate={navigate} to={"NewCircleSettings"} />

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

function mapStateToProps ({ myCircles, user }) {
  return {
    myCircles,
    user,
  }
}

export default connect(mapStateToProps, actions)(InviteToCircleScreen);
