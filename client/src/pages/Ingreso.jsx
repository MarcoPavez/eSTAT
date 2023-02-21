import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import logo from "../img/logo.jpg"
import { AuthContext } from "../context/contextoAutorizacion"

const Login = () => {

  const [inputs, setInputs] = useState({
    nombre: "",
    contrasenia: ""
  })

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { ingreso } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ingreso(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

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
          name="nombre"
          onChange={handleChange}></input>
        <input
          required
          type="password"
          placeholder='Contraseña'
          name='contrasenia'
          onChange={handleChange} ></input>

        <button onClick={handleSubmit}>Ingresa</button>
        {err && <p>{err}</p>}
        <span>
          ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
        </span>
      </form>

    </div>
  )
}

export default Login