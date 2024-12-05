const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
app.use(express.json())

require('./config/db')
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false,
        sameSite: 'lax',
        httpOnly: true
     }  
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });
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