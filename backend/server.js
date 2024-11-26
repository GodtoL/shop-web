const express = require('express')
const app = express()
const Product = require('./models/product')
require('./config/db')

app.get("/", async (req, res) => {
    res.send("¡Bienvenidos gamers!")
    d
})

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})