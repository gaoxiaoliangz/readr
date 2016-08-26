import errors from '../errors'
import i18n from '../utils/i18n'
// import mapHttpMethod from '../endpoints/map-http-method'
import _ from 'lodash'

class BasicApi {
  // todo
  model: any

  constructor(model) {
    this.model = model
  }

  find(match) {
    return this.list(match).then(res => {
      if (res.length === 0) {
        return Promise.reject(new errors.NotFoundError(i18n('errors.api.general.notFound')))
      }
      return res._response[0]
    })
  }

  list(match, options = { page: '1', itemsPerPage: '5' }) {
    const { page: pageStr, itemsPerPage: itemsPerPageStr } = options
    const page = parseInt(pageStr || '1', 10)
    const itemsPerPage = parseInt(itemsPerPageStr || '5', 10)
    // 支持过滤器：exclude, fields, limit
    // 例如：?exclude=field1,field2&fields=field3,field4&limit=10
    // const fieldsToExclude = data.options && data.options.exclude ? data.options.exclude.split(',') : []
    // const filedsToInclude = data.options && data.options.fields ? data.options.fields.split(',') : []
    // const limit = data.options && data.options.limit ? parseInt(data.options.limit, 10) : 0
    // const search = data.options && data.options.q ? data.options.q : ''

    // const getSearchableFields = (fields) => {
    //   return Object.keys(fields)
    //     .filter(key => Boolean(fields[key].includeInSearch))
    //     .map(key => key)
    // }

    const query = () => {
      // let match = {}

      // if (search !== '') {
      //   const reg = new RegExp(search)
      //   const matchArray = getSearchableFields(models[model].schema.fields).map(key => ({
      //     [key]: reg
      //   }))
      //   match = { $or: matchArray }
      // }

      // todo: 边界情况考虑
      return this.model.find(match).list().then(results => {
        // if (typeof page === 'undefined') {
        //   console.log('wtf')
        //   // return Promise.resolve(results)
        // }
        const startIndex = (page - 1) * itemsPerPage
        const pagedResults = {
          _response: results.reverse().slice(startIndex, itemsPerPage + startIndex),
          _pagination: {
            current: page,
            // todo: 可能有 bug
            all: parseInt((results.length / itemsPerPage) as any, 10) + 1
          }
        }

        return pagedResults
        // .map(utils.includeFields(filedsToInclude))
        // .map(utils.excludeFields(fieldsToExclude))
        // .filter(utils.limitResults(limit))
      })
    }

    return query()
  }

  add(data) {
    return this.model.insert(data)
  }

  update(match, data) {
    // const match = utils.getIdMatch(data.options)

    // todo: 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return this.model.find(match).update(data)
  }

  remove(match) {
    return this.model.find(match).destroy()
  }
}

export default BasicApi
