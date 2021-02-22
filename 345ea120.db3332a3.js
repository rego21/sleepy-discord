(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{126:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),a=n(7),c=(n(0),n(320)),i={title:"SleepyDiscord::Ready"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_ready",id:"reference/Classes/struct_sleepy_discord_1_1_ready",isDocsHomePage:!1,title:"SleepyDiscord::Ready",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_ready.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_ready",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_ready",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::Reaction",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_reaction"},next:{title:"SleepyDiscord::Response",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_response"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Ready",id:"function-ready",children:[]},{value:"function Ready",id:"function-ready-1",children:[]},{value:"function Ready",id:"function-ready-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable v",id:"variable-v",children:[]},{value:"variable user",id:"variable-user",children:[]},{value:"variable privateChannels",id:"variable-privatechannels",children:[]},{value:"variable servers",id:"variable-servers",children:[]},{value:"variable sessionID",id:"variable-sessionid",children:[]},{value:"variable shard",id:"variable-shard",children:[]}]}],o={toc:l};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},o,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-ready"},"function Ready"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Ready() =default\n")),Object(c.b)("h3",{id:"function-ready-1"},"function Ready"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Ready(\n    const json::Value & rawJSON\n)\n")),Object(c.b)("h3",{id:"function-ready-2"},"function Ready"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Ready(\n    const nonstd::string_view & rawJSON\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::StdArrayTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-v"},"variable v"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int v;\n")),Object(c.b)("h3",{id:"variable-user"},"variable user"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"User user;\n")),Object(c.b)("h3",{id:"variable-privatechannels"},"variable privateChannels"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::list< Channel > privateChannels;\n")),Object(c.b)("h3",{id:"variable-servers"},"variable servers"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::list< UnavailableServer > servers;\n")),Object(c.b)("h3",{id:"variable-sessionid"},"variable sessionID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string sessionID;\n")),Object(c.b)("h3",{id:"variable-shard"},"variable shard"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::array< int, 2 > shard = { {0, 1} };\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 22 February 2021 at 17:44:22 UTC"))}d.isMDXComponent=!0},320:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var r=a.a.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=d(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=t,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||c;return n?a.a.createElement(f,s(s({ref:r},o),{},{components:n})):a.a.createElement(f,s({ref:r},o))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);