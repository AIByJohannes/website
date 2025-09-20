// Atom One Dark Palette centralised theme
export const oneDark = {
  bg: '#282c34',
  fg: '#abb2bf',
  comment: '#5c6370',
  gutter: '#4b5263',
  red: '#e06c75',
  lightYellow: '#e5c07b',
  darkYellow: '#d19a66',
  green: '#98c379',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
  hoverBg: '#3a3f4c',
} as const

export type Theme = typeof oneDark
