(this.webpackJsonppunk_ipa=this.webpackJsonppunk_ipa||[]).push([[0],{36:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var n,i=r(0),c=r.n(i),s=r(23),a=r.n(s),o=(r(36),r(16)),j=r.n(o),d=r(24),b=r(10),l=r(8),u=r(25),h=r(31),O=r(26),p=r(27),x=r.p+"static/media/pint.4e98e2e8.jpg",g=r(1),m=function(e){var t=Object(l.useState)(!1),r=Object(b.a)(t,2),n=r[0],i=r[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return i(!0)},children:"Click here to see what food this pairs well with"}),n?Object(g.jsx)("p",{children:e.foodPairing}):""]})},f=p.a.img(n||(n=Object(O.a)(["\nwidth: auto;\nmax-height: 300px;\n"]))),w=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:["Your random beer is: ",e.beerName]}),e.imgURL?Object(g.jsx)(f,{src:e.imgURL,alt:"Picture of ".concat(e.beerName)}):Object(g.jsx)(f,{src:x,alt:"Picture of a pint of brewdog"}),Object(g.jsx)("p",{children:e.tagline}),Object(g.jsxs)("p",{children:["Description: First brewed in ",e.firstBrewed,", ",e.description]}),Object(g.jsx)(m,{foodPairing:e.foodPairing})]})},v=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Random Beer"}),e.loading?Object(g.jsx)("p",{children:"Your random beer is: LOADING..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{beerName:e.beerName,tagline:e.tagline,firstBrewed:e.firstBrewed,description:e.description,imgURL:e.imgURL,foodPairing:e.foodPairing}),Object(g.jsx)("button",{onClick:e.handler,children:Object(g.jsx)(u.a,{icon:h.a})})]})]})},k=r(18),P=r(3),B=function(){var e=Object(l.useState)(""),t=Object(b.a)(e,2),r=t[0],n=t[1],i=Object(l.useState)(!1),c=Object(b.a)(i,2),s=c[0],a=c[1],o=Object(l.useState)({err:!1,message:""}),u=Object(b.a)(o,2),h=u[0],O=u[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,fetch("https://api.punkapi.com/v2/beers/random");case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Hmmmm. Something went wrong. Please try again later.");case 7:return e.next=9,t.json();case 9:r=e.sent,console.log(r),n(r[0]),a(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),O({err:!0,message:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){p()}),[]),h.err?Object(g.jsx)("h1",{children:h.message}):Object(g.jsx)(k.a,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)("nav",{children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:Object(g.jsx)(k.b,{to:"/",children:"Home"})})})}),Object(g.jsx)(P.c,{children:Object(g.jsx)(P.a,{path:"/",children:Object(g.jsx)(v,{beerName:r.name,tagline:r.tagline,firstBrewed:r.first_brewed,description:r.description,imgURL:r.image_url,loading:s,handler:p,foodPairing:r.food_pairing})})})]})})};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e0da4079.chunk.js.map