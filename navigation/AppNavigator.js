import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

import ActivationLoadingScreen from '../screens/ActivationLoadingScreen'
import ActivationNavigator from './ActivationNavigator'
import MainTabNavigator from './MainTabNavigator'

export default createSwitchNavigator({
  Loading: ActivationLoadingScreen,
  Activation: ActivationNavigator,
  Main: MainTabNavigator
}, {
  initialRouteName: 'Loading'
})
