const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hi aa");

})

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