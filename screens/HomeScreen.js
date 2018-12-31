import React from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/clueLogo.png')}
        />
        <OldText style={styles.centerText}>
          Something hidden deep within, unlock a CLUE to begin.
        </OldText>
        <Ionicons
          name='ios-arrow-down'
          size={42}
          style={styles.bottomArrow}
        />
      </View>
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
