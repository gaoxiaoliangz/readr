const { firebase } = window

const FUNCTIONS_APP_ROOT = __DEV__
  ? 'http://localhost:5000/readr-7498c/us-central1/app/'
  : 'https://us-central1-readr-7498c.cloudfunctions.net/app/'

const callApi = () => {
  // return 
}

// not create user?
export function createUser(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    name,
    email,
    profilePicture: imageUrl
  })
}

export function logUploaded(id, filename, type) {
  firebase.database().ref('files/' + id).set({
    filename,
    type,
    createdAt: new Date().valueOf()
  })
}

export const fetchBookList = () => fetch(`${FUNCTIONS_APP_ROOT}books`).then(res => {
  return res.json().then(data => {
    return data
  })
})

export const fetchBookFile = id => fetch(`${FUNCTIONS_APP_ROOT}book-files/${id}`).then(res => {
  return res.json().then(data => {
    return data
  })
})

export const fetchBookMeta = id => fetch(`${FUNCTIONS_APP_ROOT}books/${id}/meta`).then(res => {
  return res.json().then(data => {
    return data
  })
})

export const fetchBookSections = id => fetch(`${FUNCTIONS_APP_ROOT}books/${id}/sections`).then(res => {
  return res.json().then(data => {
    return data
  })
})
