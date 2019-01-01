import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { OldText } from '../components/StyledText'
import { PrimaryButton } from '../components/Button'

export default class SeedScreen extends React.Component {
  onBackPress = (e) => {
    this.props.navigation.goBack()
  }

  onConfirmPress = (e) => {
    this.props.navigation.navigate('Home')
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
          <OldText style={styles.headerText}>YOUR PASSWORD</OldText>
        </View>
        <View style={styles.body}>
          <View style={styles.seedContainer}>
            <OldText style={styles.seedText}>
              GLASS MATTER HOUR FORMER ECO NORDIC MYTHOS LUNAR TOOL WINDOW GLOBAL ARC SECRET
            </OldText>
          </View>
          <PrimaryButton onPress={this.onConfirmPress}>
            I'VE WRITTEN IT DOWN
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
  body: {
    flex: 1,
    justifyContent: 'center'
  },
  seedContainer: {
    backgroundColor: '#000',
    marginBottom: 35,
    padding: 10
  },
  seedText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  }
})
