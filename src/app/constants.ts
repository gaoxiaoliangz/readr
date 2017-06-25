export const DOUBAN_API_ROOT = 'https://api.douban.com/v2'

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
