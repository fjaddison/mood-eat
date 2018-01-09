var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/3000', { useMongoClient: true } )

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

var moodSchema = new mongoose.Schema ({
    name: String
})

var restaurantSchema = new mongoose.Schema ({
    name: String,
    address: {
    street: String, 
    zipcode: Number
    },
    yelpUrl: String,
    mood: [moodSchema]
})


mongoose.model('Mood', moodSchema)
mongoose.model('Restaurant', restaurantSchema)

module.exports = mongoose
