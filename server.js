const express = require('express')

const connectDB = require('./config/connectDB')
const route =require('./routes/contact')
const app = express()
app.use(express.json())

app.use('/api', route)
connectDB()
const port = 8000

app.listen(port , console.log('server is connected'))