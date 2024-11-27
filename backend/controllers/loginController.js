const Admin = require('../models/Admin')

const login = async(req, res) => {
    console.log("Request body: ", req.body)
    const email = req.body.email;
    const password  = req.body.password;
    console.log("Email recibido:", `"${email}"`); 
    console.log("Password recibido:", `"${password}"`);

    try {
        const admin = await Admin.findOne({ email });
        console.log("El admin es ", email)
        console.log("La contraseña es ", password)
        if (!admin) return res.status(404).send('Admin not found');

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: admin._id }, SECRET_KEY, { expiresIn: '2h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
}}

module.exports = { login };