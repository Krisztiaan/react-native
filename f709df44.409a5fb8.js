(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1008:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,O=d["".concat(l,".").concat(s)]||d[s]||u[s]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},972:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(1008)),l={id:"statusbar",title:"StatusBar"},c={unversionedId:"statusbar",id:"version-0.60/statusbar",isDocsHomePage:!1,title:"StatusBar",description:"Component to control the app status bar.",source:"@site/versioned_docs/version-0.60/statusbar.md",slug:"/statusbar",permalink:"/docs/0.60/statusbar",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/statusbar.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"Slider",permalink:"/docs/0.60/slider"},next:{title:"Switch",permalink:"/docs/0.60/switch"}},i=[{value:"Usage with Navigator",id:"usage-with-navigator",children:[]},{value:"Imperative API",id:"imperative-api",children:[]},{value:"Constants",id:"constants",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>networkActivityIndicatorVisible</code>",id:"networkactivityindicatorvisible",children:[]},{value:"<code>showHideTransition</code>",id:"showhidetransition",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>popStackEntry()</code>",id:"popstackentry",children:[]},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",children:[]},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",children:[]},{value:"<code>setBackgroundColor()</code>",id:"setbackgroundcolor",children:[]},{value:"<code>setBarStyle()</code>",id:"setbarstyle",children:[]},{value:"<code>setHidden()</code>",id:"sethidden",children:[]},{value:"<code>setNetworkActivityIndicatorVisible()</code>",id:"setnetworkactivityindicatorvisible",children:[]},{value:"<code>setTranslucent()</code>",id:"settranslucent",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"StatusBarAnimation",id:"statusbaranimation",children:[]},{value:"StatusBarStyle",id:"statusbarstyle",children:[]}]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Component to control the app status bar."),Object(b.b)("h3",{id:"usage-with-navigator"},"Usage with Navigator"),Object(b.b)("p",null,"It is possible to have multiple ",Object(b.b)("inlineCode",{parentName:"p"},"StatusBar")," components mounted at the same time. The props will be merged in the order the ",Object(b.b)("inlineCode",{parentName:"p"},"StatusBar")," components were mounted."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},'<View>\n  <StatusBar backgroundColor="blue" barStyle="light-content" />\n  <View>\n    <StatusBar hidden={route.statusBarHidden} />\n    ...\n  </View>\n</View>\n')),Object(b.b)("h3",{id:"imperative-api"},"Imperative API"),Object(b.b)("p",null,"For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"constants"},"Constants"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"currentHeight")," (Android only) The height of the status bar."),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"animated"},Object(b.b)("inlineCode",{parentName:"h3"},"animated")),Object(b.b)("p",null,"If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"backgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(b.b)("p",null,"The background color of the status bar."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/0.60/colors"},"color")),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"barstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"barStyle")),Object(b.b)("p",null,"Sets the color of the status bar text."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('default', 'light-content', 'dark-content')"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hidden"},Object(b.b)("inlineCode",{parentName:"h3"},"hidden")),Object(b.b)("p",null,"If the status bar is hidden."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"networkactivityindicatorvisible"},Object(b.b)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")),Object(b.b)("p",null,"If the network activity indicator should be visible."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"showhidetransition"},Object(b.b)("inlineCode",{parentName:"h3"},"showHideTransition")),Object(b.b)("p",null,"The transition effect when showing and hiding the status bar using the ",Object(b.b)("inlineCode",{parentName:"p"},"hidden")," prop. Defaults to 'fade'."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('fade', 'slide')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"translucent"},Object(b.b)("inlineCode",{parentName:"h3"},"translucent")),Object(b.b)("p",null,"If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"bool"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"popstackentry"},Object(b.b)("inlineCode",{parentName:"h3"},"popStackEntry()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static popStackEntry(entry: any)\n")),Object(b.b)("p",null,"Get and remove the last a StatusBar entry from the stack."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"entry"),Object(b.b)("td",{parentName:"tr",align:null},"any"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Entry returned from ",Object(b.b)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"pushstackentry"},Object(b.b)("inlineCode",{parentName:"h3"},"pushStackEntry()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static pushStackEntry(props: any)\n")),Object(b.b)("p",null,"Push a StatusBar entry onto the stack. The return value should be passed to ",Object(b.b)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"props"),Object(b.b)("td",{parentName:"tr",align:null},"any"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Object containing the StatusBar props to use in the stack entry.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"replacestackentry"},Object(b.b)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static replaceStackEntry(entry: any, props: any)\n")),Object(b.b)("p",null,"Replace an existing StatusBar stack entry with new props."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"entry"),Object(b.b)("td",{parentName:"tr",align:null},"any"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Entry returned from ",Object(b.b)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"props"),Object(b.b)("td",{parentName:"tr",align:null},"any"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Object containing the StatusBar props to use in the replacement stack entry.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"setBackgroundColor()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static setBackgroundColor(color: string, [animated]: boolean)\n")),Object(b.b)("p",null,"Set the background color for the status bar. Android-only"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Background color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"animated"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Animate the style change.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setbarstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"setBarStyle()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),Object(b.b)("p",null,"Set the status bar style"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"style"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/0.60/statusbar#statusbarstyle"},"StatusBarStyle")),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Status bar style to set")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"animated"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Animate the style change.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sethidden"},Object(b.b)("inlineCode",{parentName:"h3"},"setHidden()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),Object(b.b)("p",null,"Show or hide the status bar"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"hidden"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Hide the status bar.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"animation"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/0.60/statusbar#statusbaranimation"},"StatusBarAnimation")),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Optional animation when changing the status bar hidden property.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setnetworkactivityindicatorvisible"},Object(b.b)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),Object(b.b)("p",null,"Control the visibility of the network activity indicator. iOS-only."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"visible"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Show the indicator.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"settranslucent"},Object(b.b)("inlineCode",{parentName:"h3"},"setTranslucent()")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"static setTranslucent(translucent: boolean)\n")),Object(b.b)("p",null,"Control the translucency of the status bar. Android-only."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"translucent"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Set as translucent.")))),Object(b.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(b.b)("h3",{id:"statusbaranimation"},"StatusBarAnimation"),Object(b.b)("p",null,"Status bar animation"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Value"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"none"),Object(b.b)("td",{parentName:"tr",align:null},"No animation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"fade"),Object(b.b)("td",{parentName:"tr",align:null},"Fade animation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"slide"),Object(b.b)("td",{parentName:"tr",align:null},"Slide animation")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"statusbarstyle"},"StatusBarStyle"),Object(b.b)("p",null,"Status bar style"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Value"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"default"),Object(b.b)("td",{parentName:"tr",align:null},"Default status bar style (dark for iOS, light for Android)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"light-content"),Object(b.b)("td",{parentName:"tr",align:null},"Dark background, white texts and icons")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"dark-content"),Object(b.b)("td",{parentName:"tr",align:null},"Light background, dark texts and icons (requires API>=23 on Android)")))))}p.isMDXComponent=!0}}]);