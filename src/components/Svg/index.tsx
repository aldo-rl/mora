import React from 'react'
import {
  Svg,
  Path,
} from 'react-native-svg'

interface Props {
  size?: number,
  stroke?: number,
}

export const SvgDialog = ({ size = 24, stroke = 2 }: Props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
  // xmlns="http://www.w3.org/2000/svg"
  // {...props}
  >
    <Path
      d="M12.5 16.25c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121 0-2.828 0-4.243-.879-5.121-.878-.879-2.293-.879-5.121-.879h-3c-2.828 0-4.243 0-5.121.879C3.5 6.007 3.5 7.422 3.5 10.25c0 2.828 0 4.243.879 5.121.49.49 1.146.707 2.121.803"
      stroke="#232425"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 16.25c-.927 0-1.948.375-2.88.859-1.5.777-2.248 1.167-2.617.918-.37-.247-.3-1.016-.16-2.553l.032-.349"
      stroke="#232425"
      strokeWidth={stroke}
      strokeLinecap="round"
    />
  </Svg>
)

export const SvgAdd = ({ size = 24, stroke = 1.15 }: Props) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <Path
      d="M11 6.5a.75.75 0 0 1 .75.75v3h3a.75.75 0 1 1 0 1.5h-3v3a.75.75 0 1 1-1.5 0v-3h-3a.75.75 0 1 1 0-1.5h3v-3A.75.75 0 0 1 11 6.5Z"
      fill="#232425"
    />
    <Path
      d="M2 11a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-7.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
      fill="#232425"
    />
  </Svg>
)

export const SvgReload = ({ size = 24, stroke = 1.15 }: Props) => (
  <Svg
    width={size}
    height={size}
    fill="none"
  >
    <Path
      d="M14.571 4.393a1.15 1.15 0 1 1-1.294 1.9 5.747 5.747 0 1 0 2.516 4.754 1.15 1.15 0 1 1 2.299 0 8.046 8.046 0 1 1-3.52-6.654Z"
      fill="#232425"
    />
    <Path
      d="M14.114 13.927a1.15 1.15 0 0 1-1.563-1.626c.086-.124.196-.23.323-.31l4.003-2.56a1.15 1.15 0 0 1 1.238 1.937l-4.001 2.56Z"
      fill="#232425"
    />
    <Path
      d="M20.279 13.817a1.15 1.15 0 0 1-2.099.937l-1.733-3.885a1.15 1.15 0 1 1 2.099-.937l1.733 3.885Z"
      fill="#232425"
    />
  </Svg>
)

export const EmogiGreat = '🎉`'
export const EmogiMistake = '😓'
export const EmogiLike = '👍'
