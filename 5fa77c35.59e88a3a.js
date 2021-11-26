(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{190:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return s}));var t=r(3),c=r(7),a=(r(0),r(393)),o={title:"sleepy_discord/channel.cpp"},l={unversionedId:"reference/Files/channel_8cpp",id:"reference/Files/channel_8cpp",isDocsHomePage:!1,title:"sleepy_discord/channel.cpp",description:"Namespaces",source:"@site/docs/reference/Files/channel_8cpp.md",slug:"/reference/Files/channel_8cpp",permalink:"/sleepy-discord/docs/reference/Files/channel_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/cache.h",permalink:"/sleepy-discord/docs/reference/Files/cache_8h"},next:{title:"include/sleepy_discord/channel.h",permalink:"/sleepy-discord/docs/reference/Files/channel_8h"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],p={toc:i};function s(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#include "channel.h"\n\nnamespace SleepyDiscord {\n    Channel::~Channel() {\n\n    }\n\n    Channel::Channel(const json::Value& json) :\n        Channel(json::fromJSON<Channel>(json)) {\n    }\n\n    Overwrite::Overwrite(const json::Value& json) :\n        Overwrite(json::fromJSON<Overwrite>(json)) {\n    }\n\n}\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on 26 November 2021 at 18:07:04 UTC"))}s.isMDXComponent=!0},393:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),c=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),s=function(e){var n=c.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return c.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=t,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?c.a.createElement(f,l(l({ref:n},p),{},{components:r})):c.a.createElement(f,l({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);