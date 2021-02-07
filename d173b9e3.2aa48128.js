(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),s=n(7),r=(n(0),n(119)),o={id:"about",title:"About Jess",slug:"/"},i={unversionedId:"intro/about",id:"intro/about",isDocsHomePage:!1,title:"About Jess",description:"`less",source:"@site/docs/intro/about.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/jesscss/jess/tree/master/packages/docs/docs/intro/about.md",version:"current",sidebar:"someSidebar",next:{title:"Installation",permalink:"/docs/intro/install"}},c=[{value:"What is Jess?",id:"what-is-jess",children:[]},{value:"Why does Jess syntax somewhat resemble Sass?",id:"why-does-jess-syntax-somewhat-resemble-sass",children:[]},{value:"How is Jess different from CSS-in-JS?",id:"how-is-jess-different-from-css-in-js",children:[]},{value:"Why am I not already using Jess?",id:"why-am-i-not-already-using-jess",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-less"}),"// I am a Jess file\n@import { width } from './sizes.js';\n\n.container {\n  width: $(width)px;\n  display: flex;\n}\n")),Object(r.b)("h3",{id:"what-is-jess"},"What is Jess?"),Object(r.b)("p",null,"You can think of Jess as a CSS pre-processor like Less and Sass. In fact, Jess started as a re-write of Less from the ground-up, but evolved into something much more ",Object(r.b)("strong",{parentName:"p"},"powerful and dynamic"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Less")," and ",Object(r.b)("strong",{parentName:"p"},"Sass")," are ",Object(r.b)("em",{parentName:"p"},"interpreted languages"),", and run on top of another language environment. They have their own variables, scopes, and mixins which are interpreted at runtime by the host language."),Object(r.b)("p",null,"Jess takes another approach. ",Object(r.b)("strong",{parentName:"p"},"Jess converts to JavaScript.")," Jess variables are just JavaScript variables. Jess mixins are just JavaScript functions. ",Object(r.b)("strong",{parentName:"p"},"Jess is JavaScript.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { myMixin } from './mixins.jess';\n\nexport default (props) => (\n  <div style={myMixin(props.value)}>Styled by Jess</div>\n);\n")),Object(r.b)("p",null,"This gives Jess a few tremendous advantages over Sass and Less, such as:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Jess is fast because modern JavaScript engines are fast. Jess benchmarks at about ",Object(r.b)("strong",{parentName:"li"},"2x faster than Less")," for the same size stylesheet."),Object(r.b)("li",{parentName:"ol"},'Jess can perform "live" style updates in the browser, without re-parsing stylesheets. This is similar to CSS-in-JS.')),Object(r.b)("h3",{id:"why-does-jess-syntax-somewhat-resemble-sass"},"Why does Jess syntax somewhat resemble Sass?"),Object(r.b)("p",null,"Jess believes in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/w/index.php?title=Paving_the_cowpaths&redirect=no"}),Object(r.b)("em",{parentName:"a"},"paving the cowpaths")),". Jess is designed to be easy to transition to from Sass or Less (depending on features). Some concepts / syntax are borrowed from Sass, and some from Less. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./intro/migrating"}),"the migration guide"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"@mixin square(dimension) {\n  width: $dimension;\n  height: $dimension;\n}\n\n.box {\n  @include square(20px);\n}\n")),Object(r.b)("h3",{id:"how-is-jess-different-from-css-in-js"},"How is Jess different from CSS-in-JS?"),Object(r.b)("p",null,'CSS-in-JS, for a long time, was thought to be the only way to produce "dynamic" styles, but it comes with trade-offs. Jess has these advantages over CSS-in-JS:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You don't have to put your CSS in a JavaScript file."),Object(r.b)("li",{parentName:"ol"},'Many CSS-in-JS libraries don\'t produce static CSS at build-time (or take some effort to do so). Not only can Jess produce static CSS, but it can produce "patch-able" CSS, along with a module that can patch your CSS at any time. ',Object(r.b)("strong",{parentName:"li"},"It's kinda magic.")),Object(r.b)("li",{parentName:"ol"},"Many CSS-in-JS libraries give you dynamic styles at the cost of performance. Jess focuses on making CSS updates fast with minimal overhead.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-less"}),"// I am Jess's static output\n.container {\n  width: 640px;\n  display: flex;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-less"}),"// I am Jess's patch-able output, enabled\n// with the `dynamic` flag\n.container {\n  width: var(--v123456-0, 640px);\n  display: flex;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-less"}),"// I was computed and added to a style-sheet at runtime\n.container {\n  --v123456-0: 800px;\n}\n")),Object(r.b)("h3",{id:"why-am-i-not-already-using-jess"},"Why am I not already using Jess?"),Object(r.b)("p",null,"I mean, you ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/CssJess"}),"tell me"),"?"))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?s.a.createElement(d,i(i({ref:t},l),{},{components:n})):s.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);