var assert = require('assert');

function parseHTML(HTMLString) {
  var nodes = []
  $html = document.createFragment()
  // var $html = $(HTMLString)
  $html.innerHTML = HTMLString

  for (var i = 0; i < $HTMLString.length; i++) {
    if($HTMLString[i].nodeType != 1) {
      continue
    }else{
      nodes.push({
        type: $HTMLString[i].tagName.toLowerCase(),
        props: {
          children: $HTMLString[i].innerHTML
        }
      })
    }
  }
  return nodes
}


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});



  describe('parseHTML', function () {
    it('should return ...', function () {
      assert.equal(-1, parseHTML("<div>yes</div>"));
    });
  });
