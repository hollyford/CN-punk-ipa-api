(this.webpackJsonppunk_ipa=this.webpackJsonppunk_ipa||[]).push([[0],{36:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r,i=n(0),c=n.n(i),s=n(23),a=n.n(s),o=(n(36),n(16)),j=n.n(o),d=n(24),b=n(10),l=n(8),u=n(25),h=n(31),O=n(26),p=n(27),x=n.p+"static/media/pint.4e98e2e8.jpg",m=n(1),g=function(e){var t=Object(l.useState)(!1),n=Object(b.a)(t,2),r=n[0],i=n[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return i(!0)},children:"Click here to see what food this pairs well with"}),r?Object(m.jsx)("p",{children:e.foodPairing}):""]})},f=p.a.img(r||(r=Object(O.a)(["\nwidth: auto;\nmax-height: 300px;\n"]))),w=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Your random beer is: ",e.beerName]}),e.imgURL?Object(m.jsx)(f,{src:e.imgURL,alt:"Picture of ".concat(e.beerName)}):Object(m.jsx)(f,{src:x,alt:"Picture of a pint of brewdog"}),Object(m.jsx)("p",{children:e.tagline}),Object(m.jsxs)("p",{children:["Description: First brewed in ",e.firstBrewed,", ",e.description]}),Object(m.jsx)(g,{foodPairing:e.foodPairing})]})},v=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Random Beer"}),e.loading?Object(m.jsx)("p",{children:"Your random beer is: LOADING..."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{beerName:e.beerName,tagline:e.tagline,firstBrewed:e.firstBrewed,description:e.description,imgURL:e.imgURL,foodPairing:e.foodPairing}),Object(m.jsx)("button",{onClick:e.handler,children:Object(m.jsx)(u.a,{icon:h.a})})]})]})},k=n(18),P=n(3),B=function(){var e=Object(l.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(l.useState)(!1),c=Object(b.a)(i,2),s=c[0],a=c[1],o=Object(l.useState)({err:!1,message:""}),u=Object(b.a)(o,2),h=u[0],O=u[1],p=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,fetch("https://api.punkapi.com/v2/beers/random");case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Hmmmm. Something went wrong. Please try again later.");case 7:return e.next=9,t.json();case 9:n=e.sent,console.log(n),r(n[0]),a(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),O({err:!0,message:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){p()}),[]),h.err?Object(m.jsx)("h1",{children:h.message}):Object(m.jsx)(k.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{children:Object(m.jsx)("ul",{children:Object(m.jsx)("li",{children:Object(m.jsx)(k.b,{to:"/",children:"Home"})})})}),Object(m.jsx)(P.c,{children:Object(m.jsx)(P.a,{basename:"/",children:Object(m.jsx)(v,{beerName:n.name,tagline:n.tagline,firstBrewed:n.first_brewed,description:n.description,imgURL:n.image_url,loading:s,handler:p,foodPairing:n.food_pairing})})})]})})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.33cd75c1.chunk.js.map