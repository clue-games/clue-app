import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import CluesScreen from '../screens/CluesScreen'
import WalletScreen from '../screens/WalletScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
}, {
  headerMode: 'none'
})

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='homeIcon'
    />
  )
}

const CluesStack = createStackNavigator({
  Clues: CluesScreen
}, {
  headerMode: 'none'
})

CluesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='cluesIcon'
    />
  )
}

const WalletStack = createStackNavigator({
  Wallet: WalletScreen
}, {
  headerMode: 'none'
})

WalletStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='walletIcon'
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  CluesStack,
  WalletStack
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 66,
      backgroundColor: '#ffffff',
      shadowColor: 'rgba(0, 0, 0, 0.16)',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: 10,
      shadowOpacity: 1
    }
  }
})
