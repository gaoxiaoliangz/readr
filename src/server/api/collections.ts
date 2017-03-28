// import Model from '../models/model'
// import * as schemas from '../data/schemas'
// import _ from 'lodash'

// const collectionModel = new Model(schemas.collection)

// export function listCollection(page?) {
//   return collectionModel.list({
//     page,
//     disablePagination: _.isNil(page),
//     mapping: entity => {
//       return _.assign({}, entity, {
//         items: entity['items'].map(item => _.omit(item, 'content'))
//       })
//     }
//   })
// }
