import React from 'react'
import styled, { ThemeProvider, injectGlobal }  from 'styled-components'

import theme from './theme/index'

// Global styles.
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

  body {
    margin: 0;
  }
`

const StylesProvider = ({ children }) => (
  <ThemeProvider theme={ theme }>
    { children }
  </ThemeProvider>
)

export default StylesProvider
