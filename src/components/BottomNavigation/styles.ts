import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 68,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  svg: {
    padding: 8,
    opacity: 0.5,
  },
  svgActive: {
    opacity: 1,
  }
})
