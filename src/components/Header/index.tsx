import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Mistakes } from 'components/Mistakes'

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
}

const Header = ({ title, subtitle, legend, isPractice = false, fails }: Props) => {
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
          <TouchableOpacity style={styles.touchable}>
            <SvgDialog />
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
