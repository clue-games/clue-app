import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
import { Ionicons } from '@expo/vector-icons'

export default class ScanScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
  }

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  onClose = () => {
    this.props.navigation.goBack()
  }

  render () {
    const { hasCameraPermission } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-start',
                  alignItems: 'center'
                }}
                onPress={this.onClose}>
                <Ionicons
                  name='ios-close'
                  size={42}
                  style={{ color: 'white', marginTop: 50, marginLeft: 25 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
    }
  }
}
