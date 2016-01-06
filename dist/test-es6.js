"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Person() {
  var _this = this;

  this.age = 0;

  setInterval(function () {
    _this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();

var abc = function abc() {
  _classCallCheck(this, abc);
};

var p = new Promise();
//# sourceMappingURL=test-es6.js.map
