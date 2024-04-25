import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  min-width: 100px;
  max-width: 300px;
  flex-grow: 1;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  align-items: center;
`

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`

const CardTitle = styled.h3`
  margin: 0;
`

function Cards({ cards }) {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardImage src={card.image} alt="Card" />
          <CardTitle>{card.title}</CardTitle>
          <p>{card.description}</p>
        </Card>
      ))}
    </>
  )
}

export default Cards;