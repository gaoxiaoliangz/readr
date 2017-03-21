import expect from 'expect.js'
import sortByDate from './sort-by-date'

describe('sort by date', () => {
  it('latest time should be at the top', () => {
    const arr = [
      {
        n: '1',
        date_updated: 'Tue Mar 21 2017 23:26:23 GMT+0800 (CST)'
      },
      {
        n: '2',
        date_updated: 'Tue Mar 21 2017 23:46:23 GMT+0800 (CST)'
      },
      {
        n: '0',
        date_updated: 'Tue Mar 21 2017 20:46:23 GMT+0800 (CST)'
      }
    ]
    const result = arr.sort(sortByDate()).map(i => i.n)

    expect(result).to.eql(['2', '1', '0'])
  })
})
