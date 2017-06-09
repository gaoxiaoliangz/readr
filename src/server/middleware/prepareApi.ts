export default function prepareApi(req, res, next) {
  req.__apiTouched = true
  next()
}
