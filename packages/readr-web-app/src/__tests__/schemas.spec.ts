import schemas from '../schemas'
import expect from 'expect.js'

describe('schemas', () => {
  it('expect AUTHOR schema has key author', () => {
    expect(schemas.AUTHOR.key).to.be('authors')
  })
})
