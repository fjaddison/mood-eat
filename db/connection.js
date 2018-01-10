const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/4000', { useMongoClient: true })

module.exports = mongoose
