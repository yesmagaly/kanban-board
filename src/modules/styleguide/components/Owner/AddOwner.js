import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import styled from 'styled-components'

import { color } from '../../theme/index'

const AddButton = styled.button`
  background: ${color('white')};
  border: 1px dashed ${color('gray')};
  height: 20px;
  width: 20px;
  color: ${color('gray')};
  padding: 0;
`

const AddOwner = () => (
  <AddButton><FaPlus /></AddButton>
)

export default AddOwner
