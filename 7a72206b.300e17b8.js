(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{218:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return d}));var t=r(3),o=r(7),c=(r(0),r(393)),i={title:"include/sleepy_discord/session.h"},s={unversionedId:"reference/Files/session_8h",id:"reference/Files/session_8h",isDocsHomePage:!1,title:"include/sleepy_discord/session.h",description:"Source code",source:"@site/docs/reference/Files/session_8h.md",slug:"/reference/Files/session_8h",permalink:"/sleepy-discord/docs/reference/Files/session_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/server.h",permalink:"/sleepy-discord/docs/reference/Files/server_8h"},next:{title:"sleepy_discord/slash_commands.cpp",permalink:"/sleepy-discord/docs/reference/Files/slash__commands_8cpp"}},a=[{value:"Source code",id:"source-code",children:[]}],l={toc:a};function d(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"source-code"},"Source code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "http.h"\n\n//custom dynamic\n#ifdef SLEEPY_CUSTOM_SESSION\n    #include "custom_session.h"\n\n    //defined\n    #elif defined(SLEEPY_SESSION) || defined(SLEEPY_SESSION_INCLUDE)\n        #ifdef SLEEPY_SESSION_INCLUDE\n            #include SLEEPY_SESSION_INCLUDE\n        #endif\n        #ifdef SLEEPY_SESSION\n            typedef SLEEPY_SESSION Session\n        #endif\n\n    //defaults\n#elif defined(SLEEPY_DISCORD_CMAKE)\n    #if defined(EXISTENT_CPR)\n        #include "cpr_session.h"\n    #else\n        #include "custom_session.h"\n    #endif\n#else\n    #include "cpr_session.h"\n    #ifdef NONEXISTENT_CPR\n\n        //last resort\n        #include "custom_session.h"\n    #endif\n#endif\n')),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 26 November 2021 at 18:07:04 UTC"))}d.isMDXComponent=!0},393:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=d(r),f=t,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return r?o.a.createElement(m,s(s({ref:n},l),{},{components:r})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,i=new Array(c);i[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);