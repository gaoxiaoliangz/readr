'use strict';

var assert = require('assert');

function getPageOffset(pageIndex, pageHeight, nodeHeights) {
  var offset = 0;
  if (pageIndex !== 0) {
    var i = 0;
    var nodeHeightSum = 0;
    do {
      nodeHeightSum += nodeHeights[i];
      i++;
    } while (nodeHeightSum < pageHeight * (pageIndex - 1));
    offset = -((pageIndex - 1) * pageHeight - nodeHeightSum + nodeHeights[i]);
  }
  return offset;
}

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe('getPageOffset', function () {
  it('should return ...', function () {
    assert.equal(-1, getPageOffset(2, 900, [300, 300, 200, 300, 300, 390]));
  });
});
