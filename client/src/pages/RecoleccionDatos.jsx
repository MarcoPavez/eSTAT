import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecoleccionDatos() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="recoleccionDatos">
        <h1>Recolección de datos</h1>
        <h3>
          Refiere a la aplicación de técnicas computacionales para extraer datos
          de distintas fuentes de información, como textos, páginas web e
          inclusive el consumo de APIs públicas, entre otras.
        </h3>
      </div>
      <div className="inicioEjemplo">
        <h3>Te presentamos un ejemplo para clarificar el proceso:</h3>
        <p>
          1.- Supón que quieres realizar un análisis de texto desde el siguiente{" "}
          <a href="https://s3.amazonaws.com/gobcl-prod/public_files/Campa%C3%B1as/Cuenta-P%C3%BAblica-2020/MENSAJE-PRESIDENCIAL-2020.pdf">
            documento
          </a>
          , que es el mensaje presidencial realizado durante la Cuenta Pública
          del año 2020. Te gustaría saber cuales son las palabras más frecuentes
          del discurso y obtener conclusiones de ello. Para realizarlo, ejecutas
          un análisis de <i>Term Frequency – Inverse Document Frequency</i> (
          <a href="https://www.geeksforgeeks.org/understanding-tf-idf-term-frequency-inverse-document-frequency/">
            TF-IDF
          </a>
          ), que significa frecuencia de término – frecuencia inversa de
          documento
        </p>
      </div>
      <div className="contactanos">
        <Link to="/requerimientos">
          <button onClick={() => navigate(-2)}>Escribe tus requerimientos</button>
        </Link>
        <p>¡Te contactaremos a la brevedad!</p>
      </div>
    </div>
  );
}

export default RecoleccionDatos;
