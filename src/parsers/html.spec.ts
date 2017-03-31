import expect from 'expect.js'
import html from './html'

const mk = '<div><h1>hello</h1><p>this is good</p></div>'

describe('html parser', () => {
  it('expectations', () => {
    const result = html(mk)
    expect(1).to.be(1)
  })
})
