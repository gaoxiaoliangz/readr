webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(2);

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _Root = __webpack_require__(212);

	var _Root2 = _interopRequireDefault(_Root);

	var _configureStore = __webpack_require__(295);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configureStore2.default)(); // import 'babel-polyfill'


	(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store, history: _reactRouter.browserHistory }), document.getElementById('root'));

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(213);

	var env = (0, _utils.getEnv)();

	// if (env === 'production') {
	//   module.exports = require('./Root.prod')
	// } else {
	//   module.exports = require('./Root.dev')
	// }

	module.exports = __webpack_require__(220);

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _book = __webpack_require__(214);

	Object.keys(_book).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _book[key];
	    }
	  });
	});

	var _cache = __webpack_require__(216);

	Object.keys(_cache).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _cache[key];
	    }
	  });
	});

	var _filters = __webpack_require__(217);

	Object.keys(_filters).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _filters[key];
	    }
	  });
	});
	exports.getEnv = getEnv;
	exports.callApi = callApi;
	exports.delayStuff = delayStuff;
	exports.lazilize = lazilize;
	exports.isIE = isIE;

	var _APIS = __webpack_require__(215);

	/*
	 * functions defined here must be important and better be pure
	 */

	// import $ from 'jquery'
	// import 'whatwg-fetch'
	function getEnv() {
	  var env = ("production");

	  if (typeof window !== 'undefined') {
	    env = window.process.env.NODE_ENV;
	  }

	  return env;
	}

	function callApi(fullUrl, type, data) {
	  if (typeof type === 'undefined') {
	    type = 'get';
	  }

	  var dataType = 'json';

	  if (fullUrl.indexOf('http') !== -1) {
	    dataType = 'jsonp';
	  }

	  var config = {
	    url: fullUrl,
	    type: type,
	    dataType: dataType
	  };

	  if (typeof data !== 'undefined') {
	    config = Object.assign({}, config, {
	      data: data
	    });
	  }

	  // return new Promise(function(resolve, reject){
	  //   $.ajax(config).done(response => {
	  //     resolve(response)
	  //   }).fail(response => {
	  //     reject(JSON.parse(response.responseText))
	  //   })
	  // })

	  return new Promise(function (resolve, reject) {
	    // $.ajax(config).done(response => {
	    //   resolve(response)
	    // }).fail(response => {
	    //   reject(JSON.parse(response.responseText))
	    // })

	    fetch(config.url).then(function (response) {
	      console.log(response);
	      return response.json();
	    }).then(function (json) {
	      console.log(json);
	      resolve(json);
	    }).catch(function (error) {
	      reject(error);
	    });
	  });
	}

	// todo: when multiple functins are called?
	function delayStuff(callback, delay) {
	  console.log(this);
	  return function () {
	    clearTimeout(this.__delayStuffTimer__);
	    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay);
	  };
	}

	// not working so well
	function lazilize(callback, t) {
	  var _this = this;

	  var timers = [];

	  return function () {
	    console.log(timers);
	    clearTimeout(timers.slice(-1)[0]);
	    var timer = setTimeout(callback.bind(_this), t);
	    timers.push(timer);
	  };
	}

	// dom related
	function isIE(ver) {
	  if (typeof ver === 'undefined') {
	    ver = null;
	  }
	  var b = document.createElement('b');
	  b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
	  return b.getElementsByTagName('i').length === 1;
	}

	// export function lockScroll(){
	//   $("body").css({"overflow":"hidden"});
	// }
	//
	// export function unlockScroll(){
	//   $("body").css({"overflow":"visible"});
	// }

	// export function excAndExcOnResizing(func, args){
	//   if(!args){
	//     args = [];
	//   }
	//   func.apply([],args);
	//   $(window).resize(function(){
	//     func.apply(null,args);
	//   })
	// }

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initBook = initBook;
	exports.groupNodesByPage = groupNodesByPage;
	exports.convertPercentageToPage = convertPercentageToPage;
	exports.filterPages = filterPages;
	exports.getProgress = getProgress;
	exports.setProgress = setProgress;
	exports.getView = getView;

	var _utils = __webpack_require__(213);

	var _APIS = __webpack_require__(215);

	// import $ from 'jquery'
	function initBook(bookId, actions, view) {
	  var pageHeight = view.pageHeight;
	  var pageWidth = view.pageWidth;
	  var screen = view.screen;

	  actions.setView(view);

	  // the part I hate the most, a better approach may be applied
	  function htmlToPages(html) {
	    var nodes = parseHTML(html);
	    var nodeHeights = getNodeHeights('.pages ul>li>.content', actions);
	    var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);

	    return {
	      type: 'pages',
	      props: {
	        children: pages,
	        view: view
	      }
	    };
	  }

	  return new Promise(function (resolve, reject) {
	    actions.wrap(function (dispatch, getState) {
	      var pages = (0, _utils.getCache)('book' + bookId + '_pages');

	      // check if pages are cached
	      if (pages) {
	        pages = JSON.parse(pages);

	        // check if page view is the same as cached
	        if (!compareObjects(view, pages.props.view)) {
	          var i;

	          (function () {
	            // recaculate page 'cause view is not the same
	            // let nodes = pages.props.children.reduce((a, b) => (Array.concat(a, b.props.children)),[])
	            var nodes = pages.props.children.reduce(function (a, b) {
	              return a.concat(b.props.children);
	            }, []);
	            var uniqueNodes = [];
	            var realIndex = 0;

	            // remove duplicate nodes
	            for (i = 0; i < nodes.length; i++) {
	              nodes[i];
	              if (nodes[i].props.index === realIndex) {
	                uniqueNodes.push(nodes[i]);
	                realIndex++;
	              }
	            }

	            var html = parseNodes(uniqueNodes);

	            // loadHTML is not async, but only in this way setBookMode can work
	            // still haven't figured out why this happens
	            actions.promisedWrap(function (dispatch) {
	              actions.loadHTML(html);
	            }).then(function (getState) {
	              pages = htmlToPages(html);
	              actions.loadPages(pages);
	              (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

	              resolve({ pages: pages });
	            });
	          })();
	        } else {
	          actions.loadPages(pages);
	          actions.setBookMode('vertical');

	          resolve({ pages: pages });
	        }
	      } else {
	        // well, seems not, we have to fetch book content from the server then
	        actions.fetchBookContent(bookId, 'books/' + bookId + '/content').then(function (getState) {
	          var pages = htmlToPages(getState().book.html);

	          actions.loadPages(pages);
	          (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

	          resolve({ pages: pages });
	        }).catch(function (err) {
	          console.error(err);

	          reject(err);
	        });
	      }
	    });
	  });
	}

	function groupNodesByPage(nodes, nodeHeights, pageHeight) {
	  var pages = [];
	  var pageHeightSum = nodeHeights.reduce(function (a, b) {
	    return a + b;
	  }, 0);
	  var pageSum = Math.ceil(pageHeightSum / pageHeight);

	  nodes = nodes.map(function (node, index) {
	    node.props.index = index;
	    return node;
	  });

	  // long paragraph situation doesn't seem to affect this function
	  // offset distance is always negtive or zero
	  // the index will be of the paragraph with this offset at the end
	  var getPageOffset = function getPageOffset(pageIndex) {
	    var offset = 0;
	    var i = 0;
	    var index = void 0;

	    if (pageIndex !== 0) {
	      var nodeHeightSum = 0;
	      while (nodeHeightSum <= pageHeight * pageIndex) {
	        nodeHeightSum += nodeHeights[i];
	        i++;
	      }
	      offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight;
	      index = i - 1;
	    } else {
	      index = 0;
	    }

	    return {
	      offset: offset,
	      index: index
	    };
	  };

	  var getNodesOfPage = function getNodesOfPage(pageIndex) {
	    var offsetObject = getPageOffset(pageIndex);
	    var nodeStartIndex = offsetObject.index;
	    var offset = offsetObject.offset;

	    var i = nodeStartIndex;
	    var nodeEndIndex = void 0;
	    var pageNodes = [];

	    var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
	    i++;

	    if (nodeHeightSum < pageHeight) {
	      while (nodeHeightSum <= pageHeight && i !== nodes.length) {
	        nodeHeightSum += nodeHeights[i];
	        i++;
	      }
	      nodeEndIndex = i - 1;
	    } else {
	      nodeEndIndex = nodeStartIndex;
	    }

	    for (var _i = nodeStartIndex; _i <= nodeEndIndex && _i <= nodes.length - 1; _i++) {
	      pageNodes.push(nodes[_i]);
	    }

	    return [pageNodes, offset];
	  };

	  // finally
	  for (var i = 0; i < pageSum; i++) {
	    var array = getNodesOfPage(i);
	    var _nodes = array[0];
	    var offset = array[1];

	    pages.push({
	      props: {
	        children: _nodes,
	        style: {
	          top: i * pageHeight,
	          position: 'absolute',
	          height: pageHeight
	        },
	        pageNo: i + 1,
	        offset: offset
	      },
	      type: "page"
	    });
	  }

	  return pages;
	}

	function convertPercentageToPage(p, pageSum) {
	  if (p > 1) {
	    console.error("Wrong parameter!");
	    return null;
	  } else {
	    return parseInt(p * pageSum) + 1;
	  }
	}

	function filterPages(config) {
	  var startPage = config.startPage;
	  var quantity = config.quantity;
	  var offset = config.offset;
	  var pages = config.pages;

	  var newPages = [];

	  while (startPage - offset < 0) {
	    offset--;
	  }
	  startPage = startPage - offset;

	  for (var i = startPage; i < quantity + startPage && i < pages.length; i++) {
	    var page = pages[i];
	    newPages.push(page);
	  }

	  return newPages;
	}

	function getProgress(bookId) {
	  return new Promise(function (resolve, reject) {
	    (0, _utils.callApi)(_APIS.API_ROOT + 'books/' + bookId + '/progress').then(function (result) {
	      resolve(result);
	    }, function (error) {
	      reject(error);
	    });
	  });
	}

	function setProgress(bookId, progress) {
	  return new Promise(function (resolve) {
	    (0, _utils.callApi)(_APIS.API_ROOT + 'books/' + bookId + '/progress', 'POST', progress).then(function (res) {
	      resolve(res);
	    });
	  });
	}

	/*
	 * functions being used internally
	 */

	function getNodeHeights(selector, actions) {
	  actions.setBookMode('render');

	  var nodes = document.querySelector(selector).childNodes;
	  var nodesHeight = [];

	  Array.prototype.forEach.call(nodes, function (node, index) {
	    if (node.tagName.toLowerCase() !== "p") {
	      console.error("Unsupported content found!");
	    }
	    nodesHeight.push(node.clientHeight);
	  });

	  actions.setBookMode('vertical');

	  return nodesHeight;
	}

	function parseHTML(htmlString) {
	  var nodes = [];
	  var $html = document.createElement("div");

	  $html.innerHTML = htmlString;
	  $html = $html.childNodes;

	  for (var i = 0; i < $html.length; i++) {
	    if ($html[i].nodeType != 1) {
	      continue;
	    } else {
	      nodes.push({
	        type: $html[i].tagName.toLowerCase(),
	        props: {
	          children: $html[i].innerHTML
	        }
	      });
	    }
	  }
	  return nodes;
	}

	function parseNodes(nodes) {
	  var html = '';

	  for (var i = 0; i < nodes.length; i++) {
	    if (nodes[i].type !== 'p') {
	      console.error('Unsupported node found!');
	      continue;
	    } else {
	      html += '<p>' + nodes[i].props.children + '</p>';
	    }
	  }

	  return html;
	}

	// very rough but enough for use here
	function compareObjects(obj1, obj2) {
	  var isEqual = true;

	  try {
	    for (var prop in obj1) {
	      if (obj1[prop] !== obj2[prop]) {
	        isEqual = false;
	        break;
	      }
	    }
	  } catch (e) {
	    console.error(e);
	    isEqual = false;
	  }

	  return isEqual;
	}

	function getView() {
	  var aspectRatio = 7 / 9;

	  if (window.innerWidth <= 540) {
	    return {
	      screen: 'phone',
	      pageWidth: window.innerWidth,
	      pageHeight: window.innerWidth / aspectRatio
	    };
	  } else {
	    return {
	      screen: 'hd',
	      pageWidth: 700,
	      pageHeight: 700 / aspectRatio
	    };
	  }
	}

/***/ },

/***/ 215:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VERSION = 'v0.1';

	var API_ROOT = exports.API_ROOT = '/api/' + VERSION + '/';
	var API_DOUBAN_BOOKS = exports.API_DOUBAN_BOOKS = 'https://api.douban.com/v2/book/';

/***/ },

/***/ 216:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getCache = getCache;
	exports.setCache = setCache;
	function getCache(name) {
	  if (typeof name !== 'string') {
	    console.error('Name should be string!');
	  }
	  var content = localStorage.getItem(name);
	  if (!content) {
	    content = false;
	  }
	  return content;
	}

	function setCache(name, content) {
	  if (typeof name !== 'string') {
	    console.error('Name should be string!');
	  }
	  if (typeof content !== 'string') {
	    console.error('Cache content should be string!');
	  }

	  var success = true;

	  try {
	    localStorage.setItem(name, content);
	  } catch (e) {
	    console.error(e);
	    success = false;
	  }

	  return success;
	}

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.filterContentNodesByPage = filterContentNodesByPage;

	var _lodash = __webpack_require__(218);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function filterContentNodesByPage(contentNodes, config, page) {
	  var elements = _lodash2.default.cloneDeep(contentNodes),
	      pageWrap = {},
	      h = 0,
	      h2 = 0,
	      i = 0,
	      flag = true,
	      startIndex = 0,
	      endIndex = 0,
	      eleOffset = 0,
	      top = 0,
	      pageContent = [],
	      style = {};

	  while (i < elements.length && h < config.pageHeight * page) {
	    h = parseInt(elements[i].props.style.height) + h;
	    h2 = h - parseInt(elements[i].props.style.height);
	    if (h > config.pageHeight * (page - 1) && flag == true) {
	      startIndex = i;
	      eleOffset = h2 - config.pageHeight * (page - 1);
	      flag = false;
	    }
	    endIndex = i;
	    i++;
	  }
	  top = (page - 1) * config.pageHeight;

	  for (i = startIndex; i <= endIndex; i++) {
	    switch (elements[i].type) {
	      case "p":
	        pageContent.push(elements[i]);
	        break;
	      default:
	        console.error("Unsupported content found!");
	    }
	  }

	  if (config.mode === "VERTICAL") {
	    style = {
	      top: top,
	      position: "absolute"
	    };
	  } else {
	    style = {
	      top: top,
	      position: "absolute"
	    };
	  }

	  pageContent[0].props.style.marginTop = eleOffset;
	  pageWrap = {
	    props: {
	      children: pageContent,
	      style: style,
	      pageNo: page
	    },
	    type: "page"
	  };

	  return pageWrap;
	}

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _routes = __webpack_require__(242);

	var _routes2 = _interopRequireDefault(_routes);

	var _reactRouter = __webpack_require__(155);

	var _utils = __webpack_require__(213);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Root = function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    _classCallCheck(this, Root);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).apply(this, arguments));
	  }

	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var store = _props.store;
	      var history = _props.history;


	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
	      );
	    }
	  }]);

	  return Root;
	}(_react.Component);

	exports.default = Root;


	Root.propTypes = {
	  store: _react.PropTypes.object.isRequired,
	  history: _react.PropTypes.object.isRequired
	};

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _App = __webpack_require__(243);

	var _App2 = _interopRequireDefault(_App);

	var _NoMatch = __webpack_require__(244);

	var _NoMatch2 = _interopRequireDefault(_NoMatch);

	var _Home = __webpack_require__(245);

	var _Home2 = _interopRequireDefault(_Home);

	var _BookViewer = __webpack_require__(274);

	var _BookViewer2 = _interopRequireDefault(_BookViewer);

	var _BookStore = __webpack_require__(286);

	var _BookStore2 = _interopRequireDefault(_BookStore);

	var _Signin = __webpack_require__(290);

	var _Signin2 = _interopRequireDefault(_Signin);

	var _Signup = __webpack_require__(292);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _AddBook = __webpack_require__(293);

	var _AddBook2 = _interopRequireDefault(_AddBook);

	var _BookInfo = __webpack_require__(294);

	var _BookInfo2 = _interopRequireDefault(_BookInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Router,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _BookStore2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/bookstore', component: _BookStore2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _Signin2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'Signup', component: _Signup2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'addbook', component: _AddBook2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'bookstore/book/:id', component: _BookInfo2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'book/:id', component: _BookViewer2.default })
	);

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NoMatch = _react2.default.createClass({
	  displayName: 'NoMatch',

	  componentDidMount: function componentDidMount() {},
	  handleClick: function handleClick() {},
	  render: function render() {
	    return _react2.default.createElement(
	      'h2',
	      null,
	      '404'
	    );
	  }
	});

	exports.default = NoMatch;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _react3 = __webpack_require__(246);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page-home' },
	        _react2.default.createElement(_Branding2.default, null),
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-title' },
	              'This is home, bitch!!!!'
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/bookstore' },
	                  '查看书城'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/addbook' },
	                  '添加书籍'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = Home;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _react3 = __webpack_require__(246);

	var _utils = __webpack_require__(213);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Branding = function (_Component) {
	  _inherits(Branding, _Component);

	  function Branding() {
	    _classCallCheck(this, Branding);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Branding).apply(this, arguments));
	  }

	  _createClass(Branding, [{
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;

	      return _react2.default.createElement(
	        _react3.Appbar,
	        { className: 'branding' },
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h1',
	              { className: 'logo left' },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'readr'
	              )
	            ),
	            user.authed ? _react2.default.createElement(
	              'ul',
	              { className: "right mui-list--inline mui--text-body2" },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/profile/' + user.username },
	                  user.username
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { href: '/logout' },
	                  '退出'
	                )
	              )
	            ) : _react2.default.createElement(
	              'ul',
	              { className: "right mui-list--inline mui--text-body2" },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/signin' },
	                  '登录'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/signup' },
	                  '注册'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Branding;
	}(_react.Component);

	Branding.propTypes = {
	  user: _react2.default.PropTypes.object.isRequired
	};

	exports.default = Branding;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _reactRedux = __webpack_require__(221);

	var _redux = __webpack_require__(227);

	var _immutable = __webpack_require__(275);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _lodash = __webpack_require__(218);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _utils = __webpack_require__(213);

	var _actions = __webpack_require__(276);

	var actions = _interopRequireWildcard(_actions);

	var _APIS = __webpack_require__(215);

	var _BookPageList = __webpack_require__(282);

	var _BookPageList2 = _interopRequireDefault(_BookPageList);

	var _Loading = __webpack_require__(284);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Confirm = __webpack_require__(285);

	var _Confirm2 = _interopRequireDefault(_Confirm);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import $ from 'jquery'


	var windowWidth = void 0;
	if (typeof window !== 'undefined') {
	  // windowWidth = $(window).width()
	  windowWidth = window.innerWidth;
	}

	var latestProgress = {};
	var currentProgress = {};
	var isResolvingProgressRejection = false;

	var BookViewer = function (_Component) {
	  _inherits(BookViewer, _Component);

	  function BookViewer(props) {
	    _classCallCheck(this, BookViewer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookViewer).call(this, props));

	    _this.bookId = props.params.id;
	    _this.state = {
	      showPanel: false,
	      isListenersAdded: false
	    };
	    return _this;
	  }

	  // props have to be loaded and updated simultaneously
	  // so it's better to put it in React component


	  _createClass(BookViewer, [{
	    key: 'scrollToLoadPages',
	    value: function scrollToLoadPages() {
	      var props = this.props;
	      var pages = props.book.pages.props.children;
	      var pageSum = pages.length;
	      var percentage = Number((document.body.scrollTop / (props.book.pages.props.view.pageHeight * pageSum)).toFixed(4));
	      var page = (0, _utils.convertPercentageToPage)(percentage, pageSum);
	      var tolerance = 2;
	      var progress = {
	        pageNo: page,
	        pageSum: pageSum,
	        percentage: percentage
	      };
	      currentProgress = progress;

	      props.actions.jumpTo(page);
	      if (this.props.user.authed) {
	        (0, _utils.getProgress)(props.book.id).then(function (res) {
	          if (_lodash2.default.isEmpty(res)) {
	            (0, _utils.setProgress)(props.book.id, progress);
	          } else {
	            latestProgress = res;

	            if (percentage + tolerance / pageSum <= res.percentage && !isResolvingProgressRejection) {
	              props.actions.showConfirm('是否跳转到最新进度？');
	            } else {
	              (0, _utils.setProgress)(props.book.id, progress);
	              isResolvingProgressRejection = false;
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(position) {
	      var props = this.props;

	      if (position < 1) {
	        props.actions.jumpTo((0, _utils.convertPercentageToPage)(position, props.book.pages.props.children.length));
	        document.body.scrollTop = props.book.pages.props.children.length * props.book.pages.props.view.pageHeight * position;
	      } else {
	        props.actions.jumpTo(position);
	        document.body.scrollTop = props.book.pages.props.view.pageHeight * position;
	      }
	    }
	  }, {
	    key: 'prepareBook',
	    value: function prepareBook(bookId, props, view) {
	      var _this2 = this;

	      var actions = props.actions;
	      var user = props.user;

	      (0, _utils.initBook)(bookId, actions, view).then(function (book) {
	        if (book.pages) {
	          if (user.authed) {
	            (0, _utils.getProgress)(bookId).then(function (res) {
	              _this2.scrollTo(res.percentage);
	              _this2.setState({ isLoading: false });
	            }, function (err) {
	              _this2.setState({ isLoading: false });
	              actions.jumpTo(1);
	            });
	          } else {
	            _this2.setState({ isLoading: false });
	            actions.jumpTo(1);
	            // this is a bad fix
	            // localstorage solution is recommended
	            document.body.scrollTop = document.body.scrollTop + 1;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners() {
	      var timers = [];

	      function lazilize(callback, t) {
	        var _this3 = this;

	        return function () {
	          clearTimeout(timers.slice(-1)[0]);

	          var timer = setTimeout(callback.bind(_this3), t);
	          timers.push(timer);
	        };
	      }

	      this.handleScroll = lazilize(this.scrollToLoadPages.bind(this), 100);
	      this.handleResize = function () {
	        var view = (0, _utils.getView)();

	        if (window.innerWidth !== windowWidth) {
	          this.setState({
	            isLoading: true
	          });

	          windowWidth = window.innerWidth;
	          lazilize(this.prepareBook.bind(this, this.bookId, this.props, view), 500)();
	        }
	      }.bind(this);

	      window.addEventListener('scroll', this.handleScroll);
	      window.addEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'removeEventListeners',
	    value: function removeEventListeners() {
	      window.removeEventListener('scroll', this.handleScroll);
	      window.removeEventListener('resize', this.handleResize);
	    }

	    // todos:
	    // add animation

	  }, {
	    key: 'toggleBookPanel',
	    value: function toggleBookPanel(event) {
	      if (this.props.book.pages.props.view.screen === 'hd') {
	        var y = event.pageY - document.body.scrollTop;

	        if (y < 90) {
	          this.setState({
	            showPanel: true
	          });
	        } else {
	          this.setState({
	            showPanel: false
	          });
	        }
	      }
	    }
	  }, {
	    key: 'clickToToggleBookPanel',
	    value: function clickToToggleBookPanel() {
	      if (this.props.book.pages.props.view.screen === 'phone') {
	        this.setState({
	          showPanel: !this.state.showPanel
	        });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.confirm.isVisible === true) {
	        if (nextProps.confirm.result === 'yes') {
	          this.scrollTo(latestProgress.percentage);
	        }
	        if (nextProps.confirm.result === 'no') {
	          isResolvingProgressRejection = true;
	          this.scrollTo(currentProgress.percentage);
	        }
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this4 = this;

	      var actions = this.props.actions;
	      var bookId = this.bookId;

	      actions.fetchUserAuthInfo();
	      actions.fetchBookInfo(bookId, 'books/' + this.bookId).then(function (getState) {
	        _this4.prepareBook(bookId, Object.assign({}, { actions: actions }, getState()), (0, _utils.getView)());
	      });

	      this.addEventListeners();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeEventListeners();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var book = this.props.book;
	      var pages = book.pages ? book.pages.props.children : null;
	      var pagesToRender = [];
	      var view = this.props.view;
	      var height = pages ? pages.length * view.pageHeight : '100%';

	      if (book.isPagesLoaded) {
	        var currentPage = book.currentPage;

	        pagesToRender = (0, _utils.filterPages)({
	          startPage: currentPage,
	          offset: 2,
	          quantity: 5,
	          pages: pages
	        });
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'page-book-viewer book-viewer--' + view.screen,
	          onMouseMove: this.toggleBookPanel.bind(this) },
	        _react2.default.createElement(_Confirm2.default, { confirm: this.props.confirm }),
	        this.state.isLoading || book.isFetchingInfo || book.isFetchingContent ? _react2.default.createElement(_Loading2.default, null) : null,
	        this.state.showPanel && book.meta && book.isPagesLoaded === true ? _react2.default.createElement(
	          'div',
	          { className: 'functions' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'span',
	              { className: 'home' },
	              _react2.default.createElement(_reactRouter.Link, { to: '/bookstore' })
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'title' },
	              book.meta.title
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'loc' },
	              book.currentPage + "/" + pages.length
	            )
	          )
	        ) : null,
	        book.mode === 'render' ? _react2.default.createElement(
	          'div',
	          { className: 'pages' },
	          _react2.default.createElement(
	            'div',
	            { className: 'container' },
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('div', { className: 'content', dangerouslySetInnerHTML: { __html: book.html } })
	              )
	            )
	          )
	        ) : null,
	        book.mode === 'vertical' ? _react2.default.createElement(
	          'div',
	          { onClick: this.clickToToggleBookPanel.bind(this) },
	          _react2.default.createElement(_BookPageList2.default, { height: height, view: book.view, bookId: this.bookId, pages: pagesToRender })
	        ) : null
	      );
	    }
	  }]);

	  return BookViewer;
	}(_react.Component);

	BookViewer.propTypes = {
	  book: _react2.default.PropTypes.object.isRequired
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    book: state.book,
	    user: state.user,
	    view: state.view,
	    confirm: state.confirm
	  };
	}, function (dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	})(BookViewer);

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_VIEW = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _book = __webpack_require__(277);

	Object.keys(_book).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _book[key];
	    }
	  });
	});

	var _notification = __webpack_require__(278);

	Object.keys(_notification).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _notification[key];
	    }
	  });
	});

	var _user = __webpack_require__(279);

	Object.keys(_user).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _user[key];
	    }
	  });
	});

	var _confirm = __webpack_require__(280);

	Object.keys(_confirm).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _confirm[key];
	    }
	  });
	});
	exports.setView = setView;
	exports.promisedCallApi = promisedCallApi;
	exports.wrap = wrap;
	exports.promisedWrap = promisedWrap;

	var _lodash = __webpack_require__(218);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _STYLES = __webpack_require__(281);

	var styles = _interopRequireWildcard(_STYLES);

	var _utils = __webpack_require__(213);

	var _APIS = __webpack_require__(215);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_VIEW = exports.SET_VIEW = 'SET_VIEW';
	function setView(view) {
	  return {
	    type: SET_VIEW,
	    view: view
	  };
	}

	// todo: merge with api.js
	function promisedCallApi(CALL_API, actionArgObj) {
	  return function (dispatch, getState) {
	    var endpoint = CALL_API.endpoint;
	    var apiUrl = CALL_API.apiUrl;
	    var types = CALL_API.types;

	    var _types = _slicedToArray(types, 3);

	    var requestType = _types[0];
	    var successType = _types[1];
	    var failureType = _types[2];


	    function actionWith(data) {
	      var finalAction = Object.assign({}, actionArgObj, data);
	      return finalAction;
	    }

	    dispatch(actionWith({ type: requestType }));

	    if (typeof endpoint === 'function') {
	      endpoint = endpoint(getState());
	    }

	    if (typeof apiUrl === 'undefined') {
	      apiUrl = _APIS.API_ROOT;
	    }

	    var fullUrl = apiUrl + endpoint;

	    return new Promise(function (resolve, reject) {
	      (0, _utils.callApi)(fullUrl).then(function (response) {
	        dispatch(actionWith({
	          response: response,
	          type: successType
	        }));
	        resolve(getState);
	      }, function (error) {
	        dispatch(actionWith({
	          type: failureType,
	          error: error.message || 'Oops!'
	        }));
	        reject(error);
	      });
	    });
	  };
	}

	function wrap(func) {
	  return function (dispatch, getState) {
	    func(dispatch, getState);
	  };
	}

	function promisedWrap(func) {
	  return function (dispatch, getState) {
	    return new Promise(function (resolve) {
	      func(dispatch, getState);
	      resolve(getState);
	    });
	  };
	}

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.JUMP_TO = exports.LOAD_PAGES = exports.SET_BOOK_MODE = exports.LOAD_HTML = exports.CLEAR_BOOK_SEARCH = undefined;
	exports.fetchBookList = fetchBookList;
	exports.fetchDoubanBookSearchResults = fetchDoubanBookSearchResults;
	exports.clearBookSearch = clearBookSearch;
	exports.fetchBookContent = fetchBookContent;
	exports.fetchBookInfo = fetchBookInfo;
	exports.loadHTML = loadHTML;
	exports.setBookMode = setBookMode;
	exports.loadPages = loadPages;
	exports.jumpTo = jumpTo;

	var _actions = __webpack_require__(276);

	var _APIS = __webpack_require__(215);

	function fetchBookList(endpoint) {
	  return (0, _actions.promisedCallApi)({
	    types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE'],
	    endpoint: endpoint
	  }, {});
	}

	function fetchDoubanBookSearchResults(endpoint) {
	  return (0, _actions.promisedCallApi)({
	    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
	    endpoint: endpoint,
	    apiUrl: _APIS.API_DOUBAN_BOOKS
	  }, {});
	}

	var CLEAR_BOOK_SEARCH = exports.CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH';
	function clearBookSearch() {
	  return {
	    type: CLEAR_BOOK_SEARCH
	  };
	}

	function fetchBookContent(bookId, endpoint) {
	  return (0, _actions.promisedCallApi)({
	    types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
	    endpoint: endpoint
	  }, { bookId: bookId });
	}

	function fetchBookInfo(bookId, endpoint) {
	  return (0, _actions.promisedCallApi)({
	    types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
	    endpoint: endpoint
	  }, { bookId: bookId });
	}

	var LOAD_HTML = exports.LOAD_HTML = 'LOAD_HTML';
	function loadHTML(html) {
	  return {
	    type: LOAD_HTML,
	    html: html
	  };
	}

	var SET_BOOK_MODE = exports.SET_BOOK_MODE = 'SET_BOOK_MODE';
	function setBookMode(mode) {
	  return {
	    type: SET_BOOK_MODE,
	    mode: mode
	  };
	}

	var LOAD_PAGES = exports.LOAD_PAGES = 'LOAD_PAGES';
	function loadPages(pages) {
	  return {
	    type: LOAD_PAGES,
	    pages: pages
	  };
	}

	var JUMP_TO = exports.JUMP_TO = 'JUMP_TO';
	function jumpTo(pageNo) {
	  return {
	    type: JUMP_TO,
	    currentPage: pageNo
	  };
	}

/***/ },

/***/ 278:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleNotification = handleNotification;
	exports.showNotification = showNotification;
	exports.hideNotification = hideNotification;
	function handleNotification(content, t) {
	  if (typeof t === 'undefined') {
	    t = 3000;
	  }

	  return function (dispatch, getState) {
	    dispatch(showNotification(content));
	    setTimeout(function () {
	      dispatch(hideNotification());
	    }, t);
	  };
	}

	var SHOW_NOTIFICATION = exports.SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
	function showNotification(content) {
	  return {
	    type: SHOW_NOTIFICATION,
	    content: content,
	    isVisible: true
	  };
	}

	var HIDE_NOTIFICATION = exports.HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
	function hideNotification() {
	  return {
	    type: HIDE_NOTIFICATION,
	    isVisible: false
	  };
	}

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchUserAuthInfo = fetchUserAuthInfo;

	var _actions = __webpack_require__(276);

	function fetchUserAuthInfo() {
	  return (0, _actions.promisedCallApi)({
	    types: ['USER_AUTH_INFO_REQUEST', 'USER_AUTH_INFO_SUCCESS', 'USER_AUTH_INFO_FAILURE'],
	    endpoint: 'auth'
	  }, {});
	}

/***/ },

/***/ 280:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.showConfirm = showConfirm;
	exports.hideConfirm = hideConfirm;
	exports.confirmYes = confirmYes;
	exports.confirmNo = confirmNo;
	var SHOW_CONFIRM = exports.SHOW_CONFIRM = 'SHOW_CONFIRM';
	function showConfirm(content) {
	  return {
	    type: SHOW_CONFIRM,
	    content: content,
	    isVisible: true
	  };
	}

	var HIDE_CONFIRM = exports.HIDE_CONFIRM = 'HIDE_CONFIRM';
	function hideConfirm() {
	  return {
	    type: HIDE_CONFIRM,
	    isVisible: false
	  };
	}

	var CONFIRM_YES = exports.CONFIRM_YES = 'CONFIRM_YES';
	function confirmYes() {
	  return {
	    type: CONFIRM_YES,
	    isVisible: false,
	    result: 'yes'
	  };
	}

	var CONFIRM_NO = exports.CONFIRM_NO = 'CONFIRM_NO';
	function confirmNo() {
	  return {
	    type: CONFIRM_NO,
	    isVisible: false,
	    result: 'no'
	  };
	}

/***/ },

/***/ 281:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BOOK_HD_STYLE = exports.BOOK_HD_STYLE = {
	  fontSize: "18",
	  lineHeight: "1.8",
	  width: "700",
	  height: "900"
	};

	var BOOK_MOBILE_STYLE = exports.BOOK_MOBILE_STYLE = {
	  fontSize: "22",
	  lineHeight: "1.8",
	  width: "100%",
	  height: "100%"
	};

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _STYLES = __webpack_require__(281);

	var styles = _interopRequireWildcard(_STYLES);

	var _BookPage = __webpack_require__(283);

	var _BookPage2 = _interopRequireDefault(_BookPage);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookPageList = function (_Component) {
	  _inherits(BookPageList, _Component);

	  function BookPageList() {
	    _classCallCheck(this, BookPageList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPageList).apply(this, arguments));
	  }

	  _createClass(BookPageList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      // let style = styles.BOOK_HD_STYLE
	      // if(this.props.view.mode === "MOBILE") {
	      //   style = styles.BOOK_MOBILE_STYLE
	      // }

	      // if(!this.props.isCalculated) {
	      //   style.height = "100%"
	      // }

	      return _react2.default.createElement(
	        'div',
	        { className: 'pages' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'ul',
	            { style: { height: this.props.height } },
	            this.props.pages.map(function (page, index) {
	              if (page.type === "page") {
	                // style = Object.assign({}, style, page.props.style)
	                return _react2.default.createElement(_BookPage2.default, { style: page.props.style, bookId: _this2.props.bookId, key: index, page: page });
	              } else {
	                console.error("Not type page!");
	              }
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return BookPageList;
	}(_react.Component);

	exports.default = BookPageList;

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookPage = function (_Component) {
	  _inherits(BookPage, _Component);

	  function BookPage() {
	    _classCallCheck(this, BookPage);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPage).apply(this, arguments));
	  }

	  _createClass(BookPage, [{
	    key: 'render',
	    value: function render() {
	      var page = this.props.page;
	      var style = this.props.style;

	      return _react2.default.createElement(
	        'li',
	        { style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'content' },
	          page.props.children.map(function (node, index) {
	            // console.log(node);
	            if (node.type !== "p") {
	              console.error("Unsupported content found!");
	            }
	            return _react2.default.createElement(
	              'p',
	              _extends({}, index === 0 ? { style: { marginTop: page.props.offset } } : {}, {
	                key: index }),
	              node.props.children
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'page-no' },
	          page.props.pageNo
	        )
	      );
	    }
	  }]);

	  return BookPage;
	}(_react.Component);

	exports.default = BookPage;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_Component) {
	  _inherits(Loading, _Component);

	  function Loading() {
	    _classCallCheck(this, Loading);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	  }

	  _createClass(Loading, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "loading-wrap" },
	        _react2.default.createElement("span", { className: "icon icon-loading" })
	      );
	    }
	  }]);

	  return Loading;
	}(_react.Component);

	exports.default = Loading;

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(246);

	var _confirm = __webpack_require__(280);

	var actions = _interopRequireWildcard(_confirm);

	var _redux = __webpack_require__(227);

	var _reactRedux = __webpack_require__(221);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Confirm = function (_Component) {
	  _inherits(Confirm, _Component);

	  function Confirm(props) {
	    _classCallCheck(this, Confirm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Confirm).call(this, props));
	  }

	  _createClass(Confirm, [{
	    key: 'render',
	    value: function render() {
	      var confirm = this.props.confirm;
	      var actions = this.props.actions;

	      return _react2.default.createElement(
	        'div',
	        null,
	        confirm.isVisible ? _react2.default.createElement(
	          'div',
	          { className: 'confirm-dialog mui--z1' },
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            confirm.content
	          ),
	          _react2.default.createElement(
	            _react3.Button,
	            { onClick: actions.confirmYes.bind(this), color: 'primary', className: 'mui--z1' },
	            '是'
	          ),
	          _react2.default.createElement(
	            _react3.Button,
	            { onClick: actions.confirmNo.bind(this) },
	            '否'
	          )
	        ) : null
	      );
	    }
	  }]);

	  return Confirm;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    confirm: state.confirm
	  };
	}, function (dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	})(Confirm);

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(246);

	var _reactRedux = __webpack_require__(221);

	var _reactRouter = __webpack_require__(155);

	var _actions = __webpack_require__(276);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Colophon = __webpack_require__(287);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	var _BookList = __webpack_require__(288);

	var _BookList2 = _interopRequireDefault(_BookList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookStore = function (_Component) {
	  _inherits(BookStore, _Component);

	  function BookStore(props) {
	    _classCallCheck(this, BookStore);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookStore).call(this, props));
	  }

	  _createClass(BookStore, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.fetchUserAuthInfo();
	      this.props.fetchBookList('books');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page-book-store' },
	        _react2.default.createElement(_Branding2.default, { user: this.props.user }),
	        _react2.default.createElement(_BookList2.default, { bookList: this.props.bookList }),
	        _react2.default.createElement(_Colophon2.default, null)
	      );
	    }
	  }]);

	  return BookStore;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    bookList: state.book.bookList,
	    user: state.user
	  };
	}, { fetchBookList: _actions.fetchBookList, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(BookStore);

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(155);

	var _react3 = __webpack_require__(246);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Colophon = function (_Component) {
	  _inherits(Colophon, _Component);

	  function Colophon() {
	    _classCallCheck(this, Colophon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Colophon).apply(this, arguments));
	  }

	  _createClass(Colophon, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'colophon' },
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            'p',
	            null,
	            '© 2015－2016 readrweb.com, all rights reserved'
	          )
	        )
	      );
	    }
	  }]);

	  return Colophon;
	}(_react.Component);

	exports.default = Colophon;

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(246);

	var _reactRouter = __webpack_require__(155);

	var _Book = __webpack_require__(289);

	var _Book2 = _interopRequireDefault(_Book);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookList = function (_Component) {
	  _inherits(BookList, _Component);

	  function BookList() {
	    _classCallCheck(this, BookList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BookList).apply(this, arguments));
	  }

	  _createClass(BookList, [{
	    key: 'render',
	    value: function render() {
	      var bookList = this.props.bookList;

	      return _react2.default.createElement(
	        _react3.Container,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'book-box' },
	          _react2.default.createElement(
	            'h1',
	            { className: 'page-title' },
	            '新书速递'
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'book-list clearfix' },
	            bookList ? bookList.map(function (book, index) {
	              return _react2.default.createElement(_Book2.default, { id: book.id, key: index, book: book });
	            }) : null
	          )
	        )
	      );
	    }
	  }]);

	  return BookList;
	}(_react.Component);

	exports.default = BookList;

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(246);

	var _reactRouter = __webpack_require__(155);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Book = function (_Component) {
	  _inherits(Book, _Component);

	  function Book() {
	    _classCallCheck(this, Book);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Book).apply(this, arguments));
	  }

	  _createClass(Book, [{
	    key: 'render',
	    value: function render() {
	      var book = this.props.book;

	      return _react2.default.createElement(
	        'li',
	        { className: 'book' },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: "/bookstore/book/" + this.props.id },
	          _react2.default.createElement(
	            'div',
	            { className: 'book-cover' },
	            _react2.default.createElement('img', { src: book.image })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'book-meta' },
	            _react2.default.createElement(
	              'span',
	              { title: book.title, className: 'book-name' },
	              book.title
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'book-author' },
	              Array.isArray(book.author) ? book.author.join(' ') : book.author
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Book;
	}(_react.Component);

	exports.default = Book;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _react3 = __webpack_require__(246);

	var _reactRouter = __webpack_require__(155);

	var _APIS = __webpack_require__(215);

	var _utils = __webpack_require__(213);

	var _actions = __webpack_require__(276);

	var _Notification = __webpack_require__(291);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signin = function (_Component) {
	  _inherits(Signin, _Component);

	  function Signin(props) {
	    _classCallCheck(this, Signin);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this, props));

	    _this.state = {
	      login: '',
	      password: ''
	    };
	    return _this;
	  }

	  _createClass(Signin, [{
	    key: 'handleSignin',
	    value: function handleSignin(event) {
	      var _this2 = this;

	      event.preventDefault();

	      var params = {
	        login: this.state.login,
	        password: this.state.password
	      };

	      (0, _utils.callApi)(_APIS.API_ROOT + 'auth', 'POST', params).then(function (res) {
	        _this2.props.handleNotification('登录成功！');
	        setTimeout(function () {
	          _reactRouter.browserHistory.push('/');
	        }, 600);
	      }).catch(function (err) {
	        _this2.props.handleNotification(err.message);
	      });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page-signin' },
	        _react2.default.createElement(_Branding2.default, { user: this.props.user }),
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            _react3.Form,
	            { className: 'content-container', action: _APIS.API_ROOT + 'auth', method: 'post' },
	            _react2.default.createElement(_Notification2.default, { notification: this.props.notification }),
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-title' },
	              '欢迎回来'
	            ),
	            _react2.default.createElement(_react3.Input, { onChange: this.handleInput.bind(this), value: this.state.login, name: 'login', hint: '用户名或邮箱' }),
	            _react2.default.createElement(_react3.Input, { onChange: this.handleInput.bind(this), value: this.state.password, name: 'password', hint: '密码', type: 'password' }),
	            _react2.default.createElement(
	              _react3.Button,
	              { onClick: this.handleSignin.bind(this), variant: 'raised' },
	              '登录'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'hint' },
	              '没有账号？',
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/signup' },
	                '注册'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Signin;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    notification: state.notification,
	    user: state.user
	  };
	}, { handleNotification: _actions.handleNotification, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(Signin);

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notification = function (_Component) {
	  _inherits(Notification, _Component);

	  function Notification() {
	    _classCallCheck(this, Notification);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).apply(this, arguments));
	  }

	  _createClass(Notification, [{
	    key: "render",
	    value: function render() {
	      var notification = this.props.notification;

	      return _react2.default.createElement(
	        "div",
	        null,
	        notification.isVisible ? _react2.default.createElement(
	          "div",
	          { className: "msg mui--z1" },
	          notification.content
	        ) : null
	      );
	    }
	  }]);

	  return Notification;
	}(_react.Component);

	exports.default = Notification;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _react3 = __webpack_require__(246);

	var _reactRouter = __webpack_require__(155);

	var _APIS = __webpack_require__(215);

	var _utils = __webpack_require__(213);

	var _actions = __webpack_require__(276);

	var _Notification = __webpack_require__(291);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signup = function (_Component) {
	  _inherits(Signup, _Component);

	  function Signup(props) {
	    _classCallCheck(this, Signup);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this, props));

	    _this.state = {
	      username: "",
	      email: "",
	      password: ""
	    };
	    return _this;
	  }

	  _createClass(Signup, [{
	    key: 'handleSignup',
	    value: function handleSignup(event) {
	      var _this2 = this;

	      event.preventDefault();

	      var params = {
	        username: this.state.username,
	        email: this.state.email,
	        password: this.state.password
	      };

	      (0, _utils.callApi)(_APIS.API_ROOT + 'users', 'POST', params).then(function (res) {
	        _this2.props.handleNotification('注册成功！');
	        setTimeout(function () {
	          _reactRouter.browserHistory.push('/');
	        }, 600);
	      }).catch(function (err) {
	        _this2.props.handleNotification(err.message);
	      });
	    }
	  }, {
	    key: 'handleInput',
	    value: function handleInput(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page-signup' },
	        _react2.default.createElement(_Branding2.default, { user: this.props.user }),
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            _react3.Form,
	            { className: 'content-container', method: 'post', action: '/signup' },
	            _react2.default.createElement(_Notification2.default, { notification: this.props.notification }),
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-title' },
	              '加入 Readr'
	            ),
	            _react2.default.createElement(_react3.Input, { onChange: this.handleInput.bind(this), value: this.state.username, name: 'username', hint: '用户名' }),
	            _react2.default.createElement(_react3.Input, { onChange: this.handleInput.bind(this), value: this.state.email, name: 'email', hint: '邮箱' }),
	            _react2.default.createElement(_react3.Input, { onChange: this.handleInput.bind(this), value: this.state.password, name: 'password', hint: '密码 ', type: 'password' }),
	            _react2.default.createElement(
	              _react3.Button,
	              { onClick: this.handleSignup.bind(this), variant: 'raised' },
	              '注册'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'hint' },
	              '没有账号？',
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/signin' },
	                '登录'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Signup;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    notification: state.notification,
	    user: state.user
	  };
	}, { handleNotification: _actions.handleNotification, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(Signup);

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(221);

	var _reactRouter = __webpack_require__(155);

	var _react3 = __webpack_require__(246);

	var _APIS = __webpack_require__(215);

	var _actions = __webpack_require__(276);

	var _utils = __webpack_require__(213);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Colophon = __webpack_require__(287);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	var _Notification = __webpack_require__(291);

	var _Notification2 = _interopRequireDefault(_Notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddBook = function (_Component) {
	  _inherits(AddBook, _Component);

	  function AddBook(props) {
	    _classCallCheck(this, AddBook);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));

	    _this.defaultState = {
	      searchQuery: "",
	      currentBook: -1,
	      previewIndex: -1,
	      conformed: false
	    };
	    _this.state = _this.defaultState;
	    return _this;
	  }

	  _createClass(AddBook, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.fetchUserAuthInfo();
	    }
	  }, {
	    key: 'handleAddBook',
	    value: function handleAddBook(event) {
	      var _this2 = this;

	      event.preventDefault();

	      var currentBook = this.state.currentBook;
	      var dataToPost = {};
	      var bookContent = _reactDom2.default.findDOMNode(this.refs.bookContent).childNodes[0].value;
	      var isValid = false;

	      while (true) {
	        if (currentBook !== -1) {
	          dataToPost.bookInfo = this.props.book.searchResults.books[currentBook];
	        } else {
	          this.props.handleNotification('未选择书籍！');
	          break;
	        }

	        if (bookContent) {
	          dataToPost.bookContent = bookContent;
	        } else {
	          this.props.handleNotification('请输入书籍内容！');
	          break;
	        }

	        isValid = true;
	        break;
	      }

	      dataToPost.bookInfo = JSON.stringify(dataToPost.bookInfo);

	      if (isValid) {
	        (0, _utils.callApi)(_APIS.API_ROOT + 'books', 'post', dataToPost).then(function (res) {
	          _this2.props.handleNotification('添加成功');
	        }).catch(function (err) {
	          console.error(err);
	          _this2.props.handleNotification(err.message);
	        });
	      }
	    }
	  }, {
	    key: 'search',
	    value: function search(event) {
	      this.setState({ searchQuery: event.target.value });
	      this.props.fetchDoubanBookSearchResults('search?count=5&q=' + event.target.value);
	    }
	  }, {
	    key: 'conformResult',
	    value: function conformResult(index) {
	      this.setState({
	        currentBook: index,
	        conformed: true
	      });
	    }
	  }, {
	    key: 'showBookCover',
	    value: function showBookCover(index) {
	      this.setState({
	        previewIndex: index
	      });
	    }
	  }, {
	    key: 'removeResult',
	    value: function removeResult() {
	      this.setState(this.defaultState);
	      this.props.clearBookSearch();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var book = null;

	      if (this.state.currentBook !== -1) {
	        book = this.props.book.searchResults.books[this.state.currentBook];
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'page-add-book' },
	        _react2.default.createElement(_Branding2.default, { user: this.props.user }),
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            _react3.Form,
	            { className: 'content-container', method: 'post' },
	            _react2.default.createElement(_Notification2.default, { notification: this.props.notification }),
	            _react2.default.createElement(
	              'h1',
	              { className: 'page-title' },
	              '添加书籍'
	            ),
	            !this.state.conformed ? _react2.default.createElement(_react3.Input, { onChange: this.search.bind(this), value: this.state.searchQuery, hint: '输入书名或其他书籍相关信息' }) : null,
	            !this.state.conformed && this.props.book.searchResults ? _react2.default.createElement(
	              'div',
	              { className: 'drop-down' },
	              _react2.default.createElement(
	                'ul',
	                null,
	                this.props.book.searchResults.books.map(function (item, index) {
	                  return _react2.default.createElement(
	                    'li',
	                    { onMouseOver: _this3.showBookCover.bind(_this3, index), onClick: _this3.conformResult.bind(_this3, index), key: index },
	                    item.title,
	                    ' (',
	                    item.author,
	                    ')',
	                    _this3.state.previewIndex === index ? _react2.default.createElement(
	                      'div',
	                      null,
	                      _react2.default.createElement('img', { src: item.image })
	                    ) : null
	                  );
	                })
	              )
	            ) : null,
	            book ? _react2.default.createElement(
	              'div',
	              { className: 'book' },
	              _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('img', { src: book.image })
	              ),
	              _react2.default.createElement(
	                'h2',
	                { className: 'book-name' },
	                book.title
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'book-author' },
	                '作者：',
	                book.author[0]
	              ),
	              _react2.default.createElement(
	                _react3.Button,
	                { onClick: this.removeResult.bind(this), className: 'mui--z1' },
	                '重新选择'
	              )
	            ) : null,
	            _react2.default.createElement(_react3.Textarea, { hint: '粘贴书籍的全部文本内容', style: { height: 200 }, name: 'book_content', ref: 'bookContent' }),
	            _react2.default.createElement(
	              _react3.Button,
	              { onClick: this.handleAddBook.bind(this), variant: 'raised' },
	              '确认添加'
	            )
	          )
	        ),
	        _react2.default.createElement(_Colophon2.default, null)
	      );
	    }
	  }]);

	  return AddBook;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.user,
	    book: state.book,
	    notification: state.notification
	  };
	}, { fetchUserAuthInfo: _actions.fetchUserAuthInfo, fetchDoubanBookSearchResults: _actions.fetchDoubanBookSearchResults, clearBookSearch: _actions.clearBookSearch, handleNotification: _actions.handleNotification })(AddBook);

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(143);

	var _react2 = _interopRequireDefault(_react);

	var _react3 = __webpack_require__(246);

	var _reactRouter = __webpack_require__(155);

	var _reactRedux = __webpack_require__(221);

	var _actions = __webpack_require__(276);

	var _Branding = __webpack_require__(273);

	var _Branding2 = _interopRequireDefault(_Branding);

	var _Colophon = __webpack_require__(287);

	var _Colophon2 = _interopRequireDefault(_Colophon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookInfo = function (_Component) {
	  _inherits(BookInfo, _Component);

	  function BookInfo(props) {
	    _classCallCheck(this, BookInfo);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).call(this, props));

	    _this.bookId = props.params.id;
	    return _this;
	  }

	  _createClass(BookInfo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.fetchUserAuthInfo();
	      this.props.fetchBookInfo(this.bookId, 'books/' + this.bookId).then(function (getState) {}).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bookInfo = this.props.bookInfo ? this.props.bookInfo : {};

	      return _react2.default.createElement(
	        'div',
	        { className: 'page-book-info' },
	        _react2.default.createElement(_Branding2.default, { user: this.props.user }),
	        _react2.default.createElement(
	          _react3.Container,
	          null,
	          _react2.default.createElement(
	            'article',
	            { className: 'book-info content-container' },
	            _react2.default.createElement(
	              'header',
	              { className: 'book-info-header' },
	              _react2.default.createElement(
	                'div',
	                { className: 'left-col' },
	                bookInfo.image ? _react2.default.createElement(
	                  'div',
	                  { className: 'book-cover' },
	                  _react2.default.createElement('img', { src: bookInfo.image })
	                ) : null
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'right-col' },
	                _react2.default.createElement(
	                  'h1',
	                  { className: 'book-name' },
	                  bookInfo.title
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'book-author' },
	                  _react2.default.createElement(
	                    'strong',
	                    null,
	                    '作者：',
	                    bookInfo.author
	                  )
	                ),
	                bookInfo.title ? _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/book/' + bookInfo.id },
	                  _react2.default.createElement(
	                    _react3.Button,
	                    { color: 'primary' },
	                    '阅读'
	                  )
	                ) : null,
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { target: '_blank', href: 'http://book.douban.com/subject/' + bookInfo.book_id },
	                    '在豆瓣查看'
	                  )
	                )
	              )
	            ),
	            bookInfo.author_intro ? _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h2',
	                null,
	                '作者简介'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                bookInfo.author_intro
	              )
	            ) : null,
	            bookInfo.summary ? _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h2',
	                null,
	                '内容简介'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                bookInfo.summary
	              )
	            ) : null
	          )
	        ),
	        _react2.default.createElement(_Colophon2.default, null)
	      );
	    }
	  }]);

	  return BookInfo;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    bookInfo: state.book.meta,
	    user: state.user
	  };
	}, { fetchBookInfo: _actions.fetchBookInfo, fetchUserAuthInfo: _actions.fetchUserAuthInfo })(BookInfo);

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(213);

	var env = (0, _utils.getEnv)();

	// if (env === 'production') {
	//   module.exports = require('./configureStore.prod')
	// } else {
	//   module.exports = require('./configureStore.dev')
	// }

	module.exports = __webpack_require__(296);

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(227);

	var _reduxThunk = __webpack_require__(297);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(298);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _api = __webpack_require__(304);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, _api2.default));

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextRootReducer = require('../reducers').default;
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(227);

	var _book = __webpack_require__(299);

	var _book2 = _interopRequireDefault(_book);

	var _user = __webpack_require__(300);

	var _user2 = _interopRequireDefault(_user);

	var _notification = __webpack_require__(301);

	var _notification2 = _interopRequireDefault(_notification);

	var _confirm = __webpack_require__(302);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _view = __webpack_require__(303);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  book: _book2.default,
	  user: _user2.default,
	  notification: _notification2.default,
	  view: _view2.default,
	  confirm: _confirm2.default
	});

	exports.default = rootReducer;

/***/ },

/***/ 299:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = book;
	function book(state, action) {
	  if (typeof state === 'undefined') {
	    state = {};
	  }
	  switch (action.type) {

	    case 'BOOK_LIST_REQUEST':
	      return Object.assign({}, state, {
	        isFetchingList: true
	      });

	    case 'BOOK_LIST_SUCCESS':
	      return Object.assign({}, state, {
	        isFetchingList: false,
	        bookList: action.response
	      });

	    case 'BOOK_CONTENT_REQUEST':
	      return Object.assign({}, state, {
	        isFetchingContent: true,
	        id: action.bookId
	      });

	    case 'BOOK_CONTENT_SUCCESS':
	      return Object.assign({}, state, {
	        isFetchingContent: false,
	        html: action.response.html
	      });

	    case 'BOOK_INFO_REQUEST':
	      return Object.assign({}, state, {
	        isFetchingInfo: true,
	        id: action.bookId
	      });

	    case 'BOOK_INFO_SUCCESS':
	      return Object.assign({}, state, {
	        isFetchingInfo: false,
	        meta: action.response
	      });

	    case 'LOAD_HTML':
	      return Object.assign({}, state, {
	        html: action.html
	      });

	    case 'LOAD_PAGES':
	      return Object.assign({}, state, {
	        isPagesLoaded: true,
	        pages: action.pages
	      });

	    case 'SET_BOOK_MODE':
	      return Object.assign({}, state, {
	        mode: action.mode
	      });

	    case 'JUMP_TO':
	      return Object.assign({}, state, {
	        isPagesLoaded: true,
	        currentPage: action.currentPage
	      });

	    case 'DOUBAN_BOOK_SEARCH_REQUEST':
	      return Object.assign({}, state, {
	        isFetchingSearch: true
	      });

	    case 'DOUBAN_BOOK_SEARCH_SUCCESS':
	      return Object.assign({}, state, {
	        isFetchingSearch: false,
	        searchResults: action.response
	      });

	    case 'DOUBAN_BOOK_SEARCH_FAILURE':
	      return Object.assign({}, state, {
	        isFetchingSearch: false,
	        error: action.response
	      });

	    case 'CLEAR_BOOK_SEARCH':
	      return Object.assign({}, state, {
	        searchResults: null
	      });

	    default:
	      return state;
	  }
	}

/***/ },

/***/ 300:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = book;
	function book(state, action) {
	  if (typeof state === 'undefined') {
	    state = {};
	  }

	  switch (action.type) {
	    case 'USER_AUTH_INFO_REQUEST':
	      return Object.assign({}, state, {
	        isFetchingUserAuthInfo: true
	      });

	    case 'USER_AUTH_INFO_SUCCESS':
	      return Object.assign({}, state, {
	        isFetchingUserAuthInfo: false,
	        authed: action.response.authed,
	        username: action.response.authed ? action.response.user.username : '',
	        role: action.response.authed ? action.response.user.role : 'visitor'
	      });

	    default:
	      return state;
	  }
	}

/***/ },

/***/ 301:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = notification;
	function notification(state, action) {
	  if (typeof state === 'undefined') {
	    state = {};
	  }

	  switch (action.type) {
	    case 'SHOW_NOTIFICATION':
	      return Object.assign({}, state, {
	        content: action.content,
	        isVisible: true
	      });

	    case 'HIDE_NOTIFICATION':
	      return Object.assign({}, state, {
	        isVisible: false
	      });

	    default:
	      return state;
	  }
	}

/***/ },

/***/ 302:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = notification;
	function notification(state, action) {
	  if (typeof state === 'undefined') {
	    state = {
	      isVisible: false,
	      result: 'unsettled'
	    };
	  }

	  switch (action.type) {
	    case 'SHOW_CONFIRM':
	      return Object.assign({}, state, {
	        content: action.content,
	        isVisible: true
	      });

	    case 'HIDE_CONFIRM':
	      return Object.assign({}, state, {
	        isVisible: false
	      });

	    case 'CONFIRM_YES':
	      return Object.assign({}, state, {
	        isVisible: false,
	        result: 'yes'
	      });

	    case 'CONFIRM_NO':
	      return Object.assign({}, state, {
	        isVisible: false,
	        result: 'no'
	      });

	    default:
	      return state;
	  }
	}

/***/ },

/***/ 303:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = view;
	function view(state, action) {
	  if (typeof state === 'undefined') {
	    state = {
	      screen: 'hd',
	      pageHeight: 900,
	      pageWidth: 900
	    };
	  }

	  switch (action.type) {
	    case 'SET_VIEW':
	      return Object.assign({}, state, action.view);

	    default:
	      return state;
	  }
	}

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _utils = __webpack_require__(213);

	var _APIS = __webpack_require__(215);

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      var CALL_API = action.CALL_API;
	      if (typeof CALL_API === 'undefined') {
	        return next(action);
	      }

	      var endpoint = CALL_API.endpoint;
	      var apiUrl = CALL_API.apiUrl;
	      var types = CALL_API.types;

	      var _types = _slicedToArray(types, 3);

	      var requestType = _types[0];
	      var successType = _types[1];
	      var failureType = _types[2];


	      function actionWith(data) {
	        var finalAction = Object.assign({}, action, data);
	        delete finalAction.CALL_API;
	        return finalAction;
	      }

	      next(actionWith({ type: requestType }));

	      if (typeof endpoint === 'function') {
	        endpoint = endpoint(store.getState());
	      }

	      if (typeof apiUrl === 'undefined') {
	        apiUrl = _APIS.API_ROOT;
	      }

	      var fullUrl = apiUrl + endpoint;

	      return (0, _utils.callApi)(fullUrl).then(function (response) {
	        return next(actionWith({
	          response: response,
	          type: successType
	        }));
	      }, function (error) {
	        return next(actionWith({
	          type: failureType,
	          error: error.message || 'Oops!'
	        }));
	      });
	    };
	  };
	};

/***/ }

});