import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { OldText } from '../components/StyledText'

export default class WalletScreen extends React.Component {
  onSendPress = (e) => {
    this.props.navigation.navigate('Send')
  }

  onReceivePress = (e) => {
    this.props.navigation.navigate('Receive')
  }

  onTransactionsPress = (e) => {
    this.props.navigation.navigate('Transactions')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <OldText style={styles.headerText}>YOUR WALLET</OldText>
          <OldText style={styles.headerText}>336.00 TRX</OldText>
        </View>
        <TouchableOpacity
          style={styles.walletButton}
          onPress={this.onSendPress}
        >
          <OldText style={styles.walletButtonText}>Send</OldText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.walletButton}
          onPress={this.onReceivePress}
        >
          <OldText style={styles.walletButtonText}>Receive</OldText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.walletButton}
          onPress={this.onTransactionsPress}
        >
          <OldText style={styles.walletButtonText}>Transactions</OldText>
        </TouchableOpacity>
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
