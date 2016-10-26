import * as schemas from '../api/schemas'
import Model from '../models/model'

const fileModel = new Model(schemas.file)

export default function logFile(req, res, next) {
  const file = req.file
  req.apiResults = fileModel
    .add({
      name: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    })
    .then(result => {
      return result.ops[0]
    })

  next()
}
