import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

// Crear servidor
const app = express();

// Middlewares obligatorios
app.use(cors()); // Permite que el frontend se conecte sin bloqueos
app.use(express.json()); // Te va a permitir recibir datos JSON más adelante

// Controlar ruta inicial
app.get("/", (req, res) => {
  res.send("¡Backend inicial de NovaMarket funcionando!");
});

// Levantar servidor leyendo el puerto del .env (o 3001 por defecto)
const port = process.env.PORT || 3001;

app.locals.fechaInicio = new Date();

app.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`);
});