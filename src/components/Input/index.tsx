import React, { useRef, useState, useEffect } from 'react'
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
  fail?: boolean,
}

const Input = ({ label, value, onChange, spacingTop = false, fail = false }: Props) => {
  const inputRef = useRef<TextInput>(null)
  const [isFocus, setIsFocus] = useState(false)

  const handleLabel = () => {
    inputRef.current?.focus()
  }

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <View style={[styles.inputWrapper, spacingTop && styles.spacingTop]}>
      <TouchableOpacity
        style={styles.label}
        onPress={handleLabel}
      >
        <Text style={[styles.labelText, isFocus && styles.labelFocus]}>{label}</Text>
      </TouchableOpacity>
      <View style={styles.pipe} />
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {fail && <View style={styles.indicator} />}
    </View>
  )
}

export { Input }
