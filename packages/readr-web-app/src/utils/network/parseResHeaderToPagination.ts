import _ from 'lodash'
import parseQuery from '../../utils/parseQuery'

const parseHeaderPageLinkByRel = (links: string, rel: string) => {
  const link = links.split(',').find(s => s.indexOf(`rel="${rel}"`) > -1)

  if (!link) {
    return undefined
  }

  const url = link.split(';')[0].trim().slice(1, -1)

  return {
    // todo
    page: parseInt(_.get(parseQuery(url.split('?')[1] || ''), 'page', 0) as any, 10),
    url
  }
}

export default function parseResHeaderToPagination(response) {
  if (!response) {
    return {}
  }

  const links = response.headers.get('link')
  if (!links) {
    return {}
  }

  const next = parseHeaderPageLinkByRel(links, 'next')
  const last = parseHeaderPageLinkByRel(links, 'last')

  return {
    next,
    last
  } as any
}
