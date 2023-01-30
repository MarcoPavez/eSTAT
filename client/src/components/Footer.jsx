import React from 'react'
import logo from "../img/logo.jpg"


function Footer() {
  return (

    <div class="col" className="footer">

      <div class="col" className="resenia">

        <img src={logo} alt="Error al cargar el logotipo" />
        <h6>eSTAT es una marca registrada bajo la legislatura del gobierno de Chile</h6>

      </div>

      <div class="col" className="productosFooter">

        <ul>
          <li>Análisis de datos</li>
          <li>Gestión de datos</li>
          <li>Minería de datos</li>
        </ul>

      </div>

      <div class="col" className="Contacto">

        <ul>
        <li>Redes sociales</li>
        <li>Correo electrónico</li>
        </ul>

      </div>

    </div>

  )
}

export default Footer