import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'



export const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'center',
    // marginLeft: 50,
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
    shadowColor: 'rgba(0,0,0,0.15)'
  },
  label: {
    position: 'absolute',
    zIndex: 1,
    left: 24,
  },
  labelText: {
    color: colorPalette.gray,
  },
  pipe: {
    width: 1,
    height: 24,
    position: 'absolute',
    left: 120,
    zIndex: 1,
    backgroundColor: '#D9D9DA',
  },
})
