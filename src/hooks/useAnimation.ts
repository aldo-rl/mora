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
  handleAutoClose?: () => void,
  autoClose?: boolean,
}

const useAnimation = (params: Params) => {
  const {
    duration,
    easing = Easing.in(Easing.ease),
    handleAutoClose,
    autoClose = false
  } = params
  const node = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(node, {
      toValue: 1,
      duration,
      easing,
      useNativeDriver: true
    }).start(() => {
      if (!autoClose && !handleAutoClose) return
      Animated.timing(node, {
        toValue: 0,
        delay: 1200,
        duration: duration / 2,
        easing,
        useNativeDriver: true
      }).start(handleAutoClose)
    })
  }, [])

  useEffect(() => {
    if (!handleAutoClose || autoClose) return

    Animated.timing(node, {
      toValue: 0,
      duration: duration / 2,
      easing,
      useNativeDriver: true
    }).start(handleAutoClose)
  }, [handleAutoClose])


  const opacity = node.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const translateY = node.interpolate({
    inputRange: [0, 1],
    outputRange: [300, -68]
  })

  return {
    node,
    opacity,
    translateY,
  }
}

export { useAnimation }
