import React from 'react'
import { Link } from "react-router-dom"
import logo from "../img/logo.jpg"

function Navbar() {
  return (
    
    <div  className="barraNavegacion">
      <div className="subidaBarraNavegacion">
        <ul>
          <li>
            Política de privacidad
          </li>
          <li>
            Política de cookies
          </li>
          <li>
            Política de devolución
          </li>
          <li>
            Síguenos en nuestras redes sociales
          </li>
        </ul>
      </div>
      <div className="container">

      <div className="bajadaBarraNavegacion">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Error al cargar el logotipo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/">
            <h6>Inicio</h6>
          </Link>
          <Link to="/servicios">
            <h6>Servicios</h6>
          </Link>
          <Link to="/blog">
            <h6>Blog</h6>
          </Link>
          <Link to="/nosotros">
            <h6>Sobre nosotros</h6>
          </Link>
          <Link to="/contactanos">
            <h6>Contáctanos</h6>
          </Link>
          <Link to="/ingreso">
            <h6>Ingresa</h6>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar