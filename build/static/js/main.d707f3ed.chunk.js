(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{123:function(e,t,r){},124:function(e,t,r){},130:function(e,t,r){},137:function(e,t,r){},138:function(e,t,r){},139:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(40),i=r.n(a),s=(r(123),r(33)),o=r(17),l=r(194),u=r(203),d=r(206),j=r(13),b=r(218),h=r(219),p=r(205),O=(r(124),r(201)),x=r(2),m=function(){var e=n.useState(!0),t=Object(j.a)(e,2),r=t[0],c=(t[1],Object(o.f)());return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{sx:{flexGrow:1},children:Object(x.jsx)(b.a,{className:"header",position:"static",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(x.jsx)(s.b,{className:"logo",to:"/",children:"ECOMMERCE"})}),r&&Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{onClick:function(){c.push("/login")},color:"inherit",children:"Login"}),Object(x.jsx)(O.a,{onClick:function(){c.push("/register")},color:"inherit",children:"REGISTER"})]})]})})})})},f=(r(130),r(103)),g=r.n(f),v=r(104),y=r.n(v),w=r(105),S=r.n(w);function k(){return Object(x.jsx)(b.a,{className:"footer",position:"static",color:"primary",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(g.a,{}),Object(x.jsx)(y.a,{}),Object(x.jsx)(S.a,{})]})})}var N=function(e,t){var r=e.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(d.a,{style:{maxWidth:"1200px"},children:Object(x.jsx)(u.a,{})}),Object(x.jsx)("div",{className:"container",children:r}),Object(x.jsx)(k,{})]})},_=r(16),I=r.n(_),P=r(21),C=r(202),E=r(207),J=r(210),F=r(209),A=r(208),R=r(27),D=r(31),L=function e(){Object(R.a)(this,e)};L.API_URL="http://compaign-002-site2.dtempurl.com/api/";var M=function(){function e(){Object(R.a)(this,e)}return Object(D.a)(e,null,[{key:"getProducts",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L.API_URL,"Product"));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),T=r(198),G=r(106),q=r.n(G),W=r(72),U=r(29),B=r.n(U),V=M;W.store.setState("numberOfItems",0);var z=[];function Q(){var e=Object(n.useState)(),t=Object(j.a)(e,2),r=t[0],a=t[1],i=Object(W.useGlobalState)("numberOfItems"),s=Object(j.a)(i,2),o=s[0],l=s[1];function u(){return(u=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getProducts();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]);var d=null===r||void 0===r?void 0:r.map((function(e){return Object(x.jsx)(C.a,{item:!0,xs:3,children:Object(x.jsxs)(E.a,{sx:{maxWidth:345},children:[Object(x.jsx)(A.a,{component:"img",height:"140",image:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:"green iguana"}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:e._product_productName}),Object(x.jsxs)(p.a,{variant:"body2",color:"text.secondary",children:["R ",e._product_price]})]}),Object(x.jsx)(J.a,{children:Object(x.jsx)(O.a,{onClick:function(){return function(e){if(z.filter((function(t){return t._product_productID===e._product_productID})).length<=0)z.push(e),localStorage.setItem("cardProducts",JSON.stringify(z)),o=z.length,l(o);else{var t=z.findIndex((function(t){return t._product_productID===e._product_productID})),r=z[t]._product_quantity+1;z[t]._product_quantity=r,localStorage.setItem("cardProducts",JSON.stringify(z)),B()({title:"Warning",text:"You have ".concat(r," of the same products in your cards"),icon:"warning",dangerMode:!0})}}(e)},size:"small",children:"ADD TO CARD"})})]})})}));return Object(x.jsx)(c.a.Fragment,{children:d})}var Y=function(){var e=Object(o.f)(),t=Object(W.useGlobalState)("numberOfItems"),r=Object(j.a)(t,2),n=r[0];r[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(T.a,{badgeContent:n,color:"error",children:Object(x.jsx)(q.a,{onClick:function(){e.push("/login")},className:"shoppingCard"})}),Object(x.jsx)(u.a,{sx:{flexGrow:1},children:Object(x.jsx)(C.a,{container:!0,spacing:1,children:Object(x.jsx)(C.a,{container:!0,item:!0,spacing:3,children:Object(x.jsx)(Q,{})})})})]})},H=r(197),K=r(211),X=r(199),Z=r(220),$=r(195),ee=function(){function e(){Object(R.a)(this,e)}return Object(D.a)(e,null,[{key:"register",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(L.API_URL,"Customer"),r);case 4:e.sent,e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),te=ee,re=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),s=i[0],l=i[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),h=b[0],p=b[1],m=Object(n.useState)(""),f=Object(j.a)(m,2),g=f[0],v=f[1],y=Object(n.useState)(""),w=Object(j.a)(y,2),S=w[0],k=w[1],N=Object(n.useState)(""),_=Object(j.a)(N,2),C=_[0],E=_[1],J=Object(n.useState)(),F=Object(j.a)(J,2),A=F[0],R=(F[1],Object(o.f)());function D(){return(D=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r&&""!==s&&""!==h&&""!==g&&""!==S&&""!==C){e.next=3;break}return B()({title:"Input Validations",text:"Fill up all required fields",icon:"error",dangerMode:!0}),e.abrupt("return");case 3:return A={firstName:r,lastName:s,telephone:h,email:g,password:S,gender:C},e.prev=4,e.next=7,te.register(A);case 7:alert("Register successfully"),R.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(x.jsxs)("div",{className:"register-form",children:[Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"First Name"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){c(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Last Name"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){l(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Telephone"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){p(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(x.jsx)(X.a,{id:"demo-simple-select-standard-label",children:"Gender"}),Object(x.jsxs)($.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:function(e){E(e.target.value)},children:[Object(x.jsx)(H.a,{value:"",children:Object(x.jsx)("em",{children:"None"})}),Object(x.jsx)(H.a,{value:"M",children:"Male"}),Object(x.jsx)(H.a,{value:"F",children:"Female"})]})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Email"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){v(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"password"}),Object(x.jsx)(Z.a,{id:"my-input",type:"password","aria-describedby":"my-helper-text",onChange:function(e){k(e.target.value)}})]})}),Object(x.jsx)(O.a,{onClick:function(){return D.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"Register"})]})})})},ne=function(){function e(){Object(R.a)(this,e)}return Object(D.a)(e,null,[{key:"login",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var r,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(L.API_URL,"Account/authenticate"),r);case 4:return n=e.sent,e.abrupt("return",n.json());case 8:if(e.prev=8,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=12;break}throw new Error("A connection could not be established. Please contact an administrator.");case 12:throw Error(e.t0.error);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ce=(r(137),ne),ae=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),l=i[0],u=i[1],d=Object(n.useState)(),b=Object(j.a)(d,2),h=b[0],p=(b[1],Object(o.f)());function m(){return(m=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r&&void 0!==r&&null!==r){e.next=5;break}return B()({title:"Input Validations",text:"Email is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 5:if(""!==l&&void 0!==l&&null!==l){e.next=8;break}return B()({title:"Input Validations",text:"Password is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 8:return h={email:r,password:l,isAdmin:!1},e.prev=9,e.next=12,ce.login(h);case 12:if(""!=(t=e.sent).email&&null!=t.email&&void 0!==t.email){e.next=16;break}return B()({title:"Warning",text:"Username or password is incorrect!",icon:"warning",dangerMode:!0}),e.abrupt("return");case 16:sessionStorage.setItem("user",JSON.stringify(t)),p.push("/shopping-card"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),alert("Something went wrong");case 23:case"end":return e.stop()}}),e,null,[[9,20]])})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"container-login",children:Object(x.jsxs)("div",{className:"inner-container",children:[Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Email"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){c(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"password"}),Object(x.jsx)(Z.a,{id:"my-input",type:"password",onChange:function(e){u(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)(O.a,{onClick:function(){return m.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"LOGIN"}),Object(x.jsx)(s.b,{className:"register",to:"/register",children:"Register"})]})})},ie=r(215),se=r(217),oe=r(213),le=r(214),ue=r(216),de=r(212),je=r(204),be=function(){function e(){Object(R.a)(this,e)}return Object(D.a)(e,null,[{key:"create",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var r,n,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=JSON.stringify(sessionStorage.getItem("user")),n=JSON.parse(r),c=JSON.parse(n),t.customerID=c.userID,t.customerEmail=c.email,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)},body:JSON.stringify(t)},e.next=9,fetch("".concat(L.API_URL,"Order"),a);case 9:e.sent,e.next=17;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=16;break}throw new Error("A connection could not be established. Please contact an administrator.");case 16:throw Error(e.t0.error);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),he=(r(138),be),pe=(u.a,function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(),i=Object(j.a)(a,2),s=i[0],l=(i[1],Object(o.f)());function u(){return(u=Object(P.a)(I.a.mark((function e(){var t,n,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=localStorage.getItem("cardProducts"))&&null!==t&&void 0!==t){e.next=4;break}return B()({title:"Warning",text:"There is product in your card",icon:"warning",dangerMode:!0}),e.abrupt("return");case 4:return n=JSON.parse(JSON.stringify(t)),c=JSON.parse(n),a=0,c.forEach((function(e){a+=e._product_price})),s={quantity:c.length,totalPrice:a,customerEmail:"",customerID:"",orderItemString:JSON.stringify(r)},e.prev=9,e.next=12,he.create(s);case 12:B()({title:"Success",text:"Order successfully. Please check your email.",icon:"success",dangerMode:!0}),localStorage.clear(),sessionStorage.clear(),l.push("/"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),alert("Something went wrong");case 21:case"end":return e.stop()}}),e,null,[[9,18]])})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=localStorage.getItem("cardProducts"),t=JSON.parse(JSON.stringify(e)),r=JSON.parse(t);c(r)}),[]);var d=null===r||void 0===r?void 0:r.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(de.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(oe.a,{component:"th",scope:"row",children:Object(x.jsx)("img",{width:"120px",src:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:""})}),Object(x.jsx)(oe.a,{component:"th",scope:"row",children:e._product_productName}),Object(x.jsx)(oe.a,{align:"right",children:e._product_price}),Object(x.jsx)(oe.a,{align:"right",children:e._product_quantity})]},e._product_productID)})}));return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(O.a,{className:"btn-shopping",onClick:function(){return function(){return u.apply(this,arguments)}()},variant:"contained",children:"Check Out"}),Object(x.jsx)(le.a,{component:je.a,children:Object(x.jsxs)(ie.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(x.jsx)(ue.a,{children:Object(x.jsxs)(de.a,{children:[Object(x.jsx)(oe.a,{children:"Image"}),Object(x.jsx)(oe.a,{children:"Product Name"}),Object(x.jsx)(oe.a,{align:"right",children:"Price"}),Object(x.jsx)(oe.a,{align:"right",children:"Quantity"})]})}),Object(x.jsx)(se.a,{children:d})]})})]})});var Oe=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(s.a,{children:Object(x.jsx)(N,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,children:Object(x.jsx)(Y,{})}),Object(x.jsx)(o.a,{path:"/register",children:Object(x.jsx)(re,{})}),Object(x.jsx)(o.a,{path:"/login",children:Object(x.jsx)(ae,{})}),Object(x.jsx)(o.a,{path:"/shopping-card",children:Object(x.jsx)(pe,{})})]})})})})},xe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,221)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Oe,{})}),document.getElementById("root")),xe()}},[[139,1,2]]]);
//# sourceMappingURL=main.d707f3ed.chunk.js.map