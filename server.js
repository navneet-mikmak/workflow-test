const express = require('express')
const bodyParser = require('body-parser')

const { getusers, welcome } = require('./userController')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/get-users', getusers)

app.get('/', welcome)

app.listen(3000)