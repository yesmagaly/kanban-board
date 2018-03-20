import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './Label'

storiesOf('Label', module)
  .add('Blue', () => (
    <Label />
  ))

  .add('Red', () => (
    <Label kind='red' />
  ))

  .add('Yellow', () => (
    <Label kind='yellow' />
  ))

  .add('Green', () => (
    <Label kind='green' />
  ))
  .add('Purple', () => (
    <Label kind='purple' />
  ))
