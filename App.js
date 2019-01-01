import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { Provider } from 'react-redux'
import './ReactotronConfig'
import AppNavigator from './navigation/AppNavigator'
import configureStore from './redux'

const { store, persistor } = configureStore()

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadingComplete: false
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/icon1.png'),
        require('./assets/images/icon2.png'),
        require('./assets/images/icon3.png'),
        require('./assets/images/clueLogo.png'),
        require('./assets/images/clueLogoSignup.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'iowan-old': require('./assets/fonts/IowanOldSt_OSF_BT_Bold.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render () {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
              <AppNavigator />
            </View>
          </PersistGate>
        </Provider>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
