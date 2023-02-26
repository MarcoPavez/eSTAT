import React from "react";
import logo from "../img/logo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="fixed-bottom" className="footer">
      <div className="resenia">
        <Link to="/">
          <img src={logo} alt="Error al cargar el logotipo" />
        </Link>
        <h6>
          eSTAT es una marca registrada
          <br />
          bajo la legislatura del gobierno de Chile
        </h6>
      </div>

      <div className="productosFooter">
        <ul>
          <h5>Servicios disponibles</h5>
          <Link to="/servicios/analisis" style={{textDecoration:"none"}}>
            <li>Análisis de datos</li>
          </Link>
          <Link to="/servicios/limpieza" style={{textDecoration:"none"}}>
            <li>Limpieza de datos</li>
          </Link>
          <Link to="/servicios/recoleccion" style={{textDecoration:"none"}}>
            <li>Recolección de datos</li>
          </Link>
        </ul>
      </div>

      <div className="contacto">
        <ul>
          <h5>Contacto</h5>
          <li>Redes sociales</li>
          <li>Correo electrónico</li>
        </ul>

        <figcaption>
          <h6>
            <a href="https://storyset.com/work">
              Work illustrations by Storyset
            </a>
          </h6>
        </figcaption>
      </div>
    </div>
  );
}

export default Footer;
