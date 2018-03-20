import React from 'react'
import { storiesOf } from '@storybook/react'
import { MarginDecorator } from '../../StoryDecorators'

import Card from '../Card/Card'
import List from './List'
import { cardMock } from '../Card/Card.stories'
storiesOf('List', module)
  .addDecorator(MarginDecorator)

  .add('Empty', () => (
    <List />
  ))

  .add('Normal', () => (
    <List title='Product Checkup'>
      <Card title='Stage 2 - Understand' />
      <Card { ...cardMock } />
    </List>
  ))
