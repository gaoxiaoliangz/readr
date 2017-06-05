import fetch from 'node-fetch'
import fs from 'fs'
import {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} from 'graphql/utilities'

async function getSchema() {
  return fetch('http://localhost:8090/gql', {
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
      fs.writeFileSync('build/schema.gql', schemaString)
    })
}

export default getSchema
