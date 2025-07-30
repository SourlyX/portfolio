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
import Restarurante from "./Restaurante/Restaurante"
import Pokedex from "./components/projects/pokeapi/Pokedex"
import "./index.css"
import { Helmet } from "react-helmet"
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

  const techskills = [
    {
      image: "images/skills/Frontend.png",
      title: "Frontend",
      description: "HTML5, CSS3, JavaScript and React to build responsive, accessible, and interactive UIs."
    },
    {
      image: "images/skills/Backend.png",
      title: "Backend & Databases",
      description: "Node.js, Express, MongoDB, SQL for creating scalable APIs and managing data efficiently."
    },
    {
      image: "images/skills/Tools.png",
      title: "Tools & Methodologies",
      description: "Git for version control, Jira for Agile project management, and Scrum methodologies."
    },
    {
      image: "images/skills/AI.png",
      title: "AI-assisted development",
      description: "I leverage AI tools like ChatGPT and GitHub Copilot to boost productivity, debug faster, and write better code."
    }
  ]

  const softSkills = [
    {
      image: "images/softskills/problemSolving.jpeg",
      title: "Problem-solving",
      description: "I tackle challenges logically and efficiently to find effective solutions."
    },
    {
      image: "images/softskills/communication.jpeg",
      title: "Communication",
      description: "I express technical ideas clearly and adapt to different audiences."
    },
    {
      image: "images/softskills/collaboration.jpeg",
      title: "Collaboration",
      description: "I contribute to team efforts and support others to achieve shared goals."
    },
    {
      image: "images/softskills/attentionDetail.jpeg",
      title: "Attention to detail",
      description: "I catch bugs and inconsistencies early to maintain high code quality."
    },
    {
      image: "images/softskills/curiosity.png",
      title: "Curiosity",
      description: "I explore new tools and techniques to constantly improve my work."
    },
    {
      image: "images/softskills/adaptabilityFeedback.jpeg",
      title: "Adaptability to feedback",
      description: "I take feedback constructively and apply it to grow as a developer."
    },
    {
      image: "images/softskills/timeManagement.jpeg",
      title: "Time management",
      description: "I organize tasks and prioritize effectively to meet deadlines."
    },
    {
      image: "images/softskills/continuousLearning.jpeg",
      title: "Continuous learning",
      description: "I stay up to date with evolving technologies and best practices."
    }
  ]


  const myProyects = [
    {
      image: "images/projects/development.jpeg",
      title: "Restaurant",
      description: "This project is a restaurant management app built with React, designed to assist waiters in taking customer orders efficiently. \
      The app allows staff to add orders directly to the order list, streamlining the ordering process. It is connected to a Node.js backend, ensuring \
      real-time updates between the front and back end (In menu items, for example). However, some functionalities, like saving completed orders, are \
      still under development. This project highlights my skills in building responsive front-end applications with backend integration to improve day-to-day operations.",
      url: "restaurante",
      inDevelopment: true
    },
    {
      image: "images/projects/todo.png",
      title: "To-do list",
      description: "This project is a simple and functional To-Do List built with React. It allows users to create, edit, and delete tasks, offering \
      a clean and intuitive interface for managing daily activities. The application stores tasks locally for now, ensuring usability even without backend \
      integration. However, a connected version with a Node.js backend is currently under development to enable persistent storage and synchronization \
      across devices. This project reflects my focus on dynamic front-end design and will soon evolve with full-stack functionality.",
      url: "to-do-list",
      inDevelopment: false
    },
    {
      image: "images/projects/Pokedex.png",
      title: "Pokedex",
      description: "This project is a Pokédex-style app built with React that uses the PokéAPI to display detailed information about various Pokémon. \
      Users can browse, search, and explore stats, abilities, and types for each Pokémon in a responsive and visually appealing interface. The app \
      focuses entirely on front-end functionality, fetching data dynamically from the API. It showcases my ability to work with external APIs and create \
      interactive user experiences.",
      url: "pokedex",
      inDevelopment: false
    }
  ]

  const navbarItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Projects", url: "/projects" },
    { label: "Contact", url: "#contact" }
  ]

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar items={navbarItems} contactRef={contactRef} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <>
            <LandingPage/>
            {techskills && techskills.length > 0 && <Container cards={techskills} title="Technical Skills" />}
            {softSkills && softSkills.length > 0 && <Container cards={softSkills} title="Soft Skills" />}
          </>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="*"  element={<PageNotFound />} />
        <Route path="/projects/*" element={<Container cards={myProyects}  text={"Go to project"} title="Projects"/>} />
        <Route path="/projects/to-do-list" element={<ToDoList todos={todos} setTodos={setTodos}/>}/>
        <Route path="/projects/restaurante" element={<Restarurante/>}/>
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