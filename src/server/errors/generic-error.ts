export default class GenericError {
  name: string
  statusCode: number
  message: string
  stack: Object
  type: string

  constructor(message) {
    this.name = 'GenericError'
    this.statusCode = 500
    this.message = message
    this.stack = (new Error() as any).stack
    this.type = this.name
  }
}
