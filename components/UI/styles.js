import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageSize = deviceWidth / 11;
const imageRadius = imageSize / 2;
let CIRCLE_RADIUS = 30;

export const titleStyle = {
  stacked: StyleSheet.create({
    title: {
      justifyContent: 'center',
      paddingLeft: 8,
      paddingTop: 5,
      paddingBottom: 5,
      },
    name: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
    },
    date: {
      fontSize: 13,
      fontWeight: '200',
    },
  }),
  horizontal: StyleSheet.create({
    title: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'center',
      paddingLeft: 8,
      paddingTop: 5,
      paddingBottom: 5,
      },
    name: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
    },
    date: {
      fontSize: 13,
      fontWeight: '200',
    },
  }),
}

export const avatarStyle = StyleSheet.create({
  default: {
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  small: {
    justifyContent: 'center',
    width: deviceWidth / 15,
    height: deviceWidth / 15,
    margin: 2,
    borderRadius: imageSize / 2.5,
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
})

export const animatedAvatarStyle = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    margin: 15,
    borderWidth: 4,
    borderColor: 'pink',
  },
});

export const buttonStyle = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: '#22a3ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: 'white'
  }
})

export const pageIndicatorStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: '#595959',
    margin: 5,
    borderRadius: 4
  },
})