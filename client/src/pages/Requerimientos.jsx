import React from 'react';
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css";


function Requerimientos() {
    return (
        <div class="container">

            <div className="requerimientos">

                <div className="textoInicial">
                    <h1>Escribe tus requerimientos</h1>
                    <p>Para agilizar el procedimiento de atención de tu solicitud, te dejamos algunos tips para escribir en tus requerimientos</p>
                    <ol>
                        <li>Objeto de estudio</li>
                        <li>Variables a considerar (dependiente/s e independiente/s)</li>
                        <li>Metodología</li>
                    </ol>
                </div>

                <div className='cajaTexto'>
                    <ReactQuill
                        className="editor"
                        theme="snow"
                    />
                </div>

                <div className="botonRequerimientos">
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Requerimientos