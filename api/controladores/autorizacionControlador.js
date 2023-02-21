import { bbdd } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const registro = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE nombre = ? or email = ?"

    bbdd.query(q, [req.body.nombre, req.body.email], (err, data) => {

        //Si hay un error, retorna el error 500 (el servidor encontró una condición inesperada que le impide completar la petición)
        if (err) return res.status(500).json(err)

        //Si hay datos que coinciden con la query, almacenalos en data y retorna el error 409 (conflicto en la petición)
        if (data.length) return res.status(409).json("El usuario ya existe")

        //SEGURIDAD EN REGISTRO

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.contrasenia, salt);

        //Inserción de datos en BBDD

        const q = "INSERT INTO usuarios(`nombre`, `email`, `contrasenia`) VALUES (?)"

        const valores = [
            req.body.nombre,
            req.body.email,
            hash,
        ]

        bbdd.query(q, [valores], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Usuario creado correctamente")
        })
    })
}

export const ingreso = (req, res) => {

    const q = "SELECT * FROM estat.usuarios WHERE nombre = ?"

    bbdd.query(q, [req.body.nombre], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Usuario inexistente")

        const correctaContrasenia = bcrypt.compareSync(req.body.contrasenia, data[0].contrasenia);

        if (!correctaContrasenia) return res.status(400).json("Usuario y/o contraseña incorrectos")

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { contrasenia, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    })

}


export const salida = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("Has cerrado sesión")
}