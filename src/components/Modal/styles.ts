import { StyleSheet, Dimensions } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'

export const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    minHeight: 120,
    zIndex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: colorPalette.background,
    borderRadius: 12,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowColor: 'rgba(0,0,0,0.15)',
  }
})
