import React, { useEffect } from 'react'
import { View, Image } from 'react-native'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { useForm } from '../../hooks/useForm'

import type { ActiveScreen } from 'components/Navigation'

import { getWords } from 'storage/index'

import { styles } from './styles'
import { Word } from 'types/Word'

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
  navigateTo: (screen: ActiveScreen) => void,
}

const Practice = ({ activeScreen, navigateTo }: Props) => {

  const {
    state,
    currentWord,
    disabled,
    handlerState,
    setCurrentWordPractice,
    handleSpanish,
  } = useForm()

  useEffect(() => {
    reloadWord()
  }, [])

  const reloadWord = async () => {
    const words = await getWords()
    const randomNumber = Math.round(Math.random() * (words.length - 1))
    const wordRandom: Word = words[randomNumber]

    if (!wordRandom) return
    setCurrentWordPractice(wordRandom)
    handleSpanish(wordRandom.spanish)
  }


  const handleVerify = async () => {

  }

  return (
    <View style={styles.fleOne}>
      <Header
        title={'Hi'}
        subtitle={'Great!'}
        legend={'Time to review the verbs'}
        isPractice
        fails={3}
        activeScreen={activeScreen}
        navigateTo={navigateTo}
        reloadWord={reloadWord}
      />
      <Image
        style={styles.illustration}
        source={require('../../assets/images/illustration.png')}
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
              editable={el !== 'spanish'}
            />
          )
        }
      </View>
      <View>
        <Button text={'Verify'} onPress={handleVerify} disabled={disabled} />
      </View>
    </View>
  )
}

export { Practice }
