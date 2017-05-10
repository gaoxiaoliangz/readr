const fetch = require('node-fetch')
const fs = require('fs')

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities')

fetch('http://localhost:8090/gql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    const schemaString = printSchema(buildClientSchema(res.data))
    fs.writeFileSync('build/gql/schema.gql', schemaString)
  })
