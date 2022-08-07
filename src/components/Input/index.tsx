import React, { useRef } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'

import { styles } from './styles'

interface Props {
  label: string,
  value: string,
  onChange: (text: string) => void,
  spacingTop?: boolean,
}

const Input = ({ label, value, onChange, spacingTop = false }: Props) => {
  const inputRef = useRef<TextInput>(null)

  const handleLabel = () => {
    inputRef.current?.focus()
  }

  return (
    <View style={[styles.inputWrapper, spacingTop && styles.spacingTop]}>
      <TouchableOpacity
        style={styles.label}
        onPress={handleLabel}
      >
        <Text style={styles.labelText}>{label}</Text>
      </TouchableOpacity>
      <View style={styles.pipe} />
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  )
}

export { Input }
