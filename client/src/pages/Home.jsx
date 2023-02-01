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
          <h2>La mano amiga<br />en tu proceso de investigación</h2>
        </div>
      </div>
      <div className="container">

        <div className="explicacionServicios">
          <h2>Acercamos la estadística a tus conocimientos</h2>

          <div className="imagenPieExplicacion">
            <img src={estadistica} alt="Error al cargar ilustración" />
            <figcaption><a href="https://www.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_12643942.htm#query=estad%C3%ADstica&position=15&from_view=search&track=sph">Image by storyset</a> on Freepik</figcaption>
          </div>

        </div>



        <div className="primeraCaracteristicaServicios">

          <h2>En el difícil camino de investigar, nos ajustamos a tus tiempos</h2>
          <div  className="imagenPiePrimeraCaracteristica">

            <img src={tiempo} alt="Error al cargar ilustración" />
            <figcaption><a href="https://storyset.com/work">Work illustrations by Storyset</a></figcaption>
          
            


          </div>

        </div>



        <div className="segundaCaracteristicaServicios">
          <h3>Accesible, cómodo y sencillo</h3>
        </div>

      </div>
      <div className="container">

        <div className="serviciosOfertados">
          <h3>Nuestros servicios son: </h3>
          <div className="listaServiciosOfertados">
            <ul>
              <li>
                <h4>Análisis de datos </h4>
              </li>
              <li>
                <h4>Limpieza de datos </h4>
              </li>
              <li>
                <h4>Recolección de datos</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
