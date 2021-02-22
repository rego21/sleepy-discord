(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(320)),i={title:"SleepyDiscord::Route"},u={unversionedId:"reference/Classes/class_sleepy_discord_1_1_route",id:"reference/Classes/class_sleepy_discord_1_1_route",isDocsHomePage:!1,title:"SleepyDiscord::Route",description:"Public Types Documentation",source:"@site/docs/reference/Classes/class_sleepy_discord_1_1_route.md",slug:"/reference/Classes/class_sleepy_discord_1_1_route",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_route",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::IdentifiableDiscordObject",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_identifiable_discord_object"},next:{title:"SleepyDiscord::ServerCache",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_server_cache"}},s=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"using Bucket",id:"using-bucket",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Route",id:"function-route",children:[]},{value:"function Route",id:"function-route-1",children:[]},{value:"function url",id:"function-url",children:[]},{value:"function bucket",id:"function-bucket",children:[]},{value:"function operator const std::string &amp;",id:"function-operator-const-stdstring-",children:[]}]}],a={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(o.b)("h3",{id:"using-bucket"},"using Bucket"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::Route::Bucket =  std::string;\n")),Object(o.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(o.b)("h3",{id:"function-route"},"function Route"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"Route(\n    const std::string route,\n    const std::initializer_list< std::string > & _values ={}\n)\n")),Object(o.b)("h3",{id:"function-route-1"},"function Route"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"Route(\n    const char * route\n)\n")),Object(o.b)("h3",{id:"function-url"},"function url"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"inline const std::string & url()\n")),Object(o.b)("h3",{id:"function-bucket"},"function bucket"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"const Bucket bucket(\n    RequestMethod method\n)\n")),Object(o.b)("h3",{id:"function-operator-const-stdstring-"},"function operator const std::string &"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"inline operator const std::string &()\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on 22 February 2021 at 17:44:22 UTC"))}l.isMDXComponent=!0},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=c.a.createContext({}),l=function(e){var t=c.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return c.a.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?c.a.createElement(f,u(u({ref:t},a),{},{components:n})):c.a.createElement(f,u({ref:t},a))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var a=2;a<o;a++)i[a]=n[a];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);