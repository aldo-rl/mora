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

  const handlerState = (value: Word) => {
    setState(value)
  }

  const disabled =
    state.spanish === '' ||
    state.present === '' ||
    state.past === '' ||
    state.pParticiple === '' ||
    state.gerund === ''

  return {
    state,
    disabled,
    handlerState,
  }

}

export { useForm }
