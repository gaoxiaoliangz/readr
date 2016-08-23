import express from 'express'
const router = express.Router()

export default function logout() {
  router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
  })

  return router
}
