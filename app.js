const express = require('express') //llamamos a Express
const users = require('routes/cerveza.js')
var app = express()    

var port = 8080  // establecemos nuestro puerto

//Middelware
app.use(express.json)

app.use('/cerveza',require('./routes/cerveza'));



// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)