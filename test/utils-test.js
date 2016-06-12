// import assert from 'assert'
// import { simpleCompareObjects } from '../core/frontend/utils/object'

// describe('utils/object', () => {
//   describe('simpleCompareObjects', function () {
//     it('should return true comparing empty objects', function () {
//       assert.equal(true, simpleCompareObjects({}, {}))
//     })
//     it('should return false comparing nested objects', function () {
//       assert.equal(false, simpleCompareObjects(
//         { x: 1, y: { z: 2 } },
//         { x: 1, y: { z: 3 } }
//       ))
//     })
//     it('should return false comparing nested objects whose structure and values are the same', function () {
//       assert.equal(false, simpleCompareObjects(
//         { x: 1, y: { z: 2 } },
//         { x: 1, y: { z: 2 } }
//       ))
//     })
//     it('should return false', function () {
//       assert.equal(false, simpleCompareObjects({x:1}, {}))
//       assert.equal(false, simpleCompareObjects({x:1}, {x:2}))
//     })
//   })
// })
