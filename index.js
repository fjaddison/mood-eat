const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const restaurants = require('./controllers/restaurants')

//this library allows us to do push and put requests
const methodOverride = require('method-override')

const app = express()
 
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))

app.use(methodOverride('_method'))
app.use(parser.json()) //handles json post requests
app.use(parser.urlencoded({ extended: true })) // handles form submissions

//FIX this is if we want to use CSS
//app.use('/assets', express.static('public'))



app.get('/', (req, res) => {
    res.render('index')
})

// use mongoose to retrieve or display restaurants from database

app.get('/', (request, respond) => {
// return list of all restaurants
  console.log('get' + Restaurants.find({}))
  Restaurants.find({})
      .then((restaurantsData) => {
          respond.render('index',{
              restaurants: restaurantsData
          })
      })
      .catch((err) => {
          console.log(err)
      })
})

app.get('/:name', (request, respond) => {
  let name = request.params.name
  Restaurants.findOne({name: name})
  .then(restaurants => {
    respond.render('restaurants-show', { restaurants: restaurants})
  })
})

//GL
// for when the browser wants to send info back
// to the server
app.post( '/', (request, respond) => {
  console.log('in post')
  Restaurants.create(request.body.recipe)
    .then( restaurants => {
      // if the restaurants exists then go to the recipe page
      respond.redirect(`/${restaurants.name}`)
    })
})


//GL
//update restaurants request
app.put('/:name', (request, respond) => {
  let name = request.params.name
  Restaurants.findOneAndUpdate({name : name})
    .then(restaurants => {
      res.redirect(`/${restaurants.name}`)
    })
})



app.listen(app.get('port'), () => {
  console.log('Listening on 4000')
})
