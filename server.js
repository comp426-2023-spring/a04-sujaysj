const args = require('minimist')(process.argv.slice(2))
const port = args.port || 5000
import { rps, rpsls } from './lib/rpsls.js'
var express = require('express')
var app = express()

app.get('/app', (req, res, next) => {
    res.send("200 OK")
})

app.get('/app/rps', (req, res, next) => {
    res.send(rps())
})

app.get('/app/rpsls', (req, res, next) => {
    res.send(rpsls())
})

app.get('/app/rps/play', (req, res, next) => {
    res.send(rps(req.body.shot()))
})

app.get('/app/rps/play/:shot', (req, res, next) => {
    res.send(rps(req.params.shot))
})

app.get('/app/rpsls/play', (req, res, next) => {
    res.send(rpsls(req.body.shot))
})

app.get('/app/rpsls/play/:shot', (req, res, next) => {
    res.send(rpsls(req.params.shot))
})