'use strict'

class Type {
  constructor(mark, isTypeArray) {
    this.mark = mark
    this.isTypeArray = isTypeArray
  }

  isArray() {
    if (typeof this.isTypeArray === 'undefined' || !this.isTypeArray) {
      return false
    }
    return true
  }

  equals(type) {
    return (type.mark === this.mark && type.isArray() === this.isTypeArray) 
  }
}


// const DataTypes = {
//   String: 'String',
//   Array: 'Array',
//   Number: 'Number',
//   ID: 'ID',
//   arrayOf: function ArrayOf(type) {
//     return `ArrayOf${type}`
//   }
// }

const DataTypes = {
  String: new Type('STRING'),
  Number: new Type('NUMBER'),
  ID: new Type('ID'),
  arrayOf(type) {
    return new Type(type.mark, true)
  }
}

module.exports = DataTypes
