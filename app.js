require('dotenv').config()

var express = require('express')
var app = express()

require('./setup/setupSecurity')(app)
require('./setup/setupCors')(app)
require('./setup/setupDefaults')(app)
require('./setup/setupRoutes')(app)
require('./setup/setupMongo')(app)
require('./setup/setupErrors')(app)

module.exports = app
