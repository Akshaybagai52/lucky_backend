const connectDB = require('./db/connect')
const Product = require('./models/product');
const ProductJson = require("./products.json")
const start = async () => {
    try {
        await connectDB("mongodb+srv://akshaybagai52:eIekFr04IGno9ImZ@cluster0.uxqvxq8.mongodb.net/")
        await Product.create(ProductJson)
        console.log("success")
    } catch (error) {
        console.log(error)
    }

}
start()