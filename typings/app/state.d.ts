// state
interface Link {
  page: string
  url: string
}

type Session = {
  role: Roles
  username: string
  fetchStatus: FetchStatus
  id: string
}

interface SelectedPagination {
  pages: {}
  next: Link
  last: Link
  currentPage: number
  fetchStatus: FetchStatus
}

interface SelectedRouting {
  action: string
  hash: string
  key: string
  pathname: string
  query: {
    [key: string]: any
  }
  search: string
  state: any
}

interface SelectedEntity {
  fetchStatus: FetchStatus
  error: any
  [key: string]: any
}
