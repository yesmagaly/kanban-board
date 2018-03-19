import React from 'react'
import { storiesOf } from '@storybook/react'
import AddOwner from './AddOwner'
import Owner from './Owner'

storiesOf('Owner', module)
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
