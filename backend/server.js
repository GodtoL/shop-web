const express = require('express')
const app = express()
const path = require('path');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
require('./config/db')

const productRoutes = require('./routes/productRoutes')
const loginRoute = require('./routes/loginRoute')
app.set('view engine' , 'ejs')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/product", productRoutes)
app.use("/login", loginRoute)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})