(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},130:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(40),i=n.n(a),s=(n(123),n(33)),o=n(17),l=n(194),u=n(203),d=n(206),j=n(13),b=n(218),h=n(219),p=n(205),O=(n(124),n(201)),x=n(2),m=function(){var e=r.useState(!0),t=Object(j.a)(e,2),n=t[0],c=(t[1],Object(o.f)());return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{sx:{flexGrow:1},children:Object(x.jsx)(b.a,{className:"header",position:"static",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(x.jsx)(s.b,{className:"logo",to:"/",children:"ECOMMERCE"})}),n&&Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{onClick:function(){c.push("/login")},color:"inherit",children:"Login"}),Object(x.jsx)(O.a,{onClick:function(){c.push("/register")},color:"inherit",children:"REGISTER"})]})]})})})})},f=(n(130),n(103)),g=n.n(f),v=n(104),y=n.n(v),w=n(105),S=n.n(w);function k(){return Object(x.jsx)(b.a,{className:"footer",position:"static",color:"primary",children:Object(x.jsxs)(h.a,{children:[Object(x.jsx)(g.a,{}),Object(x.jsx)(y.a,{}),Object(x.jsx)(S.a,{})]})})}var N=function(e,t){var n=e.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsx)(l.a,{}),Object(x.jsx)(d.a,{style:{maxWidth:"1200px"},children:Object(x.jsx)(u.a,{})}),Object(x.jsx)("div",{className:"container",children:n}),Object(x.jsx)(k,{})]})},_=n(16),I=n.n(_),P=n(21),C=n(202),E=n(207),J=n(210),F=n(209),A=n(208),M=n(27),R=n(31),D=function e(){Object(M.a)(this,e)};D.API_URL="http://compaign-002-site2.dtempurl.com/api/";var L=function(){function e(){Object(M.a)(this,e)}return Object(R.a)(e,null,[{key:"getProducts",value:function(){var e=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(D.API_URL,"Product"));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),T=n(198),G=n(106),W=n.n(G),q=n(72),U=n(28),B=n.n(U),V=L;q.store.setState("numberOfItems",0);var z=[];function Q(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(q.useGlobalState)("numberOfItems"),s=Object(j.a)(i,2),o=s[0],l=s[1];function u(){return(u=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.getProducts();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]);var d=null===n||void 0===n?void 0:n.map((function(e){return Object(x.jsx)(C.a,{item:!0,xs:3,children:Object(x.jsxs)(E.a,{sx:{maxWidth:345},children:[Object(x.jsx)(A.a,{component:"img",height:"140",image:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:"green iguana"}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:e._product_productName}),Object(x.jsxs)(p.a,{variant:"body2",color:"text.secondary",children:["R ",e._product_price]})]}),Object(x.jsx)(J.a,{children:Object(x.jsx)(O.a,{onClick:function(){return function(e){if(z.filter((function(t){return t._product_productID===e._product_productID})).length<=0)z.push(e),localStorage.setItem("cardProducts",JSON.stringify(z)),o=z.length,l(o);else{var t=z.findIndex((function(t){return t._product_productID===e._product_productID})),n=z[t]._product_quantity+1;z[t]._product_quantity=n,localStorage.setItem("cardProducts",JSON.stringify(z)),B()({title:"Warning",text:"You have ".concat(n," of the same products in your cards"),icon:"warning",dangerMode:!0})}}(e)},size:"small",children:"ADD TO CARD"})})]})})}));return Object(x.jsx)(c.a.Fragment,{children:d})}var Y=function(){var e=Object(o.f)(),t=Object(q.useGlobalState)("numberOfItems"),n=Object(j.a)(t,2),r=n[0];n[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(T.a,{badgeContent:r,color:"error",children:Object(x.jsx)(W.a,{onClick:function(){e.push("/login")},className:"shoppingCard"})}),Object(x.jsx)(u.a,{sx:{flexGrow:1},children:Object(x.jsx)(C.a,{container:!0,spacing:1,children:Object(x.jsx)(C.a,{container:!0,item:!0,spacing:3,children:Object(x.jsx)(Q,{})})})})]})},H=n(197),K=n(211),X=n(199),Z=n(220),$=n(195),ee=function(){function e(){Object(M.a)(this,e)}return Object(R.a)(e,null,[{key:"register",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(D.API_URL,"Customer"),n);case 4:e.sent,e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),te=ee,ne=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),s=i[0],l=i[1],d=Object(r.useState)(""),b=Object(j.a)(d,2),h=b[0],p=b[1],m=Object(r.useState)(""),f=Object(j.a)(m,2),g=f[0],v=f[1],y=Object(r.useState)(""),w=Object(j.a)(y,2),S=w[0],k=w[1],N=Object(r.useState)(""),_=Object(j.a)(N,2),C=_[0],E=_[1],J=Object(r.useState)(),F=Object(j.a)(J,2),A=F[0],M=(F[1],Object(o.f)());function R(){return(R=Object(P.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&""!==s&&""!==h&&""!==g&&""!==S&&""!==C){e.next=3;break}return B()({title:"Input Validations",text:"Fill up all required fields",icon:"error",dangerMode:!0}),e.abrupt("return");case 3:return A={firstName:n,lastName:s,telephone:h,email:g,password:S,gender:C},e.prev=4,e.next=7,te.register(A);case 7:B()({title:"Warning",text:"Register successfully",icon:"success",dangerMode:!0}),M.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(x.jsxs)("div",{className:"register-form",children:[Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"First Name"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){c(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Last Name"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){l(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Telephone"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){p(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(x.jsx)(X.a,{id:"demo-simple-select-standard-label",children:"Gender"}),Object(x.jsxs)($.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:function(e){E(e.target.value)},children:[Object(x.jsx)(H.a,{value:"",children:Object(x.jsx)("em",{children:"None"})}),Object(x.jsx)(H.a,{value:"M",children:"Male"}),Object(x.jsx)(H.a,{value:"F",children:"Female"})]})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Email"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){v(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"password"}),Object(x.jsx)(Z.a,{id:"my-input",type:"password","aria-describedby":"my-helper-text",onChange:function(e){k(e.target.value)}})]})}),Object(x.jsx)(O.a,{onClick:function(){return R.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"Register"})]})})})},re=function(){function e(){Object(M.a)(this,e)}return Object(R.a)(e,null,[{key:"login",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(D.API_URL,"Account/authenticate"),n);case 4:return r=e.sent,e.abrupt("return",r.json());case 8:if(e.prev=8,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=12;break}throw new Error("A connection could not be established. Please contact an administrator.");case 12:throw Error(e.t0.error);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ce=(n(137),re),ae=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),l=i[0],u=i[1],d=Object(r.useState)(),b=Object(j.a)(d,2),h=b[0],p=(b[1],Object(o.f)());function m(){return(m=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&void 0!==n&&null!==n){e.next=5;break}return B()({title:"Input Validations",text:"Email is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 5:if(""!==l&&void 0!==l&&null!==l){e.next=8;break}return B()({title:"Input Validations",text:"Password is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 8:return h={email:n,password:l,isAdmin:!1},e.prev=9,e.next=12,ce.login(h);case 12:if(""!=(t=e.sent).email&&null!=t.email&&void 0!==t.email){e.next=16;break}return B()({title:"Warning",text:"Username or password is incorrect!",icon:"warning",dangerMode:!0}),e.abrupt("return");case 16:sessionStorage.setItem("user",JSON.stringify(t)),p.push("/shopping-card"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),alert("Something went wrong");case 23:case"end":return e.stop()}}),e,null,[[9,20]])})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"container-login",children:Object(x.jsxs)("div",{className:"inner-container",children:[Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"Email"}),Object(x.jsx)(Z.a,{id:"my-input",onChange:function(e){c(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(K.a,{children:[Object(x.jsx)(X.a,{htmlFor:"my-input",children:"password"}),Object(x.jsx)(Z.a,{id:"my-input",type:"password",onChange:function(e){u(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(x.jsx)(O.a,{onClick:function(){return m.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"LOGIN"}),Object(x.jsx)(s.b,{className:"register",to:"/register",children:"Register"})]})})},ie=n(215),se=n(217),oe=n(213),le=n(214),ue=n(216),de=n(212),je=n(204),be=function(){function e(){Object(M.a)(this,e)}return Object(R.a)(e,null,[{key:"create",value:function(){var e=Object(P.a)(I.a.mark((function e(t){var n,r,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.stringify(sessionStorage.getItem("user")),r=JSON.parse(n),c=JSON.parse(r),t.customerID=c.userID,t.customerEmail=c.email,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)},body:JSON.stringify(t)},e.next=9,fetch("".concat(D.API_URL,"Order"),a);case 9:e.sent,e.next=17;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=16;break}throw new Error("A connection could not be established. Please contact an administrator.");case 16:throw Error(e.t0.error);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),he=(n(138),be),pe=(u.a,function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),i=Object(j.a)(a,2),s=i[0],l=(i[1],Object(o.f)());function u(){return(u=Object(P.a)(I.a.mark((function e(){var t,r,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=localStorage.getItem("cardProducts"))&&null!==t&&void 0!==t){e.next=4;break}return B()({title:"Warning",text:"There is no product in your card",icon:"warning",dangerMode:!0}),e.abrupt("return");case 4:return r=JSON.parse(JSON.stringify(t)),c=JSON.parse(r),a=0,c.forEach((function(e){a+=e._product_price})),s={quantity:c.length,totalPrice:a,customerEmail:"",customerID:"",orderItemString:JSON.stringify(n)},e.prev=9,e.next=12,he.create(s);case 12:B()({title:"Success",text:"Order successfully. Please check your email.",icon:"success",dangerMode:!0}),localStorage.clear(),sessionStorage.clear(),l.push("/"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),alert("Something went wrong");case 21:case"end":return e.stop()}}),e,null,[[9,18]])})))).apply(this,arguments)}Object(r.useEffect)((function(){var e=localStorage.getItem("cardProducts"),t=JSON.parse(JSON.stringify(e)),n=JSON.parse(t);c(n)}),[]);var d=null===n||void 0===n?void 0:n.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(de.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(x.jsx)(oe.a,{component:"th",scope:"row",children:Object(x.jsx)("img",{width:"120px",src:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:""})}),Object(x.jsx)(oe.a,{component:"th",scope:"row",children:e._product_productName}),Object(x.jsx)(oe.a,{align:"right",children:e._product_price}),Object(x.jsx)(oe.a,{align:"right",children:e._product_quantity})]},e._product_productID)})}));return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(O.a,{className:"btn-shopping",onClick:function(){return function(){return u.apply(this,arguments)}()},variant:"contained",children:"Check Out"}),Object(x.jsx)(le.a,{component:je.a,children:Object(x.jsxs)(ie.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(x.jsx)(ue.a,{children:Object(x.jsxs)(de.a,{children:[Object(x.jsx)(oe.a,{children:"Image"}),Object(x.jsx)(oe.a,{children:"Product Name"}),Object(x.jsx)(oe.a,{align:"right",children:"Price"}),Object(x.jsx)(oe.a,{align:"right",children:"Quantity"})]})}),Object(x.jsx)(se.a,{children:d})]})})]})});var Oe=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(s.a,{children:Object(x.jsx)(N,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,children:Object(x.jsx)(Y,{})}),Object(x.jsx)(o.a,{path:"/register",children:Object(x.jsx)(ne,{})}),Object(x.jsx)(o.a,{path:"/login",children:Object(x.jsx)(ae,{})}),Object(x.jsx)(o.a,{path:"/shopping-card",children:Object(x.jsx)(pe,{})})]})})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Oe,{})}),document.getElementById("root")),xe()}},[[139,1,2]]]);
//# sourceMappingURL=main.33a12588.chunk.js.map