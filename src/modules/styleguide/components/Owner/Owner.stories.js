import React from 'react'
import { storiesOf } from '@storybook/react'

import { MarginDecorator } from '../../StoryDecorators'

import AddOwner from './AddOwner'
import Owner from './Owner'

storiesOf('Owner', module)
  .addDecorator(MarginDecorator)

  .add('Mini', () => (
    <Owner>T</Owner>
  ))

  .add('Mini yellow', () => (
    <Owner kind='yellow'>S</Owner>
  ))

  .add('Mini blue', () => (
    <Owner kind='blue'>A</Owner>
  ))

  .add('AddOwner', () => (
    <AddOwner />
  ))
