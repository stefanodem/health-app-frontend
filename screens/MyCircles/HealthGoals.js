import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import ButtonBack from '../../components/Navigation/Header/ButtonBack';
import ButtonRight from '../../components/Navigation/Header/ButtonRight';

import { user } from '../../testData/testUser2';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const MARGIN = 3;
const SECTION_MARGIN = MARGIN + 7;
const HEALTHCARD_MARGIN = MARGIN * 2;
const NUMBER_OF_HEALTHCARDS = 3;

const HealthCard = (props) => {
  const { name, backgroundColor, image } = props;

  return (
    <Image
      source={{uri: 'https://beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'}}
      style={healthCardStyles.image} >

      <View style={healthCardStyles.shape} />

      <View style={healthCardStyles.textContainer}>
        <Text style={healthCardStyles.text}>{name}</Text>
      </View>

    </Image>
  )
}

const healthCardStyles = StyleSheet.create({

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

class HealthGoalsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      title: 'Health Goals',
      headerTitle: 'Choose Health Goals',
      headerLeft: (
        <ButtonBack
          onPress={ goBack } />
      ),
      headerRight: (
        <ButtonRight
          icon="create"
          onPress={() => navigate("AddToCircle")} />
      ),
    }
  }

  componentDidMount () {
    //this.props.fetchAndHandleCircles(this.props.user.userInfo.uid);
  }

  _keyExtractor = (item, index) => item;

  _renderEntities = ({ item }) => {
    //const { addToCircle, removeFromCircle } = this.props;

    return (
      <HealthCard
        name={item}
      />
    )
  }

  render() {
    const { navigation } = this.props;
    //const { circleId } = this.props.circles;
    //const circles = this.props.myCircles.circles;
    // const isFetching = this.props.myCircles.isFetching;

    // if (isFetching) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   );
    // }

    return (
      <ScrollView
          showsVerticalScrollIndicator={false}
          style={healthSectionStyles.container} >

        <View style={healthSectionStyles.section}>
          <Text style={healthSectionStyles.header}>{'RECOMMENDED FOR YOU'}</Text>
          <FlatList
            style={healthSectionStyles.list}
            horizontal
            pagingEnabled
            //showsPagination
            showsHorizontalScrollIndicator={false}
            //showsHorizontalScrollIndicator
            keyExtractor={this._keyExtractor}
            data={healthGoalsData}
            renderItem={ this._renderEntities } />
          </View>

        <View style={healthSectionStyles.section}>
          <Text style={healthSectionStyles.header}>{'HEALTH CONDITIONS'}</Text>
          <FlatList
            style={healthSectionStyles.list}
            horizontal
            pagingEnabled
            //showsPagination
            showsHorizontalScrollIndicator={false}
            keyExtractor={this._keyExtractor}
            data={healthGoalsData}
            renderItem={ this._renderEntities } />
          </View>

        <View style={healthSectionStyles.section}>
          <Text style={healthSectionStyles.header}>{'LIFESTYLE'}</Text>
          <FlatList
            style={healthSectionStyles.list}
            horizontal
            pagingEnabled
            //showsPagination
            showsHorizontalScrollIndicator={false}
            keyExtractor={this._keyExtractor}
            data={healthGoalsData}
            renderItem={ this._renderEntities } />
          </View>

        <View style={healthSectionStyles.section}>
          <Text style={healthSectionStyles.header}>{'EATING HEALTHY'}</Text>
          <FlatList
            style={healthSectionStyles.list}
            horizontal
            pagingEnabled
            //showsPagination
            showsHorizontalScrollIndicator={false}
            keyExtractor={this._keyExtractor}
            data={healthGoalsData}
            renderItem={ this._renderEntities } />
          </View>

      </ScrollView>
    );
  }
}

const healthGoalsData = [
  'Diabetes', 'Fitness', 'Diet', 'Sleep', 'Gagi', 'Bisi'
]

const healthSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SECTION_MARGIN,
  },
  section: {
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

function mapStateToProps({ user }) {
  return {
    user,
  }
}

export default connect(mapStateToProps, actions)(HealthGoalsScreen);

