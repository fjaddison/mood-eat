var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/4000', { useMongoClient: true } )

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// var moodSchema = new mongoose.Schema ({
//     name: String
// })

var restaurantSchema = new mongoose.Schema ({
    name: String,
    address: {
    street: String, 
    zipcode: Number
    },
    url: String,
    // mood: [moodSchema]
    // mood: String
})

// var theMoodsSchema = new mongoose.Schema({
//     mood: [moodSchema],
//     //a list of restaurant IDs that match this mood
//     restaurants: [String]
// })

// theHardCodedMoods = ['happy','sad']

module.exports = { // Mood: mongoose.model('Mood', moodSchema),
                   Restaurant: mongoose.model('Restaurant', restaurantSchema)
                //    MoodList: mongoose.model('MoodList', theMoodsSchema),
                //    HardCodedMoodList: theHardCodedMoods 
                 }

