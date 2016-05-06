'use strict'

const models = require('../models')
const Promise = require('bluebird')
const utils = require('./utils')
const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
const data = require('../utils/data')

const books = {
  add(object, options) {
    let requiredOptions = ['bookContent', 'bookInfo']

    const processDataAndDoQuery = (options) => {
      const raw = options.data.bookContent
      const html = data.parseTextToHtml(raw)

      let bookInfo = JSON.parse(options.data.bookInfo)
      const bookInfoId = bookInfo.id

      // model putData will override id infoo
      bookInfo.book_id = bookInfoId
      delete bookInfo.id

      const bookData = {
        book_info_id: bookInfoId,
        book_content: {
          raw: raw,
          html: html
        }
      }

      return models.getData('book_info', { book_id: bookInfoId}).then(result => {
        if(result.length === 0) {
          return models.putData('book_info', bookInfo).then(result => {
            return models.putData('books', bookData).then(result => {
              return Promise.resolve(result)
            }, error => {
              return Promise.reject(error)
            })
          }, error => {
            return Promise.reject(error)
          })
        }else{
          return Promise.reject(new errors.ValidationError(i18n('errors.api.books.bookExists')))
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkAdminPermissions,
      processDataAndDoQuery
    ]

    return pipeline(tasks, object, options)
  },

  /**
   * @param options includes query #filter: user | newest
   */
  browse(options) {
    const requiredOptions = []
    let filter = options.filter?options.filter:'newest'
    let doQuery

    const queryRecentReading = (options) => {
      return models.getData('reading_progress', { user_id: options.context.user.id}).then(result => {
        return Promise.all(result.map(item => {
          let infoOptions = Object.assign({}, options, {id: item.book_id})
          return books.getBookInfo(infoOptions)
        }))
      }, error => {
        return Promise.reject(error)
      })
    }

    const queryNewest = () => {
      return models.getData('books', null).then(result => {
        return Promise.all(result.map(item => {
          let infoOptions = Object.assign({}, options, {id: item.id})
          return books.getBookInfo(infoOptions)
        }))
      }, error => {
        return Promise.reject(error)
      })
    }

    let tasks = [
      utils.validate(requiredOptions),
    ]

    if(filter === 'user') {
      doQuery = queryRecentReading
      tasks.push(utils.checkUserPermissions)
    } else {
      doQuery = queryNewest
    }

    tasks.push(doQuery)

    return pipeline(tasks, options)
  },

  delete(options) {
    const requiredOptions = ['id']

    function doQuery(options) {
      return models.deleteData('books', {id: options.id}).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  find(options) {
    const requiredOptions = ['id']
    const additionalOptions = ['fields']
    const defaultFields = ['id', 'title', 'author', 'date_created']

    const doQuery = (options) => {
      return models.getData('books', {id: options.id}).then(result => {
        if(result.length === 0) {
          return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
        }

        const bookInfoId = result[0].book_info_id
        let bookContent = result[0].book_content.html
        let fields = options.fields ?
          (options.fields === 'all' ? options.fields : defaultFields.concat(options.fields.split(','))):
          defaultFields

        // check book info data existence
        if(typeof bookInfoId === 'undefined') {
          delete result[0].book_content.raw
          // TODO
          return Promise.resolve(result[0])
        }else{
          return models.getData('book_info', {book_id: bookInfoId}).then(result => {
            if(result.length === 0) {
              return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.doubanInfoNotFound')))
            }
            // TODO
            result[0].db_book_id = result[0].book_id
            result[0].id = options.id
            result[0].content = {
              html: bookContent
            }
            delete result[0]._id
            delete result[0].book_id

            if(fields !== 'all') {
              result[0] = _.pick(result[0], fields)
            }

            return Promise.resolve(result[0])
          }, error => {
            return Promise.reject(error)
          })
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions, additionalOptions),
      doQuery
    ]

    return pipeline(tasks, options)
  },


  /**
   * @param options includes query #q to match title and author
   */
  search(options) {
    const requiredOptions = []

    const doQuery = () => {
      const query = options.q
      const reg = new RegExp(query)

      return models.getData('book_info', {$or: [{title: reg}, {author: reg}]}).then(result => {
        return result
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkAdminPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  // getAllBooks(options) {
  //   return models.getData('books', null).then(result => {
  //     return Promise.all(result.map(item => {
  //       let infoOptions = Object.assign({}, options, {id: item.id})
  //       return books.getBookInfo(infoOptions)
  //     }))
  //   }, error => {
  //     return Promise.reject(error)
  //   })
  // },

  // getBookContent(options) {
  //   const requiredOptions = ['id']
  //
  //   const doQuery = (options) => {
  //     return models.getData('books', {id: options.id}).then(function(result){
  //       if(result.length !== 0) {
  //         return Promise.resolve({
  //           html: result[0].book_content.html,
  //           id: options.id
  //         })
  //       }else{
  //         return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
  //       }
  //     }, error => {
  //       return Promise.reject(error)
  //     })
  //   }
  //
  //   const tasks = [
  //     utils.validate(requiredOptions),
  //     doQuery
  //   ]
  //
  //   return pipeline(tasks, options)
  // },

  // getBookInfo(options) {
  //   const requiredOptions = ['id']
  //
  //   const doQuery = (options) => {
  //     return models.getData('books', {id: options.id}).then(result => {
  //       if(result.length === 0) {
  //         return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.bookNotFound')))
  //       }
  //
  //       const book_info_id = result[0].book_info_id
  //
  //       // check douban book data existence
  //       if(typeof book_info_id === 'undefined') {
  //         delete result[0]['book_content']
  //
  //         return Promise.resolve(result[0])
  //       }else{
  //         return models.getData('book_info', {book_id: book_info_id}).then(result => {
  //           if(result.length === 0) {
  //             return Promise.reject(new errors.NotFoundError(i18n('errors.api.books.doubanInfoNotFound')))
  //           }
  //           delete result[0]._id
  //           result[0].id = options.id
  //
  //           return Promise.resolve(result[0])
  //         }, error => {
  //           return Promise.reject(error)
  //         })
  //       }
  //     }, error => {
  //       return Promise.reject(error)
  //     })
  //   }
  //
  //   const tasks = [
  //     utils.validate(requiredOptions),
  //     doQuery
  //   ]
  //
  //   return pipeline(tasks, options)
  // },

  getProgress(options) {
    const requiredOptions = ['id']

    function doQuery(options) {
      return models.getData('reading_progress', {book_id: options.id}).then(result => {
        if(result.length === 0) {
          return {}
        } else {
          return Promise.resolve(result[0])
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, options)
  },

  setProgress(object, options) {
    const requiredOptions = ['id', 'percentage', 'pageNo', 'pageSum']

    function doQuery(options) {
      const match = {
        book_id: options.id,
        user_id: options.context.user.id
      }

      const data = {
        book_id: options.id,
        user_id: options.context.user.id,
        page_no: options.data.pageNo,
        page_sum: options.data.pageSum,
        percentage: options.data.percentage
      }

      return models.updateData('reading_progress', match, data, true).then(result => {
        return Promise.resolve(result)
      }, error => {
        return Promise.reject(error)
      })
    }

    const tasks = [
      utils.validate(requiredOptions),
      utils.checkUserPermissions,
      doQuery
    ]

    return pipeline(tasks, object, options)
  }
}

module.exports = books
