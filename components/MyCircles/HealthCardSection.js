import React, { Component } from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import HealthCard from './HealthCard';
import PageIndicator from '../UI/PageIndicator';

import {
  healthSectionStyles, NUMBER_OF_HEALTHCARDS,
} from './styles';

class HealthCardSection extends Component {

  //TODO: Change to item.id
  _keyExtractor = (item, index) => item;

  _renderHealthCard = ({ item }) => {
    return (
      <HealthCard
        name={item}
      />
    )
  }

  scrollX = new Animated.Value(0)

  render () {
    const { title, data } = this.props;
    const numberOfPages = Math.ceil(data.length / NUMBER_OF_HEALTHCARDS)

    //TODO: add error handling

    // if (!data) {
    //   return (
    //     <Text>{'Data could not be loaded'}</Text>
    //   )
    // }

    return (
      <View style={healthSectionStyles.section}>
        <Text style={healthSectionStyles.header}>{title}</Text>
        <FlatList
          style={healthSectionStyles.list}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={this._keyExtractor}
          data={data}
          renderItem={ this._renderHealthCard }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
          )}
          scrollEventThrottle={16} />

          <PageIndicator
            numberOfPages={numberOfPages}
            scrollLocation={this.scrollX} />

      </View>
    );
  }
}

export default HealthCardSection;
