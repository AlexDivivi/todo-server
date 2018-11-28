var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var cors = require('cors')

var app = express()

app.use(
  cors({
    origin: true,
  })
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes/index'))
app.use('/todos', require('./routes/todos'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  const error =
    req.app.get('env') === 'development'
      ? {
          status: err.status || 500,
          message: err.message,
        }
      : {}

  app.set('json spaces', 2)
  res.status(error.status)
  res.json({ error })
})

module.exports = app
