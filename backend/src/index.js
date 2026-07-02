import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import authRoutes from "./routes/authRoutes.js"; // 1. Importamos las rutas de autenticación

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 2. Le decimos a Express que use estas rutas
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("¡Backend inicial de NovaMarket funcionando!");
});

const port = process.env.PORT || 3001;

async function conectarBaseDeDatos() {
  try {
    await sequelize.authenticate();
    console.log("¡Conexión a PostgreSQL en Supabase establecida con éxito!");
    
    // 3. Sincronizamos los modelos con la base de datos (crea las tablas vacías)
    await sequelize.sync(); 
    console.log("¡Tablas sincronizadas correctamente!");
    
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

conectarBaseDeDatos();

app.listen(port, () => {
  console.log(`Sitio escuchando en el puerto ${port}`);
});