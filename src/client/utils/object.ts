export function simpleCompareObjects(obj1, obj2) {
  let isEqual = true

  try {
    for(let prop in obj1) {
      if(obj1[prop] !== obj2[prop]) {
        isEqual = false
        break
      }
    }
  } catch (e) {
    console.error(e)
    isEqual = false
  }

  return isEqual
}
