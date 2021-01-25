(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),d=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?s.a.createElement(f,i(i({ref:t},l),{},{components:n})):s.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(7),r=(n(0),n(107)),o={id:"about",title:"About Jess",slug:"/"},i={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"About Jess",description:"Jess is in early alpha, so features and syntax are likely to change!",source:"@site/docs/about.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/jesscss/jess/tree/master/packages/docs/docs/about.md",version:"current",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/install"}},c=[{value:"What makes Jess different from Less?",id:"what-makes-jess-different-from-less",children:[]},{value:"Why do some of Jess&#39;s features look like Sass?",id:"why-do-some-of-jesss-features-look-like-sass",children:[]},{value:"How is Jess different from both Sass and Less?",id:"how-is-jess-different-from-both-sass-and-less",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Jess is in early alpha, so features and syntax are likely to change!"))),Object(r.b)("p",null,"Jess is a CSS pre-processing language like Less and Sass. In fact, Jess started as a re-write of Less from the ground-up, but evolved into a new language."),Object(r.b)("h3",{id:"what-makes-jess-different-from-less"},"What makes Jess different from Less?"),Object(r.b)("p",null,"Jess can transpile directly to JavaScript; in fact, Jess's variable and mixin features are simply JavaScript variables and functions. Jess's rule scope is just JavaScript function scope."),Object(r.b)("p",null,"Because of this, Jess can import and export JavaScript functions, primitive values, and objects, making it more interoperable with modern component libraries."),Object(r.b)("h3",{id:"why-do-some-of-jesss-features-look-like-sass"},"Why do some of Jess's features look like Sass?"),Object(r.b)("p",null,"Less was based on Sass when it used only indented syntax. Sass based ",Object(r.b)("inlineCode",{parentName:"p"},".scss"),' syntax on Less\'s model of "extending CSS". So Sass inspired Less, and Less inspired Sass, and both inspired Jess. (Jess also takes inspiration from CSS modules, Rollup and React, among others.)'),Object(r.b)("p",null,"A more detailed explanation: Less's mixin patterns, ultimately, function very differently from JavaScript. Less mixins can be overloaded, and JavaScript functions can't. Less mixins can have guards (evaluation conditions); JavaScript has no direct parallel. Sass mixin syntax was most compatible with programming patterns you're already familiar with in JavaScript."),Object(r.b)("p",null,"Jess's goal is to borrow the best ideas, and lean into what web developers already know."),Object(r.b)("h3",{id:"how-is-jess-different-from-both-sass-and-less"},"How is Jess different from both Sass and Less?"),Object(r.b)("p",null,"Jess variables and mixin names must be valid JavaScript identifiers (meaning they can't contain hyphens). They get exported from a JS module! For the same reason, you can't use JS reserved words in your identifiers."),Object(r.b)("p",null,"As noted, individual Jess files are exported as JS modules, so each file has a local scope. As such, you can't declare variables locally and then consume them in another file without directly importing."))}d.isMDXComponent=!0}}]);