webpackJsonp([1],{25:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(44),i=o(r),a=n(32),s=o(a),l=n(45),u=o(l),c=n(33),f=o(c);t.Button=i["default"],t.Input=s["default"],t.SelectizeInput=u["default"],t.Textarea=f["default"]},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(46),i=o(r);t["default"]=i["default"]},32:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props.className?"input-wrap "+this.props.className:"input-wrap",n=Object.assign({},this.props);return delete n.className,u["default"].createElement("div",{className:t},u["default"].createElement("input",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(l.Component);t["default"]=c},33:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props.className?"textarea-wrap "+this.props.className:"textarea-wrap",n=Object.assign({},this.props);return delete n.className,u["default"].createElement("div",{className:t},u["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(l.Component);t["default"]=c},43:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(8),f=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props.className?"btn "+this.props.className:"btn",n=this.props.size?this.props.size:"medium",o=this.props.isFluid?this.props.isFluid:!1,r=this.props.color?this.props.color:null,i=void 0;"small"===n?t+=" btn-small":"large"===n?t+=" btn-large":"medium"===n?t+=" btn-medium":console.error("Unsupport size!"),r&&(t+=" btn-"+r),o&&(t+=" btn-fluid"),i=this.props.to?function(t){t.preventDefault(),c.browserHistory.push(e.props.to)}:function(t){t.preventDefault(),e.props.onClick&&e.props.onClick(t)};var a=Object.assign({},this.props,{className:t},{onClick:i});return delete a.to,delete a.color,delete a.size,delete a.isFluid,u["default"].createElement("button",a,this.props.children)}}]),t}(l.Component);t["default"]=f},44:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),i=o(r);t["default"]=i["default"]},45:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(26),f=o(c),p=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.hideOptions=n.hideOptions.bind(n),n.focusInput=n.focusInput.bind(n),n.showOptions=n.showOptions.bind(n),n}return a(t,e),s(t,[{key:"addValue",value:function(e){this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),this.clearInputValue(),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.hideOptions()}},{key:"removeValue",value:function(e){var t=[],n=void 0;-1===e?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||this.removeValue(-1)}},{key:"focusInput",value:function(){this.input.focus()}},{key:"hideOptions",value:function(){this.setState({showOptions:!1})}},{key:"showOptions",value:function(e){e.stopPropagation(),this.setState({showOptions:!0})}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.hideOptions)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.hideOptions)}},{key:"render",value:function(){var e=this,t=this.props.label?this.props.label:null,n=this.props.value?this.props.value:"",o=this.props.values,r=this.props.options?this.props.options:[],i=o.length>0?0===n.length?16:16*n.length:"100%",a=o.length>0?"":this.props.placeholder,s="selectize-input"+(this.state.focus===!0?" focus":"")+(0===o.length?" empty":""),l=this.props.addNewValue?this.props.addNewValue:void 0;return u["default"].createElement("div",{className:("selectize-input-wrap "+(this.props.className?this.props.className:"")).trim()},t?u["default"].createElement("label",{className:"form-label"},t):null,u["default"].createElement("div",{className:s,onClick:function(t){e.focusInput(),e.showOptions(t)}},o.map(function(t,n){return u["default"].createElement("span",{key:n,className:"selectize-tag"},t.name,u["default"].createElement(f["default"],{size:"small",name:"close",onClick:function(t){e.removeValue(n)}}))}),u["default"].createElement("input",{style:{width:i},ref:function(t){e.input=t},value:n,placeholder:a,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:function(t){e.props.onInputChange(t.target.value)},onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions?u["default"].createElement("ul",{className:"selectize-query-results"},r.map(function(t,n){return t.disabled?u["default"].createElement("li",{key:n,className:"disabled"},t.name):u["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},u["default"].createElement("span",null,t.name))}),l?u["default"].createElement("li",{onClick:function(t){e.props.onAddNewValue(e.props.value)},className:"add"},"添加 ",u["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(l.Component);t["default"]=p},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n(1),c=o(u),f=n(51),p=o(f),h=n(47),d=o(h),m=n(18),b=o(m),_=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":l(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=n(52),v=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.name,t=this.props.onClick,n=this.props.size,o=(0,p["default"])("icon","icon-"+e,n,this.props.className);return"undefined"==typeof d["default"][e]&&console.error("Icon name (%s) not found! ",e),c["default"].createElement("span",{styleName:"icon",className:o,onClick:t},c["default"].createElement("svg",{styleName:"svg-shape",style:{fill:"currentColor"}},c["default"].createElement("path",{d:d["default"][e]})))}}]),t}(u.Component);v=_([(0,b["default"])(y,{allowMultiple:!0})],v),t["default"]=v},47:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={close:"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z",star:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z",users:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",folder:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",database:"M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z",statistics:"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z",books:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}},50:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=void 0;return e.forEach(function(e){t=e.className}),t}function l(e){"undefined"!=typeof e?document.body.className=e:document.body.removeAttribute("class")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=o(c),p=n(67),h=o(p),d=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return f["default"].createElement("div",{className:"react-body-class hidden"})}}]),t}(c.Component);t["default"]=(0,h["default"])(s,l)(d)},51:function(e,t,n){var o,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(o=[],r=function(){return n}.apply(t,o),!(void 0!==r&&(e.exports=r)))}()},52:function(e,t){e.exports={"svg-shape":"___icon__svg-shape__2Xc3v",icon:"___icon__icon__1gYYs"}},202:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(25),f=function(e){function t(e){return r(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.author,t=this.props.title,n=this.props.description,o=this.props.bookId;return u["default"].createElement("div",{className:"book-info-popup popup"},u["default"].createElement("h2",{className:"title"},t),u["default"].createElement("p",{className:"author"},e),u["default"].createElement(c.Button,{color:"blue",to:"/viewer/book/"+o},"阅读"),u["default"].createElement("div",{className:"description"},u["default"].createElement("p",null,n)))}}]),t}(l.Component);t["default"]=f},203:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(8),f=n(204),p=o(f),h=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.title,t=this.props.moreLink?this.props.moreLink:null;return u["default"].createElement("div",{className:"book-list-section"},this.props.title&&u["default"].createElement("h2",{className:"section-title"},e),t?u["default"].createElement(c.Link,{className:"more",to:t},"查看更多"):null,u["default"].createElement(p["default"],{bookEntities:this.props.bookEntities}))}}]),t}(l.Component);t["default"]=h},204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(205),f=o(c),p=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return u["default"].createElement("ul",{className:"book-list clearfix"},this.props.bookEntities?this.props.bookEntities.map(function(e,t){var n=e.title,o=e.author,r=e.description,i=e.cover;return u["default"].createElement(f["default"],{id:e.id,key:t,title:n,author:o.map(function(e){return e.refData?e.refData.name:""}).join(", "),description:r,cover:i})}):null)}}]),t}(l.Component);t["default"]=p},205:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(8),f=n(202),p=o(f),h=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return u["default"].createElement("li",{className:"book"},u["default"].createElement(c.Link,{to:"/book/"+this.props.id},u["default"].createElement("div",{className:"book-cover"},u["default"].createElement("img",{src:this.props.cover})),u["default"].createElement("div",{className:"book-meta"},u["default"].createElement("span",{title:this.props.title,className:"book-name"},this.props.title),u["default"].createElement("span",{className:"book-author"},this.props.author))),u["default"].createElement(p["default"],{bookId:this.props.id,title:this.props.title,author:this.props.author,description:this.props.description}))}}]),t}(l.Component);t["default"]=h},208:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),c=n(8),f=function(e){function t(){return r(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.list,t=this.props.title,n=this.props.moreLink?this.props.moreLink:null;return u["default"].createElement("div",{className:"candy-box"},u["default"].createElement("h3",{className:"box-title"},t),n?u["default"].createElement(c.Link,{to:n},"查看更多"):null,u["default"].createElement("ul",null,e.map(function(e,t){return u["default"].createElement("li",{key:t},u["default"].createElement(c.Link,{to:e.link},e.name))})))}}]),t}(l.Component);t["default"]=f},220:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return{userBooks:[],newestBooks:e.pagination.books.newest?e.pagination.books.newest.ids.map(function(t){return e.entities.books[t]}):[],session:e.session,collection:function(){for(var t in e.entities.bookCollections)return e.entities.bookCollections[t]}()}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=n(1),f=o(c),p=n(9),h=n(8),d=n(13),m=n(203),b=o(m),_=n(208),y=o(_),v=n(50),O=o(v),w=n(25),g=n(18),k=o(g),E=function(e,t,n,o){var r,i=arguments.length,a=3>i?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(3>i?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=n(241),P=function(e){function t(e){r(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={showRecentReading:!1},n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks(),this.props.fetchCollections()}},{key:"componentWillReceiveProps",value:function(e){this.props.session.isFetching&&!e.session.isFetching&&"visitor"!==e.session.user.role&&this.setState({showRecentReading:!0})}},{key:"render",value:function(){var e=this.props.newestBooks,t=this.props.collection?this.props.collection.name:"",n=this.props.collection?this.props.collection.items.filter(function(e){return Boolean(e.refData)}).map(function(e){return e.refData}):[];return f["default"].createElement("div",null,f["default"].createElement(O["default"],{className:"home"}),f["default"].createElement(w.Button,{onClick:this.props.sendNotification.bind(this,"测试22222","success",0)},"测试 Alert"),f["default"].createElement("div",{className:"row"},"visitor"!==this.props.session.user.role||this.props.session.isFetching?null:f["default"].createElement("div",{className:"hero-image"},f["default"].createElement("div",{className:"logo"},"Readr"),f["default"].createElement("div",{className:"page-title"},"新一代 web 阅读体验!!!!"),f["default"].createElement(w.Button,{to:"/signup"},"注册")),f["default"].createElement("div",{className:"col-md-8"},f["default"].createElement(b["default"],{bookEntities:e,title:"新书速递"}),f["default"].createElement(b["default"],{bookEntities:n,title:t,moreLink:"/collections/"+(this.props.collection?this.props.collection.id:"")}),f["default"].createElement(h.Link,{className:"view-more",to:"/collections"},"浏览更多书单")),f["default"].createElement("div",{className:"col-md-4"},this.state.showRecentReading?f["default"].createElement(y["default"],{title:"最近阅读",list:[]}):null)))}}],[{key:"fetchData",value:function(e){var t=e.store;return t.dispatch((0,d.fetchBooks)())}}]),t}(c.Component);P=E([(0,k["default"])(j)],P),t["default"]=(0,p.connect)(s,{fetchBooks:d.fetchBooks,fetchCollections:d.fetchCollections,sendNotification:d.sendNotification})(P)},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(220),i=o(r);t["default"]=i["default"]},238:function(e,t,n){t=e.exports=n(127)(),t.push([e.id,"body.___home__home__1rfkZ #___home__root__1Iiyv{overflow:hidden}body.___home__home__1rfkZ .___home__branding__3wlzn{margin-bottom:10px}body.___home__home__1rfkZ .___home__view-more__6U1rn{font-size:1rem;font-weight:700;margin:30px 0;display:inline-block}body.___home__home__1rfkZ .___home__hero-image__2RanL{text-align:center;height:500px}body.___home__home__1rfkZ .___home__hero-image__2RanL .___home__logo__WLoGm{text-align:center;padding-top:150px;font-size:1.2rem}body.___home__home__1rfkZ .___home__hero-image__2RanL .___home__page-title__2gls0{text-align:center;margin:0;margin-bottom:30px;font-weight:400;font-size:2.2rem}body.___home__home__1rfkZ .___home__hero-image__2RanL .___home__btn__18gV5{margin:0 auto}",""]),t.locals={home:"___home__home__1rfkZ",root:"___home__root__1Iiyv",branding:"___home__branding__3wlzn","view-more":"___home__view-more__6U1rn","hero-image":"___home__hero-image__2RanL",logo:"___home__logo__WLoGm","page-title":"___home__page-title__2gls0",btn:"___home__btn__18gV5"}},241:function(e,t,n){var o=n(238);"string"==typeof o&&(o=[[e.id,o,""]]);n(426)(o,{sourceMap:!0});o.locals&&(e.exports=o.locals)}});