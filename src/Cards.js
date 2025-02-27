import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const StyledCard = styled.div`
  max-width: 29.972% ;
  color: #E0E0E0;
  flex-grow: 1;
  background-color: #2C3E50;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: opacity 0.3s;
  z-index: 1;

  ${({ inDevelopment }) =>
    inDevelopment &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}

  &:hover {
    background-color: #34495E;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2px;
    margin: 0;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -10;

  ${({ inDevelopment }) =>
    inDevelopment &&
    css`
      opacity: 1;
      z-index: 10;
    `}
`

const CardImage = styled.img`
  width: 25%;
  max-width: 125px;
  height: auto;
  border-radius: 8px;
`

const CardTitle = styled.h3`
  margin: 0;
  padding-bottom: 10px;
  color: #55F5ED;
`

const CardDescription = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #E0E0E0;
`

function Cards({ title, description, image, url, inDevelopment, text }) {
  return (
    <StyledCard inDevelopment={inDevelopment}>
      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        {url && <Button url={url} text={text} />}
      </CardDescription>
      <CardImage src={image} alt="Project" />
      <Overlay inDevelopment={inDevelopment}>
        Currently in development
      </Overlay>
    </StyledCard>
  )
}

export default Cards
