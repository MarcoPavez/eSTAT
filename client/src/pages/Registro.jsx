import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from "../img/logo.jpg"
import axios from "axios"

const Register = () => {

  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    contrasenia: "",
    email: ""
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatosUsuario((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/autorizacion/registro", datosUsuario)
      navigate("/ingreso")
    } catch (err) {
      setErr(err.response.data)
    }
  }

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
          name="nombre"
          onChange={handleChange} />
        <input
          required
          type="password"
          placeholder='Contraseña'
          name="contrasenia"
          onChange={handleChange} />

        <input
          required
          type="email"
          placeholder='Correo electrónico'
          name="email"
          onChange={handleChange} />

        <button onClick={handleSubmit}>Regístrate</button>
        {err && <p>{err}</p>}

        <span>
          ¿Ya tienes una cuenta? <Link to="/ingreso">Ingresa</Link>
        </span>
      </form>

    </div>
  )
}

export default Register