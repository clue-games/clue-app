import React from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import { OldText } from '../components/StyledText'

const clues = [
  {
    name: 'Deus Modus',
    status: 'Unclaimed',
    reward: '100 TRX'
  },
  {
    name: 'Cicada 3301',
    status: 'Unclaimed',
    reward: '666 TRX'
  }
]

export default class CluesScreen extends React.Component {
  renderRow ({ item }) {
    return (
      <View style={styles.clueContainer}>
        <OldText style={styles.clueText}>{item.name}</OldText>
        <OldText style={styles.clueText}>{item.status} / {item.reward}</OldText>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <OldText style={styles.headerText}>YOUR CLUEs</OldText>
        <FlatList
          data={clues}
          renderItem={this.renderRow}
          keyExtractor={clue => clue.name}
        />
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
  headerText: {
    marginTop: 100,
    marginBottom: 25,
    fontSize: 24
  },
  clueContainer: {
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 25
  },
  clueText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})
