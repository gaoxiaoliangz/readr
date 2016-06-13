'use strict'

var assert = require('assert')
var Validation = require('../core/server/data/validation')
// var should = require('should')
var expect = require('expect.js')

describe('utils/object', () => {
  describe('Validation', () => {

    describe('types', () => {
      describe('id', () => {
        it('should return true', () => {
          // using assert
          assert.equal(true, Validation.types.id('78787878'))
        })

        it('should return error', () => {
          // using assert
          assert.equal('length', Validation.types.id('9999'))
        })
      })

      describe('email', () => {
        it('should fail when pure number is passed', () => {
          // should.js 返回值是布尔类型会出问题
          var res = Validation.types.email('78787')          
          expect(res).to.be.a('string')
        })

        it('should be ok when email is valid', () => {
          expect(Validation.types.email('a@b.co')).to.be(true)
        })
      })
    })

    describe('validation precheck', () => {
      console.log(Validation.types)
      let schema = {
        bookId: [Validation.types.id, Validation.types.string],
        email: Validation.types.email,
      }

      let data = {
        bookId: '88888888',
        email: 'somebody@gmail.com'
      }

      it('should success with the right-formated schema', () => {
        let schema1 = {
          bookId: [Validation.types.id, Validation.types.string],
          email: Validation.types.email,
        }
        let schema2 = {
          bookId: [Validation.types.id, Validation.mark.optional],
          email: Validation.types.email,
        }
        expect(Validation.schemaHasRightFormat(schema1)).to.be(true)
        expect(Validation.schemaHasRightFormat(schema2)).to.be(true)
      })

      it('should success with all supported inputs', () => {
        expect(Validation.hasNoUnsupportedInput(data, schema)).to.be(true)
      })

      it('should fail with unsupported inputs', () => {
        let data2 = Object.assign({}, data, {id: 6789})
        expect(Validation.hasNoUnsupportedInput(data2, schema)).to.be(false)
      })

      it('should success with all inputs needed', () => {
        expect(Validation.hasAllNeededInput(data, schema)).to.be(true)
      })

      it('should fail with inputs missing', () => {
        let data2 = {
          bookId: '78976789876'
        }
        expect(Validation.hasAllNeededInput(data2, schema)).to.be(false)
      })

      it('should success with optional inputs missing', () => {
        let data2 = {
          bookId: '78976789876'
        }
        let schema = {
          bookId: Validation.types.id,
          email: [Validation.types.email, Validation.mark.optional]
        }
        expect(Validation.hasAllNeededInput(data2, schema)).to.be(true)
      })
    })

    describe('validation exec', () => {
      it('should return true when using single validator', () => {
        var scheme = {
          bookId: Validation.types.id,
          email: Validation.types.email,
        }

        var options = {
          bookId: '88888888',
          email: 'somebody@gmail.com'
        }

        assert.equal(true, Validation.exec(options, scheme))
      })

      it('should return true when using multi types', function() {
        var scheme = {
          bookId: [Validation.types.id, Validation.types.string],
          email: Validation.types.email,
        }

        var options = {
          bookId: '88888888',
          email: 'somebody@gmail.com'
        }
        
        expect(Validation.exec(options, scheme)).to.be(true)
      })

      it('should have one error when id is invalid', () => {
        var scheme = {
          bookId: [Validation.types.id, Validation.types.string],
          email: Validation.types.email,
        }

        var options = {
          bookId: '8888',
          email: 'somebody@gmail.com'
        }

        var res = Validation.exec(options, scheme)
        expect(res).to.have.length(1)
      })

      it('should have one error when unsupported item found', () => {
        var scheme = {
          bookId: Validation.types.id,
          email: Validation.types.email
        }

        var options = {
          bookId: '87878787',
          email: 'somebody@gmail.com',
          id: '789'
        }

        var res = Validation.exec(options, scheme)
        expect(res).to.have.length(1)
      })

      it('should have no error when optional option item is not defined', () => {
        var scheme = {
          bookId: [Validation.types.id, Validation.types.string],
          email: [Validation.mark.optional ,Validation.types.email]
        }

        var options = {
          bookId: '99999999'
        }

        var res = Validation.exec(options, scheme)
        expect(res).to.be(true)
      })

      it('should have no error when optional option item is defined and optional option is present', () => {
        var scheme = {
          bookId: [Validation.types.id, Validation.types.string],
          email: [Validation.mark.optional ,Validation.types.email]
        }

        var options = {
          bookId: '99999999',
          email: 'a@b.c'
        }

        var res = Validation.exec(options, scheme)
        expect(res).to.be(true)
      })
    })
  })
})
