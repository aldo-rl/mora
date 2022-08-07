import { StyleSheet, NativeModules } from 'react-native'

const { StatusBarManager } = NativeModules;

export const styles = StyleSheet.create({
  main: {
    ...StyleSheet.absoluteFillObject,
    paddingBottom: 32,
  },
  content: {
    paddingTop: StatusBarManager.HEIGHT + 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexGrow: 1,
    paddingHorizontal: 16,
  }
})
