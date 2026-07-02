import bcrypt from 'bcryptjs';
import User from '../models/User.js'; // Importamos el modelo que creamos recién

export const register = async (req, res) => { 
  try {
    // 1. Recibimos los datos que manda el usuario
    const { email, password, name } = req.body;

    // 2. Hasheamos (encriptamos) la contraseña por seguridad
    const hash = await bcrypt.hash(password, 10);

    // 3. Guardamos el usuario en la base de datos
    const user = await User.create({ email, password: hash, name }); 
    
    // 4. Respondemos con éxito
    res.status(201).json({ message: 'Usuario creado', id: user.id });
  } catch (err) { 
    res.status(400).json({ error: err.message });
  }
};