import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { MonoText } from '../components/StyledText'

export default class CluesScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <MonoText>Clues Screen</MonoText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
