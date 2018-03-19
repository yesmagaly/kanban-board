import colors from './colors'
import typography from './typography'

// Theme settings object.
const themeSettings = {
  colors,
  typography
}

// Helper function to get font colors.
export const color = name => ({ theme }) => theme.colors[name]

// Helper function to get font families.
export const fontFamily = family => ({ theme }) => theme.typography[family]

// Helper function to get font sizes.
export const fontSize = size => ({ theme }) => theme.typography[size]

export default themeSettings
