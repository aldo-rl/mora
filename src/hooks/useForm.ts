import { useState } from 'react'
import { Word } from 'types/Word'

const initialState: Word = {
  spanish: '',
  present: '',
  past: '',
  pParticiple: '',
  gerund: '',
}

const useForm = () => {
  const [state, setState] = useState<Word>(initialState)
  const [currentWord, setCurrentWord] = useState<Word>(initialState)

  const handlerState = (value: Word) => {
    setState(value)
  }

  const handleReset = () => {
    setState(initialState)
  }

  const setCurrentWordPractice = (word: Word) => {
    setCurrentWord(word)
  }

  const handleSpanish = (value: string) => {
    setState({ ...state, spanish: value })
  }

  const disabled =
    state.spanish === '' ||
    state.present === '' ||
    state.past === '' ||
    state.pParticiple === '' ||
    state.gerund === ''

  return {
    state,
    currentWord,
    disabled,
    handlerState,
    handleReset,
    setCurrentWordPractice,
    handleSpanish,
  }

}

export { useForm }
