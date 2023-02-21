import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProveedorContextoAutorizacion} from "./context/contextoAutorizacion"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorContextoAutorizacion>
      <App />
    </ProveedorContextoAutorizacion>
  </React.StrictMode>
);