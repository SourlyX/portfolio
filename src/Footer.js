import React from 'react';
import styled from 'styled-components';

// Estilos para el footer
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  padding: 20px;
  margin-top: 50px;
  text-align: center;
`

const Column = styled.div`
  display: inline-block;
  margin: 0 20px;
`

const SocialMediaLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
`

const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
`

const Footer = () => {
  const datos = {
    nombre: 'Luis Ureña Arosemena',
    correo: 'luisferua@gmail.com',
    telefono: '+506 6005 7935',
    redesSociales: {
      linkedin: 'https://www.linkedin.com/in/luis-ure%C3%B1a-arosemena-501105211',
      github: 'https://github.com/SourlyX',
      facebook: 'https://www.facebook.com/Luis.Urena.judo/',
      twitter: 'https://twitter.com/SourlySon'
    }
  }

  return (
    <FooterContainer>
      <Column>
        <h3>Contacto:</h3>
        <p>Nombre: {datos.nombre}</p>
        <p>Correo: {datos.correo}</p>
        <p>Teléfono: {datos.telefono}</p>
      </Column>
      <Column>
        <h3>Redes Sociales:</h3>
        <SocialMediaLinks>
          <SocialMediaLink href={datos.redesSociales.linkedin}><LogoImage src="/images/linkedin.png" alt="Facebook" /></SocialMediaLink>
          <SocialMediaLink href={datos.redesSociales.github}><LogoImage src="/images/github.png" alt="Facebook" /></SocialMediaLink>
          <SocialMediaLink href={datos.redesSociales.facebook}><LogoImage src="/images/facebook.png" alt="Facebook" /></SocialMediaLink>
          <SocialMediaLink href={datos.redesSociales.twitter}><LogoImage src="/images/twitter.png" alt="Twitter" /></SocialMediaLink>
        </SocialMediaLinks>
      </Column>
        <div>
          <p>&copy; {new Date().getFullYear()} {datos.nombre}</p>
        </div>
    </FooterContainer>
  )
}

export default Footer;
