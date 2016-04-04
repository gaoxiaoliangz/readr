export default function lang(state, action){
  if(typeof state === "undefined") {
    state = "cn"
  }
  switch (action.type) {
    case "SETLANG":
      return action.lang
    default:
      return state
  }
}
