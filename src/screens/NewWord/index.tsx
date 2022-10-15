import React, { useState } from 'react'
import { View } from 'react-native'

import { getWords, saveWord } from 'storage/index'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { useForm } from '../../hooks/useForm'

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

const NewWord = () => {

  const {
    state,
    disabled,
    handlerState,
    handleReset,
  } = useForm()

  const [learn, setLearn] = useState(false)
  const [exist, setExist] = useState(false)

  const existWord = async () => {
    const words = await getWords()
    const el = words.find((el) =>
      el.spanish.toLocaleLowerCase() === state.spanish.toLocaleLowerCase()
    )
    return el ? true : false
  }

  const handleSave = async () => {
    const exist = await existWord()

    if (exist) {
      setExist(true)
      setLearn(true)
      return
    }
    setExist(false)
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

      {
        learn && <Learn
          handleAutoClose={() => setLearn(false)}
          exist={exist}
        />
      }
    </>
  )
}

export { NewWord }
