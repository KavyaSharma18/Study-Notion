const mongoose = require('mongoose')    
require('dotenv').config()

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected successfully')
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err)
        process.exit(1)
    })
}