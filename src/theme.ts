// Atom One Dark Palette centralised theme (matches blog design)
export const oneDark = {
  bg: '#282c34',
  bg2: '#21252b',
  card: '#2c313c',
  fg: '#abb2bf',
  heading: '#e6e6e6',
  muted: '#9da5b4',
  comment: '#5c6370',
  gutter: '#4b5263',
  border: '#3a3f4b',
  link: '#61afef',
  linkHover: '#56b6c2',
  red: '#e06c75',
  lightYellow: '#e5c07b',
  darkYellow: '#d19a66',
  green: '#98c379',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
  hoverBg: '#3a3f4c',
} as const

// Atom One Light Palette (matches Android One Light theme)
export const oneLight = {
  bg: '#fafafa',
  bg2: '#f0f0f0',
  card: '#f0f0f0',
  fg: '#383a42',
  heading: '#383a42',
  muted: '#696c77',
  comment: '#a0a1a7',
  gutter: '#e5e5e5',
  border: '#e1e1e1',
  link: '#0184bc',
  linkHover: '#0997b3',
  red: '#e45649',
  lightYellow: '#c18401',
  darkYellow: '#986801',
  green: '#50a14f',
  blue: '#0184bc',
  magenta: '#a626a4',
  cyan: '#0997b3',
  hoverBg: '#f5f5f5',
} as const

export type Theme = typeof oneDark | typeof oneLight
