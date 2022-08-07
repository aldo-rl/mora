import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Mistakes } from 'components/Mistakes'

import type { ActiveScreen } from 'components/Navigation'

import {
  SvgReload,
  SvgDialog,
  SvgAdd,
} from 'components/Svg'

import { styles } from './styles'

interface Props {
  title: string,
  subtitle: string,
  legend: string,
  fails?: number,
  isPractice?: boolean,
  activeScreen: ActiveScreen,
  navigateTo: (screen: ActiveScreen) => void,
}

const Header = (props: Props) => {
  const {
    title,
    subtitle,
    legend,
    isPractice = false,
    fails,
    activeScreen,
    navigateTo,
  } = props

  const isActivePractice = activeScreen === 'practice'

  const handleNavigate = () => {
    navigateTo(isActivePractice ? 'newWord' : 'practice')
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.touchable}>
            <SvgReload />
          </TouchableOpacity>
          {isPractice && <Mistakes fails={fails ?? 0} />}

        </View>

        <View style={styles.right}>
          <TouchableOpacity style={styles.touchable} onPress={handleNavigate}>
            {
              isActivePractice
                ? <SvgAdd />
                : <SvgDialog />
            }
          </TouchableOpacity>
        </View>


      </View>

      <View style={styles.headerBottom}>
        <Text style={styles.legend}>{subtitle}</Text>
        <Text style={styles.legend}>{legend}</Text>
      </View>
    </View>
  )
}

export { Header }
