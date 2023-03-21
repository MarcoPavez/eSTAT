import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/contextoAutorizacion'
import logo2 from "../img/logo2.jpg"

function Navbar() {

  const { usuarioActual, salida } = useContext(AuthContext)

  return (

    <div className="barraNavegacion">
      
      <div className="container">

        <div className="bajadaBarraNavegacion">
          <div className="logo">
            <Link to="/">
              <img src={logo2} alt="Error al cargar el logotipo" />
            </Link>
          </div>
          <div className="links">
            <Link to="/">
              <h6>Inicio</h6>
            </Link>
            <div class="dropdown">

            <Link to="/servicios">
              <h6>Servicios</h6>
              <div class="dropdown-content">
                <Link to="/servicios/analisis">
                  <p>Análisis de datos</p>
                </Link>
                <Link to="/servicios/limpieza">
                  <p>Limpieza de datos</p>
                </Link>
                <Link to="/servicios/recoleccion">
                  <p>Recolección de datos</p>
                </Link>
              </div>
            </Link>
            </div>
            <Link to="/blog">
              <h6>Blog</h6>
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