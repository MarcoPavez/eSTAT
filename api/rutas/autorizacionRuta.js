import express from "express";
import { ingreso, salida, registro } from "../controladores/autorizacionControlador.js";

const router = express.Router();

router.post("/registro", registro);
router.post("/ingreso", ingreso);
router.post("/salida", salida);

export default router;