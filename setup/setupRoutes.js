module.exports = function(app) {
  app.use('/', require('../routes/index'))
  app.use('/todos', require('../routes/todos'))
}
