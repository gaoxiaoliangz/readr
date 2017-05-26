type Config = {
  offset: number
  limit: number
  list: any[]
  totalCount: number
}

export class QueryResult {
  offset: number
  limit: number
  list: any[]
  totalCount: number

  constructor(config: Config) {
    this.offset = config.offset
    this.limit = config.limit
    this.list = config.list
    this.totalCount = config.totalCount
  }

  map(fn: (item, index: number) => any) {
    this.list = this.list.map(fn)
    return this
  }
}

const queryResult = (config: Config) => {
  return new QueryResult(config)
}

export default queryResult
