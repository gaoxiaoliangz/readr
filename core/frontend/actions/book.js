import ApiRoots from 'constants/ApiRoots'
import { Schemas } from 'schemas'

export function fetchBookProgress(bookId) {
  return {
    bookId,
    CALL_API: {
      types: ['BOOK_PROGRESS_REQUEST', 'BOOK_PROGRESS_SUCCESS', 'BOOK_PROGRESS_FAILURE'],
      endpoint: `books/${bookId}/progress`,
      schema: Schemas.BOOK_PROGRESS
    }
  }
}

export function fetchBooks(filter) {
  return {
    filter,
    CALL_API: {
      types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE'],
      endpoint: `books?filter=${filter}`,
      schema: Schemas.BOOK_ARRAY
    }
  }
}

export function fetchCollection(collectionId) {
  return {
    collectionId,
    CALL_API: {
      types: ['COLLECTION_REQUEST', 'COLLECTION_SUCCESS', 'COLLECTION_FAILURE'],
      endpoint: `collections/${collectionId}`,
      schema: Schemas.COLLECTION
    }
  }
}

export function fetchBookContent(bookId) {
  return {
    bookId,
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: `books/${bookId}/content`,
      schema: Schemas.BOOK
    }
  }
}

export function fetchBookInfo(bookId) {
  return {
    bookId,
    CALL_API:{
      types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
      endpoint: `books/${bookId}`,
      schema: Schemas.BOOK_ARRAY
    }
  }
}

export function fetchDoubanBookSearchResults(query) {
  return {
    query,
    CALL_API:{
      types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
      endpoint: `search?count=5&q=${query}`,
      apiUrl: ApiRoots.DOUBAN_BOOKS,
      schema: Schemas.DOUBAN_BOOK_SEARCH_RESULTS,
      extendedOptions: { useJsonp: true }
    }
  }
}

export function searchBooks(query) {
  return {
    query,
    CALL_API:{
      types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE'],
      endpoint: `search?q=${query}`,
      apiUrl: ApiRoots.LOCAL,
      schema: Schemas.MATCHED_BOOK_ARRAY
    }
  }
}
