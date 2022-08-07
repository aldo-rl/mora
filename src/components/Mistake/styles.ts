import { FONTS } from 'assets/fonts'
import { StyleSheet } from 'react-native'

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
  },
  message: {
    fontFamily: FONTS.regular,
    marginTop: 4,
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
  },
  word: {
    fontFamily: FONTS.semiBold,
  },
})
