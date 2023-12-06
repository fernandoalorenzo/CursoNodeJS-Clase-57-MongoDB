import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Libro } from "./models/libroModel.js";
import librosRoute from "./routes/librosRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("CRUD de Libros");
});

app.use("/libros", librosRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Aplicación conectada a la Base de Datos");
    app.listen(PORT, () => {
      console.log(`Aplicación corriendo en puerto ${PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
