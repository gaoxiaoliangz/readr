webpackJsonp([14],{29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=void 0;return e.forEach(function(e){t=e.bodyClass}),t}function c(e){"undefined"!=typeof e?document.body.className=e:document.body.removeAttribute("class")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),s=o(f),p=n(53),d=o(p),b=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.className;return e?s["default"].createElement("div",{className:e},this.props.children):s["default"].createElement("div",null,this.props.children)}}]),t}(f.Component);t["default"]=(0,d["default"])(a,c)(b)},267:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return{bookListNewest:e.pagination.books.newest?e.pagination.books.newest.ids.map(function(t){return e.entities.books[t]}):[]}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),s=o(f),p=n(5),d=n(29),b=o(d),y=n(62),m=o(y),h=n(7),v=n(2),w=o(v),E=function(e,t,n,o){var r,u=arguments.length,l=3>u?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(3>u?r(l):u>3?r(t,n,l):r(t,n))||l);return u>3&&l&&Object.defineProperty(t,n,l),l},k=n(317),O=function(e){function t(e){return r(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this,t=this.props.bookListNewest?this.props.bookListNewest:null;return s["default"].createElement("div",null,s["default"].createElement(b["default"],{className:"manage-books"}),s["default"].createElement("table",null,s["default"].createElement("tbody",null,s["default"].createElement("tr",null,s["default"].createElement("td",null,"ID"),s["default"].createElement("td",null,"Name"),s["default"].createElement("td",null,"Date created"),s["default"].createElement("td",null,"Actions")),t?t.map(function(t,n){return s["default"].createElement("tr",{key:n},s["default"].createElement("td",null,t.id),s["default"].createElement("td",null,t.title),s["default"].createElement("td",null,t.dateCreated),s["default"].createElement("td",null,s["default"].createElement("a",{onClick:function(n){return n.preventDefault(),m["default"].deleteBook(t.id).then(function(t){e.props.sendNotification("删除成功！"),e.props.fetchBooks()}),!1},href:"#"},"Delete")))}):null)))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,h.fetchBooks)())}}]),t}(f.Component);O=E([(0,w["default"])(k,{allowMultiple:!0})],O),t["default"]=(0,p.connect)(a,{fetchBooks:h.fetchBooks,sendNotification:h.sendNotification})(O)},317:function(e,t){e.exports={test:"test_JZpbZ"}}});