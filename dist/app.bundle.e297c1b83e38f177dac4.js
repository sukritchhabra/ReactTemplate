!function(e){function n(n){for(var r,o,c=n[0],a=n[1],s=n[2],i=0,d=[];i<c.length;i++)o=c[i],H[o]&&d.push(H[o][0]),H[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(S&&S(n);d.length;)d.shift()();return I.push.apply(I,s||[]),t()}function t(){for(var e,n=0;n<I.length;n++){for(var t=I[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==H[c]&&(r=!1)}r&&(I.splice(n--,1),e=M(M.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===j&&D()}(e,n),r&&r(e,n)};var o,c=!0,a="e297c1b83e38f177dac4",s=1e4,i={},d=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:E,apply:A,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:i[e]};return o=void 0,n}var p=[],f="idle";function m(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,v,b,y=0,j=0,w={},O={},_={};function x(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,m("check"),(n=s,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return m("idle"),null;O={},w={},_=e.c,b=e.h,m("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},H)g(t);return"prepare"===f&&0===j&&0===y&&D(),n});var n}function g(e){_[e]?(O[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+a+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function D(){m("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then(function(){return A(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(x(t));e.resolve(n)}}function A(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,c,s;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,s=o.chain;if((c=P[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var i=0;i<c.parents.length;i++){var d=c.parents[i],u=P[d];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([d]),moduleId:a,parentId:d};-1===n.indexOf(d)&&(u.hot._acceptedDependencies[a]?(t[d]||(t[d]=[]),l(t[d],[a])):(delete t[d],n.push(d),r.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},h=[],y={},j=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var O;s=x(w);var E=!1,g=!1,D=!1,A="";switch((O=v[w]?u(s):{type:"disposed",moduleId:w}).chain&&(A="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(O),g=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return m("abort"),Promise.reject(E);if(g)for(s in y[s]=v[s],l(h,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,s)&&(p[s]||(p[s]=[]),l(p[s],O.outdatedDependencies[s]));D&&(l(h,[O.moduleId]),y[s]=j)}var I,R=[];for(r=0;r<h.length;r++)s=h[r],P[s]&&P[s].hot._selfAccepted&&R.push({module:s,errorHandler:P[s].hot._selfAccepted});m("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete H[e]}(e)});for(var k,N,S=h.slice();S.length>0;)if(s=S.pop(),c=P[s]){var T={},C=c.hot._disposeHandlers;for(o=0;o<C.length;o++)(t=C[o])(T);for(i[s]=T,c.hot.active=!1,delete P[s],delete p[s],o=0;o<c.children.length;o++){var V=P[c.children[o]];V&&((I=V.parents.indexOf(s))>=0&&V.parents.splice(I,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(c=P[s]))for(N=p[s],o=0;o<N.length;o++)k=N[o],(I=c.children.indexOf(k))>=0&&c.children.splice(I,1);for(s in m("apply"),a=b,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var q=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(c=P[s])){N=p[s];var U=[];for(r=0;r<N.length;r++)if(k=N[r],t=c.hot._acceptedDependencies[k]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:N[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<R.length;r++){var B=R[r];s=B.module,d=[s];try{M(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||q||(q=e)}}return q?(m("fail"),Promise.reject(q)):(m("idle"),new Promise(function(e){e(h)}))}var P={},H={0:0},I=[];function M(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=d,d=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=P[e];if(!n)return M;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(d=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),M(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,r(c));return t.e=function(e){return"ready"===f&&m("prepare"),j++,M.e(e).then(n,function(e){throw n(),e});function n(){j--,"prepare"===f&&(w[e]||g(e),0===j&&0===y&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),M.t(e,-2&n)},t}(n)),t.l=!0,t.exports}M.m=e,M.c=P,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="./dist/",M.h=function(){return a};var R=window.webpackJsonp=window.webpackJsonp||[],k=R.push.bind(R);R.push=n,R=R.slice();for(var N=0;N<R.length;N++)n(R[N]);var S=k;I.push([0,1]),t()}({"./src/base.scss":function(e,n,t){var r=t("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/components/App.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),c=(t("./src/components/styles/Header.scss"),function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"ReactTemplate"))}),a=t("./node_modules/prop-types/index.js"),s=t.n(a),i=t("./node_modules/react-redux/es/index.js"),d=t("./src/state/sample.js"),u=(t("./src/components/styles/Counter.scss"),function(e){var n=e.value,t=e.incValue,r=e.decValue;return o.a.createElement("div",{className:"counter"},o.a.createElement("h1",{className:"value"},n),o.a.createElement("button",{type:"button",className:"inc-button",onClick:t},"Increment"),o.a.createElement("button",{type:"button",className:"dec-button",onClick:r},"Decrement"))});u.propTypes={value:s.a.number.isRequired,incValue:s.a.func.isRequired,decValue:s.a.func.isRequired};var l=Object(i.b)(function(e){return{value:Object(d.c)(e)}},function(e){return{incValue:function(){return e(d.a.sampleIncrementAction())},decValue:function(){return e(d.a.sampleDecrementAction())}}})(u);n.default=function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(c,null),o.a.createElement(l,null))}},"./src/components/styles/Counter.scss":function(e,n,t){var r=t("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/components/styles/Header.scss":function(e,n,t){var r=t("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),o=t.n(r),c=t("./node_modules/react-dom/index.js"),a=t.n(c),s=t("./node_modules/react-router-dom/es/HashRouter.js"),i=t("./node_modules/react-redux/es/index.js"),d=t("./node_modules/react-hot-loader/index.js"),u=t("./src/store.jsx"),l=t("./src/components/App.jsx"),p=(t("./src/base.scss"),function(e){a.a.render(o.a.createElement(i.a,{store:u.a},o.a.createElement(s.a,null,o.a.createElement(d.AppContainer,null,o.a.createElement(e,null)))),document.getElementById("content"))});p(l.default),e.hot.accept("./src/components/App.jsx",function(e){l=t("./src/components/App.jsx"),p(l.default)})},"./src/state/sample.js":function(e,n,t){"use strict";t.d(n,"b",function(){return f}),t.d(n,"c",function(){return m});var r,o=t("./node_modules/reduxsauce/dist/reduxsauce.js"),c=t("./node_modules/reselect/lib/index.js"),a=t("./node_modules/seamless-immutable/seamless-immutable.development.js");function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=t.n(a)()({sampleValue:0,sampleFlag:!1}),d=Object(o.createActions)({sampleIncrementAction:["incBy"],sampleDecrementAction:["decBy"]}),u=d.Types,l=d.Creators,p=u;n.a=l;var f=Object(o.createReducer)(i,(s(r={},p.SAMPLE_INCREMENT_ACTION,function(e,n){var t=n.incBy,r=void 0===t?1:t;return e.merge({sampleValue:e.sampleValue+r})}),s(r,p.SAMPLE_DECREMENT_ACTION,function(e,n){var t=n.decBy,r=void 0===t?1:t;return e.merge({sampleValue:e.sampleValue-r})}),r)),m=Object(c.createSelector)(function(e){return e.sample},function(e){return e.sampleValue})},"./src/store.jsx":function(e,n,t){"use strict";var r=t("./node_modules/redux/es/redux.js"),o=t("./node_modules/redux-devtools-extension/index.js"),c=t("./src/state/sample.js"),a=t("./node_modules/reduxsauce/dist/reduxsauce.js"),s=t("./node_modules/reselect/lib/index.js"),i=t("./node_modules/seamless-immutable/seamless-immutable.development.js"),d=t.n(i),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function l(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return l=function(){return e},e}var p={desktop:900,tablet:768,phone:480};Object.keys(p).reduce(function(e,n){return e[n]=function(){return Object(u.a)(l(),p[n]/16,u.a.apply(void 0,arguments))},e},{});var f,m,h,v=d()({width:window.innerWidth}),b=Object(a.createActions)({updateBrowserWidth:["width"]}),y=b.Types,j=(b.Creators,Object(a.createReducer)(v,(f={},m=y.UPDATE_BROWSER_WIDTH,h=function(e,n){var t=n.width;return e.merge({width:t})},m in f?Object.defineProperty(f,m,{value:h,enumerable:!0,configurable:!0,writable:!0}):f[m]=h,f))),w=Object(s.createSelector)(function(e){return e.browser},function(e){return e.width}),O=(Object(s.createSelector)(w,function(e){return e<=p.phone}),Object(r.combineReducers)({sample:c.b,browser:j})),_=Object(r.applyMiddleware)();n.a=Object(r.createStore)(O,Object(o.composeWithDevTools)(_))},0:function(e,n,t){t("./node_modules/react-hot-loader/patch.js"),e.exports=t("./src/index.jsx")}});