import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { BlurView } from '@react-native-community/blur'

import { styles } from './styles'
import { colorPalette } from '../../utils/colorPalette'

import { ActiveNavigation } from '../Main'


import {
  SvgDialog,
  SvgAdd,
  SvgList,
} from '../Svg'

type ActiveTab = 'practice' | 'newWord' | 'list'

interface Props {
  navigate: (screen: ActiveNavigation) => void,
  activeScreen: ActiveNavigation,
}

const BototmNavigation = ({ navigate, activeScreen }: Props) => {

  const handleNavigate = (screen: ActiveNavigation) => {
    navigate(screen)
  }
  return (
    <BlurView
      style={styles.bottomNavigation}
      blurType={'light'}
      blurAmount={25}
      reducedTransparencyFallbackColor={colorPalette.white}
    >
      <TouchableOpacity
        style={[
          styles.svg,
          activeScreen === 'practice' && styles.svgActive
        ]}
        onPress={() => handleNavigate('practice')}
      >
        <SvgDialog />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.svg,
          activeScreen === 'newWord' && styles.svgActive
        ]}
        onPress={() => handleNavigate('newWord')}
      >
        <SvgAdd />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.svg,
          activeScreen === 'list' && styles.svgActive
        ]}
        onPress={() => handleNavigate('list')}
      >
        <SvgList />
      </TouchableOpacity>

    </BlurView>
  )
}

export { BototmNavigation }
