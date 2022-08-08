import React, { useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Modal } from 'components/Modal'
import {
  EmogiMistake,
  SvgReload,
} from 'components/Svg'

import type { Word } from 'types/Word'

import { styles } from './styles'
interface Props {
  handleAutoClose?: () => void,
  mistakeWord: Word,
  handleRefresh: () => void,
}
const Mistake = ({ handleAutoClose, mistakeWord, handleRefresh }: Props) => {
  const [close, setClose] = useState(false)

  const handler = () => {
    setTimeout(() => {
      handleRefresh()
    }, 100)
    setClose(true)
  }

  const WordItem = ({ label, word }: { label: string, word: string }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.key}>{label}</Text>
        <Text style={styles.word}>{word}</Text>
      </View>
    )
  }

  return (
    <Modal handleAutoClose={close ? () => { } : handleAutoClose}>
      <View>
        <View style={styles.content}>
          <View>

            <Text style={styles.title}>{`${EmogiMistake} I'm sorry`}</Text>
            <Text style={styles.message}>Try again later</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.icon}
              onPress={handler}
            >
              <SvgReload />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom}>
          <WordItem label={'Spanish'} word={mistakeWord.spanish} />
          <WordItem label={'Present'} word={mistakeWord.present} />
          <WordItem label={'Past'} word={mistakeWord.past} />
          <WordItem label={'pParticiple'} word={mistakeWord.pParticiple} />
          <WordItem label={'Gerund'} word={mistakeWord.gerund} />
        </View>
      </View>
    </Modal>
  )
}

export { Mistake }
