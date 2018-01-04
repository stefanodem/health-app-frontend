import React, { Component } from 'react';
import {
  //StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  UIManager,
} from 'react-native';
import { animatedAvatarStyle } from './styles';

import { entities } from '../../testData/testUser2';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const inCircleColor = 'green';
const outOfCircleColor = 'pink';

class AnimatedAvatar extends Component {
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
        style={[panStyle, animatedAvatarStyle.circle, {borderColor: this.state.borderColor}]}
        source={{uri: avatar}}
      />
    );
  }
}

export default AnimatedAvatar;

