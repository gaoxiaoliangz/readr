import _ from 'lodash'
import { Machine } from 'xstate'

export const TRANSITION = 'TRANSITION'
export const createTransitionActionCreator = machine => (eventKey, context) => {
  return {
    type: TRANSITION,
    payload: {
      key: eventKey,
      context
    },
    meta: machine
  }
}

const UPDATE_MACHINE_STATE = 'UPDATE_MACHINE_STATE'
const updateMachineState = (machine, state) => ({
  type: UPDATE_MACHINE_STATE,
  payload: state,
  meta: machine
})

export const createMachineReducer = (machine, initial) => (state = initial, { type, payload, meta }) => {
  if (type === UPDATE_MACHINE_STATE && machine === meta) {
    return payload
  }
  return state
}

/**
 * 
 * @param {{ [machine: string]: any }} machineConfigs 
 * @param {*} stateKey 
 */
const createXstateMiddleware = (machineConfigs) => {
  const machines = _.mapValues(machineConfigs, config => {
    return Machine(config)
  })

  return store => next => action => {
    if (action.type === TRANSITION) {
      const machineKey = action.meta
      const event = action.payload
      const machine = machines[machineKey]
      const currentState = store.getState()[machineKey]
      const nextState = machine.transition(currentState, event.key)

      store.dispatch(updateMachineState(machineKey, nextState.value))
      if (nextState.actions) {
        nextState.actions.forEach(actionCreator => {
          if (typeof actionCreator === 'function') {
            store.dispatch(actionCreator(event.context))
          } else {
            console.warn(`action should be a function! Received ${actionCreator}`)
          }
        })
      }
    }

    return next(action)
  }
}

export default createXstateMiddleware
