import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'
import { PrimaryButton } from '../components/Button'

export default class TransactionScreen extends React.Component {
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
          <OldText style={styles.headerText}>TRANSACTIONS</OldText>
        </View>
        <View>
          <OldText style={styles.clueText}>
            some cryptic message..
          </OldText>
          <PrimaryButton>
            CLAIM CLUE
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
