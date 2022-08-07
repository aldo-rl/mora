import React, { useState } from 'react'
import { View } from 'react-native'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { useForm } from '../../hooks/useForm'
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



const NewWord = () => {

  const {
    state,
    disabled,
    handlerState,
  } = useForm()


  const handlesave = () => {
    console.log(state)
  }

  return (
    <View style={styles.fleOne}>
      <Header
        title={'Hi'}
        subtitle={'Great!'}
        legend={'You will learn a new word'}
      />
      <View style={styles.fleOne}>
        {
          dataInput.map((el) =>
            <Input
              key={el}
              label={el}
              onChange={(text) => handlerState({ ...state, [el]: text })}
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
