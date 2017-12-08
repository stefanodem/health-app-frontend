import React from 'react'
import { StackNavigator } from 'react-navigation';

import Settings from '../../components/Settings/Settings'

const options = {
}

export default Settings = StackNavigator({

    Settings:   { screen: Settings },

}, options);