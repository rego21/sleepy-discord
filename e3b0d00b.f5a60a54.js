(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{348:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return d}));var t=r(3),c=r(7),o=(r(0),r(393)),i={title:"include/sleepy_discord/udp_client.h"},u={unversionedId:"reference/Files/udp__client_8h",id:"reference/Files/udp__client_8h",isDocsHomePage:!1,title:"include/sleepy_discord/udp_client.h",description:"Source code",source:"@site/docs/reference/Files/udp__client_8h.md",slug:"/reference/Files/udp__client_8h",permalink:"/sleepy-discord/docs/reference/Files/udp__client_8h",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/udp.h",permalink:"/sleepy-discord/docs/reference/Files/udp_8h"},next:{title:"sleepy_discord/user.cpp",permalink:"/sleepy-discord/docs/reference/Files/user_8cpp"}},l=[{value:"Source code",id:"source-code",children:[]}],a={toc:l};function d(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},a,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include "udp.h"\n\n#ifdef SLEEPY_CUSTOM_UDP_CLIENT\n#include "custom_udp_client.h"\n#elif defined(SLEEPY_UDP_CLIENT)\ntypedef SLEEPY_UDP_CLIENT UDPClient\n#elif defined(SLEEPY_DISCORD_CMAKE)\n    #if defined(EXISTENT_ASIO)\n        #include "asio_udp.h"\n    #else\n        #include "custom_udp_client.h"\n    #endif\n#else\n    #include "asio_udp.h"\n    #ifdef NONEXISTENT_ASIO\n        #include "custom_udp_client.h"\n    #endif\n#endif\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on 26 November 2021 at 18:07:04 UTC"))}d.isMDXComponent=!0},393:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),c=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=c.a.createContext({}),d=function(e){var n=c.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=d(e.components);return c.a.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=t,b=p["".concat(i,".").concat(f)]||p[f]||s[f]||o;return r?c.a.createElement(b,u(u({ref:n},a),{},{components:r})):c.a.createElement(b,u({ref:n},a))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:t,i[1]=u;for(var a=2;a<o;a++)i[a]=r[a];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);