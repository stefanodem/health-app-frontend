import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MARGIN = 3;
const SECTION_MARGIN = MARGIN + 7;
const HEALTHCARD_MARGIN = MARGIN * 2;
export const NUMBER_OF_HEALTHCARDS = 3;

export const circle = StyleSheet.create({
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
  circleShapeView: {
    width: 325,
    height: 325,
    borderRadius: 325/2,
    borderColor: 'red',
    borderWidth: 5,
  },
});

export const healthSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SECTION_MARGIN,
  },
  section: {
    flex: 1,
    margin: SECTION_MARGIN,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: '#D3D3D3',
  },
  list: {

  },
  header: {
    paddingLeft: 15,
    color: '#696969',
    fontWeight: '600',
    fontSize: 14,
    padding: 5,
  }
})

export const healthCardStyles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
    //margin: 5,
    margin: HEALTHCARD_MARGIN,
    //marginRight: MARGIN,
    padding: 0,
  },
  shape: {
    width: (SCREEN_WIDTH - SECTION_MARGIN * 2 - HEALTHCARD_MARGIN * (NUMBER_OF_HEALTHCARDS * 2 )) / NUMBER_OF_HEALTHCARDS,
    height: 165,
    padding: 0,
    margin: 0,
    backgroundColor: 'red',
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 4,
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    padding: 5,
  }
});