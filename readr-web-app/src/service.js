const { firebase } = window
const db = firebase.database()
const auth = firebase.auth()

// const FUNCTIONS_APP_ROOT = __DEV__
//   ? 'http://localhost:5000/readr-7498c/us-central1/app/'
//   : 'https://us-central1-readr-7498c.cloudfunctions.net/app/'

export function updateUser(userId, name, email, imageUrl) {
  return db.ref('users').child(userId).update({
    name,
    email,
    profilePicture: imageUrl
  })
}

export function logUploaded(filename, type) {
  return db.ref('files').push({
    filename,
    type,
    // todo
    createdAt: new Date().valueOf()
  })
}

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const signOut = () => {
  return auth.signOut()
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
