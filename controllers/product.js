const getAllProducts = (req, res) => {
    res.status(200).json({ msg: "I am getAllProducts"})
}
const getAllProductsTesting = (req, res) => {
    res.status(200).json({ msg: "I am testing"})
}

module.exports = { getAllProducts, getAllProductsTesting}