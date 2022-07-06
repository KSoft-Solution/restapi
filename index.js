require('dotenv').config()
const colors = require('colors')
const app = require('./app/app')
const connectDB = require('./app/config/database.config')

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT,()=>{
    console.log('server is running on PORT')
})

module.exports = app