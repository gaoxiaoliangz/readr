"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lang;
function lang(state, action) {
  if (typeof state === "undefined") {
    state = "cn";
  }
  switch (action.type) {
    case "SETLANG":
      return action.lang;
    default:
      return state;
  }
}
