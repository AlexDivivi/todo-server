module.exports = function(app) {
  var cors = require('cors')
  app.use(
    cors({
      origin: ['localhost:3000', 'https://neuefische-todo-app.netlify.com'],
    })
  )
}
