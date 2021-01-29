(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(112)),s={id:"js",title:"JS-in-CSS"},i={unversionedId:"features/js",id:"features/js",isDocsHomePage:!1,title:"JS-in-CSS",description:"Jess allows you to insert JavaScript expressions with the use of the $ symbol. Think of it like ${} in a template tag (although a bit more sophisticated).",source:"@site/docs/features/js.md",slug:"/features/js",permalink:"/docs/features/js",editUrl:"https://github.com/jesscss/jess/tree/master/packages/docs/docs/features/js.md",version:"current",sidebar:"someSidebar",previous:{title:"Nesting",permalink:"/docs/features/nesting"},next:{title:"Variables",permalink:"/docs/features/variables"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Jess allows you to insert JavaScript expressions with the use of the ",Object(o.b)("inlineCode",{parentName:"p"},"$")," symbol. Think of it like ",Object(o.b)("inlineCode",{parentName:"p"},"${}")," in a template tag (although a bit more sophisticated)."),Object(o.b)("p",null,"As long as the JavaScript statement is continuous (no spaces outside of parens), then it will be treated as a JS expression. The exception is that an initial ",Object(o.b)("inlineCode",{parentName:"p"},"$(")," will match a final ",Object(o.b)("inlineCode",{parentName:"p"},")")," as the end of the expression."),Object(o.b)("p",null,"A very simple example would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".box {\n  width: $(1 + 1)px;\n}\n")),Object(o.b)("p",null,"This would produce:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".box {\n  width: 2px;\n}\n")),Object(o.b)("p",null,"These are also all considered valid JS expressions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),".box {\n  one:   $content;\n  two:   $( content ); // Same as previous line\n  three: $content.prop;\n  four:  $content['prop'];\n  five:  $'content';\n  six:   $myFunction(1, 2, 3);\n}\n")),Object(o.b)("p",null,"You can, of course, mix JS expressions with CSS values, like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),".box {\n  border: 1px solid $myColor;\n}\n")))}p.isMDXComponent=!0}}]);