import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="presentacion">
        <h1>eSTAT</h1>
        <h2>La mano amiga en tu proceso de investigación</h2>
      </div>
      <div className="explicacionServicios">
        <h4>
          ¡Estudiante! <br/>Te orientamos en la construcción de tu tesis <br/>Ofrecemos
          servicios estadísticos para que cumplas con tu metodología <br/>En el
          difícil camino de investigar, nos ajustamos a tus tiempos <br/>Accesible,
          cómodo y sencillo
        </h4>
      </div>
      <div className="serviciosOfertados">
        <h4>
          Nuestros servicios son <br/>
          Minería de datos <br/>Gestión de datos <br/>Análisis de datos: estadística
          descriptiva e inferencial
        </h4>
      </div>
    </div>
  );
};

export default Home;
