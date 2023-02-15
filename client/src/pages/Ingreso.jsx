import React from 'react'
import { Link } from "react-router-dom"
import logo from "../img/logo.jpg"

const Login = () => {
  return (
    <div className="autorizacion">
      <Link to="/">
        <img src={logo} alt="Error al cargar logo" />
      </Link>
      <h1>Ingresa</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Nombre de usuario"
          name="usuario" />
        <input
          required
          type="password"
          placeholder='Contraseña'
          name='contrasenia' />

        <button>Ingresa</button>
        <span>
          ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
        </span>
      </form>

    </div>
  )
}

export default Login