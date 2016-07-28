export default function finalRender(req, res) {
  return (result: Promise<any>) => {
    result.then(data => {
      res.render('app', data)
    }, err => {
      res.status(err.statusCode).render('error')
    })
  }
}
