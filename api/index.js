import express from "express";
import autorizacionRuta from "./rutas/autorizacionRuta.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/autorizacion", autorizacionRuta);

app.listen(8080, () => {
    console.log("Servidor conectado")
})