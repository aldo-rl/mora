import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  button: {
    padding: 14,
    backgroundColor: colorPalette.blue,
    borderRadius: 12,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    color: colorPalette.white,
  },
})
