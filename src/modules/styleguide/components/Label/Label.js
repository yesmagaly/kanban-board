import styled, { css } from 'styled-components'
import { color } from '../../theme/index'

const Label = styled.div`
  background-color: ${color('blue')};
  height: 3px;
  width: 60px;
  border-radius: 3px;

  ${props => props.red && css`
    background-color: ${color('pink')};
  `}

  ${props => props.yellow && css`
    background-color: ${color('yellow')};
  `}

  ${props => props.green && css`
    background-color: ${color('green')};
  `}

  ${props => props.purple && css`
    background-color: ${color('purple')};
  `}
`

export default Label
