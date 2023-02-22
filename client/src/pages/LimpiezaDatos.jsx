import React from 'react'
import plotIncompletitud from "../img/plotIncompletitud.jpeg"

function LimpiezaDatos() {
  return (
    <div class="container">
      <div className="limpiezaDatos">
        <h1>Limpieza de datos</h1>
        <h3>Refiere a la aplicación de técnicas, principalmente, computacionales para restablecer o añadir información a un set de datos prestablecido. </h3>
      </div>
      <div className="inicioEjemplo">
        <h3>Te presentamos un ejemplo para clarificar el proceso:</h3>
        <p>Supón que, desde <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRUNNcgHS445SOVNy9ES2grwTp72yGoMBn7fcdRUesRVBnadVRrpth4jb2vWQDTPiwhUBJW5EzeTrk7/pubhtml?gid=1937433307&single=true">el siguiente set de datos</a>, (proporcionado proporcionado por el <a href="https://www.cr2.cl/acerca-del-cr2/">Centro de Ciencia del Clima y la Resiliencia (CR)<sup>2</sup></a>) necesitamos obtener los datos de precipitaciones faltantes durante determinados meses del año. Estos datos son emitidos por las diferentes estaciones meteorológicas existentes a lo largo del país. Posterior a realizar un análisis de completitud de los atributos del set de datos, se tiene, por ejemplo, que </p>
<img src={plotIncompletitud}></img>

      </div>
    </div>
  )
}

export default LimpiezaDatos