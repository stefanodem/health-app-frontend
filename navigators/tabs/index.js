import React from 'react'
import { TabNavigator } from 'react-navigation';

// Screens
// Only one for now, add more as required
import Feed from './Feed.js'
import MyHealth from './MyHealth'

// Tabs
import Tab from '../../components/Navigation/Tab/Tab'
import { Icon } from 'react-native-elements';

// TabNavigator options
const options = {
    lazyLoad: true,
    tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#fff',
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: '#272822',
        }
    },
    animationEnabled: false,
}

export default Tabs = TabNavigator({

    List:       { screen: Feed, navigationOptions: { tabBarLabel: '', tabBarIcon: (props) => (<Tab {...props} icon="home" />) }},
    Groups:     { screen: MyHealth, navigationOptions: { tabBarLabel: '', tabBarIcon: (props) => (<Tab {...props} icon="chat" />) }},
    Stats:      { screen: MyHealth, navigationOptions: { tabBarLabel: '', tabBarIcon: (props) => (<Tab {...props} icon="show-chart" />) }},
    User:       { screen: MyHealth, navigationOptions: { tabBarLabel: '', tabBarIcon: (props) => (<Tab {...props} icon="person" />) }},
    Admin:      { screen: MyHealth, navigationOptions: { tabBarLabel: '', tabBarIcon: (props) => (<Tab {...props} icon="settings" />) }},

}, options);