import styled, { css } from 'styled-components'
import { color } from '../../theme/index'

const Label = styled.div`
  background-color: ${color('blue')};
  border-radius: 3px;
  height: 3px;
  margin-right: .3rem;
  width: 35px;

  ${props => props.kind === 'red' && css`
    background-color: ${color('pink')};
  `}

  ${props => props.kind === 'yellow' && css`
    background-color: ${color('yellow')};
  `}

  ${props => props.kind === 'green' && css`
    background-color: ${color('green')};
  `}

  ${props => props.kind === 'purple' && css`
    background-color: ${color('purple')};
  `}
`

export default Label
