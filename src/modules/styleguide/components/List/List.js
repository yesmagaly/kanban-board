import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h'

import { color, fontFamily } from '../../theme/index'

const DefaultList = styled.section`
  border: 1px solid ${color('grey')};
  border-radius: 3px;
  width: 282px;
  padding: 32px 16px 0 16px;
`

const Header = styled.div`
  display: flex;
  position: relative;
`

const StyledCircle = styled(FaCircleO)`
  color: ${color('grey')};
  font-size: 11px;
  font-weight: bold;
  margin-top: 4px;
`

const Title = styled.h3`
  color: #1d2538;
  font-family: ${fontFamily('sans')};
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 32px .5rem;
`

const StyledEllipsis = styled(FaEllipsisH)`
  color: ${color('grey')};
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  top: 8px;
`

const Wrapper = styled.div`
  margin-bottom: 16px;
`
const Footer = styled.footer`
  cursor: pointer;
  display: block;
  margin: 0 -16px;
`

const Button = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color: #aab1b6;
  cursor: pointer;
  padding: 16px 0;
  width: 100%;

  &:hover {
    background: ${color('lightBlue')};
    color: ${color('blue')};
  }
`

const List = ({ children, title }) => {
  return (
    <DefaultList>
      <Header>
        <StyledCircle />
        <Title >{ title }</Title>
        <StyledEllipsis />
      </Header>
      <Wrapper>
        { children }
      </Wrapper>
      <Footer>
        <Button>Add card</Button>
      </Footer>
    </DefaultList>
  )
}

List.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string
}

export default List
