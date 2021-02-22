(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{320:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},y=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,f=u["".concat(o,".").concat(y)]||u[y]||d[y]||c;return n?i.a.createElement(f,p(p({ref:t},l),{},{components:n})):i.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=y;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),c=(n(0),n(320)),o={title:"SleepyDiscord::json::PrimitiveTypeHelper"},p={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_primitive_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_primitive_type_helper",isDocsHomePage:!1,title:"SleepyDiscord::json::PrimitiveTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_primitive_type_helper.md",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_primitive_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_primitive_type_helper",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::json::PairImpl",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_pair_impl"},next:{title:"SleepyDiscord::json::StdArrayTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_std_array_type_helper"}},a=[{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function fromType",id:"function-fromtype",children:[]}]}],l={toc:a};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null," ",Object(c.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(c.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"template <class PrimitiveType ,\nint defaultValue =0>\nstruct SleepyDiscord::json::PrimitiveTypeHelper;\n")),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-totype"},"function toType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline PrimitiveType toType(\n    const Value & value\n)\n")),Object(c.b)("h3",{id:"function-empty"},"function empty"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const PrimitiveType & value\n)\n")),Object(c.b)("h3",{id:"function-fromtype"},"function fromType"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Value fromType(\n    const PrimitiveType & value,\n    Value::AllocatorType & \n)\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 22 February 2021 at 17:44:22 UTC"))}s.isMDXComponent=!0}}]);