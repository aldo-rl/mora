import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import { Modal } from 'components/Modal'
import { EmogiGreat } from 'components/Svg'

import { styles } from './styles'
interface Props {
  handleAutoClose?: () => void,
}
const Congratulations = ({ handleAutoClose }: Props) => {
  return (
    <Modal handleAutoClose={handleAutoClose} autoClose>
      <View style={styles.content}>
        <Text style={styles.title}>{`${EmogiGreat} Congratulations`}</Text>
        <Text style={styles.message}>You are good</Text>
      </View>
    </Modal>
  )
}

export { Congratulations }
