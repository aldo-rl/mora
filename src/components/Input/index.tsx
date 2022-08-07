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
  editable?: boolean,
}

const Input = (props: Props) => {
  const {
    label,
    value,
    onChange,
    spacingTop = false,
    fail = false,
    editable = true,
  } = props
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
        disabled={!editable}
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
        editable={editable}
      />

      {fail && <View style={styles.indicator} />}
    </View>
  )
}

export { Input }
