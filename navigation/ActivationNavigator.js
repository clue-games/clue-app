import React from 'react'
import { createStackNavigator } from 'react-navigation'

import ActivationScreen from '../screens/ActivationScreen'
import SeedScreen from '../screens/SeedScreen'

const ActivationStack = createStackNavigator({
  Activation: ActivationScreen,
  Seed: SeedScreen
}, {
  headerMode: 'none'
})

export default ActivationStack
