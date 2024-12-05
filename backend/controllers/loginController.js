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
        console.log("El token es ", token);
        req.session.token = token;
        // req.session.save(err => {
        //     if (err) {
        //         console.error('Error al guardar la sesión:', err);
        //         return res.status(500).send('Error al iniciar sesión');
        //     }
        console.log("La sesion guardada es ", req.session)
        console.log("El token guardado es ", req.session.token)
        res.redirect("http://localhost:3000/manage")
        
        // console.log("Token guardado en sesión:", req.session.token);

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
 
module.exports = { login, loginRender};