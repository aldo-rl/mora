import React, { useState } from 'react'

import { NewWord } from 'screens/NewWord'
import { Practice } from 'screens/Practice'

export type ActiveScreen = 'practice' | 'newWord'

const Navigation = () => {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('practice')

  const handleNavigate = (screen: ActiveScreen) => {
    setActiveScreen(screen)
  }

  return activeScreen === 'practice'
    ? <Practice
      activeScreen={activeScreen}
      navigateTo={handleNavigate}
    />
    : <NewWord
      activeScreen={activeScreen}
      navigateTo={handleNavigate}
    />


}

export { Navigation }
