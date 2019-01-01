import React from 'react'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'
import { PrimaryButton } from '../components/Button'

export default class ActivationScreen extends React.Component {
  onGetStartedPress = (e) => {
    this.props.navigation.navigate('Seed')
  }

  render () {
    return (
      <View
        style={styles.container}
      >
        <Image
          style={styles.logo}
          source={require('../assets/images/clueLogoSignup.png')}
        />
        <PrimaryButton onPress={this.onGetStartedPress} style={styles.button}>
          GET STARTED
        </PrimaryButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  logo: {
    marginBottom: 50
  },
  button: {
    width: '100%'
  }
})
