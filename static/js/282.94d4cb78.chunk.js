"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[282],{7991:function(n,e,t){t.d(e,{Hx:function(){return j},Tl:function(){return y},W7:function(){return p},Y5:function(){return x},bI:function(){return f},uV:function(){return g},vw:function(){return l}});var r=t(5861),i=t(7757),c=t.n(i),a=t(7527),o=t(3835),s="a8840e139755b2f8d901945d963d17ed",u="https://api.themoviedb.org/3",p={position:"top-right",timeout:2e3,width:"300px",fontSize:"20px"};function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u).concat(e,"?api_key=").concat(s),n.next=3,a.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e,t){var r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(e,"?api_key=").concat(s,"&query=").concat(t),n.next=3,a.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e,t){var r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(e,"/").concat(t,"?api_key=").concat(s),n.next=3,a.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e,t){var r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(e,"/").concat(t,"/credits?api_key=").concat(s),n.next=3,a.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e,t){var r,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(e,"/").concat(t,"/reviews?api_key=").concat(s),n.next=3,a.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}},6935:function(n,e,t){t.d(e,{a:function(){return s}});var r,i=t(1406),c=t(168),a=t(1067).ZP.div(r||(r=(0,c.Z)(["\n  text-align: center;\n  margin-top: 250px;\n"]))),o=t(2559),s=function(){return(0,o.jsx)(a,{children:(0,o.jsx)(i.VL,{visible:!0,height:"180",width:"180",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},5282:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,c,a,o,s=t(9439),u=t(6935),p=t(390),l=t(5545),d=t(5400),f=t(7991),h=t(168),x=t(1067),v=x.ZP.section(r||(r=(0,h.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),g=(0,x.ZP)(d.rU)(i||(i=(0,h.Z)(["\n  color: red;\n  font-weight: 700;\n  padding: 6px;\n  border: 1px solid red;\n  width: 100px;\n  &.active {\n    color: orange;\n  }\n"]))),w=x.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),j=x.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 400px;\n"]))),m=x.ZP.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 500;\n  text-decoration: underline;\n"]))),y=t(2559),Z=function(){var n,e,t=(0,l.UO)().movieId,r=(0,p.useState)(!0),i=(0,s.Z)(r,2),c=i[0],a=i[1],o=(0,p.useState)(null),h=(0,s.Z)(o,2),x=h[0],Z=h[1],b=(0,l.TH)(),_=(0,p.useRef)(null!==(n=null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");if((0,p.useEffect)((function(){t&&(0,f.Y5)("/movie",t).then((function(n){Z(n)})).catch(f.Tl).finally((function(){return a(!1)}))}),[t]),x){var k=x.poster_path,S=x.title,C=x.original_title,O=x.release_date,P=x.genres,T=x.vote_everage,U=x.overview;return(0,y.jsxs)(v,{children:[(0,y.jsx)(g,{to:_.current,children:"<- GO BACK"}),(0,y.jsx)("h2",{children:"Movie Details:"}),c&&(0,y.jsx)(u.a,{}),x&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(w,{children:[(0,y.jsx)("img",{src:k?"http://image.tmdb.org/t/p/w342".concat(k):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:S,width:"200"}),(0,y.jsxs)(j,{children:[(0,y.jsx)("h3",{children:C}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Release date:"})," ",O]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Genres:"})," ",P.map((function(n){var e=n.name;return"".concat(e.toLowerCase()," | ")}))]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"User score:"})," ",T]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Overview:"})," ",U]})]})]}),(0,y.jsx)("h3",{children:"Additional information:"}),(0,y.jsxs)(m,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(p.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(l.j3,{})})]})]})}}}}]);
//# sourceMappingURL=282.94d4cb78.chunk.js.map