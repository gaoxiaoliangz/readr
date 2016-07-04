'use strict'

class Type {
  constructor(mark, isTypeArray) {
    this.mark = mark
    this.isTypeArray = typeof isTypeArray === 'undefined'
      ? false
      : isTypeArray
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

const DataTypes = {
  String: new Type('STRING'),
  Number: new Type('NUMBER'),
  ID: new Type('ID'),
  Text: new Type('TEXT'),
  arrayOf(type) {
    return new Type(type.mark, true)
  }
}

module.exports = DataTypes
