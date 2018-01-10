const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
// const Restaurants = require('./controllers/restaurants')
const Restaurants = require('./db/schema')
//this library allows us to do push and put requests
const methodOverride = require('method-override')
const path = require('path')

const app = express()
 
app.set('port', process.env.PORT || 4000)

app.use('/assets', express.static('public'))

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use(express.static(path.join(__dirname, '/public')))


app.use(methodOverride('_method'))
app.use(parser.json()) //handles json post requests
app.use(parser.urlencoded({ extended: true })) // handles form submissions

//FIX this is if we want to use CSS
//app.use('/assets', express.static('public'))



// app.get('/', (req, res) => {
//     res.render('index')
// })

// use mongoose to retrieve or display restaurants from database

app.get('/', (request, respond) => {
// return list of all restaurants
  console.log('get' + Restaurants.find({}).name)
  Restaurants.find({})
      .then((restaurants) => {
          respond.render('index',{
              restaurants: restaurants
          })
      })
      .catch((err) => {
          console.log(err)
      })
})

app.get('/:name', (request, respond) => {
  console.log('I;m here')
  let name = request.params.name
  console.log(name)
  console.log('second test' + Restaurants.address)
  Restaurants.findOne({name: name})
  .then(restaurants => {
    console.log(restaurants)
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
