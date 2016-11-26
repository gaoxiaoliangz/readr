export const REMOVE_ENTITY = 'REMOVE_ENTITY'
export interface removeEntity {
  (name: string, id: string): any
}
export const removeEntity: removeEntity = (name, id) => ({
    type: REMOVE_ENTITY,
    name,
    id
  }
)

export const loadSomething = () => {
  return {
    type: 'LOAD'
  }
}

export const saveSomething = () => {
  return {
    type: 'SAVE'
  }
}

export * from './components'
export * from './api'
export * from './form'
