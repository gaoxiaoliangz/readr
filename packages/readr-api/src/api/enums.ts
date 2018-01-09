// don't use 0 as value, because Boolean(0) is false
// it's not so convenient to determine whether an arg is
// present by using the simple if(property) {...}
export enum PostVisibility {
  Private = 1,
  Public = 2
}

export enum PostStatus {
  Draft = 1,
  Published = 2,
  Unpublished = 3
}

export enum PostCategories {
  Blog = 1,
  BookWeekly = 2,
  Pages = 3
}
