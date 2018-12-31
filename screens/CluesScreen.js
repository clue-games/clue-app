import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { OldText } from '../components/StyledText'

const clues = [
  {
    label: 'Deus Modus',
    message: 'Some cryptic message...',
    claimed: false,
    reward: 644
  },
  {
    label: 'Cicada 3301',
    message: 'Some cryptic message...',
    claimed: true,
    reward: 0
  }
]

export default class CluesScreen extends React.Component {
  onCluePress = (clue) => (e) => {
    this.props.navigation.navigate('Detail', { clue })
  }

  getClueText (clue) {
    const status = clue.claimed ? 'Claimed' : 'Unclaimed'
    return `${status}${clue.reward > 0 ? ' / ' + clue.reward + ' TRX' : ''}`
  }

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onCluePress(item)} style={styles.clueContainer}>
        <OldText style={styles.clueText}>{item.label}</OldText>
        <OldText style={styles.clueText}>{this.getClueText(item)}</OldText>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <OldText style={styles.headerText}>YOUR CLUEs</OldText>
        <FlatList
          data={clues}
          renderItem={this.renderRow}
          keyExtractor={clue => clue.label}
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
