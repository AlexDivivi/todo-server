var createError = require('http-errors')

module.exports = function(app) {
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
}
