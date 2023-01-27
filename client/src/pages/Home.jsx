import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="presentacion">
        <h1>eSTAT</h1>
        <h2>La mano amiga en tu proceso de investigación</h2>
      </div>
      <div className="explicacionServicios">
        <h2>¡Estudiante! </h2>
        <h2>Te orientamos en la construcción de tu tesis </h2>
        <h2>
          {" "}
          Ofrecemos servicios estadísticos para que cumplas con tu metodología
        </h2>
        <h3>En el difícil camino de investigar, nos ajustamos a tus tiempos</h3>
        <h3>Accesible, cómodo y sencillo</h3>
      </div>
      <div className="serviciosOfertados">
        <h3>Nuestros servicios son: </h3>
        <div className="listaServiciosOfertados">
          <ul>
            <li>
              <h4>Minería de datos </h4>
            </li>
            <li>
              <h4>Análisis de datos </h4>
            </li>
            <li>
              <h4> Gestión de datos</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
