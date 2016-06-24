const SchemaTypes = {
  String: 'String',
  Array: 'Array',
  Number: 'Number',
  ID: 'ID',
  arrayOf: function ArrayOf(type) {
    return `ArrayOf${type}`
  }
}

module.exports = SchemaTypes
