import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageSize = deviceWidth / 11;
const imageRadius = imageSize / 2;

export const avatarStyle = {
  default: {
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  small: {
    justifyContent: 'center',
    width: deviceWidth / 18,
    height: deviceWidth / 18,
    margin: 2,
    borderRadius: imageSize / 3,
  },
  medium: {
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  large: {
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
}

export const buttonStyle = {
  container: {
    height: 70,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white'
  }
}