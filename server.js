const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send('welcome to our hotel.')
})


app.get('/helo',(req,res)=>{
    res.send('heyyyyyy!!!!!!!!!!!!!!')
})


let personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

let itemRoutes = require('./routes/itemRoutes')
app.use('/item',itemRoutes)

app.listen(3000,()=>{
    console.log('servre is lisstening on port 3000')
})