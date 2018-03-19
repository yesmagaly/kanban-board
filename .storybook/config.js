import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import StylesProvider from '../src/modules/styleguide/StylesProvider'

// Add Global decorators.
addDecorator(story => {
  return <StylesProvider>{ story() }</StylesProvider>
})
// addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>);

// Load all story components
const _require = require.context("../src/modules/styleguide", true, /\.stories\.js$/)

function loadStories() {
  _require.keys().forEach( filename => _require( filename ) )
}

configure(loadStories, module);
