import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

interface Props {
  fails: number,
}

const Mistakes = ({ fails }: Props) => {
  const arrayFails = new Array(fails).fill('')
  return (
    <View style={styles.mistakes}>
      {
        arrayFails.map((_, index) => <View key={index} style={styles.mistake} />)
      }
    </View>
  )
}

export { Mistakes }
