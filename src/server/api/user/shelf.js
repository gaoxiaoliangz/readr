'use strict'
const Promise = require('bluebird')
const errors = require('../../errors')
const i18n = require('../../utils/i18n')
const models = require('../../models')
const _ = require('lodash')
// const humps = require('humps')

module.exports = {
  list(userId) {
    return models.progress.find({ user_id: userId }).listRaw().then(results => {
      if (results.length === 0) {   
        return results
      }      

      return Promise.all(
        results.map(result => {
          return models.book.findById(result.book_id).list().then(res => {
            if (_.isEmpty(res)) {
              return models.book.outputEmpty(result.book_id)
            }

            return res[0]
          })
        })
      )
    })
  },
}
