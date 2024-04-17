const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    cost: {
        type: Number,
        required:true
    }
})

const item = mongoose.model('items', itemSchema)
module.exports = item