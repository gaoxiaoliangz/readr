// import assert from 'assert'
// import validation from '../core/server/data/validation'
var assert = require('assert')
var Validation = require('../core/server/data/validation')
var should = require('should')

describe('utils/object', () => {
  describe('Validation', () => {

    describe('validators', () => {
      describe('id', () => {
        it('should return true', () => {
          assert.equal(true, Validation.validators.id('78787878'))
        })

        it('should return error', () => {
          assert.equal('length', Validation.validators.id('9999'))
        })
      })
    })

    describe('validation exec', () => {
      it('single validator: should return true', () => {
        var scheme = {
          bookId: Validation.validators.id,
          email: Validation.validators.email,
        }

        var options = {
          bookId: '88888888',
          email: 'somebody@gmail.com'
        }

        assert.equal(true, Validation.exec(options, scheme))
      })

      it('multi validator: should return true', function() {
        var scheme = {
          bookId: [Validation.validators.id, Validation.validators.string],
          email: Validation.validators.email,
        }

        var options = {
          bookId: '88888888',
          email: 'somebody@gmail.com'
        }

        Validation.exec(options, scheme).should.equal(true)
      })

      it('multi validator: should have one error', () => {
        var scheme = {
          bookId: [Validation.validators.id, Validation.validators.string],
          email: Validation.validators.email,
        }

        var options = {
          bookId: '8888',
          email: 'somebody@gmail.com'
        }

        var res = Validation.exec(options, scheme)
        res.should.have.length(1)
      })

      it('should have one error when option item is not defined', () => {
        var scheme = {
          bookId: [Validation.validators.id, Validation.validators.string],
          email: Validation.validators.email,
        }

        var options = {
          id: '8888',
          email: 'somebody@gmail.com'
        }

        var res = Validation.exec(options, scheme)
        res.should.have.length(1)
      })
    })
  })
})
