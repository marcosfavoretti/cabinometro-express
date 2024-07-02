
require('dotenv').config()
var cors = require('cors')
const express = require('express')
const useRoutes = require('./routes/routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(useRoutes)
app.listen(process.env.APPPORT, process.env.APPHOST, ()=> {
    console.log(`sever running in ${process.env.APPHOST || 'localhost'}:${process.env.APPPORT}`)
})