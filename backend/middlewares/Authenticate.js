const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_secret_key'; // Debe coincidir con el usado al generar el token

const authenticate = (req, res, next) => {
    console.log("Sesion actual:", req.session); // Verifica si se recibe

    const receivedToken = req.query.token || req.headers['authorization'] || req.headers['authorization'].cookie;
    console.log("El req.query.token ", req.query.token)
    console.log("El req.headers ", req.headers)
    console.log("Token recibido en authenticate:", receivedToken); // Verifica si se recibe

    if (!receivedToken) {
        return res.status(401).send('Acceso no autorizado: Token no encontrado');
    }

    try {
        const decoded = jwt.verify(receivedToken, SECRET_KEY);
        req.user = decoded; // Guarda la info del token
        next(); // Continúa
    } catch (error) {
        console.error("Error al verificar token:", error);
        res.status(403).send('Token inválido o expirado');
    }
};

module.exports = authenticate;
