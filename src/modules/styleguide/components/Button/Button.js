import React from 'react'
import styled, { css } from 'styled-components'
import { color, fontFamily, fontSize } from '../../theme'

const Button  = styled.button`
  background: skyblue;
  padding: 1rem 1.75rem;
  border-radius: 30px;
  min-width: 100px;
  border: 1px solid transparent;
  font-weight: bold;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize('small')};
  color: ${color('red')};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${ props => props.inverse && css`
    background: #444;
  `}
`

export default Button
