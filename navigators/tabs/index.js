import React from 'react'
import { TabNavigator } from 'react-navigation';

// Screens
// Only one for now, add more as required
import HealthCenter from './health_center'

// Tabs
//import Tab from '../../components/tabs/tab'
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

export default TabNavigator({

    List:       { screen: HealthCenter, navigationOptions: { tabBarLabel: '', tabBarIcon: ({ tintColor }) => (<Icon name="favorite" size={30} color={tintColor} />) }},
    Groups:     { screen: HealthCenter, navigationOptions: { tabBarLabel: '', tabBarIcon: ({ tintColor }) => (<Icon name="favorite" size={30} color={tintColor} />) }},
    Stats:      { screen: HealthCenter, navigationOptions: { tabBarLabel: '', tabBarIcon: ({ tintColor }) => (<Icon name="favorite" size={30} color={tintColor} />) }},
    User:       { screen: HealthCenter, navigationOptions: { tabBarLabel: '', tabBarIcon: ({ tintColor }) => (<Icon name="favorite" size={30} color={tintColor} />) }},
    Admin:      { screen: HealthCenter, navigationOptions: { tabBarLabel: '', tabBarIcon: ({ tintColor }) => (<Icon name="favorite" size={30} color={tintColor} />) }},

}, options);