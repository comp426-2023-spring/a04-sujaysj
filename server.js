import minimist from 'minimist'
const args = minimist(process.argv.slice(2))
const port = args.port || 5000
import { rps, rpsls } from './lib/rpsls.js'
import express from 'express'
var app = express()

app.get('/app', (req, res, next) => {
    res.status(200).type('txt').send("200 OK")
})

app.get('/app/rps', (req, res, next) => {
    res.status(200).type('json').send(rps())
})

app.get('/app/rpsls', (req, res, next) => {
    res.status(200).type('json').send(rpsls())
})

app.get('/app/rps/play', (req, res, next) => {
    res.status(200).type('json').send(rps(req.body.shot()))
})

app.get('/app/rps/play/:shot', (req, res, next) => {
    res.status(200).type('json').send(rps(req.params.shot))
})

app.get('/app/rpsls/play', (req, res, next) => {
    res.status(200).type('json').send(rpsls(req.body.shot))
})

app.get('/app/rpsls/play/:shot', (req, res, next) => {
    res.status(200).type('json').send(rps(req.params.shot))
})

app.get('*', (req, res, next) => {
    res.status(400).type('txt').send('404 NOT FOUND')
})

app.listen(port)