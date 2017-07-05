import mongoose from 'mongoose'
import Debug from 'debug'
import _ from 'lodash'
import getMongoDBUrl from '../helpers/getMongoDBUri'
import { addUitlMethods } from './utils'
import * as schemas from './mgSchemas'

mongoose.Promise = global.Promise
mongoose.connect(getMongoDBUrl())

const debug = Debug('readr:dataProvider')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  debug('db connection opened')
})

export const Author = mongoose.model('Author', schemas.authorSchema)
export const Book = mongoose.model('Book', schemas.bookSchema)
export const Category = mongoose.model('Category', schemas.categorySchema)
export const Collection = mongoose.model('Collection', schemas.collectionSchema)
export const File = mongoose.model('File', schemas.fileSchema)
export const Post = mongoose.model('Post', schemas.postSchema)
export const Progress = mongoose.model('Progress', schemas.progressSchema)
export const Slide = mongoose.model('Slide', schemas.slideSchema)
export const Tag = mongoose.model('Tag', schemas.tagSchema)
export const User = mongoose.model('User', schemas.userSchema)

export default {
  Author: addUitlMethods(Author),
  Book: addUitlMethods(Book),
  Category: addUitlMethods(Category),
  Collection: addUitlMethods(Collection),
  File: addUitlMethods(File),
  Post: addUitlMethods(Post),
  Progress: addUitlMethods(Progress),
  Slide: addUitlMethods(Slide),
  Tag: addUitlMethods(Tag),
  User: addUitlMethods(User),
}
