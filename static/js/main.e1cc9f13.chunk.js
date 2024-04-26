(this["webpackJsonpdeiva-pf"]=this["webpackJsonpdeiva-pf"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),a=n(1),s=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajshekhar26.github.io/cleanfolio",j="JS.",b="Deiva Sivam",d="Front End Engineer",h="Passionate Front-End Developer with a strong foundation in Computer Science. Committed to creating engaging and user-friendly web applications using React & Angular. Seeking challenging opportunities to contribute and expand my skills.",u="https://example.com",m={linkedin:"https://www.linkedin.com/in/deiva-sivam/",github:"https://github.com/asdeiva"},p=[{name:"Typing Speed Tester",description:"Implemented a multimode typing test website with the ability to save results for better analysis.",stack:["Material UI","Javascript","React","Firebase"],sourceCode:"https://github.com/asdeiva/type-speed-tester-react",livePreview:"https://typingspeedtester-react.netlify.app/"},{name:"Crypto-traker-react",description:"Developed and deployed a user-friendly Crypto Tracker Website for real-time cryptocurrency tracking and API integration.",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com/asdeiva/crypto-traker-react",livePreview:"https://crypto-traker-react.netlify.app/"},{name:"Migration Excursion",description:"The Migration Excursion travel dashboard, built using basic HTML and CSS, offers a user-friendly interface.",stack:["HTML","CSS","JavaScript"],livePreview:"https://migrationexcursion.netlify.app/"}],O=["HTML","CSS","JavaScript","TypeScript","Angular","Ionic","React","RxJx","SCSS","Angular Material","Material UI","Git","CI/CD"],x="asdeiva@gmail.com",f=n(16),v=n.n(f),g=n(14),k=n.n(g),N=n(18),_=n.n(N),y=n(17),S=n.n(y),C=(n(28),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(a.useState)(!1),o=Object(i.a)(l,2),j=o[0],b=o[1],d=function(){return b(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(S.a,{}):Object(s.jsx)(_.a,{})})]})}),w=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),E=n(11),T=n.n(E),P=n(19),I=n.n(P),M=(n(33),function(){var e=b,t=d,n=h,c=u,i=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(I.a,{})})]})]})]})}),J=n(7),A=n.n(J),L=n(20),R=n.n(L),D=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})}),F=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(D,{project:e},A()())}))})]}):null}),H=(n(37),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),B=n(21),U=n.n(B),z=(n(38),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top","aria-label":"Scroll to top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),G=(n(39),function(){return x?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(x),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/asdeiva/deiva-pf",className:"link footer__link",children:"Created By Deiva Sivam"})})}),Y=(n(41),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(w,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(M,{}),Object(s.jsx)(F,{}),Object(s.jsx)(H,{}),Object(s.jsx)(G,{})]}),Object(s.jsx)(z,{}),Object(s.jsx)(W,{})]})});n(42);Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e1cc9f13.chunk.js.map