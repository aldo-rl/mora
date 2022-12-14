import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'
import { FONTS } from 'assets/fonts'

export const styles = StyleSheet.create({
  button: {
    padding: 14,
    backgroundColor: colorPalette.blue,
    borderRadius: 12,
    marginTop: 24,
    marginBottom: 32,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    color: colorPalette.white,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
})
