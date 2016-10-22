import request from 'supertest'
import app from '../bin/server'
import assert from 'assert'

const apiRoot = '/api'

try {
  describe('API tests', () => {
    describe('GET /books', () => {
      it('respond with json', done => {
        request(app)
          .get(`${apiRoot}/books`)
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/, done)
      })
    })

    describe('GET /users', () => {
      it('forbiden vistor mode and respond with json', done => {
        request(app)
          .get(`${apiRoot}/users`)
          .set('Accept', 'application/json')
          .expect(403)
          .expect('Content-Type', /json/, done)
      })
    })
  })
} catch (error) {
  console.error(error)
}
