import React from 'react'
import arrange_qqplot from "../img/arrange_qqplot.png"

function AnalisisDatos() {
  return (
    <div className="container">
      <div className="analisisDatos">
        <h1>Análisis de datos</h1>
        <h3>Refiere a la aplicación de técnicas estadísticas y computaciales a un set de datos prestablecido</h3>
      </div>
      <div className="ejemploAnalisisDatos">
        <img src={arrange_qqplot} alt="Error al cargar imagen"/>
      </div>
    </div>
  )
}

export default AnalisisDatos