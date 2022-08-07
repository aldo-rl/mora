import { StyleSheet } from 'react-native'

import { FONTS } from 'assets/fonts'


export const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBottom: {
    marginTop: 24,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {

  },
  title: {
    fontSize: 24,
    paddingBottom: 2,
    fontFamily: FONTS.bold,
  },
  touchable: {
    padding: 6,
    borderRadius: 20,
  },
  legend: {
    fontFamily: FONTS.regular,
  },
})
