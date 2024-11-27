const jwt = require('jsonwebtoken');

const SECRET_KEY = "my_secret_key"

const authenticate = (req , res, next) => {
    const receivedToken = req.headers.authorization;
    if (!receivedToken) return res.status(403).send("Acceso negado")
    const token = receivedToken.replace('Bearer ', '')
    try{     
        console.log("Token recibido: ", token)
        const decoded = jwt.verify(token, SECRET_KEY)
        next()
    }catch(error){
        console.log("Negado por ", error)
        res.status(403).send("Acceso denegado")
    }
}

module.exports = authenticate