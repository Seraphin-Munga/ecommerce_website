(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},134:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addProductItems",(function(){return Y})),n.d(r,"emptyCard",(function(){return H}));var c=n(0),a=n.n(c),i=n(30),s=n.n(i),o=(n(127),n(34)),u=n(17),l=n(199),d=n(208),j=n(211),b=n(13),h=n(223),p=n(224),O=n(210),x=(n(128),n(206)),m=n(2),f=function(){var e=c.useState(!0),t=Object(b.a)(e,2),n=t[0],r=(t[1],Object(u.f)());return Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{sx:{flexGrow:1},children:Object(m.jsx)(h.a,{className:"header",position:"static",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(m.jsx)(o.b,{className:"logo",to:"/",children:"ECOMMERCE"})}),n&&Object(m.jsxs)("div",{children:[Object(m.jsx)(x.a,{onClick:function(){r.push("/login")},color:"inherit",children:"Login"}),Object(m.jsx)(x.a,{onClick:function(){r.push("/register")},color:"inherit",children:"REGISTER"})]})]})})})})},g=(n(134),n(105)),v=n.n(g),y=n(106),w=n.n(y),k=n(107),S=n.n(k);function C(){return Object(m.jsx)(h.a,{className:"footer",position:"static",color:"primary",children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(v.a,{}),Object(m.jsx)(w.a,{}),Object(m.jsx)(S.a,{})]})})}var _=function(e,t){var n=e.children;return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(l.a,{}),Object(m.jsx)(j.a,{style:{maxWidth:"1200px"},children:Object(m.jsx)(d.a,{})}),Object(m.jsx)("div",{className:"container",children:n}),Object(m.jsx)(C,{})]})},I=n(16),N=n.n(I),P=n(21),E=n(207),F=n(212),A=n(215),M=n(214),R=n(213),D=n(27),L=n(32),T=function e(){Object(D.a)(this,e)};T.API_URL="http://compaign-002-site2.dtempurl.com/api/";var J=function(){function e(){Object(D.a)(this,e)}return Object(L.a)(e,null,[{key:"getProducts",value:function(){var e=Object(P.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(T.API_URL,"Product"));case 3:return t=e.sent,e.abrupt("return",t.json());case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),G=n(203),W=n(109),q=n.n(W),U=n(74),B=n(28),V=n.n(B),z=n(43),Q=n(35),Y=function(e){return function(t){t({type:"addProduct",payload:e})}},H=function(){return function(e){e({type:"emptyCard"})}},K=J;function X(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(U.useGlobalState)("numberOfItems"),o=Object(b.a)(s,2),u=o[0],l=o[1],d=Object(z.c)((function(e){return e.shoppingCard})),j=Object(z.b)(),h=Object(Q.b)(r,j).addProductItems;function p(){return(p=Object(P.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.getProducts();case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]);var f=null===n||void 0===n?void 0:n.map((function(e){return Object(m.jsx)(E.a,{item:!0,xs:3,children:Object(m.jsxs)(F.a,{sx:{maxWidth:345},children:[Object(m.jsx)(R.a,{component:"img",height:"140",image:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:"green iguana"}),Object(m.jsxs)(M.a,{children:[Object(m.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:e._product_productName}),Object(m.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["R ",e._product_price]})]}),Object(m.jsx)(A.a,{children:Object(m.jsx)(x.a,{onClick:function(){return function(e){if(d.filter((function(t){return t._product_productID===e._product_productID})).length<=0)h(e),u=d.length,l(u);else{var t=d.findIndex((function(t){return t._product_productID===e._product_productID})),n=d[t]._product_quantity+1;d[t]._product_quantity=n,V()({title:"Warning",text:"You have ".concat(n," of the same products in your cards"),icon:"warning",dangerMode:!0})}}(e)},size:"small",children:"ADD TO CARD"})})]})})}));return Object(m.jsx)(a.a.Fragment,{children:f})}U.store.setState("numberOfItems",0);var Z=function(){var e=Object(u.f)(),t=Object(U.useGlobalState)("numberOfItems"),n=Object(b.a)(t,2),r=n[0];n[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(G.a,{badgeContent:r,color:"error",children:Object(m.jsx)(q.a,{onClick:function(){e.push("/login")},className:"shoppingCard"})}),Object(m.jsx)(d.a,{sx:{flexGrow:1},children:Object(m.jsx)(E.a,{container:!0,spacing:1,children:Object(m.jsx)(E.a,{container:!0,item:!0,spacing:3,children:Object(m.jsx)(X,{})})})})]})},$=n(202),ee=n(216),te=n(204),ne=n(225),re=n(200),ce=function(){function e(){Object(D.a)(this,e)}return Object(L.a)(e,null,[{key:"register",value:function(){var e=Object(P.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(T.API_URL,"Customer"),n);case 4:e.sent,e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=11;break}throw new Error("A connection could not be established. Please contact an administrator.");case 11:throw Error(e.t0.error);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ae=ce,ie=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)(""),j=Object(b.a)(l,2),h=j[0],p=j[1],O=Object(c.useState)(""),f=Object(b.a)(O,2),g=f[0],v=f[1],y=Object(c.useState)(""),w=Object(b.a)(y,2),k=w[0],S=w[1],C=Object(c.useState)(""),_=Object(b.a)(C,2),I=_[0],E=_[1],F=Object(c.useState)(),A=Object(b.a)(F,2),M=A[0],R=(A[1],Object(u.f)());function D(){return(D=Object(P.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&""!==s&&""!==h&&""!==g&&""!==k&&""!==I){e.next=3;break}return V()({title:"Input Validations",text:"Fill up all required fields",icon:"error",dangerMode:!0}),e.abrupt("return");case 3:return M={firstName:n,lastName:s,telephone:h,email:g,password:k,gender:I},e.prev=4,e.next=7,ae.register(M);case 7:V()({title:"Warning",text:"Register successfully",icon:"success",dangerMode:!0}),R.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}return Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:Object(m.jsxs)("div",{className:"register-form",children:[Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"First Name"}),Object(m.jsx)(ne.a,{id:"my-input",onChange:function(e){r(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"Last Name"}),Object(m.jsx)(ne.a,{id:"my-input",onChange:function(e){o(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"Telephone"}),Object(m.jsx)(ne.a,{id:"my-input",onChange:function(e){p(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(m.jsx)(te.a,{id:"demo-simple-select-standard-label",children:"Gender"}),Object(m.jsxs)(re.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:function(e){E(e.target.value)},children:[Object(m.jsx)($.a,{value:"",children:Object(m.jsx)("em",{children:"None"})}),Object(m.jsx)($.a,{value:"M",children:"Male"}),Object(m.jsx)($.a,{value:"F",children:"Female"})]})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"Email"}),Object(m.jsx)(ne.a,{id:"my-input",onChange:function(e){v(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"password"}),Object(m.jsx)(ne.a,{id:"my-input",type:"password","aria-describedby":"my-helper-text",onChange:function(e){S(e.target.value)}})]})}),Object(m.jsx)(x.a,{onClick:function(){return D.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"Register"})]})})})},se=function(){function e(){Object(D.a)(this,e)}return Object(L.a)(e,null,[{key:"login",value:function(){var e=Object(P.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("".concat(T.API_URL,"Account/authenticate"),n);case 4:return r=e.sent,e.abrupt("return",r.json());case 8:if(e.prev=8,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=12;break}throw new Error("A connection could not be established. Please contact an administrator.");case 12:throw Error(e.t0.error);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),oe=(n(142),se),ue=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),s=i[0],l=i[1],d=Object(c.useState)(),j=Object(b.a)(d,2),h=j[0],p=(j[1],Object(u.f)());function O(){return(O=Object(P.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n&&void 0!==n&&null!==n){e.next=5;break}return V()({title:"Input Validations",text:"Email is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 5:if(""!==s&&void 0!==s&&null!==s){e.next=8;break}return V()({title:"Input Validations",text:"Password is required",icon:"error",dangerMode:!0}),e.abrupt("return");case 8:return h={email:n,password:s,isAdmin:!1},e.prev=9,e.next=12,oe.login(h);case 12:if(""!=(t=e.sent).email&&null!=t.email&&void 0!==t.email){e.next=16;break}return V()({title:"Warning",text:"Username or password is incorrect!",icon:"warning",dangerMode:!0}),e.abrupt("return");case 16:sessionStorage.setItem("user",JSON.stringify(t)),p.push("/shopping-card"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),alert("Something went wrong");case 23:case"end":return e.stop()}}),e,null,[[9,20]])})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"container-login",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"Email"}),Object(m.jsx)(ne.a,{id:"my-input",onChange:function(e){r(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)(ee.a,{children:[Object(m.jsx)(te.a,{htmlFor:"my-input",children:"password"}),Object(m.jsx)(ne.a,{id:"my-input",type:"password",onChange:function(e){l(e.target.value)},"aria-describedby":"my-helper-text"})]})}),Object(m.jsx)(x.a,{onClick:function(){return O.apply(this,arguments)},className:"btn-register",variant:"contained",disableElevation:!0,children:"LOGIN"}),Object(m.jsx)(o.b,{className:"register",to:"/register",children:"Register"})]})})},le=n(220),de=n(222),je=n(218),be=n(219),he=n(221),pe=n(217),Oe=n(209),xe=function(){function e(){Object(D.a)(this,e)}return Object(L.a)(e,null,[{key:"create",value:function(){var e=Object(P.a)(N.a.mark((function e(t){var n,r,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.stringify(sessionStorage.getItem("user")),r=JSON.parse(n),c=JSON.parse(r),t.customerID=c.userID,t.customerEmail=c.email,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)},body:JSON.stringify(t)},e.next=9,fetch("".concat(T.API_URL,"Order"),a);case 9:e.sent,e.next=17;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(e.t0&&e.t0.error instanceof ProgressEvent)){e.next=16;break}throw new Error("A connection could not be established. Please contact an administrator.");case 16:throw Error(e.t0.error);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),me=(n(143),xe),fe=(d.a,function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(),s=Object(b.a)(i,2),o=s[0],l=(s[1],Object(u.f)()),d=Object(z.c)((function(e){return e.shoppingCard})),j=Object(z.b)(),h=Object(Q.b)(r,j).emptyCard;function p(){return(p=Object(P.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==d.length){e.next=3;break}return V()({title:"Warning",text:"There is no product in your card",icon:"warning",dangerMode:!0}),e.abrupt("return");case 3:return t=0,d.forEach((function(e){t+=e._product_price})),o={quantity:d.length,totalPrice:t,customerEmail:"",customerID:"",orderItemString:JSON.stringify(n)},e.prev=6,e.next=9,me.create(o);case 9:V()({title:"Success",text:"Order successfully. Please check your email.",icon:"success",dangerMode:!0}),h(),l.push("/"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),alert("Something went wrong");case 17:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}Object(c.useEffect)((function(){a(d)}),[]);var O=null===n||void 0===n?void 0:n.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(pe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(m.jsx)(je.a,{component:"th",scope:"row",children:Object(m.jsx)("img",{width:"120px",src:"http://compaign-002-site2.dtempurl.com/".concat(e._product_imageLink),alt:""})}),Object(m.jsx)(je.a,{component:"th",scope:"row",children:e._product_productName}),Object(m.jsx)(je.a,{align:"right",children:e._product_price}),Object(m.jsx)(je.a,{align:"right",children:e._product_quantity})]},e._product_productID)})}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(x.a,{className:"btn-shopping",onClick:function(){return function(){return p.apply(this,arguments)}()},variant:"contained",children:"Check Out"}),Object(m.jsx)(be.a,{component:Oe.a,children:Object(m.jsxs)(le.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(m.jsx)(he.a,{children:Object(m.jsxs)(pe.a,{children:[Object(m.jsx)(je.a,{children:"Image"}),Object(m.jsx)(je.a,{children:"Product Name"}),Object(m.jsx)(je.a,{align:"right",children:"Price"}),Object(m.jsx)(je.a,{align:"right",children:"Quantity"})]})}),Object(m.jsx)(de.a,{children:O})]})})]})}),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addProduct":return e.push(t.payload),e;case"emptyCard":return e=[];default:return e}},ve=Object(Q.c)({shoppingCard:ge}),ye=n(110),we=Object(Q.d)(ve,{},Object(Q.a)(ye.a));var ke=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{children:Object(m.jsx)(z.a,{store:we,children:Object(m.jsx)(_,{children:Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/",exact:!0,children:Object(m.jsx)(Z,{})}),Object(m.jsx)(u.a,{path:"/register",children:Object(m.jsx)(ie,{})}),Object(m.jsx)(u.a,{path:"/login",children:Object(m.jsx)(ue,{})}),Object(m.jsx)(u.a,{path:"/shopping-card",children:Object(m.jsx)(fe,{})})]})})})})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ke,{})}),document.getElementById("root")),Se()}},[[144,1,2]]]);
//# sourceMappingURL=main.52c9cb06.chunk.js.map