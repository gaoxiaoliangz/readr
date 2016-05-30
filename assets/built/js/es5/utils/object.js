"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleCompareObjects = simpleCompareObjects;
function simpleCompareObjects(obj1, obj2) {
  var isEqual = true;

  try {
    for (var prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
        isEqual = false;
        break;
      }
    }
  } catch (e) {
    console.error(e);
    isEqual = false;
  }

  return isEqual;
}
