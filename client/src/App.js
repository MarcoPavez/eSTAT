import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";

import Services from "./pages/Services";
import SingleService from "./pages/SingleService"

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
        path: "/services",
        element: <Services />
      },
      {
        path: "/services/:id",
        element: <SingleService />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
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
