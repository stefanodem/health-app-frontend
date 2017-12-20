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
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
      isInCircle: null,
      user: null,
      //dropAreaValues: null,
      //opacity: new Animated.Value(1),
    };
  }

  componentWillMount() {
    //this._val = { x: this.state.pan.x, y: this.state.pan.y }
    //this.state.pan.addListener((value) => this._val = value);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this._isCircleArea(gesture)) {
          Animated.spring(this.state.pan, {
            toValue: { x: SCREEN_WIDTH / 10, y: -300 },
            friction: 5,
          }).start(() => this.setState({
            isInCircle: true,
          }))
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
          }).start(() => this.setState({
            isInCircle: false,
          }))
        }
      },
    });
    //this.state.pan.setValue({ x: 0, y: 0})
  }

  _isCircleArea(gesture) {
    return gesture.moveY < SCREEN_HEIGHT / 2;
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
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
    return (
    <View>
      <TouchableOpacity style={styles.container}>
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
  circleList: {
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  CircleShapeView: {
    width: 300,
    height: 300,
    borderRadius: 300/2,
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
