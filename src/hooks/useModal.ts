import { useState } from 'react'

const useModal = () => {
  const [congratulations, setCongratulations] = useState(false)

  return {
    congratulations,
    setCongratulations,
  }
}

export { useModal }
