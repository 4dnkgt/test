require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000;

const app = express();

const coronaroutes = require('./routes/apicorona.js')
const pokedexroute = require('./routes/pokedex.js')
const imagesroutes = require('./routes/images.js')

app.use('/api', imagesroutes)
app.use('/api', pokedexroute)
app.use('/api', coronaroutes);
app.use(bodyParser.json())

//Routes
app.get('/', (req, res) => {
 res.send('Hello World! <br>Links:</br> <a href= "https://cyanapi.herokuapp.com/">Home!</a> <br><a href="https://cyanapi.herokuapp.com/api">API Endpoints</a></br> <a href="https://github.com/4dnkgt">Github!</a>')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
console.log('hello world')
})

//Listen to server

app.listen(port, () => {
    console.log(`Listening to PORT ${port}`)
})
