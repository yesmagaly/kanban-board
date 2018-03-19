import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('Normal', () => (
    <Button>Hello Button</Button>
  ))

  .add('Inverse', () => (
    <Button inverse>Hello Button</Button>
  ))
