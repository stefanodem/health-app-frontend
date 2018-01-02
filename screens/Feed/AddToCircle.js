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

import { entities } from '../../testData/testUser2';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const inCircleColor = 'green';
const outOfCircleColor = 'pink';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.ValueXY(),
      isInCircle: false,
      borderColor: outOfCircleColor,
    };
  }

  componentWillMount() {
    //Documentation: http://facebook.github.io/react-native/docs/panresponder.html
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: (event, gesture) => {
        this.state.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (e, gesture) => {
        if (this._isInCircleArea(gesture)) {
          this._moveToCircle(gesture);
        } else {
          this._resetPosition();
        }
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  _moveToCircle(gesture) {
    Animated.spring(this.state.position, {
      toValue: { x: gesture.dx, y: gesture.moveY - SCREEN_HEIGHT + (SCREEN_HEIGHT / 4) },
      friction: 1,
    }).start(() => this.setState({
      isInCircle: true,
    }));
    this.setState({ borderColor: inCircleColor });
    this.props.addToCircle(this.props.entity);
  }

  _resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
      friction: 5,
    }).start(() => this.setState({
      isInCircle: false,
    }));
    this.setState({ borderColor: outOfCircleColor });
    this.props.removeFromCircle(this.props.entity);
  }

  _isInCircleArea(gesture) {
    return gesture.moveY < (SCREEN_HEIGHT - 300) ;
  }

  render() {
    const panStyle = {
      transform: this.state.position.getTranslateTransform(),
    }

    const { avatar } = this.props.entity;
    return (
      <Animated.Image
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle, {borderColor: this.state.borderColor}]}
        source={{uri: avatar}}
      />
    );
  }
}

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
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.circleContainer}
        onPress={ () => navigate('NewPost') } >

        <View style={styles.circleShapeView} ></View>

      </TouchableOpacity>

      <View style={styles.circleList}>
        {/*<FlatList
          horizontal
          keyExtractor={this._keyExtractor}
          data={ _values(entities) }
          renderItem={ this._renderEntities }
        />*/}

        <Circle
          entity={entities["1234"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

        <Circle
          entity={entities["3453"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

        <Circle
          entity={entities["9999"]}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle} />

      </View>

    </View>
    );
  }
}

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleList: {
    flex: 1,
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    margin: 15,
    borderWidth: 4,
    borderColor: 'pink',
  },
  circleShapeView: {
    width: 325,
    height: 325,
    borderRadius: 325/2,
    borderColor: 'red',
    borderWidth: 5,
},

});

function mapStateToProps ({ newPost, user }) {
  return {
    newPost,
    user
  }
}

export default connect(mapStateToProps, actions)(AddToCircleScreen);
