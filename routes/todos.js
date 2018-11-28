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

router.delete('/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/clear', (req, res) => {
  Todo.deleteMany()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
