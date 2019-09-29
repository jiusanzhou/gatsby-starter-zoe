import colors from './colors'
import fonts from './fonts'
import headings from './variants/heading'
import text from './variants/text'

import { darken, lighten } from 'polished'
import _ from 'lodash'

const { fontFamily, fontSize, lineHeight } = fonts

const createShades = color => {
  if (_.isObject(color)) return color
  return {
    main: color,
    light: lighten(0.1, color),
    dark: darken(0.1, color),
  }
}

const createColors = colors => {
  return _.reduce(
    colors,
    (acc, val, key) => {
      acc[key] = createShades(val)
      return acc
    },
    {}
  )
}

const colors = createColors({
  ...defaultColors,
})

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]
export const weights = [400, 700]
export const radius = 4
export const font = 'Fredoka One, Roboto'
export const monospace = "menlo, 'Ubuntu Mono', 'Courier New', monospace"
export const breakpoints = [32, 48, 64, 90]
export const space = [0, 4, 8, 16, 36, 46, 128]

export default {
  colors,
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  radius,
}

// export default {
//   breakpoints: [640, 720, 1024, 1200, 1700],
//   fontSizes: fontSize,
//   fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   lineHeights: lineHeight,
//   colors,
//   space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 128, 256],
//   radii: [0, 4, 8, 16],
//   fonts: fontFamily,
//   shadows: {
//     small: '0 0 4px rgba(0, 0, 0, .1)',
//     medium: '0 0 16px rgba(0,0,0,.1)',
//     large: '0 0 24px -2px rgba(0, 0, 0, .1)',
//     hover: '0 0 24px 0px rgba(0, 0, 0, .12)',
//   },
//   maxWidths: [64, 128, 256, 512, 640, 960, 1120],

//   //These are our custom variants
//   variants: {
//     headings: headings,
//     text: text,
//   },
// }