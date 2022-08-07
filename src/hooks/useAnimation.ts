import { useEffect, useRef } from 'react'

import {
  Animated,
  Easing,
  EasingFunction,
  EasingStatic,
} from 'react-native'

interface Params {
  duration: number,
  easing?: EasingFunction,
  handlerClose?: () => void,
}

const useAnimation = (params: Params) => {
  const {
    duration,
    easing = Easing.in(Easing.ease),
    handlerClose = () => { },
  } = params
  const node = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(node, {
      toValue: 1,
      duration,
      easing,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(node, {
        toValue: 0,
        delay: 1000,
        duration,
        easing,
        useNativeDriver: true
      }).start(handlerClose)
    })
  }, [])


  const opacity = node.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const translateY = node.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0]
  })

  return {
    node,
    opacity,
    translateY,
  }
}

export { useAnimation }
