import React from 'react'
import {
  View
} from 'react-native'

import LottieView from 'lottie-react-native'

import GirlCycling from './LottieView/GirlCycling.json'

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        style={{ width: 300 }}
        resizeMode='contain'
        source={GirlCycling}
        autoSize
        autoPlay
        loop
      />
    </View>
  )
}
