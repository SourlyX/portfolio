import React, { useState } from 'react';
import styled from 'styled-components';

const CertificationContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 20%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px;
  position: relative;
`;

const Title = styled.h4`
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
  margin-bottom: 5px;
`;

const ImageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Aptitudes = styled.p`
  margin-bottom: 5px;
`;

const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 700px;
  height: auto;
`;

const Certification = ({ title, company, date, credentialId, imagePath, aptitudes }) => {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  return (
    <CertificationContainer>
      <Title>{title}</Title>
      <Company>Company: {company}</Company>
      <Date>Issued Date: {date}</Date>
      <CredentialId>Credential ID: {credentialId}</CredentialId>
      <ImageButton onClick={handleImageClick}>Show Credential Image</ImageButton>
      <Aptitudes>Aptitudes: {aptitudes}</Aptitudes>
      {showImage && (
        <ImageOverlay show={showImage}>
          <ImageContainer>
            <CloseButton onClick={handleCloseImage}>X</CloseButton>
            <Image src={imagePath} alt="Credential Image" />
          </ImageContainer>
        </ImageOverlay>
      )}
    </CertificationContainer>
  );
};

export default Certification;
