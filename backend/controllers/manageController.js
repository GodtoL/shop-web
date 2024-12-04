const { getProducts } = require('../controllers/productController')

const manage = async(req, res) => {
    try {
        const products =  await getProducts();
        res.render("view_admin", { products })
    } catch( error ) {
        console.error(error);
        res.status(500).send('Hubo un error al renderizar el administrador');  
    }
}

module.exports = { manage }