import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const CertificationContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f6d0aa;
  color: #464A6D;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 20%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 7px;
  position: relative;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05); /* Pequeño zoom al hacer hover */
  }
`;

const Title = styled.h4`
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
`;

const Company = styled.p`
  margin-bottom: 5px;
`;

const Date = styled.p`
  margin-bottom: 5px;
`;

const CredentialId = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: #f6d0aa;
  border-radius: 8px;
  animation: ${props => (props.show ? fadeIn : 'none')} 0.3s ease-in-out;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const Certification = ({ title, company, date, credentialId, imagePath }) => {
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  return (
    <CertificationContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!showImage && (
        <>
          <Title>{title}</Title>
          <Company>Company: {company}</Company>
          <Date>Issued Date: {date}</Date>
          <CredentialId>Credential ID: {credentialId}</CredentialId>
        </>
      )}
      <ImageContainer show={showImage}>
        <Image src={imagePath} alt="Credential Image" />
      </ImageContainer>
    </CertificationContainer>
  );
};

export default Certification;
