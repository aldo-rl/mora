import { useState } from 'react'
import { Word } from 'types/Word'

const initialState: Word = {
  spanish: '',
  present: '',
  past: '',
  pParticiple: '',
  gerund: '',
}

export type DataInput = Array<
  'spanish' |
  'present' |
  'past' |
  'pParticiple' |
  'gerund'
>

const useForm = () => {
  const [state, setState] = useState<Word>(initialState)
  const [currentWord, setCurrentWord] = useState<Word>(initialState)
  const [fails, setFails] = useState<DataInput>([])
  const [intents, setIntents] = useState<number>(0)


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
    setState({ ...initialState, spanish: value })
  }

  const setFailswords = (fails: DataInput) => {
    setFails(fails)
  }

  const setTotalIntents = (fails: number) => {
    if (fails === 0) return
    setIntents(prev => prev + 1)
  }

  const handleFinish = () => {
    setIntents(0)
    setFails([])
  }

  const disabled =
    state.spanish === '' ||
    state.present === '' ||
    state.past === '' ||
    state.pParticiple === '' ||
    state.gerund === '' ||
    intents >= 3

  return {
    state,
    currentWord,
    fails,
    intents,
    disabled,
    handlerState,
    handleReset,
    setCurrentWordPractice,
    handleSpanish,
    setFailswords,
    setTotalIntents,
    handleFinish,
  }

}

export { useForm }
