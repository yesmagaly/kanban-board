import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import styled from 'styled-components'

import { color } from '../../theme/index'

const AddButton = styled.button`
  background: ${color('white')};
  border: 1px dashed ${color('grey')};
  color: ${color('grey')};
  height: 20px;
  padding: 0;
  width: 20px;
`

const AddOwner = () => (
  <AddButton><FaPlus /></AddButton>
)

export default AddOwner
