import React from 'react'
import { View } from 'react-native'

import { Blur } from 'components/Blur'

import { styles } from './styles'

const Bubbles = () => {
  return (
    <>
      <View style={styles.bubbles}>
        <View style={[styles.bubble, styles.bubbleTop]} />
        <View style={[styles.bubble, styles.bubbleBotom]} />
        <Blur />
      </View>
    </>
  )
}

export { Bubbles }
