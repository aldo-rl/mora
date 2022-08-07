import React from 'react'
import { View, Platform } from 'react-native'
import { BlurView } from '@react-native-community/blur'


import { styles } from './styles'
import { colorPalette } from '../../utils/colorPalette'

const ios = Platform.OS === 'ios'

const Blur = () => {
  return <BlurView
    style={styles.blur}
    blurType={ios ? 'regular' : 'light'}
    blurAmount={0}
    reducedTransparencyFallbackColor={colorPalette.white}
  />
}

export { Blur }
