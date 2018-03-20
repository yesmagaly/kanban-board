import React from 'react'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const CenterDecorator = story => (
  <Center>{ story() }</Center>
)

const Padding = styled.div`
  margin: 8px;
`

export const MarginDecorator = story => (
  <Padding>{ story() }</Padding>
)
