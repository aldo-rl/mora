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

import {
  getWords,
  deleteWord,
} from '../../storage'

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

  const handleDelete = async (word: Word) => {
    const error = await deleteWord(word)
    console.log('error: ', error)
    reloadWord()
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
          <Text style={styles.pipe}>|</Text>
          <Text style={styles.word}>{word.spanish}</Text>
        </ScrollView>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.delete} onPress={() => handleDelete(word)}>
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
