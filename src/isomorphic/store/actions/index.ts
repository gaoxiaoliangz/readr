import { reset } from 'redux-form'

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

export * from './components'
export * from './api'
export * from './api-with-saga'
export * from './deprecated'
export { reset }
