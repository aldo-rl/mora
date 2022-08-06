import React, { useRef } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'

import { styles } from './styles'

const Input = () => {
  const inputRef = useRef<TextInput>(null)

  const handleLabel = () => {
    inputRef.current?.focus()
  }

  return (
    <View style={styles.inputWrapper}>
      <TouchableOpacity
        style={styles.label}
        onPress={handleLabel}
      >
        <Text style={styles.labelText}>Label</Text>
      </TouchableOpacity>
      <View style={styles.pipe} />
      <TextInput
        ref={inputRef}
        style={styles.input}
      />
    </View>
  )
}

export { Input }
