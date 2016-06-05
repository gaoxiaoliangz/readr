const express = require('express')
const router = express.Router()

function logout(req, res) {
  router.get("/logout",function(req, res) {   
    req.session.destroy()
    res.redirect("/")
  })
  
  return router
}

module.exports = logout