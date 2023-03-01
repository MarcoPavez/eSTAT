import React from "react";
import { Link } from "react-router-dom";
import estadistica from "../img/estadistica.jpg"
import tiempo from "../img/tiempo.png"
import imagenFondo from "../img/imagenFondo.png"

const Home = () => {
  return (
    <div className="inicio">

      <div className="imagenFondo">
        <img src={imagenFondo} alt="Imagen esencialmente estética, para darle un diseño más atractivo y llamativo al inicio" />
      </div>

      <div className="presentacion">
        <h1><sup>e</sup>STAT</h1>
        <h1>Tu mano amiga<br />en la investigación</h1>
        <p>¡Facilitamos el desarrollo de tu tesis!</p>
      </div>

      <div className="imagenPieExplicacion">
        <h2>Acercamos <br />la estadística a<br /> tus conocimientos</h2>
        <img src={estadistica} alt="Error al cargar ilustración" />

      </div>

      <div className="serviciosOfertados">
        <h3>Nuestros servicios </h3>
        <div className="listaServiciosOfertados">
          <div className="analisisDatos">
            <Link to="/servicios/analisis" style={{ textDecoration: 'none' }}>

              <p>Análisis de datos</p>
              <p>¿Quieres saber cómo afectan las variables a tu objeto de estudio?</p>

            </Link>
          </div>

          <Link to="/servicios/limpieza" style={{ textDecoration: 'none' }}>
            <div className="limpiezaDatos">
              <p>Limpieza de datos</p>
              <p>¿Tu set de datos no cuenta con la información suficiente?</p>
            </div>
          </Link>

          <Link to="/servicios/recoleccion" style={{ textDecoration: 'none' }}>
            <div className="recoleccionDatos">
              <p>Recolección de datos</p>
              <p>¿No cuentas con un set de datos<br/> para tu investigación?</p>
            </div>
          </Link>
        </div>

        <div className="contactanos">
          <Link to="requerimientos">
            <button>
              Escribe tus requerimientos
            </button>
          </Link>
          <p>¡Te contactaremos a la brevedad!</p>

        </div>

        <div className="imagenPiePrimeraCaracteristica">
          <h2>Nos ajustamos<br /> a tus tiempos</h2>
          <img src={tiempo} alt="Error al cargar ilustración" />
        </div>

      </div>
    </div>

  );
};

export default Home;
