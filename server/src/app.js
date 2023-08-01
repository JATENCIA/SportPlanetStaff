const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const router = require('./Routes')
const cookieParser = require('cookie-parser')
require('./db')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

app.use(
  cors({
    origin: 'https://sport-planet-staff-nbkv.vercel.app',
    credentials: true
  })
)

app.use(morgan('dev'))
app.use('/', router)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to SportPlanet')
})

module.exports = app
