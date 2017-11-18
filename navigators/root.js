import { StackNavigator, DrawerNavigator } from 'react-navigation';

import TabNavigator from './tabs'
import TemplateScreen from '../screens/TemplateScreen'

export default DrawerNavigator({

    Home:       { screen: TabNavigator, navigationOptions: { header: { visible: false }}},
    Settings:   { screen: StackNavigator({ template: { screen: TemplateScreen } }) }

}, {
    headerMode: 'screen',
    initialRouteName: 'Home',
});