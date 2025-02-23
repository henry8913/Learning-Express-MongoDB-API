const config = require('./config.json');

console.log(config.segreto);


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log('Server running on port 3000');

app.listen(3000)
