#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
