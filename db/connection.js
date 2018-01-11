const mongoose = require('mongoose')
const seedData = require('./seeds.json')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/mood-eat', { useMongoClient: true })

module.exports = mongoose
