import mongoose from 'mongoose'
import Debug from 'debug'
import _ from 'lodash'
import getMongoDBUrl from '../helpers/getMongoDBUrl'
import { addUitlMethods } from './utils'
import * as schemas from './mg-schemas'

mongoose.Promise = global.Promise
mongoose.connect(getMongoDBUrl())

const debug = Debug('readr:data-provider')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  debug('db connection opened')
})

const Author = mongoose.model('Author', schemas.authorSchema)
const Book = mongoose.model('Book', schemas.bookSchema)
const Collection = mongoose.model('Collection', schemas.collectionSchema)
const File = mongoose.model('File', schemas.fileSchema)
const Progress = mongoose.model('Progress', schemas.progressSchema)
const Tag = mongoose.model('Tag', schemas.tagSchema)
const User = mongoose.model('User', schemas.userSchema)

export default {
  Author: addUitlMethods(Author),
  Book: addUitlMethods(Book),
  Collection: addUitlMethods(Collection),
  File: addUitlMethods(File),
  Progress: addUitlMethods(Progress),
  Tag: addUitlMethods(Tag),
  User: addUitlMethods(User),
}
