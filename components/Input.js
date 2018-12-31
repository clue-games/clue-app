import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { OldText } from './StyledText'

export class FormInput extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <OldText style={styles.label}>{this.props.label}</OldText>
        <TextInput
          {...this.props}
          style={[this.props.style, styles.input]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25
  },
  label: {
    marginBottom: -4,
    fontSize: 16
  },
  input: {
    color: '#000',
    padding: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
