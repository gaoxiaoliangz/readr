webpackJsonp([14],{29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e[e.length-1],n={};return t&&(n=y["default"].pick(t,["title","bodyClass"]),n.title&&!t.useAsMasterTitle?n.title=n.title+" | "+m:n.title=n.title||m),n}function a(e){var t=e.title,n=e.bodyClass;"undefined"!=typeof n?document.body.className=n:document.body.removeAttribute("class"),"undefined"!=typeof t?document.title=t:document.title=m}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),s=o(f),d=n(53),p=o(d),b=n(7),y=o(b),m="Readr",h=function(e){function t(){return r(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props.className;return e?s["default"].createElement("div",{className:"gb-doc-container"+e},this.props.children):s["default"].createElement("div",{className:"gb-doc-container"},this.props.children)}}]),t}(f.Component);t["default"]=(0,p["default"])(i,a)(h)},268:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return{bookListNewest:e.pagination.books.newest?e.pagination.books.newest.ids.map(function(t){return e.entities.books[t]}):[]}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},f=n(1),s=o(f),d=n(5),p=n(29),b=o(p),y=n(62),m=o(y),h=n(8),v=n(2),w=o(v),k=function(e,t,n,o){var r,l=arguments.length,u=3>l?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":c(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(u=(3>l?r(u):l>3?r(t,n,u):r(t,n))||u);return l>3&&u&&Object.defineProperty(t,n,u),u},E=n(317),O=function(e){function t(e){return r(this,t),l(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this,t=this.props.bookListNewest?this.props.bookListNewest:null;return s["default"].createElement(b["default"],{title:"管理书籍"},s["default"].createElement("table",{className:"info-table"},s["default"].createElement("tbody",null,s["default"].createElement("tr",null,s["default"].createElement("td",null,"ID"),s["default"].createElement("td",null,"Name"),s["default"].createElement("td",null,"Date created"),s["default"].createElement("td",null,"Actions")),t?t.map(function(t,n){return s["default"].createElement("tr",{key:n},s["default"].createElement("td",null,t.id),s["default"].createElement("td",null,t.title),s["default"].createElement("td",null,t.dateCreated),s["default"].createElement("td",null,s["default"].createElement("a",{onClick:function(n){return n.preventDefault(),m["default"].deleteBook(t.id).then(function(t){e.props.sendNotification("删除成功！"),e.props.fetchBooks()}),!1},href:"#"},"Delete")))}):null)))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,h.fetchBooks)())}}]),t}(f.Component);O=k([(0,w["default"])(E,{allowMultiple:!0})],O),t["default"]=(0,d.connect)(i,{fetchBooks:h.fetchBooks,sendNotification:h.sendNotification})(O)},317:function(e,t){}});