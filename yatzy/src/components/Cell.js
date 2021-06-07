import React from 'react'
import styled from 'styled-components'

const Cell = () => {

  const StyledCell = styled.td `
border-style: solid;
padding : 5px;

`
  return (
    <StyledCell> <input style = {{ width:'50px' }}></input> </StyledCell>

  )
}
export default Cell