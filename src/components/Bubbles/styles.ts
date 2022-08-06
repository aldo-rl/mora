import { StyleSheet } from 'react-native'

import { colorPalette } from '../../utils/colorPalette'
const bubbleSize = 320

export const styles = StyleSheet.create({
  bubbles: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    position: 'absolute',
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize,
    opacity: 0.4,
  },
  bubbleTop: {
    top: -25,
    right: - bubbleSize / 2,
    backgroundColor: colorPalette.lightBlue,
  },
  bubbleBotom: {
    bottom: -25,
    left: - bubbleSize / 2,
    backgroundColor: colorPalette.lilac,
  },
  bgBlur: {
    ...StyleSheet.absoluteFillObject,
  },
})
