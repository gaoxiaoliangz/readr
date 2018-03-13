import _ from 'lodash'
import generatePushId from './utils/generatePushId'

const { firebase } = window
const db = firebase.database()
const store = firebase.storage()
const auth = firebase.auth()

// const FUNCTIONS_APP_ROOT = __DEV__
//   ? 'http://localhost:5000/readr-7498c/us-central1/app/'
//   : 'https://us-central1-readr-7498c.cloudfunctions.net/app/'

export function fetchItems(parentRef, ids) {
  return Promise.all(ids.map(id => {
    return parentRef
      .child(id)
      .once('value')
      .then(data => {
        const val = data.val()
        if (!val) {
          return Promise.reject(new Error(`${id} Not found!`))
        }
        return [id, val]
      })
  }))
    .then(resultArr => {
      return resultArr.reduce((obj, item) => {
        return {
          ...obj,
          [item[0]]: item[1]
        }
      }, {})
    })
}

export const getBookProgress = bookId => {
  const user = firebase.auth().currentUser
  if (!user) {
    return Promise.reject(new Error('Not signed in!'))
  }
  const uid = user.uid
  return db.ref('users')
    .child(uid)
    .child('progress')
    .child(bookId)
    .once('value')
    .then(data => {
      const result = data.val()
      if (result) {
        return data.val().progress
      }
      return null
    })
    .catch(err => {
      console.error(err)
      return 0
    })
}

export const updateBookProgress = (bookId, progress) => {
  const user = firebase.auth().currentUser
  if (!user) {
    return Promise.reject(new Error('Not signed in!'))
  }
  const uid = user.uid
  return db.ref('users')
    .child(uid)
    .child('progress')
    .child(bookId)
    .update({
      progress,
      updatedAt: new Date().valueOf(),
      user: uid,
      book: bookId
    })
}

export const updateUser = (userId, name, email, imageUrl) => {
  return db.ref('users').child(userId).update({
    name,
    email,
    profilePicture: imageUrl
  })
}

export const logUploaded = (filename, type, fid, uid) => {
  return db.ref('files').push({
    filename,
    type,
    file: fid,
    createdAt: new Date().getTime(),
    owner: uid
  })
}

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const signOut = () => {
  return auth.signOut()
}

export const fetchBook = (bookId, withContent = false) => {
  return db.ref('books')
    .child(bookId)
    .once('value')
    .then(data => data.val())
    .then(book => {
      const bookWithId = {
        ...book,
        id: bookId
      }
      if (withContent) {
        return db.ref('bookContent')
          .child(book.content)
          .once('value')
          .then(data => data.val())
          .then(bookContent => {
            return {
              ...bookWithId,
              content: bookContent.content
            }
          })
      }
      return bookWithId
    })
}

export const delBook = bookId => {
  // TODO: 事务
  const user = firebase.auth().currentUser
  if (!user) {
    return Promise.reject(new Error('Not signed in!'))
  }
  const uid = user.uid
  return db.ref('books')
    .child(bookId)
    .once('value')
    .then(data => data.val())
    .then(book => {
      const contentId = book.content
      return Promise.all([
        db.ref('books')
          .child(bookId)
          .remove(),
        db.ref('bookContent')
          .child(contentId)
          .remove(),
        db.ref('users')
          .child(uid)
          .child('ownedBooks')
          .child(bookId)
          .remove(),
        db.ref('users')
          .child(uid)
          .child('progress')
          .child(bookId)
          .remove(),
        store.ref()
          .child(book.file)
          .delete()
      ])
    })
    .catch(err => {
      console.error(err)
      return Promise.reject(err)
    })
}

export const fetchUserOwnedBooks = () => {
  const user = firebase.auth().currentUser
  if (!user) {
    return Promise.reject(new Error('Not signed in!'))
  }
  const uid = user.uid
  return db.ref('users')
    .child(uid)
    .child('ownedBooks')
    .once('value')
    .then(data => data.val())
    .then(ownedBooks => {
      return fetchItems(db.ref('books'), _.keys(ownedBooks))
    })
}

export const uploadBook = file => {
  const user = firebase.auth().currentUser
  if (!user) {
    return Promise.reject(new Error('Not signed in!'))
  }
  // todo: use transaction
  const uid = user.uid
  const fid = generatePushId()
  return store.ref().child(fid)
    .put(file)
    .then(() => {
      const bookRef = db.ref('books').push()
      const addBook = bookRef.set({
        filename: file.name,
        type: file.type,
        file: fid,
        createdAt: new Date().getTime(),
        owner: uid,
        content: null,
        status: 'PROCESSING'
      })
      const addBookToUser = db.ref('users')
        .child(uid)
        .child('ownedBooks')
        .update({
          [bookRef.key]: true
        })
      return [addBook, addBookToUser]
    })
}

export const subscriptions = {
  onAuthStateChanged: auth.onAuthStateChanged.bind(auth)
}

// export const fetchBookList = () => fetch(`${FUNCTIONS_APP_ROOT}books`).then(res => {
//   return res.json().then(data => {
//     return data
//   })
// })

// export const fetchBookFile = id => fetch(`${FUNCTIONS_APP_ROOT}book-files/${id}`).then(res => {
//   return res.json().then(data => {
//     return data
//   })
// })

// export const fetchBookMeta = id => fetch(`${FUNCTIONS_APP_ROOT}books/${id}/meta`).then(res => {
//   return res.json().then(data => {
//     return data
//   })
// })

// export const fetchBookSections = id => fetch(`${FUNCTIONS_APP_ROOT}books/${id}/sections`).then(res => {
//   return res.json().then(data => {
//     return data
//   })
// })
