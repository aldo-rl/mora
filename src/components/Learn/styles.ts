import { FONTS } from 'assets/fonts'
import { StyleSheet } from 'react-native'

import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  content: {

  },
  header: {

  },
  title: {
    fontFamily: FONTS.semiBold,
    color: colorPalette.black,
  },
  message: {
    fontFamily: FONTS.regular,
    marginTop: 4,
    color: colorPalette.black,
  }
})
