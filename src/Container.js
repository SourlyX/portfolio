import React from 'react'
import styled from 'styled-components'
import Cards from './Card'

const CardContainer = styled.div`
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`

function Container({ cards }) {
  return (
    <CardContainer>
      <Cards cards={cards}/>
    </CardContainer>
  )
}

export default Container;
