import React from 'react'
import Navbar from './Navbar'
import "./index.css"

function App() {
  const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];
  return (
    <div>
      <Navbar items={navbarItems}/>
    </div>
  )
}

export default App;