import React from 'react'
import styled from 'styled-components'
import { color, fontFamily } from '../../theme/index'

import Label from '../Label/Label'
import Owner from '../Owner/Owner'
import AddOwner from '../Owner/AddOwner'

const DefaultCard = styled.div`
  border: 1px solid ${color('gray')};
  height: 80px;
  padding: 1rem 1rem 0 1rem;
  width: 250px;
`

const Title = styled.h3`
  color: #898b8d;
  font-family: ${fontFamily('sans')};
  font-size: .85rem;
  margin-top: .5rem;
`

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 0;
`

const Header = styled.header``

const Card = () => {
  return (
    <DefaultCard>
      <Header>
        <Label />
        <Title>
          Stage 2 - Understand
        </Title>
      </Header>

      <Footer>
        <AddOwner />
        <Owner>J</Owner>
      </Footer>
    </DefaultCard>
  )
}

export default Card
