export const PUBLIC_DIR = 'build/assets'
export const PUBLIC_URL = '/assets'
export const SESSION_SECRET = 'key'
export const REQ_SIZE_LIMIT = '5mb'
export const COOKIE_MAX_AGE = 3 * 30 * 24 * 60 * 60 * 1000 // unit: ms

export const REST_API_PATH = '/api'
export const GRAPHQL_API_PATH = '/gql'

export enum FETCH_STATUS {
  LOADING,
  NONE,
  LOADED,
  FAILED
}

export const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  VISITOR: 'visitor'
}

export const POST_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  UNPUBLISHED: 'UNPUBLISHED'
}

export const POST_VISIBILITY = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}

export const POST_CATEGORY = {
  BLOG: 'BLOG',
  BOOK_WEEKLY: 'BOOK_WEEKLY',
  PAGES: 'PAGES',
}
