import React from "react";
import ilustracionProveemos from "../img/ilustracion1.jpg"
import estadistica from "../img/estadistica.jpg"
import tiempo from "../img/tiempo.png"

const Home = () => {
  return (
    <div className="inicio">
      <div className="container">

        <div className="presentacion">
          <h1><sup>e</sup>STAT</h1>
          <h2>Tu mano amiga<br />en la investigación</h2>
        </div>
      </div>
      <div className="container">

        <div className="explicacionServicios">
          <h2>Acercamos <br />la estadística <br /> a tu tesis</h2>

          <div className="imagenPieExplicacion">
            <img src={estadistica} alt="Error al cargar ilustración" />
            <figcaption><a href="https://storyset.com/work">Work illustrations by Storyset</a></figcaption>
          </div>

        </div>

        <div className="primeraCaracteristicaServicios">

          <h2 class>Nos ajustamos<br /> a tus tiempos</h2>

          <div className="imagenPiePrimeraCaracteristica">

            <img src={tiempo} alt="Error al cargar ilustración" />
            <figcaption><a href="https://storyset.com/work">Work illustrations by Storyset</a></figcaption>

          </div>
        </div>
      </div>



      <div className="container">

        <div className="serviciosOfertados">
          <h3>Nuestros servicios </h3>
          <div className="listaServiciosOfertados">

            <div className="analisisDatos">

              <h4>Análisis de datos </h4>
              <h5>¿Buscar determinar cómo afectan las variables determinadas en tu objeto de estudio?</h5>
              <a href="/servicios/:id">Pulsa aqui</a>
            </div>

            <div className="limpiezaDatos">

              <h4>Limpieza de datos </h4>
              <h5>¿Tu set de datos no cuenta con la información suficiente?</h5>
              <a href="/servicios/:id">Pulsa aquí</a>


            </div>

            <div className="recoleccionDatos">

              <h4>Recolección de datos</h4>
              <h5>¿No cuentas con los datos suficientes para tu investigación?</h5>
              <a href="/servicios/:id">Pulsa aquí</a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
