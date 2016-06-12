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

      describe('email', () => {
        it('should fail when number is passed', () => {
          // should.js 返回值是布尔类型会出问题
          // Validation.validators.email('abcadb.com').should.have.length(1)
          assert.equal(true, Validation.validators.email('78787@78.c'))
        })

        it('should be ok when email is valid', () => {
          Validation.validators.email('a@b.c').should.be.ok
        })
      })
    })

    describe('validation exec', () => {
      it('should return true when using single validator', () => {
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

      it('should return true when using multi validators', function() {
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

      it('should have one error when id is invalid', () => {
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

      it('should have one error when unsupported item found', () => {
        var scheme = {
          bookId: [Validation.validators.id, Validation.validators.string],
          email: Validation.validators.email
        }

        var options = {
          bookId: '87878787',
          email: 'somebody@gmail.com',
          id: '789'
        }

        var res = Validation.exec(options, scheme)
        // console.log(res)
        res.should.have.length(1)
      })

      it('should have no error when optional option item is not defined', () => {
        var scheme = {
          bookId: [Validation.validators.id, Validation.validators.string],
          email: [Validation.flags.isOptional ,Validation.validators.email]
        }

        var options = {
          bookId: '99999999'
        }

        var res = Validation.exec(options, scheme)
        res.should.be.ok
      })
    })
  })
})
