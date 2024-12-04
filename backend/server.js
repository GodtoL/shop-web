const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
const session = require("express-session");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
require('./config/db')
app.use(
    session({
      secret: "my_secret_key",
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(methodOverride('_method')); 
const productRoutes = require('./routes/productRoutes')
const loginRoute = require('./routes/loginRoute')
const manageRoute = require('./routes/manageRoute')
app.set('view engine' , 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/product", productRoutes)
app.use("/login", loginRoute)
app.use("/manage", manageRoute)

port = 3000
app.listen(port, () => {
    console.log("Servidor activo en puerto ",port)
})