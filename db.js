const mongoose = require('mongoose');
require('dotenv').config()
// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL = 'mongodb+srv://hotels:hehehehehe@cluster0.gyoc8ee.mongodb.net/';
// const mongoURL = process.env.MONGO_URL_LOCAL;
const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log('Connected to MongoDB server.')
})
db.on("error",(err)=>{
    console.log('MongoDB server Error:',err)
})
db.on("disconnected",()=>{
    console.log('Disconnected to MongoDB server.')
})

module.exports = db;