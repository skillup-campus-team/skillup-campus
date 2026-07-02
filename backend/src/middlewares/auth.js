import jwt from "jsonwebtoken";

export const accessTokenSecret = "youraccesstokensecret";
export const refreshTokenSecret = "yourrefreshtokensecrethere";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "El token no es válido" });
      }
      
      res.locals.user = user;
      next(); 
    });
  } else {
    res.status(401).json({ message: "Acceso denegado. Faltan credenciales." });
  }
};

export const authorizedRoles = (rolesPermitidos) => {
  return (req, res, next) => {
    const user = res.locals.user;

    if (user && rolesPermitidos.includes(user.rol)) {
      next(); 
    } else {
      res.status(403).json({ message: "¡Acceso denegado! Tu rol no tiene permiso para realizar esta acción." });
    }
  };
};