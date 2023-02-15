import React from 'react'
import { Link } from "react-router-dom"
import logo from "../img/logo.jpg"

const Register = () => {
  return (
    <div className="registro">
      <Link to="/">
        <img src={logo} alt="Error al cargar logo" />
      </Link>
      <h1>
        Regístrate
      </h1>
      <form>
        <input
          required
          type="text"
          placeholder='Nombre de usuario'
          name="usuario" />
        <input
          required
          type="password"
          placeholder='Contraseña'
          name="contraseña" />

        <button>Regístrate</button>

        <span>
          ¿Ya tienes una cuenta? <Link to="/ingreso">Ingresa</Link>
        </span>
      </form>

    </div>
  )
}

export default Register