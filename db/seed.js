var mongoose = require('./schema.js');
var Restaurant = mongoose.model('Restaurant')
var menuItemsSchema = mongoose.model('Mood')

var seedData = require('./seeds.json')

// remove clears out restaurant collection
Restaurant.remove({})
    .then(() => {
// create collection using JSON contained in seed file. note: skips schema validation
        return Restaurants.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

Mood.remove({})
    .then(() => {
        return mood.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })
