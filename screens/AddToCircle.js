import React, { Component } from 'react';
import {
  View,
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
    this.props.addToCircle(this.props.entity.entityId);
  }

  _resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
      friction: 5,
    }).start(() => this.setState({
      isInCircle: false,
    }));
    this.setState({ borderColor: outOfCircleColor });
    this.props.removeFromCircle(this.props.entity.entityId);
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
    console.log(this.props.newPost.circle)

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
    name: 'Dr. Schmock',
    type: 'person',
    entityId: 4567,
    avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
    users: {
      4567: {
        uid: 4567,
        name: 'Dr. Schmock',
        avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
      },
    },
  }
    const entity3 = {
    name: 'Dr. Schmock',
    type: 'person',
    entityId: 8901,
    avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
    users: {
      8901: {
        uid: 8901,
        name: 'Dr. Schmock',
        avatar: 'https://vignette.wikia.nocookie.net/super-villain/images/9/91/3998596-dr-evil.jpg/revision/latest?cb=20140805055410',
      },
    },
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
