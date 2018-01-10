const mongoose = require('mongoose')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/4000', { useMongoClient: true })
mongoose.Promise = Promise

module.exports = mongoose
