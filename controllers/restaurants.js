// const express  = require('express')
const Database = require('../db/schema')
const Restaurants = Database.Restaurant
// const Moods = Database.MoodList

// use mongoose to retrieve or display restaurants from database

function getRestaurants (request, respond){
// return list of all restaurants
  Restaurants.find({})
      .then((restaurantsData) => {
          respond.render('index',{
              Restaurants: restaurantsData
          })
      })
      .catch((err) => {
          console.log(err)
      })
}

function showRestaurants (request, respond) {
  let name = request.params.name
  Restaurants.findOne({name: name})
  .then (restaurants) 
    respond.render('restaurants-show', { restaurants: restaurants})
  }

function addRestaurants (request, respond) {
  // add this restaurants to the db
  Restaurants.create(request.body.restaurant)
    .then( restaurant => {
        // 'Moods' push code by Gwen Latasa:
        // Moods.findOneAndUpdate({'name':request.body.restaurant.mood},
        //                        { $push: {restaurants: restaurant._id}})
      // if the restaurant exists then go to the restaurant page
      respond.redirect(`/${restaurants.name}`)
    })
}

function updateRestaurants (request, respond) {
  let name = request.params.name
  Restaurants.findOneAndUpdate({name : name}, request.body.restaurants, {new:true})
    .then(restaurants => {
      respond.redirect(`/${restaurants.name}`)
    })
}


function removeRestaurants (request, respond) {
  let name = request.params.name
  Restaurants.findOneAndRemove({name: name})
    .then( () => {
      respond.redirect(`/`)
    })
}

module.exports = {
  getRestaurants: getRestaurants,
  showRestaurants : showRestaurants,
  addRestaurants : addRestaurants,
  updateRestaurants : updateRestaurants,
  removeRestaurants : removeRestaurants

}
