const mongoose = require('mongoose');

uri = "mongodb+srv://akshaybagai52:eIekFr04IGno9ImZ@cluster0.uxqvxq8.mongodb.net/"

const connectDB = () => {
    console.log("first")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })


}
module.exports = connectDB