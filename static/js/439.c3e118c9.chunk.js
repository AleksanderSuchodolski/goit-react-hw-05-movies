"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[439],{7991:function(n,t,e){e.d(t,{Hx:function(){return m},Tl:function(){return Z},W7:function(){return p},Y5:function(){return x},bI:function(){return h},uV:function(){return w},vw:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),i=e(7527),o=e(3835),u="a8840e139755b2f8d901945d963d17ed",s="https://api.themoviedb.org/3",p={position:"top-right",timeout:2e3,width:"300px",fontSize:"20px"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s).concat(t,"?api_key=").concat(u),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"?api_key=").concat(u,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/credits?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s).concat(t,"/").concat(e,"/reviews?api_key=").concat(u),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}},6935:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(1406),c=e(168),i=e(1067).ZP.div(r||(r=(0,c.Z)(["\n  text-align: center;\n  margin-top: 250px;\n"]))),o=e(2559),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(a.VL,{visible:!0,height:"180",width:"180",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},8404:function(n,t,e){var r=e(5545),a=e(5400),c=e(3994),i=e(2559);t.Z=function(n){var t=n.films,e=(0,r.TH)();return(0,i.jsx)(c.aV,{children:t.map((function(n){var t=n.id,r=n.title,o=n.overview,u=n.poster_path;return(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,i.jsxs)(c.ck,{children:[(0,i.jsx)("img",{src:u?"http://image.tmdb.org/t/p/w154".concat(u):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:r,width:"154",height:"231"}),(0,i.jsxs)(c.hh,{children:[(0,i.jsx)("h3",{children:r}),(0,i.jsx)("p",{children:o})]})]},t)},t)}))})}},3994:function(n,t,e){e.d(t,{aV:function(){return u},ck:function(){return s},hh:function(){return p}});var r,a,c,i=e(168),o=e(1067),u=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),s=o.ZP.li(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5px;\n  width: 154px;\n  max-height: 400px;\n  cursor: pointer;\n  overflow: hidden;\n"]))),p=o.ZP.div(c||(c=(0,i.Z)(["\n  min-height: 169px;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"])))},6439:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(9439),c=e(6935),i=e(390),o=e(7991),u=e(168),s=e(1067).ZP.section(r||(r=(0,u.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),p=e(8404),f=e(2559),l=function(){var n=(0,i.useState)(!0),t=(0,a.Z)(n,2),e=t[0],r=t[1],u=(0,i.useState)([]),l=(0,a.Z)(u,2),h=l[0],d=l[1];return(0,i.useEffect)((function(){h.length>0||(0,o.vw)("/trending/movie/day").then((function(n){d(n.results)})).catch(o.Tl).finally((function(){return r(!1)}))}),[h]),(0,f.jsxs)(s,{children:[(0,f.jsx)("h2",{children:"Trending today"}),e&&(0,f.jsx)(c.a,{}),(0,f.jsx)(p.Z,{films:h})]})}}}]);
//# sourceMappingURL=439.c3e118c9.chunk.js.map