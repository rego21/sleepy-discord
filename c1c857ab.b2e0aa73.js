(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{299:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),s=t(7),o=(t(0),t(393)),c={title:"sleepy_discord/message.cpp"},a={unversionedId:"reference/Files/message_8cpp",id:"reference/Files/message_8cpp",isDocsHomePage:!1,title:"sleepy_discord/message.cpp",description:"Namespaces",source:"@site/docs/reference/Files/message_8cpp.md",slug:"/reference/Files/message_8cpp",permalink:"/sleepy-discord/docs/reference/Files/message_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/json_wrapper.h",permalink:"/sleepy-discord/docs/reference/Files/json__wrapper_8h"},next:{title:"include/sleepy_discord/message.h",permalink:"/sleepy-discord/docs/reference/Files/message_8h"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},Object(o.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(o.b)("h2",{id:"source-code"},"Source code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include "message.h"\n#include "client.h"\n\nnamespace SleepyDiscord {\n    Message::Message(json::Value& json) :\n        Message(json::fromJSON<Message>(json))\n    {}\n\n    bool Message::startsWith(const std::string& test) {\n        return content.compare(0, test.length(), test) == 0;\n    }\n\n    std::size_t Message::length() {\n        return content.length();\n    }\n\n    bool Message::isMentioned(Snowflake<User> userID) {\n        std::size_t size = mentions.size();\n        for (std::size_t i = 0; i < size; i++)\n            if (mentions[i].ID == userID) return true;\n        return false;\n    }\n\n    bool Message::isMentioned(User& _user) {\n        return isMentioned(_user.ID);\n    }\n\n    Message Message::send(BaseDiscordClient* client) {\n        return client->sendMessage(channelID, content, !embeds.empty() ? embeds[0] : Embed(), messageReference, static_cast<TTS>(tts));\n    }\n\n    Message Message::reply(BaseDiscordClient * client, std::string message, Embed embed)\n    {\n        return client->sendMessage(channelID, message, embed);\n    }\n\n    Message::Interaction::Interaction(const json::Value& json) :\n        Interaction(json::fromJSON<Message::Interaction>(json))\n    {}\n\n    Emoji::~Emoji() {\n    }\n\n    Emoji::Emoji(const json::Value& json) :\n        Emoji(json::fromJSON<Emoji>(json)) {\n    }\n\n    Reaction::~Reaction() {\n    }\n\n    Reaction::Reaction(const json::Value& json) :\n        Reaction(json::fromJSON<Reaction>(json)) {\n    }\n\n    StickerPack::~StickerPack() {}\n    StickerPack::StickerPack(const json::Value & json):\n        StickerPack(json::fromJSON<StickerPack>(json))\n    {}\n\n    Sticker::~Sticker() {}\n    Sticker::Sticker(const json::Value & json):\n        Sticker(json::fromJSON<Sticker>(json))\n    {}\n\n    MessageReference::MessageReference(const json::Value & json):\n        MessageReference(json::fromJSON<MessageReference>(json))\n    {}\n    AllowedMentions::AllowedMentions(const json::Value & json):\n        AllowedMentions(json::fromJSON<AllowedMentions>(json))\n    {}\n\n    ActionRow::ActionRow(json::Value& json) :\n        ActionRow(json::fromJSON<ActionRow>(json))\n    {}\n    Button::Button(const json::Value& json) :\n        Button(json::fromJSON<Button>(json))\n    {}\n    SelectMenu::SelectMenu(const json::Value& json) :\n        SelectMenu(json::fromJSON<SelectMenu>(json))\n    {}\n    SelectMenu::Option::Option(const json::Value& json) :\n        SelectMenu::Option(json::fromJSON<SelectMenu::Option>(json))\n    {}\n\n}\n')),Object(o.b)("hr",null),Object(o.b)("p",null,"Updated on 26 November 2021 at 18:07:04 UTC"))}p.isMDXComponent=!0},393:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var r=t(0),s=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),p=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,j=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?s.a.createElement(j,a(a({ref:n},l),{},{components:t})):s.a.createElement(j,a({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);