webpackJsonp([8],{13:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=o(r);t["default"]=a["default"]},14:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(30),a=o(r),i=n(13),u=o(i),l=n(15),s=o(l),c=n(16),f=o(c);t.Button=a["default"],t.Input=u["default"],t.SelectizeInput=s["default"],t.Textarea=f["default"]},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),a=o(r);t["default"]=a["default"]},16:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),a=o(r);t["default"]=a["default"]},18:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(3),p=o(f),d=n(9),h=o(d),y=function(e,t,n,o){var r,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(3>a?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},b=n(22),m=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);delete t.className;var n=this.props,o=n.error,r=n.touched,a=o&&r;return c["default"].createElement("div",{styleName:(0,h["default"])({"input-wrap":!a,"input-wrap--error":a}),className:this.props.className||""},c["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}),a&&c["default"].createElement("div",{styleName:"error-msg"},o))}}]),t}(s.Component);m=y([(0,p["default"])(b,{allowMultiple:!0})],m),t["default"]=m},19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(25),p=o(f),d=n(9),h=o(d),y=n(3),b=o(y),m=n(33),v=o(m),g=function(e,t,n,o){var r,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(3>a?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},O=n(23),k=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputWrapClick=n.handleInputWrapClick.bind(n),n}return i(t,e),u(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.setState({showOptions:!1})}},{key:"handleInputWrapClick",value:function(){this.focusInput(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,a=this.props.value||"",i=this.props.options||[],u=o.length>0?0===a.length?16:16*a.length:"100%",l=o.length>0?"":this.props.placeholder,s=(0,h["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return c["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?c["default"].createElement("label",{className:"form-label"},n):null,c["default"].createElement("div",{styleName:s,onClick:this.handleInputWrapClick,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return c["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,c["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),c["default"].createElement("input",{style:{width:u},ref:function(t){e.input=t},value:a,placeholder:l,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==i.length||r)?c["default"].createElement("ul",{styleName:"query-results"},i.map(function(t,n){return t.disabled?c["default"].createElement("li",{key:n,className:"disabled"},t.name):c["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},c["default"].createElement("span",null,t.name))}),r?c["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",c["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(s.Component);k=g([(0,b["default"])(O,{allowMultiple:!0})],k),t["default"]=k},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),c=o(s),f=n(3),p=o(f),d=function(e,t,n,o){var r,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(3>a?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},h=n(21),y=function(e){function t(e){return r(this,t),a(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},c["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);y=d([(0,p["default"])(h,{allowMultiple:!0})],y),t["default"]=y},21:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1",textarea:"textarea_1EdoS"}},22:function(e,t){e.exports={"input-wrap":"input-wrap_13Bbk","input-wrap--error":"input-wrap--error_2SJA1",input:"input_75rlN","error-msg":"error-msg_3Efzi"}},23:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},28:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.common=t.usersSelector=t.booksSelector=t.booksSearchAsOptions=t.authorsAsOptions=t.doubanBooksAsOptions=t.searchBooksSelector=t.queryAuthorsSelector=t.queryDoubanBooksSelector=void 0;var r=n(32);Object.keys(r).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(29),i=o(r),u=t.queryDoubanBooksSelector=function(e){return(0,a.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"doubanBooks",paginationName:"doubanBooks",paginationQuery:e}),function(e){return e})},l=t.queryAuthorsSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"authors",paginationName:"authors",paginationQuery:e})},s=t.searchBooksSelector=function(e){return(0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationQuery:e})};t.doubanBooksAsOptions=function(e){return(0,a.createSelector)(u(e),function(e){return e.map(function(e){return{name:e.title,value:e.id,additional:{description:e.summary,cover:e.images.large,author:e.author.join(", ")}}})})},t.authorsAsOptions=function(e){return(0,a.createSelector)(l(e),function(e){return e.map(function(e){return{name:e.name,value:e.id}})})},t.booksSearchAsOptions=function(e){return(0,a.createSelector)(s(e),function(e){return e.map(function(e){return{name:e.title,value:e.id}})})},t.booksSelector=(0,a.createSelector)((0,r.selectPaginatedEntities)({entitiesName:"books",paginationName:"books",paginationKey:"default"}),function(e){return e}),t.usersSelector=(0,r.selectPaginatedEntities)({entitiesName:"users",paginationName:"users",paginationKey:"default"});t.common=i},32:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectPaginatedEntities=t.paginationLinkSelector=void 0;var r=n(29),a=n(5),i=o(a),u=function(e){return function(t){return t.entities[e]||{}}},l=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return i["default"].get(n.pagination,e+"."+t+".ids",[])}},s=(t.paginationLinkSelector=function(e){var t=arguments.length<=1||void 0===arguments[1]?"default":arguments[1];return function(n){return i["default"].pick(i["default"].get(n.pagination,e+"."+t,{}),["next","last"])}},function(e,t){return function(n){return i["default"].get(n.pagination,[e,"query",t,"ids"],[])}});t.selectPaginatedEntities=function(e){var t=e.entitiesName,n=e.paginationName,o=e.paginationKey,a=e.paginationQuery,i=void 0;return i=a||""===a?s(n,a):l(n,o),(0,r.createSelector)(u(t),i,function(e,t){return t.map(function(t){return e[t]})})}},409:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{notification:e.components.notification,elements:e.elements,session:e.session}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),f=n(8),p=n(11),d=n(5),h=o(d),y=n(410),b=o(y),m=n(73),v=o(m),g=n(35),O=o(g),k=function(e){function t(e){r(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.handleSave=n.handleSave.bind(n),n.handleBooksValueChange=n.handleBooksValueChange.bind(n),n}return i(t,e),l(t,[{key:"handleSave",value:function(e){var t=this,n=this.props.session.user.id,o=Object.assign({},e,{creator:n});v["default"].addCollection(o).then(function(e){t.props.sendNotification("添加成功！"),t.props.reset("addCollection")},function(e){t.props.sendNotification(e.message)})}},{key:"handleBooksValueChange",value:function(e){h["default"].isEmpty(e)||this.props.fetchBooks({q:e})}},{key:"render",value:function(){return c["default"].createElement(O["default"],{title:"添加合集"},c["default"].createElement("h1",{className:"page-title"},"添加合集"),c["default"].createElement(b["default"],{onSave:this.handleSave,onBooksValueChange:this.handleBooksValueChange}))}}]),t}(s.Component);t["default"]=(0,f.connect)(u,{sendNotification:p.sendNotification,reset:p.reset,fetchBooks:p.fetchBooks})(k)},410:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=r(c),p=n(8),d=n(41),h=n(11),y=n(13),b=r(y),m=n(15),v=r(m),g=n(14),O=n(28),k=o(O),_=n(5),w=r(_),j=Object.assign||function(e){for(var t,n=1,o=arguments.length;o>n;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S=function(e,t,n,o){var r,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(i=(3>a?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},C=function(e){function t(e){return a(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.fields,n=t.name,o=t._booksValue,r=t._booksValues,a=(t._booksOptions,t.description),i=e.handleSubmit,u=e.onSave,l=e.onBooksValueChange,s=e.booksSearchAsOptions;return f["default"].createElement("div",null,f["default"].createElement(b["default"],j({placeholder:"合集名称"},n)),f["default"].createElement(v["default"],{placeholder:"选择书籍",onInputChange:function(e){l&&l(e),o.onChange(e)},value:o.value,onValuesChange:r.onChange,options:s,values:r.value||[]}),f["default"].createElement(g.Textarea,j({},a,{placeholder:"描述"})),f["default"].createElement(g.Button,{onClick:i(function(e){var t=w["default"].pick(e,["name","description"]);t=Object.assign({},t,{items:r.value?r.value.map(function(e){return e.value}):[]}),u(t)})},"添加"))}}]),t}(c.Component);C=S([(0,d.reduxForm)({form:"addCollection",fields:["name","_booksValue","_booksValues","_booksOptions","description"]})],C);var E=function(e,t){var n=w["default"].get(e.form,"addCollection._booksValue.value","");return{initialValues:t.initialData,routing:e.routing.locationBeforeTransitions,booksSearchAsOptions:k.booksSearchAsOptions(n)(e)}};t["default"]=(0,p.connect)(E,{sendNotification:h.sendNotification})(C)}});