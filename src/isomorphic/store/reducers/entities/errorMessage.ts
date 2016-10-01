// Updates error message to notify about the failed fetches.
export default function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    console.error(error)
    return [...state, action.error]
  }

  return state
}
