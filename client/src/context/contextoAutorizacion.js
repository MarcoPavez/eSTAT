// Los objetos de propiedad context sirven para no codificar un path
//de informacion directo desde los datos/bbdd a la aplicacion en si.
// En lugar de llamar desde el frontend a datos del backend, se utiliza
// el contexto para almacenar en cache los datos de la bbdd y se utilizan desde la misma cache

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextoAutorizacion = createContext();

export const ProveedorContextoAutorizacion = ({ children }) => {
    const [usuarioActual, setUsuarioActual] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const ingreso = async (inputs) => {
        const res = await axios.post("/autorizacion/ingreso", inputs);
        setUsuarioActual(res.data);
    };

    const salida = async(inputs) => {
        await axios.post("/autorizacion/salida");
        setUsuarioActual(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(usuarioActual));
    }, [usuarioActual]);

    return(
        <Proveedor.ContextoAutorizacion value = {{ usuarioActual, ingreso, salida }} >
            {children}
        </Proveedor.ContextoAutorizacion>
    )
}