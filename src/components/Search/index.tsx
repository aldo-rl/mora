import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'
import { colorPalette } from '../../utils/colorPalette'


interface Props {
  value: string,
  setValue: (value: string) => void,
}
const Search = ({ value, setValue }: Props) => {
  const handleValue = (value: string) => {
    setValue(value)
  }
  return (
    <TextInput
      style={styles.search}
      value={value}
      onChangeText={handleValue}
      placeholder={'Search'}
      placeholderTextColor={colorPalette.gray}
    />
  )
}

export { Search }
