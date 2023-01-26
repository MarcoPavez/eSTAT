import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom"

import Catalogue from "./pages/Catalogue"
import Register from "./pages/Register"
import Login from "./pages/Login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Página principal</div>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/catalogue",
        element: <Catalogue/>
    }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
