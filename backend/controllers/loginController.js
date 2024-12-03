const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken');

const SECRET_KEY = "my_secret_key"

const login = async(req, res) => {
    const {email , password} = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).send('No se encontro el admin');

        if (password != admin.password) return res.status(401).send('No coinciden las contraseñas');

        const token = jwt.sign({ id: admin._id }, SECRET_KEY, { expiresIn: '2h' });
        console.log("Token generado: ", token)
        req.session.token = token;
        res.redirect("http://localhost:3000/manage")
        console.log("llego")
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al logear');
}}

const loginRender = async(req, res) => {
    try{
        res.render("login")
    } catch (error){
        console.error(error);
        res.status(500).send('Hubo un error al renderizar');          
    }
}

const manage = async(req, res) => {
    try {
        console.log("Intento")
        res.render("view_admin")
    } catch( error ) {
        console.error(error);
        res.status(500).send('Hubo un error al renderizar el administrador');  
    }
}
 
module.exports = { login, loginRender, manage};