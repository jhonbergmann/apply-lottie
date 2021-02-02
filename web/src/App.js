import React from 'react'
import Lottie from 'react-lottie'


import GirlCycling from '../src/LottieView/GirlCycling.json'
import './App.css'

export default function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GirlCycling, /* ANIMATION IMAGE JSON */
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="App">
      <Lottie
        options={defaultOptions}
        height={'50%'}
        width={'50%'}
      />
    </div>
  )
}


