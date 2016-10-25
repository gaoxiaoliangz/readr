import _ from 'lodash'
import Schema from '../models-v3/schema'
import Model from '../models-v3/model'

class BasicApi {
  _model: Model
  _schema: Schema

  constructor(schema: Schema) {
    this._schema = schema
    this._model = new Model(schema)
  }

  findById(id) {
    this._model.findById(id)
  }

  list(page, keyword?: string) {
    return this._model.list({
      page,
      disablePagination: _.isNil(page),
      // todo
      filter: entity => true
    })
  }

  add(data) {
    return this._model.add(data)
  }

  update(id, data) {
    // todo
    // 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
    // 可能会造成 upsert 的数据 fields 不全的问题
    return this._model.update({_id: id}, data)
  }

  remove(id) {
    return this._model.remove({_id: id})
  }
}

export default BasicApi
