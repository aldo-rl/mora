import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

interface Props {
  text: string,
  disabled?: boolean,
  onPress: () => void,
}

const Button = ({ text, onPress, disabled = false }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export { Button }
