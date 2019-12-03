(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[31],{1070:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),i=n(16),c=n(15),o=n(17),s=n(0),u=n.n(s),l=n(570),m=n(571),p=n(572),d=n(148),b=n(613),f=n(625),h=n(689),v=d.a.fields,j=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"renderView",value:function(){var e=this.props.record;return u.a.createElement(f.a,null,u.a.createElement(h.a,{label:v.id.label,value:v.id.forView(e.id)}),u.a.createElement(h.a,{label:v.name.label,value:v.name.forView(e.name)}),u.a.createElement(h.a,{label:v.email.label,value:v.email.forView(e.email)}),u.a.createElement(h.a,{label:v.password.label,value:v.password.forView(e.password)}),u.a.createElement(h.a,{label:v.points.label,value:v.points.forView(e.points)}),u.a.createElement(h.a,{label:v.createdAt.label,value:v.createdAt.forView(e.createdAt)}),u.a.createElement(h.a,{label:v.updatedAt.label,value:v.updatedAt.forView(e.updatedAt)}))}},{key:"render",value:function(){var e=this.props,t=e.record;return e.loading||!t?u.a.createElement(b.a,null):this.renderView()}}]),t}(s.Component),O=n(5),g=n(164),y=n(53),E=n(4),w=function(e){return e.username.view},C=Object(E.a)([w],(function(e){return e.record})),x={selectLoading:Object(E.a)([w],(function(e){return!!e.loading})),selectRecord:C,selectRaw:w},T=n(140),k=n(671),P=n(561),L=n(575),A=n(695),D=n(694),V=n(95),I=n(83),R=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).id=function(){return n.props.match.params.id},n.doDestroy=function(){(0,n.props.dispatch)(V.a.doDestroy(n.id()))},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.hasPermissionToEdit,a=t.hasPermissionToAuditLogs,r=t.hasPermissionToDestroy,i=t.destroyLoading;return u.a.createElement(L.a,null,n&&u.a.createElement(P.a,{to:"/username/".concat(this.id(),"/edit")},u.a.createElement(T.a,{type:"primary",icon:"edit"},Object(O.c)("common.edit"))),r&&u.a.createElement(k.a,{title:Object(O.c)("common.areYouSure"),onConfirm:function(){return e.doDestroy()},okText:Object(O.c)("common.yes"),cancelText:Object(O.c)("common.no")},u.a.createElement(T.a,{type:"primary",icon:"delete",disabled:i},Object(O.c)("common.destroy"))),a&&u.a.createElement(P.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(this.id()))},u.a.createElement(T.a,{icon:"file-search"},Object(O.c)("auditLog.menu"))))}}]),t}(s.Component);var U=Object(y.c)((function(e){return{hasPermissionToAuditLogs:I.a.selectPermissionToRead(e),hasPermissionToEdit:A.a.selectPermissionToEdit(e),hasPermissionToDestroy:A.a.selectPermissionToDestroy(e),destroyLoading:D.a.selectLoading(e)}}))(R),F=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.match;t(g.a.doFind(n.params.id))}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{items:[[Object(O.c)("home.menu"),"/"],[Object(O.c)("entities.username.menu"),"/username"],[Object(O.c)("entities.username.view.title")]]}),u.a.createElement(l.a,null,u.a.createElement(m.a,null,Object(O.c)("entities.username.view.title")),u.a.createElement(U,{match:this.props.match}),u.a.createElement(j,{loading:this.props.loading,record:this.props.record})))}}]),t}(s.Component);t.default=Object(y.c)((function(e){return{loading:x.selectLoading(e),record:x.selectRecord(e)}}))(F)},570:function(e,t,n){"use strict";var a=n(98);function r(){var e=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"]);return r=function(){return e},e}var i=n(99).a.div(r());t.a=i},571:function(e,t,n){"use strict";var a=n(98);function r(){var e=Object(a.a)(["\n  margin-bottom: 36px;\n"]);return r=function(){return e},e}var i=n(99).a.h1(r());t.a=i},572:function(e,t,n){"use strict";var a=n(6),r=n(7),i=n(16),c=n(15),o=n(17),s=n(0),u=n.n(s),l=n(561),m=n(618),p=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).isLink=function(e){return e.length>1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(m.a,null,this.props.items.map((function(t){return u.a.createElement(m.a.Item,{key:t[0]},e.isLink(t)?u.a.createElement(l.a,{to:t[1]},t[0]):t[0])})))}}]),t}(s.Component);t.a=p},575:function(e,t,n){"use strict";var a=n(98);function r(){var e=Object(a.a)(["\n  margin-bottom: 24px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=n(99).a.div(r());t.a=i},613:function(e,t,n){"use strict";var a=n(6),r=n(7),i=n(16),c=n(15),o=n(17),s=n(0),u=n.n(s),l=n(592),m=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{style:{width:"100%",margin:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}},u.a.createElement(l.a,null))}}]),t}(s.Component);t.a=m},625:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(98);function r(){var e=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]);return r=function(){return e},e}var i=n(99).a.div(r()),c={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i},689:function(e,t,n){"use strict";var a=n(6),r=n(7),i=n(16),c=n(15),o=n(17),s=n(1062),u=n(0),l=n.n(u),m=n(625),p=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.props.value||0===this.props.value||!1===this.props.value?l.a.createElement(s.a.Item,Object.assign({},m.b,{label:this.props.label}),l.a.createElement("strong",null,this.props.prefix?"".concat(this.props.prefix," "):"",this.props.value)):null}}]),t}(u.Component);t.a=p},694:function(e,t,n){"use strict";var a=n(4),r=Object(a.a)([function(e){return e.username.destroy}],(function(e){return!!e.loading}));t.a={selectLoading:r}},695:function(e,t,n){"use strict";var a=n(4),r=n(42),i=n(51),c=n(143),o=Object(a.a)([r.a.selectCurrentUser],(function(e){return new i.a(e).match(c.a.values.usernameRead)})),s=Object(a.a)([r.a.selectCurrentUser],(function(e){return new i.a(e).match(c.a.values.usernameEdit)})),u=Object(a.a)([r.a.selectCurrentUser],(function(e){return new i.a(e).match(c.a.values.usernameCreate)})),l=Object(a.a)([r.a.selectCurrentUser],(function(e){return new i.a(e).match(c.a.values.usernameImport)})),m={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:u,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentUser],(function(e){return new i.a(e).match(c.a.values.usernameDestroy)})),selectPermissionToImport:l};t.a=m}}]);