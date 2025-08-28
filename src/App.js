import React, { useRef, useState }from "react"
import Navbar from "./components/Navbar"
import Container from "./components/projects/Container"
import Footer from "./components/Footer"
import styled from "styled-components"
import About from "./components/routes/About"
import Contact from "./components/Contact"
import PageNotFound from "./components/routes/NotFound"
import LandingPage from "./components/routes/LandingPage"
import ScrollToTop from "./components/ScrollToTop"
import ToDoList from "./components/projects/ToDoList"
import Restarurante from "./components/routes/restaurant/Restaurante"
import Pokedex from "./components/projects/pokeapi/Pokedex"
import data from "./data.json"
import "./index.css"
import { HelmetProvider } from "react-helmet-async"
import { Routes, Route } from "react-router-dom"

const MainApp = styled.div`
  color: #E0E0E0;
  background-color: #282C34;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function App() {

  const contactRef = useRef(null)

  const [todos, setTodos] = useState([
    {name: "Something", active: true},
    {name: "Something 2", active: true},
    {name: "buy hotcakes", active: true},
    {name: "Go to the supermarket", active: true},
    {name: "Buy more hotcakes", active: true},
    {name: "Fly like superman", active: true},
    {name: "Buy some eggos", active: true},
  ])
  
  return (
    <MainApp>
      <HelmetProvider>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </HelmetProvider>
      <Navbar items={data.navbarItems} contactRef={contactRef} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage/>
            {data.techskills && data.techskills.length > 0 && <Container cards={data.techskills} title="Technical Skills" />}
            {data.softSkills && data.softSkills.length > 0 && <Container cards={data.softSkills} title="Soft Skills" />}
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="*"  element={<PageNotFound />} />
        <Route path="/projects/*" element={<Container cards={data.myProjects}  text={"Go to project"} title="Projects"/>} />
        <Route path="/projects/to-do-list" element={<ToDoList todos={todos} setTodos={setTodos}/>}/>
        <Route path="/projects/restaurant" element={<Restarurante/>}/>
        <Route path="/projects/pokedex" element={<Pokedex/>}/>
      </Routes>
      <Contact id="contact" ref={contactRef} />
      <Footer/>
    </MainApp>
  )
}

export default App

{/*
  Crear twitter de programador
  Proyectos (descripcion, imagen, tecnologias, código)
  Poner pocos proyectos en la pagina de home
  Categorizar habilidades tecnicas (front/back/...)
*/}