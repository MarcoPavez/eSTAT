import React from "react";
import qqplot from "../img/arrange_qqplot.png";
import geombar from "../img/geombar_1.png";

function AnalisisDatos() {
  return (
    <div className="container">
      <div className="analisisDatos">
        <h1>Análisis de datos</h1>
        <h3>
          Refiere a la aplicación de técnicas estadísticas y computacionales a un
          set de datos prestablecido.
        </h3>
      </div>
      <div className="inicioEjemplo">
        <h3>Te presentamos dos ejemplos para clarificar el proceso:</h3>
        <p>
          1.- Supón que, desde el siguiente set de datos, queremos realizar un
          análisis descriptivo de la distribución del prespuesto agrícola en las
          comunas de la región de O'Higgins. Luego del proceso de limpieza,
          transformación y visualización de los datos, obtienes el siguiente
          resultado.
        </p>
        <div className="qqplotAnalisisDatos">
          <img src={qqplot} alt="Error al cargar imagen" />
        </div>
        <p>
          Los cuartiles teóricos (theoretical quantiles) señalan como debiese
          ser la distribución perfecta de los datos que estamos tratando (en
          este caso, el presupuesto agrícola en UF). Por su parte, los cuartiles
          de la muestra (sample quartiles) indican la distribución real de los
          datos que estamos tratando. El gráfico da a entender que estos se
          rigen por una distribución logarítimica, esto es, una distribución
          asimétrica que puede alcanzar valores muy elevados con respecto a su
          media. Para obtener un análisis más detallado, analizamos la variable
          "estrato de productor" para determinar la distribución del presupuesto
          agrícola entre los distintos grupos de productores. {" "} 
        </p>
      </div>

      <div className="geombarAnalisisDatos">
        <img src={geombar} alt="Error al cargar imagen" />
      </div>
      <div className="interpretacionGeombar">
        <p>Del gráfico se desprende que los estratos con mayor financiamiento
          monetario por la ley N° 18.450 son los Empresarios Medianos y las
          Organizaciones de Pequeños Usuarios. Podemos interpretar de esta 
          información que la ley promueve, por un lado, la asociatividad entre
          los productores, apostando por la organización de los mismos y por su
          capacidad para presentar proyectos de acceso al agua más competentes, rentables
          y amplios, que vayan en sintonía con los propósitos de la normativa. 
          Por otro lado, la ley busca subvencionar el acceso al agua de los Empresarios 
          Medianos, a fin de que sus gastos se enfoquen netamente en la producción
          agrícola como también en la mano de obra.
        </p>
      </div>
    </div>
  );
}

export default AnalisisDatos;
