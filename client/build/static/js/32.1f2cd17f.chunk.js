(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[32],{1071:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(16),o=a(15),c=a(17),l=a(0),u=a.n(l),s=a(570),p=a(571),m=a(572),f=a(1062),d=a(140),h=a(568),b=a(24),v=a(141),O=a(42),j=a(5),y=a(53),g=a(669),E=a(573),w=a(662),C=a(579),k=a(567),x=v.a.fields,P=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).schema=new C.a(x.id,[x.email,x.firstName,x.lastName,x.phoneNumber,x.avatarsProfile,x.roles]),a.handleSubmit=function(e){(0,a.props.dispatch)(b.a.doUpdateProfile(e.firstName,e.lastName,e.phoneNumber,e.avatars))},a.initialValues=function(){var e=a.props.currentUser;return a.schema.initialValues(e)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderForm",value:function(){var e=this,t=this.props.saveLoading;return u.a.createElement(k.a,null,u.a.createElement(h.b,{initialValues:this.initialValues(),validationSchema:this.schema.schema,onSubmit:this.handleSubmit,render:function(a){return u.a.createElement(f.a,{onSubmit:a.handleSubmit},u.a.createElement(w.a,{name:x.email.name,label:x.email.label}),u.a.createElement(E.b,{name:x.firstName.name,label:x.firstName.label,autoComplete:x.firstName.name,autoFocus:!0}),u.a.createElement(E.b,{name:x.lastName.name,label:x.lastName.label,autoComplete:x.lastName.name}),u.a.createElement(E.b,{name:x.phoneNumber.name,label:x.phoneNumber.label,autoComplete:x.phoneNumber.name,prefix:"+"}),u.a.createElement(g.a,{name:x.avatarsProfile.name,label:x.avatarsProfile.label,path:x.avatarsProfile.path(e.props.currentUser.authenticationUid),schema:{size:x.avatarsProfile.size},max:x.avatarsProfile.max}),u.a.createElement(f.a.Item,Object.assign({className:"form-buttons"},k.c),u.a.createElement(d.a,{loading:t,type:"primary",onClick:a.handleSubmit,icon:"save"},Object(j.c)("common.save")),u.a.createElement(d.a,{disabled:t,onClick:a.handleReset,icon:"undo"},Object(j.c)("common.reset")),e.props.onCancel?u.a.createElement(d.a,{disabled:t,onClick:function(){return e.props.onCancel()},icon:"close"},Object(j.c)("common.cancel")):null))}}))}},{key:"render",value:function(){return this.renderForm()}}]),t}(l.Component);var S=Object(y.c)((function(e){return{saveLoading:O.a.selectLoadingUpdateProfile(e),currentUser:O.a.selectCurrentUser(e)}}))(P),U=a(14),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{items:[[Object(j.c)("home.menu"),"/"],[Object(j.c)("auth.profile.title")]]}),u.a.createElement(s.a,null,u.a.createElement(p.a,null,Object(j.c)("auth.profile.title")),u.a.createElement(S,{onCancel:function(){return Object(U.b)().push("/")}})))}}]),t}(l.Component);t.default=N},567:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c}));var n=a(98);function r(){var e=Object(n.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-right: 8px;\n    }\n  }\n"]);return r=function(){return e},e}var i=a(99).a.div(r()),o={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}},c={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};t.a=i},569:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(6),r=a(7),i=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"displayableError",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(a)return a;if(!e.touched[t])return null;var n=e.errors[t];return n?Array.isArray(n)?n[0]:n:null}},{key:"validateStatus",value:function(e,t,a){return this.displayableError(e,t,a)?"error":"success"}}]),e}()},570:function(e,t,a){"use strict";var n=a(98);function r(){var e=Object(n.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var i=a(99).a.div(r());t.a=i},571:function(e,t,a){"use strict";var n=a(98);function r(){var e=Object(n.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var i=a(99).a.h1(r());t.a=i},572:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),o=a(15),c=a(17),l=a(0),u=a.n(l),s=a(561),p=a(618),m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).isLink=function(e){return e.length>1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(p.a,null,this.props.items.map((function(t){return u.a.createElement(p.a.Item,{key:t[0]},e.isLink(t)?u.a.createElement(s.a,{to:t[1]},t[0]):t[0])})))}}]),t}(l.Component);t.a=m},573:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(6),r=a(7),i=a(16),o=a(15),c=a(17),l=a(0),u=a.n(l),s=a(1062),p=a(1063),m=a(567),f=a(569),d=a(568),h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.name,n=e.form,r=e.hint,i=e.layout,o=e.size,c=e.type,l=e.placeholder,m=e.autoFocus,d=e.autoComplete,h=e.prefix,b=e.formItemProps,v=e.inputProps,O=e.errorMessage,j=e.required;return u.a.createElement(s.a.Item,Object.assign({},i,{label:t,required:j,validateStatus:f.a.validateStatus(n,a,O),help:f.a.displayableError(n,a,O)||r},b),u.a.createElement(p.a,Object.assign({id:a,type:c,onChange:n.handleChange,onBlur:n.handleBlur,value:n.values[a],size:o||void 0,placeholder:l||void 0,autoFocus:m||!1,autoComplete:d||void 0,prefix:h||void 0},v)))}}]),t}(l.Component);h.defaultProps={layout:m.b,type:"text",required:!1};var b=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(d.a,{name:this.props.name,render:function(t){var a=t.form;return u.a.createElement(h,Object.assign({},e.props,{form:a}))}})}}]),t}(l.Component);t.b=b},579:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(6),r=a(7),i=a(9),o=function(){function e(t,a){Object(n.a)(this,e),this.idField=t,this.fields=a,this.schema=this.buildSchema()}return Object(r.a)(e,[{key:"initialValues",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return this.idField&&(t[this.idField.name]=e[this.idField.name]),this.fields.forEach((function(a){t[a.name]=a.forFormInitialValue(e[a.name])})),t}},{key:"buildSchema",value:function(){var e={};return this.fields.forEach((function(t){e[t.name]=t.forForm()})),i.object().shape(e)}},{key:"cast",value:function(e){return this.schema.cast(e)}}]),e}()},662:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),o=a(15),c=a(17),l=a(0),u=a.n(l),s=a(1062),p=a(567),m=a(568),f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.name,n=e.form,r=e.layout;return u.a.createElement(s.a.Item,Object.assign({},r,{label:t}),u.a.createElement("strong",null,n.values[a]))}}]),t}(l.Component);f.defaultProps={layout:p.b};var d=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(m.a,{name:this.props.name,render:function(t){var a=t.form;return u.a.createElement(f,Object.assign({},e.props,{form:a}))}})}}]),t}(l.Component);t.a=d},669:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),o=a(15),c=a(17),l=a(1062),u=a(0),s=a.n(u),p=a(567),m=a(65),f=a(10),d=a(38),h=a(718),b=a(697),v=a(2),O=a.n(v),j=a(3),y=a(658),g=a(5),E=a(661),w=a.n(E),C=a(66),k=a(228),x=a.n(k),P=a(123);function S(e){if(!e)return null;return/(?:\.([^.]+))?$/.exec(e)[1]}var U=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"validate",value:function(e,t){if(t){if(t.image&&!e.type.startsWith("image"))throw new Error(Object(g.c)("fileUploader.image"));if(t.size&&e.size>t.size)throw new Error(Object(g.c)("fileUploader.size",w()(t.size)));var a=S(e.name);if(t.formats&&!t.formats.includes(a))throw new Error(Object(g.c)("fileUploader.formats",t.formats.join("/")))}}},{key:"uploadFromRequest",value:function(e,t,a,n,r){try{this.validate(t.file,a)}catch(u){return t.onError(u),void r(u)}var i=S(t.file.name),o=y(),c="".concat(o,".").concat(i),l="".concat(e,"/").concat(c);this.uploadToServer(t.file,e,c).then((function(e){t.onSuccess(),n({id:o,name:t.file.name,sizeInBytes:t.file.size,privateUrl:l,publicUrl:e,new:!0})})).catch((function(e){t.onError(e),r(e)}))}},{key:"uploadToServer",value:function(){var e=Object(j.a)(O.a.mark((function e(t,a,n){var r,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get();case 2:return r=e.sent,(i=new FormData).append("file",t),i.append("filename",n),e.next=8,x.a.post("".concat(P.default.backendUrl,"/upload/").concat(a),i,{headers:{"Content-Type":"multipart/form-data",authorization:r?"Bearer ".concat(r):""}});case 8:return o="".concat(a,"/").concat(n),e.abrupt("return","".concat(P.default.backendUrl,"/download?privateUrl=").concat(o));case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),N=a(8),F=a(98);function z(){var e=Object(F.a)(["\n  .ant-upload-select-picture-card i {\n    font-size: 32px;\n    color: #999;\n  }\n\n  .ant-upload-select-picture-card .ant-upload-text {\n    margin-top: 8px;\n    color: #666;\n  }\n\n  .ant-upload-list-item-info > span {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ant-upload-list-item-thumbnail > img {\n    object-fit: cover;\n  }\n"]);return z=function(){return e},e}var I=a(99).a.div(z());function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!1,previewVisible:!1,previewImage:""},a.schema=function(){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.schema,{image:!0})},a.value=function(){var e=a.props.value;return e?Array.isArray(e)?e:[e]:[]},a.fileList=function(){return a.value().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.publicUrl}}))},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){a.setState({previewImage:e.url,previewVisible:!0})},a.handleSuccess=function(e){a.setState({loading:!1}),a.props.onChange([].concat(Object(m.a)(a.value()),[e]))},a.handleError=function(e){a.setState({loading:!1}),N.a.showMessage(e)},a.handleRemove=function(e){a.props.onChange(a.value().filter((function(t){return t.id!==e})))},a.handleChange=function(e){e&&e.file&&e.file.status&&("removed"===e.file.status?a.handleRemove(e.file.uid):a.setState({loading:!0}))},a.validate=function(e){try{return U.validate(e,a.schema()),!0}catch(t){return a.handleError(t),!1}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.previewVisible,n=t.previewImage,r=this.props.max,i=s.a.createElement("div",null,s.a.createElement(d.a,{type:this.state.loading?"loading":"plus"}),s.a.createElement("div",{className:"ant-upload-text"},Object(g.c)("fileUploader.upload")));return s.a.createElement(I,null,s.a.createElement(h.a,{accept:"image/*",fileList:this.fileList(),listType:"picture-card",customRequest:function(t){U.uploadFromRequest(e.props.path,t,e.schema(),(function(t){e.handleSuccess(t)}),(function(t){e.handleError(t)}))},onChange:this.handleChange,onPreview:this.handlePreview,beforeUpload:this.validate},r&&this.fileList().length>=r?null:i),s.a.createElement(b.a,{visible:a,footer:null,onCancel:this.handleCancel},s.a.createElement("img",{alt:n,style:{width:"100%"},src:n})))}}]),t}(u.Component),L=a(569),A=a(568),R=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.name,n=e.form,r=e.hint,i=e.layout,o=e.path,c=e.schema,u=e.max,p=e.formItemProps,m=e.inputProps,f=e.required;return s.a.createElement(l.a.Item,Object.assign({},i,{label:t,required:f,validateStatus:L.a.validateStatus(n,a),help:L.a.displayableError(n,a)||r},p),s.a.createElement(q,Object.assign({path:o,schema:c,value:n.values[a],onChange:function(e){return n.setFieldValue(a,e)},max:u},m)))}}]),t}(u.Component);R.defaultProps={layout:p.b,max:void 0,required:!1};var D=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(A.a,{name:this.props.name,render:function(t){var a=t.form;return s.a.createElement(R,Object.assign({},e.props,{form:a}))}})}}]),t}(u.Component);t.a=D}}]);