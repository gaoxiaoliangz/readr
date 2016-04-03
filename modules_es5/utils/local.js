"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function saveToLocal(key, value, type) {
  if (typeof value !== "string") {
    console.error("saveToLocal: Use string instead!");
  } else {
    if (typeof type === "undefined") {
      type = "BOOK";
    }
    switch (type) {
      case "BOOK":
        localStorage.setItem(`book${ this.state.bookId }_${ key }`, value);
        break;
      default:
    }
  }
}

function readFromLocal(key, value, type) {
  if (typeof type === "undefined") {
    type = "BOOK";
  }
  switch (type) {
    case "BOOK":
      return localStorage.getItem(`book${ this.state.bookId }_${ key }`);
      break;
    default:
  }
}

exports.saveToLocal = saveToLocal;
exports.readFromLocal = readFromLocal;
