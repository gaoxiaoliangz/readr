import _ from 'lodash'
import Schema from '../models/schema'
import Model from '../models/model'

class BasicApi {
  _model: Model
  _schema: Schema

  constructor(schema: Schema) {
    this._schema = schema
    this._model = new Model(schema)
  }

  findOne(id) {
    return this._model.findOne(id)
  }

  list(page, keyword?: string) {
    return this._model.list({
      page,
      disablePagination: _.isNil(page),
      // TODO
      filter: entity => true
    })
  }

  add(data) {
    return this._model.add(data)
  }

  update(id: string, data) {
    // todo
    // 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return this._model.update(id, data)
  }

  remove(id: string) {
    return this._model.remove(id)
  }
}

export default BasicApi
