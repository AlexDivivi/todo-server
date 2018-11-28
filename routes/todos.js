var express = require('express')
var router = express.Router()
var Todo = require('../models/Todo')

router.get('/', (req, res) => {
  Todo.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
