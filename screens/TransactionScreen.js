import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'

const transactions = [
  {
    id: '1',
    time: '4 MINS AGO',
    description: 'CLAIMED 100 TRX from DEUS MODUS'
  },
  {
    id: '2',
    time: '16 MINS AGO',
    description: 'CLAIMED 55 TRX from CICADA 3301'
  }
]

export default class TransactionScreen extends React.Component {
  onBackPress = (e) => {
    this.props.navigation.goBack()
  }

  renderRow = ({ item }) => {
    return (
      <View style={styles.transactionContainer}>
        <OldText style={styles.clueText}>{item.time}</OldText>
        <OldText style={styles.clueText}>{item.description}</OldText>
      </View>
    )
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
          <FlatList
            data={transactions}
            renderItem={this.renderRow}
            keyExtractor={transaction => transaction.id}
          />
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
    fontSize: 18
  },
  transactionContainer: {
    marginBottom: 25
  }
})
