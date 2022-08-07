import React, { useState } from 'react'
import { View } from 'react-native'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import type { Word } from 'types/Word'
import { Header } from 'components/Header'

import { styles } from './styles'

const dataInput: [
  'spanish',
  'present',
  'past',
  'pParticiple',
  'gerund',
] = [
    'spanish',
    'present',
    'past',
    'pParticiple',
    'gerund',
  ]

const initialState: Word = {
  spanish: '',
  present: '',
  past: '',
  pParticiple: '',
  gerund: '',
}

const NewWord = () => {
  const [state, setState] = useState<Word>(initialState)

  const handlesave = () => {
    console.log(state)
  }

  const disabled =
    state.spanish === '' ||
    state.present === '' ||
    state.past === '' ||
    state.pParticiple === '' ||
    state.gerund === ''

  return (
    <View style={styles.fleOne}>
      <Header
        title={'Hi'}
        legend={'Great! You will learn a new word'}
      />
      <View style={styles.fleOne}>
        {
          dataInput.map((el) =>
            <Input
              key={el}
              label={el}
              onChange={(text) => setState({ ...state, [el]: text })}
              value={state[el]}
              spacingTop={el !== 'spanish'}
            />
          )
        }
      </View>
      <View>
        <Button text={'Save'} onPress={handlesave} disabled={disabled} />
      </View>
    </View>
  )
}

export { NewWord }
