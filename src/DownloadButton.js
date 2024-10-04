import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  position: relative;
  text-align: right;
  margin-bottom: 10px;
`

const DownloadButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const DownloadCVButton = ({ text, filePath }) => {
  return (
    <ButtonContainer>
      <DownloadButton href={filePath} download>
        {text}
      </DownloadButton>
    </ButtonContainer>
  )
}

export default DownloadCVButton
