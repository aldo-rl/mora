import { StyleSheet, NativeModules } from 'react-native'
import { colorPalette } from '../../utils/colorPalette';

const { StatusBarManager } = NativeModules;

export const styles = StyleSheet.create({
  bg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colorPalette.white,
  },
  main: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    paddingTop: StatusBarManager.HEIGHT + 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexGrow: 1,
    paddingHorizontal: 16,
  }
})
