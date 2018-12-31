import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { OldText } from '../components/StyledText'

export default class WalletScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <OldText style={styles.headerText}>YOUR WALLET</OldText>
          <OldText style={styles.headerText}>336.00 TRX</OldText>
        </View>
        <View style={styles.walletButton}>
          <OldText style={styles.walletButtonText}>Send</OldText>
        </View>
        <View style={styles.walletButton}>
          <OldText style={styles.walletButtonText}>Receive</OldText>
        </View>
        <View style={styles.walletButton}>
          <OldText style={styles.walletButtonText}>Transactions</OldText>
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
    marginBottom: 25
  },
  headerText: {
    fontSize: 24
  },
  walletButton: {
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 25
  },
  walletButtonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})
