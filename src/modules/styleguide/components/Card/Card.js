import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color, fontFamily } from '../../theme/index'

import Label from '../Label/Label'
import Owner from '../Owner/Owner'
import AddOwner from '../Owner/AddOwner'

const DefaultCard = styled.div`
  border: 1px solid ${color('gray')};
  padding: 1rem;
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

const Labels = styled.div`
  display: flex;
`

const Card = ({ title, owners, labels }) => {
  return (
    <DefaultCard>
      <Header>
        <Labels>
          { labels.map((label, index) => (
            <Label key={ index } kind={ label.color }></Label>
          )) }
        </Labels>

        <Title>
          { title }
        </Title>
      </Header>

      <Footer>
        <AddOwner />
        { owners.map((owner, index) => (
          <Owner key={ index } kind={ owner.color }>{ owner.name[0] }</Owner>
        )) }

      </Footer>
    </DefaultCard>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  owners: PropTypes.array,
  labels: PropTypes.array,
}

Card.defaultProps = {
  owners: [],
  labels: []
}

export default Card
