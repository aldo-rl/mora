import React from 'react'
import type { ReactNode } from 'react'
import {
  Animated,
  View
} from 'react-native'

import { Blur } from 'components/Blur'

import { useAnimation } from 'hooks/useAnimation'

import { styles } from './styles'

interface Props {
  children: ReactNode,
  handleAutoClose?: () => void,
  autoClose?: boolean,
}

const Modal = ({ children, handleAutoClose, autoClose }: Props) => {
  const { opacity, translateY } = useAnimation({
    duration: 250,
    handleAutoClose,
    autoClose
  })
  return (
    <>
      <Animated.View style={[styles.overlay, { opacity }]}>
        <Blur />
      </Animated.View>
      <Animated.View style={[styles.content, { transform: [{ translateY }] }]}>
        {children}
      </Animated.View>
    </>
  )
}

export { Modal }
