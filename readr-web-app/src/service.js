const { firebase } = window

const FUNCTIONS_APP_ROOT = __DEV__
  ? 'http://localhost:5000/readr-7498c/us-central1/app/'
  : 'https://us-central1-readr-7498c.cloudfunctions.net/app/'

export function createUser(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email,
    profile_picture: imageUrl
  })
}

export function logUploaded(id, filename, type) {
  firebase.database().ref('files/' + id).set({
    filename,
    type,
    created_at: new Date().valueOf()
  })
}

export const fetchBookFile = id => fetch(`${FUNCTIONS_APP_ROOT}book-files/${id}`).then(res => {
  return res.json().then(data => {
    return data
  })
})
