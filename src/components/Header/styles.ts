import { StyleSheet } from 'react-native'

import { FONTS } from 'assets/fonts'
import { colorPalette } from '../../utils/colorPalette'


export const styles = StyleSheet.create({
  header: {
    marginBottom: 12,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBottom: {
    marginTop: 12,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {

  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: colorPalette.black,
  },
  touchable: {
    padding: 6,
    borderRadius: 20,
  },
  legend: {
    fontFamily: FONTS.regular,
    color: colorPalette.black,
  },
})
