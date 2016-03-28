export default function book(state = "hahah", action){
  switch (action.type) {
    case "LOAD":
      return action.data
    default:
      return state
  }
}
