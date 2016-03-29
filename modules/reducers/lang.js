export default function lang(state = "cn", action){
  switch (action.type) {
    case "SETLANG":
      return action.lang
    default:
      return state
  }
}
