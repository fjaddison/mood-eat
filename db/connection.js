const mongoose = require('mongoose')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/3000', { useMongoClient: true })
mongoose.Promise = Promise

module.exports = mongoose
