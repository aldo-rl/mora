import { FONTS } from 'assets/fonts'
import { StyleSheet } from 'react-native'

import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  icon: {
    padding: 5,
  },
  title: {
    fontFamily: FONTS.semiBold,
    color: colorPalette.black,

  },
  message: {
    fontFamily: FONTS.regular,
    marginTop: 4,
    color: colorPalette.black,

  },
  bottom: {
    marginTop: 24,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  key: {
    width: 120,
    fontFamily: FONTS.regular,
    color: colorPalette.black,

  },
  word: {
    fontFamily: FONTS.semiBold,
    color: colorPalette.black,
  },
})
