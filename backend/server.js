const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gamer-shop')
.then(() =>{
    console.log("Conexiòn a MongoDb exitosa")
})
.catch((error) =>{
    console.error("Hubo un error al intentar conectar ", error)
})

app.get("/", async (req, res) => {
    res.send("Hola mundo")
})



port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})