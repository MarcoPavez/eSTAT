import mysql from "mysql";

/* Conexión a BBDD */

export const bbdd = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"MPavez2021.,*",
    database:"eSTAT"
})
