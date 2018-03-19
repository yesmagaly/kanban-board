import styled, { css } from 'styled-components'
import { color, fontFamily, fontSize } from '../../theme/index'

const Button = styled.button`
  background: ${color('blue')};
  border: 1px solid transparent;
  border-radius: 3px;
  padding: .95rem 1.25rem;
  color: ${color('white')};
  cursor: pointer;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize('small')};
  font-weight: 900;
  min-width: 100px;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  ${props => props.inverse && css`
    background: #444;
  `}
`

export default Button
