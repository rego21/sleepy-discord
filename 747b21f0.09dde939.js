(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),s=(t(0),t(320)),a={title:"Using only Sleepy Discord"},i={unversionedId:"only-sleepy-discord",id:"only-sleepy-discord",isDocsHomePage:!1,title:"Using only Sleepy Discord",description:"There are at 3 things that the library needs in order to function the Websocket client and Sessions. There are also a few optional parts that allow for optional features such as voice. Currently, The only one optional part is UDP.",source:"@site/docs/only-sleepy-discord.md",slug:"/only-sleepy-discord",permalink:"/sleepy-discord/docs/only-sleepy-discord",version:"current",lastUpdatedAt:1612689535,sidebar:"Docs",previous:{title:"Common Errors",permalink:"/sleepy-discord/docs/common-build-errors"},next:{title:"Events",permalink:"/sleepy-discord/docs/events"}},c=[{value:"HTTPS",id:"https",children:[]},{value:"WebSockets",id:"websockets",children:[]},{value:"Async I/O",id:"async-io",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"There are at 3 things that the library needs in order to function: WebSocket Secure, HTTPS, and Async Input/Output. The library splits this up into a 2 main parts: the Websocket client and Sessions. There are also a few optional parts that allow for optional features such as voice. Currently, The only one optional part is UDP."),Object(s.b)("aside",null," There are a actually a few libraries that is part of Sleepy Discord. They are json and string view libraries. However, those are cross-platform and shouldn't cause any issues with compatibility. "),Object(s.b)("h2",{id:"https"},"HTTPS"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"class MySession : public SleepyDiscord::GenericSession {\n    MySession() = default;\n}\n")),Object(s.b)("p",null,"You'll need to create a class that inherits ",Object(s.b)("inlineCode",{parentName:"p"},"GenericSession"),"."),Object(s.b)("p",null,"This rest is mostly self-explanatory. You basicity implement functions that do what it the function name suggest."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"void setUrl(const std::string& _url) override;\n")),Object(s.b)("p",null,"This is self-explanatory."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"void setBody(const std::string* body) override;\n")),Object(s.b)("p",null,"body is the data that will be sent in the body of the HTTP request."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"void setHeader(const std::vector<SleepyDiscord::HeaderPair>& header) override;\n")),Object(s.b)("p",null,"header is a list of header fields. ",Object(s.b)("inlineCode",{parentName:"p"},"SleepyDiscord::HeaderPair")," has two variables, name and value."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"void setMultipart(const std::initializer_list<SleepyDiscord::Part>& parts) override;\n")),Object(s.b)("p",null,"Like header, parts is a list of parts. SleepyDiscord::Part has 3 variables, name, value, and isFile."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"SleepyDiscord::Response Post  () override;\nSleepyDiscord::Response Patch () override;\nSleepyDiscord::Response Delete() override;\nSleepyDiscord::Response Get   () override;\nSleepyDiscord::Response Put   () override;\n")),Object(s.b)("p",null,"This sends the https request. The only difference between each function is that they use different HTTP methods."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Execute this line at the start of your program\nSleepyDiscord::CustomInit SleepyDiscord::Session::init = \n    []()->SleepyDiscord::GenericSession* { return new MySession; };\n")),Object(s.b)("p",null,"You need to set SleepyDiscord::Session::init to a function that returns a pointer to a new Session. You can put this in the beginning of your cpp file after including the header file with your session class."),Object(s.b)("h2",{id:"websockets"},"WebSockets"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"class MyWebsocketConnection : public SleepyDiscord::GenericWebsocketConnection {\npublic:\n    MyWebsocketConnection() {}\n    MyWebsocketConnection(std::string token) {\n        start(token);\n    }\n\n    MyConnectionHandle handle;\n}\n")),Object(s.b)("p",null,"You are going to need a WebSocket Connection class that the library will pass around in a ",Object(s.b)("inlineCode",{parentName:"p"},"std::shared_ptr<GenericWebsocketConnection>")," called ",Object(s.b)("inlineCode",{parentName:"p"},"WebsocketConnection"),". ",Object(s.b)("inlineCode",{parentName:"p"},"GenericWebsocketConnection")," is an empty class so this acts like a ",Object(s.b)("inlineCode",{parentName:"p"},"std::shared_ptr<void>"),". You can put anything you want in this class, but you'll likely need to handle in there. You'll also likely want to store a reference to the ",Object(s.b)("inlineCode",{parentName:"p"},"GenericMessageReceiver")," in it, but it's optional if you don't want to. We'll talk about ",Object(s.b)("inlineCode",{parentName:"p"},"GenericMessageReceiver")," later. You'll also need to call ",Object(s.b)("inlineCode",{parentName:"p"},"start")," at some point, the constructor isn't a bad place to do this."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"class MyWebsocketClient : public SleepyDiscord::BaseDiscordClient {\n    MyWebsocketClient() = default;\n}\n\n//The typedef is optional.\ntypedef MyWebsocketClient DiscordClient;\n")),Object(s.b)("p",null,"The WebSocket client is actually a child of The ",Object(s.b)("inlineCode",{parentName:"p"},"BaseDiscordClient")," and using a typedef is renamed to ",Object(s.b)("inlineCode",{parentName:"p"},"DiscordClient"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Add these function decelerations to your WebsocketClient\n//Optional: These should can be set to private\nbool connect(\n    const std::string & uri,\n    GenericMessageReceiver* messageProcessor,\n    WebsocketConnection& connection\n) override {\n    MyConnectionHandle handle = websocket.connect(uri); //connect and get handle from websocket library\n    connection = std::make_shared<MyWebsocketConnection>(messageProcessor, handle);\n    return false; //you don't need to return a bool, it was related to a removed feature.\n}\n\nvoid disconnect(\n    unsigned int code,\n    const std::string reason,\n    WebsocketConnection& connection\n) override {\n    connection.get<MyWebsocketConnection>().handle.disconnect()\n}\n\nvoid send(\n    std::string message,\n    WebsocketConnection& connection\n) override {\n    connection.get<MyWebsocketConnection>().handle.send(message);\n}\n")),Object(s.b)("p",null,"There are 3 virtual functions that you need to override: connect, disconnect, and send. In ",Object(s.b)("inlineCode",{parentName:"p"},"connect"),", set ",Object(s.b)("inlineCode",{parentName:"p"},"connection")," to a new connection object with you ",Object(s.b)("inlineCode",{parentName:"p"},"WebsocketConnection")," class. Use ",Object(s.b)("inlineCode",{parentName:"p"},"std::shared_ptr"),"'s ",Object(s.b)("inlineCode",{parentName:"p"},"get")," to get your ",Object(s.b)("inlineCode",{parentName:"p"},"WebSocketConnection"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Add the equivalent code to your connect function\nwebsocket.onOpen = [=]() {\n    messageProcessor->initialize();\n}\n\nwebsocket.onClose = [=](int16_t closeCode) {\n    messageProcessor->processCloseCode(closeCode);\n}\n\nwebsocket.onMessage = [=](std::string message) {\n    messageProcessor->processMessage(handle.getMessage(message))\n}\n\nwebsocket.onFail = [=]() {\n    messageProcessor->handleFailToConnect();\n}\n")),Object(s.b)("p",null,"This is where you'll need ",Object(s.b)("inlineCode",{parentName:"p"},"messageProcessor"),", you'll need to call it's member functions in the websocket callbacks. If you can't capture ",Object(s.b)("inlineCode",{parentName:"p"},"messageProcessor"),", then you'll want to have a reference to it in your connection class."),Object(s.b)("h2",{id:"async-io"},"Async I/O"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Add these function declarations to your WebsocketClient class\nvoid run();\nTimer schedule(TimedTask code, const time_t milliseconds) override;\n")),Object(s.b)("p",null,"There's 1 function you'll need to implement, ",Object(s.b)("inlineCode",{parentName:"p"},"schedule"),". ",Object(s.b)("inlineCode",{parentName:"p"},"run")," is optional. Async I/O is done inside the ",Object(s.b)("inlineCode",{parentName:"p"},"WebSocketClient")," so place them in there."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Add the equivalent code\nTimer MyWebsocketClient::schedule(TimedTask code, const time_t milliseconds) {\n    Library::Timer timer = Library::createTimer(code, milliseconds);\n    return Timer([timer](){\n        timer.stop();\n    });\n}\n")),Object(s.b)("p",null,"Create a timer that will call ",Object(s.b)("inlineCode",{parentName:"p"},"code")," in ",Object(s.b)("inlineCode",{parentName:"p"},"milliseconds")," milliseconds. Then, return a function to stop the timer."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},"//Here's an example of run\nvoid run() {\n    Library::run();\n}\n")))}p.isMDXComponent=!0},320:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=o,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||s;return t?r.a.createElement(m,i(i({ref:n},l),{},{components:t})):r.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);