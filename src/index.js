import app from "./app";
import db from "./database";
import { config } from 'dotenv'
//equire('dotenv').config()

config()

const port = process.env.PORT


// Base de datos
db()

// Servidor
app.listen(port, () => {
    console.log("Server on port", port);
});
