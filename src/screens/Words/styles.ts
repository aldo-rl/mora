import { StyleSheet } from 'react-native'
import { FONTS } from 'assets/fonts'
import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  wordContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: 'rgba(0,0,0,0.15)',
    marginBottom: 10,
  },
  scroll: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },
  word: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  pipe: {
    marginHorizontal: 10,
    color: colorPalette.gray,
  },
  actions: {
    width: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  delete: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
})
