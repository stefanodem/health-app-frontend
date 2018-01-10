import React from 'react'
import { StackNavigator } from 'react-navigation';

import {
  MyCircles,
  HealthGoals,
  InviteToCircle,
  NewCircle
} from '../../screens/MyCircles';

import {
  Feed,
  Thread,
  NewPost,
  AddToCircle,
} from '../../screens/Feed';

import { ButtonLeft, ButtonRight, NewPostButton } from '../../components';

const MainFeedOptions = {
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
          to="DrawerOpen" />
      ),
    }
  }
}

// const modalOptions = {
//   headerMode: 'none',
//   mode: 'modal',
//   navigationOptions: ({ navigation }) => {
//     const { navigate } = navigation;
//     return {
//     }
//   }
// }


const MainFeedNavigator = StackNavigator({

    MyCircles: { screen: MyCircles },
    Feed:   { screen: Feed },
    Thread: { screen: Thread },
    AddToCircle: { screen: AddToCircle },
    NewPost: { screen: NewPost },
    HealthGoals: { screen: HealthGoals },
    InviteToCircle: { screen: InviteToCircle },
    NewCircle: { screen: NewCircle },

}, MainFeedOptions);

// const ModalFeedNavigator = StackNavigator({

//     MainFeedNavigator:   { screen: MainFeedNavigator },
//     NewPost: { screen: NewPost },

// }, modalOptions);

export default MainFeedNavigator;
