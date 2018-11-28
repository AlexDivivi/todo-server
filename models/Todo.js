var mongoose = require('mongoose')

var TodoSchema = new mongoose.Schema({
  text: mongoose.SchemaTypes.String,
  done: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
