import React from 'react'
import styled from 'styled-components'
import Cards from './Card'

const CardContainer = styled.div`
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 2px solid #fff;
  width: 90%;
`

const Title = styled.h1`
  justify-self: center;
  width: 100%;
  text-align: center;
`

function Container({ cards, title }) {
  return (
    <>
      <Title>{title}</Title>
      <CardContainer><Cards cards={cards}/></CardContainer>
    </>
  )
}

export default Container;
