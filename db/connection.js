const mongoose = require('mongoose')
const seedData = require('./seed.json')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/4000', { useMongoClient: true })

module.exports = mongoose
