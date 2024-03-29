import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Inicio from "./pages/Inicio"
import Registro from "./pages/Registro";
import Ingreso from "./pages/Ingreso";

import Servicios from "./pages/Servicios";
import AnalisisDatos from "./pages/AnalisisDatos"
import LimpiezaDatos from "./pages/LimpiezaDatos"
import RecoleccionDatos from "./pages/RecoleccionDatos"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./styles.scss"
import Requerimientos from "./pages/Requerimientos";

import "./fonts/gobCL_Bold.otf"
import "./fonts/gobCL_Heavy.otf"
import "./fonts/gobCL_Light.otf"
import "./fonts/gobCL_Regular.otf"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout/>,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/servicios",
        element: <Servicios />
      },
      {
        path: "/servicios/analisis",
        element: <AnalisisDatos />
      },
      {
        path: "/servicios/limpieza",
        element: <LimpiezaDatos />
      },
      {
        path: "/servicios/recoleccion",
        element: <RecoleccionDatos />
      },
      
      {
        path: "/requerimientos",
        element: <Requerimientos/>
      }
    ]
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/ingreso",
    element: <Ingreso />,
  }
  
]);

function App() {
  return (
    <div className="aplicacion">
     
        <RouterProvider router={router} />
 
    </div>
  );
}

export default App;
