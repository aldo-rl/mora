import React, {
  useEffect,
  useState,
} from 'react'

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native'

import {
  getWords,
  deleteWord,
} from '../../storage'

import { Header } from 'components/Header'

import { Word } from 'types/Word'
import { styles } from './styles'


const Words = () => {

  const [originalWords, setOriginalWords] = useState<Word[]>([])
  const [words, setWords] = useState<Word[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadWords()
  }, [])

  useEffect(() => {
    const wodrFilter = originalWords.filter((word) => {
      return word.spanish.toLowerCase().includes(search.toLowerCase())
        || word.present.toLowerCase().includes(search.toLowerCase())
        || word.past.toLowerCase().includes(search.toLowerCase())
        || word.pParticiple.toLowerCase().includes(search.toLowerCase())
        || word.gerund.toLowerCase().includes(search.toLowerCase())

    })
    setWords(wodrFilter)
  }, [search])

  const loadWords = async () => {
    const wrds = await getWords()
    setWords(wrds)
    setOriginalWords(wrds)
  }

  const handleDelete = async (word: Word) => {
    await deleteWord(word)
    loadWords()
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
          searchValue={search}
          setSearch={(value: string) => setSearch(value)}
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
