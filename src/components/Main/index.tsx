import React from 'react'
import type { ReactNode } from 'react'

import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native'

import { Bubbles } from 'components/Bubbles'

import { styles } from './styles'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Bubbles />
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
      </View>
    </>
  )
}

export { Main }
