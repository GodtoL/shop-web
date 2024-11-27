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
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al logear');
}}

module.exports = { login };