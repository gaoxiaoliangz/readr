import { DataType } from '../data/types'

export interface Validator {
  (value: any): boolean
}

export type Validators = {
  fn: Validator
  errorMsg: string
}[]

export interface Field {
  name: string
  validators?: Validators
  unique?: boolean
  required?: boolean
  ref?: Schema
  type?: DataType
}

type FieldDefinition = Field[]

export default class Schema {
  _baseTable: string
  _fieldDefinition: FieldDefinition

  constructor(baseTable, fieldDefinition: FieldDefinition) {
    this._fieldDefinition = fieldDefinition
    this._baseTable = baseTable
  }

  get name() {
    return this._baseTable
  }

  get fields() {
    return this._fieldDefinition
  }
}
