var mongoose = require('mongoose')
var { MONGO_PATH } = process.env

module.exports = function() {
  mongoose
    .connect(
      MONGO_PATH,
      { useNewUrlParser: true }
    )
    .then(() => console.log(`Connected to ${MONGO_PATH}`))
    .catch(err =>
      console.error(`ERROR: Could not connect to ${MONGO_PATH}`, err)
    )
}
