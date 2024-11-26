const mongoose = require('mongoose')

//Conexion a base de datos
mongoose.connect('mongodb://localhost:27017/gamer-shop')
.then(() =>{
    console.log("Conexiòn a MongoDb exitosa")
})
.catch((error) =>{
    console.error("Hubo un error al intentar conectar ", error)
})

module.exports = mongoose;