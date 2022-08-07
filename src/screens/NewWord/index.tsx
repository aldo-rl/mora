import React, { useState } from 'react'
import { View } from 'react-native'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { useForm } from '../../hooks/useForm'

import type { ActiveScreen } from 'components/Navigation'

import { saveWord } from 'storage/index'

import { styles } from './styles'
import { Learn } from 'components/Learn'

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

interface Props {
  activeScreen: ActiveScreen,
  navigateTo: (screen: ActiveScreen) => void
}

const NewWord = ({ activeScreen, navigateTo }: Props) => {

  const {
    state,
    disabled,
    handlerState,
    handleReset,
  } = useForm()

  const [learn, setLearn] = useState(false)

  const handleSave = async () => {
    const err = await saveWord(state)
    if (err) return
    handleReset()
    setLearn(true)
  }

  return (
    <>
      <View style={styles.fleOne}>
        <Header
          title={'Hi'}
          subtitle={'Great!'}
          legend={'You will learn a new word'}
          activeScreen={activeScreen}
          navigateTo={navigateTo}
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
          <Button text={'Save'} onPress={handleSave} disabled={disabled} />
        </View>
      </View>
      {learn && <Learn handleAutoClose={() => setLearn(false)} />}


    </>
  )
}

export { NewWord }
