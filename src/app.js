import path from 'path';
import express, { urlencoded } from "express";
import {engine} from 'express-handlebars';
import morgan from 'morgan';

import routes from "./routes/routes";
import './database';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
    ".hbs",
    engine({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);

app.set("view engine", ".hbs");

// middleware
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(routes);

export default app;