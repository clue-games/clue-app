import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import ScanScreen from '../screens/ScanScreen'
import CluesScreen from '../screens/CluesScreen'
import DetailScreen from '../screens/DetailScreen'
import WalletScreen from '../screens/WalletScreen'
import SendScreen from '../screens/SendScreen'
import ReceiveScreen from '../screens/ReceiveScreen'
import TransactionScreen from '../screens/TransactionScreen'

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
  Clues: CluesScreen,
  Detail: DetailScreen
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
  Wallet: WalletScreen,
  Send: SendScreen,
  Receive: ReceiveScreen,
  Transactions: TransactionScreen
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

const TabNavigator = createBottomTabNavigator({
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

export default createStackNavigator({
  TabNavigator: TabNavigator,
  Scan: ScanScreen
}, {
  headerMode: 'none',
  mode: 'modal'
})
