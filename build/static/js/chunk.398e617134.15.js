webpackJsonp([15],{1203:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{notification:e.components.notification,elements:e.elements,session:e.session}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(111),c=n(l),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=o(2),d=n(f),p=o(65),_=o(85),h=o(1274),b=n(h),m=o(131),y=n(m),O=o(564),g=n(O),C=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSave=o.handleSave.bind(o),o.handleBooksValueChange=o.handleBooksValueChange.bind(o),o}return s(t,e),u(t,[{key:"handleSave",value:function(e){var t=this,o=this.props.session.user.id,n=Object.assign({},e,{creator:o});y.default.addCollection(n).then(function(e){t.props.sendNotification("添加成功！"),t.props.resetForm("addCollection")},function(e){t.props.sendNotification(e.message,"error")})}},{key:"handleBooksValueChange",value:function(e){(0,c.default)(e)||this.props.loadBooks({q:e})}},{key:"render",value:function(){return d.default.createElement(g.default,{title:"添加合集"},d.default.createElement("h1",{className:"page-title"},"添加合集"),d.default.createElement(b.default,{onSave:this.handleSave,onBooksValueChange:this.handleBooksValueChange}))}}]),t}(f.Component),v=(0,p.connect)(a,{sendNotification:_.sendNotification,resetForm:_.resetForm,loadBooks:_.loadBooks})(C);t.default=v;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"AddCollection","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/AddCollection.tsx"),__REACT_HOT_LOADER__.register(a,"mapStateToProps","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/AddCollection.tsx"),__REACT_HOT_LOADER__.register(v,"default","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/AddCollection.tsx"))}()},1274:function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(183),c=r(l),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=o(2),p=r(d),_=o(65),h=o(85),b=o(563),m=o(175),y=n(m),O=o(176),g=r(O),C=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===("undefined"==typeof Reflect?"undefined":f(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},v=function(e){function t(e){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.fields,o=t.name,n=t._booksValue,r=t._booksValues,i=(t._booksOptions,t.description),s=e.handleSubmit,a=e.onSave,l=e.onBooksValueChange,u=e.booksSearchAsOptions;return p.default.createElement("div",null,p.default.createElement(b.Input,Object.assign({placeholder:"合集名称"},o)),p.default.createElement(b.SelectizeInput,{placeholder:"选择书籍",onInputChange:function(e){l&&l(e),n.set(e)},value:n.get(),onValuesChange:r.onChange,options:u,values:r.value||[]}),p.default.createElement(b.Textarea,Object.assign({},i,{placeholder:"描述"})),p.default.createElement(b.Button,{onClick:s(function(e){var t=(0,c.default)(e,["name","description"]);t=Object.assign({},t,{items:r.value?r.value.map(function(e){return e.value}):[]}),a(t)})},"添加"))}}]),t}(d.Component);v=C([(0,g.default)({form:"addCollection",fields:["name","_booksValue","_booksValues","_booksOptions","description"]})],v);var A=function(e,t){return{routing:e.routing.locationBeforeTransitions,booksSearchAsOptions:y.booksAsOptions("search")(e)}},E=(0,_.connect)(A,{sendNotification:h.sendNotification})(v);t.default=E;!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"__decorate","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/components/AddCollectionForm.tsx"),__REACT_HOT_LOADER__.register(v,"AddCollectionForm","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/components/AddCollectionForm.tsx"),__REACT_HOT_LOADER__.register(A,"mapStateToProps","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/components/AddCollectionForm.tsx"),__REACT_HOT_LOADER__.register(E,"default","/Users/liang/Projects/readr/src/isomorphic/routes/AddCollection/components/AddCollectionForm.tsx"))}()}});