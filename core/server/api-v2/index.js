'use strict'
const apiConfigs = require('./api-config')
const modles = require('../models')
const utils = require('./utils')
const errors = require('../errors')
const i18n = require('../utils/i18n')

function createApiFn(fnName, model) {
  switch (fnName) {
    case 'find':
      return function find(data) {
        const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
        const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
        const match = utils.getIdMatch(data.options)
        const query = () => {
          return this.model.find(match).list().then(res => {
            if (res.length === 0) {
              return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
            }
            return res
              .map(utils.includeFields(filedsToInclude))
              .map(utils.excludeFields(fieldsToExclude))[0]
          })
        }

        return utils.pipeline([
          this._isEnabled('find'),
          query
        ])
      }

    case 'edit':
      return {}

    case 'add':
      return {}

    case 'browse':
      return () => modles[model].find({}).listRaw()

    case 'remove':
      return {}

    default:
      return new Error('API method not defined!')
  }
}

function createApi(config) {
  const allMethods = ['add', 'browse', 'find', 'edit', 'remove']
  const fnWithoutId = ['add', 'browse']
  let fns = {}
  let _publicMethods = [] // { name, url }[]

  allMethods.forEach(mtd => {
    if (!config.excludedMethods || (config.excludedMethods && config.excludedMethods.indexOf(mtd) === -1)) {
      // 如果方法没在配置文件里面被排除

      let url = config.url

      if (fnWithoutId.indexOf(mtd) === -1) {
        url = `${url}/:Id`
      }

      fns = Object.assign({}, fns, {
        [mtd]: createApiFn(mtd, config.model)
      })

      if (!config.privateMethods || (config.privateMethods && config.privateMethods.indexOf(mtd) === -1)) {
        // 如果不是私有方法
        _publicMethods = _publicMethods.concat({
          name: mtd,
          url
        })
      }
    }
  })

  return Object.assign({}, fns, { _publicMethods })
}

const apiReadingProgress = {
  _publicMethods: [
    {
      name: 'find',
      url: '/users/:userId/books/:bookId/progress'
    }, {
      name: 'edit',
      url: '/users/:userId/books/:bookId/progress'
    }
  ],
  find() {
    return {}
  },
  edit() {
    return {}
  }
}

const Api = {
  authors: createApi(apiConfigs.authors),
  apiReadingProgress
}

module.exports = Api
