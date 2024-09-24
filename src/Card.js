import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 27%;
  color: #464A6D;
  flex-grow: 1;
  background-color: #f6d0aa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const CardImage = styled.img`
  width: 75px;
  height: auto;
  border-radius: 8px;
`

const CardTitle = styled.h3`
  margin: 0;
  padding-bottom: 10px;
`

const CardDescription = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

function Cards({ cards }) {
  return (
    <>
      {cards.map((card, index) => {
        return (
          <Card key={index}>
            <CardDescription>
              <CardTitle>{card.title}</CardTitle>
              <p>{card.description}</p>
            </CardDescription>
            <CardImage src={card.image} alt="Card" />
          </Card>
        );
      })}
    </>
  );
}


export default Cards;