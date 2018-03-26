const shelfEpic = action$ =>
  action$.filter(action => action.type === 'shelf/fetchBooks')
    .mapTo({
      type: 'PONG!!!!!!'
    })

export default shelfEpic
