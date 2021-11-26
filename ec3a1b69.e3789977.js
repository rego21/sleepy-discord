(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{357:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return d}));var c=r(3),t=r(7),s=(r(0),r(393)),l={title:"SleepyDiscord::GenericScheduleHandler"},a={unversionedId:"reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",id:"reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",isDocsHomePage:!1,title:"SleepyDiscord::GenericScheduleHandler",description:"Inherited by SleepyDiscord::ASIOBasedScheduleHandler",source:"@site/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler.md",slug:"/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_schedule_handler",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::GenericMessageReceiver",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_message_receiver"},next:{title:"SleepyDiscord::GenericSession",permalink:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_generic_session"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ~GenericScheduleHandler",id:"function-genericschedulehandler",children:[]},{value:"function schedule",id:"function-schedule",children:[]}]}],i={toc:o};function d(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},i,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Inherited by ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_based_schedule_handler"},"SleepyDiscord::ASIOBasedScheduleHandler")),Object(s.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(s.b)("h3",{id:"function-genericschedulehandler"},"function ~GenericScheduleHandler"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"virtual ~GenericScheduleHandler() =default\n")),Object(s.b)("h3",{id:"function-schedule"},"function schedule"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"virtual Timer schedule(\n    TimedTask code,\n    const time_t milliseconds\n) =0\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_websocketpp_schedule_handler#function-schedule"},"SleepyDiscord::WebsocketppScheduleHandler::schedule"),", ",Object(s.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_a_s_i_o_schedule_handler#function-schedule"},"SleepyDiscord::ASIOScheduleHandler::schedule")),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on 26 November 2021 at 18:07:03 UTC"))}d.isMDXComponent=!0},393:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return _}));var c=r(0),t=r.n(c);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,c,t=function(e,n){if(null==e)return{};var r,c,t={},s=Object.keys(e);for(c=0;c<s.length;c++)r=s[c],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)r=s[c],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=t.a.createContext({}),d=function(e){var n=t.a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=d(e.components);return t.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},f=t.a.forwardRef((function(e,n){var r=e.components,c=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=c,_=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return r?t.a.createElement(_,a(a({ref:n},i),{},{components:r})):t.a.createElement(_,a({ref:n},i))}));function _(e,n){var r=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var s=r.length,l=new Array(s);l[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:c,l[1]=a;for(var i=2;i<s;i++)l[i]=r[i];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);