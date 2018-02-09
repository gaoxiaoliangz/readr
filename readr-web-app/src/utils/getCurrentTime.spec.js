import expect from 'expect.js'
import getCurrentTime from './getCurrentTime'

describe('time format tests', () => {
  it('result should be type string', () => {
    expect(typeof getCurrentTime()).to.be('string')
  })
})
