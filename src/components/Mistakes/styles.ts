import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  mistakes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  mistake: {
    width: 10,
    height: 10,
    borderRadius: 12,
    marginRight: 4,
    backgroundColor: colorPalette.fail,
  },
})
