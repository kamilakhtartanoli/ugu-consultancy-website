const mongoose = require('mongoose')

const database = async () =>{
    try {
        const url = process.env.mongodb_url
        await mongoose.connect(url)
        console.log('database connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {database}