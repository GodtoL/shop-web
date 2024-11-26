const express = require('express')
const app = express()

require('./config/db')

app.get("/", async (req, res) => {
    res.send("¡Bienvenidos gamers!")
})

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})