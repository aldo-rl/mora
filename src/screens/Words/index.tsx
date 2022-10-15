import React, {
  useEffect,
  useState,
} from 'react'

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { getWords } from '../../storage'

import { Header } from 'components/Header'

import { Word } from 'types/Word'
import { styles } from './styles'


const Words = () => {

  const [words, setWords] = useState<Word[]>([])

  useEffect(() => {
    reloadWord()
  }, [])

  const reloadWord = async () => {
    const wrds = await getWords()
    setWords(wrds)

  }


  const Word = ({ word }: { word: Word }) => {
    return (
      <View style={styles.wordContainer}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.word}>{word.present}</Text>
          {/* <Text style={styles.pipe}>|</Text>
          <Text style={styles.word}>{word.past}</Text>
          <Text style={styles.pipe}>|</Text>
          <Text style={styles.word}>{word.pParticiple}</Text>
          <Text style={styles.pipe}>|</Text>
          <Text style={styles.word}>{word.pParticiple}</Text> */}
          <Text style={styles.pipe}>|</Text>
          <Text style={styles.word}>{word.spanish}</Text>
        </ScrollView>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.delete}>
            <Text>🖋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}>
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <>
      <View>
        <Header
          title={'Your verbs'}
          subtitle={'🎉 Wow!'}
          legend={'You have too many verbs'}
        />

        <View>
          {
            words && words.map((word, i) =>
              <Word key={`${i}-${word.present}`} word={word} />
            )
          }
        </View>

      </View>
    </>
  )
}

export { Words }
