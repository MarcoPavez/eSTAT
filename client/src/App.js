import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";

import Services from "./pages/Services";
import AnalisisDatos from "./pages/AnalisisDatos"
import LimpiezaDatos from "./pages/LimpiezaDatos"
import RecoleccionDatos from "./pages/RecoleccionDatos"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./style.scss"

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
        element: <Home />
      },
      {
        path: "/servicios",
        element: <Services />
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
      }
    ]
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/ingreso",
    element: <Login />,
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
