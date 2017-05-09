const viewerQuery = `
query Viewer2($bookId: String!, $before: String, $after: String, $first: Int, $last: Int) {
  viewer {
    bookPages(pageHeight: 600, bookId: $bookId, first: $first, last: $last, before: $before, after: $after) {
      edges {
        cursor
        node {
          id
          meta {
            pageNo
            offset
          }
          elements {
            ...elementsRecursive
          }
        }
      }
    }
  }
}

fragment elementFields on HTMLElementObject {
  tag
  type
  text
  id
  attrs {
    id
    href
    src
  }
}

fragment elementsRecursive on HTMLElementObject {
  ...elementFields
  children {
    ...elementFields
    children {
      ...elementFields
      children {
        ...elementFields
        children {
          ...elementFields
        }
      }
    }
  }
}
`

export default viewerQuery
