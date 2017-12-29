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
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../actions';
import ButtonBack from '../components/Navigation/Header/ButtonBack';
import ButtonRight from '../components/Navigation/Header/ButtonRight';

import { entities } from '../testData/testUser2';

//TODO: create userinfo state
const UID = '11111';

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
    //http://facebook.github.io/react-native/docs/panresponder.html
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
          onPress={ goBack }
        />
      ),
      headerRight: (
        <ButtonRight
          icon="create"
          navigate={navigate}
          to="NewPost"
        />
      ),
    }
  }

  componentDidMount() {
    //TODO: move to auth
    this.props.clearCircle();
    this.props.fetchAndHandleEntities(UID);
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
    const {  } = this.props.newPost;
    const { addToCircle, removeFromCircle } = this.props;

    //TODELETE:
    const entity = {
    name: 'Dr. Schmock',
    type: 'person',
    entityId: 1234,
    avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
    users: {
      1234: {
        uid: 1234,
        name: 'Dr. Schmock',
        avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
      },
    },
  }

    const entity2 = {
    name: 'Circle of Trust',
    type: 'group',
    entityId: 9999,
    avatar: 'https://pbs.twimg.com/profile_images/420241225283674113/xoCDeFzV.jpeg',
    users: {
      1234: {
        uid: 1234,
        name: 'Steve the Chief',
        avatar: 'http://profile.actionsprout.com/default.jpeg',
      },
      5678: {
        uid: 5678,
        name: 'Dr. Schmock',
        avatar: 'http://profile.actionsprout.com/default.jpeg',
      },
    },
  }

    const entity3 = {
    name: 'Coach Coughlin',
    type: 'person',
    entityId: 3453,
    avatar: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2013/11-november/131114-coughlin-300.jpg',
    users: {
      3453: {
        uid: 3453,
        name: 'Coach Coughlin',
        avatar: 'http://www.packers.com/assets/images/imported/GB/photos/article_images/2013/11-november/131114-coughlin-300.jpg',
      },
    },
  }

    if (this.props.newPost.isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    //TODO move CircleShape to components
    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circleContainer}
        onPress={ () => navigate('NewPost') }
      >
        <View style={styles.CircleShapeView} ></View>
      </TouchableOpacity>
      <View style={styles.circleList}>
       {/* <FlatList
          style={{ flex: 1 }}
          horizontal
          keyExtractor={this._keyExtractor}
          data={ _values(entities) }
          renderItem={ this._renderEntities }
        />*/}
        <Circle
          entity={entity}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle}
        />
        <Circle
          entity={entity2}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle}
        />
        <Circle
          entity={entity3}
          addToCircle={addToCircle}
          removeFromCircle={removeFromCircle}
        />
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
    // alignItems: 'center',
    //justifyContent: 'center',
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
  CircleShapeView: {
    width: 325,
    height: 325,
    borderRadius: 325/2,
    //backgroundColor: 'grey',
    borderColor: 'blue',
    borderWidth: 5,
},

});

function mapStateToProps ({ newPost }) {
  return {
    newPost,
  }
}

export default connect(mapStateToProps, actions)(AddToCircleScreen);
