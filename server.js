const express = require('express')
const {join} = require('path')
const app = express()


app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./routes')(app)

app.listen(3000)