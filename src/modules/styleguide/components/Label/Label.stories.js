import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './Label'

storiesOf('Label', module)
  .add('Blue', () => (
    <Label />
  ))

  .add('Red', () => (
    <Label red />
  ))

  .add('Yellow', () => (
    <Label yellow />
  ))

  .add('Green', () => (
    <Label green />
  ))
  .add('Purple', () => (
    <Label purple />
  ))
