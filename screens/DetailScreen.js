import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'
import { PrimaryButton } from '../components/Button'

export default class DetailScreen extends React.Component {
  constructor (props) {
    super(props)
    const { navigation } = props
    const clue = navigation.getParam('clue', {})
    this.state = {
      clue
    }
  }

  onBackPress = (e) => {
    this.props.navigation.goBack()
  }

  onClaimPress = (e) => {
    if (!this.state.clue.claimed) {
      console.log('claim')
    }
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
          <OldText style={styles.headerText}>{this.state.clue.label}</OldText>
        </View>
        <View>
          <OldText style={styles.clueText}>{this.state.clue.message}</OldText>
          <PrimaryButton onPress={this.onClaimPress} disabled={this.state.clue.claimed}>
            {this.state.clue.claimed ? 'CLUE CLAIMED' : 'CLAIM CLUE'}
          </PrimaryButton>
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
  }
})
