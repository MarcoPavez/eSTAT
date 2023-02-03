import React from 'react'
import qqplot from "../img/arrange_qqplot.png"
import geombar from "../img/geombar_1.png"

function AnalisisDatos() {
  return (
    <div className="container">
      <div className="analisisDatos">
        <h1>Análisis de datos</h1>
        <h3>Refiere a la aplicación de técnicas estadísticas y computaciales a un set de datos prestablecido</h3>
      </div>
      <div className="inicioEjemplo">
        <h3>Te presentamos dos ejemplos para clarificar el proceso</h3>
        <p>Supón que, desde el siguiente set de datos, queremos realizar un análisis descriptivo de la distribución del prespuesto agrícola en las comunas de la región de O'Higgins.
          Luego del proceso de limpieza, transformación y visualización de los datos, obtienes el siguiente resultado.
        </p>
        <div className="qqplotAnalisisDatos">

          <img src={qqplot} alt="Error al cargar imagen" />
        </div>
        <p>Los cuartiles teóricos -theoretical quantiles- indican una distribución perfecta de una serie de datos -en este caso, el presupuesto agrícola en UF. Entonces, cada punto del gráfico muestra una cifra en UF del presupuesto agrícola distribuido entre los años 1990 y 2019-. Los cuartiles de la muestra -sample quartiles-</p>
      </div>


      <div className="geombarAnalisisDatos">
        <img src={geombar} alt="Error al cargar imagen" />
      </div>
    </div>
  )


}

export default AnalisisDatos