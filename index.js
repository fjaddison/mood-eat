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



app.listen(app.get('port'), () => {
  console.log('Listening on 4000')
})
