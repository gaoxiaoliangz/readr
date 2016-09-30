// Updates error message to notify about the failed fetches.
export default function errorMessage(state = [], action) {
  const { error } = action

  if (error) {
    return [...state, action.error]
  }

  return state
}
