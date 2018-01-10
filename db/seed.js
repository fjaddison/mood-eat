var Restaurant = require('./schema');
// var Restaurant = new mongoose.model('Restaurant')
// var menuItemsSchema = mongoose.model('Mood')

var seedData = require('./seeds1.json')

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
