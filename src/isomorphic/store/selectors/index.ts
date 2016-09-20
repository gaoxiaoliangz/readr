import { createSelector } from 'reselect'

const doubanBooksEntitiesSelector = state2 => state2.entities.doubanBooks
const doubanBooksIdsSelector = query => state2 => (
  state2.pagination.doubanBookSearchResults[query]
  && state2.pagination.doubanBookSearchResults[query].ids
) || []

export const filterDoubanBooks = query => createSelector(
  doubanBooksEntitiesSelector,
  doubanBooksIdsSelector(query),
  (entities, ids) => {
    return ids.map(id => entities[id])
  }
)

export const doubanBooksAsOptions = query => createSelector(
  filterDoubanBooks(query),
  books => {
    return books.map(book => ({
      name: book.title,
      value: book.id,
      additional: {
        description: book.summary,
        cover: book.images.large,
        author: book.author.join(', ')
      }
    }))
  }
)
