import express from "express";
import autorizacionRuta from "./rutas/autorizacionRuta.js"
import mysql from "mysql";

/* Conexión a BBDD */

export const bbdd = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"MPavez2021.,*",
    database:"estat"
})

const app = express();

app.use(express.json());

app.post("/api/autorizacion", autorizacionRuta);

app.listen(8080, () => {
    console.log("Servidor conectado")
})