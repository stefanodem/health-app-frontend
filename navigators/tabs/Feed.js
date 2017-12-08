import React from 'react'
import { StackNavigator } from 'react-navigation';
import Feed from '../../screens/Feed';
import Thread from '../../screens/Thread';
import ButtonLeft from '../../components/Navigation/Header/ButtonLeft';

const options = {
  navigationOptions: ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'MyFeed',
      headerTitle: 'Feed', //can be String, React Element or React Componen
      //header: can be React Element or a function --> for customizing headers
      //TODO: Change drawer button from hamburger to profile picture (similar to Twitter)
      headerLeft: (
        <ButtonLeft
          icon="menu"
          navigate={navigate}
          to="DrawerOpen"
        />
      )
    }
  }
}

export default StackNavigator({

    Feed:   { screen: Feed },
    Thread: { screen: Thread },

}, options);