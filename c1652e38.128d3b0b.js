(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),c=(r(0),r(320)),a={title:"SleepyDiscord::ActivityParty"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_activity_party",id:"reference/Classes/struct_sleepy_discord_1_1_activity_party",isDocsHomePage:!1,title:"SleepyDiscord::ActivityParty",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_activity_party.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_activity_party",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_party",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ActivityAssets",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_assets"},next:{title:"SleepyDiscord::ActivitySecrets",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_secrets"}},s=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ActivityParty",id:"function-activityparty",children:[]},{value:"function ~ActivityParty",id:"function-activityparty-1",children:[]},{value:"function ActivityParty",id:"function-activityparty-2",children:[]},{value:"function ActivityParty",id:"function-activityparty-3",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable ID",id:"variable-id",children:[]},{value:"variable size",id:"variable-size",children:[]},{value:"variable currentSize",id:"variable-currentsize",children:[]},{value:"variable maxSize",id:"variable-maxsize",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inherits from ",Object(c.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-activityparty"},"function ActivityParty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityParty() =default\n")),Object(c.b)("h3",{id:"function-activityparty-1"},"function ~ActivityParty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"~ActivityParty() =default\n")),Object(c.b)("h3",{id:"function-activityparty-2"},"function ActivityParty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityParty(\n    const json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-activityparty-3"},"function ActivityParty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ActivityParty(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::StdArrayTypeHelper > &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-id"},"variable ID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string ID;\n")),Object(c.b)("h3",{id:"variable-size"},"variable size"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::array< int64_t, 2 > size;\n")),Object(c.b)("h3",{id:"variable-currentsize"},"variable currentSize"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t & currentSize = size[0];\n")),Object(c.b)("h3",{id:"variable-maxsize"},"variable maxSize"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t & maxSize = size[1];\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 22 February 2021 at 17:44:22 UTC"))}u.isMDXComponent=!0},320:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,y=p["".concat(a,".").concat(d)]||p[d]||b[d]||c;return r?i.a.createElement(y,o(o({ref:t},l),{},{components:r})):i.a.createElement(y,o({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);