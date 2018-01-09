var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/3000', { useMongoClient: true } )

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

var moodSchema = new mongoose.Schema ({
    mood: String
})

var restaurantSchema = new mongoose.Schema ({
    name: String,
    address: {
    street: String, 
        zipcode: Number,
    yelpUrl: String,
    comments: [menuItemsSchema],
})


mongoose.model('Mood', moodSchema)
mongoose.model('Restaurant', restaurantsSchema)

module.exports = mongoose
