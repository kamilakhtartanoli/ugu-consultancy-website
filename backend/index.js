const express = require('express')
const { database } = require('./database/db')
const env = require('dotenv').config()
const cors = require('cors')
const { router } = require('./Routes/Route')

const app = express()
const port = process.env.port || 8001
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use('/api',router)

database()
app.listen(port,()=>{
    console.log(`server started on port : ${port}`)
})