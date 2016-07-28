// import request from 'supertest'
// import app from '../index'
// import assert from 'assert'

// const apiRoot = '/api/v0.1'

// describe('API tests', () => {
//   describe('GET /books', () => {
//     it('respond with json', done => {
//       request(app)
//         .get(`${apiRoot}/books`)
//         .set('Accept', 'application/json')
//         .expect(200)
//         .expect('Content-Type', /json/, done)
//     })
//   })

//   describe('GET /users', () => {
//     it('forbiden vistor mode and respond with json', done => {
//       request(app)
//         .get(`${apiRoot}/users`)
//         .set('Accept', 'application/json')
//         .expect(403)
//         .expect('Content-Type', /json/, done)
//     })
//   })
// })
