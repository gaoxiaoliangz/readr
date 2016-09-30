function handleInitialState() {
  let initialState = {}

  if (typeof (<any>window).__INITIAL_STATE__ !== 'undefined') {
    initialState = (<any>window).__INITIAL_STATE__
  }

  return initialState
}

export default handleInitialState
