import _ from 'lodash'
import parseUrlencoded from '../../app/utils/parseUrlencoded'
import helpers from '../../app/helpers'

const API_ROOT = helpers.getApiRoot()

function parsePagination({ fullPath, query }, { current, all }) {
  const getLintByPage = page => (`${fullPath}?${parseUrlencoded(_.assign({}, query, { page }))}`)

  const links = {
    first: getLintByPage(1),
    last: getLintByPage(all),
    prev: getLintByPage(current - 1),
    next: getLintByPage(current + 1),
  }

  if (current > all) {
    links.prev = links.last
  }

  if (all === 1) {
    if (current > 1) {
      return _.omit(links, ['next'])
    }

    if (current === 1) {
      return _.omit(links, ['prev', 'next'])
    }
  }

  if (current <= 1) {
    return _.omit(links, ['prev'])
  }

  if (current >= all) {
    return _.omit(links, ['next'])
  }

  return links
}

const handleSuccess = (apiResults, req, res) => {
  if (req.method === 'POST') {
    res.status(201).send(apiResults)
  } else {
    if (apiResults._pagination) {
      const host = API_ROOT

      res.links(parsePagination({
        fullPath: host + req.path,
        query: req.query,
      }, apiResults._pagination))

      res.status(200).send(apiResults.entities)
      return false
    }

    res.status(200).send(apiResults)
  }
}

function handleJSONResponse(req, res, next) {
  const { apiResults } = req

  if (!apiResults) {
    next(new Error('"apiResults" is not present!'))
  }

  apiResults.then(results => {
    handleSuccess(results, req, res)
  }, error => {
    next(error)
  })
}

export default handleJSONResponse
