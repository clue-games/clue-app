import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
}

export default class HomeScreen extends React.Component {
  onSwipeDown = (e) => {
    this.props.navigation.navigate('Scan')
  }

  render () {
    return (
      <GestureRecognizer
        style={styles.container}
        config={config}
        onSwipeDown={this.onSwipeDown}
      >
        <Image
          style={styles.logo}
          source={require('../assets/images/clueLogo.png')}
        />
        <OldText style={styles.centerText}>
          Something hidden deep within,{'\n'} unlock a CLUE to begin.
        </OldText>
        <Ionicons
          name='ios-arrow-down'
          size={42}
          style={styles.bottomArrow}
        />
      </GestureRecognizer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 25
  },
  centerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  bottomArrow: {
    position: 'absolute',
    bottom: 25
  }
})
