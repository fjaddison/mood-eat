// const express       = require('express')
const Restaurants        = require('../db/schema')


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
  // add this recipe to the db
  Restaurants.create(request.body.restaurant)
    .then( restaurants => {
      // if the recipe exists then go to the recipe page
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
