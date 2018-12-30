import React from 'react'
import { Image, StyleSheet } from 'react-native'

const images = {
  homeIcon: require('../assets/images/icon1.png'),
  cluesIcon: require('../assets/images/icon2.png'),
  walletIcon: require('../assets/images/icon3.png')
}

export default class TabBarIcon extends React.Component {
  render () {
    return (
      <Image
        source={images[this.props.name]}
        style={this.props.focused ? styles.normal : styles.highlighted}
      />
    )
  }
}

const styles = StyleSheet.create({
  highlighted: {
    opacity: 0.3
  },
  normal: {

  }
})
