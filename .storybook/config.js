import { configure } from '@storybook/react';

function loadStories() {
  // Load all story components
  const reqs = require.context("../src/modules/styleguide", true, /\.stories\.js$/)

  reqs.keys().forEach( filename => reqs( filename ) )
}

configure(loadStories, module);
