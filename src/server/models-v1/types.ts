export class DataType {
  mark: string
  isTypeArray: boolean

  constructor(mark, isTypeArray?) {
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

export const arrayOf = (type: DataType) => {
  return new DataType(type.mark, true)
}

const DataTypes = {
  String: new DataType('STRING'),
  Number: new DataType('NUMBER'),
  ID: new DataType('ID'),
}

export default DataTypes
