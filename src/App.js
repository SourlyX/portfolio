import React from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Footer from './Footer'
import styled from 'styled-components'
import About from './About' // Importa el componente About
import "./index.css"
import { Helmet } from 'react-helmet'
import { Routes, Route } from "react-router-dom"

const MainApp = styled.div`
  background-color: #222;
  display: flex;
  flex-wrap: wrap;
  justify-content: center
`

function App() {
  const cards = [
    {
      image: 'https://example.com/image1.jpg',
      title: 'Título de la tarjeta 1',
      description: 'Descripción de la tarjeta 1'
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Título de la tarjeta 2',
      description: 'Descripción de la tarjeta 2'
    }
  ]

  const frontendCards = [
    {
      image: 'https://example.com/image3.jpg',
      title: 'HTML5',
      description: 'Descripción de HTML5'
    },
    {
      image: 'https://example.com/image4.jpg',
      title: 'CSS3',
      description: 'Descripción de CSS3'
    },
    {
      image: 'https://example.com/image5.jpg',
      title: 'JavaScript',
      description: 'Descripción de JavaScript'
    }
  ]

  const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: '/projects' },
    { label: 'Contact', url: '/contact' }
  ]
  
  return (
    <MainApp>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar items={navbarItems}/>
      <Routes>
        <Route path="/" element={
          <>
            {cards && cards.length > 0 && <Container cards={cards} />}
            {frontendCards && frontendCards.length > 0 && <Container cards={frontendCards} />}
          </>
        }/>
        <Route path="/about" element={<About />} /> {/* Agrega el componente About a la ruta '/about' */}
        <Route path="*" element="404: route not find"/>
      </Routes>
      <Footer />
    </MainApp>
  )
}

export default App
