const fetch = require('node-fetch')
const fs = require('fs')

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities')

console.log(introspectionQuery)

fetch('http://api.githunt.com/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    console.log(res)
    const schemaString = printSchema(buildClientSchema(res.data))
    fs.writeFileSync('schema.graphql', schemaString)
  })
