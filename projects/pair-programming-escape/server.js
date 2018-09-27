const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const roomRoutes = require
const userRoutes = require
const app = express()
const PORT = process.env.PORT || 6624

app.use(morgan('dev'))
app.use(express.json())
