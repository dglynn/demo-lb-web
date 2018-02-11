var express = require('express')

var app = express()

app.set('view engine', 'ejs')

var helmet = require('helmet')
app.use(helmet())

app.use('/web', express.static('web'))

app.get('/', function (req, res) {
  var data = {
    response: ['hello world', 'hello world', 'hello world']
  }
  res.render('index', {data: data})
})

app.listen(8080, '0.0.0.0')
