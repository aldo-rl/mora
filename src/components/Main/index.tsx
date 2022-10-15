import React, { useState } from 'react'
import type { ReactNode } from 'react'

import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native'

import { Navigation } from 'components/Navigation'
import { Bubbles } from 'components/Bubbles'
import { BototmNavigation } from 'components/BottomNavigation'

import { styles } from './styles'

export type ActiveNavigation = 'practice' | 'newWord' | 'list'

const Main = () => {
  const [activeScreen, setActiveScreen] = useState<ActiveNavigation>('practice')

  const navigate = (screen: ActiveNavigation) => {
    setActiveScreen(screen)
  }

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={styles.bg} />
      <Bubbles />
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.content}>
          <Navigation
            activeScreen={activeScreen}
          />
        </ScrollView>
      </View>
      <BototmNavigation
        navigate={navigate}
        activeScreen={activeScreen}

      />
    </>
  )
}

export { Main }
