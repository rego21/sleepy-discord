(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var c=n(3),r=n(7),a=(n(0),n(320)),s={title:"sleepy_discord/http.cpp"},o={unversionedId:"reference/Files/http_8cpp",id:"reference/Files/http_8cpp",isDocsHomePage:!1,title:"sleepy_discord/http.cpp",description:"Namespaces",source:"@site/docs/reference/Files/http_8cpp.md",slug:"/reference/Files/http_8cpp",permalink:"/sleepy-discord/docs/reference/Files/http_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/generic_compression.h",permalink:"/sleepy-discord/docs/reference/Files/generic__compression_8h"},next:{title:"include/sleepy_discord/http.h",permalink:"/sleepy-discord/docs/reference/Files/http_8h"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"function getMethodName",id:"function-getmethodname",children:[]},{value:"function escapeURL",id:"function-escapeurl",children:[]}]},{value:"Source code",id:"source-code",children:[]}],p={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"const char *"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Files/http_8cpp#function-getmethodname"},"getMethodName")),"(const RequestMethod & method)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"std::string"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Files/http_8cpp#function-escapeurl"},"escapeURL")),"(const std::string & string)")))),Object(a.b)("h2",{id:"functions-documentation"},"Functions Documentation"),Object(a.b)("h3",{id:"function-getmethodname"},"function getMethodName"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"const char * getMethodName(\n    const RequestMethod & method\n)\n")),Object(a.b)("h3",{id:"function-escapeurl"},"function escapeURL"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string escapeURL(\n    const std::string & string\n)\n")),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"#include <cctype>\n#include <array>\n#include \"http.h\"\n\nnamespace SleepyDiscord {\n    //copied from cpr\n    bool caseInsensitiveCompare::operator()(const std::string& a, const std::string& b) const noexcept {\n        return std::lexicographical_compare(\n            a.begin(), a.end(), b.begin(), b.end(),\n            [](unsigned char ac, unsigned char bc) { return std::tolower(ac) < std::tolower(bc); });\n    }\n\n    const char * getMethodName(const RequestMethod & method) {\n        static constexpr char const * methodNames[] = { \"POST\", \"PATCH\", \"DELETE\", \"GET\", \"PUT\" };\n        return methodNames[method];\n    }\n\n    std::string escapeURL(const std::string& string) {\n        if (string.empty())\n            return string;\n        std::string target;\n        target.reserve(string.length());\n\n        static const auto isUrlUnresered = [](unsigned char character) {\n            //copied from libcurl\n            switch(character) {\n            case '0': case '1': case '2': case '3': case '4':\n            case '5': case '6': case '7': case '8': case '9':\n            case 'a': case 'b': case 'c': case 'd': case 'e':\n            case 'f': case 'g': case 'h': case 'i': case 'j':\n            case 'k': case 'l': case 'm': case 'n': case 'o':\n            case 'p': case 'q': case 'r': case 's': case 't':\n            case 'u': case 'v': case 'w': case 'x': case 'y': case 'z':\n            case 'A': case 'B': case 'C': case 'D': case 'E':\n            case 'F': case 'G': case 'H': case 'I': case 'J':\n            case 'K': case 'L': case 'M': case 'N': case 'O':\n            case 'P': case 'Q': case 'R': case 'S': case 'T':\n            case 'U': case 'V': case 'W': case 'X': case 'Y': case 'Z':\n            case '-': case '.': case '_': case '~':\n                return true;\n            default:\n                return false;\n            }\n        };\n\n        for (const auto sym : string) {\n            const unsigned char character = \n                static_cast<const unsigned char>(sym);\n            if (isUrlUnresered(character)) {\n                target += character;\n            } else {\n                //encode\n                static const std::array<char, 0xF + 1> hexConvert = {{\n                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',\n                    'A', 'B', 'C', 'D', 'E', 'F'\n                }};\n                const std::array<char, 4> encoded {{\n                    '%',\n                    hexConvert[((0xF << 4) & sym) >> 4],\n                    hexConvert[0xF & sym],\n                    0\n                }};\n                target.append(encoded.data());\n            }\n        }\n        return target;\n    }\n}\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on 22 February 2021 at 17:44:22 UTC"))}d.isMDXComponent=!0},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(n),b=c,m=l["".concat(s,".").concat(b)]||l[b]||u[b]||a;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,s=new Array(a);s[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);