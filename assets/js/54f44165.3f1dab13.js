"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,N=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return a?n.createElement(N,o(o({ref:t},p),{},{components:a})):n.createElement(N,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},o=void 0,l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"React Native Skia brings the Skia Graphics Library to React Native.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/react-native-skia/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},sidebar:"tutorialSidebar",next:{title:"Hello World",permalink:"/react-native-skia/docs/getting-started/hello-world"}},s={},d=[{value:"Bundle Size",id:"bundle-size",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:"Proguard",id:"proguard",level:3},{value:"TroubleShooting",id:"troubleshooting",level:3},{value:"Web",id:"web",level:2},{value:"Playground",id:"playground",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing with Jest",id:"testing-with-jest",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native Skia brings the ",(0,r.kt)("a",{parentName:"p",href:"https://skia.org/"},"Skia Graphics Library")," to React Native.\nSkia serves as the graphics engine for Google Chrome and Chrome OS, Android, Flutter, Mozilla Firefox, Firefox OS, and many other products."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Version compatibility:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"react-native@>=0.66")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"react@>=18")," are required.\nIn addition you should make sure you're on at least ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS 13")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Android API level 16")," or above.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install the library using yarn:")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn add @shopify/react-native-skia"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn add @shopify/react-native-skia")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Or using npm:")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install @shopify/react-native-skia"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install @shopify/react-native-skia")))))),(0,r.kt)("h3",{id:"bundle-size"},"Bundle Size"),(0,r.kt)("p",null,"Below is the app size increase to be expected when adding React Native Skia to your project (",(0,r.kt)("a",{parentName:"p",href:"bundle-size"},"learn more"),")."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"4 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"7,2 MB")))),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," directory."),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"Currently, you will need Android NDK to be installed.\nIf you have Android Studio installed, make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"$ANDROID_NDK")," is available.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ANDROID_NDK=/Users/username/Library/Android/sdk/ndk/<version>")," for instance."),(0,r.kt)("p",null,"If the NDK is not installed, you can install it via Android Studio by going to the menu ",(0,r.kt)("em",{parentName:"p"},"File > Project Structure")),(0,r.kt)("p",null,"And then the ",(0,r.kt)("em",{parentName:"p"},"SDK Location")," section. It will show you the NDK path, or the option to download it if you don't have it installed."),(0,r.kt)("h3",{id:"proguard"},"Proguard"),(0,r.kt)("p",null,"If you're using Proguard, make sure to add the following rule:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }")))))),(0,r.kt)("h3",{id:"troubleshooting"},"TroubleShooting"),(0,r.kt)("p",null,"For error ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"CMake 'X.X.X' was not found in SDK, PATH, or by cmake.dir property."))),(0,r.kt)("p",null,"open ",(0,r.kt)("em",{parentName:"p"},"Tools > SDK Manager"),", switch to the ",(0,r.kt)("em",{parentName:"p"},"SDK Tools")," tab.\nFind ",(0,r.kt)("inlineCode",{parentName:"p"},"CMake")," and click ",(0,r.kt)("em",{parentName:"p"},"Show Package Details")," and download compatiable version ",(0,r.kt)("strong",{parentName:"p"},"'X.X.X'"),", and apply to install."),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("p",null,"To use this library in the browser, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/web"},"these instructions"),"."),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)("p",null,"We have an example project you can play with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-skia/tree/main/example"},"here"),"."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn bootstrap")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," example "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," yarn start"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn bootstrap")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," example "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," yarn start")))))),(0,r.kt)("p",null,"To run the example project on iOS, you will need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install"),", and on Android, you will also need Android NDK to be installed (",(0,r.kt)("a",{parentName:"p",href:"#android"},"see here"),")."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"As the library uses JSI for synchronous native methods access, remote debugging is no longer possible. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://fbflipper.com"},"Flipper")," for debugging your JS code, however, connecting the debugger to the JS context.\nThere is also an ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native#debugging-react-native-applications"},"React Native VSCode extension")," that can provide a great debugging experience when using React Native Skia."),(0,r.kt)("h2",{id:"testing-with-jest"},"Testing with Jest"),(0,r.kt)("p",null,"React Native Skia test mocks use web implementation which depends on loading CanvasKit. Before you begin using the mocks you need some setup actions."),(0,r.kt)("p",null,"In order to load CanvasKit and in turn loading the React Native Skia mock, you need to add the following your jest config:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// This is needed to load CanvasKit")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"globalSetup"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia/globalJestSetup.js"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// This is needed to load the mock")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"setupFiles"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia/jestSetup.js"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// This is needed to load CanvasKit")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"globalSetup"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia/globalJestSetup.js"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// This is needed to load the mock")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"setupFiles"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia/jestSetup.js"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]")))))))}c.isMDXComponent=!0}}]);