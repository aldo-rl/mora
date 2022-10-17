import { StyleSheet } from 'react-native'
import { colorPalette } from '../../utils/colorPalette'

export const styles = StyleSheet.create({
  search: {
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colorPalette.white,
    paddingHorizontal: 20,
    marginLeft: 20,
    flexGrow: 1,
  }
})
