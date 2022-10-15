import AsyncStorage from '@react-native-async-storage/async-storage';
import { Word } from 'types/Word';

type Error = boolean
export const saveWord = async (word: Word): Promise<Error> => {
  try {
    const words = await getWords()
    await AsyncStorage.setItem('@words', JSON.stringify([...words, word]))
    return false
  } catch (e) {
    return true
  }
}

export const getWords = async (): Promise<Word[]> => {
  try {
    const value = await AsyncStorage.getItem('@words')
    if (value !== null) {
      const words: Word[] = JSON.parse(value)
      return words
    }
    return []
  } catch (e) {
    return []
  }
}

export const deleteWord = async (word: Word): Promise<Error> => {
  try {
    const words = await getWords()
    const newWords = words.filter((w) => (w.past !== word.past && w.present !== word.present))
    await AsyncStorage.setItem('@words', JSON.stringify(newWords))
    return false
  } catch (e) {
    return true
  }
}
