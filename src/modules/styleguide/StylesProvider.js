import React from 'react'
import { ThemeProvider }  from 'styled-components'

import theme from './theme/index'

const StylesProvider = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
  )
}

export default StylesProvider
