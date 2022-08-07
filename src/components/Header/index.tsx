import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  SvgReload,
  SvgDialog,
  SvgAdd,
} from 'components/Svg'

import { styles } from './styles'

interface Props {
  title: string,
  fails?: number,
  legend: string,
}

const Header = ({ title, legend }: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.touchable}>
            <SvgReload />
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <TouchableOpacity style={styles.touchable}>
            <SvgDialog />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.headerBottom}>
        <Text style={styles.legend}>{legend}</Text>
      </View>
    </View>
  )
}

export { Header }
