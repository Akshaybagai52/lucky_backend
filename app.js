const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require('./routes/product')

app.get("/", (req, res) => {
    res.send("Hi aa");

})
app.use("/api/products", products_routes)

const start = async () => {
    try {
        app.listen(PORT, () => {
            `${PORT} YES I am connected`
        })
    } catch (error) {
        console.log(error)
    }
}

start()