const Product = require('../models/product')
const getAllProducts = async (req, res) => {
    const myData = await Product.find({})
    res.status(200).json({ myData})
}
const getAllProductsTesting = (req, res) => {
    res.status(200).json({ msg: "I am testing"})
}

module.exports = { getAllProducts, getAllProductsTesting}