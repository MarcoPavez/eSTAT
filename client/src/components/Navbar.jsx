import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/contextoAutorizacion'
import logo from "../img/logo.jpg"

function Navbar() {

  const { usuarioActual, salida } = useContext(AuthContext)

  return (

    <div className="barraNavegacion">
      <div className="subidaBarraNavegacion">
        <ul>
          <Link to="/privacidad">
            <li>
              Política de privacidad
            </li>
          </Link>
          <Link to="/cookies">
            <li>
              Política de cookies
            </li>
          </Link>
          <Link to="/devoluciones">
            <li>
              Política de devolución
            </li>
          </Link>

          <li>
            Síguenos en nuestras redes sociales
          </li>

        </ul>
      </div >
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
            <Link to="/perfil">
              <h6>{usuarioActual?.nombre}</h6>
            </Link>
            {usuarioActual ? (
              <Link to="/">
                <h6 onClick={salida}>Cerrar sesión</h6>
              </Link>
            ) : (
              <Link to="/ingreso">
                <h6 id="correccionBoton">Ingresa</h6>
              </Link>
            )}

          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar