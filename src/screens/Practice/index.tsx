import React, { useEffect } from 'react'
import { View, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { Congratulations } from 'components/Congratulations'
import { Mistake } from 'components/Mistake'

import { DataInput, useForm } from '../../hooks/useForm'
import { useModal } from 'hooks/useModal'


import { getWords } from 'storage/index'

import { styles } from './styles'
import { Word } from 'types/Word'

const dataInput: DataInput = [
  'spanish',
  'present',
  'past',
  'pParticiple',
  'gerund',
]


const Practice = () => {

  const {
    state,
    currentWord,
    fails,
    intents,
    disabled,
    handlerState,
    setCurrentWordPractice,
    handleSpanish,
    setFailswords,
    setTotalIntents,
    handleFinish,
  } = useForm()

  const {
    congratulations,
    setCongratulations,
    mistake,
    setMistake,
  } = useModal()

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
    let fails: DataInput = []

    if (
      currentWord.present.toLocaleLowerCase() !== state.present.toLocaleLowerCase()
    ) fails = [...fails, 'present']

    if (
      currentWord.past.toLocaleLowerCase() !== state.past.toLocaleLowerCase()
    ) fails = [...fails, 'past']

    if (
      currentWord.pParticiple.toLocaleLowerCase() !== state.pParticiple.toLocaleLowerCase()
    ) fails = [...fails, 'pParticiple']

    if (
      currentWord.gerund.toLocaleLowerCase() !== state.gerund.toLocaleLowerCase()
    ) fails = [...fails, 'gerund']

    if (fails.length === 0) {
      handleFinish()
      reloadWord()
      setCongratulations(true)
      return
    }

    if (intents >= 2) {
      setMistake(true)
      handleFinish()
      return
    }

    setFailswords(fails)
    setTotalIntents(fails.length)
  }

  const findFail = (key: string): boolean => {
    const find = fails.find((el) => el === key)
    return find === undefined
      ? false
      : true
  }

  const handleMistake = () => {
    setMistake(false)
    reloadWord()
  }

  return (
    <KeyboardAwareScrollView style={styles.wrapper}>
      <View style={styles.fleOne}>
        <Header
          title={'Hi'}
          subtitle={'Great!'}
          legend={'Time to review the verbs'}
          isPractice
          fails={intents}
          reloadWord={reloadWord}
        />
        <Image
          style={styles.illustration}
          source={require('../../assets/images/illustration.png')}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  fail={findFail(el)}
                />
              )
            }
          </ View>
        </TouchableWithoutFeedback>
        <View>
          <Button text={'Verify'} onPress={handleVerify} disabled={disabled} />
        </View>
      </View>

      {congratulations && <Congratulations handleAutoClose={() => setCongratulations(false)} />}
      {mistake && <Mistake mistakeWord={currentWord} handleRefresh={handleMistake} />}

    </ KeyboardAwareScrollView>
  )
}

export { Practice }
