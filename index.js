require('dotenv').config()
const colors = require('colors')
const app = require('./api/app')
const connectDB = require('./api/config/database.config')

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT,()=>{
    console.log('server is running on PORT')
})

module.exports = app