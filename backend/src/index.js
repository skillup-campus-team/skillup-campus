import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js"; // Importamos la conexión

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Backend inicial de NovaMarket funcionando!");
});

const port = process.env.PORT || 3001;

// Función para probar la conexión a la base de datos
async function conectarBaseDeDatos() {
  try {
    await sequelize.authenticate();
    console.log("¡Conexión a PostgreSQL en Supabase establecida con éxito!");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

// Ejecutamos la prueba
conectarBaseDeDatos();

app.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`);
});