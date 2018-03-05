import uuid from './utils/uuid'

const states = {
  open: false,
  db: null,
}

const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB
const DB_NAME = 'readr'
const open = indexedDB.open(DB_NAME, 1)

// Create the schema
open.onupgradeneeded = () => {
  const db = open.result
  const store = db.createObjectStore('books', { keyPath: 'id' })
  // todo
  // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
}

open.onsuccess = () => {
  states.open = true
  states.db = open.result
}

const untilOpenSuccess = () => {
  if (!states.open) {
    return new Promise(resolve => {
      const handleSuccess = () => {
        open.removeEventListener('success', handleSuccess)
        resolve()
      }
      open.addEventListener('success', handleSuccess)
    })
  }
  return Promise.resolve()
}

class Model {
  constructor(path) {
    this._path = path
  }

  getStore() {
    return untilOpenSuccess().then(() => {
      const { db } = states
      const tx = db.transaction(this._path, 'readwrite')
      const store = tx.objectStore(this._path)
      return store
    })
  }

  get = id => {
    return new Promise(resolve => {
      return this.getStore().then(store => {
        const get = store.get(id)
        get.onsuccess = () => {
          resolve(get.result)
        }
      })
    })
  }

  add = object => {
    return this.getStore().then(store => {
      store.put({ id: object.id || uuid(), ...object })
    })
  }

  remove = id => {
    return this.getStore().then(store => {
      const del = store.delete(id)
      return new Promise(resolve => {
        del.onsuccess = () => {
          resolve(del.result)
        }
      })
    })
  }

  listAll = () => {
    return this.getStore().then(store => {
      return new Promise(resolve => {
        const results = {}
        store.openCursor().onsuccess = (event) => { // eslint-disable-line
          const cursor = event.target.result
          if (cursor) {
            results[cursor.value.id] = cursor.value
            cursor.continue()
          } else {
            resolve(results)
          }
        }
      })
    })
  }

  update = (id, object) => {
    return this.getStore().then(store => {
      return new Promise(resolve => {
        store.openCursor().onsuccess = (event) => { // eslint-disable-line
          const cursor = event.target.result
          if (cursor) {
            if (cursor.value.id === id) {
              const request = cursor.update({
                ...cursor.value,
                ...object
              })
              request.onsuccess = () => {
                resolve(request.result)
              }
            } else {
              cursor.continue()
            }
          }
        }
      })
    })
  }
}

const createModel = path => {
  return new Model(path)
}

export default createModel
