(this["webpackJsonptest-state"]=this["webpackJsonptest-state"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(14),o=n.n(i),s=(n(25),n(26),n.p+"static/media/logo.aa2884d4.svg"),l=n.p+"static/media/notification.e7bfbd67.svg",u=n.p+"static/media/profile.51609603.svg",d=n.p+"static/media/chat.f9636800.svg",p=n.p+"static/media/chevron-bottom.920b173a.svg",j=n(4),x=n(5);function h(){var t=Object(j.a)(["\nborder-radius: 50%;\nwidth: 48px;"]);return h=function(){return t},t}var m=x.a.div(h());var b=function(t){var e=t.url;return Object(a.jsx)(m,{className:"navbar-item logo",children:Object(a.jsx)("img",{src:e,alt:"logo"})})};function g(){var t=Object(j.a)(["\nborder-radius: 24px;\nmin-width: 60px;\npadding: 0 16px"]);return g=function(){return t},t}var v=x.a.div(g());var f=function(t){var e=t.text;return Object(a.jsx)(v,{className:"navbar-item ".concat("Home"===e&&"active"),children:e})};var O=function(){return Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{className:"navigation",children:[Object(a.jsx)(b,{url:s}),Object(a.jsx)(f,{text:"Home"}),Object(a.jsx)(f,{text:"Today"}),Object(a.jsx)(f,{text:"Following"})]}),Object(a.jsx)("div",{className:"navigation search",children:Object(a.jsx)("input",{type:"text",placeholder:"search"})}),Object(a.jsxs)("div",{className:"navigation",children:[Object(a.jsx)(b,{url:l}),Object(a.jsx)(b,{url:d}),Object(a.jsx)(b,{url:u})]}),Object(a.jsx)("div",{className:"navigation dropdown",children:Object(a.jsx)(b,{url:p})})]})},y=n(10),w=n.n(y),N=n(18),S=n(11),T=n(12),A=n(3),C=n(19),E=n.n(C);function F(t){var e=t.url,n=t.alt,c=t.index,r=t.maxElement;console.log({index:c});var i=function(t){return t?Number(t.replace("px","")):0};return Object(a.jsx)(E.a,{offset:200,placeholder:Object(a.jsx)("img",{style:{width:"252px",height:"300px"},src:"https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png",alt:"plcaeholder"}),children:Object(a.jsx)("img",{style:{width:"252px"},src:e,alt:n,onLoad:function(){var t=document.querySelectorAll(".image-container")[c-r+1],e=document.querySelectorAll(".image-container")[c];if(t){var n=t.querySelector("img");function a(){var a=n.height+i(t.style.marginTop)-e.offsetHeight+10;e.style.marginTop="".concat(a,"px"),e.style.height=e.querySelector("img").height+"px"}n.complete?a():n.addEventListener("load",a)}}})})}var k=r.a.memo(F),q="SET_PHOTOS",D="ADD_PAGE",H={photos:[],page:0},L=function(t,e){switch(e.type){case q:return Object(A.a)(Object(A.a)({},t),{},{photos:[].concat(Object(T.a)(t.photos),Object(T.a)(e.payload))});case D:return Object(A.a)(Object(A.a)({},t),{},{page:t.page+1});default:return t}};var P=function(){var t=Object(c.useReducer)(L,H),e=Object(S.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(Math.floor(window.outerWidth/260)),o=Object(S.a)(i,1)[0];return Object(c.useEffect)((function(){(function(){var t=Object(N.a)(w.a.mark((function t(e){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=30");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r({type:q,payload:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(n.page)}),[n.page,o]),Object(a.jsxs)("div",{className:"main",style:{position:"relative",maxWidth:"".concat(260*o,"px"),margin:"auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, 252px)",justifyContent:"center",gridAutoRows:"".concat(180,"px"),gridColumnGap:"15px",gridRowGap:"10px"},children:[n.photos.map((function(t,e){return Object(a.jsx)("div",{className:"image-container",style:{width:"252px",display:"flex",flexDirection:"column"},children:Object(a.jsx)(k,{index:e,maxElement:o,url:n.photos[e].url,alt:n.photos[e].id},e)},e)})),Object(a.jsx)("button",{style:{position:"fixed",bottom:"0"},onClick:function(){return r({type:D})},children:"Add"})]})};var G=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(P,{})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),R(console.log)}},[[39,1,2]]]);
//# sourceMappingURL=main.1abe4288.chunk.js.map