const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require('./routes/product')
const connectDB = require('./db/connect')

app.get("/", (req, res) => {
    res.send("Hi aa");

})
app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            `${PORT} YES I am connected`
        })
    } catch (error) {
        console.log(error)
    }
}

start()