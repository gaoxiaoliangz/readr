import i18n from '../public/built_es6/server/utils/i18n'
import expect from 'expect.js'
import assert from 'assert'

describe('i18n', () => {
  it('结果是：提交数据不能为空！', () => {
    assert.equal('提交数据不能为空！', i18n('errors.validation.preCheck.emptyObject'))
  })

  it('结果是：描述不是字符串！', () => {
    expect(i18n('errors.validation.valueLimit.notString', 'description')).to.be('描述不是字符串！')
  })

  it('结果是：描述不是字符串！', () => {
    expect(i18n('errors.validation.valueLimit.notStringxx', 'description')).to.be('描述不是字符串！')
  })
})
