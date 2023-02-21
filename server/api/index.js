const router = require('express').Router()

router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 400
  next(err)
})

module.exports = router
