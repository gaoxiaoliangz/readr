export default function lang(state = "", action){
  switch (action.type) {
    case "SETLANG":
      return action.lang
    default:
      return state
  }
}
