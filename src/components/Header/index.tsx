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
  reloadWord?: () => void,
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
    reloadWord,
  } = props

  const isActivePractice = activeScreen === 'practice'

  const handleNavigate = () => {
    navigateTo(isActivePractice ? 'newWord' : 'practice')
  }

  const handlerReload = () => {
    reloadWord && reloadWord()
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          {
            isPractice &&
            <>
              <TouchableOpacity style={styles.touchable} onPress={handlerReload}>
                <SvgReload />
              </TouchableOpacity>
              <Mistakes fails={fails ?? 0} />
            </>
          }

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
