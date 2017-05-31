import expect from 'expect.js'
import { sortByNewest } from './utils'

describe('sort by date', () => {
  it('latest time should be at the top', () => {
    const arr = [
      {
        n: '1',
        updated_at: 'Tue Mar 21 2017 23:26:23 GMT+0800 (CST)'
      },
      {
        n: '2',
        updated_at: 'Tue Mar 21 2017 23:46:23 GMT+0800 (CST)'
      },
      {
        n: '0',
        updated_at: 'Tue Mar 21 2017 20:46:23 GMT+0800 (CST)'
      }
    ]
    const result = arr.sort(sortByNewest()).map(i => i.n)

    expect(result).to.eql(['2', '1', '0'])
  })
})
