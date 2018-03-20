import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

const data = {
  title: 'Stage 3 - Understand',
  owners: [
    {
      name: 'Joseph',
      color: 'yellow',
    },
    {
      name: 'Akjhf',
      color: 'blue',
    }
  ],

  labels: [
    {
      name: 'Frontend',
      color: 'yellow',
    },
    {
      name: 'Frontend',
      color: 'red',
    },
    {
      name: 'Frontend',
      color: 'blue',
    }
  ]
}

storiesOf('Card', module)
  .add('Main', () => (
    <Card title='Stage 2 - Understand' />
  ))

  .add('Second', () => (
    <Card { ...data } />
  ))
