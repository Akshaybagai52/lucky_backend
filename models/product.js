const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ticketValue: {
        type: Number,
        required:true,
        
    } ,
    drawDate: {
        type: Date,
        default: Date.now()
    } ,
    status: {
        type: Boolean,
        default: false,
    } 0,
    img: {
        type:String,

    },
})

module.exports = mongoose.model('Product', productSchema)