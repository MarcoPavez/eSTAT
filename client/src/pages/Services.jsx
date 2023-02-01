import React from 'react'

const Services = () => {
  return (

    <div className="servicios">
      <div className="introServicios">
        <h2>Servicios disponibles</h2>
        <h3>Todo servicio solicitado implicará, idealmente, reuniones a convenir según tu disponibilidad. La entrega de un servicio de calidad pasa, en igual sentido, por cuan detalladas estén tus especificaciones y por el compromiso que tengas con el proceso </h3>
      </div>
      <div className="categoriaServicios">
        <div className="analisisDatos" class="row h-25">

          <h4 class="col-2"> Análisis de datos </h4>
          <h5 class="col-8">Si ya sabes tu objeto de estudio y cuentas tanto con un set de datos como con las variables definidas, podemos analizar, utilizando métodos estadísticos, como inciden dichas variables en el objeto de estudio.
            Un buen análisis puede marcar la diferencia si tu deseo es realizar una buena tesis.
            En eSTAT contamos con las herramientas computacionales que te serán de utilidad, deposita tu confianza en nosotros.</h5>
        </div>

        <div className="gestionDatos" class="row h-25">
          <h4 class="col-2">Limpieza de datos</h4>
          <h5 class="col-8">En el caso de que cuentes con un set de datos propio, o hayas encontrado uno en internet, pero este no cuente con todos los valores disponibles,
            o presente algunos errores en su elaboración, podemos corregir sus datos mediante un exhaustivo análisis. </h5>
        </div>

        <div className="recoleccionDatos" class="row h-25">
          <h4 class="col-2">Minería de datos</h4>
          <h5 class="col-8">En el caso de que no cuentes con un set de datos propios, pero tienes una referencia en internet, podemos extraer los datos y entregártelos en completitud. Sólo indícanos que buscar y lo encontraremos por ti.</h5>
        </div>

      </div>
    </div>

  )
}

export default Services