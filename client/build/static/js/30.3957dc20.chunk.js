(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[30],{1066:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(7),o=n(16),i=n(15),c=n(17),u=n(0),l=n.n(u),s=n(570),f=n(571),p=n(572),d=n(5),m=n(73),b=n(1062),h=n(591),y=n(140),v=n(568),g=n(97),O=n(10),j=n(207);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=[{id:"default",hex:"#1890ff"},{id:"cyan",hex:"#13c2c2"},{id:"geek-blue",hex:"#2f54eb"},{id:"gold",hex:"#faad14"},{id:"lime",hex:"#a0d911"},{id:"magenta",hex:"#eb2f96"},{id:"orange",hex:"#fa8c16"},{id:"polar-green",hex:"#52c41a"},{id:"purple",hex:"#722ed1"},{id:"red",hex:"#f5222d"},{id:"volcano",hex:"#fa541c"},{id:"yellow",hex:"#fadb14"}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{label:Object(d.c)("settings.colors.".concat(e.id))})}));var w,k={fields:{theme:new j.a("theme",(w="theme",Object(d.c)("settings.fields.".concat(w))),x)}},C=n(4),S=function(e){return e.settings},P=Object(C.a)([S],(function(e){return e.settings})),_={selectFindLoading:Object(C.a)([S],(function(e){return!!e.findLoading})),selectSaveLoading:Object(C.a)([S],(function(e){return!!e.saveLoading})),selectSettings:P,selectRaw:S},R=n(53),N=n(567),T=n(613),L=n(569),F=n(98);function I(){var e=Object(F.a)(["\n  .color-box {\n    float: left;\n    width: 20px;\n    height: 20px;\n    margin: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 50%;\n    background: ",";\n  }\n\n  .ant-radio-wrapper-checked .color-box::after {\n    border: solid #fff;\n    background: #fff;\n    top: 50%;\n    left: 12%;\n    margin-left: -3px;\n    margin-top: -3px;\n    height: 6px;\n    width: 6px;\n    border-radius: 100% !important;\n    position: absolute;\n    content: '';\n  }\n\n  .ant-radio-wrapper-checked .color-text {\n    color: ",";\n  }\n\n  .ant-radio {\n    display: none;\n  }\n"]);return I=function(){return e},e}var A=n(99).a.div(I(),(function(e){return e.color}),(function(e){return e.color})),B=n(579),D=k.fields,V=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).schema=new B.a(null,[D.theme]),n.handleSubmit=function(e){var t=n.props.dispatch,r=n.schema.cast(e),a=(r.id,Object(m.a)(r,["id"]));t(g.a.doSave(a))},n.handleThemeChange=function(e,t){var n=t.target.value;e.setFieldValue("theme",n)},n.initialValues=function(){var e=n.props.settings;return n.schema.initialValues(e)},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(g.a.doFind())}},{key:"renderForm",value:function(){var e=this,t=this.props.saveLoading,n={display:"block",height:"30px",lineHeight:"30px"};return l.a.createElement(N.a,null,l.a.createElement(v.b,{initialValues:this.initialValues(),validationSchema:this.schema.schema,onSubmit:this.handleSubmit,render:function(r){return l.a.createElement(b.a,{onSubmit:r.handleSubmit},l.a.createElement(b.a.Item,Object.assign({},N.b,{label:D.theme.label,help:L.a.displayableError(r,D.theme.name),validateStatus:L.a.validateStatus(r,D.theme.name)}),l.a.createElement(h.a.Group,{id:D.theme.name,onChange:function(t){return e.handleThemeChange(r,t)},value:r.values.theme},D.theme.options.map((function(e){return l.a.createElement(A,{key:e.id,color:e.hex},l.a.createElement(h.a,{style:n,value:e.id},l.a.createElement("div",{className:"color-box"},l.a.createElement("div",{className:"color-box-inner"})),l.a.createElement("span",{className:"color-text"},e.label)))})))),l.a.createElement(b.a.Item,Object.assign({className:"form-buttons"},N.c),l.a.createElement(y.a,{loading:t,type:"primary",onClick:r.handleSubmit,icon:"save"},Object(d.c)("common.save")),l.a.createElement(y.a,{disabled:t,onClick:r.handleReset,icon:"undo"},Object(d.c)("common.reset")),e.props.onCancel?l.a.createElement(y.a,{disabled:t,onClick:function(){return e.props.onCancel()},icon:"close"},Object(d.c)("common.cancel")):null))}}))}},{key:"render",value:function(){var e=this.props,t=e.findLoading,n=e.settings;return t?l.a.createElement(T.a,null):n?this.renderForm():l.a.createElement(T.a,null)}}]),t}(u.Component);var M=Object(R.c)((function(e){return{findLoading:_.selectFindLoading(e),saveLoading:_.selectSaveLoading(e),settings:_.selectSettings(e)}}))(V),$=n(561),J=n(575),U=n(83),G=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(J.a,null,this.props.hasPermissionToAuditLogs&&l.a.createElement($.a,{to:"/audit-logs?entityNames=settings"},l.a.createElement(y.a,{icon:"file-search"},Object(d.c)("auditLog.menu"))))}}]),t}(u.Component);var H=Object(R.c)((function(e){return{hasPermissionToAuditLogs:U.a.selectPermissionToRead(e)}}))(G),q=n(14),z=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{items:[[Object(d.c)("home.menu"),"/"],[Object(d.c)("settings.title")]]}),l.a.createElement(s.a,null,l.a.createElement(f.a,null,Object(d.c)("settings.title")),l.a.createElement(H,null),l.a.createElement(M,{onCancel:function(){return Object(q.b)().push("/")}})))}}]),t}(u.Component);t.default=z},567:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n(98);function a(){var e=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-right: 8px;\n    }\n  }\n"]);return a=function(){return e},e}var o=n(99).a.div(a()),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};t.a=o},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(6),a=n(7),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"displayableError",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n)return n;if(!e.touched[t])return null;var r=e.errors[t];return r?Array.isArray(r)?r[0]:r:null}},{key:"validateStatus",value:function(e,t,n){return this.displayableError(e,t,n)?"error":"success"}}]),e}()},570:function(e,t,n){"use strict";var r=n(98);function a(){var e=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return a=function(){return e},e}var o=n(99).a.div(a());t.a=o},571:function(e,t,n){"use strict";var r=n(98);function a(){var e=Object(r.a)(["\n  margin-bottom: 36px;\n"]);return a=function(){return e},e}var o=n(99).a.h1(a());t.a=o},572:function(e,t,n){"use strict";var r=n(6),a=n(7),o=n(16),i=n(15),c=n(17),u=n(0),l=n.n(u),s=n(561),f=n(618),p=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).isLink=function(e){return e.length>1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,this.props.items.map((function(t){return l.a.createElement(f.a.Item,{key:t[0]},e.isLink(t)?l.a.createElement(s.a,{to:t[1]},t[0]):t[0])})))}}]),t}(u.Component);t.a=p},575:function(e,t,n){"use strict";var r=n(98);function a(){var e=Object(r.a)(["\n  margin-bottom: 24px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return a=function(){return e},e}var o=n(99).a.div(a());t.a=o},576:function(e,t,n){var r=n(100),a=n(174),o=NaN,i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return o;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):c.test(e)?o:+e}},579:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),a=n(7),o=n(9),i=function(){function e(t,n){Object(r.a)(this,e),this.idField=t,this.fields=n,this.schema=this.buildSchema()}return Object(a.a)(e,[{key:"initialValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return this.idField&&(t[this.idField.name]=e[this.idField.name]),this.fields.forEach((function(n){t[n.name]=n.forFormInitialValue(e[n.name])})),t}},{key:"buildSchema",value:function(){var e={};return this.fields.forEach((function(t){e[t.name]=t.forForm()})),o.object().shape(e)}},{key:"cast",value:function(e){return this.schema.cast(e)}}]),e}()},613:function(e,t,n){"use strict";var r=n(6),a=n(7),o=n(16),i=n(15),c=n(17),u=n(0),l=n.n(u),s=n(592),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}},l.a.createElement(s.a,null))}}]),t}(u.Component);t.a=f},618:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n(12),i=n.n(o),c=n(28);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,p(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,a=t.getPrefixCls,o=e.props,i=o.prefixCls,c=o.separator,u=o.children,s=m(o,["prefixCls","separator","children"]),f=a("breadcrumb",i);return n="href"in e.props?r.createElement("a",l({className:"".concat(f,"-link")},s),u):r.createElement("span",l({className:"".concat(f,"-link")},s),u),u?r.createElement("span",null,n,r.createElement("span",{className:"".concat(f,"-separator")},c)):null},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.createElement(c.a,null,this.renderBreadcrumbItem)}}])&&s(n.prototype,a),o&&s(n,o),t}(r.Component);b.__ANT_BREADCRUMB_ITEM=!0,b.defaultProps={separator:"/"},b.propTypes={prefixCls:a.string,separator:a.oneOfType([a.string,a.element]),href:a.string};var h=n(48);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n,a){var o=n.indexOf(e)===n.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return o?r.createElement("span",null,i):r.createElement("a",{href:"#/".concat(a.join("/"))},i)}var x=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=g(this,O(t).apply(this,arguments))).renderBreadcrumb=function(t){var n,a=t.getPrefixCls,o=e.props,c=o.prefixCls,u=o.separator,l=o.style,s=o.className,f=o.routes,p=o.params,d=void 0===p?{}:p,m=o.children,y=o.itemRender,v=void 0===y?E:y,g=a("breadcrumb",c);if(f&&f.length>0){var O=[];n=f.map((function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(d).forEach((function(e){t=t.replace(":".concat(e),d[e])})),t&&O.push(t),r.createElement(b,{separator:u,key:e.breadcrumbName||t},v(e,d,f,O))}))}else m&&(n=r.Children.map(m,(function(e,t){return e?(Object(h.a)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),Object(r.cloneElement)(e,{separator:u,key:t})):e})));return r.createElement("div",{className:i()(s,g),style:l},n)},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props;Object(h.a)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(c.a,null,this.renderBreadcrumb)}}])&&v(n.prototype,a),o&&v(n,o),t}(r.Component);x.defaultProps={separator:"/"},x.propTypes={prefixCls:a.string,separator:a.node,routes:a.array,params:a.object,linkRender:a.func,nameRender:a.func},x.Item=b;t.a=x}}]);