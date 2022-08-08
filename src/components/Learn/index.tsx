import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import { Modal } from 'components/Modal'
import { EmogiGreat, EmogiLike } from 'components/Svg'

import { styles } from './styles'
interface Props {
  handleAutoClose?: () => void,
  exist: boolean,
}
const Learn = ({ handleAutoClose, exist }: Props) => {
  const message = exist
    ? 'This word already exists'
    : 'You already learned this word'

  const title = exist
    ? `${EmogiGreat} Ops!`
    : `${EmogiLike} Great!`
  return (
    <Modal handleAutoClose={handleAutoClose} autoClose>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Modal>
  )
}

export { Learn }
