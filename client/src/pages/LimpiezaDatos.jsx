import React from 'react'
import plotIncompletitud from "../img/plotIncompletitud.jpeg"
import plotFaltantes from "../img/plotFaltantes.jpeg"
import plotCompletos from "../img/plotCompletos.jpeg"

function LimpiezaDatos() {
  return (
    <div class="container">
      <div className="limpiezaDatos">
        <h1>Limpieza de datos</h1>
        <h3>Refiere a la aplicación de técnicas, principalmente, computacionales para restablecer o añadir información a un set de datos prestablecido. </h3>
      </div>
      <div className="inicioEjemplo">
        <h3>Te presentamos un ejemplo para clarificar el proceso:</h3>
        <p>Supón que, desde <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUNNcgHS445SOVNy9ES2grwTp72yGoMBn7fcdRUesRVBnadVRrpth4jb2vWQDTPiwhUBJW5EzeTrk7/pubhtml?gid=1937433307&single=true">el siguiente set de datos</a>, (proporcionado por el <a href="https://www.cr2.cl/acerca-del-cr2/">Centro de Ciencia del Clima y la Resiliencia (CR)<sup>2</sup></a>), necesitamos obtener los datos faltantes de precipitaciones durante los años 2018-2019. Estos datos son emitidos por las diferentes estaciones meteorológicas existentes a lo largo del país. Posterior a realizar un análisis de completitud de los atributos del set de datos, se tiene, por ejemplo, que </p>
        <img src={plotIncompletitud} alt="El gráfico permite ver los atributos con el mayor porcentaje de incompletitud en sus datos"></img>
        <p>Del gráfico se concluye que la mayoría de los atributos del set de datos presenta alrededor de un 30% de datos faltantes, factor que puede incidir en la distribución de la muestra, el posterior análisis y, en definitiva, la investigación. Para este tipo concreto de dificultades, las alternativas existentes se centran en la <a href="https://rpubs.com/paraneda/imputacion">imputación de datos</a>.
          Por ello, aplicamos una imputación por la media de los datos faltantes. Esta decisión siempre debe evaluarse en base al tipo de datos que tengamos y al tratamiento que queramos darle a los datos, a sabiendas que existen métodos más robustos para determinar la falta de información. Así, tras la aplicación de la imputación, se puede apreciar en el gráfico de la derecha que los datos faltantes se han establecido.</p>
        <div className="plot">
          <img src={plotFaltantes} alt="El gráfico permite ver los datos faltantes según los meses de las mediciones meteorológicas"></img>
          <img src={plotCompletos} alt="El gráfico demuestra la completitud de los datos luego de la interpolación"></img>
        </div>
      </div>
    </div>
  )
}

export default LimpiezaDatos