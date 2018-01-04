import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Tabs from './tabs';
//import Settings from './settings';
import Settings from '../components/Settings/Settings';
import TemplateScreen from '../screens/TemplateScreen';

//source: https://github.com/si-harps/RNExperimental
//TODO: redux integration (e.g. menu --> when authed)
//https://reactnavigation.org/docs/guides/redux

export default DrawerNavigator({

  Home:       { screen: Tabs, navigationOptions: { header: { visible: true }}},
  Settings:   { screen: Settings, navigationOptions: { title: 'Settings' } }

}, {
  headerMode: 'screen',
  initialRouteName: 'Home',drawerOpenRoute: 'DrawerOpen',
drawerCloseRoute: 'DrawerClose',
drawerToggleRoute: 'DrawerToggle',
});