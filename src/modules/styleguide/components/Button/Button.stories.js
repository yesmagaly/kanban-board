import React from 'react'
import { storiesOf } from '@storybook/react'
import { MarginDecorator } from '../../StoryDecorators'

import Button from './Button'

storiesOf('Button', module)
  .addDecorator(MarginDecorator)

  .add('Normal', () => (
    <Button>Login</Button>
  ))

  .add('Inverse', () => (
    <Button inverse>Hello Button</Button>
  ))
