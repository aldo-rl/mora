import React from 'react'
import { Text } from 'react-native'

import { NewWord } from 'screens/NewWord'
import { Practice } from 'screens/Practice'
import { Words } from 'screens/Words'

import { ActiveNavigation } from '../Main'

interface Props {
  activeScreen: ActiveNavigation,
}

const Navigation = ({ activeScreen }: Props) => {

  if (activeScreen === 'practice') {
    return <Practice />
  }

  if (activeScreen === 'newWord') {
    return <NewWord />
  }

  if (activeScreen === 'list') {
    return <Words />
  }

  return <></>
}

export { Navigation }
