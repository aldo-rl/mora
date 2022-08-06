import React from 'react'
import type { ReactNode } from 'react'

import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'

import { styles } from './style'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
      </View>
    </>
  )
}

export { Main }
