import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

class ActivationLoadingScreen extends Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    if (!this.props.wallet) {
      return this.props.navigation.navigate('Activation')
    }

    return this.props.navigation.navigate('Main')
  }

  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})

export default connect(
  state => ({}),
  {}
)(ActivationLoadingScreen)
