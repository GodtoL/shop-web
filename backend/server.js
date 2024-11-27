const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
require('./config/db')

const productRoutes = require('./routes/productRoutes')
const loginRoute = require('./routes/loginRoute')

app.use("/api/product", productRoutes)
app.use("/login", loginRoute)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})