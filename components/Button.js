import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export class PrimaryButton extends React.Component {
  render () {
    return (
      <TouchableOpacity style={styles.button}>
        <Text {...this.props} style={[this.props.style, styles.buttonText]} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#000'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
    margin: 10
  }
})
