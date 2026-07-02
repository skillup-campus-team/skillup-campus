import express from "express";
import { register } from "../controllers/authController.js"; 

const router = express.Router();

// Cuando alguien haga un POST a /register, llamamos a la función del controlador
router.post("/register", register);

export default router;