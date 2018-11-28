var express = require('express')
var logger = require('morgan')

module.exports = function(app) {
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
