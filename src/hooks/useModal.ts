import { useState } from 'react'

const useModal = () => {
  const [congratulations, setCongratulations] = useState(false)
  const [mistake, setMistake] = useState(false)

  return {
    congratulations,
    setCongratulations,
    mistake,
    setMistake,
  }
}

export { useModal }
