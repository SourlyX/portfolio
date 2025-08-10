import React from "react"
import '../index.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout
