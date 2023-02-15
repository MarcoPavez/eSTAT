import React from "react";
import estadistica from "../img/estadistica.jpg"
import tiempo from "../img/tiempo.png"

const Home = () => {
  return (
    <div className="inicio">

      <div className="presentacion">
        <h1><sup>e</sup>STAT</h1>
        <h1>Tu mano amiga<br />en la investigación</h1>
      </div>

      <div className="imagenPieExplicacion">
        <h2>Acercamos <br />la estadística <br /> a tu tesis</h2>
        <img src={estadistica} alt="Error al cargar ilustración" />

      </div>

      <div className="serviciosOfertados">
        <h3>Nuestros servicios </h3>
        <div className="listaServiciosOfertados">

          <div className="analisisDatos">

            <h4><a class="linkSingleService" href="/servicios/analisis">Análisis de datos
              <div className="descripcion"><h5>¿Quieres saber cómo afectan las variables a tu objeto de estudio?</h5></div></a></h4>


          </div>

          <div className="limpiezaDatos">

            <h4><a class="linkSingleService" href="/servicios/limpieza">Limpieza de datos
              <div className="descripcion"><h5>¿Tu set de datos no cuenta con la información suficiente?</h5></div></a></h4>


          </div>

          <div className="recoleccionDatos">

            <h4><a className="linkSingleService" href="/servicios/recoleccion">Recolección de datos
              <div className="descripcion"><h5>¿No cuentas con un set de datos para tu investigación?</h5></div></a></h4>


          </div>
        </div>

        <div className="imagenPiePrimeraCaracteristica">
          <h2 class>Nos ajustamos<br /> a tus tiempos</h2>
          <img src={tiempo} alt="Error al cargar ilustración" />
        </div>

      </div>
    </div>

  );
};

export default Home;
