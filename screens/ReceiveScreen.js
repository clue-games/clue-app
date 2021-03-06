import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'
import { FormInput } from '../components/Input'
import { PrimaryButton } from '../components/Button'

export default class ReceiveScreen extends React.Component {
  onBackPress = (e) => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onBackPress}>
            <Ionicons
              name='ios-arrow-back'
              size={32}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <OldText style={styles.headerText}>RECEIVE</OldText>
        </View>
        <View>
          <FormInput
            label='AMOUNT'
          />
          <FormInput
            label='DESCRIPTION (OPTIONAL)'
          />
          <PrimaryButton style={styles.generateButton}>GENERATE REQUEST</PrimaryButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  header: {
    marginTop: 100,
    flexDirection: 'row',
    height: 60
  },
  backArrow: {
    marginRight: 25
  },
  headerText: {
    fontSize: 24
  },
  clueText: {
    fontSize: 18,
    marginBottom: 35
  },
  generateButton: {
    marginTop: 25
  }
})
