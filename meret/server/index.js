const express = require('express')
const cors = require('cors')
require('dotenv').config({path: './.env'})
const createSession = require('./api/checkout')
const paymentIntent = require('./api/paymentIntent')
const webhook = require('./api/webhook')
const app = express()

const port = 8080

app.use(express.json({
    verify: (req,res,buffer) => req['rawBody'] = buffer
}))
app.use(cors({origin: true}))
app.get('/', (req,res) => res.send("hello world"))
app.post('/checkoutsession',createSession)
app.post('/create-payment-intent', paymentIntent)
app.post('/webhook', webhook)
app.listen(port,() => console.log("server is listening ",port))
