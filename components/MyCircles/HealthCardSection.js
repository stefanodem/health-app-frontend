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
  TouchableOpacity,
} from 'react-native';
import _values from 'lodash/values';

import HealthCard from './HealthCard';
import PageIndicator from '../UI/PageIndicator';

import {
  healthSectionStyles, NUMBER_OF_HEALTHCARDS,
} from './styles';

class HealthCardSection extends Component {

  //TODO: Change to item.id
  _keyExtractor = (item, index) => item.id;

  _renderHealthCard = ({ item }) => {
    const { onPress, sectionId } = this.props;

    return (
      <TouchableOpacity
        onPress={() => onPress(sectionId, item.id)} >
        <HealthCard
          name={item.name}
          selected={item.selected}
          backgroundImage={item.backgroundImage}
          color={item.color}
        />
      </TouchableOpacity>
    )
  }

  scrollX = new Animated.Value(0)

  render () {
    const { title, data } = this.props;
    const numberOfPages = Math.ceil(_values(data).length / NUMBER_OF_HEALTHCARDS)

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
          data={_values(data)}
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
