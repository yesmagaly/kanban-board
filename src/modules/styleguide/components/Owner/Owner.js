import styled, { css } from 'styled-components'
import { color, fontFamily, fontSize } from '../../theme/index'

const Owner = styled.div`
  background-color: #fbe0e6;
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${color('pink')};
  cursor: pointer;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize('small')};
  font-weight: 900;
  height: 20px;
  line-height: 20px;
  margin-left: .3rem;
  text-align: center;
  width: 20px;

  ${props => props.kind === 'yellow' && css`
    background-color: #fff1dc;
    color: ${color('yellow')};
  `}

  ${props => props.kind === 'blue' && css`
    background-color: ${color('lightBlue')};
    color: ${color('blue')};
  `}
`
export default Owner
