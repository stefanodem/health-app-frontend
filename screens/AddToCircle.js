import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ButtonBack from '../components/Navigation/Header/ButtonBack';
import ButtonRight from '../components/Navigation/Header/ButtonRight';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.ValueXY(),
      isInCircle: false,
      user: null,
      //dropAreaValues: null,
      //opacity: new Animated.Value(1),
    };
  }

  componentWillMount() {
    //http://facebook.github.io/react-native/docs/panresponder.html
    //this._val = { x: this.state.pan.x, y: this.state.pan.y }
    //this.state.pan.addListener((value) => this._val = value);
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
    //this.state.pan.setValue({ x: 0, y: 0})
  }

  _moveToCircle(gesture) {
    Animated.spring(this.state.position, {
      toValue: { x: gesture.dx, y: gesture.moveY - SCREEN_HEIGHT + (SCREEN_HEIGHT / 4) },
      friction: 1,
    }).start(() => this.setState({
      isInCircle: true,
    }))
  }

  _resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
      friction: 5,
    }).start(() => this.setState({
      isInCircle: false,
    }))
  }

  _isInCircleArea(gesture) {
    return gesture.moveY < (SCREEN_HEIGHT - 300) ;
  }

  render() {
    const panStyle = {
      transform: this.state.position.getTranslateTransform(),
    }

    return (
      <Animated.Image
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle]}
        source={{uri: 'https://pbs.twimg.com/profile_images/420241225283674113/xoCDeFzV.jpeg'}}
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

  render() {
    const { navigate } = this.props.navigation;

    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.circleContainer}
        onPress={ () => navigate('NewPost') }
      >
        <View style={styles.CircleShapeView} ></View>
      </TouchableOpacity>
      <View style={styles.circleList}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
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

function mapStateToProps ({  }) {
  return {
  }
}

export default connect(mapStateToProps, actions)(AddToCircleScreen);
