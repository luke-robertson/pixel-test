(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{440:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(818);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(60);__webpack_exports__.a=function App(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{className:"App-header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["Edit ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"src/App.tsx"})," and save to reload. This is the 2nd branch."]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",{children:"This is my first page"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"This is my first page"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"This is my first page"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4",{children:"This is my first page"})]})})}},461:function(module,exports,__webpack_require__){__webpack_require__(462),__webpack_require__(619),__webpack_require__(620),__webpack_require__(820),__webpack_require__(821),__webpack_require__(824),__webpack_require__(825),__webpack_require__(823),__webpack_require__(822),__webpack_require__(826),__webpack_require__(827),module.exports=__webpack_require__(814)},529:function(module,exports){},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(191)},814:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(191).configure)([__webpack_require__(815),__webpack_require__(816)],module,!1)}).call(this,__webpack_require__(185)(module))},815:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=815},816:function(module,exports,__webpack_require__){var map={"./stories/App.stories.tsx":817};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=816},817:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(191),_App__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(440)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(60);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("App",module).addParameters({storySource:{source:"import { storiesOf } from '@storybook/react';\nimport * as React from 'react';\nimport App from '../App';\n\nstoriesOf('App', module)\n  .add('main app', () => <App />)\n",locationsMap:{"main-app":{startLoc:{col:7,line:6},endLoc:{col:32,line:6},startBody:{col:19,line:6},endBody:{col:32,line:6}}}}}).add("main app",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__.a,{})}))}.call(this,__webpack_require__(168)(module))},818:function(module,exports,__webpack_require__){},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(832),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[461,2,3]]]);