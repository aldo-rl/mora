import React from 'react'
import { View, Platform } from 'react-native'
import { BlurView } from '@react-native-community/blur'


import { styles } from './styles'
import { colorPalette } from '../../utils/colorPalette'

const ios = Platform.OS === 'ios'

const Bubbles = () => {
  return (
    <>
      <View style={styles.bubbles}>
        <View style={[styles.bubble, styles.bubbleTop]} />
        <View style={[styles.bubble, styles.bubbleBotom]} />
        <BlurView
          style={styles.bgBlur}
          blurType={ios ? 'regular' : 'light'}
          blurAmount={25}
          reducedTransparencyFallbackColor={colorPalette.white}
        />
      </View>
    </>
  )
}

export { Bubbles }
