import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";



import indexRouter from "./routes/index.routes";
import path from "path";
const app = express();

// ubicación de la carpeta views
app.set("views", path.join(__dirname, "views"))



// configuración de Handlebars
app.engine('.hbs', engine({
    //layoutsDir: path.join(app.get("views"), 'layouts'),
    // partialsDir: path.join(app.get("views"), 'porciones'), // si le cambio el nombre a partials
    defaultLayout: 'main',
    extname: ".hbs"
}))

app.set("view engine", ".hbs")

// middLewares 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(indexRouter)

// Static files
app.use(express.static(path.join(__dirname, "public")))

export default app