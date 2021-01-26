(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||i;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(109)),a={id:"imports",title:"Imports"},s={unversionedId:"imports",id:"imports",isDocsHomePage:!1,title:"Imports",description:"`scss",source:"@site/docs/imports.md",slug:"/imports",permalink:"/docs/imports",editUrl:"https://github.com/jesscss/jess/tree/master/packages/docs/docs/imports.md",version:"current",sidebar:"someSidebar",previous:{title:"Mixins",permalink:"/docs/mixins"},next:{title:"Functions",permalink:"/docs/functions"}},c=[{value:"Ignoring imports",id:"ignoring-imports",children:[]},{value:"Importing stylesheets",id:"importing-stylesheets",children:[]},{value:"Importing into JS Components",id:"importing-into-js-components",children:[{value:"Using with React",id:"using-with-react",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Jess can import from other Jess stylesheets and JavaScript, and you can use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://rollupjs.org/"}),"Rollup")," plugins to extend the types of imports."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"// JavaScript example\n@import { WIDTH } from './constants.js';\n\n.box {\n  width: $(WIDTH)px;\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"// Jess example\n@import { myMixin } from './mixins.jess';\n\n.box {\n  @include myMixin();\n}\n")),Object(i.b)("h3",{id:"ignoring-imports"},"Ignoring imports"),Object(i.b)("p",null,"Imports that are not using the ES module pattern are ignored / output as-is. The output for the following will be the same as input."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),'@import url("fonts.css");\n')),Object(i.b)("h3",{id:"importing-stylesheets"},"Importing stylesheets"),Object(i.b)("p",null,"You can import / mixin entire stylesheets using the default export."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"@import nav from './nav.jess';\n@include nav();\n")),Object(i.b)("h2",{id:"importing-into-js-components"},"Importing into JS Components"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This requires the Rollup or Webpack plugin, which are not ready yet! So this part of the API is currently the least stable and needs the most input!"))),Object(i.b)("h3",{id:"using-with-react"},"Using with React"),Object(i.b)("p",null,"The idea is you will be able to do this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import styles, { myMixin } from 'component.jess'\nconst css = styles()\n\nexport const myComponent = props => {\n  return <div className={css.box} style={myMixin(props.something).obj()}>foo</div>\n}\n")),Object(i.b)("p",null,"...with this..."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"@mixin myMixin(something) {\n  width: $something;\n  color: white;\n}\n.box {\n  display: flex;\n  align-items: center;\n}\n")))}l.isMDXComponent=!0}}]);