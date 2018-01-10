const mongoose = require('mongoose')
const express  = require('express')
const Restaurant = require('../db/schema')

// const Restaurants = Database.Restaurant
// const Moods = Database.MoodList

// use mongoose to retrieve or display restaurants from database

// function getRestaurants (request, respond){
// // return list of all restaurants
//   Restaurants.find({})
//       .then((restaurantsData) => {
//           respond.render('index',{
//               Restaurants: restaurantsData
//           })
//       })
//       .catch((err) => {
//           console.log(err)
//       })
// }

// function showRestaurants (request, respond) {
//   let name = request.params.name
//   Restaurants.findOne({name: name})
//   .then ((restaurants) => {
//     respond.render('restaurants-show', { restaurants: restaurants})
//   })
// }

// function addRestaurants (request, respond) {
//   // add this restaurants to the db
//   Restaurants.create(request.body.restaurant)
//     .then( restaurant => {
//         // 'Moods' push code by Gwen Latasa:
//         // Moods.findOneAndUpdate({'name':request.body.restaurant.mood},
//         //                        { $push: {restaurants: restaurant._id}})
//       // if the restaurant exists then go to the restaurant page
//       respond.redirect(`/${restaurants.name}`)
//     })
// }

// function updateRestaurants (request, respond) {
//   let name = request.params.name
//   Restaurants.findOneAndUpdate({name : name}, request.body.restaurants, {new:true})
//     .then(restaurants => {
//       respond.redirect(`/${restaurants.name}`)
//     })
// }


// function removeRestaurants (request, respond) {
//   let name = request.params.name
//   Restaurants.findOneAndRemove({name: name})
//     .then( () => {
//       respond.redirect(`/`)
//     })
// }

// module.exports = {
//   getRestaurants: getRestaurants,
//   showRestaurants : showRestaurants,
//   addRestaurants : addRestaurants,
//   updateRestaurants : updateRestaurants,
//   removeRestaurants : removeRestaurants

// }

const router = express.Router()

// get main page
router.get('/', (req, res) => {
   Restaurant.find({})
   .then((restaurant) => {
       // show all
       res.render('restaurants-index', {
           restaurants: restaurant
       })
   })
   .catch((err) => {
       console.log(err)
   })
})
 

 // get one by name:
 router.get('/:name', (req, res) => {
     let name = req.params.name
     Restaurant.findOne({name: req.params.name})
     .then((restaurant) => {
         res.render('restaurants-show', {
             restaurant: restaurant
           })
       })
       .catch((err) => {
           console.log(err)
       })
   })
   
   // update restaurants:
   router.put('/:name', (req, res) => {
       Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true})
       .then(restaurant => {
           res.redirect(`/${restaurant.name}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

   // Post new restaurants:
   router.post('/', (req, res) => {
       Restaurant.create(req.body.resource)
       .then((restaurant) => {
           res.redirect(`/ ${restaurant.name}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

     
 
   // delete res ** 
   router.delete('/:name', (req, res) => {
       Restaurant.findOneAndRemove({name: req.params.name})
       .then(() => {
           res.redirect('/')
       })
   })
   
   
   module.exports = router
