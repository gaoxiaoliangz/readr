webpackJsonp([8],{19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),l=o(r);t["default"]=l["default"]},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=t.SelectizeInput=t.Input=t.Button=void 0;var r=n(46),l=o(r),a=n(19),u=o(a),i=n(23),s=o(i),c=n(24),f=o(c);t.Button=l["default"],t.Input=u["default"],t.SelectizeInput=s["default"],t.Textarea=f["default"]},23:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),l=o(r);t["default"]=l["default"]},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),l=o(r);t["default"]=l["default"]},26:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=n(8),y=o(d),h=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},m=n(30),b=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=this,t=Object.assign({},this.props);delete t.className;var n=this.props,o=n.error,r=n.touched,l=o&&r;return c["default"].createElement("div",{styleName:(0,y["default"])({"input-wrap":!l,"input-wrap--error":l}),className:this.props.className||""},c["default"].createElement("input",{styleName:"input",placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}),l&&c["default"].createElement("div",{styleName:"error-msg"},o))}}]),t}(s.Component);b=h([(0,p["default"])(m,{allowMultiple:!0})],b),t["default"]=b},27:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(35),p=o(f),d=n(8),y=o(d),h=n(4),m=o(h),b=n(47),v=o(b),_=n(5),g=o(_),O=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},w=n(31),k=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showOptions:!1,focus:!1,value:"",expendedOptionIndex:0},n.handleOutsideClick=n.handleOutsideClick.bind(n),n.focusInput=n.focusInput.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n}return a(t,e),u(t,[{key:"addValue",value:function(e){var t=this;this.props.useValue?(this.props.onInputChange(e.name),this.hideOptions()):(this.props.onValuesChange(this.props.values.concat(e)),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(t){return t.value===e.value?Object.assign({},t,{disabled:!0}):t})),setTimeout(function(){t.clearInputValue()},1),"undefined"!=typeof this.props.stayFocused&&this.props.stayFocused===!1||this.focusInput(),this.hideOptions())}},{key:"showOptions",value:function(){this.setState({showOptions:!0})}},{key:"hideOptions",value:function(){this.setState({showOptions:!1})}},{key:"removeValue",value:function(e){var t=[],n=void 0;e===-1?(t=this.props.values.slice(0,this.props.values.length-1),n=this.props.values[this.props.values.length-1].value):t=this.props.values.filter(function(t,o){return n=t.value,o!==e}),this.props.onOptionsChange&&this.props.onOptionsChange(this.props.options.map(function(e){return e.value===n?Object.assign({},e,{disabled:!1}):e})),this.props.onValuesChange(t)}},{key:"clearInputValue",value:function(){this.props.onInputChange("")}},{key:"handleKeyPress",value:function(e){8!==e.keyCode||this.props.value||0===this.props.values.length||this.removeValue(-1)}},{key:"handleInputChange",value:function(e){this.props.onInputChange(e.target.value),0!==(this.props.options||[]).length&&this.showOptions()}},{key:"focusInput",value:function(){this.input.focus()}},{key:"handleOutsideClick",value:function(e){(0,v["default"])(this.inputWrap,e.target)||this.inputWrap===e.target?(this.focusInput(),this.showOptions()):this.hideOptions()}},{key:"componentWillReceiveProps",value:function(e){var t=0!==(e.options||[]).length&&0===(this.props.options||[]).length;t&&this.state.focus&&this.showOptions()}},{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleOutsideClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleOutsideClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,o=t.values,r=t.onAddNewValue,l=t.omitSelectedValuesFromOptions,a=this.props.value||"",u=this.props.options||[],i=o.length>0?0===a.length?16:16*a.length:"100%",s=o.length>0?"":this.props.placeholder,f=u.filter(function(e){if(l){var t=g["default"].map(o,"value");return t.indexOf(e.value)===-1}return!0}),d=(0,y["default"])({"selectize-input":!0,"selectize-input--focus":this.state.focus,"selectize-input--empty":0===o.length});return c["default"].createElement("div",{styleName:"selectize-wrap",className:this.props.className||""},n?c["default"].createElement("label",{className:"form-label"},n):null,c["default"].createElement("div",{styleName:d,ref:function(t){e.inputWrap=t}},o.map(function(t,n){return c["default"].createElement("span",{key:n,styleName:"selectize-tag"},t.name,c["default"].createElement(p["default"],{styleName:"icon-remove",size:20,name:"close",onClick:function(t){e.removeValue(n)}}))}),c["default"].createElement("input",{style:{width:i},ref:function(t){e.input=t},value:a,placeholder:s,onBlur:function(t){e.setState({focus:!1})},onFocus:function(t){e.setState({focus:!0})},onChange:this.handleInputChange,onKeyDown:function(t){e.handleKeyPress(t)}})),this.state.showOptions&&(0!==f.length||r)?c["default"].createElement("ul",{styleName:"query-results"},f.map(function(t,n){return t.disabled?c["default"].createElement("li",{key:n,className:"disabled"},t.name):c["default"].createElement("li",{key:n,onClick:function(n){e.addValue(t),e.props.onOptionClick&&e.props.onOptionClick(t)}},c["default"].createElement("span",null,t.name))}),r?c["default"].createElement("li",{onClick:function(t){r(e.props.value)},className:"add"},"添加 ",c["default"].createElement("strong",null,this.props.value)):null):null)}}]),t}(s.Component);k=O([(0,m["default"])(w,{allowMultiple:!0})],k),k.defaultProps={omitSelectedValuesFromOptions:!0},t["default"]=k},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},y=n(29),h=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{styleName:"textarea-wrap",className:this.props.className||""},c["default"].createElement("textarea",{placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){e.props.onChange(t)},styleName:"textarea",type:this.props.type?this.props.type:"text",name:this.props.name?this.props.name:null}))}}]),t}(s.Component);h=d([(0,p["default"])(y,{allowMultiple:!0})],h),t["default"]=h},29:function(e,t){e.exports={"textarea-wrap":"textarea-wrap_Xkpj1",textarea:"textarea_1EdoS"}},30:function(e,t){e.exports={"input-wrap":"input-wrap_13Bbk","input-wrap--error":"input-wrap--error_2SJA1",input:"input_75rlN","error-msg":"error-msg_3Efzi"}},31:function(e,t){e.exports={"selectize-wrap":"selectize-wrap_3AMAi","selectize-input":"selectize-input_14bgP","selectize-input--focus":"selectize-input--focus_UnZ8B","selectize-input--empty":"selectize-input--empty_xn7Uy","query-results":"query-results_OgE2t","selectize-tag":"selectize-tag_3aD13","icon-remove":"icon-remove_1O7F_"}},64:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(1),c=o(s),f=n(4),p=o(f),d=n(8),y=o(d),h=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":i(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},m=n(70),b=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dynamicText:""},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=setInterval(function(){3===e.state.dynamicText.length?e.setState({dynamicText:""}):e.setState({dynamicText:e.state.dynamicText+"."})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.center,o=this.state.dynamicText,r=(0,y["default"])({"loading-wrap--center":n,"loading-wrap":!n});return c["default"].createElement("div",{styleName:r},c["default"].createElement("span",{styleName:"text-loading"},t+o))}}]),t}(s.Component);b=h([(0,p["default"])(m)],b),b.defaultProps={text:"加载中"},t["default"]=b},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(64),l=o(r);t["default"]=l["default"]},70:function(e,t){e.exports={"text-loading":"text-loading_3efqh","loading-wrap":"loading-wrap_htyYz","loading-wrap--center":"loading-wrap--center_3PEIh"}},554:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(1),f=r(c),p=n(13),d=n(10),y=n(65),h=r(y),m=n(20),b=n(5),v=r(b),_=n(45),g=r(_),O=n(4),w=r(O),k=n(32),j=o(k),E=function(e,t,n,o){var r,l=arguments.length,a=l<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(a=(l<3?r(a):l>3?r(t,n,a):r(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a},P=n(817),S=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bookId=e.params.id,n}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.loadBook(this.bookId)}},{key:"render",value:function(){var e=this.props.bookInfo,t=v["default"].isEmpty(e);return f["default"].createElement(g["default"],{bodyClass:"book-info",title:e.title},f["default"].createElement("div",{className:"container"},f["default"].createElement("article",{styleName:"book-info-container"},f["default"].createElement("div",{styleName:"book-detail"},f["default"].createElement("header",{styleName:"header"},t?f["default"].createElement(h["default"],null):f["default"].createElement("div",null,f["default"].createElement("div",{styleName:"left-col"},e.cover&&f["default"].createElement("div",{styleName:"book-cover"},f["default"].createElement("img",{styleName:"img",src:e.cover}))),f["default"].createElement("div",{styleName:"right-col"},f["default"].createElement("h1",{styleName:"book-name"},e.title||"无标题"),f["default"].createElement("div",{styleName:"book-author"},f["default"].createElement("strong",null,"作者：",e.authors&&e.authors.map(function(e){return e.name}).join(", ")||"未知")),f["default"].createElement("div",null,f["default"].createElement(m.Button,{styleName:"btn-read",to:"/viewer/book/"+e.id,color:"blue"},"阅读"))))),e.description&&f["default"].createElement("div",{styleName:"content"},f["default"].createElement("h2",{styleName:"desc"},"内容简介"),f["default"].createElement("p",null,e.description))))))}}]),t}(c.Component);S=E([(0,w["default"])(P,{allowMultiple:!0})],S);var C=function(e,t){var n=t.params.id;return{bookInfo:j.common.entity("books",n)(e)}};t["default"]=(0,p.connect)(C,{loadBook:d.loadBook})(S)},817:function(e,t){e.exports={"book-detail":"book-detail_2izVJ","book-info-container":"book-info-container_2FwVR",header:"header_1vo0K",content:"content_1uo-e","btn-read":"btn-read_3Euwb","left-col":"left-col_2GWeo","right-col":"right-col_2_r1p","book-name":"book-name_jLvuB","book-author":"book-author_-eVvW","book-cover":"book-cover_1QJYy",img:"img_2XZDg",desc:"desc_3yZtT"}}});