const mongoose = require('../controllers/restaurants')
const Restaurant = require('./schema');
// var Restaurant = new mongoose.model('Restaurant')
// var menuItemsSchema = mongoose.model('Mood')
const seedData = require('./seeds.json')

// remove clears out restaurant collection
Restaurant.remove({})
    .then(() => {
// create collection using JSON contained in seed file. note: skips schema validation
        return Restaurant.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

// Mood.remove({})
//     .then(() => {
//         return mood.collection.insert(seedData)
//     })
//     .then(() => {
//         process.exit()
//    
