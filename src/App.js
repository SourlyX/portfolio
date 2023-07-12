import React from 'react'
import Navbar from './Navbar'
import Container from './Container';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import "./index.css"

const MainApp = styled.div`
  background-color: #222;
`

function App() {
  const cards = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Título de la tarjeta 1',
      description: 'Descripción de la tarjeta 1',
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Título de la tarjeta 2',
      description: 'Descripción de la tarjeta 2',
    },
  ];

  const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Proyects', url: '/projects' },
    { label: 'Contact', url: '/contact' },
  ];
  
  return (
    <MainApp>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar items={navbarItems}/>
      <Container cards={cards} />
    </MainApp>
  )
}

export default App;