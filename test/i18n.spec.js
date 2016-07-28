import i18n from '../src/server/utils/i18n'
import assert from 'assert'
import expect from 'expect.js'

describe('i18n', () => {
  describe('xx', () => {
    describe('xx2', () => {
      it('结果是：提交数据不能为空！', () => {
        assert.equal('提交数据不能为空！', i18n('errors.validation.preCheck.emptyObject'))       
      })

      it('should equal 描述不是字符串！', () => {
        expect(i18n('errors.validation.valueLimit.notString', 'description')).to.be('描述不是字符串！')
      })
    })
  })
})
