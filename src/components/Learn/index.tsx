import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import { Modal } from 'components/Modal'
import { EmogiLike } from 'components/Svg'

import { styles } from './styles'
interface Props {
  handleAutoClose?: () => void,
}
const Learn = ({ handleAutoClose }: Props) => {
  return (
    <Modal handleAutoClose={handleAutoClose} autoClose>
      <View style={styles.content}>
        <Text style={styles.title}>{`${EmogiLike} Great!`}</Text>
        <Text style={styles.message}>You already learned this word</Text>
      </View>
    </Modal>
  )
}

export { Learn }
