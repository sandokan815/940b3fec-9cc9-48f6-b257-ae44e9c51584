(this["webpackJsonpfreddy-dashboard"]=this["webpackJsonpfreddy-dashboard"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(17),o=c.n(n),r=c(11),a=(c(23),c(24),c(25),c(2)),i=c(8),d=c.p+"static/media/Freddys_Logo.e96f10ec.svg",l=c(1),j=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)(""),r=Object(i.a)(o,2),j=r[0],h=r[1],b=Object(s.useState)(null),u=Object(i.a)(b,2),O=u[0],m=u[1],f=Object(a.f)();return Object(l.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),m(null);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:j})};fetch("https://freddy.codesubmit.io/login",t).then((function(e){return e.json()})).then((function(e){e.msg?(console.log(e.msg),m(e.msg)):(console.log("success login"),localStorage.setItem("access_token",e.access_token),localStorage.setItem("refresh_token",e.refresh_token),f.push("/dashboard"))}))},children:[Object(l.jsxs)("div",{className:"logo-section",children:[Object(l.jsx)("h3",{className:"logo-section-text",children:"Freddy's Artisanal Hallowween Canday Shop"}),Object(l.jsx)("img",{src:d,alt:"logo",width:"120px",height:"120px"})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"username",value:c,onChange:function(e){n(e.target.value)}})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",value:j,onChange:function(e){h(e.target.value)}})}),O&&Object(l.jsx)("p",{children:O}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Login"})]})},h=c(9),b=(c(34),function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],o=function(){var e=localStorage.getItem("access_token"),t={method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}};return fetch("https://freddy.codesubmit.io/dashboard",t).then((function(e){return e.json()})).then((function(e){e.msg?function(){var e={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("refresh_token"))}};fetch("https://freddy.codesubmit.io/refresh",e).then((function(e){return e.json()})).then((function(e){e.msg?console.log(e.msg):(localStorage.setItem("access_token",e.access_token),localStorage.setItem("refresh_token",e.refresh_token))}))}():n(e.dashboard)}))};return Object(s.useEffect)((function(){o()}),[]),console.log(c),Object(l.jsxs)("div",{className:"dashboard-container",children:[Object(l.jsx)(h.c,{children:Object(l.jsxs)(h.a,{children:[Object(l.jsx)(h.b,{children:"Dashboard"}),Object(l.jsx)(h.b,{children:"Orders"}),Object(l.jsx)(h.b,{children:"Logout"})]})}),Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsx)("div",{className:"analytics"}),Object(l.jsx)("div",{className:"revenue"}),Object(l.jsx)("div",{className:"bestsellers",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Product Name"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"# Units Sold"}),Object(l.jsx)("th",{children:"Revenue"})]})}),Object(l.jsx)("tbody",{children:c.bestsellers.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.product.name}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:e.units}),Object(l.jsx)("td",{children:e.revenue})]},e.product.id)}))})]})})]})]})});var u=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"auth-wrapper",children:Object(l.jsx)("div",{className:"auth-inner",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(a.a,{path:"/sign-in",component:j}),Object(l.jsx)(a.a,{path:"/dashboard",component:b})]})})})})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),o(e),r(e)}))};o.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.c3af15b4.chunk.js.map