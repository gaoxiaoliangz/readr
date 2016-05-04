import _ form 'lodash'

const utils = {
  mapPaginationToEntities(pagination, entities, key) {
    return pagination.ids.map(id => entities[key])
  }
}
