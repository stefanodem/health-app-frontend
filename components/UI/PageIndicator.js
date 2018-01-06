import React from 'react';
import {
  Animated,
  View,
  Dimensions,
} from 'react-native';

import {
  pageIndicatorStyle,
} from './styles';


//TODO: improve/make cleaner/change API --> e.g. screenwidth, scrollX
//source: https://skillflow.io/tutorials/7/how-to-create-a-scrollview-progress-indicator-in-react-native
const PageIndicator = (props) => {

  const { numberOfPages, scrollLocation } = props;
  let position = Animated.divide(scrollLocation, Dimensions.get('window').width);

  let pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <View
      style={pageIndicatorStyle.container}
      >
      {pages.map((_, i) => {
        let opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });
        return (
          <Animated.View
            key={i}
            style={[{ opacity }, pageIndicatorStyle.indicator]}
          />
        );
      })}
    </View>
  );
}

export default PageIndicator;
