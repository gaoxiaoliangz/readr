const express = require('express')
const router = new express.Router()

function logout() {
  router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
  })

  return router
}

module.exports = logout
