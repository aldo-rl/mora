import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'

import { FONTS } from 'assets/fonts'

export const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 14,
    paddingLeft: 136,
    paddingRight: 60,
    borderRadius: 12,
    backgroundColor: colorPalette.background,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: 'rgba(0,0,0,0.15)',
    fontFamily: FONTS.regular,
  },
  label: {
    position: 'absolute',
    zIndex: 1,
    left: 24,
  },
  labelText: {
    color: colorPalette.gray,
    fontFamily: FONTS.regular,
  },
  pipe: {
    width: 1,
    height: 24,
    position: 'absolute',
    left: 120,
    zIndex: 1,
    backgroundColor: '#D9D9DA',
  },
  spacingTop: {
    marginTop: 12,
  },
  indicator: {
    position: 'absolute',
    left: -24,
    width: 16,
    height: 16,
    borderRadius: 16,
    zIndex: 1,
    borderWidth: 4,
    borderColor: colorPalette.fail,
  },
})
