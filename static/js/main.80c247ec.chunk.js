(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{34:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(20),i=s.n(a),r=s(4),l=s(2),o=s(22),j=s(8),d=s.n(j),u=s(0),b=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(u.jsxs)("nav",{className:"navbar is-light mb-3",children:[Object(u.jsxs)("div",{className:"navbar-brand",children:[Object(u.jsx)(r.b,{className:"navbar-item",to:"/",children:"Blog"}),Object(u.jsxs)("div",{className:d()("navbar-burger",s?"is-active":null),onClick:function(){return n(!s)},children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]})]}),Object(u.jsxs)("div",{className:d()("navbar-menu",s?"is-active":null),onClick:function(){return n(!s)},children:[Object(u.jsx)(r.b,{className:"navbar-item",to:"/posts",children:"Posts"}),Object(u.jsx)(r.b,{className:"navbar-item",to:"/users",children:"Users"}),Object(u.jsx)(r.b,{className:"navbar-item",to:"/albums",children:"Albums"})]})]})},m=s(11),h=s(12),p=s(14),O=s(13),x=function(e){var t=e.post,s=e.user,c=e.details;return Object(u.jsxs)("div",{className:d()("card",c?"":null),children:[Object(u.jsx)("div",{className:"card-header",children:Object(u.jsxs)("p",{className:"card-header-title",children:[Object(u.jsx)("span",{className:"is-uppercase is-size-3",children:t.title?t.title.slice(0,1):null}),c?t.title?t.title.slice(1,t.title.length):null:t.title?t.title.slice(1,10)+"...":null]})}),Object(u.jsxs)("p",{className:"card-content",children:[Object(u.jsx)("span",{className:"is-uppercase is-size-3",children:t.body?t.body.slice(0,1):null}),c?t.body?t.body.slice(1,t.body.length):null:t.body?t.body.slice(1,50)+"...":null,"."]}),Object(u.jsx)("div",{className:"card-footer",children:c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(r.b,{to:"/"+s.id+"/"+s.username+"/posts",className:"card-footer-item",children:["By ",s.username]}),Object(u.jsx)("p",{className:"card-footer-item",children:s.email})]}):Object(u.jsxs)("p",{className:"card-footer-item",children:["By ",s.username]})})]})},f=function(e){var t=e.comment;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:Object(u.jsxs)("p",{className:"card-header-title notification is-primary",children:["By ",t.email]})}),Object(u.jsxs)("p",{className:"card-content",children:[Object(u.jsx)("span",{className:"is-uppercase is-size-3",children:t.body.slice(0,1)}),t.body.slice(1,t.body.length),"."]})]})},v="https://jsonplaceholder.typicode.com/posts/",N=function(e){Object(p.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(m.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={id:e.props.id,details:e.props.details,post:[],user:[],comments:[]},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch(v+this.state.id).then((function(t){return t.json().then((function(t){e.setState({post:t}),fetch("https://jsonplaceholder.typicode.com/users/"+e.state.post.userId).then((function(t){return t.json().then((function(t){e.setState({user:t})}))}))}))})),this.state.details&&fetch(v+this.state.id+"/comments").then((function(t){return t.json().then((function(t){return e.setState({comments:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.post,s=e.user,c=e.comments,n=e.details;return Object(u.jsx)(u.Fragment,{children:n?Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsx)(x,{post:t,user:s,details:n}),Object(u.jsxs)("div",{className:"mt-4",children:[Object(u.jsxs)("div",{className:"notification is-warning",children:[c.length," comments"]}),c.map((function(e){return Object(u.jsx)(f,{comment:e},e.id)}))]})]}):Object(u.jsx)(r.b,{to:"/post/"+t.id,className:"column is-one-third",children:Object(u.jsx)(x,{post:t,user:s})})})}}]),s}(n.a.Component),y=function(e){var t=e.user;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:Object(u.jsx)("p",{className:"card-header-title",children:t.username})}),Object(u.jsxs)("div",{className:"card-footer",children:[Object(u.jsx)("p",{className:"card-footer-item",children:t.email}),Object(u.jsxs)(r.b,{className:"card-footer-item",to:"/"+t.id+"/"+t.username+"/posts",children:[t.username+"'s"," posts"]})]})]})},g=function(e){Object(p.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(m.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={data:[],sites:0,site:0},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.url).then((function(t){return t.json().then((function(t){return e.setState({data:t,sites:t.length/10})}))}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.site,c=t.sites,n=this.state.data.slice(10*s,10*s+10),a=this.props.type;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"pagination is-centered is-small",children:[Object(u.jsx)("ul",{className:"pagination-list"}),Array(c).fill(1).map((function(t,c){return Object(u.jsx)("li",{className:d()("pagination-link",s===c?"is-current":null),onClick:function(){return e.setState({site:c})},children:c+1},c)}))]}),Object(u.jsx)("div",{className:"columns is-multiline mt-1",children:"posts"===a?n.map((function(e){return Object(u.jsx)(N,{id:e.id},e.id)})):"users"===a?n.map((function(e){return Object(u.jsx)("div",{className:"column is-half",children:Object(u.jsx)(y,{user:e})},e.id)})):null})]})}}]),s}(n.a.Component),k=function(){return Object(u.jsx)(g,{url:"https://jsonplaceholder.typicode.com/posts",type:"posts"})},S=function(e){var t=e.match.params.id;return Object(u.jsx)("div",{className:"columns",children:Object(u.jsx)(N,{id:t,details:!0})})},w=function(e){var t=e.match.params,s=t.user,c="https://jsonplaceholder.typicode.com/users/"+t.id+"/posts";return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"notification is-info",children:["Posts by ",s]}),Object(u.jsx)(g,{url:c,type:"posts"})]})},B=function(){return Object(u.jsx)(g,{url:"https://jsonplaceholder.typicode.com/users",type:"users"})},C=function(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(l.a,{to:"/posts"})}}),Object(u.jsx)(l.b,{path:"/blog",render:function(){return Object(u.jsx)(l.a,{to:"/posts"})}}),Object(u.jsx)(l.b,{path:"/posts",component:k}),Object(u.jsx)(l.b,{path:"/post/:id",component:S}),Object(u.jsx)(l.b,{path:"/:id/:user/posts",component:w}),Object(u.jsx)(l.b,{path:"/users",component:B})]})})]})};s(33);i.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.80c247ec.chunk.js.map