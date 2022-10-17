import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Mistakes } from 'components/Mistakes'
import { SvgReload } from 'components/Svg'
import { Search } from 'components/Search'

import { styles } from './styles'

interface Props {
  title: string,
  subtitle: string,
  legend: string,
  fails?: number,
  isPractice?: boolean,
  reloadWord?: () => void,
  searchValue?: string,
  setSearch?: (value: string) => void,
}

const Header = (props: Props) => {
  const {
    title,
    subtitle,
    legend,
    isPractice = false,
    fails,
    reloadWord,
    searchValue,
    setSearch,
  } = props

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

          {
            setSearch && <Search value={searchValue ?? ''} setValue={setSearch} />
          }

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
