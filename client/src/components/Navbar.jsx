import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="barraNavegacion">
      <div className="logo">
        <Link to="/">
  <img src="..." alt="Error al cargar el logotipo"/>
        </Link>
      </div>
      <div className="links">
        <h6>Inicio</h6>
        <h6>Productos</h6>
        <h6>Blog</h6>
        <h6>Sobre nosotros</h6>
        <h6>Contáctanos</h6>
      </div>
    </div>
  )
}

export default Navbar