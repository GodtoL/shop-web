const express = require('express')
const app = express()

app.get("/", async (req, res) => {
    res.send("Hola mundo")
})

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})