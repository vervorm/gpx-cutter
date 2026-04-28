function Th(o,a){for(var l=0;l<a.length;l++){const c=a[l];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in o)){const k=Object.getOwnPropertyDescriptor(c,f);k&&Object.defineProperty(o,f,k.get?k:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const k of f)if(k.type==="childList")for(const y of k.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function l(f){const k={};return f.integrity&&(k.integrity=f.integrity),f.referrerPolicy&&(k.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?k.credentials="include":f.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function c(f){if(f.ep)return;f.ep=!0;const k=l(f);fetch(f.href,k)}})();function qd(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var l1={exports:{}},es={},a1={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function wh(){if($p)return mt;$p=1;var o=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),y=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.iterator;function A(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,D={};function F(j,oe,Re){this.props=j,this.context=oe,this.refs=D,this.updater=Re||W}F.prototype.isReactComponent={},F.prototype.setState=function(j,oe){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,oe,"setState")},F.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function K(){}K.prototype=F.prototype;function q(j,oe,Re){this.props=j,this.context=oe,this.refs=D,this.updater=Re||W}var ee=q.prototype=new K;ee.constructor=q,V(ee,F.prototype),ee.isPureReactComponent=!0;var ce=Array.isArray,fe=Object.prototype.hasOwnProperty,he={current:null},de={key:!0,ref:!0,__self:!0,__source:!0};function Pe(j,oe,Re){var Me,te={},me=null,Ee=null;if(oe!=null)for(Me in oe.ref!==void 0&&(Ee=oe.ref),oe.key!==void 0&&(me=""+oe.key),oe)fe.call(oe,Me)&&!de.hasOwnProperty(Me)&&(te[Me]=oe[Me]);var Ae=arguments.length-2;if(Ae===1)te.children=Re;else if(1<Ae){for(var De=Array(Ae),Ye=0;Ye<Ae;Ye++)De[Ye]=arguments[Ye+2];te.children=De}if(j&&j.defaultProps)for(Me in Ae=j.defaultProps,Ae)te[Me]===void 0&&(te[Me]=Ae[Me]);return{$$typeof:o,type:j,key:me,ref:Ee,props:te,_owner:he.current}}function We(j,oe){return{$$typeof:o,type:j.type,key:oe,ref:j.ref,props:j.props,_owner:j._owner}}function Le(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function Ie(j){var oe={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Re){return oe[Re]})}var _e=/\/+/g;function Xe(j,oe){return typeof j=="object"&&j!==null&&j.key!=null?Ie(""+j.key):oe.toString(36)}function je(j,oe,Re,Me,te){var me=typeof j;(me==="undefined"||me==="boolean")&&(j=null);var Ee=!1;if(j===null)Ee=!0;else switch(me){case"string":case"number":Ee=!0;break;case"object":switch(j.$$typeof){case o:case a:Ee=!0}}if(Ee)return Ee=j,te=te(Ee),j=Me===""?"."+Xe(Ee,0):Me,ce(te)?(Re="",j!=null&&(Re=j.replace(_e,"$&/")+"/"),je(te,oe,Re,"",function(Ye){return Ye})):te!=null&&(Le(te)&&(te=We(te,Re+(!te.key||Ee&&Ee.key===te.key?"":(""+te.key).replace(_e,"$&/")+"/")+j)),oe.push(te)),1;if(Ee=0,Me=Me===""?".":Me+":",ce(j))for(var Ae=0;Ae<j.length;Ae++){me=j[Ae];var De=Me+Xe(me,Ae);Ee+=je(me,oe,Re,De,te)}else if(De=A(j),typeof De=="function")for(j=De.call(j),Ae=0;!(me=j.next()).done;)me=me.value,De=Me+Xe(me,Ae++),Ee+=je(me,oe,Re,De,te);else if(me==="object")throw oe=String(j),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Ne(j,oe,Re){if(j==null)return j;var Me=[],te=0;return je(j,Me,"","",function(me){return oe.call(Re,me,te++)}),Me}function Se(j){if(j._status===-1){var oe=j._result;oe=oe(),oe.then(function(Re){(j._status===0||j._status===-1)&&(j._status=1,j._result=Re)},function(Re){(j._status===0||j._status===-1)&&(j._status=2,j._result=Re)}),j._status===-1&&(j._status=0,j._result=oe)}if(j._status===1)return j._result.default;throw j._result}var be={current:null},U={transition:null},ue={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:U,ReactCurrentOwner:he};function ie(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:Ne,forEach:function(j,oe,Re){Ne(j,function(){oe.apply(this,arguments)},Re)},count:function(j){var oe=0;return Ne(j,function(){oe++}),oe},toArray:function(j){return Ne(j,function(oe){return oe})||[]},only:function(j){if(!Le(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},mt.Component=F,mt.Fragment=l,mt.Profiler=f,mt.PureComponent=q,mt.StrictMode=c,mt.Suspense=S,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,mt.act=ie,mt.cloneElement=function(j,oe,Re){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var Me=V({},j.props),te=j.key,me=j.ref,Ee=j._owner;if(oe!=null){if(oe.ref!==void 0&&(me=oe.ref,Ee=he.current),oe.key!==void 0&&(te=""+oe.key),j.type&&j.type.defaultProps)var Ae=j.type.defaultProps;for(De in oe)fe.call(oe,De)&&!de.hasOwnProperty(De)&&(Me[De]=oe[De]===void 0&&Ae!==void 0?Ae[De]:oe[De])}var De=arguments.length-2;if(De===1)Me.children=Re;else if(1<De){Ae=Array(De);for(var Ye=0;Ye<De;Ye++)Ae[Ye]=arguments[Ye+2];Me.children=Ae}return{$$typeof:o,type:j.type,key:te,ref:me,props:Me,_owner:Ee}},mt.createContext=function(j){return j={$$typeof:y,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:k,_context:j},j.Consumer=j},mt.createElement=Pe,mt.createFactory=function(j){var oe=Pe.bind(null,j);return oe.type=j,oe},mt.createRef=function(){return{current:null}},mt.forwardRef=function(j){return{$$typeof:x,render:j}},mt.isValidElement=Le,mt.lazy=function(j){return{$$typeof:R,_payload:{_status:-1,_result:j},_init:Se}},mt.memo=function(j,oe){return{$$typeof:b,type:j,compare:oe===void 0?null:oe}},mt.startTransition=function(j){var oe=U.transition;U.transition={};try{j()}finally{U.transition=oe}},mt.unstable_act=ie,mt.useCallback=function(j,oe){return be.current.useCallback(j,oe)},mt.useContext=function(j){return be.current.useContext(j)},mt.useDebugValue=function(){},mt.useDeferredValue=function(j){return be.current.useDeferredValue(j)},mt.useEffect=function(j,oe){return be.current.useEffect(j,oe)},mt.useId=function(){return be.current.useId()},mt.useImperativeHandle=function(j,oe,Re){return be.current.useImperativeHandle(j,oe,Re)},mt.useInsertionEffect=function(j,oe){return be.current.useInsertionEffect(j,oe)},mt.useLayoutEffect=function(j,oe){return be.current.useLayoutEffect(j,oe)},mt.useMemo=function(j,oe){return be.current.useMemo(j,oe)},mt.useReducer=function(j,oe,Re){return be.current.useReducer(j,oe,Re)},mt.useRef=function(j){return be.current.useRef(j)},mt.useState=function(j){return be.current.useState(j)},mt.useSyncExternalStore=function(j,oe,Re){return be.current.useSyncExternalStore(j,oe,Re)},mt.useTransition=function(){return be.current.useTransition()},mt.version="18.3.1",mt}var Xp;function ps(){return Xp||(Xp=1,a1.exports=wh()),a1.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Sh(){if(qp)return es;qp=1;var o=ps(),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function y(x,S,b){var R,E={},A=null,W=null;b!==void 0&&(A=""+b),S.key!==void 0&&(A=""+S.key),S.ref!==void 0&&(W=S.ref);for(R in S)c.call(S,R)&&!k.hasOwnProperty(R)&&(E[R]=S[R]);if(x&&x.defaultProps)for(R in S=x.defaultProps,S)E[R]===void 0&&(E[R]=S[R]);return{$$typeof:a,type:x,key:A,ref:W,props:E,_owner:f.current}}return es.Fragment=l,es.jsx=y,es.jsxs=y,es}var Yp;function Zh(){return Yp||(Yp=1,l1.exports=Sh()),l1.exports}var _=Zh(),P=ps();const yi=qd(P),Yd=Th({__proto__:null,default:yi},[P]);var du={},s1={exports:{}},lr={},u1={exports:{}},c1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function bh(){return Qp||(Qp=1,(function(o){function a(U,ue){var ie=U.length;U.push(ue);e:for(;0<ie;){var j=ie-1>>>1,oe=U[j];if(0<f(oe,ue))U[j]=ue,U[ie]=oe,ie=j;else break e}}function l(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var ue=U[0],ie=U.pop();if(ie!==ue){U[0]=ie;e:for(var j=0,oe=U.length,Re=oe>>>1;j<Re;){var Me=2*(j+1)-1,te=U[Me],me=Me+1,Ee=U[me];if(0>f(te,ie))me<oe&&0>f(Ee,te)?(U[j]=Ee,U[me]=ie,j=me):(U[j]=te,U[Me]=ie,j=Me);else if(me<oe&&0>f(Ee,ie))U[j]=Ee,U[me]=ie,j=me;else break e}}return ue}function f(U,ue){var ie=U.sortIndex-ue.sortIndex;return ie!==0?ie:U.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;o.unstable_now=function(){return k.now()}}else{var y=Date,x=y.now();o.unstable_now=function(){return y.now()-x}}var S=[],b=[],R=1,E=null,A=3,W=!1,V=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(U){for(var ue=l(b);ue!==null;){if(ue.callback===null)c(b);else if(ue.startTime<=U)c(b),ue.sortIndex=ue.expirationTime,a(S,ue);else break;ue=l(b)}}function ce(U){if(D=!1,ee(U),!V)if(l(S)!==null)V=!0,Se(fe);else{var ue=l(b);ue!==null&&be(ce,ue.startTime-U)}}function fe(U,ue){V=!1,D&&(D=!1,K(Pe),Pe=-1),W=!0;var ie=A;try{for(ee(ue),E=l(S);E!==null&&(!(E.expirationTime>ue)||U&&!Ie());){var j=E.callback;if(typeof j=="function"){E.callback=null,A=E.priorityLevel;var oe=j(E.expirationTime<=ue);ue=o.unstable_now(),typeof oe=="function"?E.callback=oe:E===l(S)&&c(S),ee(ue)}else c(S);E=l(S)}if(E!==null)var Re=!0;else{var Me=l(b);Me!==null&&be(ce,Me.startTime-ue),Re=!1}return Re}finally{E=null,A=ie,W=!1}}var he=!1,de=null,Pe=-1,We=5,Le=-1;function Ie(){return!(o.unstable_now()-Le<We)}function _e(){if(de!==null){var U=o.unstable_now();Le=U;var ue=!0;try{ue=de(!0,U)}finally{ue?Xe():(he=!1,de=null)}}else he=!1}var Xe;if(typeof q=="function")Xe=function(){q(_e)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Ne=je.port2;je.port1.onmessage=_e,Xe=function(){Ne.postMessage(null)}}else Xe=function(){F(_e,0)};function Se(U){de=U,he||(he=!0,Xe())}function be(U,ue){Pe=F(function(){U(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_continueExecution=function(){V||W||(V=!0,Se(fe))},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return A},o.unstable_getFirstCallbackNode=function(){return l(S)},o.unstable_next=function(U){switch(A){case 1:case 2:case 3:var ue=3;break;default:ue=A}var ie=A;A=ue;try{return U()}finally{A=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(U,ue){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ie=A;A=U;try{return ue()}finally{A=ie}},o.unstable_scheduleCallback=function(U,ue,ie){var j=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?j+ie:j):ie=j,U){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ie+oe,U={id:R++,callback:ue,priorityLevel:U,startTime:ie,expirationTime:oe,sortIndex:-1},ie>j?(U.sortIndex=ie,a(b,U),l(S)===null&&U===l(b)&&(D?(K(Pe),Pe=-1):D=!0,be(ce,ie-j))):(U.sortIndex=oe,a(S,U),V||W||(V=!0,Se(fe))),U},o.unstable_shouldYield=Ie,o.unstable_wrapCallback=function(U){var ue=A;return function(){var ie=A;A=ue;try{return U.apply(this,arguments)}finally{A=ie}}}})(c1)),c1}var Jp;function Ch(){return Jp||(Jp=1,u1.exports=bh()),u1.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Eh(){if(ed)return lr;ed=1;var o=ps(),a=Ch();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function k(e,n){y(e,n),y(e+"Capture",n)}function y(e,n){for(f[e]=n,e=0;e<n.length;e++)c.add(n[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},E={};function A(e){return S.call(E,e)?!0:S.call(R,e)?!1:b.test(e)?E[e]=!0:(R[e]=!0,!1)}function W(e,n,i,u){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return u?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,n,i,u){if(n===null||typeof n>"u"||W(e,n,i,u))return!0;if(u)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function D(e,n,i,u,d,g,Z){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=g,this.removeEmptyString=Z}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];F[n]=new D(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(K,q);F[n]=new D(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(K,q);F[n]=new D(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(K,q);F[n]=new D(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,n,i,u){var d=F.hasOwnProperty(n)?F[n]:null;(d!==null?d.type!==0:u||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(V(n,i,d,u)&&(i=null),u||d===null?A(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,u=d.attributeNamespace,i===null?e.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,u?e.setAttributeNS(u,n,i):e.setAttribute(n,i))))}var ce=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),he=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),U=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,j;function oe(e){if(j===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);j=n&&n[1]||""}return`
`+j+e}var Re=!1;function Me(e,n){if(!e||Re)return"";Re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ae){var u=ae}Reflect.construct(e,[],n)}else{try{n.call()}catch(ae){u=ae}e.call(n.prototype)}else{try{throw Error()}catch(ae){u=ae}e()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),g=u.stack.split(`
`),Z=d.length-1,z=g.length-1;1<=Z&&0<=z&&d[Z]!==g[z];)z--;for(;1<=Z&&0<=z;Z--,z--)if(d[Z]!==g[z]){if(Z!==1||z!==1)do if(Z--,z--,0>z||d[Z]!==g[z]){var H=`
`+d[Z].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=Z&&0<=z);break}}}finally{Re=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?oe(e):""}function te(e){switch(e.tag){case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return e=Me(e.type,!1),e;case 11:return e=Me(e.type.render,!1),e;case 1:return e=Me(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case de:return"Fragment";case he:return"Portal";case We:return"Profiler";case Pe:return"StrictMode";case Xe:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case _e:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case Se:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}function Ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(n);case 8:return n===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=De(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),u=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,g=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(Z){u=""+Z,g.call(this,Z)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return u},setValue:function(Z){u=""+Z},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=Ye(e))}function Ue(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==i?(n.setValue(e),!0):!1}function Fe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function st(e,n){var i=n.checked;return ie({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function wn(e,n){var i=n.defaultValue==null?"":n.defaultValue,u=n.checked!=null?n.checked:n.defaultChecked;i=Ae(n.value!=null?n.value:i),e._wrapperState={initialChecked:u,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function mn(e,n){n=n.checked,n!=null&&ee(e,"checked",n,!1)}function Sn(e,n){mn(e,n);var i=Ae(n.value),u=n.type;if(i!=null)u==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jt(e,n.type,i):n.hasOwnProperty("defaultValue")&&Jt(e,n.type,Ae(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Zn(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var u=n.type;if(!(u!=="submit"&&u!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Jt(e,n,i){(n!=="number"||Fe(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var jn=Array.isArray;function Fn(e,n,i,u){if(e=e.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=n.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&u&&(e[i].defaultSelected=!0)}else{for(i=""+Ae(i),n=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,u&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function hn(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return ie({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dt(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(l(92));if(jn(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:Ae(i)}}function Ki(e,n){var i=Ae(n.value),u=Ae(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),u!=null&&(e.defaultValue=""+u)}function $i(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Kr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $r(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Kr(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qn,Xi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,u,d){MSApp.execUnsafeLocalFunction(function(){return e(n,i,u,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Qn=Qn||document.createElement("div"),Qn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ar(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qi=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){qi.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tr[n]=Tr[e]})});function wr(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+n).trim():n+"px"}function Si(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var u=i.indexOf("--")===0,d=wr(i,n[i],u);i==="float"&&(i="cssFloat"),u?e.setProperty(i,d):e[i]=d}}var So=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yi(e,n){if(n){if(So[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function sr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function en(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,bn=null,ft=null;function Zr(e){if(e=uo(e)){if(typeof Sr!="function")throw Error(l(280));var n=e.stateNode;n&&(n=na(n),Sr(e.stateNode,e.type,n))}}function Xr(e){bn?ft?ft.push(e):ft=[e]:bn=e}function br(){if(bn){var e=bn,n=ft;if(ft=bn=null,Zr(e),n)for(e=0;e<n.length;e++)Zr(n[e])}}function Bn(e,n){return e(n)}function qr(){}var Wn=!1;function Yr(e,n,i){if(Wn)return e(n,i);Wn=!0;try{return Bn(e,n,i)}finally{Wn=!1,(bn!==null||ft!==null)&&(qr(),br())}}function ur(e,n){var i=e.stateNode;if(i===null)return null;var u=na(i);if(u===null)return null;i=u[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,n,typeof i));return i}var Qr=!1;if(x)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Qr=!1}function Zo(e,n,i,u,d,g,Z,z,H){var ae=Array.prototype.slice.call(arguments,3);try{n.apply(i,ae)}catch(ye){this.onError(ye)}}var zt=!1,He=null,Jr=!1,cr=null,Ji={onError:function(e){zt=!0,He=e}};function ei(e,n,i,u,d,g,Z,z,H){zt=!1,He=null,Zo.apply(Ji,arguments)}function ti(e,n,i,u,d,g,Z,z,H){if(ei.apply(this,arguments),zt){if(zt){var ae=He;zt=!1,He=null}else throw Error(l(198));Jr||(Jr=!0,cr=ae)}}function Jn(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function gn(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function eo(e){if(Jn(e)!==e)throw Error(l(188))}function to(e){var n=e.alternate;if(!n){if(n=Jn(e),n===null)throw Error(l(188));return n!==e?null:e}for(var i=e,u=n;;){var d=i.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){i=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===i)return eo(d),e;if(g===u)return eo(d),n;g=g.sibling}throw Error(l(188))}if(i.return!==u.return)i=d,u=g;else{for(var Z=!1,z=d.child;z;){if(z===i){Z=!0,i=d,u=g;break}if(z===u){Z=!0,u=d,i=g;break}z=z.sibling}if(!Z){for(z=g.child;z;){if(z===i){Z=!0,i=g,u=d;break}if(z===u){Z=!0,u=g,i=d;break}z=z.sibling}if(!Z)throw Error(l(189))}}if(i.alternate!==u)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:n}function ni(e){return e=to(e),e!==null?Er(e):null}function Er(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Er(e);if(n!==null)return n;e=e.sibling}return null}var ri=a.unstable_scheduleCallback,Zi=a.unstable_cancelCallback,bo=a.unstable_shouldYield,ii=a.unstable_requestPaint,St=a.unstable_now,Ut=a.unstable_getCurrentPriorityLevel,bi=a.unstable_ImmediatePriority,Ci=a.unstable_UserBlockingPriority,Pr=a.unstable_NormalPriority,Ei=a.unstable_LowPriority,kn=a.unstable_IdlePriority,Cn=null,tn=null;function Hn(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Cn,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:er,xt=Math.log,Mr=Math.LN2;function er(e){return e>>>=0,e===0?32:31-(xt(e)/Mr|0)|0}var nn=64,pr=4194304;function rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yt(e,n){var i=e.pendingLanes;if(i===0)return 0;var u=0,d=e.suspendedLanes,g=e.pingedLanes,Z=i&268435455;if(Z!==0){var z=Z&~d;z!==0?u=rt(z):(g&=Z,g!==0&&(u=rt(g)))}else Z=i&~d,Z!==0?u=rt(Z):g!==0&&(u=rt(g));if(u===0)return 0;if(n!==0&&n!==u&&(n&d)===0&&(d=u&-u,g=n&-n,d>=g||d===16&&(g&4194240)!==0))return n;if((u&4)!==0&&(u|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=u;0<n;)i=31-et(n),d=1<<i,u|=e[i],n&=~d;return u}function m(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w(e,n){for(var i=e.suspendedLanes,u=e.pingedLanes,d=e.expirationTimes,g=e.pendingLanes;0<g;){var Z=31-et(g),z=1<<Z,H=d[Z];H===-1?((z&i)===0||(z&u)!==0)&&(d[Z]=m(z,n)):H<=n&&(e.expiredLanes|=z),g&=~z}}function M(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function O(){var e=nn;return nn<<=1,(nn&4194240)===0&&(nn=64),e}function J(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function $(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-et(n),e[n]=i}function se(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-et(i),g=1<<d;n[d]=0,u[d]=-1,e[d]=-1,i&=~g}}function xe(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var u=31-et(i),d=1<<u;d&n|e[u]&n&&(e[u]|=n),i&=~d}}var Ce=0;function qe(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ot,gt,rn,on,jt,Vn=!1,ln=[],Kt=null,$t=null,vn=null,En=new Map,Qe=new Map,Ft=[],Tt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sl(e,n){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":En.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qe.delete(n.pointerId)}}function oi(e,n,i,u,d,g){return e===null||e.nativeEvent!==g?(e={blockedOn:n,domEventName:i,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},n!==null&&(n=uo(n),n!==null&&gt(n)),e):(e.eventSystemFlags|=u,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function ul(e,n,i,u,d){switch(n){case"focusin":return Kt=oi(Kt,e,n,i,u,d),!0;case"dragenter":return $t=oi($t,e,n,i,u,d),!0;case"mouseover":return vn=oi(vn,e,n,i,u,d),!0;case"pointerover":var g=d.pointerId;return En.set(g,oi(En.get(g)||null,e,n,i,u,d)),!0;case"gotpointercapture":return g=d.pointerId,Qe.set(g,oi(Qe.get(g)||null,e,n,i,u,d)),!0}return!1}function Pn(e){var n=so(e.target);if(n!==null){var i=Jn(n);if(i!==null){if(n=i.tag,n===13){if(n=gn(i),n!==null){e.blockedOn=n,jt(e.priority,function(){rn(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mn(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Li(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var u=new i.constructor(i.type,i);Qi=u,i.target.dispatchEvent(u),Qi=null}else return n=uo(i),n!==null&&gt(n),e.blockedOn=i,!1;n.shift()}return!0}function li(e,n,i){Mn(e)&&i.delete(n)}function kt(){Vn=!1,Kt!==null&&Mn(Kt)&&(Kt=null),$t!==null&&Mn($t)&&($t=null),vn!==null&&Mn(vn)&&(vn=null),En.forEach(li),Qe.forEach(li)}function Zt(e,n){e.blockedOn===n&&(e.blockedOn=null,Vn||(Vn=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kt)))}function an(e){function n(d){return Zt(d,e)}if(0<ln.length){Zt(ln[0],e);for(var i=1;i<ln.length;i++){var u=ln[i];u.blockedOn===e&&(u.blockedOn=null)}}for(Kt!==null&&Zt(Kt,e),$t!==null&&Zt($t,e),vn!==null&&Zt(vn,e),En.forEach(n),Qe.forEach(n),i=0;i<Ft.length;i++)u=Ft[i],u.blockedOn===e&&(u.blockedOn=null);for(;0<Ft.length&&(i=Ft[0],i.blockedOn===null);)Pn(i),i.blockedOn===null&&Ft.shift()}var Gn=ce.ReactCurrentBatchConfig,Ln=!0;function Co(e,n,i,u){var d=Ce,g=Gn.transition;Gn.transition=null;try{Ce=1,Pi(e,n,i,u)}finally{Ce=d,Gn.transition=g}}function Lr(e,n,i,u){var d=Ce,g=Gn.transition;Gn.transition=null;try{Ce=4,Pi(e,n,i,u)}finally{Ce=d,Gn.transition=g}}function Pi(e,n,i,u){if(Ln){var d=Li(e,n,i,u);if(d===null)t(e,n,u,Mi,i),sl(e,u);else if(ul(d,e,n,i,u))u.stopPropagation();else if(sl(e,u),n&4&&-1<Tt.indexOf(e)){for(;d!==null;){var g=uo(d);if(g!==null&&ot(g),g=Li(e,n,i,u),g===null&&t(e,n,u,Mi,i),g===d)break;d=g}d!==null&&u.stopPropagation()}else t(e,n,u,null,i)}}var Mi=null;function Li(e,n,i,u){if(Mi=null,e=en(u),e=so(e),e!==null)if(n=Jn(e),n===null)e=null;else if(i=n.tag,i===13){if(e=gn(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Mi=e,null}function dt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ut()){case bi:return 1;case Ci:return 4;case Pr:case Ei:return 16;case kn:return 536870912;default:return 16}default:return 16}}var dr=null,sn=null,Nr=null;function cl(){if(Nr)return Nr;var e,n=sn,i=n.length,u,d="value"in dr?dr.value:dr.textContent,g=d.length;for(e=0;e<i&&n[e]===d[e];e++);var Z=i-e;for(u=1;u<=Z&&n[i-u]===d[g-u];u++);return Nr=d.slice(e,1<u?1-u:void 0)}function ai(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function si(){return!0}function no(){return!1}function Ht(e){function n(i,u,d,g,Z){this._reactName=i,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=Z,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?si:no,this.isPropagationStopped=no,this}return ie(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),n}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=Ht(Ni),ci=ie({},Ni,{view:0,detail:0}),pl=Ht(ci),Xt,pi,fr,Nn=ie({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Xt=e.screenX-fr.screenX,pi=e.screenY-fr.screenY):pi=Xt=0,fr=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Eo=Ht(Nn),dl=ie({},Nn,{dataTransfer:0}),ro=Ht(dl),yn=ie({},ci,{relatedTarget:0}),io=Ht(yn),Po=ie({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Ea=Ht(Po),Hl=ie({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ri=Ht(Hl),Vl=ie({},Ni,{data:0}),Mo=Ht(Vl),oo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},di={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rr[e])?!!n[e]:!1}function Ir(){return Gl}var un=ie({},ci,{key:function(e){if(e.key){var n=oo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?di[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ir,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fl=Ht(un),h=ie({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Ht(h),N=ie({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ir}),I=Ht(N),ne=ie({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y=Ht(ne),pe=ie({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),we=Ht(pe),Ge=[9,13,27,32],it=x&&"CompositionEvent"in window,lt=null;x&&"documentMode"in document&&(lt=document.documentMode);var ht=x&&"TextEvent"in window&&!lt,cn=x&&(!it||lt&&8<lt&&11>=lt),Bt=" ",Rn=!1;function mr(e,n){switch(e){case"keyup":return Ge.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function Yu(e,n){switch(e){case"compositionend":return Lo(n);case"keypress":return n.which!==32?null:(Rn=!0,Bt);case"textInput":return e=n.data,e===Bt&&Rn?null:e;default:return null}}function Ii(e,n){if(Un)return e==="compositionend"||!it&&mr(e,n)?(e=cl(),Nr=sn=dr=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cn&&n.locale!=="ko"?null:n.data;default:return null}}var Ul={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ul[e.type]:n==="textarea"}function Kl(e,n,i,u){Xr(u),n=s(n,"onChange"),0<n.length&&(i=new ui("onChange","change",null,i,u),e.push({event:i,listeners:n}))}var ml=null,Kn=null;function Qu(e){Da(e,0)}function fi(e){var n=co(e);if(Ue(n))return e}function Ju(e,n){if(e==="change")return n}var Or=!1;if(x){var No;if(x){var $l="oninput"in document;if(!$l){var Xl=document.createElement("div");Xl.setAttribute("oninput","return;"),$l=typeof Xl.oninput=="function"}No=$l}else No=!1;Or=No&&(!document.documentMode||9<document.documentMode)}function hl(){ml&&(ml.detachEvent("onpropertychange",ql),Kn=ml=null)}function ql(e){if(e.propertyName==="value"&&fi(Kn)){var n=[];Kl(n,Kn,e,en(e)),Yr(Qu,n)}}function Yl(e,n,i){e==="focusin"?(hl(),ml=n,Kn=i,ml.attachEvent("onpropertychange",ql)):e==="focusout"&&hl()}function Ro(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Kn)}function Ql(e,n){if(e==="click")return fi(n)}function Pa(e,n){if(e==="input"||e==="change")return fi(n)}function vs(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hr=typeof Object.is=="function"?Object.is:vs;function Oi(e,n){if(hr(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),u=Object.keys(n);if(i.length!==u.length)return!1;for(u=0;u<i.length;u++){var d=i[u];if(!S.call(n,d)||!hr(e[d],n[d]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,n){var i=ys(e);e=0;for(var u;i;){if(i.nodeType===3){if(u=e+i.textContent.length,e<=n&&u>=n)return{node:i,offset:n-e};e=u}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ys(i)}}function _s(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_s(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function La(){for(var e=window,n=Fe();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Fe(e.document)}return n}function Na(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ar(e){var n=La(),i=e.focusedElem,u=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&_s(i.ownerDocument.documentElement,i)){if(u!==null&&Na(i)){if(n=u.start,e=u.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!e.extend&&g>u&&(d=u,u=g,g=d),d=Ma(i,g);var Z=Ma(i,u);d&&Z&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==Z.node||e.focusOffset!==Z.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),g>u?(e.addRange(n),e.extend(Z.node,Z.offset)):(n.setEnd(Z.node,Z.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jl=x&&"documentMode"in document&&11>=document.documentMode,Io=null,Oo=null,gl=null,ea=!1;function xs(e,n,i){var u=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ea||Io==null||Io!==Fe(u)||(u=Io,"selectionStart"in u&&Na(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),gl&&Oi(gl,u)||(gl=u,u=s(Oo,"onSelect"),0<u.length&&(n=new ui("onSelect","select",null,n,i),e.push({event:n,listeners:u}),n.target=Io)))}function Ai(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ao={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Di={},Ra={};x&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function kl(e){if(Di[e])return Di[e];if(!Ao[e])return e;var n=Ao[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ra)return Di[e]=n[i];return e}var Ts=kl("animationend"),Dr=kl("animationiteration"),Ia=kl("animationstart"),Oa=kl("transitionend"),Do=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,n){Do.set(e,n),k(n,[e])}for(var lo=0;lo<ws.length;lo++){var ta=ws[lo],Ss=ta.toLowerCase(),ec=ta[0].toUpperCase()+ta.slice(1);gr(Ss,"on"+ec)}gr(Ts,"onAnimationEnd"),gr(Dr,"onAnimationIteration"),gr(Ia,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Oa,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zs=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Aa(e,n,i){var u=e.type||"unknown-event";e.currentTarget=i,ti(u,n,void 0,e),e.currentTarget=null}function Da(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var u=e[i],d=u.event;u=u.listeners;e:{var g=void 0;if(n)for(var Z=u.length-1;0<=Z;Z--){var z=u[Z],H=z.instance,ae=z.currentTarget;if(z=z.listener,H!==g&&d.isPropagationStopped())break e;Aa(d,z,ae),g=H}else for(Z=0;Z<u.length;Z++){if(z=u[Z],H=z.instance,ae=z.currentTarget,z=z.listener,H!==g&&d.isPropagationStopped())break e;Aa(d,z,ae),g=H}}}if(Jr)throw e=cr,Jr=!1,cr=null,e}function bt(e,n){var i=n[Wo];i===void 0&&(i=n[Wo]=new Set);var u=e+"__bubble";i.has(u)||(bs(n,e,2,!1),i.add(u))}function za(e,n,i){var u=0;n&&(u|=4),bs(i,e,u,n)}var vl="_reactListening"+Math.random().toString(36).slice(2);function jo(e){if(!e[vl]){e[vl]=!0,c.forEach(function(i){i!=="selectionchange"&&(Zs.has(i)||za(i,!1,e),za(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[vl]||(n[vl]=!0,za("selectionchange",!1,n))}}function bs(e,n,i,u){switch(dt(n)){case 1:var d=Co;break;case 4:d=Lr;break;default:d=Pi}i=d.bind(null,n,i,e),d=void 0,!Qr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),u?d!==void 0?e.addEventListener(n,i,{capture:!0,passive:d}):e.addEventListener(n,i,!0):d!==void 0?e.addEventListener(n,i,{passive:d}):e.addEventListener(n,i,!1)}function t(e,n,i,u,d){var g=u;if((n&1)===0&&(n&2)===0&&u!==null)e:for(;;){if(u===null)return;var Z=u.tag;if(Z===3||Z===4){var z=u.stateNode.containerInfo;if(z===d||z.nodeType===8&&z.parentNode===d)break;if(Z===4)for(Z=u.return;Z!==null;){var H=Z.tag;if((H===3||H===4)&&(H=Z.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;Z=Z.return}for(;z!==null;){if(Z=so(z),Z===null)return;if(H=Z.tag,H===5||H===6){u=g=Z;continue e}z=z.parentNode}}u=u.return}Yr(function(){var ae=g,ye=en(i),Te=[];e:{var ke=Do.get(e);if(ke!==void 0){var ze=ui,Ve=e;switch(e){case"keypress":if(ai(i)===0)break e;case"keydown":case"keyup":ze=fl;break;case"focusin":Ve="focus",ze=io;break;case"focusout":Ve="blur",ze=io;break;case"beforeblur":case"afterblur":ze=io;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=ro;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=I;break;case Ts:case Dr:case Ia:ze=Ea;break;case Oa:ze=Y;break;case"scroll":ze=pl;break;case"wheel":ze=we;break;case"copy":case"cut":case"paste":ze=Ri;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=T}var Ke=(n&4)!==0,Wt=!Ke&&e==="scroll",Q=Ke?ke!==null?ke+"Capture":null:ke;Ke=[];for(var G=ae,re;G!==null;){re=G;var Ze=re.stateNode;if(re.tag===5&&Ze!==null&&(re=Ze,Q!==null&&(Ze=ur(G,Q),Ze!=null&&Ke.push(r(G,Ze,re)))),Wt)break;G=G.return}0<Ke.length&&(ke=new ze(ke,Ve,null,i,ye),Te.push({event:ke,listeners:Ke}))}}if((n&7)===0){e:{if(ke=e==="mouseover"||e==="pointerover",ze=e==="mouseout"||e==="pointerout",ke&&i!==Qi&&(Ve=i.relatedTarget||i.fromElement)&&(so(Ve)||Ve[wt]))break e;if((ze||ke)&&(ke=ye.window===ye?ye:(ke=ye.ownerDocument)?ke.defaultView||ke.parentWindow:window,ze?(Ve=i.relatedTarget||i.toElement,ze=ae,Ve=Ve?so(Ve):null,Ve!==null&&(Wt=Jn(Ve),Ve!==Wt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(ze=null,Ve=ae),ze!==Ve)){if(Ke=Eo,Ze="onMouseLeave",Q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Ke=T,Ze="onPointerLeave",Q="onPointerEnter",G="pointer"),Wt=ze==null?ke:co(ze),re=Ve==null?ke:co(Ve),ke=new Ke(Ze,G+"leave",ze,i,ye),ke.target=Wt,ke.relatedTarget=re,Ze=null,so(ye)===ae&&(Ke=new Ke(Q,G+"enter",Ve,i,ye),Ke.target=re,Ke.relatedTarget=Wt,Ze=Ke),Wt=Ze,ze&&Ve)t:{for(Ke=ze,Q=Ve,G=0,re=Ke;re;re=p(re))G++;for(re=0,Ze=Q;Ze;Ze=p(Ze))re++;for(;0<G-re;)Ke=p(Ke),G--;for(;0<re-G;)Q=p(Q),re--;for(;G--;){if(Ke===Q||Q!==null&&Ke===Q.alternate)break t;Ke=p(Ke),Q=p(Q)}Ke=null}else Ke=null;ze!==null&&v(Te,ke,ze,Ke,!1),Ve!==null&&Wt!==null&&v(Te,Wt,Ve,Ke,!0)}}e:{if(ke=ae?co(ae):window,ze=ke.nodeName&&ke.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ke.type==="file")var $e=Ju;else if(ks(ke))if(Or)$e=Pa;else{$e=Ro;var tt=Yl}else(ze=ke.nodeName)&&ze.toLowerCase()==="input"&&(ke.type==="checkbox"||ke.type==="radio")&&($e=Ql);if($e&&($e=$e(e,ae))){Kl(Te,$e,i,ye);break e}tt&&tt(e,ke,ae),e==="focusout"&&(tt=ke._wrapperState)&&tt.controlled&&ke.type==="number"&&Jt(ke,"number",ke.value)}switch(tt=ae?co(ae):window,e){case"focusin":(ks(tt)||tt.contentEditable==="true")&&(Io=tt,Oo=ae,gl=null);break;case"focusout":gl=Oo=Io=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,xs(Te,i,ye);break;case"selectionchange":if(Jl)break;case"keydown":case"keyup":xs(Te,i,ye)}var nt;if(it)e:{switch(e){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Un?mr(e,i)&&(at="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(at="onCompositionStart");at&&(cn&&i.locale!=="ko"&&(Un||at!=="onCompositionStart"?at==="onCompositionEnd"&&Un&&(nt=cl()):(dr=ye,sn="value"in dr?dr.value:dr.textContent,Un=!0)),tt=s(ae,at),0<tt.length&&(at=new Mo(at,e,null,i,ye),Te.push({event:at,listeners:tt}),nt?at.data=nt:(nt=Lo(i),nt!==null&&(at.data=nt)))),(nt=ht?Yu(e,i):Ii(e,i))&&(ae=s(ae,"onBeforeInput"),0<ae.length&&(ye=new Mo("onBeforeInput","beforeinput",null,i,ye),Te.push({event:ye,listeners:ae}),ye.data=nt))}Da(Te,n)})}function r(e,n,i){return{instance:e,listener:n,currentTarget:i}}function s(e,n){for(var i=n+"Capture",u=[];e!==null;){var d=e,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=ur(e,i),g!=null&&u.unshift(r(e,g,d)),g=ur(e,n),g!=null&&u.push(r(e,g,d))),e=e.return}return u}function p(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function v(e,n,i,u,d){for(var g=n._reactName,Z=[];i!==null&&i!==u;){var z=i,H=z.alternate,ae=z.stateNode;if(H!==null&&H===u)break;z.tag===5&&ae!==null&&(z=ae,d?(H=ur(i,g),H!=null&&Z.unshift(r(i,H,z))):d||(H=ur(i,g),H!=null&&Z.push(r(i,H,z)))),i=i.return}Z.length!==0&&e.push({event:n,listeners:Z})}var C=/\r\n?/g,B=/\u0000|\uFFFD/g;function X(e){return(typeof e=="string"?e:""+e).replace(C,`
`).replace(B,"")}function le(e,n,i){if(n=X(n),X(e)!==n&&i)throw Error(l(425))}function ge(){}var Oe=null,Je=null;function ut(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qt=typeof setTimeout=="function"?setTimeout:void 0,Vt=typeof clearTimeout=="function"?clearTimeout:void 0,$n=typeof Promise=="function"?Promise:void 0,In=typeof queueMicrotask=="function"?queueMicrotask:typeof $n<"u"?function(e){return $n.resolve(null).then(e).catch(Fo)}:qt;function Fo(e){setTimeout(function(){throw e})}function ja(e,n){var i=n,u=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(u===0){e.removeChild(d),an(n);return}u--}else i!=="$"&&i!=="$?"&&i!=="$!"||u++;i=d}while(i);an(n)}function zi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Cs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var ao=Math.random().toString(36).slice(2),zr="__reactFiber$"+ao,Bo="__reactProps$"+ao,wt="__reactContainer$"+ao,Wo="__reactEvents$"+ao,tc="__reactListeners$"+ao,nc="__reactHandles$"+ao;function so(e){var n=e[zr];if(n)return n;for(var i=e.parentNode;i;){if(n=i[wt]||i[zr]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Cs(e);e!==null;){if(i=e[zr])return i;e=Cs(e)}return n}e=i,i=e.parentNode}return null}function uo(e){return e=e[zr]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function co(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function na(e){return e[Bo]||null}var rc=[],ra=-1;function Ho(e){return{current:e}}function Pt(e){0>ra||(e.current=rc[ra],rc[ra]=null,ra--)}function Et(e,n){ra++,rc[ra]=e.current,e.current=n}var Vo={},On=Ho(Vo),tr=Ho(!1),yl=Vo;function ia(e,n){var i=e.type.contextTypes;if(!i)return Vo;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===n)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in i)d[g]=n[g];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function nr(e){return e=e.childContextTypes,e!=null}function Es(){Pt(tr),Pt(On)}function g0(e,n,i){if(On.current!==Vo)throw Error(l(168));Et(On,n),Et(tr,i)}function k0(e,n,i){var u=e.stateNode;if(n=n.childContextTypes,typeof u.getChildContext!="function")return i;u=u.getChildContext();for(var d in u)if(!(d in n))throw Error(l(108,Ee(e)||"Unknown",d));return ie({},i,u)}function Ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vo,yl=On.current,Et(On,e),Et(tr,tr.current),!0}function v0(e,n,i){var u=e.stateNode;if(!u)throw Error(l(169));i?(e=k0(e,n,yl),u.__reactInternalMemoizedMergedChildContext=e,Pt(tr),Pt(On),Et(On,e)):Pt(tr),Et(tr,i)}var po=null,Ms=!1,ic=!1;function y0(e){po===null?po=[e]:po.push(e)}function Bm(e){Ms=!0,y0(e)}function Go(){if(!ic&&po!==null){ic=!0;var e=0,n=Ce;try{var i=po;for(Ce=1;e<i.length;e++){var u=i[e];do u=u(!0);while(u!==null)}po=null,Ms=!1}catch(d){throw po!==null&&(po=po.slice(e+1)),ri(bi,Go),d}finally{Ce=n,ic=!1}}return null}var oa=[],la=0,Ls=null,Ns=0,jr=[],Fr=0,_l=null,fo=1,mo="";function xl(e,n){oa[la++]=Ns,oa[la++]=Ls,Ls=e,Ns=n}function _0(e,n,i){jr[Fr++]=fo,jr[Fr++]=mo,jr[Fr++]=_l,_l=e;var u=fo;e=mo;var d=32-et(u)-1;u&=~(1<<d),i+=1;var g=32-et(n)+d;if(30<g){var Z=d-d%5;g=(u&(1<<Z)-1).toString(32),u>>=Z,d-=Z,fo=1<<32-et(n)+d|i<<d|u,mo=g+e}else fo=1<<g|i<<d|u,mo=e}function oc(e){e.return!==null&&(xl(e,1),_0(e,1,0))}function lc(e){for(;e===Ls;)Ls=oa[--la],oa[la]=null,Ns=oa[--la],oa[la]=null;for(;e===_l;)_l=jr[--Fr],jr[Fr]=null,mo=jr[--Fr],jr[Fr]=null,fo=jr[--Fr],jr[Fr]=null}var kr=null,vr=null,Nt=!1,mi=null;function x0(e,n){var i=Vr(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function T0(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,kr=e,vr=zi(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,kr=e,vr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=_l!==null?{id:fo,overflow:mo}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Vr(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,kr=e,vr=null,!0):!1;default:return!1}}function ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sc(e){if(Nt){var n=vr;if(n){var i=n;if(!T0(e,n)){if(ac(e))throw Error(l(418));n=zi(i.nextSibling);var u=kr;n&&T0(e,n)?x0(u,i):(e.flags=e.flags&-4097|2,Nt=!1,kr=e)}}else{if(ac(e))throw Error(l(418));e.flags=e.flags&-4097|2,Nt=!1,kr=e}}}function w0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kr=e}function Rs(e){if(e!==kr)return!1;if(!Nt)return w0(e),Nt=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ut(e.type,e.memoizedProps)),n&&(n=vr)){if(ac(e))throw S0(),Error(l(418));for(;n;)x0(e,n),n=zi(n.nextSibling)}if(w0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){vr=zi(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}vr=null}}else vr=kr?zi(e.stateNode.nextSibling):null;return!0}function S0(){for(var e=vr;e;)e=zi(e.nextSibling)}function aa(){vr=kr=null,Nt=!1}function uc(e){mi===null?mi=[e]:mi.push(e)}var Wm=ce.ReactCurrentBatchConfig;function Fa(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(l(309));var u=i.stateNode}if(!u)throw Error(l(147,e));var d=u,g=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===g?n.ref:(n=function(Z){var z=d.refs;Z===null?delete z[g]:z[g]=Z},n._stringRef=g,n)}if(typeof e!="string")throw Error(l(284));if(!i._owner)throw Error(l(290,e))}return e}function Is(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Z0(e){var n=e._init;return n(e._payload)}function b0(e){function n(Q,G){if(e){var re=Q.deletions;re===null?(Q.deletions=[G],Q.flags|=16):re.push(G)}}function i(Q,G){if(!e)return null;for(;G!==null;)n(Q,G),G=G.sibling;return null}function u(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function d(Q,G){return Q=Jo(Q,G),Q.index=0,Q.sibling=null,Q}function g(Q,G,re){return Q.index=re,e?(re=Q.alternate,re!==null?(re=re.index,re<G?(Q.flags|=2,G):re):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function Z(Q){return e&&Q.alternate===null&&(Q.flags|=2),Q}function z(Q,G,re,Ze){return G===null||G.tag!==6?(G=e1(re,Q.mode,Ze),G.return=Q,G):(G=d(G,re),G.return=Q,G)}function H(Q,G,re,Ze){var $e=re.type;return $e===de?ye(Q,G,re.props.children,Ze,re.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Se&&Z0($e)===G.type)?(Ze=d(G,re.props),Ze.ref=Fa(Q,G,re),Ze.return=Q,Ze):(Ze=iu(re.type,re.key,re.props,null,Q.mode,Ze),Ze.ref=Fa(Q,G,re),Ze.return=Q,Ze)}function ae(Q,G,re,Ze){return G===null||G.tag!==4||G.stateNode.containerInfo!==re.containerInfo||G.stateNode.implementation!==re.implementation?(G=t1(re,Q.mode,Ze),G.return=Q,G):(G=d(G,re.children||[]),G.return=Q,G)}function ye(Q,G,re,Ze,$e){return G===null||G.tag!==7?(G=Pl(re,Q.mode,Ze,$e),G.return=Q,G):(G=d(G,re),G.return=Q,G)}function Te(Q,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return G=e1(""+G,Q.mode,re),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case fe:return re=iu(G.type,G.key,G.props,null,Q.mode,re),re.ref=Fa(Q,null,G),re.return=Q,re;case he:return G=t1(G,Q.mode,re),G.return=Q,G;case Se:var Ze=G._init;return Te(Q,Ze(G._payload),re)}if(jn(G)||ue(G))return G=Pl(G,Q.mode,re,null),G.return=Q,G;Is(Q,G)}return null}function ke(Q,G,re,Ze){var $e=G!==null?G.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return $e!==null?null:z(Q,G,""+re,Ze);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case fe:return re.key===$e?H(Q,G,re,Ze):null;case he:return re.key===$e?ae(Q,G,re,Ze):null;case Se:return $e=re._init,ke(Q,G,$e(re._payload),Ze)}if(jn(re)||ue(re))return $e!==null?null:ye(Q,G,re,Ze,null);Is(Q,re)}return null}function ze(Q,G,re,Ze,$e){if(typeof Ze=="string"&&Ze!==""||typeof Ze=="number")return Q=Q.get(re)||null,z(G,Q,""+Ze,$e);if(typeof Ze=="object"&&Ze!==null){switch(Ze.$$typeof){case fe:return Q=Q.get(Ze.key===null?re:Ze.key)||null,H(G,Q,Ze,$e);case he:return Q=Q.get(Ze.key===null?re:Ze.key)||null,ae(G,Q,Ze,$e);case Se:var tt=Ze._init;return ze(Q,G,re,tt(Ze._payload),$e)}if(jn(Ze)||ue(Ze))return Q=Q.get(re)||null,ye(G,Q,Ze,$e,null);Is(G,Ze)}return null}function Ve(Q,G,re,Ze){for(var $e=null,tt=null,nt=G,at=G=0,fn=null;nt!==null&&at<re.length;at++){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var _t=ke(Q,nt,re[at],Ze);if(_t===null){nt===null&&(nt=fn);break}e&&nt&&_t.alternate===null&&n(Q,nt),G=g(_t,G,at),tt===null?$e=_t:tt.sibling=_t,tt=_t,nt=fn}if(at===re.length)return i(Q,nt),Nt&&xl(Q,at),$e;if(nt===null){for(;at<re.length;at++)nt=Te(Q,re[at],Ze),nt!==null&&(G=g(nt,G,at),tt===null?$e=nt:tt.sibling=nt,tt=nt);return Nt&&xl(Q,at),$e}for(nt=u(Q,nt);at<re.length;at++)fn=ze(nt,Q,at,re[at],Ze),fn!==null&&(e&&fn.alternate!==null&&nt.delete(fn.key===null?at:fn.key),G=g(fn,G,at),tt===null?$e=fn:tt.sibling=fn,tt=fn);return e&&nt.forEach(function(el){return n(Q,el)}),Nt&&xl(Q,at),$e}function Ke(Q,G,re,Ze){var $e=ue(re);if(typeof $e!="function")throw Error(l(150));if(re=$e.call(re),re==null)throw Error(l(151));for(var tt=$e=null,nt=G,at=G=0,fn=null,_t=re.next();nt!==null&&!_t.done;at++,_t=re.next()){nt.index>at?(fn=nt,nt=null):fn=nt.sibling;var el=ke(Q,nt,_t.value,Ze);if(el===null){nt===null&&(nt=fn);break}e&&nt&&el.alternate===null&&n(Q,nt),G=g(el,G,at),tt===null?$e=el:tt.sibling=el,tt=el,nt=fn}if(_t.done)return i(Q,nt),Nt&&xl(Q,at),$e;if(nt===null){for(;!_t.done;at++,_t=re.next())_t=Te(Q,_t.value,Ze),_t!==null&&(G=g(_t,G,at),tt===null?$e=_t:tt.sibling=_t,tt=_t);return Nt&&xl(Q,at),$e}for(nt=u(Q,nt);!_t.done;at++,_t=re.next())_t=ze(nt,Q,at,_t.value,Ze),_t!==null&&(e&&_t.alternate!==null&&nt.delete(_t.key===null?at:_t.key),G=g(_t,G,at),tt===null?$e=_t:tt.sibling=_t,tt=_t);return e&&nt.forEach(function(xh){return n(Q,xh)}),Nt&&xl(Q,at),$e}function Wt(Q,G,re,Ze){if(typeof re=="object"&&re!==null&&re.type===de&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case fe:e:{for(var $e=re.key,tt=G;tt!==null;){if(tt.key===$e){if($e=re.type,$e===de){if(tt.tag===7){i(Q,tt.sibling),G=d(tt,re.props.children),G.return=Q,Q=G;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Se&&Z0($e)===tt.type){i(Q,tt.sibling),G=d(tt,re.props),G.ref=Fa(Q,tt,re),G.return=Q,Q=G;break e}i(Q,tt);break}else n(Q,tt);tt=tt.sibling}re.type===de?(G=Pl(re.props.children,Q.mode,Ze,re.key),G.return=Q,Q=G):(Ze=iu(re.type,re.key,re.props,null,Q.mode,Ze),Ze.ref=Fa(Q,G,re),Ze.return=Q,Q=Ze)}return Z(Q);case he:e:{for(tt=re.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===re.containerInfo&&G.stateNode.implementation===re.implementation){i(Q,G.sibling),G=d(G,re.children||[]),G.return=Q,Q=G;break e}else{i(Q,G);break}else n(Q,G);G=G.sibling}G=t1(re,Q.mode,Ze),G.return=Q,Q=G}return Z(Q);case Se:return tt=re._init,Wt(Q,G,tt(re._payload),Ze)}if(jn(re))return Ve(Q,G,re,Ze);if(ue(re))return Ke(Q,G,re,Ze);Is(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,G!==null&&G.tag===6?(i(Q,G.sibling),G=d(G,re),G.return=Q,Q=G):(i(Q,G),G=e1(re,Q.mode,Ze),G.return=Q,Q=G),Z(Q)):i(Q,G)}return Wt}var sa=b0(!0),C0=b0(!1),Os=Ho(null),As=null,ua=null,cc=null;function pc(){cc=ua=As=null}function dc(e){var n=Os.current;Pt(Os),e._currentValue=n}function fc(e,n,i){for(;e!==null;){var u=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,u!==null&&(u.childLanes|=n)):u!==null&&(u.childLanes&n)!==n&&(u.childLanes|=n),e===i)break;e=e.return}}function ca(e,n){As=e,cc=ua=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(rr=!0),e.firstContext=null)}function Br(e){var n=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:n,next:null},ua===null){if(As===null)throw Error(l(308));ua=e,As.dependencies={lanes:0,firstContext:e}}else ua=ua.next=e;return n}var Tl=null;function mc(e){Tl===null?Tl=[e]:Tl.push(e)}function E0(e,n,i,u){var d=n.interleaved;return d===null?(i.next=i,mc(n)):(i.next=d.next,d.next=i),n.interleaved=i,ho(e,u)}function ho(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Uo=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function go(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ko(e,n,i){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(vt&2)!==0){var d=u.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),u.pending=n,ho(e,i)}return d=u.interleaved,d===null?(n.next=n,mc(u)):(n.next=d.next,d.next=n),u.interleaved=n,ho(e,i)}function Ds(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var u=n.lanes;u&=e.pendingLanes,i|=u,n.lanes=i,xe(e,i)}}function M0(e,n){var i=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,i===u)){var d=null,g=null;if(i=i.firstBaseUpdate,i!==null){do{var Z={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};g===null?d=g=Z:g=g.next=Z,i=i.next}while(i!==null);g===null?d=g=n:g=g.next=n}else d=g=n;i={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function zs(e,n,i,u){var d=e.updateQueue;Uo=!1;var g=d.firstBaseUpdate,Z=d.lastBaseUpdate,z=d.shared.pending;if(z!==null){d.shared.pending=null;var H=z,ae=H.next;H.next=null,Z===null?g=ae:Z.next=ae,Z=H;var ye=e.alternate;ye!==null&&(ye=ye.updateQueue,z=ye.lastBaseUpdate,z!==Z&&(z===null?ye.firstBaseUpdate=ae:z.next=ae,ye.lastBaseUpdate=H))}if(g!==null){var Te=d.baseState;Z=0,ye=ae=H=null,z=g;do{var ke=z.lane,ze=z.eventTime;if((u&ke)===ke){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ve=e,Ke=z;switch(ke=n,ze=i,Ke.tag){case 1:if(Ve=Ke.payload,typeof Ve=="function"){Te=Ve.call(ze,Te,ke);break e}Te=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ke.payload,ke=typeof Ve=="function"?Ve.call(ze,Te,ke):Ve,ke==null)break e;Te=ie({},Te,ke);break e;case 2:Uo=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,ke=d.effects,ke===null?d.effects=[z]:ke.push(z))}else ze={eventTime:ze,lane:ke,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ye===null?(ae=ye=ze,H=Te):ye=ye.next=ze,Z|=ke;if(z=z.next,z===null){if(z=d.shared.pending,z===null)break;ke=z,z=ke.next,ke.next=null,d.lastBaseUpdate=ke,d.shared.pending=null}}while(!0);if(ye===null&&(H=Te),d.baseState=H,d.firstBaseUpdate=ae,d.lastBaseUpdate=ye,n=d.shared.interleaved,n!==null){d=n;do Z|=d.lane,d=d.next;while(d!==n)}else g===null&&(d.shared.lanes=0);Zl|=Z,e.lanes=Z,e.memoizedState=Te}}function L0(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var u=e[n],d=u.callback;if(d!==null){if(u.callback=null,u=i,typeof d!="function")throw Error(l(191,d));d.call(u)}}}var Ba={},ji=Ho(Ba),Wa=Ho(Ba),Ha=Ho(Ba);function wl(e){if(e===Ba)throw Error(l(174));return e}function gc(e,n){switch(Et(Ha,n),Et(Wa,e),Et(ji,Ba),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:$r(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=$r(n,e)}Pt(ji),Et(ji,n)}function pa(){Pt(ji),Pt(Wa),Pt(Ha)}function N0(e){wl(Ha.current);var n=wl(ji.current),i=$r(n,e.type);n!==i&&(Et(Wa,e),Et(ji,i))}function kc(e){Wa.current===e&&(Pt(ji),Pt(Wa))}var It=Ho(0);function js(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vc=[];function yc(){for(var e=0;e<vc.length;e++)vc[e]._workInProgressVersionPrimary=null;vc.length=0}var Fs=ce.ReactCurrentDispatcher,_c=ce.ReactCurrentBatchConfig,Sl=0,Ot=null,Yt=null,pn=null,Bs=!1,Va=!1,Ga=0,Hm=0;function An(){throw Error(l(321))}function xc(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!hr(e[i],n[i]))return!1;return!0}function Tc(e,n,i,u,d,g){if(Sl=g,Ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fs.current=e===null||e.memoizedState===null?Km:$m,e=i(u,d),Va){g=0;do{if(Va=!1,Ga=0,25<=g)throw Error(l(301));g+=1,pn=Yt=null,n.updateQueue=null,Fs.current=Xm,e=i(u,d)}while(Va)}if(Fs.current=Vs,n=Yt!==null&&Yt.next!==null,Sl=0,pn=Yt=Ot=null,Bs=!1,n)throw Error(l(300));return e}function wc(){var e=Ga!==0;return Ga=0,e}function Fi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Ot.memoizedState=pn=e:pn=pn.next=e,pn}function Wr(){if(Yt===null){var e=Ot.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var n=pn===null?Ot.memoizedState:pn.next;if(n!==null)pn=n,Yt=e;else{if(e===null)throw Error(l(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},pn===null?Ot.memoizedState=pn=e:pn=pn.next=e}return pn}function Ua(e,n){return typeof n=="function"?n(e):n}function Sc(e){var n=Wr(),i=n.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var u=Yt,d=u.baseQueue,g=i.pending;if(g!==null){if(d!==null){var Z=d.next;d.next=g.next,g.next=Z}u.baseQueue=d=g,i.pending=null}if(d!==null){g=d.next,u=u.baseState;var z=Z=null,H=null,ae=g;do{var ye=ae.lane;if((Sl&ye)===ye)H!==null&&(H=H.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:e(u,ae.action);else{var Te={lane:ye,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};H===null?(z=H=Te,Z=u):H=H.next=Te,Ot.lanes|=ye,Zl|=ye}ae=ae.next}while(ae!==null&&ae!==g);H===null?Z=u:H.next=z,hr(u,n.memoizedState)||(rr=!0),n.memoizedState=u,n.baseState=Z,n.baseQueue=H,i.lastRenderedState=u}if(e=i.interleaved,e!==null){d=e;do g=d.lane,Ot.lanes|=g,Zl|=g,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Zc(e){var n=Wr(),i=n.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var u=i.dispatch,d=i.pending,g=n.memoizedState;if(d!==null){i.pending=null;var Z=d=d.next;do g=e(g,Z.action),Z=Z.next;while(Z!==d);hr(g,n.memoizedState)||(rr=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),i.lastRenderedState=g}return[g,u]}function R0(){}function I0(e,n){var i=Ot,u=Wr(),d=n(),g=!hr(u.memoizedState,d);if(g&&(u.memoizedState=d,rr=!0),u=u.queue,bc(D0.bind(null,i,u,e),[e]),u.getSnapshot!==n||g||pn!==null&&pn.memoizedState.tag&1){if(i.flags|=2048,Ka(9,A0.bind(null,i,u,d,n),void 0,null),dn===null)throw Error(l(349));(Sl&30)!==0||O0(i,n,d)}return d}function O0(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=Ot.updateQueue,n===null?(n={lastEffect:null,stores:null},Ot.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function A0(e,n,i,u){n.value=i,n.getSnapshot=u,z0(n)&&j0(e)}function D0(e,n,i){return i(function(){z0(n)&&j0(e)})}function z0(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!hr(e,i)}catch{return!0}}function j0(e){var n=ho(e,1);n!==null&&vi(n,e,1,-1)}function F0(e){var n=Fi();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},n.queue=e,e=e.dispatch=Um.bind(null,Ot,e),[n.memoizedState,e]}function Ka(e,n,i,u){return e={tag:e,create:n,destroy:i,deps:u,next:null},n=Ot.updateQueue,n===null?(n={lastEffect:null,stores:null},Ot.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(u=i.next,i.next=e,e.next=u,n.lastEffect=e)),e}function B0(){return Wr().memoizedState}function Ws(e,n,i,u){var d=Fi();Ot.flags|=e,d.memoizedState=Ka(1|n,i,void 0,u===void 0?null:u)}function Hs(e,n,i,u){var d=Wr();u=u===void 0?null:u;var g=void 0;if(Yt!==null){var Z=Yt.memoizedState;if(g=Z.destroy,u!==null&&xc(u,Z.deps)){d.memoizedState=Ka(n,i,g,u);return}}Ot.flags|=e,d.memoizedState=Ka(1|n,i,g,u)}function W0(e,n){return Ws(8390656,8,e,n)}function bc(e,n){return Hs(2048,8,e,n)}function H0(e,n){return Hs(4,2,e,n)}function V0(e,n){return Hs(4,4,e,n)}function G0(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function U0(e,n,i){return i=i!=null?i.concat([e]):null,Hs(4,4,G0.bind(null,n,e),i)}function Cc(){}function K0(e,n){var i=Wr();n=n===void 0?null:n;var u=i.memoizedState;return u!==null&&n!==null&&xc(n,u[1])?u[0]:(i.memoizedState=[e,n],e)}function $0(e,n){var i=Wr();n=n===void 0?null:n;var u=i.memoizedState;return u!==null&&n!==null&&xc(n,u[1])?u[0]:(e=e(),i.memoizedState=[e,n],e)}function X0(e,n,i){return(Sl&21)===0?(e.baseState&&(e.baseState=!1,rr=!0),e.memoizedState=i):(hr(i,n)||(i=O(),Ot.lanes|=i,Zl|=i,e.baseState=!0),n)}function Vm(e,n){var i=Ce;Ce=i!==0&&4>i?i:4,e(!0);var u=_c.transition;_c.transition={};try{e(!1),n()}finally{Ce=i,_c.transition=u}}function q0(){return Wr().memoizedState}function Gm(e,n,i){var u=Yo(e);if(i={lane:u,action:i,hasEagerState:!1,eagerState:null,next:null},Y0(e))Q0(n,i);else if(i=E0(e,n,i,u),i!==null){var d=qn();vi(i,e,u,d),J0(i,n,u)}}function Um(e,n,i){var u=Yo(e),d={lane:u,action:i,hasEagerState:!1,eagerState:null,next:null};if(Y0(e))Q0(n,d);else{var g=e.alternate;if(e.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var Z=n.lastRenderedState,z=g(Z,i);if(d.hasEagerState=!0,d.eagerState=z,hr(z,Z)){var H=n.interleaved;H===null?(d.next=d,mc(n)):(d.next=H.next,H.next=d),n.interleaved=d;return}}catch{}finally{}i=E0(e,n,d,u),i!==null&&(d=qn(),vi(i,e,u,d),J0(i,n,u))}}function Y0(e){var n=e.alternate;return e===Ot||n!==null&&n===Ot}function Q0(e,n){Va=Bs=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function J0(e,n,i){if((i&4194240)!==0){var u=n.lanes;u&=e.pendingLanes,i|=u,n.lanes=i,xe(e,i)}}var Vs={readContext:Br,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},Km={readContext:Br,useCallback:function(e,n){return Fi().memoizedState=[e,n===void 0?null:n],e},useContext:Br,useEffect:W0,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Ws(4194308,4,G0.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Ws(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ws(4,2,e,n)},useMemo:function(e,n){var i=Fi();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var u=Fi();return n=i!==void 0?i(n):n,u.memoizedState=u.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},u.queue=e,e=e.dispatch=Gm.bind(null,Ot,e),[u.memoizedState,e]},useRef:function(e){var n=Fi();return e={current:e},n.memoizedState=e},useState:F0,useDebugValue:Cc,useDeferredValue:function(e){return Fi().memoizedState=e},useTransition:function(){var e=F0(!1),n=e[0];return e=Vm.bind(null,e[1]),Fi().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var u=Ot,d=Fi();if(Nt){if(i===void 0)throw Error(l(407));i=i()}else{if(i=n(),dn===null)throw Error(l(349));(Sl&30)!==0||O0(u,n,i)}d.memoizedState=i;var g={value:i,getSnapshot:n};return d.queue=g,W0(D0.bind(null,u,g,e),[e]),u.flags|=2048,Ka(9,A0.bind(null,u,g,i,n),void 0,null),i},useId:function(){var e=Fi(),n=dn.identifierPrefix;if(Nt){var i=mo,u=fo;i=(u&~(1<<32-et(u)-1)).toString(32)+i,n=":"+n+"R"+i,i=Ga++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Hm++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},$m={readContext:Br,useCallback:K0,useContext:Br,useEffect:bc,useImperativeHandle:U0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:$0,useReducer:Sc,useRef:B0,useState:function(){return Sc(Ua)},useDebugValue:Cc,useDeferredValue:function(e){var n=Wr();return X0(n,Yt.memoizedState,e)},useTransition:function(){var e=Sc(Ua)[0],n=Wr().memoizedState;return[e,n]},useMutableSource:R0,useSyncExternalStore:I0,useId:q0,unstable_isNewReconciler:!1},Xm={readContext:Br,useCallback:K0,useContext:Br,useEffect:bc,useImperativeHandle:U0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:$0,useReducer:Zc,useRef:B0,useState:function(){return Zc(Ua)},useDebugValue:Cc,useDeferredValue:function(e){var n=Wr();return Yt===null?n.memoizedState=e:X0(n,Yt.memoizedState,e)},useTransition:function(){var e=Zc(Ua)[0],n=Wr().memoizedState;return[e,n]},useMutableSource:R0,useSyncExternalStore:I0,useId:q0,unstable_isNewReconciler:!1};function hi(e,n){if(e&&e.defaultProps){n=ie({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Ec(e,n,i,u){n=e.memoizedState,i=i(u,n),i=i==null?n:ie({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Gs={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var u=qn(),d=Yo(e),g=go(u,d);g.payload=n,i!=null&&(g.callback=i),n=Ko(e,g,d),n!==null&&(vi(n,e,d,u),Ds(n,e,d))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var u=qn(),d=Yo(e),g=go(u,d);g.tag=1,g.payload=n,i!=null&&(g.callback=i),n=Ko(e,g,d),n!==null&&(vi(n,e,d,u),Ds(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=qn(),u=Yo(e),d=go(i,u);d.tag=2,n!=null&&(d.callback=n),n=Ko(e,d,u),n!==null&&(vi(n,e,u,i),Ds(n,e,u))}};function ep(e,n,i,u,d,g,Z){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,g,Z):n.prototype&&n.prototype.isPureReactComponent?!Oi(i,u)||!Oi(d,g):!0}function tp(e,n,i){var u=!1,d=Vo,g=n.contextType;return typeof g=="object"&&g!==null?g=Br(g):(d=nr(n)?yl:On.current,u=n.contextTypes,g=(u=u!=null)?ia(e,d):Vo),n=new n(i,g),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Gs,e.stateNode=n,n._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=g),n}function np(e,n,i,u){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,u),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,u),n.state!==e&&Gs.enqueueReplaceState(n,n.state,null)}function Pc(e,n,i,u){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},hc(e);var g=n.contextType;typeof g=="object"&&g!==null?d.context=Br(g):(g=nr(n)?yl:On.current,d.context=ia(e,g)),d.state=e.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Ec(e,n,g,i),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Gs.enqueueReplaceState(d,d.state,null),zs(e,i,d,u),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function da(e,n){try{var i="",u=n;do i+=te(u),u=u.return;while(u);var d=i}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:e,source:n,stack:d,digest:null}}function Mc(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Lc(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var qm=typeof WeakMap=="function"?WeakMap:Map;function rp(e,n,i){i=go(-1,i),i.tag=3,i.payload={element:null};var u=n.value;return i.callback=function(){Qs||(Qs=!0,Uc=u),Lc(e,n)},i}function ip(e,n,i){i=go(-1,i),i.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var d=n.value;i.payload=function(){return u(d)},i.callback=function(){Lc(e,n)}}var g=e.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(i.callback=function(){Lc(e,n),typeof u!="function"&&(Xo===null?Xo=new Set([this]):Xo.add(this));var Z=n.stack;this.componentDidCatch(n.value,{componentStack:Z!==null?Z:""})}),i}function op(e,n,i){var u=e.pingCache;if(u===null){u=e.pingCache=new qm;var d=new Set;u.set(n,d)}else d=u.get(n),d===void 0&&(d=new Set,u.set(n,d));d.has(i)||(d.add(i),e=ch.bind(null,e,n,i),n.then(e,e))}function lp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ap(e,n,i,u,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=go(-1,1),n.tag=2,Ko(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Ym=ce.ReactCurrentOwner,rr=!1;function Xn(e,n,i,u){n.child=e===null?C0(n,null,i,u):sa(n,e.child,i,u)}function sp(e,n,i,u,d){i=i.render;var g=n.ref;return ca(n,d),u=Tc(e,n,i,u,g,d),i=wc(),e!==null&&!rr?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,ko(e,n,d)):(Nt&&i&&oc(n),n.flags|=1,Xn(e,n,u,d),n.child)}function up(e,n,i,u,d){if(e===null){var g=i.type;return typeof g=="function"&&!Jc(g)&&g.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=g,cp(e,n,g,u,d)):(e=iu(i.type,null,u,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(g=e.child,(e.lanes&d)===0){var Z=g.memoizedProps;if(i=i.compare,i=i!==null?i:Oi,i(Z,u)&&e.ref===n.ref)return ko(e,n,d)}return n.flags|=1,e=Jo(g,u),e.ref=n.ref,e.return=n,n.child=e}function cp(e,n,i,u,d){if(e!==null){var g=e.memoizedProps;if(Oi(g,u)&&e.ref===n.ref)if(rr=!1,n.pendingProps=u=g,(e.lanes&d)!==0)(e.flags&131072)!==0&&(rr=!0);else return n.lanes=e.lanes,ko(e,n,d)}return Nc(e,n,i,u,d)}function pp(e,n,i){var u=n.pendingProps,d=u.children,g=e!==null?e.memoizedState:null;if(u.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(ma,yr),yr|=i;else{if((i&1073741824)===0)return e=g!==null?g.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Et(ma,yr),yr|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:i,Et(ma,yr),yr|=u}else g!==null?(u=g.baseLanes|i,n.memoizedState=null):u=i,Et(ma,yr),yr|=u;return Xn(e,n,d,i),n.child}function dp(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Nc(e,n,i,u,d){var g=nr(i)?yl:On.current;return g=ia(n,g),ca(n,d),i=Tc(e,n,i,u,g,d),u=wc(),e!==null&&!rr?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,ko(e,n,d)):(Nt&&u&&oc(n),n.flags|=1,Xn(e,n,i,d),n.child)}function fp(e,n,i,u,d){if(nr(i)){var g=!0;Ps(n)}else g=!1;if(ca(n,d),n.stateNode===null)Ks(e,n),tp(n,i,u),Pc(n,i,u,d),u=!0;else if(e===null){var Z=n.stateNode,z=n.memoizedProps;Z.props=z;var H=Z.context,ae=i.contextType;typeof ae=="object"&&ae!==null?ae=Br(ae):(ae=nr(i)?yl:On.current,ae=ia(n,ae));var ye=i.getDerivedStateFromProps,Te=typeof ye=="function"||typeof Z.getSnapshotBeforeUpdate=="function";Te||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(z!==u||H!==ae)&&np(n,Z,u,ae),Uo=!1;var ke=n.memoizedState;Z.state=ke,zs(n,u,Z,d),H=n.memoizedState,z!==u||ke!==H||tr.current||Uo?(typeof ye=="function"&&(Ec(n,i,ye,u),H=n.memoizedState),(z=Uo||ep(n,i,z,u,ke,H,ae))?(Te||typeof Z.UNSAFE_componentWillMount!="function"&&typeof Z.componentWillMount!="function"||(typeof Z.componentWillMount=="function"&&Z.componentWillMount(),typeof Z.UNSAFE_componentWillMount=="function"&&Z.UNSAFE_componentWillMount()),typeof Z.componentDidMount=="function"&&(n.flags|=4194308)):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=u,n.memoizedState=H),Z.props=u,Z.state=H,Z.context=ae,u=z):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),u=!1)}else{Z=n.stateNode,P0(e,n),z=n.memoizedProps,ae=n.type===n.elementType?z:hi(n.type,z),Z.props=ae,Te=n.pendingProps,ke=Z.context,H=i.contextType,typeof H=="object"&&H!==null?H=Br(H):(H=nr(i)?yl:On.current,H=ia(n,H));var ze=i.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof Z.getSnapshotBeforeUpdate=="function")||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(z!==Te||ke!==H)&&np(n,Z,u,H),Uo=!1,ke=n.memoizedState,Z.state=ke,zs(n,u,Z,d);var Ve=n.memoizedState;z!==Te||ke!==Ve||tr.current||Uo?(typeof ze=="function"&&(Ec(n,i,ze,u),Ve=n.memoizedState),(ae=Uo||ep(n,i,ae,u,ke,Ve,H)||!1)?(ye||typeof Z.UNSAFE_componentWillUpdate!="function"&&typeof Z.componentWillUpdate!="function"||(typeof Z.componentWillUpdate=="function"&&Z.componentWillUpdate(u,Ve,H),typeof Z.UNSAFE_componentWillUpdate=="function"&&Z.UNSAFE_componentWillUpdate(u,Ve,H)),typeof Z.componentDidUpdate=="function"&&(n.flags|=4),typeof Z.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof Z.componentDidUpdate!="function"||z===e.memoizedProps&&ke===e.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&ke===e.memoizedState||(n.flags|=1024),n.memoizedProps=u,n.memoizedState=Ve),Z.props=u,Z.state=Ve,Z.context=H,u=ae):(typeof Z.componentDidUpdate!="function"||z===e.memoizedProps&&ke===e.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&ke===e.memoizedState||(n.flags|=1024),u=!1)}return Rc(e,n,i,u,g,d)}function Rc(e,n,i,u,d,g){dp(e,n);var Z=(n.flags&128)!==0;if(!u&&!Z)return d&&v0(n,i,!1),ko(e,n,g);u=n.stateNode,Ym.current=n;var z=Z&&typeof i.getDerivedStateFromError!="function"?null:u.render();return n.flags|=1,e!==null&&Z?(n.child=sa(n,e.child,null,g),n.child=sa(n,null,z,g)):Xn(e,n,z,g),n.memoizedState=u.state,d&&v0(n,i,!0),n.child}function mp(e){var n=e.stateNode;n.pendingContext?g0(e,n.pendingContext,n.pendingContext!==n.context):n.context&&g0(e,n.context,!1),gc(e,n.containerInfo)}function hp(e,n,i,u,d){return aa(),uc(d),n.flags|=256,Xn(e,n,i,u),n.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Oc(e){return{baseLanes:e,cachePool:null,transitions:null}}function gp(e,n,i){var u=n.pendingProps,d=It.current,g=!1,Z=(n.flags&128)!==0,z;if((z=Z)||(z=e!==null&&e.memoizedState===null?!1:(d&2)!==0),z?(g=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Et(It,d&1),e===null)return sc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(Z=u.children,e=u.fallback,g?(u=n.mode,g=n.child,Z={mode:"hidden",children:Z},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=Z):g=ou(Z,u,0,null),e=Pl(e,u,i,null),g.return=n,e.return=n,g.sibling=e,n.child=g,n.child.memoizedState=Oc(i),n.memoizedState=Ic,e):Ac(n,Z));if(d=e.memoizedState,d!==null&&(z=d.dehydrated,z!==null))return Qm(e,n,Z,u,z,d,i);if(g){g=u.fallback,Z=n.mode,d=e.child,z=d.sibling;var H={mode:"hidden",children:u.children};return(Z&1)===0&&n.child!==d?(u=n.child,u.childLanes=0,u.pendingProps=H,n.deletions=null):(u=Jo(d,H),u.subtreeFlags=d.subtreeFlags&14680064),z!==null?g=Jo(z,g):(g=Pl(g,Z,i,null),g.flags|=2),g.return=n,u.return=n,u.sibling=g,n.child=u,u=g,g=n.child,Z=e.child.memoizedState,Z=Z===null?Oc(i):{baseLanes:Z.baseLanes|i,cachePool:null,transitions:Z.transitions},g.memoizedState=Z,g.childLanes=e.childLanes&~i,n.memoizedState=Ic,u}return g=e.child,e=g.sibling,u=Jo(g,{mode:"visible",children:u.children}),(n.mode&1)===0&&(u.lanes=i),u.return=n,u.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=u,n.memoizedState=null,u}function Ac(e,n){return n=ou({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Us(e,n,i,u){return u!==null&&uc(u),sa(n,e.child,null,i),e=Ac(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,i,u,d,g,Z){if(i)return n.flags&256?(n.flags&=-257,u=Mc(Error(l(422))),Us(e,n,Z,u)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(g=u.fallback,d=n.mode,u=ou({mode:"visible",children:u.children},d,0,null),g=Pl(g,d,Z,null),g.flags|=2,u.return=n,g.return=n,u.sibling=g,n.child=u,(n.mode&1)!==0&&sa(n,e.child,null,Z),n.child.memoizedState=Oc(Z),n.memoizedState=Ic,g);if((n.mode&1)===0)return Us(e,n,Z,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var z=u.dgst;return u=z,g=Error(l(419)),u=Mc(g,u,void 0),Us(e,n,Z,u)}if(z=(Z&e.childLanes)!==0,rr||z){if(u=dn,u!==null){switch(Z&-Z){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|Z))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,ho(e,d),vi(u,e,d,-1))}return Qc(),u=Mc(Error(l(421))),Us(e,n,Z,u)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=ph.bind(null,e),d._reactRetry=n,null):(e=g.treeContext,vr=zi(d.nextSibling),kr=n,Nt=!0,mi=null,e!==null&&(jr[Fr++]=fo,jr[Fr++]=mo,jr[Fr++]=_l,fo=e.id,mo=e.overflow,_l=n),n=Ac(n,u.children),n.flags|=4096,n)}function kp(e,n,i){e.lanes|=n;var u=e.alternate;u!==null&&(u.lanes|=n),fc(e.return,n,i)}function Dc(e,n,i,u,d){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:u,tail:i,tailMode:d}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=i,g.tailMode=d)}function vp(e,n,i){var u=n.pendingProps,d=u.revealOrder,g=u.tail;if(Xn(e,n,u.children,i),u=It.current,(u&2)!==0)u=u&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kp(e,i,n);else if(e.tag===19)kp(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(Et(It,u),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)e=i.alternate,e!==null&&js(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Dc(n,!1,d,i,g);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&js(e)===null){n.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Dc(n,!0,i,null,g);break;case"together":Dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ks(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function ko(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Zl|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,i=Jo(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Jo(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Jm(e,n,i){switch(n.tag){case 3:mp(n),aa();break;case 5:N0(n);break;case 1:nr(n.type)&&Ps(n);break;case 4:gc(n,n.stateNode.containerInfo);break;case 10:var u=n.type._context,d=n.memoizedProps.value;Et(Os,u._currentValue),u._currentValue=d;break;case 13:if(u=n.memoizedState,u!==null)return u.dehydrated!==null?(Et(It,It.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?gp(e,n,i):(Et(It,It.current&1),e=ko(e,n,i),e!==null?e.sibling:null);Et(It,It.current&1);break;case 19:if(u=(i&n.childLanes)!==0,(e.flags&128)!==0){if(u)return vp(e,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Et(It,It.current),u)break;return null;case 22:case 23:return n.lanes=0,pp(e,n,i)}return ko(e,n,i)}var yp,zc,_p,xp;yp=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},zc=function(){},_p=function(e,n,i,u){var d=e.memoizedProps;if(d!==u){e=n.stateNode,wl(ji.current);var g=null;switch(i){case"input":d=st(e,d),u=st(e,u),g=[];break;case"select":d=ie({},d,{value:void 0}),u=ie({},u,{value:void 0}),g=[];break;case"textarea":d=hn(e,d),u=hn(e,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=ge)}Yi(i,u);var Z;i=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var z=d[ae];for(Z in z)z.hasOwnProperty(Z)&&(i||(i={}),i[Z]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(f.hasOwnProperty(ae)?g||(g=[]):(g=g||[]).push(ae,null));for(ae in u){var H=u[ae];if(z=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&H!==z&&(H!=null||z!=null))if(ae==="style")if(z){for(Z in z)!z.hasOwnProperty(Z)||H&&H.hasOwnProperty(Z)||(i||(i={}),i[Z]="");for(Z in H)H.hasOwnProperty(Z)&&z[Z]!==H[Z]&&(i||(i={}),i[Z]=H[Z])}else i||(g||(g=[]),g.push(ae,i)),i=H;else ae==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,z=z?z.__html:void 0,H!=null&&z!==H&&(g=g||[]).push(ae,H)):ae==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ae,""+H):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(f.hasOwnProperty(ae)?(H!=null&&ae==="onScroll"&&bt("scroll",e),g||z===H||(g=[])):(g=g||[]).push(ae,H))}i&&(g=g||[]).push("style",i);var ae=g;(n.updateQueue=ae)&&(n.flags|=4)}},xp=function(e,n,i,u){i!==u&&(n.flags|=4)};function $a(e,n){if(!Nt)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,u=0;if(n)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=u,e.childLanes=i,n}function eh(e,n,i){var u=n.pendingProps;switch(lc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(n),null;case 1:return nr(n.type)&&Es(),Dn(n),null;case 3:return u=n.stateNode,pa(),Pt(tr),Pt(On),yc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(Rs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mi!==null&&(Xc(mi),mi=null))),zc(e,n),Dn(n),null;case 5:kc(n);var d=wl(Ha.current);if(i=n.type,e!==null&&n.stateNode!=null)_p(e,n,i,u,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!u){if(n.stateNode===null)throw Error(l(166));return Dn(n),null}if(e=wl(ji.current),Rs(n)){u=n.stateNode,i=n.type;var g=n.memoizedProps;switch(u[zr]=n,u[Bo]=g,e=(n.mode&1)!==0,i){case"dialog":bt("cancel",u),bt("close",u);break;case"iframe":case"object":case"embed":bt("load",u);break;case"video":case"audio":for(d=0;d<zo.length;d++)bt(zo[d],u);break;case"source":bt("error",u);break;case"img":case"image":case"link":bt("error",u),bt("load",u);break;case"details":bt("toggle",u);break;case"input":wn(u,g),bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},bt("invalid",u);break;case"textarea":Dt(u,g),bt("invalid",u)}Yi(i,g),d=null;for(var Z in g)if(g.hasOwnProperty(Z)){var z=g[Z];Z==="children"?typeof z=="string"?u.textContent!==z&&(g.suppressHydrationWarning!==!0&&le(u.textContent,z,e),d=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&le(u.textContent,z,e),d=["children",""+z]):f.hasOwnProperty(Z)&&z!=null&&Z==="onScroll"&&bt("scroll",u)}switch(i){case"input":ve(u),Zn(u,g,!0);break;case"textarea":ve(u),$i(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ge)}u=d,n.updateQueue=u,u!==null&&(n.flags|=4)}else{Z=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kr(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=Z.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=Z.createElement(i,{is:u.is}):(e=Z.createElement(i),i==="select"&&(Z=e,u.multiple?Z.multiple=!0:u.size&&(Z.size=u.size))):e=Z.createElementNS(e,i),e[zr]=n,e[Bo]=u,yp(e,n,!1,!1),n.stateNode=e;e:{switch(Z=sr(i,u),i){case"dialog":bt("cancel",e),bt("close",e),d=u;break;case"iframe":case"object":case"embed":bt("load",e),d=u;break;case"video":case"audio":for(d=0;d<zo.length;d++)bt(zo[d],e);d=u;break;case"source":bt("error",e),d=u;break;case"img":case"image":case"link":bt("error",e),bt("load",e),d=u;break;case"details":bt("toggle",e),d=u;break;case"input":wn(e,u),d=st(e,u),bt("invalid",e);break;case"option":d=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},d=ie({},u,{value:void 0}),bt("invalid",e);break;case"textarea":Dt(e,u),d=hn(e,u),bt("invalid",e);break;default:d=u}Yi(i,d),z=d;for(g in z)if(z.hasOwnProperty(g)){var H=z[g];g==="style"?Si(e,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Xi(e,H)):g==="children"?typeof H=="string"?(i!=="textarea"||H!=="")&&ar(e,H):typeof H=="number"&&ar(e,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(f.hasOwnProperty(g)?H!=null&&g==="onScroll"&&bt("scroll",e):H!=null&&ee(e,g,H,Z))}switch(i){case"input":ve(e),Zn(e,u,!1);break;case"textarea":ve(e),$i(e);break;case"option":u.value!=null&&e.setAttribute("value",""+Ae(u.value));break;case"select":e.multiple=!!u.multiple,g=u.value,g!=null?Fn(e,!!u.multiple,g,!1):u.defaultValue!=null&&Fn(e,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ge)}switch(i){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Dn(n),null;case 6:if(e&&n.stateNode!=null)xp(e,n,e.memoizedProps,u);else{if(typeof u!="string"&&n.stateNode===null)throw Error(l(166));if(i=wl(Ha.current),wl(ji.current),Rs(n)){if(u=n.stateNode,i=n.memoizedProps,u[zr]=n,(g=u.nodeValue!==i)&&(e=kr,e!==null))switch(e.tag){case 3:le(u.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&le(u.nodeValue,i,(e.mode&1)!==0)}g&&(n.flags|=4)}else u=(i.nodeType===9?i:i.ownerDocument).createTextNode(u),u[zr]=n,n.stateNode=u}return Dn(n),null;case 13:if(Pt(It),u=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Nt&&vr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)S0(),aa(),n.flags|=98560,g=!1;else if(g=Rs(n),u!==null&&u.dehydrated!==null){if(e===null){if(!g)throw Error(l(318));if(g=n.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(l(317));g[zr]=n}else aa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Dn(n),g=!1}else mi!==null&&(Xc(mi),mi=null),g=!0;if(!g)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(It.current&1)!==0?Qt===0&&(Qt=3):Qc())),n.updateQueue!==null&&(n.flags|=4),Dn(n),null);case 4:return pa(),zc(e,n),e===null&&jo(n.stateNode.containerInfo),Dn(n),null;case 10:return dc(n.type._context),Dn(n),null;case 17:return nr(n.type)&&Es(),Dn(n),null;case 19:if(Pt(It),g=n.memoizedState,g===null)return Dn(n),null;if(u=(n.flags&128)!==0,Z=g.rendering,Z===null)if(u)$a(g,!1);else{if(Qt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(Z=js(e),Z!==null){for(n.flags|=128,$a(g,!1),u=Z.updateQueue,u!==null&&(n.updateQueue=u,n.flags|=4),n.subtreeFlags=0,u=i,i=n.child;i!==null;)g=i,e=u,g.flags&=14680066,Z=g.alternate,Z===null?(g.childLanes=0,g.lanes=e,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=Z.childLanes,g.lanes=Z.lanes,g.child=Z.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=Z.memoizedProps,g.memoizedState=Z.memoizedState,g.updateQueue=Z.updateQueue,g.type=Z.type,e=Z.dependencies,g.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Et(It,It.current&1|2),n.child}e=e.sibling}g.tail!==null&&St()>ha&&(n.flags|=128,u=!0,$a(g,!1),n.lanes=4194304)}else{if(!u)if(e=js(Z),e!==null){if(n.flags|=128,u=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),$a(g,!0),g.tail===null&&g.tailMode==="hidden"&&!Z.alternate&&!Nt)return Dn(n),null}else 2*St()-g.renderingStartTime>ha&&i!==1073741824&&(n.flags|=128,u=!0,$a(g,!1),n.lanes=4194304);g.isBackwards?(Z.sibling=n.child,n.child=Z):(i=g.last,i!==null?i.sibling=Z:n.child=Z,g.last=Z)}return g.tail!==null?(n=g.tail,g.rendering=n,g.tail=n.sibling,g.renderingStartTime=St(),n.sibling=null,i=It.current,Et(It,u?i&1|2:i&1),n):(Dn(n),null);case 22:case 23:return Yc(),u=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(n.flags|=8192),u&&(n.mode&1)!==0?(yr&1073741824)!==0&&(Dn(n),n.subtreeFlags&6&&(n.flags|=8192)):Dn(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function th(e,n){switch(lc(n),n.tag){case 1:return nr(n.type)&&Es(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pa(),Pt(tr),Pt(On),yc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return kc(n),null;case 13:if(Pt(It),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));aa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Pt(It),null;case 4:return pa(),null;case 10:return dc(n.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var $s=!1,zn=!1,nh=typeof WeakSet=="function"?WeakSet:Set,Be=null;function fa(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(u){At(e,n,u)}else i.current=null}function jc(e,n,i){try{i()}catch(u){At(e,n,u)}}var Tp=!1;function rh(e,n){if(Oe=Ln,e=La(),Na(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var u=i.getSelection&&i.getSelection();if(u&&u.rangeCount!==0){i=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var Z=0,z=-1,H=-1,ae=0,ye=0,Te=e,ke=null;t:for(;;){for(var ze;Te!==i||d!==0&&Te.nodeType!==3||(z=Z+d),Te!==g||u!==0&&Te.nodeType!==3||(H=Z+u),Te.nodeType===3&&(Z+=Te.nodeValue.length),(ze=Te.firstChild)!==null;)ke=Te,Te=ze;for(;;){if(Te===e)break t;if(ke===i&&++ae===d&&(z=Z),ke===g&&++ye===u&&(H=Z),(ze=Te.nextSibling)!==null)break;Te=ke,ke=Te.parentNode}Te=ze}i=z===-1||H===-1?null:{start:z,end:H}}else i=null}i=i||{start:0,end:0}}else i=null;for(Je={focusedElem:e,selectionRange:i},Ln=!1,Be=n;Be!==null;)if(n=Be,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Be=e;else for(;Be!==null;){n=Be;try{var Ve=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ke=Ve.memoizedProps,Wt=Ve.memoizedState,Q=n.stateNode,G=Q.getSnapshotBeforeUpdate(n.elementType===n.type?Ke:hi(n.type,Ke),Wt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var re=n.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(Ze){At(n,n.return,Ze)}if(e=n.sibling,e!==null){e.return=n.return,Be=e;break}Be=n.return}return Ve=Tp,Tp=!1,Ve}function Xa(e,n,i){var u=n.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&e)===e){var g=d.destroy;d.destroy=void 0,g!==void 0&&jc(n,i,g)}d=d.next}while(d!==u)}}function Xs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var u=i.create;i.destroy=u()}i=i.next}while(i!==n)}}function Fc(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function wp(e){var n=e.alternate;n!==null&&(e.alternate=null,wp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[zr],delete n[Bo],delete n[Wo],delete n[tc],delete n[nc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sp(e){return e.tag===5||e.tag===3||e.tag===4}function Zp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,n,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ge));else if(u!==4&&(e=e.child,e!==null))for(Bc(e,n,i),e=e.sibling;e!==null;)Bc(e,n,i),e=e.sibling}function Wc(e,n,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(Wc(e,n,i),e=e.sibling;e!==null;)Wc(e,n,i),e=e.sibling}var _n=null,gi=!1;function $o(e,n,i){for(i=i.child;i!==null;)bp(e,n,i),i=i.sibling}function bp(e,n,i){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Cn,i)}catch{}switch(i.tag){case 5:zn||fa(i,n);case 6:var u=_n,d=gi;_n=null,$o(e,n,i),_n=u,gi=d,_n!==null&&(gi?(e=_n,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):_n.removeChild(i.stateNode));break;case 18:_n!==null&&(gi?(e=_n,i=i.stateNode,e.nodeType===8?ja(e.parentNode,i):e.nodeType===1&&ja(e,i),an(e)):ja(_n,i.stateNode));break;case 4:u=_n,d=gi,_n=i.stateNode.containerInfo,gi=!0,$o(e,n,i),_n=u,gi=d;break;case 0:case 11:case 14:case 15:if(!zn&&(u=i.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,Z=g.destroy;g=g.tag,Z!==void 0&&((g&2)!==0||(g&4)!==0)&&jc(i,n,Z),d=d.next}while(d!==u)}$o(e,n,i);break;case 1:if(!zn&&(fa(i,n),u=i.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=i.memoizedProps,u.state=i.memoizedState,u.componentWillUnmount()}catch(z){At(i,n,z)}$o(e,n,i);break;case 21:$o(e,n,i);break;case 22:i.mode&1?(zn=(u=zn)||i.memoizedState!==null,$o(e,n,i),zn=u):$o(e,n,i);break;default:$o(e,n,i)}}function Cp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new nh),n.forEach(function(u){var d=dh.bind(null,e,u);i.has(u)||(i.add(u),u.then(d,d))})}}function ki(e,n){var i=n.deletions;if(i!==null)for(var u=0;u<i.length;u++){var d=i[u];try{var g=e,Z=n,z=Z;e:for(;z!==null;){switch(z.tag){case 5:_n=z.stateNode,gi=!1;break e;case 3:_n=z.stateNode.containerInfo,gi=!0;break e;case 4:_n=z.stateNode.containerInfo,gi=!0;break e}z=z.return}if(_n===null)throw Error(l(160));bp(g,Z,d),_n=null,gi=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ae){At(d,n,ae)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ep(n,e),n=n.sibling}function Ep(e,n){var i=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ki(n,e),Bi(e),u&4){try{Xa(3,e,e.return),Xs(3,e)}catch(Ke){At(e,e.return,Ke)}try{Xa(5,e,e.return)}catch(Ke){At(e,e.return,Ke)}}break;case 1:ki(n,e),Bi(e),u&512&&i!==null&&fa(i,i.return);break;case 5:if(ki(n,e),Bi(e),u&512&&i!==null&&fa(i,i.return),e.flags&32){var d=e.stateNode;try{ar(d,"")}catch(Ke){At(e,e.return,Ke)}}if(u&4&&(d=e.stateNode,d!=null)){var g=e.memoizedProps,Z=i!==null?i.memoizedProps:g,z=e.type,H=e.updateQueue;if(e.updateQueue=null,H!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&mn(d,g),sr(z,Z);var ae=sr(z,g);for(Z=0;Z<H.length;Z+=2){var ye=H[Z],Te=H[Z+1];ye==="style"?Si(d,Te):ye==="dangerouslySetInnerHTML"?Xi(d,Te):ye==="children"?ar(d,Te):ee(d,ye,Te,ae)}switch(z){case"input":Sn(d,g);break;case"textarea":Ki(d,g);break;case"select":var ke=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?Fn(d,!!g.multiple,ze,!1):ke!==!!g.multiple&&(g.defaultValue!=null?Fn(d,!!g.multiple,g.defaultValue,!0):Fn(d,!!g.multiple,g.multiple?[]:"",!1))}d[Bo]=g}catch(Ke){At(e,e.return,Ke)}}break;case 6:if(ki(n,e),Bi(e),u&4){if(e.stateNode===null)throw Error(l(162));d=e.stateNode,g=e.memoizedProps;try{d.nodeValue=g}catch(Ke){At(e,e.return,Ke)}}break;case 3:if(ki(n,e),Bi(e),u&4&&i!==null&&i.memoizedState.isDehydrated)try{an(n.containerInfo)}catch(Ke){At(e,e.return,Ke)}break;case 4:ki(n,e),Bi(e);break;case 13:ki(n,e),Bi(e),d=e.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Gc=St())),u&4&&Cp(e);break;case 22:if(ye=i!==null&&i.memoizedState!==null,e.mode&1?(zn=(ae=zn)||ye,ki(n,e),zn=ae):ki(n,e),Bi(e),u&8192){if(ae=e.memoizedState!==null,(e.stateNode.isHidden=ae)&&!ye&&(e.mode&1)!==0)for(Be=e,ye=e.child;ye!==null;){for(Te=Be=ye;Be!==null;){switch(ke=Be,ze=ke.child,ke.tag){case 0:case 11:case 14:case 15:Xa(4,ke,ke.return);break;case 1:fa(ke,ke.return);var Ve=ke.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ke,i=ke.return;try{n=u,Ve.props=n.memoizedProps,Ve.state=n.memoizedState,Ve.componentWillUnmount()}catch(Ke){At(u,i,Ke)}}break;case 5:fa(ke,ke.return);break;case 22:if(ke.memoizedState!==null){Lp(Te);continue}}ze!==null?(ze.return=ke,Be=ze):Lp(Te)}ye=ye.sibling}e:for(ye=null,Te=e;;){if(Te.tag===5){if(ye===null){ye=Te;try{d=Te.stateNode,ae?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Te.stateNode,H=Te.memoizedProps.style,Z=H!=null&&H.hasOwnProperty("display")?H.display:null,z.style.display=wr("display",Z))}catch(Ke){At(e,e.return,Ke)}}}else if(Te.tag===6){if(ye===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(Ke){At(e,e.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===e)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===e)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===e)break e;ye===Te&&(ye=null),Te=Te.return}ye===Te&&(ye=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:ki(n,e),Bi(e),u&4&&Cp(e);break;case 21:break;default:ki(n,e),Bi(e)}}function Bi(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Sp(i)){var u=i;break e}i=i.return}throw Error(l(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ar(d,""),u.flags&=-33);var g=Zp(e);Wc(e,g,d);break;case 3:case 4:var Z=u.stateNode.containerInfo,z=Zp(e);Bc(e,z,Z);break;default:throw Error(l(161))}}catch(H){At(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ih(e,n,i){Be=e,Pp(e)}function Pp(e,n,i){for(var u=(e.mode&1)!==0;Be!==null;){var d=Be,g=d.child;if(d.tag===22&&u){var Z=d.memoizedState!==null||$s;if(!Z){var z=d.alternate,H=z!==null&&z.memoizedState!==null||zn;z=$s;var ae=zn;if($s=Z,(zn=H)&&!ae)for(Be=d;Be!==null;)Z=Be,H=Z.child,Z.tag===22&&Z.memoizedState!==null?Np(d):H!==null?(H.return=Z,Be=H):Np(d);for(;g!==null;)Be=g,Pp(g),g=g.sibling;Be=d,$s=z,zn=ae}Mp(e)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Be=g):Mp(e)}}function Mp(e){for(;Be!==null;){var n=Be;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:zn||Xs(5,n);break;case 1:var u=n.stateNode;if(n.flags&4&&!zn)if(i===null)u.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:hi(n.type,i.memoizedProps);u.componentDidUpdate(d,i.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=n.updateQueue;g!==null&&L0(n,g,u);break;case 3:var Z=n.updateQueue;if(Z!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}L0(n,Z,i)}break;case 5:var z=n.stateNode;if(i===null&&n.flags&4){i=z;var H=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&i.focus();break;case"img":H.src&&(i.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ae=n.alternate;if(ae!==null){var ye=ae.memoizedState;if(ye!==null){var Te=ye.dehydrated;Te!==null&&an(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}zn||n.flags&512&&Fc(n)}catch(ke){At(n,n.return,ke)}}if(n===e){Be=null;break}if(i=n.sibling,i!==null){i.return=n.return,Be=i;break}Be=n.return}}function Lp(e){for(;Be!==null;){var n=Be;if(n===e){Be=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Be=i;break}Be=n.return}}function Np(e){for(;Be!==null;){var n=Be;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Xs(4,n)}catch(H){At(n,i,H)}break;case 1:var u=n.stateNode;if(typeof u.componentDidMount=="function"){var d=n.return;try{u.componentDidMount()}catch(H){At(n,d,H)}}var g=n.return;try{Fc(n)}catch(H){At(n,g,H)}break;case 5:var Z=n.return;try{Fc(n)}catch(H){At(n,Z,H)}}}catch(H){At(n,n.return,H)}if(n===e){Be=null;break}var z=n.sibling;if(z!==null){z.return=n.return,Be=z;break}Be=n.return}}var oh=Math.ceil,qs=ce.ReactCurrentDispatcher,Hc=ce.ReactCurrentOwner,Hr=ce.ReactCurrentBatchConfig,vt=0,dn=null,Gt=null,xn=0,yr=0,ma=Ho(0),Qt=0,qa=null,Zl=0,Ys=0,Vc=0,Ya=null,ir=null,Gc=0,ha=1/0,vo=null,Qs=!1,Uc=null,Xo=null,Js=!1,qo=null,eu=0,Qa=0,Kc=null,tu=-1,nu=0;function qn(){return(vt&6)!==0?St():tu!==-1?tu:tu=St()}function Yo(e){return(e.mode&1)===0?1:(vt&2)!==0&&xn!==0?xn&-xn:Wm.transition!==null?(nu===0&&(nu=O()),nu):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:dt(e.type)),e)}function vi(e,n,i,u){if(50<Qa)throw Qa=0,Kc=null,Error(l(185));$(e,i,u),((vt&2)===0||e!==dn)&&(e===dn&&((vt&2)===0&&(Ys|=i),Qt===4&&Qo(e,xn)),or(e,u),i===1&&vt===0&&(n.mode&1)===0&&(ha=St()+500,Ms&&Go()))}function or(e,n){var i=e.callbackNode;w(e,n);var u=yt(e,e===dn?xn:0);if(u===0)i!==null&&Zi(i),e.callbackNode=null,e.callbackPriority=0;else if(n=u&-u,e.callbackPriority!==n){if(i!=null&&Zi(i),n===1)e.tag===0?Bm(Ip.bind(null,e)):y0(Ip.bind(null,e)),In(function(){(vt&6)===0&&Go()}),i=null;else{switch(qe(u)){case 1:i=bi;break;case 4:i=Ci;break;case 16:i=Pr;break;case 536870912:i=kn;break;default:i=Pr}i=Wp(i,Rp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Rp(e,n){if(tu=-1,nu=0,(vt&6)!==0)throw Error(l(327));var i=e.callbackNode;if(ga()&&e.callbackNode!==i)return null;var u=yt(e,e===dn?xn:0);if(u===0)return null;if((u&30)!==0||(u&e.expiredLanes)!==0||n)n=ru(e,u);else{n=u;var d=vt;vt|=2;var g=Ap();(dn!==e||xn!==n)&&(vo=null,ha=St()+500,Cl(e,n));do try{sh();break}catch(z){Op(e,z)}while(!0);pc(),qs.current=g,vt=d,Gt!==null?n=0:(dn=null,xn=0,n=Qt)}if(n!==0){if(n===2&&(d=M(e),d!==0&&(u=d,n=$c(e,d))),n===1)throw i=qa,Cl(e,0),Qo(e,u),or(e,St()),i;if(n===6)Qo(e,u);else{if(d=e.current.alternate,(u&30)===0&&!lh(d)&&(n=ru(e,u),n===2&&(g=M(e),g!==0&&(u=g,n=$c(e,g))),n===1))throw i=qa,Cl(e,0),Qo(e,u),or(e,St()),i;switch(e.finishedWork=d,e.finishedLanes=u,n){case 0:case 1:throw Error(l(345));case 2:El(e,ir,vo);break;case 3:if(Qo(e,u),(u&130023424)===u&&(n=Gc+500-St(),10<n)){if(yt(e,0)!==0)break;if(d=e.suspendedLanes,(d&u)!==u){qn(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=qt(El.bind(null,e,ir,vo),n);break}El(e,ir,vo);break;case 4:if(Qo(e,u),(u&4194240)===u)break;for(n=e.eventTimes,d=-1;0<u;){var Z=31-et(u);g=1<<Z,Z=n[Z],Z>d&&(d=Z),u&=~g}if(u=d,u=St()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*oh(u/1960))-u,10<u){e.timeoutHandle=qt(El.bind(null,e,ir,vo),u);break}El(e,ir,vo);break;case 5:El(e,ir,vo);break;default:throw Error(l(329))}}}return or(e,St()),e.callbackNode===i?Rp.bind(null,e):null}function $c(e,n){var i=Ya;return e.current.memoizedState.isDehydrated&&(Cl(e,n).flags|=256),e=ru(e,n),e!==2&&(n=ir,ir=i,n!==null&&Xc(n)),e}function Xc(e){ir===null?ir=e:ir.push.apply(ir,e)}function lh(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var u=0;u<i.length;u++){var d=i[u],g=d.getSnapshot;d=d.value;try{if(!hr(g(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qo(e,n){for(n&=~Vc,n&=~Ys,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-et(n),u=1<<i;e[i]=-1,n&=~u}}function Ip(e){if((vt&6)!==0)throw Error(l(327));ga();var n=yt(e,0);if((n&1)===0)return or(e,St()),null;var i=ru(e,n);if(e.tag!==0&&i===2){var u=M(e);u!==0&&(n=u,i=$c(e,u))}if(i===1)throw i=qa,Cl(e,0),Qo(e,n),or(e,St()),i;if(i===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,El(e,ir,vo),or(e,St()),null}function qc(e,n){var i=vt;vt|=1;try{return e(n)}finally{vt=i,vt===0&&(ha=St()+500,Ms&&Go())}}function bl(e){qo!==null&&qo.tag===0&&(vt&6)===0&&ga();var n=vt;vt|=1;var i=Hr.transition,u=Ce;try{if(Hr.transition=null,Ce=1,e)return e()}finally{Ce=u,Hr.transition=i,vt=n,(vt&6)===0&&Go()}}function Yc(){yr=ma.current,Pt(ma)}function Cl(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Vt(i)),Gt!==null)for(i=Gt.return;i!==null;){var u=i;switch(lc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Es();break;case 3:pa(),Pt(tr),Pt(On),yc();break;case 5:kc(u);break;case 4:pa();break;case 13:Pt(It);break;case 19:Pt(It);break;case 10:dc(u.type._context);break;case 22:case 23:Yc()}i=i.return}if(dn=e,Gt=e=Jo(e.current,null),xn=yr=n,Qt=0,qa=null,Vc=Ys=Zl=0,ir=Ya=null,Tl!==null){for(n=0;n<Tl.length;n++)if(i=Tl[n],u=i.interleaved,u!==null){i.interleaved=null;var d=u.next,g=i.pending;if(g!==null){var Z=g.next;g.next=d,u.next=Z}i.pending=u}Tl=null}return e}function Op(e,n){do{var i=Gt;try{if(pc(),Fs.current=Vs,Bs){for(var u=Ot.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Bs=!1}if(Sl=0,pn=Yt=Ot=null,Va=!1,Ga=0,Hc.current=null,i===null||i.return===null){Qt=1,qa=n,Gt=null;break}e:{var g=e,Z=i.return,z=i,H=n;if(n=xn,z.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ae=H,ye=z,Te=ye.tag;if((ye.mode&1)===0&&(Te===0||Te===11||Te===15)){var ke=ye.alternate;ke?(ye.updateQueue=ke.updateQueue,ye.memoizedState=ke.memoizedState,ye.lanes=ke.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=lp(Z);if(ze!==null){ze.flags&=-257,ap(ze,Z,z,g,n),ze.mode&1&&op(g,ae,n),n=ze,H=ae;var Ve=n.updateQueue;if(Ve===null){var Ke=new Set;Ke.add(H),n.updateQueue=Ke}else Ve.add(H);break e}else{if((n&1)===0){op(g,ae,n),Qc();break e}H=Error(l(426))}}else if(Nt&&z.mode&1){var Wt=lp(Z);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),ap(Wt,Z,z,g,n),uc(da(H,z));break e}}g=H=da(H,z),Qt!==4&&(Qt=2),Ya===null?Ya=[g]:Ya.push(g),g=Z;do{switch(g.tag){case 3:g.flags|=65536,n&=-n,g.lanes|=n;var Q=rp(g,H,n);M0(g,Q);break e;case 1:z=H;var G=g.type,re=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Xo===null||!Xo.has(re)))){g.flags|=65536,n&=-n,g.lanes|=n;var Ze=ip(g,z,n);M0(g,Ze);break e}}g=g.return}while(g!==null)}zp(i)}catch($e){n=$e,Gt===i&&i!==null&&(Gt=i=i.return);continue}break}while(!0)}function Ap(){var e=qs.current;return qs.current=Vs,e===null?Vs:e}function Qc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),dn===null||(Zl&268435455)===0&&(Ys&268435455)===0||Qo(dn,xn)}function ru(e,n){var i=vt;vt|=2;var u=Ap();(dn!==e||xn!==n)&&(vo=null,Cl(e,n));do try{ah();break}catch(d){Op(e,d)}while(!0);if(pc(),vt=i,qs.current=u,Gt!==null)throw Error(l(261));return dn=null,xn=0,Qt}function ah(){for(;Gt!==null;)Dp(Gt)}function sh(){for(;Gt!==null&&!bo();)Dp(Gt)}function Dp(e){var n=Bp(e.alternate,e,yr);e.memoizedProps=e.pendingProps,n===null?zp(e):Gt=n,Hc.current=null}function zp(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=eh(i,n,yr),i!==null){Gt=i;return}}else{if(i=th(i,n),i!==null){i.flags&=32767,Gt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qt=6,Gt=null;return}}if(n=n.sibling,n!==null){Gt=n;return}Gt=n=e}while(n!==null);Qt===0&&(Qt=5)}function El(e,n,i){var u=Ce,d=Hr.transition;try{Hr.transition=null,Ce=1,uh(e,n,i,u)}finally{Hr.transition=d,Ce=u}return null}function uh(e,n,i,u){do ga();while(qo!==null);if((vt&6)!==0)throw Error(l(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var g=i.lanes|i.childLanes;if(se(e,g),e===dn&&(Gt=dn=null,xn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Js||(Js=!0,Wp(Pr,function(){return ga(),null})),g=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||g){g=Hr.transition,Hr.transition=null;var Z=Ce;Ce=1;var z=vt;vt|=4,Hc.current=null,rh(e,i),Ep(i,e),Ar(Je),Ln=!!Oe,Je=Oe=null,e.current=i,ih(i),ii(),vt=z,Ce=Z,Hr.transition=g}else e.current=i;if(Js&&(Js=!1,qo=e,eu=d),g=e.pendingLanes,g===0&&(Xo=null),Hn(i.stateNode),or(e,St()),n!==null)for(u=e.onRecoverableError,i=0;i<n.length;i++)d=n[i],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qs)throw Qs=!1,e=Uc,Uc=null,e;return(eu&1)!==0&&e.tag!==0&&ga(),g=e.pendingLanes,(g&1)!==0?e===Kc?Qa++:(Qa=0,Kc=e):Qa=0,Go(),null}function ga(){if(qo!==null){var e=qe(eu),n=Hr.transition,i=Ce;try{if(Hr.transition=null,Ce=16>e?16:e,qo===null)var u=!1;else{if(e=qo,qo=null,eu=0,(vt&6)!==0)throw Error(l(331));var d=vt;for(vt|=4,Be=e.current;Be!==null;){var g=Be,Z=g.child;if((Be.flags&16)!==0){var z=g.deletions;if(z!==null){for(var H=0;H<z.length;H++){var ae=z[H];for(Be=ae;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:Xa(8,ye,g)}var Te=ye.child;if(Te!==null)Te.return=ye,Be=Te;else for(;Be!==null;){ye=Be;var ke=ye.sibling,ze=ye.return;if(wp(ye),ye===ae){Be=null;break}if(ke!==null){ke.return=ze,Be=ke;break}Be=ze}}}var Ve=g.alternate;if(Ve!==null){var Ke=Ve.child;if(Ke!==null){Ve.child=null;do{var Wt=Ke.sibling;Ke.sibling=null,Ke=Wt}while(Ke!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&Z!==null)Z.return=g,Be=Z;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var Q=g.sibling;if(Q!==null){Q.return=g.return,Be=Q;break e}Be=g.return}}var G=e.current;for(Be=G;Be!==null;){Z=Be;var re=Z.child;if((Z.subtreeFlags&2064)!==0&&re!==null)re.return=Z,Be=re;else e:for(Z=G;Be!==null;){if(z=Be,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Xs(9,z)}}catch($e){At(z,z.return,$e)}if(z===Z){Be=null;break e}var Ze=z.sibling;if(Ze!==null){Ze.return=z.return,Be=Ze;break e}Be=z.return}}if(vt=d,Go(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Cn,e)}catch{}u=!0}return u}finally{Ce=i,Hr.transition=n}}return!1}function jp(e,n,i){n=da(i,n),n=rp(e,n,1),e=Ko(e,n,1),n=qn(),e!==null&&($(e,1,n),or(e,n))}function At(e,n,i){if(e.tag===3)jp(e,e,i);else for(;n!==null;){if(n.tag===3){jp(n,e,i);break}else if(n.tag===1){var u=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Xo===null||!Xo.has(u))){e=da(i,e),e=ip(n,e,1),n=Ko(n,e,1),e=qn(),n!==null&&($(n,1,e),or(n,e));break}}n=n.return}}function ch(e,n,i){var u=e.pingCache;u!==null&&u.delete(n),n=qn(),e.pingedLanes|=e.suspendedLanes&i,dn===e&&(xn&i)===i&&(Qt===4||Qt===3&&(xn&130023424)===xn&&500>St()-Gc?Cl(e,0):Vc|=i),or(e,n)}function Fp(e,n){n===0&&((e.mode&1)===0?n=1:(n=pr,pr<<=1,(pr&130023424)===0&&(pr=4194304)));var i=qn();e=ho(e,n),e!==null&&($(e,n,i),or(e,i))}function ph(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Fp(e,i)}function dh(e,n){var i=0;switch(e.tag){case 13:var u=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(l(314))}u!==null&&u.delete(n),Fp(e,i)}var Bp;Bp=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||tr.current)rr=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return rr=!1,Jm(e,n,i);rr=(e.flags&131072)!==0}else rr=!1,Nt&&(n.flags&1048576)!==0&&_0(n,Ns,n.index);switch(n.lanes=0,n.tag){case 2:var u=n.type;Ks(e,n),e=n.pendingProps;var d=ia(n,On.current);ca(n,i),d=Tc(null,n,u,e,d,i);var g=wc();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,nr(u)?(g=!0,Ps(n)):g=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,hc(n),d.updater=Gs,n.stateNode=d,d._reactInternals=n,Pc(n,u,e,i),n=Rc(null,n,u,!0,g,i)):(n.tag=0,Nt&&g&&oc(n),Xn(null,n,d,i),n=n.child),n;case 16:u=n.elementType;e:{switch(Ks(e,n),e=n.pendingProps,d=u._init,u=d(u._payload),n.type=u,d=n.tag=mh(u),e=hi(u,e),d){case 0:n=Nc(null,n,u,e,i);break e;case 1:n=fp(null,n,u,e,i);break e;case 11:n=sp(null,n,u,e,i);break e;case 14:n=up(null,n,u,hi(u.type,e),i);break e}throw Error(l(306,u,""))}return n;case 0:return u=n.type,d=n.pendingProps,d=n.elementType===u?d:hi(u,d),Nc(e,n,u,d,i);case 1:return u=n.type,d=n.pendingProps,d=n.elementType===u?d:hi(u,d),fp(e,n,u,d,i);case 3:e:{if(mp(n),e===null)throw Error(l(387));u=n.pendingProps,g=n.memoizedState,d=g.element,P0(e,n),zs(n,u,null,i);var Z=n.memoizedState;if(u=Z.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:Z.cache,pendingSuspenseBoundaries:Z.pendingSuspenseBoundaries,transitions:Z.transitions},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){d=da(Error(l(423)),n),n=hp(e,n,u,i,d);break e}else if(u!==d){d=da(Error(l(424)),n),n=hp(e,n,u,i,d);break e}else for(vr=zi(n.stateNode.containerInfo.firstChild),kr=n,Nt=!0,mi=null,i=C0(n,null,u,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(aa(),u===d){n=ko(e,n,i);break e}Xn(e,n,u,i)}n=n.child}return n;case 5:return N0(n),e===null&&sc(n),u=n.type,d=n.pendingProps,g=e!==null?e.memoizedProps:null,Z=d.children,ut(u,d)?Z=null:g!==null&&ut(u,g)&&(n.flags|=32),dp(e,n),Xn(e,n,Z,i),n.child;case 6:return e===null&&sc(n),null;case 13:return gp(e,n,i);case 4:return gc(n,n.stateNode.containerInfo),u=n.pendingProps,e===null?n.child=sa(n,null,u,i):Xn(e,n,u,i),n.child;case 11:return u=n.type,d=n.pendingProps,d=n.elementType===u?d:hi(u,d),sp(e,n,u,d,i);case 7:return Xn(e,n,n.pendingProps,i),n.child;case 8:return Xn(e,n,n.pendingProps.children,i),n.child;case 12:return Xn(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(u=n.type._context,d=n.pendingProps,g=n.memoizedProps,Z=d.value,Et(Os,u._currentValue),u._currentValue=Z,g!==null)if(hr(g.value,Z)){if(g.children===d.children&&!tr.current){n=ko(e,n,i);break e}}else for(g=n.child,g!==null&&(g.return=n);g!==null;){var z=g.dependencies;if(z!==null){Z=g.child;for(var H=z.firstContext;H!==null;){if(H.context===u){if(g.tag===1){H=go(-1,i&-i),H.tag=2;var ae=g.updateQueue;if(ae!==null){ae=ae.shared;var ye=ae.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ae.pending=H}}g.lanes|=i,H=g.alternate,H!==null&&(H.lanes|=i),fc(g.return,i,n),z.lanes|=i;break}H=H.next}}else if(g.tag===10)Z=g.type===n.type?null:g.child;else if(g.tag===18){if(Z=g.return,Z===null)throw Error(l(341));Z.lanes|=i,z=Z.alternate,z!==null&&(z.lanes|=i),fc(Z,i,n),Z=g.sibling}else Z=g.child;if(Z!==null)Z.return=g;else for(Z=g;Z!==null;){if(Z===n){Z=null;break}if(g=Z.sibling,g!==null){g.return=Z.return,Z=g;break}Z=Z.return}g=Z}Xn(e,n,d.children,i),n=n.child}return n;case 9:return d=n.type,u=n.pendingProps.children,ca(n,i),d=Br(d),u=u(d),n.flags|=1,Xn(e,n,u,i),n.child;case 14:return u=n.type,d=hi(u,n.pendingProps),d=hi(u.type,d),up(e,n,u,d,i);case 15:return cp(e,n,n.type,n.pendingProps,i);case 17:return u=n.type,d=n.pendingProps,d=n.elementType===u?d:hi(u,d),Ks(e,n),n.tag=1,nr(u)?(e=!0,Ps(n)):e=!1,ca(n,i),tp(n,u,d),Pc(n,u,d,i),Rc(null,n,u,!0,e,i);case 19:return vp(e,n,i);case 22:return pp(e,n,i)}throw Error(l(156,n.tag))};function Wp(e,n){return ri(e,n)}function fh(e,n,i,u){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vr(e,n,i,u){return new fh(e,n,i,u)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mh(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===Ne)return 14}return 2}function Jo(e,n){var i=e.alternate;return i===null?(i=Vr(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function iu(e,n,i,u,d,g){var Z=2;if(u=e,typeof e=="function")Jc(e)&&(Z=1);else if(typeof e=="string")Z=5;else e:switch(e){case de:return Pl(i.children,d,g,n);case Pe:Z=8,d|=8;break;case We:return e=Vr(12,i,n,d|2),e.elementType=We,e.lanes=g,e;case Xe:return e=Vr(13,i,n,d),e.elementType=Xe,e.lanes=g,e;case je:return e=Vr(19,i,n,d),e.elementType=je,e.lanes=g,e;case be:return ou(i,d,g,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:Z=10;break e;case Ie:Z=9;break e;case _e:Z=11;break e;case Ne:Z=14;break e;case Se:Z=16,u=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Vr(Z,i,n,d),n.elementType=e,n.type=u,n.lanes=g,n}function Pl(e,n,i,u){return e=Vr(7,e,u,n),e.lanes=i,e}function ou(e,n,i,u){return e=Vr(22,e,u,n),e.elementType=be,e.lanes=i,e.stateNode={isHidden:!1},e}function e1(e,n,i){return e=Vr(6,e,null,n),e.lanes=i,e}function t1(e,n,i){return n=Vr(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function hh(e,n,i,u,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=J(0),this.expirationTimes=J(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=J(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function n1(e,n,i,u,d,g,Z,z,H){return e=new hh(e,n,i,z,H),n===1?(n=1,g===!0&&(n|=8)):n=0,g=Vr(3,null,null,n),e.current=g,g.stateNode=e,g.memoizedState={element:u,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(g),e}function gh(e,n,i){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:u==null?null:""+u,children:e,containerInfo:n,implementation:i}}function Hp(e){if(!e)return Vo;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(nr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var i=e.type;if(nr(i))return k0(e,i,n)}return n}function Vp(e,n,i,u,d,g,Z,z,H){return e=n1(i,u,!0,e,d,g,Z,z,H),e.context=Hp(null),i=e.current,u=qn(),d=Yo(i),g=go(u,d),g.callback=n??null,Ko(i,g,d),e.current.lanes=d,$(e,d,u),or(e,u),e}function lu(e,n,i,u){var d=n.current,g=qn(),Z=Yo(d);return i=Hp(i),n.context===null?n.context=i:n.pendingContext=i,n=go(g,Z),n.payload={element:e},u=u===void 0?null:u,u!==null&&(n.callback=u),e=Ko(d,n,Z),e!==null&&(vi(e,d,Z,g),Ds(e,d,Z)),Z}function au(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function r1(e,n){Gp(e,n),(e=e.alternate)&&Gp(e,n)}function kh(){return null}var Up=typeof reportError=="function"?reportError:function(e){console.error(e)};function i1(e){this._internalRoot=e}su.prototype.render=i1.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));lu(e,n,null,null)},su.prototype.unmount=i1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bl(function(){lu(null,e,null,null)}),n[wt]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Ft.length&&n!==0&&n<Ft[i].priority;i++);Ft.splice(i,0,e),i===0&&Pn(e)}};function o1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function vh(e,n,i,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var ae=au(Z);g.call(ae)}}var Z=Vp(n,u,e,0,null,!1,!1,"",Kp);return e._reactRootContainer=Z,e[wt]=Z.current,jo(e.nodeType===8?e.parentNode:e),bl(),Z}for(;d=e.lastChild;)e.removeChild(d);if(typeof u=="function"){var z=u;u=function(){var ae=au(H);z.call(ae)}}var H=n1(e,0,!1,null,null,!1,!1,"",Kp);return e._reactRootContainer=H,e[wt]=H.current,jo(e.nodeType===8?e.parentNode:e),bl(function(){lu(n,H,i,u)}),H}function cu(e,n,i,u,d){var g=i._reactRootContainer;if(g){var Z=g;if(typeof d=="function"){var z=d;d=function(){var H=au(Z);z.call(H)}}lu(n,Z,e,d)}else Z=vh(i,n,e,d,u);return au(Z)}ot=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=rt(n.pendingLanes);i!==0&&(xe(n,i|1),or(n,St()),(vt&6)===0&&(ha=St()+500,Go()))}break;case 13:bl(function(){var u=ho(e,1);if(u!==null){var d=qn();vi(u,e,1,d)}}),r1(e,1)}},gt=function(e){if(e.tag===13){var n=ho(e,134217728);if(n!==null){var i=qn();vi(n,e,134217728,i)}r1(e,134217728)}},rn=function(e){if(e.tag===13){var n=Yo(e),i=ho(e,n);if(i!==null){var u=qn();vi(i,e,n,u)}r1(e,n)}},on=function(){return Ce},jt=function(e,n){var i=Ce;try{return Ce=e,n()}finally{Ce=i}},Sr=function(e,n,i){switch(n){case"input":if(Sn(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var u=i[n];if(u!==e&&u.form===e.form){var d=na(u);if(!d)throw Error(l(90));Ue(u),Sn(u,d)}}}break;case"textarea":Ki(e,i);break;case"select":n=i.value,n!=null&&Fn(e,!!i.multiple,n,!1)}},Bn=qc,qr=bl;var yh={usingClientEntryPoint:!1,Events:[uo,co,na,Xr,br,qc]},Ja={findFiberByHostInstance:so,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_h={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ni(e),e===null?null:e.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Cn=pu.inject(_h),tn=pu}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh,lr.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!o1(n))throw Error(l(200));return gh(e,n,null,i)},lr.createRoot=function(e,n){if(!o1(e))throw Error(l(299));var i=!1,u="",d=Up;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=n1(e,1,!1,null,null,i,!1,u,d),e[wt]=n.current,jo(e.nodeType===8?e.parentNode:e),new i1(n)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=ni(n),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return bl(e)},lr.hydrate=function(e,n,i){if(!uu(n))throw Error(l(200));return cu(null,e,n,!0,i)},lr.hydrateRoot=function(e,n,i){if(!o1(e))throw Error(l(405));var u=i!=null&&i.hydratedSources||null,d=!1,g="",Z=Up;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(g=i.identifierPrefix),i.onRecoverableError!==void 0&&(Z=i.onRecoverableError)),n=Vp(n,null,e,1,i??null,d,!1,g,Z),e[wt]=n.current,jo(e),u)for(e=0;e<u.length;e++)i=u[e],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new su(n)},lr.render=function(e,n,i){if(!uu(n))throw Error(l(200));return cu(null,e,n,!1,i)},lr.unmountComponentAtNode=function(e){if(!uu(e))throw Error(l(40));return e._reactRootContainer?(bl(function(){cu(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},lr.unstable_batchedUpdates=qc,lr.unstable_renderSubtreeIntoContainer=function(e,n,i,u){if(!uu(i))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return cu(e,n,i,!1,u)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var td;function Qd(){if(td)return s1.exports;td=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),s1.exports=Eh(),s1.exports}var nd;function Ph(){if(nd)return du;nd=1;var o=Qd();return du.createRoot=o.createRoot,du.hydrateRoot=o.hydrateRoot,du}var Mh=Ph();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jd=(...o)=>o.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=P.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:f="",children:k,iconNode:y,...x},S)=>P.createElement("svg",{ref:S,...Nh,width:a,height:a,stroke:o,strokeWidth:c?Number(l)*24/Number(a):l,className:Jd("lucide",f),...x},[...y.map(([b,R])=>P.createElement(b,R)),...Array.isArray(k)?k:[k]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=(o,a)=>{const l=P.forwardRef(({className:c,...f},k)=>P.createElement(Rh,{ref:k,iconNode:a,className:Jd(`lucide-${Lh(o)}`,c),...f}));return l.displayName=`${o}`,l};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Lt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=Lt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=Lt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=Lt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=Lt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Lt("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Lt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Lt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=Lt("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=Lt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=Lt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=Lt("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=Lt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=Lt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=Lt("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=Lt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=Lt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=Lt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=Lt("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=Lt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=Lt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=Lt("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=Lt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=Lt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=Lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function e2(o){var a,l,c="";if(typeof o=="string"||typeof o=="number")c+=o;else if(typeof o=="object")if(Array.isArray(o)){var f=o.length;for(a=0;a<f;a++)o[a]&&(l=e2(o[a]))&&(c&&(c+=" "),c+=l)}else for(l in o)o[l]&&(c&&(c+=" "),c+=l);return c}function t2(){for(var o,a,l=0,c="",f=arguments.length;l<f;l++)(o=arguments[l])&&(a=e2(o))&&(c&&(c+=" "),c+=a);return c}const sd=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,ud=t2,qh=(o,a)=>l=>{var c;if((a==null?void 0:a.variants)==null)return ud(o,l==null?void 0:l.class,l==null?void 0:l.className);const{variants:f,defaultVariants:k}=a,y=Object.keys(f).map(b=>{const R=l==null?void 0:l[b],E=k==null?void 0:k[b];if(R===null)return null;const A=sd(R)||sd(E);return f[b][A]}),x=l&&Object.entries(l).reduce((b,R)=>{let[E,A]=R;return A===void 0||(b[E]=A),b},{}),S=a==null||(c=a.compoundVariants)===null||c===void 0?void 0:c.reduce((b,R)=>{let{class:E,className:A,...W}=R;return Object.entries(W).every(V=>{let[D,F]=V;return Array.isArray(F)?F.includes({...k,...x}[D]):{...k,...x}[D]===F})?[...b,E,A]:b},[]);return ud(o,y,S,l==null?void 0:l.class,l==null?void 0:l.className)},B1="-",Yh=o=>{const a=Jh(o),{conflictingClassGroups:l,conflictingClassGroupModifiers:c}=o;return{getClassGroupId:y=>{const x=y.split(B1);return x[0]===""&&x.length!==1&&x.shift(),n2(x,a)||Qh(y)},getConflictingClassGroupIds:(y,x)=>{const S=l[y]||[];return x&&c[y]?[...S,...c[y]]:S}}},n2=(o,a)=>{var y;if(o.length===0)return a.classGroupId;const l=o[0],c=a.nextPart.get(l),f=c?n2(o.slice(1),c):void 0;if(f)return f;if(a.validators.length===0)return;const k=o.join(B1);return(y=a.validators.find(({validator:x})=>x(k)))==null?void 0:y.classGroupId},cd=/^\[(.+)\]$/,Qh=o=>{if(cd.test(o)){const a=cd.exec(o)[1],l=a==null?void 0:a.substring(0,a.indexOf(":"));if(l)return"arbitrary.."+l}},Jh=o=>{const{theme:a,prefix:l}=o,c={nextPart:new Map,validators:[]};return t3(Object.entries(o.classGroups),l).forEach(([k,y])=>{M1(y,c,k,a)}),c},M1=(o,a,l,c)=>{o.forEach(f=>{if(typeof f=="string"){const k=f===""?a:pd(a,f);k.classGroupId=l;return}if(typeof f=="function"){if(e3(f)){M1(f(c),a,l,c);return}a.validators.push({validator:f,classGroupId:l});return}Object.entries(f).forEach(([k,y])=>{M1(y,pd(a,k),l,c)})})},pd=(o,a)=>{let l=o;return a.split(B1).forEach(c=>{l.nextPart.has(c)||l.nextPart.set(c,{nextPart:new Map,validators:[]}),l=l.nextPart.get(c)}),l},e3=o=>o.isThemeGetter,t3=(o,a)=>a?o.map(([l,c])=>{const f=c.map(k=>typeof k=="string"?a+k:typeof k=="object"?Object.fromEntries(Object.entries(k).map(([y,x])=>[a+y,x])):k);return[l,f]}):o,n3=o=>{if(o<1)return{get:()=>{},set:()=>{}};let a=0,l=new Map,c=new Map;const f=(k,y)=>{l.set(k,y),a++,a>o&&(a=0,c=l,l=new Map)};return{get(k){let y=l.get(k);if(y!==void 0)return y;if((y=c.get(k))!==void 0)return f(k,y),y},set(k,y){l.has(k)?l.set(k,y):f(k,y)}}},r2="!",r3=o=>{const{separator:a,experimentalParseClassName:l}=o,c=a.length===1,f=a[0],k=a.length,y=x=>{const S=[];let b=0,R=0,E;for(let F=0;F<x.length;F++){let K=x[F];if(b===0){if(K===f&&(c||x.slice(F,F+k)===a)){S.push(x.slice(R,F)),R=F+k;continue}if(K==="/"){E=F;continue}}K==="["?b++:K==="]"&&b--}const A=S.length===0?x:x.substring(R),W=A.startsWith(r2),V=W?A.substring(1):A,D=E&&E>R?E-R:void 0;return{modifiers:S,hasImportantModifier:W,baseClassName:V,maybePostfixModifierPosition:D}};return l?x=>l({className:x,parseClassName:y}):y},i3=o=>{if(o.length<=1)return o;const a=[];let l=[];return o.forEach(c=>{c[0]==="["?(a.push(...l.sort(),c),l=[]):l.push(c)}),a.push(...l.sort()),a},o3=o=>({cache:n3(o.cacheSize),parseClassName:r3(o),...Yh(o)}),l3=/\s+/,a3=(o,a)=>{const{parseClassName:l,getClassGroupId:c,getConflictingClassGroupIds:f}=a,k=[],y=o.trim().split(l3);let x="";for(let S=y.length-1;S>=0;S-=1){const b=y[S],{modifiers:R,hasImportantModifier:E,baseClassName:A,maybePostfixModifierPosition:W}=l(b);let V=!!W,D=c(V?A.substring(0,W):A);if(!D){if(!V){x=b+(x.length>0?" "+x:x);continue}if(D=c(A),!D){x=b+(x.length>0?" "+x:x);continue}V=!1}const F=i3(R).join(":"),K=E?F+r2:F,q=K+D;if(k.includes(q))continue;k.push(q);const ee=f(D,V);for(let ce=0;ce<ee.length;++ce){const fe=ee[ce];k.push(K+fe)}x=b+(x.length>0?" "+x:x)}return x};function s3(){let o=0,a,l,c="";for(;o<arguments.length;)(a=arguments[o++])&&(l=i2(a))&&(c&&(c+=" "),c+=l);return c}const i2=o=>{if(typeof o=="string")return o;let a,l="";for(let c=0;c<o.length;c++)o[c]&&(a=i2(o[c]))&&(l&&(l+=" "),l+=a);return l};function u3(o,...a){let l,c,f,k=y;function y(S){const b=a.reduce((R,E)=>E(R),o());return l=o3(b),c=l.cache.get,f=l.cache.set,k=x,x(S)}function x(S){const b=c(S);if(b)return b;const R=a3(S,l);return f(S,R),R}return function(){return k(s3.apply(null,arguments))}}const Mt=o=>{const a=l=>l[o]||[];return a.isThemeGetter=!0,a},o2=/^\[(?:([a-z-]+):)?(.+)\]$/i,c3=/^\d+\/\d+$/,p3=new Set(["px","full","screen"]),d3=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f3=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,m3=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,h3=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,g3=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,yo=o=>xa(o)||p3.has(o)||c3.test(o),tl=o=>Za(o,"length",S3),xa=o=>!!o&&!Number.isNaN(Number(o)),m1=o=>Za(o,"number",xa),ts=o=>!!o&&Number.isInteger(Number(o)),k3=o=>o.endsWith("%")&&xa(o.slice(0,-1)),pt=o=>o2.test(o),nl=o=>d3.test(o),v3=new Set(["length","size","percentage"]),y3=o=>Za(o,v3,l2),_3=o=>Za(o,"position",l2),x3=new Set(["image","url"]),T3=o=>Za(o,x3,b3),w3=o=>Za(o,"",Z3),ns=()=>!0,Za=(o,a,l)=>{const c=o2.exec(o);return c?c[1]?typeof a=="string"?c[1]===a:a.has(c[1]):l(c[2]):!1},S3=o=>f3.test(o)&&!m3.test(o),l2=()=>!1,Z3=o=>h3.test(o),b3=o=>g3.test(o),C3=()=>{const o=Mt("colors"),a=Mt("spacing"),l=Mt("blur"),c=Mt("brightness"),f=Mt("borderColor"),k=Mt("borderRadius"),y=Mt("borderSpacing"),x=Mt("borderWidth"),S=Mt("contrast"),b=Mt("grayscale"),R=Mt("hueRotate"),E=Mt("invert"),A=Mt("gap"),W=Mt("gradientColorStops"),V=Mt("gradientColorStopPositions"),D=Mt("inset"),F=Mt("margin"),K=Mt("opacity"),q=Mt("padding"),ee=Mt("saturate"),ce=Mt("scale"),fe=Mt("sepia"),he=Mt("skew"),de=Mt("space"),Pe=Mt("translate"),We=()=>["auto","contain","none"],Le=()=>["auto","hidden","clip","visible","scroll"],Ie=()=>["auto",pt,a],_e=()=>[pt,a],Xe=()=>["",yo,tl],je=()=>["auto",xa,pt],Ne=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Se=()=>["solid","dashed","dotted","double","none"],be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],ue=()=>["","0",pt],ie=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[xa,pt];return{cacheSize:500,separator:":",theme:{colors:[ns],spacing:[yo,tl],blur:["none","",nl,pt],brightness:j(),borderColor:[o],borderRadius:["none","","full",nl,pt],borderSpacing:_e(),borderWidth:Xe(),contrast:j(),grayscale:ue(),hueRotate:j(),invert:ue(),gap:_e(),gradientColorStops:[o],gradientColorStopPositions:[k3,tl],inset:Ie(),margin:Ie(),opacity:j(),padding:_e(),saturate:j(),scale:j(),sepia:ue(),skew:j(),space:_e(),translate:_e()},classGroups:{aspect:[{aspect:["auto","square","video",pt]}],container:["container"],columns:[{columns:[nl]}],"break-after":[{"break-after":ie()}],"break-before":[{"break-before":ie()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ne(),pt]}],overflow:[{overflow:Le()}],"overflow-x":[{"overflow-x":Le()}],"overflow-y":[{"overflow-y":Le()}],overscroll:[{overscroll:We()}],"overscroll-x":[{"overscroll-x":We()}],"overscroll-y":[{"overscroll-y":We()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[D]}],"inset-x":[{"inset-x":[D]}],"inset-y":[{"inset-y":[D]}],start:[{start:[D]}],end:[{end:[D]}],top:[{top:[D]}],right:[{right:[D]}],bottom:[{bottom:[D]}],left:[{left:[D]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ts,pt]}],basis:[{basis:Ie()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",pt]}],grow:[{grow:ue()}],shrink:[{shrink:ue()}],order:[{order:["first","last","none",ts,pt]}],"grid-cols":[{"grid-cols":[ns]}],"col-start-end":[{col:["auto",{span:["full",ts,pt]},pt]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[ns]}],"row-start-end":[{row:["auto",{span:[ts,pt]},pt]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",pt]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",pt]}],gap:[{gap:[A]}],"gap-x":[{"gap-x":[A]}],"gap-y":[{"gap-y":[A]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[q]}],px:[{px:[q]}],py:[{py:[q]}],ps:[{ps:[q]}],pe:[{pe:[q]}],pt:[{pt:[q]}],pr:[{pr:[q]}],pb:[{pb:[q]}],pl:[{pl:[q]}],m:[{m:[F]}],mx:[{mx:[F]}],my:[{my:[F]}],ms:[{ms:[F]}],me:[{me:[F]}],mt:[{mt:[F]}],mr:[{mr:[F]}],mb:[{mb:[F]}],ml:[{ml:[F]}],"space-x":[{"space-x":[de]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[de]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",pt,a]}],"min-w":[{"min-w":[pt,a,"min","max","fit"]}],"max-w":[{"max-w":[pt,a,"none","full","min","max","fit","prose",{screen:[nl]},nl]}],h:[{h:[pt,a,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[pt,a,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[pt,a,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[pt,a,"auto","min","max","fit"]}],"font-size":[{text:["base",nl,tl]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",m1]}],"font-family":[{font:[ns]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",pt]}],"line-clamp":[{"line-clamp":["none",xa,m1]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",yo,pt]}],"list-image":[{"list-image":["none",pt]}],"list-style-type":[{list:["none","disc","decimal",pt]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[o]}],"placeholder-opacity":[{"placeholder-opacity":[K]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[o]}],"text-opacity":[{"text-opacity":[K]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Se(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",yo,tl]}],"underline-offset":[{"underline-offset":["auto",yo,pt]}],"text-decoration-color":[{decoration:[o]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_e()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",pt]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",pt]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[K]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ne(),_3]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",y3]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},T3]}],"bg-color":[{bg:[o]}],"gradient-from-pos":[{from:[V]}],"gradient-via-pos":[{via:[V]}],"gradient-to-pos":[{to:[V]}],"gradient-from":[{from:[W]}],"gradient-via":[{via:[W]}],"gradient-to":[{to:[W]}],rounded:[{rounded:[k]}],"rounded-s":[{"rounded-s":[k]}],"rounded-e":[{"rounded-e":[k]}],"rounded-t":[{"rounded-t":[k]}],"rounded-r":[{"rounded-r":[k]}],"rounded-b":[{"rounded-b":[k]}],"rounded-l":[{"rounded-l":[k]}],"rounded-ss":[{"rounded-ss":[k]}],"rounded-se":[{"rounded-se":[k]}],"rounded-ee":[{"rounded-ee":[k]}],"rounded-es":[{"rounded-es":[k]}],"rounded-tl":[{"rounded-tl":[k]}],"rounded-tr":[{"rounded-tr":[k]}],"rounded-br":[{"rounded-br":[k]}],"rounded-bl":[{"rounded-bl":[k]}],"border-w":[{border:[x]}],"border-w-x":[{"border-x":[x]}],"border-w-y":[{"border-y":[x]}],"border-w-s":[{"border-s":[x]}],"border-w-e":[{"border-e":[x]}],"border-w-t":[{"border-t":[x]}],"border-w-r":[{"border-r":[x]}],"border-w-b":[{"border-b":[x]}],"border-w-l":[{"border-l":[x]}],"border-opacity":[{"border-opacity":[K]}],"border-style":[{border:[...Se(),"hidden"]}],"divide-x":[{"divide-x":[x]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[x]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[K]}],"divide-style":[{divide:Se()}],"border-color":[{border:[f]}],"border-color-x":[{"border-x":[f]}],"border-color-y":[{"border-y":[f]}],"border-color-s":[{"border-s":[f]}],"border-color-e":[{"border-e":[f]}],"border-color-t":[{"border-t":[f]}],"border-color-r":[{"border-r":[f]}],"border-color-b":[{"border-b":[f]}],"border-color-l":[{"border-l":[f]}],"divide-color":[{divide:[f]}],"outline-style":[{outline:["",...Se()]}],"outline-offset":[{"outline-offset":[yo,pt]}],"outline-w":[{outline:[yo,tl]}],"outline-color":[{outline:[o]}],"ring-w":[{ring:Xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[o]}],"ring-opacity":[{"ring-opacity":[K]}],"ring-offset-w":[{"ring-offset":[yo,tl]}],"ring-offset-color":[{"ring-offset":[o]}],shadow:[{shadow:["","inner","none",nl,w3]}],"shadow-color":[{shadow:[ns]}],opacity:[{opacity:[K]}],"mix-blend":[{"mix-blend":[...be(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":be()}],filter:[{filter:["","none"]}],blur:[{blur:[l]}],brightness:[{brightness:[c]}],contrast:[{contrast:[S]}],"drop-shadow":[{"drop-shadow":["","none",nl,pt]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[R]}],invert:[{invert:[E]}],saturate:[{saturate:[ee]}],sepia:[{sepia:[fe]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[l]}],"backdrop-brightness":[{"backdrop-brightness":[c]}],"backdrop-contrast":[{"backdrop-contrast":[S]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[R]}],"backdrop-invert":[{"backdrop-invert":[E]}],"backdrop-opacity":[{"backdrop-opacity":[K]}],"backdrop-saturate":[{"backdrop-saturate":[ee]}],"backdrop-sepia":[{"backdrop-sepia":[fe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[y]}],"border-spacing-x":[{"border-spacing-x":[y]}],"border-spacing-y":[{"border-spacing-y":[y]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",pt]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",pt]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",pt]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ce]}],"scale-x":[{"scale-x":[ce]}],"scale-y":[{"scale-y":[ce]}],rotate:[{rotate:[ts,pt]}],"translate-x":[{"translate-x":[Pe]}],"translate-y":[{"translate-y":[Pe]}],"skew-x":[{"skew-x":[he]}],"skew-y":[{"skew-y":[he]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",pt]}],accent:[{accent:["auto",o]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",pt]}],"caret-color":[{caret:[o]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_e()}],"scroll-mx":[{"scroll-mx":_e()}],"scroll-my":[{"scroll-my":_e()}],"scroll-ms":[{"scroll-ms":_e()}],"scroll-me":[{"scroll-me":_e()}],"scroll-mt":[{"scroll-mt":_e()}],"scroll-mr":[{"scroll-mr":_e()}],"scroll-mb":[{"scroll-mb":_e()}],"scroll-ml":[{"scroll-ml":_e()}],"scroll-p":[{"scroll-p":_e()}],"scroll-px":[{"scroll-px":_e()}],"scroll-py":[{"scroll-py":_e()}],"scroll-ps":[{"scroll-ps":_e()}],"scroll-pe":[{"scroll-pe":_e()}],"scroll-pt":[{"scroll-pt":_e()}],"scroll-pr":[{"scroll-pr":_e()}],"scroll-pb":[{"scroll-pb":_e()}],"scroll-pl":[{"scroll-pl":_e()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",pt]}],fill:[{fill:[o,"none"]}],"stroke-w":[{stroke:[yo,tl,m1]}],stroke:[{stroke:[o,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},E3=u3(C3);function Ct(...o){return E3(t2(o))}const P3=qh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-12 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Gr=P.forwardRef(({className:o,variant:a,size:l,...c},f)=>_.jsx("button",{className:Ct(P3({variant:a,size:l,className:o})),ref:f,...c}));Gr.displayName="Button";const Ll=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("rounded-xl border bg-card text-card-foreground shadow",o),...a}));Ll.displayName="Card";const Nl=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("flex flex-col space-y-1.5 p-6",o),...a}));Nl.displayName="CardHeader";const Rl=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("font-semibold leading-none tracking-tight",o),...a}));Rl.displayName="CardTitle";const Tu=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("text-sm text-muted-foreground",o),...a}));Tu.displayName="CardDescription";const Il=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("p-6 pt-0",o),...a}));Il.displayName="CardContent";const M3=P.forwardRef(({className:o,...a},l)=>_.jsx("div",{ref:l,className:Ct("flex items-center p-6 pt-0",o),...a}));M3.displayName="CardFooter";const os=P.forwardRef(({className:o,...a},l)=>_.jsx("label",{ref:l,className:Ct("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",o),...a}));os.displayName="Label";const a2=P.forwardRef(({className:o,show:a,children:l,...c},f)=>_.jsx("div",{ref:f,className:Ct("fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium transition-opacity duration-300",a?"opacity-100":"opacity-0 pointer-events-none",o),...c,children:l}));a2.displayName="Toast";function bu({min:o=0,max:a=100,step:l=1,value:c=0,onValueChange:f,className:k,id:y}){const[x,S]=P.useState(!1),b=P.useRef(null),R=(c-o)/(a-o)*100,E=K=>{if(!b.current)return;const q=b.current.getBoundingClientRect(),ee=K-q.left,ce=Math.max(0,Math.min(1,ee/q.width)),fe=o+ce*(a-o),he=Math.round(fe/l)*l,de=Math.max(o,Math.min(a,he));f&&de!==c&&f(de)},A=K=>{S(!0),E(K.clientX)},W=K=>{S(!0),K.touches.length>0&&E(K.touches[0].clientX)},V=K=>{x&&E(K.clientX)},D=K=>{x&&K.touches.length>0&&E(K.touches[0].clientX)},F=()=>{S(!1)};return P.useEffect(()=>{if(x)return document.addEventListener("mousemove",V),document.addEventListener("mouseup",F),document.addEventListener("touchmove",D),document.addEventListener("touchend",F),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",F),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",F)}},[x,o,a,l,c,f]),_.jsx("div",{id:y,className:Ct("relative w-full",k),style:{touchAction:"none"},children:_.jsxs("div",{ref:b,className:"relative h-3 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer",onMouseDown:A,onTouchStart:W,children:[_.jsx("div",{className:"absolute h-full bg-primary rounded-lg transition-all",style:{width:`${R}%`}}),_.jsxs("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2",style:{left:`${R}%`},children:[_.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-8 md:h-8",style:{cursor:x?"grabbing":"grab"}}),_.jsx("div",{className:Ct("bg-primary rounded-full p-1.5 md:p-1 border-2 border-white shadow-lg transition-transform",x&&"scale-110"),children:_.jsx(Kh,{className:"w-5 h-5 md:w-3 md:h-3 text-white"})})]})]})})}function ct(o,a,{checkForDefaultPrevented:l=!0}={}){return function(f){if(o==null||o(f),l===!1||!f.defaultPrevented)return a==null?void 0:a(f)}}function L3(o,a){const l=P.createContext(a),c=k=>{const{children:y,...x}=k,S=P.useMemo(()=>x,Object.values(x));return _.jsx(l.Provider,{value:S,children:y})};c.displayName=o+"Provider";function f(k){const y=P.useContext(l);if(y)return y;if(a!==void 0)return a;throw new Error(`\`${k}\` must be used within \`${o}\``)}return[c,f]}function Fl(o,a=[]){let l=[];function c(k,y){const x=P.createContext(y),S=l.length;l=[...l,y];const b=E=>{var K;const{scope:A,children:W,...V}=E,D=((K=A==null?void 0:A[o])==null?void 0:K[S])||x,F=P.useMemo(()=>V,Object.values(V));return _.jsx(D.Provider,{value:F,children:W})};b.displayName=k+"Provider";function R(E,A){var D;const W=((D=A==null?void 0:A[o])==null?void 0:D[S])||x,V=P.useContext(W);if(V)return V;if(y!==void 0)return y;throw new Error(`\`${E}\` must be used within \`${k}\``)}return[b,R]}const f=()=>{const k=l.map(y=>P.createContext(y));return function(x){const S=(x==null?void 0:x[o])||k;return P.useMemo(()=>({[`__scope${o}`]:{...x,[o]:S}}),[x,S])}};return f.scopeName=o,[c,N3(f,...a)]}function N3(...o){const a=o[0];if(o.length===1)return a;const l=()=>{const c=o.map(f=>({useScope:f(),scopeName:f.scopeName}));return function(k){const y=c.reduce((x,{useScope:S,scopeName:b})=>{const E=S(k)[`__scope${b}`];return{...x,...E}},{});return P.useMemo(()=>({[`__scope${a.scopeName}`]:y}),[y])}};return l.scopeName=a.scopeName,l}function dd(o,a){if(typeof o=="function")return o(a);o!=null&&(o.current=a)}function Iu(...o){return a=>{let l=!1;const c=o.map(f=>{const k=dd(f,a);return!l&&typeof k=="function"&&(l=!0),k});if(l)return()=>{for(let f=0;f<c.length;f++){const k=c[f];typeof k=="function"?k():dd(o[f],null)}}}}function Tn(...o){return P.useCallback(Iu(...o),o)}function ls(o){const a=R3(o),l=P.forwardRef((c,f)=>{const{children:k,...y}=c,x=P.Children.toArray(k),S=x.find(O3);if(S){const b=S.props.children,R=x.map(E=>E===S?P.Children.count(b)>1?P.Children.only(null):P.isValidElement(b)?b.props.children:null:E);return _.jsx(a,{...y,ref:f,children:P.isValidElement(b)?P.cloneElement(b,void 0,R):null})}return _.jsx(a,{...y,ref:f,children:k})});return l.displayName=`${o}.Slot`,l}function R3(o){const a=P.forwardRef((l,c)=>{const{children:f,...k}=l;if(P.isValidElement(f)){const y=D3(f),x=A3(k,f.props);return f.type!==P.Fragment&&(x.ref=c?Iu(c,y):y),P.cloneElement(f,x)}return P.Children.count(f)>1?P.Children.only(null):null});return a.displayName=`${o}.SlotClone`,a}var I3=Symbol("radix.slottable");function O3(o){return P.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===I3}function A3(o,a){const l={...a};for(const c in a){const f=o[c],k=a[c];/^on[A-Z]/.test(c)?f&&k?l[c]=(...x)=>{const S=k(...x);return f(...x),S}:f&&(l[c]=f):c==="style"?l[c]={...f,...k}:c==="className"&&(l[c]=[f,k].filter(Boolean).join(" "))}return{...o,...l}}function D3(o){var c,f;let a=(c=Object.getOwnPropertyDescriptor(o.props,"ref"))==null?void 0:c.get,l=a&&"isReactWarning"in a&&a.isReactWarning;return l?o.ref:(a=(f=Object.getOwnPropertyDescriptor(o,"ref"))==null?void 0:f.get,l=a&&"isReactWarning"in a&&a.isReactWarning,l?o.props.ref:o.props.ref||o.ref)}function s2(o){const a=o+"CollectionProvider",[l,c]=Fl(a),[f,k]=l(a,{collectionRef:{current:null},itemMap:new Map}),y=D=>{const{scope:F,children:K}=D,q=yi.useRef(null),ee=yi.useRef(new Map).current;return _.jsx(f,{scope:F,itemMap:ee,collectionRef:q,children:K})};y.displayName=a;const x=o+"CollectionSlot",S=ls(x),b=yi.forwardRef((D,F)=>{const{scope:K,children:q}=D,ee=k(x,K),ce=Tn(F,ee.collectionRef);return _.jsx(S,{ref:ce,children:q})});b.displayName=x;const R=o+"CollectionItemSlot",E="data-radix-collection-item",A=ls(R),W=yi.forwardRef((D,F)=>{const{scope:K,children:q,...ee}=D,ce=yi.useRef(null),fe=Tn(F,ce),he=k(R,K);return yi.useEffect(()=>(he.itemMap.set(ce,{ref:ce,...ee}),()=>void he.itemMap.delete(ce))),_.jsx(A,{[E]:"",ref:fe,children:q})});W.displayName=R;function V(D){const F=k(o+"CollectionConsumer",D);return yi.useCallback(()=>{const q=F.collectionRef.current;if(!q)return[];const ee=Array.from(q.querySelectorAll(`[${E}]`));return Array.from(F.itemMap.values()).sort((he,de)=>ee.indexOf(he.ref.current)-ee.indexOf(de.ref.current))},[F.collectionRef,F.itemMap])}return[{Provider:y,Slot:b,ItemSlot:W},V,c]}var ol=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{},z3=Yd[" useId ".trim().toString()]||(()=>{}),j3=0;function Ol(o){const[a,l]=P.useState(z3());return ol(()=>{l(c=>c??String(j3++))},[o]),a?`radix-${a}`:""}var Ou=Qd();const F3=qd(Ou);var B3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Rt=B3.reduce((o,a)=>{const l=ls(`Primitive.${a}`),c=P.forwardRef((f,k)=>{const{asChild:y,...x}=f,S=y?l:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),_.jsx(S,{...x,ref:k})});return c.displayName=`Primitive.${a}`,{...o,[a]:c}},{});function u2(o,a){o&&Ou.flushSync(()=>o.dispatchEvent(a))}function _o(o){const a=P.useRef(o);return P.useEffect(()=>{a.current=o}),P.useMemo(()=>(...l)=>{var c;return(c=a.current)==null?void 0:c.call(a,...l)},[])}var W3=Yd[" useInsertionEffect ".trim().toString()]||ol;function Au({prop:o,defaultProp:a,onChange:l=()=>{},caller:c}){const[f,k,y]=H3({defaultProp:a,onChange:l}),x=o!==void 0,S=x?o:f;{const R=P.useRef(o!==void 0);P.useEffect(()=>{const E=R.current;E!==x&&console.warn(`${c} is changing from ${E?"controlled":"uncontrolled"} to ${x?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),R.current=x},[x,c])}const b=P.useCallback(R=>{var E;if(x){const A=V3(R)?R(o):R;A!==o&&((E=y.current)==null||E.call(y,A))}else k(R)},[x,o,k,y]);return[S,b]}function H3({defaultProp:o,onChange:a}){const[l,c]=P.useState(o),f=P.useRef(l),k=P.useRef(a);return W3(()=>{k.current=a},[a]),P.useEffect(()=>{var y;f.current!==l&&((y=k.current)==null||y.call(k,l),f.current=l)},[l,f]),[l,c,k]}function V3(o){return typeof o=="function"}var G3=P.createContext(void 0);function W1(o){const a=P.useContext(G3);return o||a||"ltr"}var h1="rovingFocusGroup.onEntryFocus",U3={bubbles:!1,cancelable:!0},ds="RovingFocusGroup",[L1,c2,K3]=s2(ds),[$3,Du]=Fl(ds,[K3]),[X3,q3]=$3(ds),p2=P.forwardRef((o,a)=>_.jsx(L1.Provider,{scope:o.__scopeRovingFocusGroup,children:_.jsx(L1.Slot,{scope:o.__scopeRovingFocusGroup,children:_.jsx(Y3,{...o,ref:a})})}));p2.displayName=ds;var Y3=P.forwardRef((o,a)=>{const{__scopeRovingFocusGroup:l,orientation:c,loop:f=!1,dir:k,currentTabStopId:y,defaultCurrentTabStopId:x,onCurrentTabStopIdChange:S,onEntryFocus:b,preventScrollOnEntryFocus:R=!1,...E}=o,A=P.useRef(null),W=Tn(a,A),V=W1(k),[D,F]=Au({prop:y,defaultProp:x??null,onChange:S,caller:ds}),[K,q]=P.useState(!1),ee=_o(b),ce=c2(l),fe=P.useRef(!1),[he,de]=P.useState(0);return P.useEffect(()=>{const Pe=A.current;if(Pe)return Pe.addEventListener(h1,ee),()=>Pe.removeEventListener(h1,ee)},[ee]),_.jsx(X3,{scope:l,orientation:c,dir:V,loop:f,currentTabStopId:D,onItemFocus:P.useCallback(Pe=>F(Pe),[F]),onItemShiftTab:P.useCallback(()=>q(!0),[]),onFocusableItemAdd:P.useCallback(()=>de(Pe=>Pe+1),[]),onFocusableItemRemove:P.useCallback(()=>de(Pe=>Pe-1),[]),children:_.jsx(Rt.div,{tabIndex:K||he===0?-1:0,"data-orientation":c,...E,ref:W,style:{outline:"none",...o.style},onMouseDown:ct(o.onMouseDown,()=>{fe.current=!0}),onFocus:ct(o.onFocus,Pe=>{const We=!fe.current;if(Pe.target===Pe.currentTarget&&We&&!K){const Le=new CustomEvent(h1,U3);if(Pe.currentTarget.dispatchEvent(Le),!Le.defaultPrevented){const Ie=ce().filter(Se=>Se.focusable),_e=Ie.find(Se=>Se.active),Xe=Ie.find(Se=>Se.id===D),Ne=[_e,Xe,...Ie].filter(Boolean).map(Se=>Se.ref.current);m2(Ne,R)}}fe.current=!1}),onBlur:ct(o.onBlur,()=>q(!1))})})}),d2="RovingFocusGroupItem",f2=P.forwardRef((o,a)=>{const{__scopeRovingFocusGroup:l,focusable:c=!0,active:f=!1,tabStopId:k,children:y,...x}=o,S=Ol(),b=k||S,R=q3(d2,l),E=R.currentTabStopId===b,A=c2(l),{onFocusableItemAdd:W,onFocusableItemRemove:V,currentTabStopId:D}=R;return P.useEffect(()=>{if(c)return W(),()=>V()},[c,W,V]),_.jsx(L1.ItemSlot,{scope:l,id:b,focusable:c,active:f,children:_.jsx(Rt.span,{tabIndex:E?0:-1,"data-orientation":R.orientation,...x,ref:a,onMouseDown:ct(o.onMouseDown,F=>{c?R.onItemFocus(b):F.preventDefault()}),onFocus:ct(o.onFocus,()=>R.onItemFocus(b)),onKeyDown:ct(o.onKeyDown,F=>{if(F.key==="Tab"&&F.shiftKey){R.onItemShiftTab();return}if(F.target!==F.currentTarget)return;const K=e4(F,R.orientation,R.dir);if(K!==void 0){if(F.metaKey||F.ctrlKey||F.altKey||F.shiftKey)return;F.preventDefault();let ee=A().filter(ce=>ce.focusable).map(ce=>ce.ref.current);if(K==="last")ee.reverse();else if(K==="prev"||K==="next"){K==="prev"&&ee.reverse();const ce=ee.indexOf(F.currentTarget);ee=R.loop?t4(ee,ce+1):ee.slice(ce+1)}setTimeout(()=>m2(ee))}}),children:typeof y=="function"?y({isCurrentTabStop:E,hasTabStop:D!=null}):y})})});f2.displayName=d2;var Q3={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function J3(o,a){return a!=="rtl"?o:o==="ArrowLeft"?"ArrowRight":o==="ArrowRight"?"ArrowLeft":o}function e4(o,a,l){const c=J3(o.key,l);if(!(a==="vertical"&&["ArrowLeft","ArrowRight"].includes(c))&&!(a==="horizontal"&&["ArrowUp","ArrowDown"].includes(c)))return Q3[c]}function m2(o,a=!1){const l=document.activeElement;for(const c of o)if(c===l||(c.focus({preventScroll:a}),document.activeElement!==l))return}function t4(o,a){return o.map((l,c)=>o[(a+c)%o.length])}var h2=p2,g2=f2;function n4(o,a){return P.useReducer((l,c)=>a[l][c]??l,o)}var wo=o=>{const{present:a,children:l}=o,c=r4(a),f=typeof l=="function"?l({present:c.isPresent}):P.Children.only(l),k=Tn(c.ref,i4(f));return typeof l=="function"||c.isPresent?P.cloneElement(f,{ref:k}):null};wo.displayName="Presence";function r4(o){const[a,l]=P.useState(),c=P.useRef(null),f=P.useRef(o),k=P.useRef("none"),y=o?"mounted":"unmounted",[x,S]=n4(y,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return P.useEffect(()=>{const b=mu(c.current);k.current=x==="mounted"?b:"none"},[x]),ol(()=>{const b=c.current,R=f.current;if(R!==o){const A=k.current,W=mu(b);o?S("MOUNT"):W==="none"||(b==null?void 0:b.display)==="none"?S("UNMOUNT"):S(R&&A!==W?"ANIMATION_OUT":"UNMOUNT"),f.current=o}},[o,S]),ol(()=>{if(a){let b;const R=a.ownerDocument.defaultView??window,E=W=>{const D=mu(c.current).includes(CSS.escape(W.animationName));if(W.target===a&&D&&(S("ANIMATION_END"),!f.current)){const F=a.style.animationFillMode;a.style.animationFillMode="forwards",b=R.setTimeout(()=>{a.style.animationFillMode==="forwards"&&(a.style.animationFillMode=F)})}},A=W=>{W.target===a&&(k.current=mu(c.current))};return a.addEventListener("animationstart",A),a.addEventListener("animationcancel",E),a.addEventListener("animationend",E),()=>{R.clearTimeout(b),a.removeEventListener("animationstart",A),a.removeEventListener("animationcancel",E),a.removeEventListener("animationend",E)}}else S("ANIMATION_END")},[a,S]),{isPresent:["mounted","unmountSuspended"].includes(x),ref:P.useCallback(b=>{c.current=b?getComputedStyle(b):null,l(b)},[])}}function mu(o){return(o==null?void 0:o.animationName)||"none"}function i4(o){var c,f;let a=(c=Object.getOwnPropertyDescriptor(o.props,"ref"))==null?void 0:c.get,l=a&&"isReactWarning"in a&&a.isReactWarning;return l?o.ref:(a=(f=Object.getOwnPropertyDescriptor(o,"ref"))==null?void 0:f.get,l=a&&"isReactWarning"in a&&a.isReactWarning,l?o.props.ref:o.props.ref||o.ref)}var zu="Tabs",[o4]=Fl(zu,[Du]),k2=Du(),[l4,H1]=o4(zu),v2=P.forwardRef((o,a)=>{const{__scopeTabs:l,value:c,onValueChange:f,defaultValue:k,orientation:y="horizontal",dir:x,activationMode:S="automatic",...b}=o,R=W1(x),[E,A]=Au({prop:c,onChange:f,defaultProp:k??"",caller:zu});return _.jsx(l4,{scope:l,baseId:Ol(),value:E,onValueChange:A,orientation:y,dir:R,activationMode:S,children:_.jsx(Rt.div,{dir:R,"data-orientation":y,...b,ref:a})})});v2.displayName=zu;var y2="TabsList",_2=P.forwardRef((o,a)=>{const{__scopeTabs:l,loop:c=!0,...f}=o,k=H1(y2,l),y=k2(l);return _.jsx(h2,{asChild:!0,...y,orientation:k.orientation,dir:k.dir,loop:c,children:_.jsx(Rt.div,{role:"tablist","aria-orientation":k.orientation,...f,ref:a})})});_2.displayName=y2;var x2="TabsTrigger",T2=P.forwardRef((o,a)=>{const{__scopeTabs:l,value:c,disabled:f=!1,...k}=o,y=H1(x2,l),x=k2(l),S=Z2(y.baseId,c),b=b2(y.baseId,c),R=c===y.value;return _.jsx(g2,{asChild:!0,...x,focusable:!f,active:R,children:_.jsx(Rt.button,{type:"button",role:"tab","aria-selected":R,"aria-controls":b,"data-state":R?"active":"inactive","data-disabled":f?"":void 0,disabled:f,id:S,...k,ref:a,onMouseDown:ct(o.onMouseDown,E=>{!f&&E.button===0&&E.ctrlKey===!1?y.onValueChange(c):E.preventDefault()}),onKeyDown:ct(o.onKeyDown,E=>{[" ","Enter"].includes(E.key)&&y.onValueChange(c)}),onFocus:ct(o.onFocus,()=>{const E=y.activationMode!=="manual";!R&&!f&&E&&y.onValueChange(c)})})})});T2.displayName=x2;var w2="TabsContent",S2=P.forwardRef((o,a)=>{const{__scopeTabs:l,value:c,forceMount:f,children:k,...y}=o,x=H1(w2,l),S=Z2(x.baseId,c),b=b2(x.baseId,c),R=c===x.value,E=P.useRef(R);return P.useEffect(()=>{const A=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(A)},[]),_.jsx(wo,{present:f||R,children:({present:A})=>_.jsx(Rt.div,{"data-state":R?"active":"inactive","data-orientation":x.orientation,role:"tabpanel","aria-labelledby":S,hidden:!A,id:b,tabIndex:0,...y,ref:a,style:{...o.style,animationDuration:E.current?"0s":void 0},children:A&&k})})});S2.displayName=w2;function Z2(o,a){return`${o}-trigger-${a}`}function b2(o,a){return`${o}-content-${a}`}var a4=v2,C2=_2,E2=T2,P2=S2;const s4=a4,M2=P.forwardRef(({className:o,...a},l)=>_.jsx(C2,{ref:l,className:Ct("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",o),...a}));M2.displayName=C2.displayName;const N1=P.forwardRef(({className:o,...a},l)=>_.jsx(E2,{ref:l,className:Ct("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",o),...a}));N1.displayName=E2.displayName;const R1=P.forwardRef(({className:o,...a},l)=>_.jsx(P2,{ref:l,className:Ct("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",o),...a}));R1.displayName=P2.displayName;function u4(o,a=globalThis==null?void 0:globalThis.document){const l=_o(o);P.useEffect(()=>{const c=f=>{f.key==="Escape"&&l(f)};return a.addEventListener("keydown",c,{capture:!0}),()=>a.removeEventListener("keydown",c,{capture:!0})},[l,a])}var c4="DismissableLayer",I1="dismissableLayer.update",p4="dismissableLayer.pointerDownOutside",d4="dismissableLayer.focusOutside",fd,L2=P.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),V1=P.forwardRef((o,a)=>{const{disableOutsidePointerEvents:l=!1,onEscapeKeyDown:c,onPointerDownOutside:f,onFocusOutside:k,onInteractOutside:y,onDismiss:x,...S}=o,b=P.useContext(L2),[R,E]=P.useState(null),A=(R==null?void 0:R.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,W]=P.useState({}),V=Tn(a,de=>E(de)),D=Array.from(b.layers),[F]=[...b.layersWithOutsidePointerEventsDisabled].slice(-1),K=D.indexOf(F),q=R?D.indexOf(R):-1,ee=b.layersWithOutsidePointerEventsDisabled.size>0,ce=q>=K,fe=h4(de=>{const Pe=de.target,We=[...b.branches].some(Le=>Le.contains(Pe));!ce||We||(f==null||f(de),y==null||y(de),de.defaultPrevented||x==null||x())},A),he=g4(de=>{const Pe=de.target;[...b.branches].some(Le=>Le.contains(Pe))||(k==null||k(de),y==null||y(de),de.defaultPrevented||x==null||x())},A);return u4(de=>{q===b.layers.size-1&&(c==null||c(de),!de.defaultPrevented&&x&&(de.preventDefault(),x()))},A),P.useEffect(()=>{if(R)return l&&(b.layersWithOutsidePointerEventsDisabled.size===0&&(fd=A.body.style.pointerEvents,A.body.style.pointerEvents="none"),b.layersWithOutsidePointerEventsDisabled.add(R)),b.layers.add(R),md(),()=>{l&&b.layersWithOutsidePointerEventsDisabled.size===1&&(A.body.style.pointerEvents=fd)}},[R,A,l,b]),P.useEffect(()=>()=>{R&&(b.layers.delete(R),b.layersWithOutsidePointerEventsDisabled.delete(R),md())},[R,b]),P.useEffect(()=>{const de=()=>W({});return document.addEventListener(I1,de),()=>document.removeEventListener(I1,de)},[]),_.jsx(Rt.div,{...S,ref:V,style:{pointerEvents:ee?ce?"auto":"none":void 0,...o.style},onFocusCapture:ct(o.onFocusCapture,he.onFocusCapture),onBlurCapture:ct(o.onBlurCapture,he.onBlurCapture),onPointerDownCapture:ct(o.onPointerDownCapture,fe.onPointerDownCapture)})});V1.displayName=c4;var f4="DismissableLayerBranch",m4=P.forwardRef((o,a)=>{const l=P.useContext(L2),c=P.useRef(null),f=Tn(a,c);return P.useEffect(()=>{const k=c.current;if(k)return l.branches.add(k),()=>{l.branches.delete(k)}},[l.branches]),_.jsx(Rt.div,{...o,ref:f})});m4.displayName=f4;function h4(o,a=globalThis==null?void 0:globalThis.document){const l=_o(o),c=P.useRef(!1),f=P.useRef(()=>{});return P.useEffect(()=>{const k=x=>{if(x.target&&!c.current){let S=function(){N2(p4,l,b,{discrete:!0})};const b={originalEvent:x};x.pointerType==="touch"?(a.removeEventListener("click",f.current),f.current=S,a.addEventListener("click",f.current,{once:!0})):S()}else a.removeEventListener("click",f.current);c.current=!1},y=window.setTimeout(()=>{a.addEventListener("pointerdown",k)},0);return()=>{window.clearTimeout(y),a.removeEventListener("pointerdown",k),a.removeEventListener("click",f.current)}},[a,l]),{onPointerDownCapture:()=>c.current=!0}}function g4(o,a=globalThis==null?void 0:globalThis.document){const l=_o(o),c=P.useRef(!1);return P.useEffect(()=>{const f=k=>{k.target&&!c.current&&N2(d4,l,{originalEvent:k},{discrete:!1})};return a.addEventListener("focusin",f),()=>a.removeEventListener("focusin",f)},[a,l]),{onFocusCapture:()=>c.current=!0,onBlurCapture:()=>c.current=!1}}function md(){const o=new CustomEvent(I1);document.dispatchEvent(o)}function N2(o,a,l,{discrete:c}){const f=l.originalEvent.target,k=new CustomEvent(o,{bubbles:!1,cancelable:!0,detail:l});a&&f.addEventListener(o,a,{once:!0}),c?u2(f,k):f.dispatchEvent(k)}var g1="focusScope.autoFocusOnMount",k1="focusScope.autoFocusOnUnmount",hd={bubbles:!1,cancelable:!0},k4="FocusScope",G1=P.forwardRef((o,a)=>{const{loop:l=!1,trapped:c=!1,onMountAutoFocus:f,onUnmountAutoFocus:k,...y}=o,[x,S]=P.useState(null),b=_o(f),R=_o(k),E=P.useRef(null),A=Tn(a,D=>S(D)),W=P.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;P.useEffect(()=>{if(c){let D=function(ee){if(W.paused||!x)return;const ce=ee.target;x.contains(ce)?E.current=ce:il(E.current,{select:!0})},F=function(ee){if(W.paused||!x)return;const ce=ee.relatedTarget;ce!==null&&(x.contains(ce)||il(E.current,{select:!0}))},K=function(ee){if(document.activeElement===document.body)for(const fe of ee)fe.removedNodes.length>0&&il(x)};document.addEventListener("focusin",D),document.addEventListener("focusout",F);const q=new MutationObserver(K);return x&&q.observe(x,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",D),document.removeEventListener("focusout",F),q.disconnect()}}},[c,x,W.paused]),P.useEffect(()=>{if(x){kd.add(W);const D=document.activeElement;if(!x.contains(D)){const K=new CustomEvent(g1,hd);x.addEventListener(g1,b),x.dispatchEvent(K),K.defaultPrevented||(v4(w4(R2(x)),{select:!0}),document.activeElement===D&&il(x))}return()=>{x.removeEventListener(g1,b),setTimeout(()=>{const K=new CustomEvent(k1,hd);x.addEventListener(k1,R),x.dispatchEvent(K),K.defaultPrevented||il(D??document.body,{select:!0}),x.removeEventListener(k1,R),kd.remove(W)},0)}}},[x,b,R,W]);const V=P.useCallback(D=>{if(!l&&!c||W.paused)return;const F=D.key==="Tab"&&!D.altKey&&!D.ctrlKey&&!D.metaKey,K=document.activeElement;if(F&&K){const q=D.currentTarget,[ee,ce]=y4(q);ee&&ce?!D.shiftKey&&K===ce?(D.preventDefault(),l&&il(ee,{select:!0})):D.shiftKey&&K===ee&&(D.preventDefault(),l&&il(ce,{select:!0})):K===q&&D.preventDefault()}},[l,c,W.paused]);return _.jsx(Rt.div,{tabIndex:-1,...y,ref:A,onKeyDown:V})});G1.displayName=k4;function v4(o,{select:a=!1}={}){const l=document.activeElement;for(const c of o)if(il(c,{select:a}),document.activeElement!==l)return}function y4(o){const a=R2(o),l=gd(a,o),c=gd(a.reverse(),o);return[l,c]}function R2(o){const a=[],l=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode:c=>{const f=c.tagName==="INPUT"&&c.type==="hidden";return c.disabled||c.hidden||f?NodeFilter.FILTER_SKIP:c.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;l.nextNode();)a.push(l.currentNode);return a}function gd(o,a){for(const l of o)if(!_4(l,{upTo:a}))return l}function _4(o,{upTo:a}){if(getComputedStyle(o).visibility==="hidden")return!0;for(;o;){if(a!==void 0&&o===a)return!1;if(getComputedStyle(o).display==="none")return!0;o=o.parentElement}return!1}function x4(o){return o instanceof HTMLInputElement&&"select"in o}function il(o,{select:a=!1}={}){if(o&&o.focus){const l=document.activeElement;o.focus({preventScroll:!0}),o!==l&&x4(o)&&a&&o.select()}}var kd=T4();function T4(){let o=[];return{add(a){const l=o[0];a!==l&&(l==null||l.pause()),o=vd(o,a),o.unshift(a)},remove(a){var l;o=vd(o,a),(l=o[0])==null||l.resume()}}}function vd(o,a){const l=[...o],c=l.indexOf(a);return c!==-1&&l.splice(c,1),l}function w4(o){return o.filter(a=>a.tagName!=="A")}var S4="Portal",U1=P.forwardRef((o,a)=>{var x;const{container:l,...c}=o,[f,k]=P.useState(!1);ol(()=>k(!0),[]);const y=l||f&&((x=globalThis==null?void 0:globalThis.document)==null?void 0:x.body);return y?F3.createPortal(_.jsx(Rt.div,{...c,ref:a}),y):null});U1.displayName=S4;var v1=0;function I2(){P.useEffect(()=>{const o=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",o[0]??yd()),document.body.insertAdjacentElement("beforeend",o[1]??yd()),v1++,()=>{v1===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(a=>a.remove()),v1--}},[])}function yd(){const o=document.createElement("span");return o.setAttribute("data-radix-focus-guard",""),o.tabIndex=0,o.style.outline="none",o.style.opacity="0",o.style.position="fixed",o.style.pointerEvents="none",o}var Wi=function(){return Wi=Object.assign||function(a){for(var l,c=1,f=arguments.length;c<f;c++){l=arguments[c];for(var k in l)Object.prototype.hasOwnProperty.call(l,k)&&(a[k]=l[k])}return a},Wi.apply(this,arguments)};function O2(o,a){var l={};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.indexOf(c)<0&&(l[c]=o[c]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(o);f<c.length;f++)a.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(o,c[f])&&(l[c[f]]=o[c[f]]);return l}function Z4(o,a,l){if(l||arguments.length===2)for(var c=0,f=a.length,k;c<f;c++)(k||!(c in a))&&(k||(k=Array.prototype.slice.call(a,0,c)),k[c]=a[c]);return o.concat(k||Array.prototype.slice.call(a))}var wu="right-scroll-bar-position",Su="width-before-scroll-bar",b4="with-scroll-bars-hidden",C4="--removed-body-scroll-bar-size";function y1(o,a){return typeof o=="function"?o(a):o&&(o.current=a),o}function E4(o,a){var l=P.useState(function(){return{value:o,callback:a,facade:{get current(){return l.value},set current(c){var f=l.value;f!==c&&(l.value=c,l.callback(c,f))}}}})[0];return l.callback=a,l.facade}var P4=typeof window<"u"?P.useLayoutEffect:P.useEffect,_d=new WeakMap;function M4(o,a){var l=E4(null,function(c){return o.forEach(function(f){return y1(f,c)})});return P4(function(){var c=_d.get(l);if(c){var f=new Set(c),k=new Set(o),y=l.current;f.forEach(function(x){k.has(x)||y1(x,null)}),k.forEach(function(x){f.has(x)||y1(x,y)})}_d.set(l,o)},[o]),l}function L4(o){return o}function N4(o,a){a===void 0&&(a=L4);var l=[],c=!1,f={read:function(){if(c)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return l.length?l[l.length-1]:o},useMedium:function(k){var y=a(k,c);return l.push(y),function(){l=l.filter(function(x){return x!==y})}},assignSyncMedium:function(k){for(c=!0;l.length;){var y=l;l=[],y.forEach(k)}l={push:function(x){return k(x)},filter:function(){return l}}},assignMedium:function(k){c=!0;var y=[];if(l.length){var x=l;l=[],x.forEach(k),y=l}var S=function(){var R=y;y=[],R.forEach(k)},b=function(){return Promise.resolve().then(S)};b(),l={push:function(R){y.push(R),b()},filter:function(R){return y=y.filter(R),l}}}};return f}function R4(o){o===void 0&&(o={});var a=N4(null);return a.options=Wi({async:!0,ssr:!1},o),a}var A2=function(o){var a=o.sideCar,l=O2(o,["sideCar"]);if(!a)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=a.read();if(!c)throw new Error("Sidecar medium not found");return P.createElement(c,Wi({},l))};A2.isSideCarExport=!0;function I4(o,a){return o.useMedium(a),A2}var D2=R4(),_1=function(){},ju=P.forwardRef(function(o,a){var l=P.useRef(null),c=P.useState({onScrollCapture:_1,onWheelCapture:_1,onTouchMoveCapture:_1}),f=c[0],k=c[1],y=o.forwardProps,x=o.children,S=o.className,b=o.removeScrollBar,R=o.enabled,E=o.shards,A=o.sideCar,W=o.noRelative,V=o.noIsolation,D=o.inert,F=o.allowPinchZoom,K=o.as,q=K===void 0?"div":K,ee=o.gapMode,ce=O2(o,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),fe=A,he=M4([l,a]),de=Wi(Wi({},ce),f);return P.createElement(P.Fragment,null,R&&P.createElement(fe,{sideCar:D2,removeScrollBar:b,shards:E,noRelative:W,noIsolation:V,inert:D,setCallbacks:k,allowPinchZoom:!!F,lockRef:l,gapMode:ee}),y?P.cloneElement(P.Children.only(x),Wi(Wi({},de),{ref:he})):P.createElement(q,Wi({},de,{className:S,ref:he}),x))});ju.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ju.classNames={fullWidth:Su,zeroRight:wu};var O4=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function A4(){if(!document)return null;var o=document.createElement("style");o.type="text/css";var a=O4();return a&&o.setAttribute("nonce",a),o}function D4(o,a){o.styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a))}function z4(o){var a=document.head||document.getElementsByTagName("head")[0];a.appendChild(o)}var j4=function(){var o=0,a=null;return{add:function(l){o==0&&(a=A4())&&(D4(a,l),z4(a)),o++},remove:function(){o--,!o&&a&&(a.parentNode&&a.parentNode.removeChild(a),a=null)}}},F4=function(){var o=j4();return function(a,l){P.useEffect(function(){return o.add(a),function(){o.remove()}},[a&&l])}},z2=function(){var o=F4(),a=function(l){var c=l.styles,f=l.dynamic;return o(c,f),null};return a},B4={left:0,top:0,right:0,gap:0},x1=function(o){return parseInt(o||"",10)||0},W4=function(o){var a=window.getComputedStyle(document.body),l=a[o==="padding"?"paddingLeft":"marginLeft"],c=a[o==="padding"?"paddingTop":"marginTop"],f=a[o==="padding"?"paddingRight":"marginRight"];return[x1(l),x1(c),x1(f)]},H4=function(o){if(o===void 0&&(o="margin"),typeof window>"u")return B4;var a=W4(o),l=document.documentElement.clientWidth,c=window.innerWidth;return{left:a[0],top:a[1],right:a[2],gap:Math.max(0,c-l+a[2]-a[0])}},V4=z2(),Ta="data-scroll-locked",G4=function(o,a,l,c){var f=o.left,k=o.top,y=o.right,x=o.gap;return l===void 0&&(l="margin"),`
  .`.concat(b4,` {
   overflow: hidden `).concat(c,`;
   padding-right: `).concat(x,"px ").concat(c,`;
  }
  body[`).concat(Ta,`] {
    overflow: hidden `).concat(c,`;
    overscroll-behavior: contain;
    `).concat([a&&"position: relative ".concat(c,";"),l==="margin"&&`
    padding-left: `.concat(f,`px;
    padding-top: `).concat(k,`px;
    padding-right: `).concat(y,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(x,"px ").concat(c,`;
    `),l==="padding"&&"padding-right: ".concat(x,"px ").concat(c,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(wu,` {
    right: `).concat(x,"px ").concat(c,`;
  }
  
  .`).concat(Su,` {
    margin-right: `).concat(x,"px ").concat(c,`;
  }
  
  .`).concat(wu," .").concat(wu,` {
    right: 0 `).concat(c,`;
  }
  
  .`).concat(Su," .").concat(Su,` {
    margin-right: 0 `).concat(c,`;
  }
  
  body[`).concat(Ta,`] {
    `).concat(C4,": ").concat(x,`px;
  }
`)},xd=function(){var o=parseInt(document.body.getAttribute(Ta)||"0",10);return isFinite(o)?o:0},U4=function(){P.useEffect(function(){return document.body.setAttribute(Ta,(xd()+1).toString()),function(){var o=xd()-1;o<=0?document.body.removeAttribute(Ta):document.body.setAttribute(Ta,o.toString())}},[])},K4=function(o){var a=o.noRelative,l=o.noImportant,c=o.gapMode,f=c===void 0?"margin":c;U4();var k=P.useMemo(function(){return H4(f)},[f]);return P.createElement(V4,{styles:G4(k,!a,f,l?"":"!important")})},O1=!1;if(typeof window<"u")try{var hu=Object.defineProperty({},"passive",{get:function(){return O1=!0,!0}});window.addEventListener("test",hu,hu),window.removeEventListener("test",hu,hu)}catch{O1=!1}var ka=O1?{passive:!1}:!1,$4=function(o){return o.tagName==="TEXTAREA"},j2=function(o,a){if(!(o instanceof Element))return!1;var l=window.getComputedStyle(o);return l[a]!=="hidden"&&!(l.overflowY===l.overflowX&&!$4(o)&&l[a]==="visible")},X4=function(o){return j2(o,"overflowY")},q4=function(o){return j2(o,"overflowX")},Td=function(o,a){var l=a.ownerDocument,c=a;do{typeof ShadowRoot<"u"&&c instanceof ShadowRoot&&(c=c.host);var f=F2(o,c);if(f){var k=B2(o,c),y=k[1],x=k[2];if(y>x)return!0}c=c.parentNode}while(c&&c!==l.body);return!1},Y4=function(o){var a=o.scrollTop,l=o.scrollHeight,c=o.clientHeight;return[a,l,c]},Q4=function(o){var a=o.scrollLeft,l=o.scrollWidth,c=o.clientWidth;return[a,l,c]},F2=function(o,a){return o==="v"?X4(a):q4(a)},B2=function(o,a){return o==="v"?Y4(a):Q4(a)},J4=function(o,a){return o==="h"&&a==="rtl"?-1:1},e5=function(o,a,l,c,f){var k=J4(o,window.getComputedStyle(a).direction),y=k*c,x=l.target,S=a.contains(x),b=!1,R=y>0,E=0,A=0;do{if(!x)break;var W=B2(o,x),V=W[0],D=W[1],F=W[2],K=D-F-k*V;(V||K)&&F2(o,x)&&(E+=K,A+=V);var q=x.parentNode;x=q&&q.nodeType===Node.DOCUMENT_FRAGMENT_NODE?q.host:q}while(!S&&x!==document.body||S&&(a.contains(x)||a===x));return(R&&Math.abs(E)<1||!R&&Math.abs(A)<1)&&(b=!0),b},gu=function(o){return"changedTouches"in o?[o.changedTouches[0].clientX,o.changedTouches[0].clientY]:[0,0]},wd=function(o){return[o.deltaX,o.deltaY]},Sd=function(o){return o&&"current"in o?o.current:o},t5=function(o,a){return o[0]===a[0]&&o[1]===a[1]},n5=function(o){return`
  .block-interactivity-`.concat(o,` {pointer-events: none;}
  .allow-interactivity-`).concat(o,` {pointer-events: all;}
`)},r5=0,va=[];function i5(o){var a=P.useRef([]),l=P.useRef([0,0]),c=P.useRef(),f=P.useState(r5++)[0],k=P.useState(z2)[0],y=P.useRef(o);P.useEffect(function(){y.current=o},[o]),P.useEffect(function(){if(o.inert){document.body.classList.add("block-interactivity-".concat(f));var D=Z4([o.lockRef.current],(o.shards||[]).map(Sd),!0).filter(Boolean);return D.forEach(function(F){return F.classList.add("allow-interactivity-".concat(f))}),function(){document.body.classList.remove("block-interactivity-".concat(f)),D.forEach(function(F){return F.classList.remove("allow-interactivity-".concat(f))})}}},[o.inert,o.lockRef.current,o.shards]);var x=P.useCallback(function(D,F){if("touches"in D&&D.touches.length===2||D.type==="wheel"&&D.ctrlKey)return!y.current.allowPinchZoom;var K=gu(D),q=l.current,ee="deltaX"in D?D.deltaX:q[0]-K[0],ce="deltaY"in D?D.deltaY:q[1]-K[1],fe,he=D.target,de=Math.abs(ee)>Math.abs(ce)?"h":"v";if("touches"in D&&de==="h"&&he.type==="range")return!1;var Pe=window.getSelection(),We=Pe&&Pe.anchorNode,Le=We?We===he||We.contains(he):!1;if(Le)return!1;var Ie=Td(de,he);if(!Ie)return!0;if(Ie?fe=de:(fe=de==="v"?"h":"v",Ie=Td(de,he)),!Ie)return!1;if(!c.current&&"changedTouches"in D&&(ee||ce)&&(c.current=fe),!fe)return!0;var _e=c.current||fe;return e5(_e,F,D,_e==="h"?ee:ce)},[]),S=P.useCallback(function(D){var F=D;if(!(!va.length||va[va.length-1]!==k)){var K="deltaY"in F?wd(F):gu(F),q=a.current.filter(function(fe){return fe.name===F.type&&(fe.target===F.target||F.target===fe.shadowParent)&&t5(fe.delta,K)})[0];if(q&&q.should){F.cancelable&&F.preventDefault();return}if(!q){var ee=(y.current.shards||[]).map(Sd).filter(Boolean).filter(function(fe){return fe.contains(F.target)}),ce=ee.length>0?x(F,ee[0]):!y.current.noIsolation;ce&&F.cancelable&&F.preventDefault()}}},[]),b=P.useCallback(function(D,F,K,q){var ee={name:D,delta:F,target:K,should:q,shadowParent:o5(K)};a.current.push(ee),setTimeout(function(){a.current=a.current.filter(function(ce){return ce!==ee})},1)},[]),R=P.useCallback(function(D){l.current=gu(D),c.current=void 0},[]),E=P.useCallback(function(D){b(D.type,wd(D),D.target,x(D,o.lockRef.current))},[]),A=P.useCallback(function(D){b(D.type,gu(D),D.target,x(D,o.lockRef.current))},[]);P.useEffect(function(){return va.push(k),o.setCallbacks({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:A}),document.addEventListener("wheel",S,ka),document.addEventListener("touchmove",S,ka),document.addEventListener("touchstart",R,ka),function(){va=va.filter(function(D){return D!==k}),document.removeEventListener("wheel",S,ka),document.removeEventListener("touchmove",S,ka),document.removeEventListener("touchstart",R,ka)}},[]);var W=o.removeScrollBar,V=o.inert;return P.createElement(P.Fragment,null,V?P.createElement(k,{styles:n5(f)}):null,W?P.createElement(K4,{noRelative:o.noRelative,gapMode:o.gapMode}):null)}function o5(o){for(var a=null;o!==null;)o instanceof ShadowRoot&&(a=o.host,o=o.host),o=o.parentNode;return a}const l5=I4(D2,i5);var K1=P.forwardRef(function(o,a){return P.createElement(ju,Wi({},o,{ref:a,sideCar:l5}))});K1.classNames=ju.classNames;var a5=function(o){if(typeof document>"u")return null;var a=Array.isArray(o)?o[0]:o;return a.ownerDocument.body},ya=new WeakMap,ku=new WeakMap,vu={},T1=0,W2=function(o){return o&&(o.host||W2(o.parentNode))},s5=function(o,a){return a.map(function(l){if(o.contains(l))return l;var c=W2(l);return c&&o.contains(c)?c:(console.error("aria-hidden",l,"in not contained inside",o,". Doing nothing"),null)}).filter(function(l){return!!l})},u5=function(o,a,l,c){var f=s5(a,Array.isArray(o)?o:[o]);vu[l]||(vu[l]=new WeakMap);var k=vu[l],y=[],x=new Set,S=new Set(f),b=function(E){!E||x.has(E)||(x.add(E),b(E.parentNode))};f.forEach(b);var R=function(E){!E||S.has(E)||Array.prototype.forEach.call(E.children,function(A){if(x.has(A))R(A);else try{var W=A.getAttribute(c),V=W!==null&&W!=="false",D=(ya.get(A)||0)+1,F=(k.get(A)||0)+1;ya.set(A,D),k.set(A,F),y.push(A),D===1&&V&&ku.set(A,!0),F===1&&A.setAttribute(l,"true"),V||A.setAttribute(c,"true")}catch(K){console.error("aria-hidden: cannot operate on ",A,K)}})};return R(a),x.clear(),T1++,function(){y.forEach(function(E){var A=ya.get(E)-1,W=k.get(E)-1;ya.set(E,A),k.set(E,W),A||(ku.has(E)||E.removeAttribute(c),ku.delete(E)),W||E.removeAttribute(l)}),T1--,T1||(ya=new WeakMap,ya=new WeakMap,ku=new WeakMap,vu={})}},H2=function(o,a,l){l===void 0&&(l="data-aria-hidden");var c=Array.from(Array.isArray(o)?o:[o]),f=a5(o);return f?(c.push.apply(c,Array.from(f.querySelectorAll("[aria-live], script"))),u5(c,f,l,"aria-hidden")):function(){return null}},Fu="Dialog",[V2]=Fl(Fu),[c5,wi]=V2(Fu),G2=o=>{const{__scopeDialog:a,children:l,open:c,defaultOpen:f,onOpenChange:k,modal:y=!0}=o,x=P.useRef(null),S=P.useRef(null),[b,R]=Au({prop:c,defaultProp:f??!1,onChange:k,caller:Fu});return _.jsx(c5,{scope:a,triggerRef:x,contentRef:S,contentId:Ol(),titleId:Ol(),descriptionId:Ol(),open:b,onOpenChange:R,onOpenToggle:P.useCallback(()=>R(E=>!E),[R]),modal:y,children:l})};G2.displayName=Fu;var U2="DialogTrigger",K2=P.forwardRef((o,a)=>{const{__scopeDialog:l,...c}=o,f=wi(U2,l),k=Tn(a,f.triggerRef);return _.jsx(Rt.button,{type:"button","aria-haspopup":"dialog","aria-expanded":f.open,"aria-controls":f.contentId,"data-state":q1(f.open),...c,ref:k,onClick:ct(o.onClick,f.onOpenToggle)})});K2.displayName=U2;var $1="DialogPortal",[p5,$2]=V2($1,{forceMount:void 0}),X2=o=>{const{__scopeDialog:a,forceMount:l,children:c,container:f}=o,k=wi($1,a);return _.jsx(p5,{scope:a,forceMount:l,children:P.Children.map(c,y=>_.jsx(wo,{present:l||k.open,children:_.jsx(U1,{asChild:!0,container:f,children:y})}))})};X2.displayName=$1;var Cu="DialogOverlay",q2=P.forwardRef((o,a)=>{const l=$2(Cu,o.__scopeDialog),{forceMount:c=l.forceMount,...f}=o,k=wi(Cu,o.__scopeDialog);return k.modal?_.jsx(wo,{present:c||k.open,children:_.jsx(f5,{...f,ref:a})}):null});q2.displayName=Cu;var d5=ls("DialogOverlay.RemoveScroll"),f5=P.forwardRef((o,a)=>{const{__scopeDialog:l,...c}=o,f=wi(Cu,l);return _.jsx(K1,{as:d5,allowPinchZoom:!0,shards:[f.contentRef],children:_.jsx(Rt.div,{"data-state":q1(f.open),...c,ref:a,style:{pointerEvents:"auto",...c.style}})})}),Al="DialogContent",Y2=P.forwardRef((o,a)=>{const l=$2(Al,o.__scopeDialog),{forceMount:c=l.forceMount,...f}=o,k=wi(Al,o.__scopeDialog);return _.jsx(wo,{present:c||k.open,children:k.modal?_.jsx(m5,{...f,ref:a}):_.jsx(h5,{...f,ref:a})})});Y2.displayName=Al;var m5=P.forwardRef((o,a)=>{const l=wi(Al,o.__scopeDialog),c=P.useRef(null),f=Tn(a,l.contentRef,c);return P.useEffect(()=>{const k=c.current;if(k)return H2(k)},[]),_.jsx(Q2,{...o,ref:f,trapFocus:l.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ct(o.onCloseAutoFocus,k=>{var y;k.preventDefault(),(y=l.triggerRef.current)==null||y.focus()}),onPointerDownOutside:ct(o.onPointerDownOutside,k=>{const y=k.detail.originalEvent,x=y.button===0&&y.ctrlKey===!0;(y.button===2||x)&&k.preventDefault()}),onFocusOutside:ct(o.onFocusOutside,k=>k.preventDefault())})}),h5=P.forwardRef((o,a)=>{const l=wi(Al,o.__scopeDialog),c=P.useRef(!1),f=P.useRef(!1);return _.jsx(Q2,{...o,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:k=>{var y,x;(y=o.onCloseAutoFocus)==null||y.call(o,k),k.defaultPrevented||(c.current||(x=l.triggerRef.current)==null||x.focus(),k.preventDefault()),c.current=!1,f.current=!1},onInteractOutside:k=>{var S,b;(S=o.onInteractOutside)==null||S.call(o,k),k.defaultPrevented||(c.current=!0,k.detail.originalEvent.type==="pointerdown"&&(f.current=!0));const y=k.target;((b=l.triggerRef.current)==null?void 0:b.contains(y))&&k.preventDefault(),k.detail.originalEvent.type==="focusin"&&f.current&&k.preventDefault()}})}),Q2=P.forwardRef((o,a)=>{const{__scopeDialog:l,trapFocus:c,onOpenAutoFocus:f,onCloseAutoFocus:k,...y}=o,x=wi(Al,l),S=P.useRef(null),b=Tn(a,S);return I2(),_.jsxs(_.Fragment,{children:[_.jsx(G1,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:f,onUnmountAutoFocus:k,children:_.jsx(V1,{role:"dialog",id:x.contentId,"aria-describedby":x.descriptionId,"aria-labelledby":x.titleId,"data-state":q1(x.open),...y,ref:b,onDismiss:()=>x.onOpenChange(!1)})}),_.jsxs(_.Fragment,{children:[_.jsx(g5,{titleId:x.titleId}),_.jsx(v5,{contentRef:S,descriptionId:x.descriptionId})]})]})}),X1="DialogTitle",J2=P.forwardRef((o,a)=>{const{__scopeDialog:l,...c}=o,f=wi(X1,l);return _.jsx(Rt.h2,{id:f.titleId,...c,ref:a})});J2.displayName=X1;var ef="DialogDescription",tf=P.forwardRef((o,a)=>{const{__scopeDialog:l,...c}=o,f=wi(ef,l);return _.jsx(Rt.p,{id:f.descriptionId,...c,ref:a})});tf.displayName=ef;var nf="DialogClose",rf=P.forwardRef((o,a)=>{const{__scopeDialog:l,...c}=o,f=wi(nf,l);return _.jsx(Rt.button,{type:"button",...c,ref:a,onClick:ct(o.onClick,()=>f.onOpenChange(!1))})});rf.displayName=nf;function q1(o){return o?"open":"closed"}var of="DialogTitleWarning",[Gk,lf]=L3(of,{contentName:Al,titleName:X1,docsSlug:"dialog"}),g5=({titleId:o})=>{const a=lf(of),l=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return P.useEffect(()=>{o&&(document.getElementById(o)||console.error(l))},[l,o]),null},k5="DialogDescriptionWarning",v5=({contentRef:o,descriptionId:a})=>{const c=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lf(k5).contentName}}.`;return P.useEffect(()=>{var k;const f=(k=o.current)==null?void 0:k.getAttribute("aria-describedby");a&&f&&(document.getElementById(a)||console.warn(c))},[c,o,a]),null},y5=G2,_5=K2,x5=X2,af=q2,sf=Y2,uf=J2,cf=tf,T5=rf;const w5=y5,S5=_5,Z5=x5,pf=P.forwardRef(({className:o,...a},l)=>_.jsx(af,{ref:l,className:Ct("fixed inset-0 z-[9998] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",o),...a}));pf.displayName=af.displayName;const df=P.forwardRef(({className:o,children:a,...l},c)=>_.jsxs(Z5,{children:[_.jsx(pf,{}),_.jsxs(sf,{ref:c,className:Ct("fixed left-[50%] top-[50%] z-[9999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",o),...l,children:[a,_.jsxs(T5,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[_.jsx(Xh,{className:"h-4 w-4"}),_.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));df.displayName=sf.displayName;const ff=({className:o,...a})=>_.jsx("div",{className:Ct("flex flex-col space-y-1.5 text-center sm:text-left",o),...a});ff.displayName="DialogHeader";const mf=P.forwardRef(({className:o,...a},l)=>_.jsx(uf,{ref:l,className:Ct("text-lg font-semibold leading-none tracking-tight",o),...a}));mf.displayName=uf.displayName;const b5=P.forwardRef(({className:o,...a},l)=>_.jsx(cf,{ref:l,className:Ct("text-sm text-muted-foreground",o),...a}));b5.displayName=cf.displayName;function yu(o){return o*(Math.PI/180)}function Dl(o,a,l,c){const k=yu(l-o),y=yu(c-a),x=Math.sin(k/2)*Math.sin(k/2)+Math.cos(yu(o))*Math.cos(yu(l))*Math.sin(y/2)*Math.sin(y/2);return 6371*(2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)))}function hf(o){const a=o.map(y=>y.ele).filter(y=>y!==void 0);if(a.length===0)return;let l=0,c=0,f=a[0],k=a[0];for(let y=1;y<a.length;y++){const x=a[y]-a[y-1];x>0?l+=x:x<0&&(c+=Math.abs(x)),a[y]<f&&(f=a[y]),a[y]>k&&(k=a[y])}return{gain:Math.round(l),loss:Math.round(c),min:Math.round(f),max:Math.round(k)}}function w1(o){var R;const a=o.getElementsByTagName("trk")[0],l=o.getElementsByTagName("trkseg")[0];if(!a||!l)throw new Error("No valid GPX track found");const c=Array.from(l.getElementsByTagName("trkpt")),f=((R=o.getElementsByTagName("name")[0])==null?void 0:R.textContent)||"Route";let k=0;for(let E=1;E<c.length;E++){const A=c[E-1],W=c[E],V=parseFloat(A.getAttribute("lat")||"0"),D=parseFloat(A.getAttribute("lon")||"0"),F=parseFloat(W.getAttribute("lat")||"0"),K=parseFloat(W.getAttribute("lon")||"0");k+=Dl(V,D,F,K)}const y=c[0],x=c[c.length-1],S=c.map(E=>{const A=E.getElementsByTagName("ele")[0],W=A?parseFloat(A.textContent||""):void 0;return{lat:parseFloat(E.getAttribute("lat")||"0"),lon:parseFloat(E.getAttribute("lon")||"0"),ele:isNaN(W)?void 0:W}}),b=hf(S);return{originalName:f,totalDistance:k,totalPoints:c.length,startLat:parseFloat(y.getAttribute("lat")||"0"),startLon:parseFloat(y.getAttribute("lon")||"0"),endLat:parseFloat(x.getAttribute("lat")||"0"),endLon:parseFloat(x.getAttribute("lon")||"0"),allPoints:S,elevation:b}}function _a(o,a){var We;const{startFromKM:l=0,distanceKM:c}=a,f=o.getElementsByTagName("trk")[0],k=o.getElementsByTagName("trkseg")[0];if(!f||!k)throw new Error("No valid GPX track found");const y=Array.from(k.getElementsByTagName("trkpt")),x=((We=o.getElementsByTagName("name")[0])==null?void 0:We.textContent)||"Route",S=[];let b=0,R=l===0,E=0;for(let Le=0;Le<y.length;Le++){const Ie=y[Le];if(l===0&&Le===0&&(S.push(Ie),R=!0),Le>0){const _e=y[Le-1],Xe=parseFloat(_e.getAttribute("lat")||"0"),je=parseFloat(_e.getAttribute("lon")||"0"),Ne=parseFloat(Ie.getAttribute("lat")||"0"),Se=parseFloat(Ie.getAttribute("lon")||"0"),be=Dl(Xe,je,Ne,Se);b+=be,!R&&b>=l?(R=!0,S.push(_e,Ie),E+=be):R&&(E+=be,S.push(Ie))}if(R&&E>=c)break}const A=document.implementation.createDocument(null,"gpx",null),W=A.documentElement;for(const Le of o.documentElement.attributes)W.setAttribute(Le.name,Le.value);const V=A.createElement("trk"),D=A.createElement("name"),F=l>0?`${x} (${Math.round(l)}km - ${Math.round(l+E)}km)`:`${x} (${Math.round(E)}km)`;D.textContent=F,V.appendChild(D);const K=A.createElement("trkseg");S.forEach(Le=>{K.appendChild(Le.cloneNode(!0))}),V.appendChild(K),W.appendChild(V);const ee=new XMLSerializer().serializeToString(A),ce=new Blob([ee],{type:"application/octet-stream"}),fe=x.replace(/[^a-z0-9]/gi,"_").toLowerCase(),he=l>0?`${fe}_${Math.round(l)}-${Math.round(l+E)}km.gpx`:`${fe}_${Math.round(E)}km.gpx`,de=S.map(Le=>{const Ie=Le.getElementsByTagName("ele")[0],_e=Ie?parseFloat(Ie.textContent||""):void 0;return{lat:parseFloat(Le.getAttribute("lat")||"0"),lon:parseFloat(Le.getAttribute("lon")||"0"),ele:isNaN(_e)?void 0:_e}}),Pe=hf(de);return{blob:ce,fileName:he,distance:E,pointCount:S.length,startKm:l,endKm:l+E,selectedPoints:de,elevation:Pe}}function gf(o,a){const l=P.useRef(a);P.useEffect(function(){a!==l.current&&o.attributionControl!=null&&(l.current!=null&&o.attributionControl.removeAttribution(l.current),a!=null&&o.attributionControl.addAttribution(a)),l.current=a},[o,a])}const C5=1;function E5(o){return Object.freeze({__version:C5,map:o})}function kf(o,a){return Object.freeze({...o,...a})}const vf=P.createContext(null),yf=vf.Provider;function Bu(){const o=P.useContext(vf);if(o==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return o}function _f(o){function a(l,c){const{instance:f,context:k}=o(l).current;return P.useImperativeHandle(c,()=>f),l.children==null?null:yi.createElement(yf,{value:k},l.children)}return P.forwardRef(a)}function P5(o){function a(l,c){const[f,k]=P.useState(!1),{instance:y}=o(l,k).current;P.useImperativeHandle(c,()=>y),P.useEffect(function(){f&&y.update()},[y,f,l.children]);const x=y._contentNode;return x?Ou.createPortal(l.children,x):null}return P.forwardRef(a)}function M5(o){function a(l,c){const{instance:f}=o(l).current;return P.useImperativeHandle(c,()=>f),null}return P.forwardRef(a)}function Y1(o,a){const l=P.useRef();P.useEffect(function(){return a!=null&&o.instance.on(a),l.current=a,function(){l.current!=null&&o.instance.off(l.current),l.current=null}},[o,a])}function Wu(o,a){const l=o.pane??a.pane;return l?{...o,pane:l}:o}function L5(o,a){return function(c,f){const k=Bu(),y=o(Wu(c,k),k);return gf(k.map,c.attribution),Y1(y.current,c.eventHandlers),a(y.current,k,c,f),y}}var rs={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var N5=rs.exports,Zd;function R5(){return Zd||(Zd=1,(function(o,a){(function(l,c){c(a)})(N5,(function(l){var c="1.9.4";function f(t){var r,s,p,v;for(s=1,p=arguments.length;s<p;s++){v=arguments[s];for(r in v)t[r]=v[r]}return t}var k=Object.create||(function(){function t(){}return function(r){return t.prototype=r,new t}})();function y(t,r){var s=Array.prototype.slice;if(t.bind)return t.bind.apply(t,s.call(arguments,1));var p=s.call(arguments,2);return function(){return t.apply(r,p.length?p.concat(s.call(arguments)):arguments)}}var x=0;function S(t){return"_leaflet_id"in t||(t._leaflet_id=++x),t._leaflet_id}function b(t,r,s){var p,v,C,B;return B=function(){p=!1,v&&(C.apply(s,v),v=!1)},C=function(){p?v=arguments:(t.apply(s,arguments),setTimeout(B,r),p=!0)},C}function R(t,r,s){var p=r[1],v=r[0],C=p-v;return t===p&&s?t:((t-v)%C+C)%C+v}function E(){return!1}function A(t,r){if(r===!1)return t;var s=Math.pow(10,r===void 0?6:r);return Math.round(t*s)/s}function W(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return W(t).split(/\s+/)}function D(t,r){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?k(t.options):{});for(var s in r)t.options[s]=r[s];return t.options}function F(t,r,s){var p=[];for(var v in t)p.push(encodeURIComponent(s?v.toUpperCase():v)+"="+encodeURIComponent(t[v]));return(!r||r.indexOf("?")===-1?"?":"&")+p.join("&")}var K=/\{ *([\w_ -]+) *\}/g;function q(t,r){return t.replace(K,function(s,p){var v=r[p];if(v===void 0)throw new Error("No value provided for variable "+s);return typeof v=="function"&&(v=v(r)),v})}var ee=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function ce(t,r){for(var s=0;s<t.length;s++)if(t[s]===r)return s;return-1}var fe="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function he(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var de=0;function Pe(t){var r=+new Date,s=Math.max(0,16-(r-de));return de=r+s,window.setTimeout(t,s)}var We=window.requestAnimationFrame||he("RequestAnimationFrame")||Pe,Le=window.cancelAnimationFrame||he("CancelAnimationFrame")||he("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function Ie(t,r,s){if(s&&We===Pe)t.call(r);else return We.call(window,y(t,r))}function _e(t){t&&Le.call(window,t)}var Xe={__proto__:null,extend:f,create:k,bind:y,get lastId(){return x},stamp:S,throttle:b,wrapNum:R,falseFn:E,formatNum:A,trim:W,splitWords:V,setOptions:D,getParamString:F,template:q,isArray:ee,indexOf:ce,emptyImageUrl:fe,requestFn:We,cancelFn:Le,requestAnimFrame:Ie,cancelAnimFrame:_e};function je(){}je.extend=function(t){var r=function(){D(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},s=r.__super__=this.prototype,p=k(s);p.constructor=r,r.prototype=p;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(r[v]=this[v]);return t.statics&&f(r,t.statics),t.includes&&(Ne(t.includes),f.apply(null,[p].concat(t.includes))),f(p,t),delete p.statics,delete p.includes,p.options&&(p.options=s.options?k(s.options):{},f(p.options,t.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){s.callInitHooks&&s.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,B=p._initHooks.length;C<B;C++)p._initHooks[C].call(this)}},r},je.include=function(t){var r=this.prototype.options;return f(this.prototype,t),t.options&&(this.prototype.options=r,this.mergeOptions(t.options)),this},je.mergeOptions=function(t){return f(this.prototype.options,t),this},je.addInitHook=function(t){var r=Array.prototype.slice.call(arguments,1),s=typeof t=="function"?t:function(){this[t].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(s),this};function Ne(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=ee(t)?t:[t];for(var r=0;r<t.length;r++)t[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Se={on:function(t,r,s){if(typeof t=="object")for(var p in t)this._on(p,t[p],r);else{t=V(t);for(var v=0,C=t.length;v<C;v++)this._on(t[v],r,s)}return this},off:function(t,r,s){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var p in t)this._off(p,t[p],r);else{t=V(t);for(var v=arguments.length===1,C=0,B=t.length;C<B;C++)v?this._off(t[C]):this._off(t[C],r,s)}return this},_on:function(t,r,s,p){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(t,r,s)===!1){s===this&&(s=void 0);var v={fn:r,ctx:s};p&&(v.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(v)}},_off:function(t,r,s){var p,v,C;if(this._events&&(p=this._events[t],!!p)){if(arguments.length===1){if(this._firingCount)for(v=0,C=p.length;v<C;v++)p[v].fn=E;delete this._events[t];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var B=this._listens(t,r,s);if(B!==!1){var X=p[B];this._firingCount&&(X.fn=E,this._events[t]=p=p.slice()),p.splice(B,1)}}},fire:function(t,r,s){if(!this.listens(t,s))return this;var p=f({},r,{type:t,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var v=this._events[t];if(v){this._firingCount=this._firingCount+1||1;for(var C=0,B=v.length;C<B;C++){var X=v[C],le=X.fn;X.once&&this.off(t,le,X.ctx),le.call(X.ctx||this,p)}this._firingCount--}}return s&&this._propagateEvent(p),this},listens:function(t,r,s,p){typeof t!="string"&&console.warn('"string" type argument expected');var v=r;typeof r!="function"&&(p=!!r,v=void 0,s=void 0);var C=this._events&&this._events[t];if(C&&C.length&&this._listens(t,v,s)!==!1)return!0;if(p){for(var B in this._eventParents)if(this._eventParents[B].listens(t,r,s,p))return!0}return!1},_listens:function(t,r,s){if(!this._events)return!1;var p=this._events[t]||[];if(!r)return!!p.length;s===this&&(s=void 0);for(var v=0,C=p.length;v<C;v++)if(p[v].fn===r&&p[v].ctx===s)return v;return!1},once:function(t,r,s){if(typeof t=="object")for(var p in t)this._on(p,t[p],r,!0);else{t=V(t);for(var v=0,C=t.length;v<C;v++)this._on(t[v],r,s,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[S(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[S(t)],this},_propagateEvent:function(t){for(var r in this._eventParents)this._eventParents[r].fire(t.type,f({layer:t.target,propagatedFrom:t.target},t),!0)}};Se.addEventListener=Se.on,Se.removeEventListener=Se.clearAllEventListeners=Se.off,Se.addOneTimeEventListener=Se.once,Se.fireEvent=Se.fire,Se.hasEventListeners=Se.listens;var be=je.extend(Se);function U(t,r,s){this.x=s?Math.round(t):t,this.y=s?Math.round(r):r}var ue=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};U.prototype={clone:function(){return new U(this.x,this.y)},add:function(t){return this.clone()._add(ie(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(ie(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new U(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new U(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ue(this.x),this.y=ue(this.y),this},distanceTo:function(t){t=ie(t);var r=t.x-this.x,s=t.y-this.y;return Math.sqrt(r*r+s*s)},equals:function(t){return t=ie(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=ie(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+A(this.x)+", "+A(this.y)+")"}};function ie(t,r,s){return t instanceof U?t:ee(t)?new U(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new U(t.x,t.y):new U(t,r,s)}function j(t,r){if(t)for(var s=r?[t,r]:t,p=0,v=s.length;p<v;p++)this.extend(s[p])}j.prototype={extend:function(t){var r,s;if(!t)return this;if(t instanceof U||typeof t[0]=="number"||"x"in t)r=s=ie(t);else if(t=oe(t),r=t.min,s=t.max,!r||!s)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=s.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(s.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(s.y,this.max.y)),this},getCenter:function(t){return ie((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return ie(this.min.x,this.max.y)},getTopRight:function(){return ie(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var r,s;return typeof t[0]=="number"||t instanceof U?t=ie(t):t=oe(t),t instanceof j?(r=t.min,s=t.max):r=s=t,r.x>=this.min.x&&s.x<=this.max.x&&r.y>=this.min.y&&s.y<=this.max.y},intersects:function(t){t=oe(t);var r=this.min,s=this.max,p=t.min,v=t.max,C=v.x>=r.x&&p.x<=s.x,B=v.y>=r.y&&p.y<=s.y;return C&&B},overlaps:function(t){t=oe(t);var r=this.min,s=this.max,p=t.min,v=t.max,C=v.x>r.x&&p.x<s.x,B=v.y>r.y&&p.y<s.y;return C&&B},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var r=this.min,s=this.max,p=Math.abs(r.x-s.x)*t,v=Math.abs(r.y-s.y)*t;return oe(ie(r.x-p,r.y-v),ie(s.x+p,s.y+v))},equals:function(t){return t?(t=oe(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function oe(t,r){return!t||t instanceof j?t:new j(t,r)}function Re(t,r){if(t)for(var s=r?[t,r]:t,p=0,v=s.length;p<v;p++)this.extend(s[p])}Re.prototype={extend:function(t){var r=this._southWest,s=this._northEast,p,v;if(t instanceof te)p=t,v=t;else if(t instanceof Re){if(p=t._southWest,v=t._northEast,!p||!v)return this}else return t?this.extend(me(t)||Me(t)):this;return!r&&!s?(this._southWest=new te(p.lat,p.lng),this._northEast=new te(v.lat,v.lng)):(r.lat=Math.min(p.lat,r.lat),r.lng=Math.min(p.lng,r.lng),s.lat=Math.max(v.lat,s.lat),s.lng=Math.max(v.lng,s.lng)),this},pad:function(t){var r=this._southWest,s=this._northEast,p=Math.abs(r.lat-s.lat)*t,v=Math.abs(r.lng-s.lng)*t;return new Re(new te(r.lat-p,r.lng-v),new te(s.lat+p,s.lng+v))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof te||"lat"in t?t=me(t):t=Me(t);var r=this._southWest,s=this._northEast,p,v;return t instanceof Re?(p=t.getSouthWest(),v=t.getNorthEast()):p=v=t,p.lat>=r.lat&&v.lat<=s.lat&&p.lng>=r.lng&&v.lng<=s.lng},intersects:function(t){t=Me(t);var r=this._southWest,s=this._northEast,p=t.getSouthWest(),v=t.getNorthEast(),C=v.lat>=r.lat&&p.lat<=s.lat,B=v.lng>=r.lng&&p.lng<=s.lng;return C&&B},overlaps:function(t){t=Me(t);var r=this._southWest,s=this._northEast,p=t.getSouthWest(),v=t.getNorthEast(),C=v.lat>r.lat&&p.lat<s.lat,B=v.lng>r.lng&&p.lng<s.lng;return C&&B},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,r){return t?(t=Me(t),this._southWest.equals(t.getSouthWest(),r)&&this._northEast.equals(t.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Me(t,r){return t instanceof Re?t:new Re(t,r)}function te(t,r,s){if(isNaN(t)||isNaN(r))throw new Error("Invalid LatLng object: ("+t+", "+r+")");this.lat=+t,this.lng=+r,s!==void 0&&(this.alt=+s)}te.prototype={equals:function(t,r){if(!t)return!1;t=me(t);var s=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return s<=(r===void 0?1e-9:r)},toString:function(t){return"LatLng("+A(this.lat,t)+", "+A(this.lng,t)+")"},distanceTo:function(t){return Ae.distance(this,me(t))},wrap:function(){return Ae.wrapLatLng(this)},toBounds:function(t){var r=180*t/40075017,s=r/Math.cos(Math.PI/180*this.lat);return Me([this.lat-r,this.lng-s],[this.lat+r,this.lng+s])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function me(t,r,s){return t instanceof te?t:ee(t)&&typeof t[0]!="object"?t.length===3?new te(t[0],t[1],t[2]):t.length===2?new te(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new te(t.lat,"lng"in t?t.lng:t.lon,t.alt):r===void 0?null:new te(t,r,s)}var Ee={latLngToPoint:function(t,r){var s=this.projection.project(t),p=this.scale(r);return this.transformation._transform(s,p)},pointToLatLng:function(t,r){var s=this.scale(r),p=this.transformation.untransform(t,s);return this.projection.unproject(p)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var r=this.projection.bounds,s=this.scale(t),p=this.transformation.transform(r.min,s),v=this.transformation.transform(r.max,s);return new j(p,v)},infinite:!1,wrapLatLng:function(t){var r=this.wrapLng?R(t.lng,this.wrapLng,!0):t.lng,s=this.wrapLat?R(t.lat,this.wrapLat,!0):t.lat,p=t.alt;return new te(s,r,p)},wrapLatLngBounds:function(t){var r=t.getCenter(),s=this.wrapLatLng(r),p=r.lat-s.lat,v=r.lng-s.lng;if(p===0&&v===0)return t;var C=t.getSouthWest(),B=t.getNorthEast(),X=new te(C.lat-p,C.lng-v),le=new te(B.lat-p,B.lng-v);return new Re(X,le)}},Ae=f({},Ee,{wrapLng:[-180,180],R:6371e3,distance:function(t,r){var s=Math.PI/180,p=t.lat*s,v=r.lat*s,C=Math.sin((r.lat-t.lat)*s/2),B=Math.sin((r.lng-t.lng)*s/2),X=C*C+Math.cos(p)*Math.cos(v)*B*B,le=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*le}}),De=6378137,Ye={R:De,MAX_LATITUDE:85.0511287798,project:function(t){var r=Math.PI/180,s=this.MAX_LATITUDE,p=Math.max(Math.min(s,t.lat),-s),v=Math.sin(p*r);return new U(this.R*t.lng*r,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(t){var r=180/Math.PI;return new te((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*r,t.x*r/this.R)},bounds:(function(){var t=De*Math.PI;return new j([-t,-t],[t,t])})()};function ve(t,r,s,p){if(ee(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=r,this._c=s,this._d=p}ve.prototype={transform:function(t,r){return this._transform(t.clone(),r)},_transform:function(t,r){return r=r||1,t.x=r*(this._a*t.x+this._b),t.y=r*(this._c*t.y+this._d),t},untransform:function(t,r){return r=r||1,new U((t.x/r-this._b)/this._a,(t.y/r-this._d)/this._c)}};function Ue(t,r,s,p){return new ve(t,r,s,p)}var Fe=f({},Ae,{code:"EPSG:3857",projection:Ye,transformation:(function(){var t=.5/(Math.PI*Ye.R);return Ue(t,.5,-t,.5)})()}),st=f({},Fe,{code:"EPSG:900913"});function wn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function mn(t,r){var s="",p,v,C,B,X,le;for(p=0,C=t.length;p<C;p++){for(X=t[p],v=0,B=X.length;v<B;v++)le=X[v],s+=(v?"L":"M")+le.x+" "+le.y;s+=r?He.svg?"z":"x":""}return s||"M0 0"}var Sn=document.documentElement.style,Zn="ActiveXObject"in window,Jt=Zn&&!document.addEventListener,jn="msLaunchUri"in navigator&&!("documentMode"in document),Fn=zt("webkit"),hn=zt("android"),Dt=zt("android 2")||zt("android 3"),Ki=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),$i=hn&&zt("Google")&&Ki<537&&!("AudioNode"in window),Kr=!!window.opera,$r=!jn&&zt("chrome"),Qn=zt("gecko")&&!Fn&&!Kr&&!Zn,Xi=!$r&&zt("safari"),ar=zt("phantom"),Tr="OTransition"in Sn,qi=navigator.platform.indexOf("Win")===0,wr=Zn&&"transition"in Sn,Si="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Dt,So="MozPerspective"in Sn,Yi=!window.L_DISABLE_3D&&(wr||Si||So)&&!Tr&&!ar,sr=typeof orientation<"u"||zt("mobile"),Qi=sr&&Fn,en=sr&&Si,Sr=!window.PointerEvent&&window.MSPointerEvent,bn=!!(window.PointerEvent||Sr),ft="ontouchstart"in window||!!window.TouchEvent,Zr=!window.L_NO_TOUCH&&(ft||bn),Xr=sr&&Kr,br=sr&&Qn,Bn=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,qr=(function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",E,r),window.removeEventListener("testPassiveEventSupport",E,r)}catch{}return t})(),Wn=(function(){return!!document.createElement("canvas").getContext})(),Yr=!!(document.createElementNS&&wn("svg").createSVGRect),ur=!!Yr&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Qr=!Yr&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var r=t.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}})(),Cr=navigator.platform.indexOf("Mac")===0,Zo=navigator.platform.indexOf("Linux")===0;function zt(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var He={ie:Zn,ielt9:Jt,edge:jn,webkit:Fn,android:hn,android23:Dt,androidStock:$i,opera:Kr,chrome:$r,gecko:Qn,safari:Xi,phantom:ar,opera12:Tr,win:qi,ie3d:wr,webkit3d:Si,gecko3d:So,any3d:Yi,mobile:sr,mobileWebkit:Qi,mobileWebkit3d:en,msPointer:Sr,pointer:bn,touch:Zr,touchNative:ft,mobileOpera:Xr,mobileGecko:br,retina:Bn,passiveEvents:qr,canvas:Wn,svg:Yr,vml:Qr,inlineSvg:ur,mac:Cr,linux:Zo},Jr=He.msPointer?"MSPointerDown":"pointerdown",cr=He.msPointer?"MSPointerMove":"pointermove",Ji=He.msPointer?"MSPointerUp":"pointerup",ei=He.msPointer?"MSPointerCancel":"pointercancel",ti={touchstart:Jr,touchmove:cr,touchend:Ji,touchcancel:ei},Jn={touchstart:St,touchmove:ii,touchend:ii,touchcancel:ii},gn={},eo=!1;function to(t,r,s){return r==="touchstart"&&bo(),Jn[r]?(s=Jn[r].bind(this,s),t.addEventListener(ti[r],s,!1),s):(console.warn("wrong event specified:",r),E)}function ni(t,r,s){if(!ti[r]){console.warn("wrong event specified:",r);return}t.removeEventListener(ti[r],s,!1)}function Er(t){gn[t.pointerId]=t}function ri(t){gn[t.pointerId]&&(gn[t.pointerId]=t)}function Zi(t){delete gn[t.pointerId]}function bo(){eo||(document.addEventListener(Jr,Er,!0),document.addEventListener(cr,ri,!0),document.addEventListener(Ji,Zi,!0),document.addEventListener(ei,Zi,!0),eo=!0)}function ii(t,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var s in gn)r.touches.push(gn[s]);r.changedTouches=[r],t(r)}}function St(t,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&Zt(r),ii(t,r)}function Ut(t){var r={},s,p;for(p in t)s=t[p],r[p]=s&&s.bind?s.bind(t):s;return t=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var bi=200;function Ci(t,r){t.addEventListener("dblclick",r);var s=0,p;function v(C){if(C.detail!==1){p=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var B=Gn(C);if(!(B.some(function(le){return le instanceof HTMLLabelElement&&le.attributes.for})&&!B.some(function(le){return le instanceof HTMLInputElement||le instanceof HTMLSelectElement}))){var X=Date.now();X-s<=bi?(p++,p===2&&r(Ut(C))):p=1,s=X}}}return t.addEventListener("click",v),{dblclick:r,simDblclick:v}}function Pr(t,r){t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)}var Ei=J(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),kn=J(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Cn=kn==="webkitTransition"||kn==="OTransition"?kn+"End":"transitionend";function tn(t){return typeof t=="string"?document.getElementById(t):t}function Hn(t,r){var s=t.style[r]||t.currentStyle&&t.currentStyle[r];if((!s||s==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(t,null);s=p?p[r]:null}return s==="auto"?null:s}function et(t,r,s){var p=document.createElement(t);return p.className=r||"",s&&s.appendChild(p),p}function xt(t){var r=t.parentNode;r&&r.removeChild(t)}function Mr(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function er(t){var r=t.parentNode;r&&r.lastChild!==t&&r.appendChild(t)}function nn(t){var r=t.parentNode;r&&r.firstChild!==t&&r.insertBefore(t,r.firstChild)}function pr(t,r){if(t.classList!==void 0)return t.classList.contains(r);var s=w(t);return s.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(s)}function rt(t,r){if(t.classList!==void 0)for(var s=V(r),p=0,v=s.length;p<v;p++)t.classList.add(s[p]);else if(!pr(t,r)){var C=w(t);m(t,(C?C+" ":"")+r)}}function yt(t,r){t.classList!==void 0?t.classList.remove(r):m(t,W((" "+w(t)+" ").replace(" "+r+" "," ")))}function m(t,r){t.className.baseVal===void 0?t.className=r:t.className.baseVal=r}function w(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function M(t,r){"opacity"in t.style?t.style.opacity=r:"filter"in t.style&&O(t,r)}function O(t,r){var s=!1,p="DXImageTransform.Microsoft.Alpha";try{s=t.filters.item(p)}catch{if(r===1)return}r=Math.round(r*100),s?(s.Enabled=r!==100,s.Opacity=r):t.style.filter+=" progid:"+p+"(opacity="+r+")"}function J(t){for(var r=document.documentElement.style,s=0;s<t.length;s++)if(t[s]in r)return t[s];return!1}function $(t,r,s){var p=r||new U(0,0);t.style[Ei]=(He.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(s?" scale("+s+")":"")}function se(t,r){t._leaflet_pos=r,He.any3d?$(t,r):(t.style.left=r.x+"px",t.style.top=r.y+"px")}function xe(t){return t._leaflet_pos||new U(0,0)}var Ce,qe,ot;if("onselectstart"in document)Ce=function(){Qe(window,"selectstart",Zt)},qe=function(){Tt(window,"selectstart",Zt)};else{var gt=J(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ce=function(){if(gt){var t=document.documentElement.style;ot=t[gt],t[gt]="none"}},qe=function(){gt&&(document.documentElement.style[gt]=ot,ot=void 0)}}function rn(){Qe(window,"dragstart",Zt)}function on(){Tt(window,"dragstart",Zt)}var jt,Vn;function ln(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Kt(),jt=t,Vn=t.style.outlineStyle,t.style.outlineStyle="none",Qe(window,"keydown",Kt))}function Kt(){jt&&(jt.style.outlineStyle=Vn,jt=void 0,Vn=void 0,Tt(window,"keydown",Kt))}function $t(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function vn(t){var r=t.getBoundingClientRect();return{x:r.width/t.offsetWidth||1,y:r.height/t.offsetHeight||1,boundingClientRect:r}}var En={__proto__:null,TRANSFORM:Ei,TRANSITION:kn,TRANSITION_END:Cn,get:tn,getStyle:Hn,create:et,remove:xt,empty:Mr,toFront:er,toBack:nn,hasClass:pr,addClass:rt,removeClass:yt,setClass:m,getClass:w,setOpacity:M,testProp:J,setTransform:$,setPosition:se,getPosition:xe,get disableTextSelection(){return Ce},get enableTextSelection(){return qe},disableImageDrag:rn,enableImageDrag:on,preventOutline:ln,restoreOutline:Kt,getSizedParentNode:$t,getScale:vn};function Qe(t,r,s,p){if(r&&typeof r=="object")for(var v in r)ul(t,v,r[v],s);else{r=V(r);for(var C=0,B=r.length;C<B;C++)ul(t,r[C],s,p)}return this}var Ft="_leaflet_events";function Tt(t,r,s,p){if(arguments.length===1)sl(t),delete t[Ft];else if(r&&typeof r=="object")for(var v in r)Pn(t,v,r[v],s);else if(r=V(r),arguments.length===2)sl(t,function(X){return ce(r,X)!==-1});else for(var C=0,B=r.length;C<B;C++)Pn(t,r[C],s,p);return this}function sl(t,r){for(var s in t[Ft]){var p=s.split(/\d/)[0];(!r||r(p))&&Pn(t,p,null,null,s)}}var oi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ul(t,r,s,p){var v=r+S(s)+(p?"_"+S(p):"");if(t[Ft]&&t[Ft][v])return this;var C=function(X){return s.call(p||t,X||window.event)},B=C;!He.touchNative&&He.pointer&&r.indexOf("touch")===0?C=to(t,r,C):He.touch&&r==="dblclick"?C=Ci(t,C):"addEventListener"in t?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?t.addEventListener(oi[r]||r,C,He.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(C=function(X){X=X||window.event,Pi(t,X)&&B(X)},t.addEventListener(oi[r],C,!1)):t.addEventListener(r,B,!1):t.attachEvent("on"+r,C),t[Ft]=t[Ft]||{},t[Ft][v]=C}function Pn(t,r,s,p,v){v=v||r+S(s)+(p?"_"+S(p):"");var C=t[Ft]&&t[Ft][v];if(!C)return this;!He.touchNative&&He.pointer&&r.indexOf("touch")===0?ni(t,r,C):He.touch&&r==="dblclick"?Pr(t,C):"removeEventListener"in t?t.removeEventListener(oi[r]||r,C,!1):t.detachEvent("on"+r,C),t[Ft][v]=null}function Mn(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function li(t){return ul(t,"wheel",Mn),this}function kt(t){return Qe(t,"mousedown touchstart dblclick contextmenu",Mn),t._leaflet_disable_click=!0,this}function Zt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function an(t){return Zt(t),Mn(t),this}function Gn(t){if(t.composedPath)return t.composedPath();for(var r=[],s=t.target;s;)r.push(s),s=s.parentNode;return r}function Ln(t,r){if(!r)return new U(t.clientX,t.clientY);var s=vn(r),p=s.boundingClientRect;return new U((t.clientX-p.left)/s.x-r.clientLeft,(t.clientY-p.top)/s.y-r.clientTop)}var Co=He.linux&&He.chrome?window.devicePixelRatio:He.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Lr(t){return He.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/Co:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function Pi(t,r){var s=r.relatedTarget;if(!s)return!0;try{for(;s&&s!==t;)s=s.parentNode}catch{return!1}return s!==t}var Mi={__proto__:null,on:Qe,off:Tt,stopPropagation:Mn,disableScrollPropagation:li,disableClickPropagation:kt,preventDefault:Zt,stop:an,getPropagationPath:Gn,getMousePosition:Ln,getWheelDelta:Lr,isExternalTarget:Pi,addListener:Qe,removeListener:Tt},Li=be.extend({run:function(t,r,s,p){this.stop(),this._el=t,this._inProgress=!0,this._duration=s||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=xe(t),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Ie(this._animate,this),this._step()},_step:function(t){var r=+new Date-this._startTime,s=this._duration*1e3;r<s?this._runFrame(this._easeOut(r/s),t):(this._runFrame(1),this._complete())},_runFrame:function(t,r){var s=this._startPos.add(this._offset.multiplyBy(t));r&&s._round(),se(this._el,s),this.fire("step")},_complete:function(){_e(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),dt=be.extend({options:{crs:Fe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,r){r=D(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=y(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(me(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=kn&&He.any3d&&!He.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Qe(this._proxy,Cn,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,r,s){if(r=r===void 0?this._zoom:this._limitZoom(r),t=this._limitCenter(me(t),r,this.options.maxBounds),s=s||{},this._stop(),this._loaded&&!s.reset&&s!==!0){s.animate!==void 0&&(s.zoom=f({animate:s.animate},s.zoom),s.pan=f({animate:s.animate,duration:s.duration},s.pan));var p=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,r,s.zoom):this._tryAnimatedPan(t,s.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(t,r,s.pan&&s.pan.noMoveStart),this},setZoom:function(t,r){return this._loaded?this.setView(this.getCenter(),t,{zoom:r}):(this._zoom=t,this)},zoomIn:function(t,r){return t=t||(He.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,r)},zoomOut:function(t,r){return t=t||(He.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,r)},setZoomAround:function(t,r,s){var p=this.getZoomScale(r),v=this.getSize().divideBy(2),C=t instanceof U?t:this.latLngToContainerPoint(t),B=C.subtract(v).multiplyBy(1-1/p),X=this.containerPointToLatLng(v.add(B));return this.setView(X,r,{zoom:s})},_getBoundsCenterZoom:function(t,r){r=r||{},t=t.getBounds?t.getBounds():Me(t);var s=ie(r.paddingTopLeft||r.padding||[0,0]),p=ie(r.paddingBottomRight||r.padding||[0,0]),v=this.getBoundsZoom(t,!1,s.add(p));if(v=typeof r.maxZoom=="number"?Math.min(r.maxZoom,v):v,v===1/0)return{center:t.getCenter(),zoom:v};var C=p.subtract(s).divideBy(2),B=this.project(t.getSouthWest(),v),X=this.project(t.getNorthEast(),v),le=this.unproject(B.add(X).divideBy(2).add(C),v);return{center:le,zoom:v}},fitBounds:function(t,r){if(t=Me(t),!t.isValid())throw new Error("Bounds are not valid.");var s=this._getBoundsCenterZoom(t,r);return this.setView(s.center,s.zoom,r)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,r){return this.setView(t,this._zoom,{pan:r})},panBy:function(t,r){if(t=ie(t).round(),r=r||{},!t.x&&!t.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Li,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){rt(this._mapPane,"leaflet-pan-anim");var s=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,s,r.duration||.25,r.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,r,s){if(s=s||{},s.animate===!1||!He.any3d)return this.setView(t,r,s);this._stop();var p=this.project(this.getCenter()),v=this.project(t),C=this.getSize(),B=this._zoom;t=me(t),r=r===void 0?B:r;var X=Math.max(C.x,C.y),le=X*this.getZoomScale(B,r),ge=v.distanceTo(p)||1,Oe=1.42,Je=Oe*Oe;function ut(wt){var Wo=wt?-1:1,tc=wt?le:X,nc=le*le-X*X+Wo*Je*Je*ge*ge,so=2*tc*Je*ge,uo=nc/so,co=Math.sqrt(uo*uo+1)-uo,na=co<1e-9?-18:Math.log(co);return na}function qt(wt){return(Math.exp(wt)-Math.exp(-wt))/2}function Vt(wt){return(Math.exp(wt)+Math.exp(-wt))/2}function $n(wt){return qt(wt)/Vt(wt)}var In=ut(0);function Fo(wt){return X*(Vt(In)/Vt(In+Oe*wt))}function ja(wt){return X*(Vt(In)*$n(In+Oe*wt)-qt(In))/Je}function zi(wt){return 1-Math.pow(1-wt,1.5)}var Cs=Date.now(),ao=(ut(1)-In)/Oe,zr=s.duration?1e3*s.duration:1e3*ao*.8;function Bo(){var wt=(Date.now()-Cs)/zr,Wo=zi(wt)*ao;wt<=1?(this._flyToFrame=Ie(Bo,this),this._move(this.unproject(p.add(v.subtract(p).multiplyBy(ja(Wo)/ge)),B),this.getScaleZoom(X/Fo(Wo),B),{flyTo:!0})):this._move(t,r)._moveEnd(!0)}return this._moveStart(!0,s.noMoveStart),Bo.call(this),this},flyToBounds:function(t,r){var s=this._getBoundsCenterZoom(t,r);return this.flyTo(s.center,s.zoom,r)},setMaxBounds:function(t){return t=Me(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var r=this.options.minZoom;return this.options.minZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var r=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,r){this._enforcingBounds=!0;var s=this.getCenter(),p=this._limitCenter(s,this._zoom,Me(t));return s.equals(p)||this.panTo(p,r),this._enforcingBounds=!1,this},panInside:function(t,r){r=r||{};var s=ie(r.paddingTopLeft||r.padding||[0,0]),p=ie(r.paddingBottomRight||r.padding||[0,0]),v=this.project(this.getCenter()),C=this.project(t),B=this.getPixelBounds(),X=oe([B.min.add(s),B.max.subtract(p)]),le=X.getSize();if(!X.contains(C)){this._enforcingBounds=!0;var ge=C.subtract(X.getCenter()),Oe=X.extend(C).getSize().subtract(le);v.x+=ge.x<0?-Oe.x:Oe.x,v.y+=ge.y<0?-Oe.y:Oe.y,this.panTo(this.unproject(v),r),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=f({animate:!1,pan:!0},t===!0?{animate:!0}:t);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var s=this.getSize(),p=r.divideBy(2).round(),v=s.divideBy(2).round(),C=p.subtract(v);return!C.x&&!C.y?this:(t.animate&&t.pan?this.panBy(C):(t.pan&&this._rawPanBy(C),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(y(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:s}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=f({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=y(this._handleGeolocationResponse,this),s=y(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,s,t):navigator.geolocation.getCurrentPosition(r,s,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var r=t.code,s=t.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+s+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var r=t.coords.latitude,s=t.coords.longitude,p=new te(r,s),v=p.toBounds(t.coords.accuracy*2),C=this._locateOptions;if(C.setView){var B=this.getBoundsZoom(v);this.setView(p,C.maxZoom?Math.min(B,C.maxZoom):B)}var X={latlng:p,bounds:v,timestamp:t.timestamp};for(var le in t.coords)typeof t.coords[le]=="number"&&(X[le]=t.coords[le]);this.fire("locationfound",X)}},addHandler:function(t,r){if(!r)return this;var s=this[t]=new r(this);return this._handlers.push(s),this.options[t]&&s.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),xt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(_e(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)xt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,r){var s="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),p=et("div",s,r||this._mapPane);return t&&(this._panes[t]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),r=this.unproject(t.getBottomLeft()),s=this.unproject(t.getTopRight());return new Re(r,s)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,r,s){t=Me(t),s=ie(s||[0,0]);var p=this.getZoom()||0,v=this.getMinZoom(),C=this.getMaxZoom(),B=t.getNorthWest(),X=t.getSouthEast(),le=this.getSize().subtract(s),ge=oe(this.project(X,p),this.project(B,p)).getSize(),Oe=He.any3d?this.options.zoomSnap:1,Je=le.x/ge.x,ut=le.y/ge.y,qt=r?Math.max(Je,ut):Math.min(Je,ut);return p=this.getScaleZoom(qt,p),Oe&&(p=Math.round(p/(Oe/100))*(Oe/100),p=r?Math.ceil(p/Oe)*Oe:Math.floor(p/Oe)*Oe),Math.max(v,Math.min(C,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new U(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,r){var s=this._getTopLeftPoint(t,r);return new j(s,s.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,r){var s=this.options.crs;return r=r===void 0?this._zoom:r,s.scale(t)/s.scale(r)},getScaleZoom:function(t,r){var s=this.options.crs;r=r===void 0?this._zoom:r;var p=s.zoom(t*s.scale(r));return isNaN(p)?1/0:p},project:function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(me(t),r)},unproject:function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(ie(t),r)},layerPointToLatLng:function(t){var r=ie(t).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(t){var r=this.project(me(t))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(me(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(Me(t))},distance:function(t,r){return this.options.crs.distance(me(t),me(r))},containerPointToLayerPoint:function(t){return ie(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return ie(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var r=this.containerPointToLayerPoint(ie(t));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(me(t)))},mouseEventToContainerPoint:function(t){return Ln(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var r=this._container=tn(t);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Qe(r,"scroll",this._onScroll,this),this._containerId=S(r)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&He.any3d,rt(t,"leaflet-container"+(He.touch?" leaflet-touch":"")+(He.retina?" leaflet-retina":"")+(He.ielt9?" leaflet-oldie":"")+(He.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=Hn(t,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),se(this._mapPane,new U(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(rt(t.markerPane,"leaflet-zoom-hide"),rt(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,r,s){se(this._mapPane,new U(0,0));var p=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var v=this._zoom!==r;this._moveStart(v,s)._move(t,r)._moveEnd(v),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(t,r){return t&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(t,r,s,p){r===void 0&&(r=this._zoom);var v=this._zoom!==r;return this._zoom=r,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),p?s&&s.pinch&&this.fire("zoom",s):((v||s&&s.pinch)&&this.fire("zoom",s),this.fire("move",s)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return _e(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){se(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[S(this._container)]=this;var r=t?Tt:Qe;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),He.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){_e(this._resizeRequest),this._resizeRequest=Ie(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,r){for(var s=[],p,v=r==="mouseout"||r==="mouseover",C=t.target||t.srcElement,B=!1;C;){if(p=this._targets[S(C)],p&&(r==="click"||r==="preclick")&&this._draggableMoved(p)){B=!0;break}if(p&&p.listens(r,!0)&&(v&&!Pi(C,t)||(s.push(p),v))||C===this._container)break;C=C.parentNode}return!s.length&&!B&&!v&&this.listens(r,!0)&&(s=[this]),s},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var r=t.target||t.srcElement;if(!(!this._loaded||r._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(r))){var s=t.type;s==="mousedown"&&ln(r),this._fireDOMEvent(t,s)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,r,s){if(t.type==="click"){var p=f({},t);p.type="preclick",this._fireDOMEvent(p,p.type,s)}var v=this._findEventTargets(t,r);if(s){for(var C=[],B=0;B<s.length;B++)s[B].listens(r,!0)&&C.push(s[B]);v=C.concat(v)}if(v.length){r==="contextmenu"&&Zt(t);var X=v[0],le={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var ge=X.getLatLng&&(!X._radius||X._radius<=10);le.containerPoint=ge?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(t),le.layerPoint=this.containerPointToLayerPoint(le.containerPoint),le.latlng=ge?X.getLatLng():this.layerPointToLatLng(le.layerPoint)}for(B=0;B<v.length;B++)if(v[B].fire(r,le,!0),le.originalEvent._stopped||v[B].options.bubblingMouseEvents===!1&&ce(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,r=this._handlers.length;t<r;t++)this._handlers[t].disable()},whenReady:function(t,r){return this._loaded?t.call(r||this,{target:this}):this.on("load",t,r),this},_getMapPanePos:function(){return xe(this._mapPane)||new U(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,r){var s=t&&r!==void 0?this._getNewPixelOrigin(t,r):this.getPixelOrigin();return s.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,r){var s=this.getSize()._divideBy(2);return this.project(t,r)._subtract(s)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,r,s){var p=this._getNewPixelOrigin(s,r);return this.project(t,r)._subtract(p)},_latLngBoundsToNewLayerBounds:function(t,r,s){var p=this._getNewPixelOrigin(s,r);return oe([this.project(t.getSouthWest(),r)._subtract(p),this.project(t.getNorthWest(),r)._subtract(p),this.project(t.getSouthEast(),r)._subtract(p),this.project(t.getNorthEast(),r)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,r,s){if(!s)return t;var p=this.project(t,r),v=this.getSize().divideBy(2),C=new j(p.subtract(v),p.add(v)),B=this._getBoundsOffset(C,s,r);return Math.abs(B.x)<=1&&Math.abs(B.y)<=1?t:this.unproject(p.add(B),r)},_limitOffset:function(t,r){if(!r)return t;var s=this.getPixelBounds(),p=new j(s.min.add(t),s.max.add(t));return t.add(this._getBoundsOffset(p,r))},_getBoundsOffset:function(t,r,s){var p=oe(this.project(r.getNorthEast(),s),this.project(r.getSouthWest(),s)),v=p.min.subtract(t.min),C=p.max.subtract(t.max),B=this._rebound(v.x,-C.x),X=this._rebound(v.y,-C.y);return new U(B,X)},_rebound:function(t,r){return t+r>0?Math.round(t-r)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(r))},_limitZoom:function(t){var r=this.getMinZoom(),s=this.getMaxZoom(),p=He.any3d?this.options.zoomSnap:1;return p&&(t=Math.round(t/p)*p),Math.max(r,Math.min(s,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){yt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,r){var s=this._getCenterOffset(t)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(s)?!1:(this.panBy(s,r),!0)},_createAnimProxy:function(){var t=this._proxy=et("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(r){var s=Ei,p=this._proxy.style[s];$(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),p===this._proxy.style[s]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){xt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),r=this.getZoom();$(this._proxy,this.project(t,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,r,s){if(this._animatingZoom)return!0;if(s=s||{},!this._zoomAnimated||s.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(r),v=this._getCenterOffset(t)._divideBy(1-1/p);return s.animate!==!0&&!this.getSize().contains(v)?!1:(Ie(function(){this._moveStart(!0,s.noMoveStart||!1)._animateZoom(t,r,!0)},this),!0)},_animateZoom:function(t,r,s,p){this._mapPane&&(s&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=r,rt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:r,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(y(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&yt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function dr(t,r){return new dt(t,r)}var sn=je.extend({options:{position:"topright"},initialize:function(t){D(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var r=this._map;return r&&r.removeControl(this),this.options.position=t,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var r=this._container=this.onAdd(t),s=this.getPosition(),p=t._controlCorners[s];return rt(r,"leaflet-control"),s.indexOf("bottom")!==-1?p.insertBefore(r,p.firstChild):p.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(xt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),Nr=function(t){return new sn(t)};dt.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},r="leaflet-",s=this._controlContainer=et("div",r+"control-container",this._container);function p(v,C){var B=r+v+" "+r+C;t[v+C]=et("div",B,s)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)xt(this._controlCorners[t]);xt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var cl=sn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,r,s,p){return s<p?-1:p<s?1:0}},initialize:function(t,r,s){D(this,s),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var p in t)this._addLayer(t[p],p);for(p in r)this._addLayer(r[p],p,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return sn.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,r){return this._addLayer(t,r),this._map?this._update():this},addOverlay:function(t,r){return this._addLayer(t,r,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var r=this._getLayer(S(t));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){rt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(rt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):yt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return yt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",r=this._container=et("div",t),s=this.options.collapsed;r.setAttribute("aria-haspopup",!0),kt(r),li(r);var p=this._section=et("section",t+"-list");s&&(this._map.on("click",this.collapse,this),Qe(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=et("a",t+"-toggle",r);v.href="#",v.title="Layers",v.setAttribute("role","button"),Qe(v,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){Zt(C),this._expandSafely()}},this),s||this.expand(),this._baseLayersList=et("div",t+"-base",p),this._separator=et("div",t+"-separator",p),this._overlaysList=et("div",t+"-overlays",p),r.appendChild(p)},_getLayer:function(t){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&S(this._layers[r].layer)===t)return this._layers[r]},_addLayer:function(t,r,s){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:r,overlay:s}),this.options.sortLayers&&this._layers.sort(y(function(p,v){return this.options.sortFunction(p.layer,v.layer,p.name,v.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Mr(this._baseLayersList),Mr(this._overlaysList),this._layerControlInputs=[];var t,r,s,p,v=0;for(s=0;s<this._layers.length;s++)p=this._layers[s],this._addItem(p),r=r||p.overlay,t=t||!p.overlay,v+=p.overlay?0:1;return this.options.hideSingleBase&&(t=t&&v>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=r&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var r=this._getLayer(S(t.target)),s=r.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;s&&this._map.fire(s,r)},_createRadioElement:function(t,r){var s='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(r?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=s,p.firstChild},_addItem:function(t){var r=document.createElement("label"),s=this._map.hasLayer(t.layer),p;t.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=s):p=this._createRadioElement("leaflet-base-layers_"+S(this),s),this._layerControlInputs.push(p),p.layerId=S(t.layer),Qe(p,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+t.name;var C=document.createElement("span");r.appendChild(C),C.appendChild(p),C.appendChild(v);var B=t.overlay?this._overlaysList:this._baseLayersList;return B.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,r,s,p=[],v=[];this._handlingClick=!0;for(var C=t.length-1;C>=0;C--)r=t[C],s=this._getLayer(r.layerId).layer,r.checked?p.push(s):r.checked||v.push(s);for(C=0;C<v.length;C++)this._map.hasLayer(v[C])&&this._map.removeLayer(v[C]);for(C=0;C<p.length;C++)this._map.hasLayer(p[C])||this._map.addLayer(p[C]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,r,s,p=this._map.getZoom(),v=t.length-1;v>=0;v--)r=t[v],s=this._getLayer(r.layerId).layer,r.disabled=s.options.minZoom!==void 0&&p<s.options.minZoom||s.options.maxZoom!==void 0&&p>s.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,Qe(t,"click",Zt),this.expand();var r=this;setTimeout(function(){Tt(t,"click",Zt),r._preventClick=!1})}}),ai=function(t,r,s){return new cl(t,r,s)},si=sn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var r="leaflet-control-zoom",s=et("div",r+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,r+"-in",s,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,r+"-out",s,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),s},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,r,s,p,v){var C=et("a",s,p);return C.innerHTML=t,C.href="#",C.title=r,C.setAttribute("role","button"),C.setAttribute("aria-label",r),kt(C),Qe(C,"click",an),Qe(C,"click",v,this),Qe(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var t=this._map,r="leaflet-disabled";yt(this._zoomInButton,r),yt(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(rt(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(rt(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});dt.mergeOptions({zoomControl:!0}),dt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new si,this.addControl(this.zoomControl))});var no=function(t){return new si(t)},Ht=sn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var r="leaflet-control-scale",s=et("div",r),p=this.options;return this._addScales(p,r+"-line",s),t.on(p.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),s},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,r,s){t.metric&&(this._mScale=et("div",r,s)),t.imperial&&(this._iScale=et("div",r,s))},_update:function(){var t=this._map,r=t.getSize().y/2,s=t.distance(t.containerPointToLatLng([0,r]),t.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(s)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var r=this._getRoundNum(t),s=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,s,r/t)},_updateImperial:function(t){var r=t*3.2808399,s,p,v;r>5280?(s=r/5280,p=this._getRoundNum(s),this._updateScale(this._iScale,p+" mi",p/s)):(v=this._getRoundNum(r),this._updateScale(this._iScale,v+" ft",v/r))},_updateScale:function(t,r,s){t.style.width=Math.round(this.options.maxWidth*s)+"px",t.innerHTML=r},_getRoundNum:function(t){var r=Math.pow(10,(Math.floor(t)+"").length-1),s=t/r;return s=s>=10?10:s>=5?5:s>=3?3:s>=2?2:1,r*s}}),Ni=function(t){return new Ht(t)},ui='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ci=sn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(He.inlineSvg?ui+" ":"")+"Leaflet</a>"},initialize:function(t){D(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=et("div","leaflet-control-attribution"),kt(this._container);for(var r in t._layers)t._layers[r].getAttribution&&this.addAttribution(t._layers[r].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var r in this._attributions)this._attributions[r]&&t.push(r);var s=[];this.options.prefix&&s.push(this.options.prefix),t.length&&s.push(t.join(", ")),this._container.innerHTML=s.join(' <span aria-hidden="true">|</span> ')}}});dt.mergeOptions({attributionControl:!0}),dt.addInitHook(function(){this.options.attributionControl&&new ci().addTo(this)});var pl=function(t){return new ci(t)};sn.Layers=cl,sn.Zoom=si,sn.Scale=Ht,sn.Attribution=ci,Nr.layers=ai,Nr.zoom=no,Nr.scale=Ni,Nr.attribution=pl;var Xt=je.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Xt.addTo=function(t,r){return t.addHandler(r,this),this};var pi={Events:Se},fr=He.touch?"touchstart mousedown":"mousedown",Nn=be.extend({options:{clickTolerance:3},initialize:function(t,r,s,p){D(this,p),this._element=t,this._dragStartTarget=r||t,this._preventOutline=s},enable:function(){this._enabled||(Qe(this._dragStartTarget,fr,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Nn._dragging===this&&this.finishDrag(!0),Tt(this._dragStartTarget,fr,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!pr(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Nn._dragging===this&&this.finishDrag();return}if(!(Nn._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Nn._dragging=this,this._preventOutline&&ln(this._element),rn(),Ce(),!this._moving)){this.fire("down");var r=t.touches?t.touches[0]:t,s=$t(this._element);this._startPoint=new U(r.clientX,r.clientY),this._startPos=xe(this._element),this._parentScale=vn(s);var p=t.type==="mousedown";Qe(document,p?"mousemove":"touchmove",this._onMove,this),Qe(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var r=t.touches&&t.touches.length===1?t.touches[0]:t,s=new U(r.clientX,r.clientY)._subtract(this._startPoint);!s.x&&!s.y||Math.abs(s.x)+Math.abs(s.y)<this.options.clickTolerance||(s.x/=this._parentScale.x,s.y/=this._parentScale.y,Zt(t),this._moved||(this.fire("dragstart"),this._moved=!0,rt(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),rt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),se(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){yt(document.body,"leaflet-dragging"),this._lastTarget&&(yt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Tt(document,"mousemove touchmove",this._onMove,this),Tt(document,"mouseup touchend touchcancel",this._onUp,this),on(),qe();var r=this._moved&&this._moving;this._moving=!1,Nn._dragging=!1,r&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Eo(t,r,s){var p,v=[1,4,2,8],C,B,X,le,ge,Oe,Je,ut;for(C=0,Oe=t.length;C<Oe;C++)t[C]._code=Rr(t[C],r);for(X=0;X<4;X++){for(Je=v[X],p=[],C=0,Oe=t.length,B=Oe-1;C<Oe;B=C++)le=t[C],ge=t[B],le._code&Je?ge._code&Je||(ut=di(ge,le,Je,r,s),ut._code=Rr(ut,r),p.push(ut)):(ge._code&Je&&(ut=di(ge,le,Je,r,s),ut._code=Rr(ut,r),p.push(ut)),p.push(le));t=p}return t}function dl(t,r){var s,p,v,C,B,X,le,ge,Oe;if(!t||t.length===0)throw new Error("latlngs not passed");un(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var Je=me([0,0]),ut=Me(t),qt=ut.getNorthWest().distanceTo(ut.getSouthWest())*ut.getNorthEast().distanceTo(ut.getNorthWest());qt<1700&&(Je=ro(t));var Vt=t.length,$n=[];for(s=0;s<Vt;s++){var In=me(t[s]);$n.push(r.project(me([In.lat-Je.lat,In.lng-Je.lng])))}for(X=le=ge=0,s=0,p=Vt-1;s<Vt;p=s++)v=$n[s],C=$n[p],B=v.y*C.x-C.y*v.x,le+=(v.x+C.x)*B,ge+=(v.y+C.y)*B,X+=B*3;X===0?Oe=$n[0]:Oe=[le/X,ge/X];var Fo=r.unproject(ie(Oe));return me([Fo.lat+Je.lat,Fo.lng+Je.lng])}function ro(t){for(var r=0,s=0,p=0,v=0;v<t.length;v++){var C=me(t[v]);r+=C.lat,s+=C.lng,p++}return me([r/p,s/p])}var yn={__proto__:null,clipPolygon:Eo,polygonCenter:dl,centroid:ro};function io(t,r){if(!r||!t.length)return t.slice();var s=r*r;return t=Vl(t,s),t=Hl(t,s),t}function Po(t,r,s){return Math.sqrt(Ir(t,r,s,!0))}function Ea(t,r,s){return Ir(t,r,s)}function Hl(t,r){var s=t.length,p=typeof Uint8Array<"u"?Uint8Array:Array,v=new p(s);v[0]=v[s-1]=1,Ri(t,v,r,0,s-1);var C,B=[];for(C=0;C<s;C++)v[C]&&B.push(t[C]);return B}function Ri(t,r,s,p,v){var C=0,B,X,le;for(X=p+1;X<=v-1;X++)le=Ir(t[X],t[p],t[v],!0),le>C&&(B=X,C=le);C>s&&(r[B]=1,Ri(t,r,s,p,B),Ri(t,r,s,B,v))}function Vl(t,r){for(var s=[t[0]],p=1,v=0,C=t.length;p<C;p++)Gl(t[p],t[v])>r&&(s.push(t[p]),v=p);return v<C-1&&s.push(t[C-1]),s}var Mo;function oo(t,r,s,p,v){var C=p?Mo:Rr(t,s),B=Rr(r,s),X,le,ge;for(Mo=B;;){if(!(C|B))return[t,r];if(C&B)return!1;X=C||B,le=di(t,r,X,s,v),ge=Rr(le,s),X===C?(t=le,C=ge):(r=le,B=ge)}}function di(t,r,s,p,v){var C=r.x-t.x,B=r.y-t.y,X=p.min,le=p.max,ge,Oe;return s&8?(ge=t.x+C*(le.y-t.y)/B,Oe=le.y):s&4?(ge=t.x+C*(X.y-t.y)/B,Oe=X.y):s&2?(ge=le.x,Oe=t.y+B*(le.x-t.x)/C):s&1&&(ge=X.x,Oe=t.y+B*(X.x-t.x)/C),new U(ge,Oe,v)}function Rr(t,r){var s=0;return t.x<r.min.x?s|=1:t.x>r.max.x&&(s|=2),t.y<r.min.y?s|=4:t.y>r.max.y&&(s|=8),s}function Gl(t,r){var s=r.x-t.x,p=r.y-t.y;return s*s+p*p}function Ir(t,r,s,p){var v=r.x,C=r.y,B=s.x-v,X=s.y-C,le=B*B+X*X,ge;return le>0&&(ge=((t.x-v)*B+(t.y-C)*X)/le,ge>1?(v=s.x,C=s.y):ge>0&&(v+=B*ge,C+=X*ge)),B=t.x-v,X=t.y-C,p?B*B+X*X:new U(v,C)}function un(t){return!ee(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function fl(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),un(t)}function h(t,r){var s,p,v,C,B,X,le,ge;if(!t||t.length===0)throw new Error("latlngs not passed");un(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var Oe=me([0,0]),Je=Me(t),ut=Je.getNorthWest().distanceTo(Je.getSouthWest())*Je.getNorthEast().distanceTo(Je.getNorthWest());ut<1700&&(Oe=ro(t));var qt=t.length,Vt=[];for(s=0;s<qt;s++){var $n=me(t[s]);Vt.push(r.project(me([$n.lat-Oe.lat,$n.lng-Oe.lng])))}for(s=0,p=0;s<qt-1;s++)p+=Vt[s].distanceTo(Vt[s+1])/2;if(p===0)ge=Vt[0];else for(s=0,C=0;s<qt-1;s++)if(B=Vt[s],X=Vt[s+1],v=B.distanceTo(X),C+=v,C>p){le=(C-p)/v,ge=[X.x-le*(X.x-B.x),X.y-le*(X.y-B.y)];break}var In=r.unproject(ie(ge));return me([In.lat+Oe.lat,In.lng+Oe.lng])}var T={__proto__:null,simplify:io,pointToSegmentDistance:Po,closestPointOnSegment:Ea,clipSegment:oo,_getEdgeIntersection:di,_getBitCode:Rr,_sqClosestPointOnSegment:Ir,isFlat:un,_flat:fl,polylineCenter:h},N={project:function(t){return new U(t.lng,t.lat)},unproject:function(t){return new te(t.y,t.x)},bounds:new j([-180,-90],[180,90])},I={R:6378137,R_MINOR:6356752314245179e-9,bounds:new j([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var r=Math.PI/180,s=this.R,p=t.lat*r,v=this.R_MINOR/s,C=Math.sqrt(1-v*v),B=C*Math.sin(p),X=Math.tan(Math.PI/4-p/2)/Math.pow((1-B)/(1+B),C/2);return p=-s*Math.log(Math.max(X,1e-10)),new U(t.lng*r*s,p)},unproject:function(t){for(var r=180/Math.PI,s=this.R,p=this.R_MINOR/s,v=Math.sqrt(1-p*p),C=Math.exp(-t.y/s),B=Math.PI/2-2*Math.atan(C),X=0,le=.1,ge;X<15&&Math.abs(le)>1e-7;X++)ge=v*Math.sin(B),ge=Math.pow((1-ge)/(1+ge),v/2),le=Math.PI/2-2*Math.atan(C*ge)-B,B+=le;return new te(B*r,t.x*r/s)}},ne={__proto__:null,LonLat:N,Mercator:I,SphericalMercator:Ye},Y=f({},Ae,{code:"EPSG:3395",projection:I,transformation:(function(){var t=.5/(Math.PI*I.R);return Ue(t,.5,-t,.5)})()}),pe=f({},Ae,{code:"EPSG:4326",projection:N,transformation:Ue(1/180,1,-1/180,.5)}),we=f({},Ee,{projection:N,transformation:Ue(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,r){var s=r.lng-t.lng,p=r.lat-t.lat;return Math.sqrt(s*s+p*p)},infinite:!0});Ee.Earth=Ae,Ee.EPSG3395=Y,Ee.EPSG3857=Fe,Ee.EPSG900913=st,Ee.EPSG4326=pe,Ee.Simple=we;var Ge=be.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[S(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[S(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var r=t.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var s=this.getEvents();r.on(s,this),this.once("remove",function(){r.off(s,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});dt.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var r=S(t);return this._layers[r]?this:(this._layers[r]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var r=S(t);return this._layers[r]?(this._loaded&&t.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return S(t)in this._layers},eachLayer:function(t,r){for(var s in this._layers)t.call(r,this._layers[s]);return this},_addLayers:function(t){t=t?ee(t)?t:[t]:[];for(var r=0,s=t.length;r<s;r++)this.addLayer(t[r])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[S(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var r=S(t);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,r=-1/0,s=this._getZoomSpan();for(var p in this._zoomBoundLayers){var v=this._zoomBoundLayers[p].options;t=v.minZoom===void 0?t:Math.min(t,v.minZoom),r=v.maxZoom===void 0?r:Math.max(r,v.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=t===1/0?void 0:t,s!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var it=Ge.extend({initialize:function(t,r){D(this,r),this._layers={};var s,p;if(t)for(s=0,p=t.length;s<p;s++)this.addLayer(t[s])},addLayer:function(t){var r=this.getLayerId(t);return this._layers[r]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var r=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(t){var r=typeof t=="number"?t:this.getLayerId(t);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var r=Array.prototype.slice.call(arguments,1),s,p;for(s in this._layers)p=this._layers[s],p[t]&&p[t].apply(p,r);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,r){for(var s in this._layers)t.call(r,this._layers[s]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return S(t)}}),lt=function(t,r){return new it(t,r)},ht=it.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),it.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),it.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new Re;for(var r in this._layers){var s=this._layers[r];t.extend(s.getBounds?s.getBounds():s.getLatLng())}return t}}),cn=function(t,r){return new ht(t,r)},Bt=je.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){D(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,r){var s=this._getIconUrl(t);if(!s){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(s,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(p,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(t,r){var s=this.options,p=s[r+"Size"];typeof p=="number"&&(p=[p,p]);var v=ie(p),C=ie(r==="shadow"&&s.shadowAnchor||s.iconAnchor||v&&v.divideBy(2,!0));t.className="leaflet-marker-"+r+" "+(s.className||""),C&&(t.style.marginLeft=-C.x+"px",t.style.marginTop=-C.y+"px"),v&&(t.style.width=v.x+"px",t.style.height=v.y+"px")},_createImg:function(t,r){return r=r||document.createElement("img"),r.src=t,r},_getIconUrl:function(t){return He.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Rn(t){return new Bt(t)}var mr=Bt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof mr.imagePath!="string"&&(mr.imagePath=this._detectIconPath()),(this.options.imagePath||mr.imagePath)+Bt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var r=function(s,p,v){var C=p.exec(s);return C&&C[v]};return t=r(t,/^url\((['"])?(.+)\1\)$/,2),t&&r(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=et("div","leaflet-default-icon-path",document.body),r=Hn(t,"background-image")||Hn(t,"backgroundImage");if(document.body.removeChild(t),r=this._stripUrl(r),r)return r;var s=document.querySelector('link[href$="leaflet.css"]');return s?s.href.substring(0,s.href.length-11-1):""}}),Lo=Xt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Nn(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),rt(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&yt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var r=this._marker,s=r._map,p=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,C=xe(r._icon),B=s.getPixelBounds(),X=s.getPixelOrigin(),le=oe(B.min._subtract(X).add(v),B.max._subtract(X).subtract(v));if(!le.contains(C)){var ge=ie((Math.max(le.max.x,C.x)-le.max.x)/(B.max.x-le.max.x)-(Math.min(le.min.x,C.x)-le.min.x)/(B.min.x-le.min.x),(Math.max(le.max.y,C.y)-le.max.y)/(B.max.y-le.max.y)-(Math.min(le.min.y,C.y)-le.min.y)/(B.min.y-le.min.y)).multiplyBy(p);s.panBy(ge,{animate:!1}),this._draggable._newPos._add(ge),this._draggable._startPos._add(ge),se(r._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=Ie(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(_e(this._panRequest),this._panRequest=Ie(this._adjustPan.bind(this,t)))},_onDrag:function(t){var r=this._marker,s=r._shadow,p=xe(r._icon),v=r._map.layerPointToLatLng(p);s&&se(s,p),r._latlng=v,t.latlng=v,t.oldLatLng=this._oldLatLng,r.fire("move",t).fire("drag",t)},_onDragEnd:function(t){_e(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Un=Ge.extend({options:{icon:new mr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,r){D(this,r),this._latlng=me(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var r=this._latlng;return this._latlng=me(t),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),s=t.icon.createIcon(this._icon),p=!1;s!==this._icon&&(this._icon&&this._removeIcon(),p=!0,t.title&&(s.title=t.title),s.tagName==="IMG"&&(s.alt=t.alt||"")),rt(s,r),t.keyboard&&(s.tabIndex="0",s.setAttribute("role","button")),this._icon=s,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Qe(s,"focus",this._panOnFocus,this);var v=t.icon.createShadow(this._shadow),C=!1;v!==this._shadow&&(this._removeShadow(),C=!0),v&&(rt(v,r),v.alt=""),this._shadow=v,t.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&C&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Tt(this._icon,"focus",this._panOnFocus,this),xt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&xt(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&se(this._icon,t),this._shadow&&se(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(rt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Lo)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Lo(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&M(this._icon,t),this._shadow&&M(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var r=this.options.icon.options,s=r.iconSize?ie(r.iconSize):ie(0,0),p=r.iconAnchor?ie(r.iconAnchor):ie(0,0);t.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:s.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Yu(t,r){return new Un(t,r)}var Ii=Ge.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return D(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ul=Ii.extend({options:{fill:!0,radius:10},initialize:function(t,r){D(this,r),this._latlng=me(t),this._radius=this.options.radius},setLatLng:function(t){var r=this._latlng;return this._latlng=me(t),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var r=t&&t.radius||this._radius;return Ii.prototype.setStyle.call(this,t),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,r=this._radiusY||t,s=this._clickTolerance(),p=[t+s,r+s];this._pxBounds=new j(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ks(t,r){return new Ul(t,r)}var Kl=Ul.extend({initialize:function(t,r,s){if(typeof r=="number"&&(r=f({},s,{radius:r})),D(this,r),this._latlng=me(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new Re(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Ii.prototype.setStyle,_project:function(){var t=this._latlng.lng,r=this._latlng.lat,s=this._map,p=s.options.crs;if(p.distance===Ae.distance){var v=Math.PI/180,C=this._mRadius/Ae.R/v,B=s.project([r+C,t]),X=s.project([r-C,t]),le=B.add(X).divideBy(2),ge=s.unproject(le).lat,Oe=Math.acos((Math.cos(C*v)-Math.sin(r*v)*Math.sin(ge*v))/(Math.cos(r*v)*Math.cos(ge*v)))/v;(isNaN(Oe)||Oe===0)&&(Oe=C/Math.cos(Math.PI/180*r)),this._point=le.subtract(s.getPixelOrigin()),this._radius=isNaN(Oe)?0:le.x-s.project([ge,t-Oe]).x,this._radiusY=le.y-B.y}else{var Je=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=s.latLngToLayerPoint(this._latlng),this._radius=this._point.x-s.latLngToLayerPoint(Je).x}this._updateBounds()}});function ml(t,r,s){return new Kl(t,r,s)}var Kn=Ii.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,r){D(this,r),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var r=1/0,s=null,p=Ir,v,C,B=0,X=this._parts.length;B<X;B++)for(var le=this._parts[B],ge=1,Oe=le.length;ge<Oe;ge++){v=le[ge-1],C=le[ge];var Je=p(t,v,C,!0);Je<r&&(r=Je,s=p(t,v,C))}return s&&(s.distance=Math.sqrt(r)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return h(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,r){return r=r||this._defaultShape(),t=me(t),r.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new Re,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return un(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var r=[],s=un(t),p=0,v=t.length;p<v;p++)s?(r[p]=me(t[p]),this._bounds.extend(r[p])):r[p]=this._convertLatLngs(t[p]);return r},_project:function(){var t=new j;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),r=new U(t,t);this._rawPxBounds&&(this._pxBounds=new j([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(t,r,s){var p=t[0]instanceof te,v=t.length,C,B;if(p){for(B=[],C=0;C<v;C++)B[C]=this._map.latLngToLayerPoint(t[C]),s.extend(B[C]);r.push(B)}else for(C=0;C<v;C++)this._projectLatlngs(t[C],r,s)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,s,p,v,C,B,X,le;for(s=0,v=0,C=this._rings.length;s<C;s++)for(le=this._rings[s],p=0,B=le.length;p<B-1;p++)X=oo(le[p],le[p+1],t,p,!0),X&&(r[v]=r[v]||[],r[v].push(X[0]),(X[1]!==le[p+1]||p===B-2)&&(r[v].push(X[1]),v++))}},_simplifyPoints:function(){for(var t=this._parts,r=this.options.smoothFactor,s=0,p=t.length;s<p;s++)t[s]=io(t[s],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,r){var s,p,v,C,B,X,le=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(s=0,C=this._parts.length;s<C;s++)for(X=this._parts[s],p=0,B=X.length,v=B-1;p<B;v=p++)if(!(!r&&p===0)&&Po(t,X[v],X[p])<=le)return!0;return!1}});function Qu(t,r){return new Kn(t,r)}Kn._flat=fl;var fi=Kn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return dl(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var r=Kn.prototype._convertLatLngs.call(this,t),s=r.length;return s>=2&&r[0]instanceof te&&r[0].equals(r[s-1])&&r.pop(),r},_setLatLngs:function(t){Kn.prototype._setLatLngs.call(this,t),un(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return un(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,r=this.options.weight,s=new U(r,r);if(t=new j(t.min.subtract(s),t.max.add(s)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,v=this._rings.length,C;p<v;p++)C=Eo(this._rings[p],t,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var r=!1,s,p,v,C,B,X,le,ge;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(C=0,le=this._parts.length;C<le;C++)for(s=this._parts[C],B=0,ge=s.length,X=ge-1;B<ge;X=B++)p=s[B],v=s[X],p.y>t.y!=v.y>t.y&&t.x<(v.x-p.x)*(t.y-p.y)/(v.y-p.y)+p.x&&(r=!r);return r||Kn.prototype._containsPoint.call(this,t,!0)}});function Ju(t,r){return new fi(t,r)}var Or=ht.extend({initialize:function(t,r){D(this,r),this._layers={},t&&this.addData(t)},addData:function(t){var r=ee(t)?t:t.features,s,p,v;if(r){for(s=0,p=r.length;s<p;s++)v=r[s],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var C=this.options;if(C.filter&&!C.filter(t))return this;var B=No(t,C);return B?(B.feature=Ql(t),B.defaultOptions=B.options,this.resetStyle(B),C.onEachFeature&&C.onEachFeature(t,B),this.addLayer(B)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=f({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(r){this._setLayerStyle(r,t)},this)},_setLayerStyle:function(t,r){t.setStyle&&(typeof r=="function"&&(r=r(t.feature)),t.setStyle(r))}});function No(t,r){var s=t.type==="Feature"?t.geometry:t,p=s?s.coordinates:null,v=[],C=r&&r.pointToLayer,B=r&&r.coordsToLatLng||Xl,X,le,ge,Oe;if(!p&&!s)return null;switch(s.type){case"Point":return X=B(p),$l(C,t,X,r);case"MultiPoint":for(ge=0,Oe=p.length;ge<Oe;ge++)X=B(p[ge]),v.push($l(C,t,X,r));return new ht(v);case"LineString":case"MultiLineString":return le=hl(p,s.type==="LineString"?0:1,B),new Kn(le,r);case"Polygon":case"MultiPolygon":return le=hl(p,s.type==="Polygon"?1:2,B),new fi(le,r);case"GeometryCollection":for(ge=0,Oe=s.geometries.length;ge<Oe;ge++){var Je=No({geometry:s.geometries[ge],type:"Feature",properties:t.properties},r);Je&&v.push(Je)}return new ht(v);case"FeatureCollection":for(ge=0,Oe=s.features.length;ge<Oe;ge++){var ut=No(s.features[ge],r);ut&&v.push(ut)}return new ht(v);default:throw new Error("Invalid GeoJSON object.")}}function $l(t,r,s,p){return t?t(r,s):new Un(s,p&&p.markersInheritOptions&&p)}function Xl(t){return new te(t[1],t[0],t[2])}function hl(t,r,s){for(var p=[],v=0,C=t.length,B;v<C;v++)B=r?hl(t[v],r-1,s):(s||Xl)(t[v]),p.push(B);return p}function ql(t,r){return t=me(t),t.alt!==void 0?[A(t.lng,r),A(t.lat,r),A(t.alt,r)]:[A(t.lng,r),A(t.lat,r)]}function Yl(t,r,s,p){for(var v=[],C=0,B=t.length;C<B;C++)v.push(r?Yl(t[C],un(t[C])?0:r-1,s,p):ql(t[C],p));return!r&&s&&v.length>0&&v.push(v[0].slice()),v}function Ro(t,r){return t.feature?f({},t.feature,{geometry:r}):Ql(r)}function Ql(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var Pa={toGeoJSON:function(t){return Ro(this,{type:"Point",coordinates:ql(this.getLatLng(),t)})}};Un.include(Pa),Kl.include(Pa),Ul.include(Pa),Kn.include({toGeoJSON:function(t){var r=!un(this._latlngs),s=Yl(this._latlngs,r?1:0,!1,t);return Ro(this,{type:(r?"Multi":"")+"LineString",coordinates:s})}}),fi.include({toGeoJSON:function(t){var r=!un(this._latlngs),s=r&&!un(this._latlngs[0]),p=Yl(this._latlngs,s?2:r?1:0,!0,t);return r||(p=[p]),Ro(this,{type:(s?"Multi":"")+"Polygon",coordinates:p})}}),it.include({toMultiPoint:function(t){var r=[];return this.eachLayer(function(s){r.push(s.toGeoJSON(t).geometry.coordinates)}),Ro(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(t){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(t);var s=r==="GeometryCollection",p=[];return this.eachLayer(function(v){if(v.toGeoJSON){var C=v.toGeoJSON(t);if(s)p.push(C.geometry);else{var B=Ql(C);B.type==="FeatureCollection"?p.push.apply(p,B.features):p.push(B)}}}),s?Ro(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function vs(t,r){return new Or(t,r)}var hr=vs,Oi=Ge.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,r,s){this._url=t,this._bounds=Me(r),D(this,s)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(rt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){xt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&er(this._image),this},bringToBack:function(){return this._map&&nn(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=Me(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",r=this._image=t?this._url:et("img");if(rt(r,"leaflet-image-layer"),this._zoomAnimated&&rt(r,"leaflet-zoom-animated"),this.options.className&&rt(r,this.options.className),r.onselectstart=E,r.onmousemove=E,r.onload=y(this.fire,this,"load"),r.onerror=y(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(t){var r=this._map.getZoomScale(t.zoom),s=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;$(this._image,s,r)},_reset:function(){var t=this._image,r=new j(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),s=r.getSize();se(t,r.min),t.style.width=s.x+"px",t.style.height=s.y+"px"},_updateOpacity:function(){M(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),ys=function(t,r,s){return new Oi(t,r,s)},Ma=Oi.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",r=this._image=t?this._url:et("video");if(rt(r,"leaflet-image-layer"),this._zoomAnimated&&rt(r,"leaflet-zoom-animated"),this.options.className&&rt(r,this.options.className),r.onselectstart=E,r.onmousemove=E,r.onloadeddata=y(this.fire,this,"load"),t){for(var s=r.getElementsByTagName("source"),p=[],v=0;v<s.length;v++)p.push(s[v].src);this._url=s.length>0?p:[r.src];return}ee(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var B=et("source");B.src=this._url[C],r.appendChild(B)}}});function _s(t,r,s){return new Ma(t,r,s)}var La=Oi.extend({_initImage:function(){var t=this._image=this._url;rt(t,"leaflet-image-layer"),this._zoomAnimated&&rt(t,"leaflet-zoom-animated"),this.options.className&&rt(t,this.options.className),t.onselectstart=E,t.onmousemove=E}});function Na(t,r,s){return new La(t,r,s)}var Ar=Ge.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,r){t&&(t instanceof te||ee(t))?(this._latlng=me(t),D(this,r)):(D(this,t),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&M(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&M(this._container,1),this.bringToFront(),this.options.interactive&&(rt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(M(this._container,0),this._removeTimeout=setTimeout(y(xt,void 0,this._container),200)):xt(this._container),this.options.interactive&&(yt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=me(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&er(this._container),this},bringToBack:function(){return this._map&&nn(this._container),this},_prepareOpen:function(t){var r=this._source;if(!r._map)return!1;if(r instanceof ht){r=null;var s=this._source._layers;for(var p in s)if(s[p]._map){r=s[p];break}if(!r)return!1;this._source=r}if(!t)if(r.getCenter)t=r.getCenter();else if(r.getLatLng)t=r.getLatLng();else if(r.getBounds)t=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")t.innerHTML=r;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),r=ie(this.options.offset),s=this._getAnchor();this._zoomAnimated?se(this._container,t.add(s)):r=r.add(t).add(s);var p=this._containerBottom=-r.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=p+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});dt.include({_initOverlay:function(t,r,s,p){var v=r;return v instanceof t||(v=new t(p).setContent(r)),s&&v.setLatLng(s),v}}),Ge.include({_initOverlay:function(t,r,s,p){var v=s;return v instanceof t?(D(v,p),v._source=this):(v=r&&!p?r:new t(p,this),v.setContent(s)),v}});var Jl=Ar.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,Ar.prototype.openOn.call(this,t)},onAdd:function(t){Ar.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ii||this._source.on("preclick",Mn))},onRemove:function(t){Ar.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ii||this._source.off("preclick",Mn))},getEvents:function(){var t=Ar.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",r=this._container=et("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),s=this._wrapper=et("div",t+"-content-wrapper",r);if(this._contentNode=et("div",t+"-content",s),kt(r),li(this._contentNode),Qe(r,"contextmenu",Mn),this._tipContainer=et("div",t+"-tip-container",r),this._tip=et("div",t+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=et("a",t+"-close-button",r);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',Qe(p,"click",function(v){Zt(v),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,r=t.style;r.width="",r.whiteSpace="nowrap";var s=t.offsetWidth;s=Math.min(s,this.options.maxWidth),s=Math.max(s,this.options.minWidth),r.width=s+1+"px",r.whiteSpace="",r.height="";var p=t.offsetHeight,v=this.options.maxHeight,C="leaflet-popup-scrolled";v&&p>v?(r.height=v+"px",rt(t,C)):yt(t,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),s=this._getAnchor();se(this._container,r.add(s))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,r=parseInt(Hn(this._container,"marginBottom"),10)||0,s=this._container.offsetHeight+r,p=this._containerWidth,v=new U(this._containerLeft,-s-this._containerBottom);v._add(xe(this._container));var C=t.layerPointToContainerPoint(v),B=ie(this.options.autoPanPadding),X=ie(this.options.autoPanPaddingTopLeft||B),le=ie(this.options.autoPanPaddingBottomRight||B),ge=t.getSize(),Oe=0,Je=0;C.x+p+le.x>ge.x&&(Oe=C.x+p-ge.x+le.x),C.x-Oe-X.x<0&&(Oe=C.x-X.x),C.y+s+le.y>ge.y&&(Je=C.y+s-ge.y+le.y),C.y-Je-X.y<0&&(Je=C.y-X.y),(Oe||Je)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([Oe,Je]))}},_getAnchor:function(){return ie(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Io=function(t,r){return new Jl(t,r)};dt.mergeOptions({closePopupOnClick:!0}),dt.include({openPopup:function(t,r,s){return this._initOverlay(Jl,t,r,s).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),Ge.include({bindPopup:function(t,r){return this._popup=this._initOverlay(Jl,this._popup,t,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof ht||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){an(t);var r=t.layer||t.target;if(this._popup._source===r&&!(r instanceof Ii)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=r,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Oo=Ar.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){Ar.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){Ar.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=Ar.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",r=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=et("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+S(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var r,s,p=this._map,v=this._container,C=p.latLngToContainerPoint(p.getCenter()),B=p.layerPointToContainerPoint(t),X=this.options.direction,le=v.offsetWidth,ge=v.offsetHeight,Oe=ie(this.options.offset),Je=this._getAnchor();X==="top"?(r=le/2,s=ge):X==="bottom"?(r=le/2,s=0):X==="center"?(r=le/2,s=ge/2):X==="right"?(r=0,s=ge/2):X==="left"?(r=le,s=ge/2):B.x<C.x?(X="right",r=0,s=ge/2):(X="left",r=le+(Oe.x+Je.x)*2,s=ge/2),t=t.subtract(ie(r,s,!0)).add(Oe).add(Je),yt(v,"leaflet-tooltip-right"),yt(v,"leaflet-tooltip-left"),yt(v,"leaflet-tooltip-top"),yt(v,"leaflet-tooltip-bottom"),rt(v,"leaflet-tooltip-"+X),se(v,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&M(this._container,t)},_animateZoom:function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(r)},_getAnchor:function(){return ie(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),gl=function(t,r){return new Oo(t,r)};dt.include({openTooltip:function(t,r,s){return this._initOverlay(Oo,t,r,s).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),Ge.include({bindTooltip:function(t,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Oo,this._tooltip,t,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var r=t?"off":"on",s={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?s.add=this._openTooltip:(s.mouseover=this._openTooltip,s.mouseout=this.closeTooltip,s.click=this._openTooltip,this._map?this._addFocusListeners():s.add=this._addFocusListeners),this._tooltip.options.sticky&&(s.mousemove=this._moveTooltip),this[r](s),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof ht||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&(Qe(r,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),Qe(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var r=t.latlng,s,p;this._tooltip.options.sticky&&t.originalEvent&&(s=this._map.mouseEventToContainerPoint(t.originalEvent),p=this._map.containerPointToLayerPoint(s),r=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(r)}});var ea=Bt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var r=t&&t.tagName==="DIV"?t:document.createElement("div"),s=this.options;if(s.html instanceof Element?(Mr(r),r.appendChild(s.html)):r.innerHTML=s.html!==!1?s.html:"",s.bgPos){var p=ie(s.bgPos);r.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function xs(t){return new ea(t)}Bt.Default=mr;var Ai=Ge.extend({options:{tileSize:256,opacity:1,updateWhenIdle:He.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){D(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),xt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(er(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(nn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=b(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof U?t:new U(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var r=this.getPane().children,s=-t(-1/0,1/0),p=0,v=r.length,C;p<v;p++)C=r[p].style.zIndex,r[p]!==this._container&&C&&(s=t(s,+C));isFinite(s)&&(this.options.zIndex=s+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!He.ielt9){M(this._container,this.options.opacity);var t=+new Date,r=!1,s=!1;for(var p in this._tiles){var v=this._tiles[p];if(!(!v.current||!v.loaded)){var C=Math.min(1,(t-v.loaded)/200);M(v.el,C),C<1?r=!0:(v.active?s=!0:this._onOpaqueTile(v),v.active=!0)}}s&&!this._noPrune&&this._pruneTiles(),r&&(_e(this._fadeFrame),this._fadeFrame=Ie(this._updateOpacity,this))}},_onOpaqueTile:E,_initContainer:function(){this._container||(this._container=et("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,r=this.options.maxZoom;if(t!==void 0){for(var s in this._levels)s=Number(s),this._levels[s].el.children.length||s===t?(this._levels[s].el.style.zIndex=r-Math.abs(t-s),this._onUpdateLevel(s)):(xt(this._levels[s].el),this._removeTilesAtZoom(s),this._onRemoveLevel(s),delete this._levels[s]);var p=this._levels[t],v=this._map;return p||(p=this._levels[t]={},p.el=et("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=r,p.origin=v.project(v.unproject(v.getPixelOrigin()),t).round(),p.zoom=t,this._setZoomTransform(p,v.getCenter(),v.getZoom()),E(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:E,_onRemoveLevel:E,_onCreateLevel:E,_pruneTiles:function(){if(this._map){var t,r,s=this._map.getZoom();if(s>this.options.maxZoom||s<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)r=this._tiles[t],r.retain=r.current;for(t in this._tiles)if(r=this._tiles[t],r.current&&!r.active){var p=r.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var r in this._tiles)this._tiles[r].coords.z===t&&this._removeTile(r)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)xt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,r,s,p){var v=Math.floor(t/2),C=Math.floor(r/2),B=s-1,X=new U(+v,+C);X.z=+B;var le=this._tileCoordsToKey(X),ge=this._tiles[le];return ge&&ge.active?(ge.retain=!0,!0):(ge&&ge.loaded&&(ge.retain=!0),B>p?this._retainParent(v,C,B,p):!1)},_retainChildren:function(t,r,s,p){for(var v=2*t;v<2*t+2;v++)for(var C=2*r;C<2*r+2;C++){var B=new U(v,C);B.z=s+1;var X=this._tileCoordsToKey(B),le=this._tiles[X];if(le&&le.active){le.retain=!0;continue}else le&&le.loaded&&(le.retain=!0);s+1<p&&this._retainChildren(v,C,s+1,p)}},_resetView:function(t){var r=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var r=this.options;return r.minNativeZoom!==void 0&&t<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<t?r.maxNativeZoom:t},_setView:function(t,r,s,p){var v=Math.round(r);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var C=this.options.updateWhenZooming&&v!==this._tileZoom;(!p||C)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(t),s||this._pruneTiles(),this._noPrune=!!s),this._setZoomTransforms(t,r)},_setZoomTransforms:function(t,r){for(var s in this._levels)this._setZoomTransform(this._levels[s],t,r)},_setZoomTransform:function(t,r,s){var p=this._map.getZoomScale(s,t.zoom),v=t.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(r,s)).round();He.any3d?$(t.el,v,p):se(t.el,v)},_resetGrid:function(){var t=this._map,r=t.options.crs,s=this._tileSize=this.getTileSize(),p=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,r.wrapLng[0]],p).x/s.x),Math.ceil(t.project([0,r.wrapLng[1]],p).x/s.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([r.wrapLat[0],0],p).y/s.x),Math.ceil(t.project([r.wrapLat[1],0],p).y/s.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var r=this._map,s=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),p=r.getZoomScale(s,this._tileZoom),v=r.project(t,this._tileZoom).floor(),C=r.getSize().divideBy(p*2);return new j(v.subtract(C),v.add(C))},_update:function(t){var r=this._map;if(r){var s=this._clampZoom(r.getZoom());if(t===void 0&&(t=r.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(t),v=this._pxBoundsToTileRange(p),C=v.getCenter(),B=[],X=this.options.keepBuffer,le=new j(v.getBottomLeft().subtract([X,-X]),v.getTopRight().add([X,-X]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ge in this._tiles){var Oe=this._tiles[ge].coords;(Oe.z!==this._tileZoom||!le.contains(new U(Oe.x,Oe.y)))&&(this._tiles[ge].current=!1)}if(Math.abs(s-this._tileZoom)>1){this._setView(t,s);return}for(var Je=v.min.y;Je<=v.max.y;Je++)for(var ut=v.min.x;ut<=v.max.x;ut++){var qt=new U(ut,Je);if(qt.z=this._tileZoom,!!this._isValidTile(qt)){var Vt=this._tiles[this._tileCoordsToKey(qt)];Vt?Vt.current=!0:B.push(qt)}}if(B.sort(function(In,Fo){return In.distanceTo(C)-Fo.distanceTo(C)}),B.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var $n=document.createDocumentFragment();for(ut=0;ut<B.length;ut++)this._addTile(B[ut],$n);this._level.el.appendChild($n)}}}},_isValidTile:function(t){var r=this._map.options.crs;if(!r.infinite){var s=this._globalTileRange;if(!r.wrapLng&&(t.x<s.min.x||t.x>s.max.x)||!r.wrapLat&&(t.y<s.min.y||t.y>s.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(t);return Me(this.options.bounds).overlaps(p)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var r=this._map,s=this.getTileSize(),p=t.scaleBy(s),v=p.add(s),C=r.unproject(p,t.z),B=r.unproject(v,t.z);return[C,B]},_tileCoordsToBounds:function(t){var r=this._tileCoordsToNwSe(t),s=new Re(r[0],r[1]);return this.options.noWrap||(s=this._map.wrapLatLngBounds(s)),s},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var r=t.split(":"),s=new U(+r[0],+r[1]);return s.z=+r[2],s},_removeTile:function(t){var r=this._tiles[t];r&&(xt(r.el),delete this._tiles[t],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){rt(t,"leaflet-tile");var r=this.getTileSize();t.style.width=r.x+"px",t.style.height=r.y+"px",t.onselectstart=E,t.onmousemove=E,He.ielt9&&this.options.opacity<1&&M(t,this.options.opacity)},_addTile:function(t,r){var s=this._getTilePos(t),p=this._tileCoordsToKey(t),v=this.createTile(this._wrapCoords(t),y(this._tileReady,this,t));this._initTile(v),this.createTile.length<2&&Ie(y(this._tileReady,this,t,null,v)),se(v,s),this._tiles[p]={el:v,coords:t,current:!0},r.appendChild(v),this.fire("tileloadstart",{tile:v,coords:t})},_tileReady:function(t,r,s){r&&this.fire("tileerror",{error:r,tile:s,coords:t});var p=this._tileCoordsToKey(t);s=this._tiles[p],s&&(s.loaded=+new Date,this._map._fadeAnimated?(M(s.el,0),_e(this._fadeFrame),this._fadeFrame=Ie(this._updateOpacity,this)):(s.active=!0,this._pruneTiles()),r||(rt(s.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:s.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),He.ielt9||!this._map._fadeAnimated?Ie(this._pruneTiles,this):setTimeout(y(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var r=new U(this._wrapX?R(t.x,this._wrapX):t.x,this._wrapY?R(t.y,this._wrapY):t.y);return r.z=t.z,r},_pxBoundsToTileRange:function(t){var r=this.getTileSize();return new j(t.min.unscaleBy(r).floor(),t.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function Ao(t){return new Ai(t)}var Di=Ai.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,r){this._url=t,r=D(this,r),r.detectRetina&&He.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,r){return this._url===t&&r===void 0&&(r=!0),this._url=t,r||this.redraw(),this},createTile:function(t,r){var s=document.createElement("img");return Qe(s,"load",y(this._tileOnLoad,this,r,s)),Qe(s,"error",y(this._tileOnError,this,r,s)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(s.referrerPolicy=this.options.referrerPolicy),s.alt="",s.src=this.getTileUrl(t),s},getTileUrl:function(t){var r={r:He.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var s=this._globalTileRange.max.y-t.y;this.options.tms&&(r.y=s),r["-y"]=s}return q(this._url,f(r,this.options))},_tileOnLoad:function(t,r){He.ielt9?setTimeout(y(t,this,null,r),0):t(null,r)},_tileOnError:function(t,r,s){var p=this.options.errorTileUrl;p&&r.getAttribute("src")!==p&&(r.src=p),t(s,r)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,r=this.options.maxZoom,s=this.options.zoomReverse,p=this.options.zoomOffset;return s&&(t=r-t),t+p},_getSubdomain:function(t){var r=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var t,r;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(r=this._tiles[t].el,r.onload=E,r.onerror=E,!r.complete)){r.src=fe;var s=this._tiles[t].coords;xt(r),delete this._tiles[t],this.fire("tileabort",{tile:r,coords:s})}},_removeTile:function(t){var r=this._tiles[t];if(r)return r.el.setAttribute("src",fe),Ai.prototype._removeTile.call(this,t)},_tileReady:function(t,r,s){if(!(!this._map||s&&s.getAttribute("src")===fe))return Ai.prototype._tileReady.call(this,t,r,s)}});function Ra(t,r){return new Di(t,r)}var kl=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,r){this._url=t;var s=f({},this.defaultWmsParams);for(var p in r)p in this.options||(s[p]=r[p]);r=D(this,r);var v=r.detectRetina&&He.retina?2:1,C=this.getTileSize();s.width=C.x*v,s.height=C.y*v,this.wmsParams=s},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,Di.prototype.onAdd.call(this,t)},getTileUrl:function(t){var r=this._tileCoordsToNwSe(t),s=this._crs,p=oe(s.project(r[0]),s.project(r[1])),v=p.min,C=p.max,B=(this._wmsVersion>=1.3&&this._crs===pe?[v.y,v.x,C.y,C.x]:[v.x,v.y,C.x,C.y]).join(","),X=Di.prototype.getTileUrl.call(this,t);return X+F(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+B},setParams:function(t,r){return f(this.wmsParams,t),r||this.redraw(),this}});function Ts(t,r){return new kl(t,r)}Di.WMS=kl,Ra.wms=Ts;var Dr=Ge.extend({options:{padding:.1},initialize:function(t){D(this,t),S(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),rt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,r){var s=this._map.getZoomScale(r,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,r),C=p.multiplyBy(-s).add(v).subtract(this._map._getNewPixelOrigin(t,r));He.any3d?$(this._container,C,s):se(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,r=this._map.getSize(),s=this._map.containerPointToLayerPoint(r.multiplyBy(-t)).round();this._bounds=new j(s,s.add(r.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ia=Dr.extend({options:{tolerance:0},getEvents:function(){var t=Dr.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Dr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");Qe(t,"mousemove",this._onMouseMove,this),Qe(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Qe(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){_e(this._redrawRequest),delete this._ctx,xt(this._container),Tt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var r in this._layers)t=this._layers[r],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Dr.prototype._update.call(this);var t=this._bounds,r=this._container,s=t.getSize(),p=He.retina?2:1;se(r,t.min),r.width=p*s.x,r.height=p*s.y,r.style.width=s.x+"px",r.style.height=s.y+"px",He.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Dr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[S(t)]=t;var r=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var r=t._order,s=r.next,p=r.prev;s?s.prev=p:this._drawLast=p,p?p.next=s:this._drawFirst=s,delete t._order,delete this._layers[S(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var r=t.options.dashArray.split(/[, ]+/),s=[],p,v;for(v=0;v<r.length;v++){if(p=Number(r[v]),isNaN(p))return;s.push(p)}t.options._dashArray=s}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||Ie(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var r=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new j,this._redrawBounds.extend(t._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(t._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var r=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,r=this._redrawBounds;if(this._ctx.save(),r){var s=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,s.x,s.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)t=p.layer,(!r||t._pxBounds&&t._pxBounds.intersects(r))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,r){if(this._drawing){var s,p,v,C,B=t._parts,X=B.length,le=this._ctx;if(X){for(le.beginPath(),s=0;s<X;s++){for(p=0,v=B[s].length;p<v;p++)C=B[s][p],le[p?"lineTo":"moveTo"](C.x,C.y);r&&le.closePath()}this._fillStroke(le,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var r=t._point,s=this._ctx,p=Math.max(Math.round(t._radius),1),v=(Math.max(Math.round(t._radiusY),1)||p)/p;v!==1&&(s.save(),s.scale(1,v)),s.beginPath(),s.arc(r.x,r.y/v,p,0,Math.PI*2,!1),v!==1&&s.restore(),this._fillStroke(s,t)}},_fillStroke:function(t,r){var s=r.options;s.fill&&(t.globalAlpha=s.fillOpacity,t.fillStyle=s.fillColor||s.color,t.fill(s.fillRule||"evenodd")),s.stroke&&s.weight!==0&&(t.setLineDash&&t.setLineDash(r.options&&r.options._dashArray||[]),t.globalAlpha=s.opacity,t.lineWidth=s.weight,t.strokeStyle=s.color,t.lineCap=s.lineCap,t.lineJoin=s.lineJoin,t.stroke())},_onClick:function(t){for(var r=this._map.mouseEventToLayerPoint(t),s,p,v=this._drawFirst;v;v=v.next)s=v.layer,s.options.interactive&&s._containsPoint(r)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(s))&&(p=s);this._fireEvent(p?[p]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,r)}},_handleMouseOut:function(t){var r=this._hoveredLayer;r&&(yt(this._container,"leaflet-interactive"),this._fireEvent([r],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,r){if(!this._mouseHoverThrottled){for(var s,p,v=this._drawFirst;v;v=v.next)s=v.layer,s.options.interactive&&s._containsPoint(r)&&(p=s);p!==this._hoveredLayer&&(this._handleMouseOut(t),p&&(rt(this._container,"leaflet-interactive"),this._fireEvent([p],t,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(y(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,r,s){this._map._fireDOMEvent(r,s||r.type,t)},_bringToFront:function(t){var r=t._order;if(r){var s=r.next,p=r.prev;if(s)s.prev=p;else return;p?p.next=s:s&&(this._drawFirst=s),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(t)}},_bringToBack:function(t){var r=t._order;if(r){var s=r.next,p=r.prev;if(p)p.next=s;else return;s?s.prev=p:p&&(this._drawLast=p),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(t)}}});function Oa(t){return He.canvas?new Ia(t):null}var Do=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),ws={_initContainer:function(){this._container=et("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Dr.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var r=t._container=Do("shape");rt(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",t._path=Do("path"),r.appendChild(t._path),this._updateStyle(t),this._layers[S(t)]=t},_addPath:function(t){var r=t._container;this._container.appendChild(r),t.options.interactive&&t.addInteractiveTarget(r)},_removePath:function(t){var r=t._container;xt(r),t.removeInteractiveTarget(r),delete this._layers[S(t)]},_updateStyle:function(t){var r=t._stroke,s=t._fill,p=t.options,v=t._container;v.stroked=!!p.stroke,v.filled=!!p.fill,p.stroke?(r||(r=t._stroke=Do("stroke")),v.appendChild(r),r.weight=p.weight+"px",r.color=p.color,r.opacity=p.opacity,p.dashArray?r.dashStyle=ee(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=p.lineCap.replace("butt","flat"),r.joinstyle=p.lineJoin):r&&(v.removeChild(r),t._stroke=null),p.fill?(s||(s=t._fill=Do("fill")),v.appendChild(s),s.color=p.fillColor||p.color,s.opacity=p.fillOpacity):s&&(v.removeChild(s),t._fill=null)},_updateCircle:function(t){var r=t._point.round(),s=Math.round(t._radius),p=Math.round(t._radiusY||s);this._setPath(t,t._empty()?"M0 0":"AL "+r.x+","+r.y+" "+s+","+p+" 0,"+65535*360)},_setPath:function(t,r){t._path.v=r},_bringToFront:function(t){er(t._container)},_bringToBack:function(t){nn(t._container)}},gr=He.vml?Do:wn,lo=Dr.extend({_initContainer:function(){this._container=gr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=gr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){xt(this._container),Tt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Dr.prototype._update.call(this);var t=this._bounds,r=t.getSize(),s=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,s.setAttribute("width",r.x),s.setAttribute("height",r.y)),se(s,t.min),s.setAttribute("viewBox",[t.min.x,t.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(t){var r=t._path=gr("path");t.options.className&&rt(r,t.options.className),t.options.interactive&&rt(r,"leaflet-interactive"),this._updateStyle(t),this._layers[S(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){xt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[S(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var r=t._path,s=t.options;r&&(s.stroke?(r.setAttribute("stroke",s.color),r.setAttribute("stroke-opacity",s.opacity),r.setAttribute("stroke-width",s.weight),r.setAttribute("stroke-linecap",s.lineCap),r.setAttribute("stroke-linejoin",s.lineJoin),s.dashArray?r.setAttribute("stroke-dasharray",s.dashArray):r.removeAttribute("stroke-dasharray"),s.dashOffset?r.setAttribute("stroke-dashoffset",s.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),s.fill?(r.setAttribute("fill",s.fillColor||s.color),r.setAttribute("fill-opacity",s.fillOpacity),r.setAttribute("fill-rule",s.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(t,r){this._setPath(t,mn(t._parts,r))},_updateCircle:function(t){var r=t._point,s=Math.max(Math.round(t._radius),1),p=Math.max(Math.round(t._radiusY),1)||s,v="a"+s+","+p+" 0 1,0 ",C=t._empty()?"M0 0":"M"+(r.x-s)+","+r.y+v+s*2+",0 "+v+-s*2+",0 ";this._setPath(t,C)},_setPath:function(t,r){t._path.setAttribute("d",r)},_bringToFront:function(t){er(t._path)},_bringToBack:function(t){nn(t._path)}});He.vml&&lo.include(ws);function ta(t){return He.svg||He.vml?new lo(t):null}dt.include({getRenderer:function(t){var r=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var r=this._paneRenderers[t];return r===void 0&&(r=this._createRenderer({pane:t}),this._paneRenderers[t]=r),r},_createRenderer:function(t){return this.options.preferCanvas&&Oa(t)||ta(t)}});var Ss=fi.extend({initialize:function(t,r){fi.prototype.initialize.call(this,this._boundsToLatLngs(t),r)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=Me(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function ec(t,r){return new Ss(t,r)}lo.create=gr,lo.pointsToPath=mn,Or.geometryToLayer=No,Or.coordsToLatLng=Xl,Or.coordsToLatLngs=hl,Or.latLngToCoords=ql,Or.latLngsToCoords=Yl,Or.getFeature=Ro,Or.asFeature=Ql,dt.mergeOptions({boxZoom:!0});var zo=Xt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){Qe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Tt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){xt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ce(),rn(),this._startPoint=this._map.mouseEventToContainerPoint(t),Qe(document,{contextmenu:an,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=et("div","leaflet-zoom-box",this._container),rt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var r=new j(this._point,this._startPoint),s=r.getSize();se(this._box,r.min),this._box.style.width=s.x+"px",this._box.style.height=s.y+"px"},_finish:function(){this._moved&&(xt(this._box),yt(this._container,"leaflet-crosshair")),qe(),on(),Tt(document,{contextmenu:an,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(y(this._resetState,this),0);var r=new Re(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});dt.addInitHook("addHandler","boxZoom",zo),dt.mergeOptions({doubleClickZoom:!0});var Zs=Xt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var r=this._map,s=r.getZoom(),p=r.options.zoomDelta,v=t.originalEvent.shiftKey?s-p:s+p;r.options.doubleClickZoom==="center"?r.setZoom(v):r.setZoomAround(t.containerPoint,v)}});dt.addInitHook("addHandler","doubleClickZoom",Zs),dt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Aa=Xt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Nn(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}rt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){yt(this._map._container,"leaflet-grab"),yt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=Me(this._map.options.maxBounds);this._offsetLimit=oe(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var r=this._lastTime=+new Date,s=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(s),this._times.push(r),this._prunePositions(r)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,r){return t-(t-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;t.x<r.min.x&&(t.x=this._viscousLimit(t.x,r.min.x)),t.y<r.min.y&&(t.y=this._viscousLimit(t.y,r.min.y)),t.x>r.max.x&&(t.x=this._viscousLimit(t.x,r.max.x)),t.y>r.max.y&&(t.y=this._viscousLimit(t.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,r=Math.round(t/2),s=this._initialWorldOffset,p=this._draggable._newPos.x,v=(p-r+s)%t+r-s,C=(p+r+s)%t-r-s,B=Math.abs(v+s)<Math.abs(C+s)?v:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=B},_onDragEnd:function(t){var r=this._map,s=r.options,p=!s.inertia||t.noInertia||this._times.length<2;if(r.fire("dragend",t),p)r.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,B=s.easeLinearity,X=v.multiplyBy(B/C),le=X.distanceTo([0,0]),ge=Math.min(s.inertiaMaxSpeed,le),Oe=X.multiplyBy(ge/le),Je=ge/(s.inertiaDeceleration*B),ut=Oe.multiplyBy(-Je/2).round();!ut.x&&!ut.y?r.fire("moveend"):(ut=r._limitOffset(ut,r.options.maxBounds),Ie(function(){r.panBy(ut,{duration:Je,easeLinearity:B,noMoveStart:!0,animate:!0})}))}}});dt.addInitHook("addHandler","dragging",Aa),dt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Da=Xt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),Qe(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Tt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,r=document.documentElement,s=t.scrollTop||r.scrollTop,p=t.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(p,s)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var r=this._panKeys={},s=this.keyCodes,p,v;for(p=0,v=s.left.length;p<v;p++)r[s.left[p]]=[-1*t,0];for(p=0,v=s.right.length;p<v;p++)r[s.right[p]]=[t,0];for(p=0,v=s.down.length;p<v;p++)r[s.down[p]]=[0,t];for(p=0,v=s.up.length;p<v;p++)r[s.up[p]]=[0,-1*t]},_setZoomDelta:function(t){var r=this._zoomKeys={},s=this.keyCodes,p,v;for(p=0,v=s.zoomIn.length;p<v;p++)r[s.zoomIn[p]]=t;for(p=0,v=s.zoomOut.length;p<v;p++)r[s.zoomOut[p]]=-t},_addHooks:function(){Qe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Tt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var r=t.keyCode,s=this._map,p;if(r in this._panKeys){if(!s._panAnim||!s._panAnim._inProgress)if(p=this._panKeys[r],t.shiftKey&&(p=ie(p).multiplyBy(3)),s.options.maxBounds&&(p=s._limitOffset(ie(p),s.options.maxBounds)),s.options.worldCopyJump){var v=s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(p)));s.panTo(v)}else s.panBy(p)}else if(r in this._zoomKeys)s.setZoom(s.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&s._popup&&s._popup.options.closeOnEscapeKey)s.closePopup();else return;an(t)}}});dt.addInitHook("addHandler","keyboard",Da),dt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var bt=Xt.extend({addHooks:function(){Qe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Tt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var r=Lr(t),s=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var p=Math.max(s-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(y(this._performZoom,this),p),an(t)},_performZoom:function(){var t=this._map,r=t.getZoom(),s=this._map.options.zoomSnap||0;t._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,C=s?Math.ceil(v/s)*s:v,B=t._limitZoom(r+(this._delta>0?C:-C))-r;this._delta=0,this._startTime=null,B&&(t.options.scrollWheelZoom==="center"?t.setZoom(r+B):t.setZoomAround(this._lastMousePos,r+B))}});dt.addInitHook("addHandler","scrollWheelZoom",bt);var za=600;dt.mergeOptions({tapHold:He.touchNative&&He.safari&&He.mobile,tapTolerance:15});var vl=Xt.extend({addHooks:function(){Qe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Tt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var r=t.touches[0];this._startPos=this._newPos=new U(r.clientX,r.clientY),this._holdTimeout=setTimeout(y(function(){this._cancel(),this._isTapValid()&&(Qe(document,"touchend",Zt),Qe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),za),Qe(document,"touchend touchcancel contextmenu",this._cancel,this),Qe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){Tt(document,"touchend",Zt),Tt(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),Tt(document,"touchend touchcancel contextmenu",this._cancel,this),Tt(document,"touchmove",this._onMove,this)},_onMove:function(t){var r=t.touches[0];this._newPos=new U(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,r){var s=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});s._simulated=!0,r.target.dispatchEvent(s)}});dt.addInitHook("addHandler","tapHold",vl),dt.mergeOptions({touchZoom:He.touch,bounceAtZoomLimits:!0});var jo=Xt.extend({addHooks:function(){rt(this._map._container,"leaflet-touch-zoom"),Qe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){yt(this._map._container,"leaflet-touch-zoom"),Tt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var r=this._map;if(!(!t.touches||t.touches.length!==2||r._animatingZoom||this._zooming)){var s=r.mouseEventToContainerPoint(t.touches[0]),p=r.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(s.add(p)._divideBy(2))),this._startDist=s.distanceTo(p),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),Qe(document,"touchmove",this._onTouchMove,this),Qe(document,"touchend touchcancel",this._onTouchEnd,this),Zt(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var r=this._map,s=r.mouseEventToContainerPoint(t.touches[0]),p=r.mouseEventToContainerPoint(t.touches[1]),v=s.distanceTo(p)/this._startDist;if(this._zoom=r.getScaleZoom(v,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&v<1||this._zoom>r.getMaxZoom()&&v>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var C=s._add(p)._divideBy(2)._subtract(this._centerPoint);if(v===1&&C.x===0&&C.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),_e(this._animRequest);var B=y(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Ie(B,this,!0),Zt(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,_e(this._animRequest),Tt(document,"touchmove",this._onTouchMove,this),Tt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});dt.addInitHook("addHandler","touchZoom",jo),dt.BoxZoom=zo,dt.DoubleClickZoom=Zs,dt.Drag=Aa,dt.Keyboard=Da,dt.ScrollWheelZoom=bt,dt.TapHold=vl,dt.TouchZoom=jo,l.Bounds=j,l.Browser=He,l.CRS=Ee,l.Canvas=Ia,l.Circle=Kl,l.CircleMarker=Ul,l.Class=je,l.Control=sn,l.DivIcon=ea,l.DivOverlay=Ar,l.DomEvent=Mi,l.DomUtil=En,l.Draggable=Nn,l.Evented=be,l.FeatureGroup=ht,l.GeoJSON=Or,l.GridLayer=Ai,l.Handler=Xt,l.Icon=Bt,l.ImageOverlay=Oi,l.LatLng=te,l.LatLngBounds=Re,l.Layer=Ge,l.LayerGroup=it,l.LineUtil=T,l.Map=dt,l.Marker=Un,l.Mixin=pi,l.Path=Ii,l.Point=U,l.PolyUtil=yn,l.Polygon=fi,l.Polyline=Kn,l.Popup=Jl,l.PosAnimation=Li,l.Projection=ne,l.Rectangle=Ss,l.Renderer=Dr,l.SVG=lo,l.SVGOverlay=La,l.TileLayer=Di,l.Tooltip=Oo,l.Transformation=ve,l.Util=Xe,l.VideoOverlay=Ma,l.bind=y,l.bounds=oe,l.canvas=Oa,l.circle=ml,l.circleMarker=ks,l.control=Nr,l.divIcon=xs,l.extend=f,l.featureGroup=cn,l.geoJSON=vs,l.geoJson=hr,l.gridLayer=Ao,l.icon=Rn,l.imageOverlay=ys,l.latLng=me,l.latLngBounds=Me,l.layerGroup=lt,l.map=dr,l.marker=Yu,l.point=ie,l.polygon=Ju,l.polyline=Qu,l.popup=Io,l.rectangle=ec,l.setOptions=D,l.stamp=S,l.svg=ta,l.svgOverlay=Na,l.tileLayer=Ra,l.tooltip=gl,l.transformation=Ue,l.version=c,l.videoOverlay=_s;var bs=window.L;l.noConflict=function(){return window.L=bs,this},window.L=l}))})(rs,rs.exports)),rs.exports}var _i=R5();function fs(o,a,l){return Object.freeze({instance:o,context:a,container:l})}function Hu(o,a){return a==null?function(c,f){const k=P.useRef();return k.current||(k.current=o(c,f)),k}:function(c,f){const k=P.useRef();k.current||(k.current=o(c,f));const y=P.useRef(c),{instance:x}=k.current;return P.useEffect(function(){y.current!==c&&(a(x,c,y.current),y.current=c)},[x,c,f]),k}}function xf(o,a){P.useEffect(function(){return(a.layerContainer??a.map).addLayer(o.instance),function(){var k;(k=a.layerContainer)==null||k.removeLayer(o.instance),a.map.removeLayer(o.instance)}},[a,o])}function Tf(o){return function(l){const c=Bu(),f=o(Wu(l,c),c);return gf(c.map,l.attribution),Y1(f.current,l.eventHandlers),xf(f.current,c),f}}function I5(o,a){const l=P.useRef();P.useEffect(function(){if(a.pathOptions!==l.current){const f=a.pathOptions??{};o.instance.setStyle(f),l.current=f}},[o,a])}function O5(o){return function(l){const c=Bu(),f=o(Wu(l,c),c);return Y1(f.current,l.eventHandlers),xf(f.current,c),I5(f.current,l),f}}function A5(o,a){const l=Hu(o,a),c=Tf(l);return _f(c)}function wf(o,a){const l=Hu(o),c=L5(l,a);return P5(c)}function D5(o,a){const l=Hu(o,a),c=O5(l);return _f(c)}function z5(o,a){const l=Hu(o,a),c=Tf(l);return M5(c)}function j5(o,a,l){const{opacity:c,zIndex:f}=a;c!=null&&c!==l.opacity&&o.setOpacity(c),f!=null&&f!==l.zIndex&&o.setZIndex(f)}function Q1(){return Bu().map}function A1(){return A1=Object.assign||function(o){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(o[c]=l[c])}return o},A1.apply(this,arguments)}function F5({bounds:o,boundsOptions:a,center:l,children:c,className:f,id:k,placeholder:y,style:x,whenReady:S,zoom:b,...R},E){const[A]=P.useState({className:f,id:k,style:x}),[W,V]=P.useState(null);P.useImperativeHandle(E,()=>(W==null?void 0:W.map)??null,[W]);const D=P.useCallback(K=>{if(K!==null&&W===null){const q=new _i.Map(K,R);l!=null&&b!=null?q.setView(l,b):o!=null&&q.fitBounds(o,a),S!=null&&q.whenReady(S),V(E5(q))}},[]);P.useEffect(()=>()=>{W==null||W.map.remove()},[W]);const F=W?yi.createElement(yf,{value:W},c):y??null;return yi.createElement("div",A1({},A,{ref:D}),F)}const B5=P.forwardRef(F5),S1=A5(function({position:a,...l},c){const f=new _i.Marker(a,l);return fs(f,kf(c,{overlayContainer:f}))},function(a,l,c){l.position!==c.position&&a.setLatLng(l.position),l.icon!=null&&l.icon!==c.icon&&a.setIcon(l.icon),l.zIndexOffset!=null&&l.zIndexOffset!==c.zIndexOffset&&a.setZIndexOffset(l.zIndexOffset),l.opacity!=null&&l.opacity!==c.opacity&&a.setOpacity(l.opacity),a.dragging!=null&&l.draggable!==c.draggable&&(l.draggable===!0?a.dragging.enable():a.dragging.disable())}),bd=D5(function({positions:a,...l},c){const f=new _i.Polyline(a,l);return fs(f,kf(c,{overlayContainer:f}))},function(a,l,c){l.positions!==c.positions&&a.setLatLngs(l.positions)}),Cd=wf(function(a,l){const c=new _i.Popup(a,l.overlayContainer);return fs(c,l)},function(a,l,{position:c},f){P.useEffect(function(){const{instance:y}=a;function x(b){b.popup===y&&(y.update(),f(!0))}function S(b){b.popup===y&&f(!1)}return l.map.on({popupopen:x,popupclose:S}),l.overlayContainer==null?(c!=null&&y.setLatLng(c),y.openOn(l.map)):l.overlayContainer.bindPopup(y),function(){var R;l.map.off({popupopen:x,popupclose:S}),(R=l.overlayContainer)==null||R.unbindPopup(),l.map.removeLayer(y)}},[a,l,f,c])}),W5=z5(function({url:a,...l},c){const f=new _i.TileLayer(a,Wu(l,c));return fs(f,c)},function(a,l,c){j5(a,l,c);const{url:f}=l;f!=null&&f!==c.url&&a.setUrl(f)}),H5=wf(function(a,l){const c=new _i.Tooltip(a,l.overlayContainer);return fs(c,l)},function(a,l,{position:c},f){P.useEffect(function(){const y=l.overlayContainer;if(y==null)return;const{instance:x}=a,S=R=>{R.tooltip===x&&(c!=null&&x.setLatLng(c),x.update(),f(!0))},b=R=>{R.tooltip===x&&f(!1)};return y.on({tooltipopen:S,tooltipclose:b}),y.bindTooltip(x),function(){y.off({tooltipopen:S,tooltipclose:b}),y._map!=null&&y.unbindTooltip()}},[a,l,f,c])});var rl={},Ml={};/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function V5(){if(Ed)return Ml;Ed=1;var o=ps();function a(m){for(var w="https://reactjs.org/docs/error-decoder.html?invariant="+m,M=1;M<arguments.length;M++)w+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+m+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=Object.prototype.hasOwnProperty,c=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},k={};function y(m){return l.call(k,m)?!0:l.call(f,m)?!1:c.test(m)?k[m]=!0:(f[m]=!0,!1)}function x(m,w,M,O,J,$,se){this.acceptsBooleans=w===2||w===3||w===4,this.attributeName=O,this.attributeNamespace=J,this.mustUseProperty=M,this.propertyName=m,this.type=w,this.sanitizeURL=$,this.removeEmptyString=se}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(m){S[m]=new x(m,0,!1,m,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(m){var w=m[0];S[w]=new x(w,1,!1,m[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(m){S[m]=new x(m,2,!1,m.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(m){S[m]=new x(m,2,!1,m,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(m){S[m]=new x(m,3,!1,m.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(m){S[m]=new x(m,3,!0,m,null,!1,!1)}),["capture","download"].forEach(function(m){S[m]=new x(m,4,!1,m,null,!1,!1)}),["cols","rows","size","span"].forEach(function(m){S[m]=new x(m,6,!1,m,null,!1,!1)}),["rowSpan","start"].forEach(function(m){S[m]=new x(m,5,!1,m.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function R(m){return m[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(m){var w=m.replace(b,R);S[w]=new x(w,1,!1,m,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(m){var w=m.replace(b,R);S[w]=new x(w,1,!1,m,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(m){var w=m.replace(b,R);S[w]=new x(w,1,!1,m,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(m){S[m]=new x(m,1,!1,m.toLowerCase(),null,!1,!1)}),S.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(m){S[m]=new x(m,1,!1,m.toLowerCase(),null,!0,!0)});var E={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A=["Webkit","ms","Moz","O"];Object.keys(E).forEach(function(m){A.forEach(function(w){w=w+m.charAt(0).toUpperCase()+m.substring(1),E[w]=E[m]})});var W=/["'&<>]/;function V(m){if(typeof m=="boolean"||typeof m=="number")return""+m;m=""+m;var w=W.exec(m);if(w){var M="",O,J=0;for(O=w.index;O<m.length;O++){switch(m.charCodeAt(O)){case 34:w="&quot;";break;case 38:w="&amp;";break;case 39:w="&#x27;";break;case 60:w="&lt;";break;case 62:w="&gt;";break;default:continue}J!==O&&(M+=m.substring(J,O)),J=O+1,M+=w}m=J!==O?M+m.substring(J,O):M}return m}var D=/([A-Z])/g,F=/^ms-/,K=Array.isArray;function q(m,w){return{insertionMode:m,selectedValue:w}}function ee(m,w,M){switch(w){case"select":return q(1,M.value!=null?M.value:M.defaultValue);case"svg":return q(2,null);case"math":return q(3,null);case"foreignObject":return q(1,null);case"table":return q(4,null);case"thead":case"tbody":case"tfoot":return q(5,null);case"colgroup":return q(7,null);case"tr":return q(6,null)}return 4<=m.insertionMode||m.insertionMode===0?q(1,null):m}var ce=new Map;function fe(m,w,M){if(typeof M!="object")throw Error(a(62));w=!0;for(var O in M)if(l.call(M,O)){var J=M[O];if(J!=null&&typeof J!="boolean"&&J!==""){if(O.indexOf("--")===0){var $=V(O);J=V((""+J).trim())}else{$=O;var se=ce.get($);se!==void 0||(se=V($.replace(D,"-$1").toLowerCase().replace(F,"-ms-")),ce.set($,se)),$=se,J=typeof J=="number"?J===0||l.call(E,O)?""+J:J+"px":V((""+J).trim())}w?(w=!1,m.push(' style="',$,":",J)):m.push(";",$,":",J)}}w||m.push('"')}function he(m,w,M,O){switch(M){case"style":fe(m,w,O);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<M.length)||M[0]!=="o"&&M[0]!=="O"||M[1]!=="n"&&M[1]!=="N"){if(w=S.hasOwnProperty(M)?S[M]:null,w!==null){switch(typeof O){case"function":case"symbol":return;case"boolean":if(!w.acceptsBooleans)return}switch(M=w.attributeName,w.type){case 3:O&&m.push(" ",M,'=""');break;case 4:O===!0?m.push(" ",M,'=""'):O!==!1&&m.push(" ",M,'="',V(O),'"');break;case 5:isNaN(O)||m.push(" ",M,'="',V(O),'"');break;case 6:!isNaN(O)&&1<=O&&m.push(" ",M,'="',V(O),'"');break;default:w.sanitizeURL&&(O=""+O),m.push(" ",M,'="',V(O),'"')}}else if(y(M)){switch(typeof O){case"function":case"symbol":return;case"boolean":if(w=M.toLowerCase().slice(0,5),w!=="data-"&&w!=="aria-")return}m.push(" ",M,'="',V(O),'"')}}}function de(m,w,M){if(w!=null){if(M!=null)throw Error(a(60));if(typeof w!="object"||!("__html"in w))throw Error(a(61));w=w.__html,w!=null&&m.push(""+w)}}function Pe(m){var w="";return o.Children.forEach(m,function(M){M!=null&&(w+=M)}),w}function We(m,w,M,O){m.push(_e(M));var J=M=null,$;for($ in w)if(l.call(w,$)){var se=w[$];if(se!=null)switch($){case"children":M=se;break;case"dangerouslySetInnerHTML":J=se;break;default:he(m,O,$,se)}}return m.push(">"),de(m,J,M),typeof M=="string"?(m.push(V(M)),null):M}var Le=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ie=new Map;function _e(m){var w=Ie.get(m);if(w===void 0){if(!Le.test(m))throw Error(a(65,m));w="<"+m,Ie.set(m,w)}return w}function Xe(m,w,M,O,J){switch(w){case"select":m.push(_e("select"));var $=null,se=null;for(ot in M)if(l.call(M,ot)){var xe=M[ot];if(xe!=null)switch(ot){case"children":$=xe;break;case"dangerouslySetInnerHTML":se=xe;break;case"defaultValue":case"value":break;default:he(m,O,ot,xe)}}return m.push(">"),de(m,se,$),$;case"option":se=J.selectedValue,m.push(_e("option"));var Ce=xe=null,qe=null,ot=null;for($ in M)if(l.call(M,$)){var gt=M[$];if(gt!=null)switch($){case"children":xe=gt;break;case"selected":qe=gt;break;case"dangerouslySetInnerHTML":ot=gt;break;case"value":Ce=gt;default:he(m,O,$,gt)}}if(se!=null)if(M=Ce!==null?""+Ce:Pe(xe),K(se)){for(O=0;O<se.length;O++)if(""+se[O]===M){m.push(' selected=""');break}}else""+se===M&&m.push(' selected=""');else qe&&m.push(' selected=""');return m.push(">"),de(m,ot,xe),xe;case"textarea":m.push(_e("textarea")),ot=se=$=null;for(xe in M)if(l.call(M,xe)&&(Ce=M[xe],Ce!=null))switch(xe){case"children":ot=Ce;break;case"value":$=Ce;break;case"defaultValue":se=Ce;break;case"dangerouslySetInnerHTML":throw Error(a(91));default:he(m,O,xe,Ce)}if($===null&&se!==null&&($=se),m.push(">"),ot!=null){if($!=null)throw Error(a(92));if(K(ot)&&1<ot.length)throw Error(a(93));$=""+ot}return typeof $=="string"&&$[0]===`
`&&m.push(`
`),$!==null&&m.push(V(""+$)),null;case"input":m.push(_e("input")),Ce=ot=xe=$=null;for(se in M)if(l.call(M,se)&&(qe=M[se],qe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(a(399,"input"));case"defaultChecked":Ce=qe;break;case"defaultValue":xe=qe;break;case"checked":ot=qe;break;case"value":$=qe;break;default:he(m,O,se,qe)}return ot!==null?he(m,O,"checked",ot):Ce!==null&&he(m,O,"checked",Ce),$!==null?he(m,O,"value",$):xe!==null&&he(m,O,"value",xe),m.push("/>"),null;case"menuitem":m.push(_e("menuitem"));for(var rn in M)if(l.call(M,rn)&&($=M[rn],$!=null))switch(rn){case"children":case"dangerouslySetInnerHTML":throw Error(a(400));default:he(m,O,rn,$)}return m.push(">"),null;case"title":m.push(_e("title")),$=null;for(gt in M)if(l.call(M,gt)&&(se=M[gt],se!=null))switch(gt){case"children":$=se;break;case"dangerouslySetInnerHTML":throw Error(a(434));default:he(m,O,gt,se)}return m.push(">"),$;case"listing":case"pre":m.push(_e(w)),se=$=null;for(Ce in M)if(l.call(M,Ce)&&(xe=M[Ce],xe!=null))switch(Ce){case"children":$=xe;break;case"dangerouslySetInnerHTML":se=xe;break;default:he(m,O,Ce,xe)}if(m.push(">"),se!=null){if($!=null)throw Error(a(60));if(typeof se!="object"||!("__html"in se))throw Error(a(61));M=se.__html,M!=null&&(typeof M=="string"&&0<M.length&&M[0]===`
`?m.push(`
`,M):m.push(""+M))}return typeof $=="string"&&$[0]===`
`&&m.push(`
`),$;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":m.push(_e(w));for(var on in M)if(l.call(M,on)&&($=M[on],$!=null))switch(on){case"children":case"dangerouslySetInnerHTML":throw Error(a(399,w));default:he(m,O,on,$)}return m.push("/>"),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return We(m,M,w,O);case"html":return J.insertionMode===0&&m.push("<!DOCTYPE html>"),We(m,M,w,O);default:if(w.indexOf("-")===-1&&typeof M.is!="string")return We(m,M,w,O);m.push(_e(w)),se=$=null;for(qe in M)if(l.call(M,qe)&&(xe=M[qe],xe!=null))switch(qe){case"children":$=xe;break;case"dangerouslySetInnerHTML":se=xe;break;case"style":fe(m,O,xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:y(qe)&&typeof xe!="function"&&typeof xe!="symbol"&&m.push(" ",qe,'="',V(xe),'"')}return m.push(">"),de(m,se,$),$}}function je(m,w,M){if(m.push('<!--$?--><template id="'),M===null)throw Error(a(395));return m.push(M),m.push('"></template>')}function Ne(m,w,M,O){switch(M.insertionMode){case 0:case 1:return m.push('<div hidden id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 2:return m.push('<svg aria-hidden="true" style="display:none" id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 3:return m.push('<math aria-hidden="true" style="display:none" id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 4:return m.push('<table hidden id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 5:return m.push('<table hidden><tbody id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 6:return m.push('<table hidden><tr id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');case 7:return m.push('<table hidden><colgroup id="'),m.push(w.segmentPrefix),w=O.toString(16),m.push(w),m.push('">');default:throw Error(a(397))}}function Se(m,w){switch(w.insertionMode){case 0:case 1:return m.push("</div>");case 2:return m.push("</svg>");case 3:return m.push("</math>");case 4:return m.push("</table>");case 5:return m.push("</tbody></table>");case 6:return m.push("</tr></table>");case 7:return m.push("</colgroup></table>");default:throw Error(a(397))}}var be=/[<\u2028\u2029]/g;function U(m){return JSON.stringify(m).replace(be,function(w){switch(w){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}function ue(m,w){return w=w===void 0?"":w,{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:w+"P:",segmentPrefix:w+"S:",boundaryPrefix:w+"B:",idPrefix:w,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:m}}function ie(m,w,M,O){return M.generateStaticMarkup?(m.push(V(w)),!1):(w===""?m=O:(O&&m.push("<!-- -->"),m.push(V(w)),m=!0),m)}var j=Object.assign,oe=Symbol.for("react.element"),Re=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),Ue=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),st=Symbol.for("react.scope"),wn=Symbol.for("react.debug_trace_mode"),mn=Symbol.for("react.legacy_hidden"),Sn=Symbol.for("react.default_value"),Zn=Symbol.iterator;function Jt(m){if(m==null)return null;if(typeof m=="function")return m.displayName||m.name||null;if(typeof m=="string")return m;switch(m){case Me:return"Fragment";case Re:return"Portal";case me:return"Profiler";case te:return"StrictMode";case Ye:return"Suspense";case ve:return"SuspenseList"}if(typeof m=="object")switch(m.$$typeof){case Ae:return(m.displayName||"Context")+".Consumer";case Ee:return(m._context.displayName||"Context")+".Provider";case De:var w=m.render;return m=m.displayName,m||(m=w.displayName||w.name||"",m=m!==""?"ForwardRef("+m+")":"ForwardRef"),m;case Ue:return w=m.displayName||null,w!==null?w:Jt(m.type)||"Memo";case Fe:w=m._payload,m=m._init;try{return Jt(m(w))}catch{}}return null}var jn={};function Fn(m,w){if(m=m.contextTypes,!m)return jn;var M={},O;for(O in m)M[O]=w[O];return M}var hn=null;function Dt(m,w){if(m!==w){m.context._currentValue2=m.parentValue,m=m.parent;var M=w.parent;if(m===null){if(M!==null)throw Error(a(401))}else{if(M===null)throw Error(a(401));Dt(m,M)}w.context._currentValue2=w.value}}function Ki(m){m.context._currentValue2=m.parentValue,m=m.parent,m!==null&&Ki(m)}function $i(m){var w=m.parent;w!==null&&$i(w),m.context._currentValue2=m.value}function Kr(m,w){if(m.context._currentValue2=m.parentValue,m=m.parent,m===null)throw Error(a(402));m.depth===w.depth?Dt(m,w):Kr(m,w)}function $r(m,w){var M=w.parent;if(M===null)throw Error(a(402));m.depth===M.depth?Dt(m,M):$r(m,M),w.context._currentValue2=w.value}function Qn(m){var w=hn;w!==m&&(w===null?$i(m):m===null?Ki(w):w.depth===m.depth?Dt(w,m):w.depth>m.depth?Kr(w,m):$r(w,m),hn=m)}var Xi={isMounted:function(){return!1},enqueueSetState:function(m,w){m=m._reactInternals,m.queue!==null&&m.queue.push(w)},enqueueReplaceState:function(m,w){m=m._reactInternals,m.replace=!0,m.queue=[w]},enqueueForceUpdate:function(){}};function ar(m,w,M,O){var J=m.state!==void 0?m.state:null;m.updater=Xi,m.props=M,m.state=J;var $={queue:[],replace:!1};m._reactInternals=$;var se=w.contextType;if(m.context=typeof se=="object"&&se!==null?se._currentValue2:O,se=w.getDerivedStateFromProps,typeof se=="function"&&(se=se(M,J),J=se==null?J:j({},J,se),m.state=J),typeof w.getDerivedStateFromProps!="function"&&typeof m.getSnapshotBeforeUpdate!="function"&&(typeof m.UNSAFE_componentWillMount=="function"||typeof m.componentWillMount=="function"))if(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Xi.enqueueReplaceState(m,m.state,null),$.queue!==null&&0<$.queue.length)if(w=$.queue,se=$.replace,$.queue=null,$.replace=!1,se&&w.length===1)m.state=w[0];else{for($=se?w[0]:m.state,J=!0,se=se?1:0;se<w.length;se++){var xe=w[se];xe=typeof xe=="function"?xe.call(m,$,M,O):xe,xe!=null&&(J?(J=!1,$=j({},$,xe)):j($,xe))}m.state=$}else $.queue=null}var Tr={id:1,overflow:""};function qi(m,w,M){var O=m.id;m=m.overflow;var J=32-wr(O)-1;O&=~(1<<J),M+=1;var $=32-wr(w)+J;if(30<$){var se=J-J%5;return $=(O&(1<<se)-1).toString(32),O>>=se,J-=se,{id:1<<32-wr(w)+J|M<<J|O,overflow:$+m}}return{id:1<<$|M<<J|O,overflow:m}}var wr=Math.clz32?Math.clz32:Yi,Si=Math.log,So=Math.LN2;function Yi(m){return m>>>=0,m===0?32:31-(Si(m)/So|0)|0}function sr(m,w){return m===w&&(m!==0||1/m===1/w)||m!==m&&w!==w}var Qi=typeof Object.is=="function"?Object.is:sr,en=null,Sr=null,bn=null,ft=null,Zr=!1,Xr=!1,br=0,Bn=null,qr=0;function Wn(){if(en===null)throw Error(a(321));return en}function Yr(){if(0<qr)throw Error(a(312));return{memoizedState:null,queue:null,next:null}}function ur(){return ft===null?bn===null?(Zr=!1,bn=ft=Yr()):(Zr=!0,ft=bn):ft.next===null?(Zr=!1,ft=ft.next=Yr()):(Zr=!0,ft=ft.next),ft}function Qr(){Sr=en=null,Xr=!1,bn=null,qr=0,ft=Bn=null}function Cr(m,w){return typeof w=="function"?w(m):w}function Zo(m,w,M){if(en=Wn(),ft=ur(),Zr){var O=ft.queue;if(w=O.dispatch,Bn!==null&&(M=Bn.get(O),M!==void 0)){Bn.delete(O),O=ft.memoizedState;do O=m(O,M.action),M=M.next;while(M!==null);return ft.memoizedState=O,[O,w]}return[ft.memoizedState,w]}return m=m===Cr?typeof w=="function"?w():w:M!==void 0?M(w):w,ft.memoizedState=m,m=ft.queue={last:null,dispatch:null},m=m.dispatch=He.bind(null,en,m),[ft.memoizedState,m]}function zt(m,w){if(en=Wn(),ft=ur(),w=w===void 0?null:w,ft!==null){var M=ft.memoizedState;if(M!==null&&w!==null){var O=M[1];e:if(O===null)O=!1;else{for(var J=0;J<O.length&&J<w.length;J++)if(!Qi(w[J],O[J])){O=!1;break e}O=!0}if(O)return M[0]}}return m=m(),ft.memoizedState=[m,w],m}function He(m,w,M){if(25<=qr)throw Error(a(301));if(m===en)if(Xr=!0,m={action:M,next:null},Bn===null&&(Bn=new Map),M=Bn.get(w),M===void 0)Bn.set(w,m);else{for(w=M;w.next!==null;)w=w.next;w.next=m}}function Jr(){throw Error(a(394))}function cr(){}var Ji={readContext:function(m){return m._currentValue2},useContext:function(m){return Wn(),m._currentValue2},useMemo:zt,useReducer:Zo,useRef:function(m){en=Wn(),ft=ur();var w=ft.memoizedState;return w===null?(m={current:m},ft.memoizedState=m):w},useState:function(m){return Zo(Cr,m)},useInsertionEffect:cr,useLayoutEffect:function(){},useCallback:function(m,w){return zt(function(){return m},w)},useImperativeHandle:cr,useEffect:cr,useDebugValue:cr,useDeferredValue:function(m){return Wn(),m},useTransition:function(){return Wn(),[!1,Jr]},useId:function(){var m=Sr.treeContext,w=m.overflow;m=m.id,m=(m&~(1<<32-wr(m)-1)).toString(32)+w;var M=ei;if(M===null)throw Error(a(404));return w=br++,m=":"+M.idPrefix+"R"+m,0<w&&(m+="H"+w.toString(32)),m+":"},useMutableSource:function(m,w){return Wn(),w(m._source)},useSyncExternalStore:function(m,w,M){if(M===void 0)throw Error(a(407));return M()}},ei=null,ti=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Jn(m){return console.error(m),null}function gn(){}function eo(m,w,M,O,J,$,se,xe,Ce){var qe=[],ot=new Set;return w={destination:null,responseState:w,progressiveChunkSize:O===void 0?12800:O,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:ot,pingedTasks:qe,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:J===void 0?Jn:J,onAllReady:gn,onShellReady:se===void 0?gn:se,onShellError:gn,onFatalError:gn},M=ni(w,0,null,M,!1,!1),M.parentFlushed=!0,m=to(w,m,null,M,ot,jn,null,Tr),qe.push(m),w}function to(m,w,M,O,J,$,se,xe){m.allPendingTasks++,M===null?m.pendingRootTasks++:M.pendingTasks++;var Ce={node:w,ping:function(){var qe=m.pingedTasks;qe.push(Ce),qe.length===1&&tn(m)},blockedBoundary:M,blockedSegment:O,abortSet:J,legacyContext:$,context:se,treeContext:xe};return J.add(Ce),Ce}function ni(m,w,M,O,J,$){return{status:0,id:-1,index:w,parentFlushed:!1,chunks:[],children:[],formatContext:O,boundary:M,lastPushedText:J,textEmbedded:$}}function Er(m,w){if(m=m.onError(w),m!=null&&typeof m!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof m+'" instead');return m}function ri(m,w){var M=m.onShellError;M(w),M=m.onFatalError,M(w),m.destination!==null?(m.status=2,m.destination.destroy(w)):(m.status=1,m.fatalError=w)}function Zi(m,w,M,O,J){for(en={},Sr=w,br=0,m=M(O,J);Xr;)Xr=!1,br=0,qr+=1,ft=null,m=M(O,J);return Qr(),m}function bo(m,w,M,O){var J=M.render(),$=O.childContextTypes;if($!=null){var se=w.legacyContext;if(typeof M.getChildContext!="function")O=se;else{M=M.getChildContext();for(var xe in M)if(!(xe in $))throw Error(a(108,Jt(O)||"Unknown",xe));O=j({},se,M)}w.legacyContext=O,Ut(m,w,J),w.legacyContext=se}else Ut(m,w,J)}function ii(m,w){if(m&&m.defaultProps){w=j({},w),m=m.defaultProps;for(var M in m)w[M]===void 0&&(w[M]=m[M]);return w}return w}function St(m,w,M,O,J){if(typeof M=="function")if(M.prototype&&M.prototype.isReactComponent){J=Fn(M,w.legacyContext);var $=M.contextType;$=new M(O,typeof $=="object"&&$!==null?$._currentValue2:J),ar($,M,O,J),bo(m,w,$,M)}else{$=Fn(M,w.legacyContext),J=Zi(m,w,M,O,$);var se=br!==0;if(typeof J=="object"&&J!==null&&typeof J.render=="function"&&J.$$typeof===void 0)ar(J,M,O,$),bo(m,w,J,M);else if(se){O=w.treeContext,w.treeContext=qi(O,1,0);try{Ut(m,w,J)}finally{w.treeContext=O}}else Ut(m,w,J)}else if(typeof M=="string"){switch(J=w.blockedSegment,$=Xe(J.chunks,M,O,m.responseState,J.formatContext),J.lastPushedText=!1,se=J.formatContext,J.formatContext=ee(se,M,O),Ci(m,w,$),J.formatContext=se,M){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:J.chunks.push("</",M,">")}J.lastPushedText=!1}else{switch(M){case mn:case wn:case te:case me:case Me:Ut(m,w,O.children);return;case ve:Ut(m,w,O.children);return;case st:throw Error(a(343));case Ye:e:{M=w.blockedBoundary,J=w.blockedSegment,$=O.fallback,O=O.children,se=new Set;var xe={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:se,errorDigest:null},Ce=ni(m,J.chunks.length,xe,J.formatContext,!1,!1);J.children.push(Ce),J.lastPushedText=!1;var qe=ni(m,0,null,J.formatContext,!1,!1);qe.parentFlushed=!0,w.blockedBoundary=xe,w.blockedSegment=qe;try{if(Ci(m,w,O),m.responseState.generateStaticMarkup||qe.lastPushedText&&qe.textEmbedded&&qe.chunks.push("<!-- -->"),qe.status=1,kn(xe,qe),xe.pendingTasks===0)break e}catch(ot){qe.status=4,xe.forceClientRender=!0,xe.errorDigest=Er(m,ot)}finally{w.blockedBoundary=M,w.blockedSegment=J}w=to(m,$,M,Ce,se,w.legacyContext,w.context,w.treeContext),m.pingedTasks.push(w)}return}if(typeof M=="object"&&M!==null)switch(M.$$typeof){case De:if(O=Zi(m,w,M.render,O,J),br!==0){M=w.treeContext,w.treeContext=qi(M,1,0);try{Ut(m,w,O)}finally{w.treeContext=M}}else Ut(m,w,O);return;case Ue:M=M.type,O=ii(M,O),St(m,w,M,O,J);return;case Ee:if(J=O.children,M=M._context,O=O.value,$=M._currentValue2,M._currentValue2=O,se=hn,hn=O={parent:se,depth:se===null?0:se.depth+1,context:M,parentValue:$,value:O},w.context=O,Ut(m,w,J),m=hn,m===null)throw Error(a(403));O=m.parentValue,m.context._currentValue2=O===Sn?m.context._defaultValue:O,m=hn=m.parent,w.context=m;return;case Ae:O=O.children,O=O(M._currentValue2),Ut(m,w,O);return;case Fe:J=M._init,M=J(M._payload),O=ii(M,O),St(m,w,M,O,void 0);return}throw Error(a(130,M==null?M:typeof M,""))}}function Ut(m,w,M){if(w.node=M,typeof M=="object"&&M!==null){switch(M.$$typeof){case oe:St(m,w,M.type,M.props,M.ref);return;case Re:throw Error(a(257));case Fe:var O=M._init;M=O(M._payload),Ut(m,w,M);return}if(K(M)){bi(m,w,M);return}if(M===null||typeof M!="object"?O=null:(O=Zn&&M[Zn]||M["@@iterator"],O=typeof O=="function"?O:null),O&&(O=O.call(M))){if(M=O.next(),!M.done){var J=[];do J.push(M.value),M=O.next();while(!M.done);bi(m,w,J)}return}throw m=Object.prototype.toString.call(M),Error(a(31,m==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":m))}typeof M=="string"?(O=w.blockedSegment,O.lastPushedText=ie(w.blockedSegment.chunks,M,m.responseState,O.lastPushedText)):typeof M=="number"&&(O=w.blockedSegment,O.lastPushedText=ie(w.blockedSegment.chunks,""+M,m.responseState,O.lastPushedText))}function bi(m,w,M){for(var O=M.length,J=0;J<O;J++){var $=w.treeContext;w.treeContext=qi($,O,J);try{Ci(m,w,M[J])}finally{w.treeContext=$}}}function Ci(m,w,M){var O=w.blockedSegment.formatContext,J=w.legacyContext,$=w.context;try{return Ut(m,w,M)}catch(Ce){if(Qr(),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"){M=Ce;var se=w.blockedSegment,xe=ni(m,se.chunks.length,null,se.formatContext,se.lastPushedText,!0);se.children.push(xe),se.lastPushedText=!1,m=to(m,w.node,w.blockedBoundary,xe,w.abortSet,w.legacyContext,w.context,w.treeContext).ping,M.then(m,m),w.blockedSegment.formatContext=O,w.legacyContext=J,w.context=$,Qn($)}else throw w.blockedSegment.formatContext=O,w.legacyContext=J,w.context=$,Qn($),Ce}}function Pr(m){var w=m.blockedBoundary;m=m.blockedSegment,m.status=3,Cn(this,w,m)}function Ei(m,w,M){var O=m.blockedBoundary;m.blockedSegment.status=3,O===null?(w.allPendingTasks--,w.status!==2&&(w.status=2,w.destination!==null&&w.destination.push(null))):(O.pendingTasks--,O.forceClientRender||(O.forceClientRender=!0,m=M===void 0?Error(a(432)):M,O.errorDigest=w.onError(m),O.parentFlushed&&w.clientRenderedBoundaries.push(O)),O.fallbackAbortableTasks.forEach(function(J){return Ei(J,w,M)}),O.fallbackAbortableTasks.clear(),w.allPendingTasks--,w.allPendingTasks===0&&(O=w.onAllReady,O()))}function kn(m,w){if(w.chunks.length===0&&w.children.length===1&&w.children[0].boundary===null){var M=w.children[0];M.id=w.id,M.parentFlushed=!0,M.status===1&&kn(m,M)}else m.completedSegments.push(w)}function Cn(m,w,M){if(w===null){if(M.parentFlushed){if(m.completedRootSegment!==null)throw Error(a(389));m.completedRootSegment=M}m.pendingRootTasks--,m.pendingRootTasks===0&&(m.onShellError=gn,w=m.onShellReady,w())}else w.pendingTasks--,w.forceClientRender||(w.pendingTasks===0?(M.parentFlushed&&M.status===1&&kn(w,M),w.parentFlushed&&m.completedBoundaries.push(w),w.fallbackAbortableTasks.forEach(Pr,m),w.fallbackAbortableTasks.clear()):M.parentFlushed&&M.status===1&&(kn(w,M),w.completedSegments.length===1&&w.parentFlushed&&m.partialBoundaries.push(w)));m.allPendingTasks--,m.allPendingTasks===0&&(m=m.onAllReady,m())}function tn(m){if(m.status!==2){var w=hn,M=ti.current;ti.current=Ji;var O=ei;ei=m.responseState;try{var J=m.pingedTasks,$;for($=0;$<J.length;$++){var se=J[$],xe=m,Ce=se.blockedSegment;if(Ce.status===0){Qn(se.context);try{Ut(xe,se,se.node),xe.responseState.generateStaticMarkup||Ce.lastPushedText&&Ce.textEmbedded&&Ce.chunks.push("<!-- -->"),se.abortSet.delete(se),Ce.status=1,Cn(xe,se.blockedBoundary,Ce)}catch(jt){if(Qr(),typeof jt=="object"&&jt!==null&&typeof jt.then=="function"){var qe=se.ping;jt.then(qe,qe)}else{se.abortSet.delete(se),Ce.status=4;var ot=se.blockedBoundary,gt=jt,rn=Er(xe,gt);if(ot===null?ri(xe,gt):(ot.pendingTasks--,ot.forceClientRender||(ot.forceClientRender=!0,ot.errorDigest=rn,ot.parentFlushed&&xe.clientRenderedBoundaries.push(ot))),xe.allPendingTasks--,xe.allPendingTasks===0){var on=xe.onAllReady;on()}}}finally{}}}J.splice(0,$),m.destination!==null&&nn(m,m.destination)}catch(jt){Er(m,jt),ri(m,jt)}finally{ei=O,ti.current=M,M===Ji&&Qn(w)}}}function Hn(m,w,M){switch(M.parentFlushed=!0,M.status){case 0:var O=M.id=m.nextSegmentId++;return M.lastPushedText=!1,M.textEmbedded=!1,m=m.responseState,w.push('<template id="'),w.push(m.placeholderPrefix),m=O.toString(16),w.push(m),w.push('"></template>');case 1:M.status=2;var J=!0;O=M.chunks;var $=0;M=M.children;for(var se=0;se<M.length;se++){for(J=M[se];$<J.index;$++)w.push(O[$]);J=et(m,w,J)}for(;$<O.length-1;$++)w.push(O[$]);return $<O.length&&(J=w.push(O[$])),J;default:throw Error(a(390))}}function et(m,w,M){var O=M.boundary;if(O===null)return Hn(m,w,M);if(O.parentFlushed=!0,O.forceClientRender)return m.responseState.generateStaticMarkup||(O=O.errorDigest,w.push("<!--$!-->"),w.push("<template"),O&&(w.push(' data-dgst="'),O=V(O),w.push(O),w.push('"')),w.push("></template>")),Hn(m,w,M),m=m.responseState.generateStaticMarkup?!0:w.push("<!--/$-->"),m;if(0<O.pendingTasks){O.rootSegmentID=m.nextSegmentId++,0<O.completedSegments.length&&m.partialBoundaries.push(O);var J=m.responseState,$=J.nextSuspenseID++;return J=J.boundaryPrefix+$.toString(16),O=O.id=J,je(w,m.responseState,O),Hn(m,w,M),w.push("<!--/$-->")}if(O.byteSize>m.progressiveChunkSize)return O.rootSegmentID=m.nextSegmentId++,m.completedBoundaries.push(O),je(w,m.responseState,O.id),Hn(m,w,M),w.push("<!--/$-->");if(m.responseState.generateStaticMarkup||w.push("<!--$-->"),M=O.completedSegments,M.length!==1)throw Error(a(391));return et(m,w,M[0]),m=m.responseState.generateStaticMarkup?!0:w.push("<!--/$-->"),m}function xt(m,w,M){return Ne(w,m.responseState,M.formatContext,M.id),et(m,w,M),Se(w,M.formatContext)}function Mr(m,w,M){for(var O=M.completedSegments,J=0;J<O.length;J++)er(m,w,M,O[J]);if(O.length=0,m=m.responseState,O=M.id,M=M.rootSegmentID,w.push(m.startInlineScript),m.sentCompleteBoundaryFunction?w.push('$RC("'):(m.sentCompleteBoundaryFunction=!0,w.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')),O===null)throw Error(a(395));return M=M.toString(16),w.push(O),w.push('","'),w.push(m.segmentPrefix),w.push(M),w.push('")<\/script>')}function er(m,w,M,O){if(O.status===2)return!0;var J=O.id;if(J===-1){if((O.id=M.rootSegmentID)===-1)throw Error(a(392));return xt(m,w,O)}return xt(m,w,O),m=m.responseState,w.push(m.startInlineScript),m.sentCompleteSegmentFunction?w.push('$RS("'):(m.sentCompleteSegmentFunction=!0,w.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')),w.push(m.segmentPrefix),J=J.toString(16),w.push(J),w.push('","'),w.push(m.placeholderPrefix),w.push(J),w.push('")<\/script>')}function nn(m,w){try{var M=m.completedRootSegment;if(M!==null&&m.pendingRootTasks===0){et(m,w,M),m.completedRootSegment=null;var O=m.responseState.bootstrapChunks;for(M=0;M<O.length-1;M++)w.push(O[M]);M<O.length&&w.push(O[M])}var J=m.clientRenderedBoundaries,$;for($=0;$<J.length;$++){var se=J[$];O=w;var xe=m.responseState,Ce=se.id,qe=se.errorDigest,ot=se.errorMessage,gt=se.errorComponentStack;if(O.push(xe.startInlineScript),xe.sentClientRenderFunction?O.push('$RX("'):(xe.sentClientRenderFunction=!0,O.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')),Ce===null)throw Error(a(395));if(O.push(Ce),O.push('"'),qe||ot||gt){O.push(",");var rn=U(qe||"");O.push(rn)}if(ot||gt){O.push(",");var on=U(ot||"");O.push(on)}if(gt){O.push(",");var jt=U(gt);O.push(jt)}if(!O.push(")<\/script>")){m.destination=null,$++,J.splice(0,$);return}}J.splice(0,$);var Vn=m.completedBoundaries;for($=0;$<Vn.length;$++)if(!Mr(m,w,Vn[$])){m.destination=null,$++,Vn.splice(0,$);return}Vn.splice(0,$);var ln=m.partialBoundaries;for($=0;$<ln.length;$++){var Kt=ln[$];e:{J=m,se=w;var $t=Kt.completedSegments;for(xe=0;xe<$t.length;xe++)if(!er(J,se,Kt,$t[xe])){xe++,$t.splice(0,xe);var vn=!1;break e}$t.splice(0,xe),vn=!0}if(!vn){m.destination=null,$++,ln.splice(0,$);return}}ln.splice(0,$);var En=m.completedBoundaries;for($=0;$<En.length;$++)if(!Mr(m,w,En[$])){m.destination=null,$++,En.splice(0,$);return}En.splice(0,$)}finally{m.allPendingTasks===0&&m.pingedTasks.length===0&&m.clientRenderedBoundaries.length===0&&m.completedBoundaries.length===0&&w.push(null)}}function pr(m,w){try{var M=m.abortableTasks;M.forEach(function(O){return Ei(O,m,w)}),M.clear(),m.destination!==null&&nn(m,m.destination)}catch(O){Er(m,O),ri(m,O)}}function rt(){}function yt(m,w,M,O){var J=!1,$=null,se="",xe={push:function(qe){return qe!==null&&(se+=qe),!0},destroy:function(qe){J=!0,$=qe}},Ce=!1;if(m=eo(m,ue(M,w?w.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,rt,void 0,function(){Ce=!0}),tn(m),pr(m,O),m.status===1)m.status=2,xe.destroy(m.fatalError);else if(m.status!==2&&m.destination===null){m.destination=xe;try{nn(m,xe)}catch(qe){Er(m,qe),ri(m,qe)}}if(J)throw $;if(!Ce)throw Error(a(426));return se}return Ml.renderToNodeStream=function(){throw Error(a(207))},Ml.renderToStaticMarkup=function(m,w){return yt(m,w,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Ml.renderToStaticNodeStream=function(){throw Error(a(208))},Ml.renderToString=function(m,w){return yt(m,w,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server')},Ml.version="18.3.1",Ml}var _u={};/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function G5(){if(Pd)return _u;Pd=1;var o=ps();function a(h){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+h,N=1;N<arguments.length;N++)T+="&args[]="+encodeURIComponent(arguments[N]);return"Minified React error #"+h+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=null,c=0;function f(h,T){if(T.length!==0)if(512<T.length)0<c&&(h.enqueue(new Uint8Array(l.buffer,0,c)),l=new Uint8Array(512),c=0),h.enqueue(T);else{var N=l.length-c;N<T.length&&(N===0?h.enqueue(l):(l.set(T.subarray(0,N),c),h.enqueue(l),T=T.subarray(N)),l=new Uint8Array(512),c=0),l.set(T,c),c+=T.length}}function k(h,T){return f(h,T),!0}function y(h){l&&0<c&&(h.enqueue(new Uint8Array(l.buffer,0,c)),l=null,c=0)}var x=new TextEncoder;function S(h){return x.encode(h)}function b(h){return x.encode(h)}function R(h,T){typeof h.error=="function"?h.error(T):h.close()}var E=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W={},V={};function D(h){return E.call(V,h)?!0:E.call(W,h)?!1:A.test(h)?V[h]=!0:(W[h]=!0,!1)}function F(h,T,N,I,ne,Y,pe){this.acceptsBooleans=T===2||T===3||T===4,this.attributeName=I,this.attributeNamespace=ne,this.mustUseProperty=N,this.propertyName=h,this.type=T,this.sanitizeURL=Y,this.removeEmptyString=pe}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(h){K[h]=new F(h,0,!1,h,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(h){var T=h[0];K[T]=new F(T,1,!1,h[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(h){K[h]=new F(h,2,!1,h.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(h){K[h]=new F(h,2,!1,h,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(h){K[h]=new F(h,3,!1,h.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(h){K[h]=new F(h,3,!0,h,null,!1,!1)}),["capture","download"].forEach(function(h){K[h]=new F(h,4,!1,h,null,!1,!1)}),["cols","rows","size","span"].forEach(function(h){K[h]=new F(h,6,!1,h,null,!1,!1)}),["rowSpan","start"].forEach(function(h){K[h]=new F(h,5,!1,h.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function ee(h){return h[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(h){var T=h.replace(q,ee);K[T]=new F(T,1,!1,h,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(h){var T=h.replace(q,ee);K[T]=new F(T,1,!1,h,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(h){var T=h.replace(q,ee);K[T]=new F(T,1,!1,h,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(h){K[h]=new F(h,1,!1,h.toLowerCase(),null,!1,!1)}),K.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(h){K[h]=new F(h,1,!1,h.toLowerCase(),null,!0,!0)});var ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];Object.keys(ce).forEach(function(h){fe.forEach(function(T){T=T+h.charAt(0).toUpperCase()+h.substring(1),ce[T]=ce[h]})});var he=/["'&<>]/;function de(h){if(typeof h=="boolean"||typeof h=="number")return""+h;h=""+h;var T=he.exec(h);if(T){var N="",I,ne=0;for(I=T.index;I<h.length;I++){switch(h.charCodeAt(I)){case 34:T="&quot;";break;case 38:T="&amp;";break;case 39:T="&#x27;";break;case 60:T="&lt;";break;case 62:T="&gt;";break;default:continue}ne!==I&&(N+=h.substring(ne,I)),ne=I+1,N+=T}h=ne!==I?N+h.substring(ne,I):N}return h}var Pe=/([A-Z])/g,We=/^ms-/,Le=Array.isArray,Ie=b("<script>"),_e=b("<\/script>"),Xe=b('<script src="'),je=b('<script type="module" src="'),Ne=b('" async=""><\/script>'),Se=/(<\/|<)(s)(cript)/gi;function be(h,T,N,I){return""+T+(N==="s"?"\\u0073":"\\u0053")+I}function U(h,T,N,I,ne){h=h===void 0?"":h,T=T===void 0?Ie:b('<script nonce="'+de(T)+'">');var Y=[];if(N!==void 0&&Y.push(T,S((""+N).replace(Se,be)),_e),I!==void 0)for(N=0;N<I.length;N++)Y.push(Xe,S(de(I[N])),Ne);if(ne!==void 0)for(I=0;I<ne.length;I++)Y.push(je,S(de(ne[I])),Ne);return{bootstrapChunks:Y,startInlineScript:T,placeholderPrefix:b(h+"P:"),segmentPrefix:b(h+"S:"),boundaryPrefix:h+"B:",idPrefix:h,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function ue(h,T){return{insertionMode:h,selectedValue:T}}function ie(h){return ue(h==="http://www.w3.org/2000/svg"?2:h==="http://www.w3.org/1998/Math/MathML"?3:0,null)}function j(h,T,N){switch(T){case"select":return ue(1,N.value!=null?N.value:N.defaultValue);case"svg":return ue(2,null);case"math":return ue(3,null);case"foreignObject":return ue(1,null);case"table":return ue(4,null);case"thead":case"tbody":case"tfoot":return ue(5,null);case"colgroup":return ue(7,null);case"tr":return ue(6,null)}return 4<=h.insertionMode||h.insertionMode===0?ue(1,null):h}var oe=b("<!-- -->");function Re(h,T,N,I){return T===""?I:(I&&h.push(oe),h.push(S(de(T))),!0)}var Me=new Map,te=b(' style="'),me=b(":"),Ee=b(";");function Ae(h,T,N){if(typeof N!="object")throw Error(a(62));T=!0;for(var I in N)if(E.call(N,I)){var ne=N[I];if(ne!=null&&typeof ne!="boolean"&&ne!==""){if(I.indexOf("--")===0){var Y=S(de(I));ne=S(de((""+ne).trim()))}else{Y=I;var pe=Me.get(Y);pe!==void 0||(pe=b(de(Y.replace(Pe,"-$1").toLowerCase().replace(We,"-ms-"))),Me.set(Y,pe)),Y=pe,ne=typeof ne=="number"?ne===0||E.call(ce,I)?S(""+ne):S(ne+"px"):S(de((""+ne).trim()))}T?(T=!1,h.push(te,Y,me,ne)):h.push(Ee,Y,me,ne)}}T||h.push(ve)}var De=b(" "),Ye=b('="'),ve=b('"'),Ue=b('=""');function Fe(h,T,N,I){switch(N){case"style":Ae(h,T,I);return;case"defaultValue":case"defaultChecked":case"innerHTML":case"suppressContentEditableWarning":case"suppressHydrationWarning":return}if(!(2<N.length)||N[0]!=="o"&&N[0]!=="O"||N[1]!=="n"&&N[1]!=="N"){if(T=K.hasOwnProperty(N)?K[N]:null,T!==null){switch(typeof I){case"function":case"symbol":return;case"boolean":if(!T.acceptsBooleans)return}switch(N=S(T.attributeName),T.type){case 3:I&&h.push(De,N,Ue);break;case 4:I===!0?h.push(De,N,Ue):I!==!1&&h.push(De,N,Ye,S(de(I)),ve);break;case 5:isNaN(I)||h.push(De,N,Ye,S(de(I)),ve);break;case 6:!isNaN(I)&&1<=I&&h.push(De,N,Ye,S(de(I)),ve);break;default:T.sanitizeURL&&(I=""+I),h.push(De,N,Ye,S(de(I)),ve)}}else if(D(N)){switch(typeof I){case"function":case"symbol":return;case"boolean":if(T=N.toLowerCase().slice(0,5),T!=="data-"&&T!=="aria-")return}h.push(De,S(N),Ye,S(de(I)),ve)}}}var st=b(">"),wn=b("/>");function mn(h,T,N){if(T!=null){if(N!=null)throw Error(a(60));if(typeof T!="object"||!("__html"in T))throw Error(a(61));T=T.__html,T!=null&&h.push(S(""+T))}}function Sn(h){var T="";return o.Children.forEach(h,function(N){N!=null&&(T+=N)}),T}var Zn=b(' selected=""');function Jt(h,T,N,I){h.push(Dt(N));var ne=N=null,Y;for(Y in T)if(E.call(T,Y)){var pe=T[Y];if(pe!=null)switch(Y){case"children":N=pe;break;case"dangerouslySetInnerHTML":ne=pe;break;default:Fe(h,I,Y,pe)}}return h.push(st),mn(h,ne,N),typeof N=="string"?(h.push(S(de(N))),null):N}var jn=b(`
`),Fn=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,hn=new Map;function Dt(h){var T=hn.get(h);if(T===void 0){if(!Fn.test(h))throw Error(a(65,h));T=b("<"+h),hn.set(h,T)}return T}var Ki=b("<!DOCTYPE html>");function $i(h,T,N,I,ne){switch(T){case"select":h.push(Dt("select"));var Y=null,pe=null;for(lt in N)if(E.call(N,lt)){var we=N[lt];if(we!=null)switch(lt){case"children":Y=we;break;case"dangerouslySetInnerHTML":pe=we;break;case"defaultValue":case"value":break;default:Fe(h,I,lt,we)}}return h.push(st),mn(h,pe,Y),Y;case"option":pe=ne.selectedValue,h.push(Dt("option"));var Ge=we=null,it=null,lt=null;for(Y in N)if(E.call(N,Y)){var ht=N[Y];if(ht!=null)switch(Y){case"children":we=ht;break;case"selected":it=ht;break;case"dangerouslySetInnerHTML":lt=ht;break;case"value":Ge=ht;default:Fe(h,I,Y,ht)}}if(pe!=null)if(N=Ge!==null?""+Ge:Sn(we),Le(pe)){for(I=0;I<pe.length;I++)if(""+pe[I]===N){h.push(Zn);break}}else""+pe===N&&h.push(Zn);else it&&h.push(Zn);return h.push(st),mn(h,lt,we),we;case"textarea":h.push(Dt("textarea")),lt=pe=Y=null;for(we in N)if(E.call(N,we)&&(Ge=N[we],Ge!=null))switch(we){case"children":lt=Ge;break;case"value":Y=Ge;break;case"defaultValue":pe=Ge;break;case"dangerouslySetInnerHTML":throw Error(a(91));default:Fe(h,I,we,Ge)}if(Y===null&&pe!==null&&(Y=pe),h.push(st),lt!=null){if(Y!=null)throw Error(a(92));if(Le(lt)&&1<lt.length)throw Error(a(93));Y=""+lt}return typeof Y=="string"&&Y[0]===`
`&&h.push(jn),Y!==null&&h.push(S(de(""+Y))),null;case"input":h.push(Dt("input")),Ge=lt=we=Y=null;for(pe in N)if(E.call(N,pe)&&(it=N[pe],it!=null))switch(pe){case"children":case"dangerouslySetInnerHTML":throw Error(a(399,"input"));case"defaultChecked":Ge=it;break;case"defaultValue":we=it;break;case"checked":lt=it;break;case"value":Y=it;break;default:Fe(h,I,pe,it)}return lt!==null?Fe(h,I,"checked",lt):Ge!==null&&Fe(h,I,"checked",Ge),Y!==null?Fe(h,I,"value",Y):we!==null&&Fe(h,I,"value",we),h.push(wn),null;case"menuitem":h.push(Dt("menuitem"));for(var cn in N)if(E.call(N,cn)&&(Y=N[cn],Y!=null))switch(cn){case"children":case"dangerouslySetInnerHTML":throw Error(a(400));default:Fe(h,I,cn,Y)}return h.push(st),null;case"title":h.push(Dt("title")),Y=null;for(ht in N)if(E.call(N,ht)&&(pe=N[ht],pe!=null))switch(ht){case"children":Y=pe;break;case"dangerouslySetInnerHTML":throw Error(a(434));default:Fe(h,I,ht,pe)}return h.push(st),Y;case"listing":case"pre":h.push(Dt(T)),pe=Y=null;for(Ge in N)if(E.call(N,Ge)&&(we=N[Ge],we!=null))switch(Ge){case"children":Y=we;break;case"dangerouslySetInnerHTML":pe=we;break;default:Fe(h,I,Ge,we)}if(h.push(st),pe!=null){if(Y!=null)throw Error(a(60));if(typeof pe!="object"||!("__html"in pe))throw Error(a(61));N=pe.__html,N!=null&&(typeof N=="string"&&0<N.length&&N[0]===`
`?h.push(jn,S(N)):h.push(S(""+N)))}return typeof Y=="string"&&Y[0]===`
`&&h.push(jn),Y;case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":h.push(Dt(T));for(var Bt in N)if(E.call(N,Bt)&&(Y=N[Bt],Y!=null))switch(Bt){case"children":case"dangerouslySetInnerHTML":throw Error(a(399,T));default:Fe(h,I,Bt,Y)}return h.push(wn),null;case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return Jt(h,N,T,I);case"html":return ne.insertionMode===0&&h.push(Ki),Jt(h,N,T,I);default:if(T.indexOf("-")===-1&&typeof N.is!="string")return Jt(h,N,T,I);h.push(Dt(T)),pe=Y=null;for(it in N)if(E.call(N,it)&&(we=N[it],we!=null))switch(it){case"children":Y=we;break;case"dangerouslySetInnerHTML":pe=we;break;case"style":Ae(h,I,we);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":break;default:D(it)&&typeof we!="function"&&typeof we!="symbol"&&h.push(De,S(it),Ye,S(de(we)),ve)}return h.push(st),mn(h,pe,Y),Y}}var Kr=b("</"),$r=b(">"),Qn=b('<template id="'),Xi=b('"></template>'),ar=b("<!--$-->"),Tr=b('<!--$?--><template id="'),qi=b('"></template>'),wr=b("<!--$!-->"),Si=b("<!--/$-->"),So=b("<template"),Yi=b('"'),sr=b(' data-dgst="');b(' data-msg="'),b(' data-stck="');var Qi=b("></template>");function en(h,T,N){if(f(h,Tr),N===null)throw Error(a(395));return f(h,N),k(h,qi)}var Sr=b('<div hidden id="'),bn=b('">'),ft=b("</div>"),Zr=b('<svg aria-hidden="true" style="display:none" id="'),Xr=b('">'),br=b("</svg>"),Bn=b('<math aria-hidden="true" style="display:none" id="'),qr=b('">'),Wn=b("</math>"),Yr=b('<table hidden id="'),ur=b('">'),Qr=b("</table>"),Cr=b('<table hidden><tbody id="'),Zo=b('">'),zt=b("</tbody></table>"),He=b('<table hidden><tr id="'),Jr=b('">'),cr=b("</tr></table>"),Ji=b('<table hidden><colgroup id="'),ei=b('">'),ti=b("</colgroup></table>");function Jn(h,T,N,I){switch(N.insertionMode){case 0:case 1:return f(h,Sr),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,bn);case 2:return f(h,Zr),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,Xr);case 3:return f(h,Bn),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,qr);case 4:return f(h,Yr),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,ur);case 5:return f(h,Cr),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,Zo);case 6:return f(h,He),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,Jr);case 7:return f(h,Ji),f(h,T.segmentPrefix),f(h,S(I.toString(16))),k(h,ei);default:throw Error(a(397))}}function gn(h,T){switch(T.insertionMode){case 0:case 1:return k(h,ft);case 2:return k(h,br);case 3:return k(h,Wn);case 4:return k(h,Qr);case 5:return k(h,zt);case 6:return k(h,cr);case 7:return k(h,ti);default:throw Error(a(397))}}var eo=b('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),to=b('$RS("'),ni=b('","'),Er=b('")<\/script>'),ri=b('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),Zi=b('$RC("'),bo=b('","'),ii=b('")<\/script>'),St=b('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Ut=b('$RX("'),bi=b('"'),Ci=b(")<\/script>"),Pr=b(","),Ei=/[<\u2028\u2029]/g;function kn(h){return JSON.stringify(h).replace(Ei,function(T){switch(T){case"<":return"\\u003c";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React")}})}var Cn=Object.assign,tn=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),xt=Symbol.for("react.strict_mode"),Mr=Symbol.for("react.profiler"),er=Symbol.for("react.provider"),nn=Symbol.for("react.context"),pr=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),yt=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),M=Symbol.for("react.scope"),O=Symbol.for("react.debug_trace_mode"),J=Symbol.for("react.legacy_hidden"),$=Symbol.for("react.default_value"),se=Symbol.iterator;function xe(h){if(h==null)return null;if(typeof h=="function")return h.displayName||h.name||null;if(typeof h=="string")return h;switch(h){case et:return"Fragment";case Hn:return"Portal";case Mr:return"Profiler";case xt:return"StrictMode";case rt:return"Suspense";case yt:return"SuspenseList"}if(typeof h=="object")switch(h.$$typeof){case nn:return(h.displayName||"Context")+".Consumer";case er:return(h._context.displayName||"Context")+".Provider";case pr:var T=h.render;return h=h.displayName,h||(h=T.displayName||T.name||"",h=h!==""?"ForwardRef("+h+")":"ForwardRef"),h;case m:return T=h.displayName||null,T!==null?T:xe(h.type)||"Memo";case w:T=h._payload,h=h._init;try{return xe(h(T))}catch{}}return null}var Ce={};function qe(h,T){if(h=h.contextTypes,!h)return Ce;var N={},I;for(I in h)N[I]=T[I];return N}var ot=null;function gt(h,T){if(h!==T){h.context._currentValue=h.parentValue,h=h.parent;var N=T.parent;if(h===null){if(N!==null)throw Error(a(401))}else{if(N===null)throw Error(a(401));gt(h,N)}T.context._currentValue=T.value}}function rn(h){h.context._currentValue=h.parentValue,h=h.parent,h!==null&&rn(h)}function on(h){var T=h.parent;T!==null&&on(T),h.context._currentValue=h.value}function jt(h,T){if(h.context._currentValue=h.parentValue,h=h.parent,h===null)throw Error(a(402));h.depth===T.depth?gt(h,T):jt(h,T)}function Vn(h,T){var N=T.parent;if(N===null)throw Error(a(402));h.depth===N.depth?gt(h,N):Vn(h,N),T.context._currentValue=T.value}function ln(h){var T=ot;T!==h&&(T===null?on(h):h===null?rn(T):T.depth===h.depth?gt(T,h):T.depth>h.depth?jt(T,h):Vn(T,h),ot=h)}var Kt={isMounted:function(){return!1},enqueueSetState:function(h,T){h=h._reactInternals,h.queue!==null&&h.queue.push(T)},enqueueReplaceState:function(h,T){h=h._reactInternals,h.replace=!0,h.queue=[T]},enqueueForceUpdate:function(){}};function $t(h,T,N,I){var ne=h.state!==void 0?h.state:null;h.updater=Kt,h.props=N,h.state=ne;var Y={queue:[],replace:!1};h._reactInternals=Y;var pe=T.contextType;if(h.context=typeof pe=="object"&&pe!==null?pe._currentValue:I,pe=T.getDerivedStateFromProps,typeof pe=="function"&&(pe=pe(N,ne),ne=pe==null?ne:Cn({},ne,pe),h.state=ne),typeof T.getDerivedStateFromProps!="function"&&typeof h.getSnapshotBeforeUpdate!="function"&&(typeof h.UNSAFE_componentWillMount=="function"||typeof h.componentWillMount=="function"))if(T=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),T!==h.state&&Kt.enqueueReplaceState(h,h.state,null),Y.queue!==null&&0<Y.queue.length)if(T=Y.queue,pe=Y.replace,Y.queue=null,Y.replace=!1,pe&&T.length===1)h.state=T[0];else{for(Y=pe?T[0]:h.state,ne=!0,pe=pe?1:0;pe<T.length;pe++){var we=T[pe];we=typeof we=="function"?we.call(h,Y,N,I):we,we!=null&&(ne?(ne=!1,Y=Cn({},Y,we)):Cn(Y,we))}h.state=Y}else Y.queue=null}var vn={id:1,overflow:""};function En(h,T,N){var I=h.id;h=h.overflow;var ne=32-Qe(I)-1;I&=~(1<<ne),N+=1;var Y=32-Qe(T)+ne;if(30<Y){var pe=ne-ne%5;return Y=(I&(1<<pe)-1).toString(32),I>>=pe,ne-=pe,{id:1<<32-Qe(T)+ne|N<<ne|I,overflow:Y+h}}return{id:1<<Y|N<<ne|I,overflow:h}}var Qe=Math.clz32?Math.clz32:sl,Ft=Math.log,Tt=Math.LN2;function sl(h){return h>>>=0,h===0?32:31-(Ft(h)/Tt|0)|0}function oi(h,T){return h===T&&(h!==0||1/h===1/T)||h!==h&&T!==T}var ul=typeof Object.is=="function"?Object.is:oi,Pn=null,Mn=null,li=null,kt=null,Zt=!1,an=!1,Gn=0,Ln=null,Co=0;function Lr(){if(Pn===null)throw Error(a(321));return Pn}function Pi(){if(0<Co)throw Error(a(312));return{memoizedState:null,queue:null,next:null}}function Mi(){return kt===null?li===null?(Zt=!1,li=kt=Pi()):(Zt=!0,kt=li):kt.next===null?(Zt=!1,kt=kt.next=Pi()):(Zt=!0,kt=kt.next),kt}function Li(){Mn=Pn=null,an=!1,li=null,Co=0,kt=Ln=null}function dt(h,T){return typeof T=="function"?T(h):T}function dr(h,T,N){if(Pn=Lr(),kt=Mi(),Zt){var I=kt.queue;if(T=I.dispatch,Ln!==null&&(N=Ln.get(I),N!==void 0)){Ln.delete(I),I=kt.memoizedState;do I=h(I,N.action),N=N.next;while(N!==null);return kt.memoizedState=I,[I,T]}return[kt.memoizedState,T]}return h=h===dt?typeof T=="function"?T():T:N!==void 0?N(T):T,kt.memoizedState=h,h=kt.queue={last:null,dispatch:null},h=h.dispatch=Nr.bind(null,Pn,h),[kt.memoizedState,h]}function sn(h,T){if(Pn=Lr(),kt=Mi(),T=T===void 0?null:T,kt!==null){var N=kt.memoizedState;if(N!==null&&T!==null){var I=N[1];e:if(I===null)I=!1;else{for(var ne=0;ne<I.length&&ne<T.length;ne++)if(!ul(T[ne],I[ne])){I=!1;break e}I=!0}if(I)return N[0]}}return h=h(),kt.memoizedState=[h,T],h}function Nr(h,T,N){if(25<=Co)throw Error(a(301));if(h===Pn)if(an=!0,h={action:N,next:null},Ln===null&&(Ln=new Map),N=Ln.get(T),N===void 0)Ln.set(T,h);else{for(T=N;T.next!==null;)T=T.next;T.next=h}}function cl(){throw Error(a(394))}function ai(){}var si={readContext:function(h){return h._currentValue},useContext:function(h){return Lr(),h._currentValue},useMemo:sn,useReducer:dr,useRef:function(h){Pn=Lr(),kt=Mi();var T=kt.memoizedState;return T===null?(h={current:h},kt.memoizedState=h):T},useState:function(h){return dr(dt,h)},useInsertionEffect:ai,useLayoutEffect:function(){},useCallback:function(h,T){return sn(function(){return h},T)},useImperativeHandle:ai,useEffect:ai,useDebugValue:ai,useDeferredValue:function(h){return Lr(),h},useTransition:function(){return Lr(),[!1,cl]},useId:function(){var h=Mn.treeContext,T=h.overflow;h=h.id,h=(h&~(1<<32-Qe(h)-1)).toString(32)+T;var N=no;if(N===null)throw Error(a(404));return T=Gn++,h=":"+N.idPrefix+"R"+h,0<T&&(h+="H"+T.toString(32)),h+":"},useMutableSource:function(h,T){return Lr(),T(h._source)},useSyncExternalStore:function(h,T,N){if(N===void 0)throw Error(a(407));return N()}},no=null,Ht=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Ni(h){return console.error(h),null}function ui(){}function ci(h,T,N,I,ne,Y,pe,we,Ge){var it=[],lt=new Set;return T={destination:null,responseState:T,progressiveChunkSize:I===void 0?12800:I,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:lt,pingedTasks:it,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:ne===void 0?Ni:ne,onAllReady:Y===void 0?ui:Y,onShellReady:pe===void 0?ui:pe,onShellError:we===void 0?ui:we,onFatalError:Ge===void 0?ui:Ge},N=Xt(T,0,null,N,!1,!1),N.parentFlushed=!0,h=pl(T,h,null,N,lt,Ce,null,vn),it.push(h),T}function pl(h,T,N,I,ne,Y,pe,we){h.allPendingTasks++,N===null?h.pendingRootTasks++:N.pendingTasks++;var Ge={node:T,ping:function(){var it=h.pingedTasks;it.push(Ge),it.length===1&&Mo(h)},blockedBoundary:N,blockedSegment:I,abortSet:ne,legacyContext:Y,context:pe,treeContext:we};return ne.add(Ge),Ge}function Xt(h,T,N,I,ne,Y){return{status:0,id:-1,index:T,parentFlushed:!1,chunks:[],children:[],formatContext:I,boundary:N,lastPushedText:ne,textEmbedded:Y}}function pi(h,T){if(h=h.onError(T),h!=null&&typeof h!="string")throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof h+'" instead');return h}function fr(h,T){var N=h.onShellError;N(T),N=h.onFatalError,N(T),h.destination!==null?(h.status=2,R(h.destination,T)):(h.status=1,h.fatalError=T)}function Nn(h,T,N,I,ne){for(Pn={},Mn=T,Gn=0,h=N(I,ne);an;)an=!1,Gn=0,Co+=1,kt=null,h=N(I,ne);return Li(),h}function Eo(h,T,N,I){var ne=N.render(),Y=I.childContextTypes;if(Y!=null){var pe=T.legacyContext;if(typeof N.getChildContext!="function")I=pe;else{N=N.getChildContext();for(var we in N)if(!(we in Y))throw Error(a(108,xe(I)||"Unknown",we));I=Cn({},pe,N)}T.legacyContext=I,yn(h,T,ne),T.legacyContext=pe}else yn(h,T,ne)}function dl(h,T){if(h&&h.defaultProps){T=Cn({},T),h=h.defaultProps;for(var N in h)T[N]===void 0&&(T[N]=h[N]);return T}return T}function ro(h,T,N,I,ne){if(typeof N=="function")if(N.prototype&&N.prototype.isReactComponent){ne=qe(N,T.legacyContext);var Y=N.contextType;Y=new N(I,typeof Y=="object"&&Y!==null?Y._currentValue:ne),$t(Y,N,I,ne),Eo(h,T,Y,N)}else{Y=qe(N,T.legacyContext),ne=Nn(h,T,N,I,Y);var pe=Gn!==0;if(typeof ne=="object"&&ne!==null&&typeof ne.render=="function"&&ne.$$typeof===void 0)$t(ne,N,I,Y),Eo(h,T,ne,N);else if(pe){I=T.treeContext,T.treeContext=En(I,1,0);try{yn(h,T,ne)}finally{T.treeContext=I}}else yn(h,T,ne)}else if(typeof N=="string"){switch(ne=T.blockedSegment,Y=$i(ne.chunks,N,I,h.responseState,ne.formatContext),ne.lastPushedText=!1,pe=ne.formatContext,ne.formatContext=j(pe,N,I),Po(h,T,Y),ne.formatContext=pe,N){case"area":case"base":case"br":case"col":case"embed":case"hr":case"img":case"input":case"keygen":case"link":case"meta":case"param":case"source":case"track":case"wbr":break;default:ne.chunks.push(Kr,S(N),$r)}ne.lastPushedText=!1}else{switch(N){case J:case O:case xt:case Mr:case et:yn(h,T,I.children);return;case yt:yn(h,T,I.children);return;case M:throw Error(a(343));case rt:e:{N=T.blockedBoundary,ne=T.blockedSegment,Y=I.fallback,I=I.children,pe=new Set;var we={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:pe,errorDigest:null},Ge=Xt(h,ne.chunks.length,we,ne.formatContext,!1,!1);ne.children.push(Ge),ne.lastPushedText=!1;var it=Xt(h,0,null,ne.formatContext,!1,!1);it.parentFlushed=!0,T.blockedBoundary=we,T.blockedSegment=it;try{if(Po(h,T,I),it.lastPushedText&&it.textEmbedded&&it.chunks.push(oe),it.status=1,Ri(we,it),we.pendingTasks===0)break e}catch(lt){it.status=4,we.forceClientRender=!0,we.errorDigest=pi(h,lt)}finally{T.blockedBoundary=N,T.blockedSegment=ne}T=pl(h,Y,N,Ge,pe,T.legacyContext,T.context,T.treeContext),h.pingedTasks.push(T)}return}if(typeof N=="object"&&N!==null)switch(N.$$typeof){case pr:if(I=Nn(h,T,N.render,I,ne),Gn!==0){N=T.treeContext,T.treeContext=En(N,1,0);try{yn(h,T,I)}finally{T.treeContext=N}}else yn(h,T,I);return;case m:N=N.type,I=dl(N,I),ro(h,T,N,I,ne);return;case er:if(ne=I.children,N=N._context,I=I.value,Y=N._currentValue,N._currentValue=I,pe=ot,ot=I={parent:pe,depth:pe===null?0:pe.depth+1,context:N,parentValue:Y,value:I},T.context=I,yn(h,T,ne),h=ot,h===null)throw Error(a(403));I=h.parentValue,h.context._currentValue=I===$?h.context._defaultValue:I,h=ot=h.parent,T.context=h;return;case nn:I=I.children,I=I(N._currentValue),yn(h,T,I);return;case w:ne=N._init,N=ne(N._payload),I=dl(N,I),ro(h,T,N,I,void 0);return}throw Error(a(130,N==null?N:typeof N,""))}}function yn(h,T,N){if(T.node=N,typeof N=="object"&&N!==null){switch(N.$$typeof){case tn:ro(h,T,N.type,N.props,N.ref);return;case Hn:throw Error(a(257));case w:var I=N._init;N=I(N._payload),yn(h,T,N);return}if(Le(N)){io(h,T,N);return}if(N===null||typeof N!="object"?I=null:(I=se&&N[se]||N["@@iterator"],I=typeof I=="function"?I:null),I&&(I=I.call(N))){if(N=I.next(),!N.done){var ne=[];do ne.push(N.value),N=I.next();while(!N.done);io(h,T,ne)}return}throw h=Object.prototype.toString.call(N),Error(a(31,h==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":h))}typeof N=="string"?(I=T.blockedSegment,I.lastPushedText=Re(T.blockedSegment.chunks,N,h.responseState,I.lastPushedText)):typeof N=="number"&&(I=T.blockedSegment,I.lastPushedText=Re(T.blockedSegment.chunks,""+N,h.responseState,I.lastPushedText))}function io(h,T,N){for(var I=N.length,ne=0;ne<I;ne++){var Y=T.treeContext;T.treeContext=En(Y,I,ne);try{Po(h,T,N[ne])}finally{T.treeContext=Y}}}function Po(h,T,N){var I=T.blockedSegment.formatContext,ne=T.legacyContext,Y=T.context;try{return yn(h,T,N)}catch(Ge){if(Li(),typeof Ge=="object"&&Ge!==null&&typeof Ge.then=="function"){N=Ge;var pe=T.blockedSegment,we=Xt(h,pe.chunks.length,null,pe.formatContext,pe.lastPushedText,!0);pe.children.push(we),pe.lastPushedText=!1,h=pl(h,T.node,T.blockedBoundary,we,T.abortSet,T.legacyContext,T.context,T.treeContext).ping,N.then(h,h),T.blockedSegment.formatContext=I,T.legacyContext=ne,T.context=Y,ln(Y)}else throw T.blockedSegment.formatContext=I,T.legacyContext=ne,T.context=Y,ln(Y),Ge}}function Ea(h){var T=h.blockedBoundary;h=h.blockedSegment,h.status=3,Vl(this,T,h)}function Hl(h,T,N){var I=h.blockedBoundary;h.blockedSegment.status=3,I===null?(T.allPendingTasks--,T.status!==2&&(T.status=2,T.destination!==null&&T.destination.close())):(I.pendingTasks--,I.forceClientRender||(I.forceClientRender=!0,h=N===void 0?Error(a(432)):N,I.errorDigest=T.onError(h),I.parentFlushed&&T.clientRenderedBoundaries.push(I)),I.fallbackAbortableTasks.forEach(function(ne){return Hl(ne,T,N)}),I.fallbackAbortableTasks.clear(),T.allPendingTasks--,T.allPendingTasks===0&&(I=T.onAllReady,I()))}function Ri(h,T){if(T.chunks.length===0&&T.children.length===1&&T.children[0].boundary===null){var N=T.children[0];N.id=T.id,N.parentFlushed=!0,N.status===1&&Ri(h,N)}else h.completedSegments.push(T)}function Vl(h,T,N){if(T===null){if(N.parentFlushed){if(h.completedRootSegment!==null)throw Error(a(389));h.completedRootSegment=N}h.pendingRootTasks--,h.pendingRootTasks===0&&(h.onShellError=ui,T=h.onShellReady,T())}else T.pendingTasks--,T.forceClientRender||(T.pendingTasks===0?(N.parentFlushed&&N.status===1&&Ri(T,N),T.parentFlushed&&h.completedBoundaries.push(T),T.fallbackAbortableTasks.forEach(Ea,h),T.fallbackAbortableTasks.clear()):N.parentFlushed&&N.status===1&&(Ri(T,N),T.completedSegments.length===1&&T.parentFlushed&&h.partialBoundaries.push(T)));h.allPendingTasks--,h.allPendingTasks===0&&(h=h.onAllReady,h())}function Mo(h){if(h.status!==2){var T=ot,N=Ht.current;Ht.current=si;var I=no;no=h.responseState;try{var ne=h.pingedTasks,Y;for(Y=0;Y<ne.length;Y++){var pe=ne[Y],we=h,Ge=pe.blockedSegment;if(Ge.status===0){ln(pe.context);try{yn(we,pe,pe.node),Ge.lastPushedText&&Ge.textEmbedded&&Ge.chunks.push(oe),pe.abortSet.delete(pe),Ge.status=1,Vl(we,pe.blockedBoundary,Ge)}catch(Rn){if(Li(),typeof Rn=="object"&&Rn!==null&&typeof Rn.then=="function"){var it=pe.ping;Rn.then(it,it)}else{pe.abortSet.delete(pe),Ge.status=4;var lt=pe.blockedBoundary,ht=Rn,cn=pi(we,ht);if(lt===null?fr(we,ht):(lt.pendingTasks--,lt.forceClientRender||(lt.forceClientRender=!0,lt.errorDigest=cn,lt.parentFlushed&&we.clientRenderedBoundaries.push(lt))),we.allPendingTasks--,we.allPendingTasks===0){var Bt=we.onAllReady;Bt()}}}finally{}}}ne.splice(0,Y),h.destination!==null&&un(h,h.destination)}catch(Rn){pi(h,Rn),fr(h,Rn)}finally{no=I,Ht.current=N,N===si&&ln(T)}}}function oo(h,T,N){switch(N.parentFlushed=!0,N.status){case 0:var I=N.id=h.nextSegmentId++;return N.lastPushedText=!1,N.textEmbedded=!1,h=h.responseState,f(T,Qn),f(T,h.placeholderPrefix),h=S(I.toString(16)),f(T,h),k(T,Xi);case 1:N.status=2;var ne=!0;I=N.chunks;var Y=0;N=N.children;for(var pe=0;pe<N.length;pe++){for(ne=N[pe];Y<ne.index;Y++)f(T,I[Y]);ne=di(h,T,ne)}for(;Y<I.length-1;Y++)f(T,I[Y]);return Y<I.length&&(ne=k(T,I[Y])),ne;default:throw Error(a(390))}}function di(h,T,N){var I=N.boundary;if(I===null)return oo(h,T,N);if(I.parentFlushed=!0,I.forceClientRender)I=I.errorDigest,k(T,wr),f(T,So),I&&(f(T,sr),f(T,S(de(I))),f(T,Yi)),k(T,Qi),oo(h,T,N);else if(0<I.pendingTasks){I.rootSegmentID=h.nextSegmentId++,0<I.completedSegments.length&&h.partialBoundaries.push(I);var ne=h.responseState,Y=ne.nextSuspenseID++;ne=b(ne.boundaryPrefix+Y.toString(16)),I=I.id=ne,en(T,h.responseState,I),oo(h,T,N)}else if(I.byteSize>h.progressiveChunkSize)I.rootSegmentID=h.nextSegmentId++,h.completedBoundaries.push(I),en(T,h.responseState,I.id),oo(h,T,N);else{if(k(T,ar),N=I.completedSegments,N.length!==1)throw Error(a(391));di(h,T,N[0])}return k(T,Si)}function Rr(h,T,N){return Jn(T,h.responseState,N.formatContext,N.id),di(h,T,N),gn(T,N.formatContext)}function Gl(h,T,N){for(var I=N.completedSegments,ne=0;ne<I.length;ne++)Ir(h,T,N,I[ne]);if(I.length=0,h=h.responseState,I=N.id,N=N.rootSegmentID,f(T,h.startInlineScript),h.sentCompleteBoundaryFunction?f(T,Zi):(h.sentCompleteBoundaryFunction=!0,f(T,ri)),I===null)throw Error(a(395));return N=S(N.toString(16)),f(T,I),f(T,bo),f(T,h.segmentPrefix),f(T,N),k(T,ii)}function Ir(h,T,N,I){if(I.status===2)return!0;var ne=I.id;if(ne===-1){if((I.id=N.rootSegmentID)===-1)throw Error(a(392));return Rr(h,T,I)}return Rr(h,T,I),h=h.responseState,f(T,h.startInlineScript),h.sentCompleteSegmentFunction?f(T,to):(h.sentCompleteSegmentFunction=!0,f(T,eo)),f(T,h.segmentPrefix),ne=S(ne.toString(16)),f(T,ne),f(T,ni),f(T,h.placeholderPrefix),f(T,ne),k(T,Er)}function un(h,T){l=new Uint8Array(512),c=0;try{var N=h.completedRootSegment;if(N!==null&&h.pendingRootTasks===0){di(h,T,N),h.completedRootSegment=null;var I=h.responseState.bootstrapChunks;for(N=0;N<I.length-1;N++)f(T,I[N]);N<I.length&&k(T,I[N])}var ne=h.clientRenderedBoundaries,Y;for(Y=0;Y<ne.length;Y++){var pe=ne[Y];I=T;var we=h.responseState,Ge=pe.id,it=pe.errorDigest,lt=pe.errorMessage,ht=pe.errorComponentStack;if(f(I,we.startInlineScript),we.sentClientRenderFunction?f(I,Ut):(we.sentClientRenderFunction=!0,f(I,St)),Ge===null)throw Error(a(395));f(I,Ge),f(I,bi),(it||lt||ht)&&(f(I,Pr),f(I,S(kn(it||"")))),(lt||ht)&&(f(I,Pr),f(I,S(kn(lt||"")))),ht&&(f(I,Pr),f(I,S(kn(ht)))),k(I,Ci)}ne.splice(0,Y);var cn=h.completedBoundaries;for(Y=0;Y<cn.length;Y++)Gl(h,T,cn[Y]);cn.splice(0,Y),y(T),l=new Uint8Array(512),c=0;var Bt=h.partialBoundaries;for(Y=0;Y<Bt.length;Y++){var Rn=Bt[Y];e:{ne=h,pe=T;var mr=Rn.completedSegments;for(we=0;we<mr.length;we++)if(!Ir(ne,pe,Rn,mr[we])){we++,mr.splice(0,we);var Lo=!1;break e}mr.splice(0,we),Lo=!0}if(!Lo){h.destination=null,Y++,Bt.splice(0,Y);return}}Bt.splice(0,Y);var Un=h.completedBoundaries;for(Y=0;Y<Un.length;Y++)Gl(h,T,Un[Y]);Un.splice(0,Y)}finally{y(T),h.allPendingTasks===0&&h.pingedTasks.length===0&&h.clientRenderedBoundaries.length===0&&h.completedBoundaries.length===0&&T.close()}}function fl(h,T){try{var N=h.abortableTasks;N.forEach(function(I){return Hl(I,h,T)}),N.clear(),h.destination!==null&&un(h,h.destination)}catch(I){pi(h,I),fr(h,I)}}return _u.renderToReadableStream=function(h,T){return new Promise(function(N,I){var ne,Y,pe=new Promise(function(lt,ht){Y=lt,ne=ht}),we=ci(h,U(T?T.identifierPrefix:void 0,T?T.nonce:void 0,T?T.bootstrapScriptContent:void 0,T?T.bootstrapScripts:void 0,T?T.bootstrapModules:void 0),ie(T?T.namespaceURI:void 0),T?T.progressiveChunkSize:void 0,T?T.onError:void 0,Y,function(){var lt=new ReadableStream({type:"bytes",pull:function(ht){if(we.status===1)we.status=2,R(ht,we.fatalError);else if(we.status!==2&&we.destination===null){we.destination=ht;try{un(we,ht)}catch(cn){pi(we,cn),fr(we,cn)}}},cancel:function(){fl(we)}},{highWaterMark:0});lt.allReady=pe,N(lt)},function(lt){pe.catch(function(){}),I(lt)},ne);if(T&&T.signal){var Ge=T.signal,it=function(){fl(we,Ge.reason),Ge.removeEventListener("abort",it)};Ge.addEventListener("abort",it)}Mo(we)})},_u.version="18.3.1",_u}var Md;function U5(){if(Md)return rl;Md=1;var o,a;return o=V5(),a=G5(),rl.version=o.version,rl.renderToString=o.renderToString,rl.renderToStaticMarkup=o.renderToStaticMarkup,rl.renderToNodeStream=o.renderToNodeStream,rl.renderToStaticNodeStream=o.renderToStaticNodeStream,rl.renderToReadableStream=a.renderToReadableStream,rl}var Z1=U5();function b1(o,a,l){let c=1/0,f=0;l.forEach((y,x)=>{const S=Dl(o,a,y.lat,y.lon);S<c&&(c=S,f=x)});let k=0;for(let y=1;y<=f;y++){const x=l[y-1],S=l[y];k+=Dl(x.lat,x.lon,S.lat,S.lon)}return k}function K5(o,a){if(a.length===0)return null;let l=0;for(let c=1;c<a.length;c++){const f=a[c-1],k=a[c],y=Dl(f.lat,f.lon,k.lat,k.lon);if(l+y>=o){const x=(o-l)/y,S={lat:f.lat+(k.lat-f.lat)*x,lon:f.lon+(k.lon-f.lon)*x};return f.ele!==void 0&&k.ele!==void 0&&(S.ele=f.ele+(k.ele-f.ele)*x),S}l+=y}return a[a.length-1]}function $5({bounds:o}){const a=Q1();return P.useEffect(()=>{o&&o.isValid()&&a.fitBounds(o,{padding:[50,50]})},[o,a]),null}function X5({onReady:o}){const a=Q1();return P.useEffect(()=>{a.whenReady(()=>{o()})},[a,o]),null}function q5({isFullscreen:o}){const a=Q1();return P.useEffect(()=>{const l=[setTimeout(()=>a.invalidateSize(),0),setTimeout(()=>a.invalidateSize(),100),setTimeout(()=>a.invalidateSize(),300),setTimeout(()=>a.invalidateSize(),500)];return()=>l.forEach(c=>clearTimeout(c))},[o,a]),null}function Y5({isFullscreen:o,onToggle:a,openText:l,closeText:c}){return _.jsx("div",{className:"leaflet-top leaflet-right",style:{position:"absolute",top:"10px",right:"10px",zIndex:1e3},children:_.jsx("div",{className:"leaflet-control",children:_.jsx("button",{onClick:a,className:"bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-lg shadow-lg transition-colors border border-gray-300",title:o?c:l,children:o?_.jsx(Vh,{className:"w-5 h-5"}):_.jsx(Hh,{className:"w-5 h-5"})})})})}function Q5({allPoints:o,selectedPoints:a,startKm:l=0,endKm:c,onStartKmChange:f,onDistanceChange:k,pointerKm:y,onPointerKmChange:x,elevationProfile:S,translations:b}){const[R,E]=P.useState(!1),[A,W]=P.useState(!0),V=b||{openFullscreen:"Open fullscreen",closeFullscreen:"Close fullscreen",startMarker:"Start",endMarker:"End",noRouteData:"No route data available",dragToAdjust:"Drag to adjust"},D=P.useMemo(()=>{const Ne=Z1.renderToStaticMarkup(_.jsx("div",{style:{color:"#22C55E",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:_.jsx(f1,{size:32,fill:"#22C55E",strokeWidth:2})}));return new _i.DivIcon({html:Ne,className:"custom-marker-icon",iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]})},[]),F=P.useMemo(()=>{const Ne=Z1.renderToStaticMarkup(_.jsx("div",{style:{color:"#EF4444",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:_.jsx(f1,{size:32,fill:"#EF4444",strokeWidth:2})}));return new _i.DivIcon({html:Ne,className:"custom-marker-icon",iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]})},[]),K=P.useMemo(()=>{const Ne=Z1.renderToStaticMarkup(_.jsx("div",{style:{color:"#F59E0B",filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:_.jsx(f1,{size:28,fill:"#F59E0B",strokeWidth:2})}));return new _i.DivIcon({html:Ne,className:"custom-marker-icon",iconSize:[28,28],iconAnchor:[14,28],popupAnchor:[0,-28]})},[]),q=P.useMemo(()=>o.map(Ne=>[Ne.lat,Ne.lon]),[o]),ee=P.useMemo(()=>a==null?void 0:a.map(Ne=>[Ne.lat,Ne.lon]),[a]),ce=P.useMemo(()=>{const Ne=new _i.LatLngBounds([]);return(a&&a.length>0?a:o).forEach(be=>Ne.extend([be.lat,be.lon])),Ne},[o,a]),fe=P.useMemo(()=>{if(!a||a.length===0)return null;const Ne=new _i.LatLngBounds([]);return a.forEach(Se=>Ne.extend([Se.lat,Se.lon])),Ne},[a]),he=(a==null?void 0:a[0])||o[0],de=(a==null?void 0:a[a.length-1])||o[o.length-1],Pe=P.useMemo(()=>y==null||!a||a.length===0?null:K5(y,a),[y,a]),We=P.useMemo(()=>{if(y==null||!a||a.length===0)return null;let Ne=0;for(let Se=1;Se<a.length;Se++){const be=a[Se-1],U=a[Se],ue=Dl(be.lat,be.lon,U.lat,U.lon);if(Ne+ue>=y){if(be.ele!==void 0&&U.ele!==void 0){const ie=ue*1e3,j=U.ele-be.ele;return ie>0?j/ie:0}return null}Ne+=ue}return null},[y,a]),Le=()=>{E(!R),W(!1)};P.useEffect(()=>{const Ne=document.body.style.overflow;return R?document.body.style.overflow="hidden":document.body.style.overflow=Ne||"",()=>{document.body.style.overflow=Ne||""}},[R]);const Ie=Ne=>{if(!f)return;const{lat:Se,lng:be}=Ne.target.getLatLng(),U=b1(Se,be,o),ue=Math.round(U);f(ue)},_e=Ne=>{if(!k||l===void 0)return;const{lat:Se,lng:be}=Ne.target.getLatLng(),ue=b1(Se,be,o)-l,ie=Math.max(10,Math.round(ue));k(ie)},Xe=Ne=>{if(!x||!a||a.length===0)return;const{lat:Se,lng:be}=Ne.target.getLatLng(),U=b1(Se,be,a);x(U)};if(o.length===0)return _.jsx("div",{className:"w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center",children:_.jsx("p",{className:"text-gray-500",children:V.noRouteData})});const je=_.jsxs("div",{id:"map-content-container",className:"overflow-hidden shadow-lg relative w-full h-full rounded-lg border-2 border-border",children:[A&&_.jsx("div",{id:"map-loading-indicator",className:"absolute inset-0 bg-gray-100 dark:bg-gray-800 z-[1000] flex items-center justify-center",children:_.jsxs("div",{className:"flex flex-col items-center gap-3",children:[_.jsx("div",{className:"w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"}),_.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Kaart laden..."})]})}),_.jsxs(B5,{id:"leaflet-map-container",center:[o[0].lat,o[0].lon],zoom:13,className:"w-full h-full",scrollWheelZoom:!0,children:[_.jsx(W5,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),_.jsx(X5,{onReady:()=>W(!1)}),_.jsx($5,{bounds:fe||ce}),_.jsx(q5,{isFullscreen:R}),_.jsx(Y5,{isFullscreen:R,onToggle:Le,openText:V.openFullscreen,closeText:V.closeFullscreen}),_.jsx(bd,{positions:q,pathOptions:{color:"#6B7280",weight:6,opacity:.8}}),ee&&ee.length>0&&_.jsx(bd,{positions:ee,pathOptions:{color:"#3B82F6",weight:8,opacity:.95}}),he&&_.jsx(S1,{position:[he.lat,he.lon],icon:D,draggable:!!f,eventHandlers:{dragend:Ie},children:_.jsx(Cd,{autoPan:!1,children:_.jsxs("div",{className:"text-sm",children:[_.jsx("p",{className:"font-semibold",children:V.startMarker}),_.jsxs("p",{children:[l.toFixed(1)," km"]}),f&&_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:V.dragToAdjust})]})})}),de&&a&&a.length>0&&_.jsx(S1,{position:[de.lat,de.lon],icon:F,draggable:!!k,eventHandlers:{dragend:_e},children:_.jsx(Cd,{autoPan:!1,children:_.jsxs("div",{className:"text-sm",children:[_.jsx("p",{className:"font-semibold",children:V.endMarker}),_.jsxs("p",{children:[c==null?void 0:c.toFixed(1)," km"]}),k&&_.jsx("p",{className:"text-xs text-gray-500 mt-1",children:V.dragToAdjust})]})})}),Pe&&_.jsx(S1,{position:[Pe.lat,Pe.lon],icon:K,draggable:!!x,eventHandlers:{dragend:Xe},children:_.jsx(H5,{permanent:!0,direction:"top",offset:[0,-10],children:_.jsxs("div",{className:"text-xs text-center",children:[Pe.ele!==void 0&&_.jsxs("div",{className:"font-bold text-amber-500",children:[Math.round(Pe.ele),"m"]}),We!==null&&_.jsxs("div",{className:`font-semibold ${We>=0?"text-red-500":"text-blue-500"}`,children:[(We*100).toFixed(1),"%"]})]})})})]})]});return R&&S?_.jsx("div",{id:"fullscreen-with-elevation",className:"fixed top-0 left-0 md:top-4 md:left-4 z-[9999] w-screen h-screen md:w-[calc(100vw-2rem)] md:h-[calc(100vh-2rem)] md:rounded-lg overflow-hidden bg-background",children:_.jsxs("div",{className:"flex flex-col h-full gap-4 p-4",children:[_.jsx("div",{id:"fullscreen-map-wrapper",className:"flex-1 min-h-0",children:je}),_.jsx("div",{id:"fullscreen-elevation-wrapper",className:"h-48 overflow-y-auto",children:S})]})}):R?_.jsx("div",{id:"fullscreen-map-only",className:"fixed top-0 left-0 md:top-4 md:left-4 z-[9999] w-screen h-screen md:w-[calc(100vw-2rem)] md:h-[calc(100vh-2rem)] md:rounded-lg overflow-hidden",children:je}):je}function Ld({points:o,startKm:a=0,className:l="",currentStartKm:c=0,currentDistanceKm:f=100,totalRouteDistanceKm:k=1e3,onStartKmChange:y,onDistanceChange:x,pointerKm:S,onPointerKmChange:b}){const R=P.useMemo(()=>{const te=o.filter(st=>st.ele!==void 0);if(te.length===0)return null;const me=[0];let Ee=0;for(let st=1;st<te.length;st++){const wn=Dl(te[st-1].lat,te[st-1].lon,te[st].lat,te[st].lon);Ee+=wn,me.push(Ee)}const Ae=te.map(st=>st.ele),De=Math.min(...Ae),Ye=Math.max(...Ae),ve=Ye-De,Ue=De;let Fe=Ye+ve*.1;return Fe-Ue<50&&(Fe=Ue+50),{distances:me,totalDistance:Ee,minEle:Ue,maxEle:Fe,elevations:Ae}},[o]);if(!R)return null;const{distances:E,totalDistance:A,minEle:W,maxEle:V,elevations:D}=R,F=600,K=200,q={top:20,right:20,bottom:30,left:50},ee=F-q.left-q.right,ce=K-q.top-q.bottom,fe=te=>q.left+te/A*ee,he=te=>q.top+ce-(te-W)/(V-W)*ce,de=te=>te>=.18?"#8B0000":te>=.1?"#FF6600":te>=.02?"#FFFF00":te>=0?"#90EE90":te>=-.02?"#87CEEB":te>=-.1?"#0000FF":"#00008B",Pe=E.map((te,me)=>({x:fe(te),y:he(D[me]),dist:te,ele:D[me]})),We=Pe.reduce((te,me,Ee)=>Ee===0?`M ${me.x} ${me.y}`:`${te} L ${me.x} ${me.y}`,""),Le=[];for(let te=0;te<Pe.length-1;te++){const me=Pe[te],Ee=Pe[te+1],Ae=E[te+1]-E[te],De=D[te+1]-D[te],Ye=Ae>0?De/(Ae*1e3):0;Le.push({path:`M ${me.x} ${he(W)} L ${me.x} ${me.y} L ${Ee.x} ${Ee.y} L ${Ee.x} ${he(W)} Z`,color:de(Ye)})}const Ie=[{value:W,label:Math.round(W)},{value:(W+V)/2,label:Math.round((W+V)/2)},{value:V,label:Math.round(V)}],_e=5,Xe=Array.from({length:_e},(te,me)=>{const Ee=A/(_e-1)*me;return{value:Ee,label:(a+Ee).toFixed(1)}}),je=Math.max(0,k-f-1),Ne=Math.min(200,k-c),Se=P.useRef(null),be=P.useCallback(te=>{if(!b||!Se.current)return;const me=Se.current.getBoundingClientRect(),Ee=(te-me.left)/me.width*F,Ye=(Math.max(q.left,Math.min(Ee,F-q.right))-q.left)/ee*A;b(Ye)},[b,A,ee,q.left,q.right,F]),U=te=>{be(te.clientX)},ue=te=>{te.buttons===1&&be(te.clientX)},ie=te=>{te.touches.length===1&&(te.preventDefault(),be(te.touches[0].clientX))},j=te=>{te.touches.length===1&&(te.preventDefault(),be(te.touches[0].clientX))},oe=S!=null?fe(S):null;let Re=null,Me=null;if(S!=null){let te=0,me=Math.abs(E[0]-S);for(let Ee=1;Ee<E.length;Ee++){const Ae=Math.abs(E[Ee]-S);Ae<me&&(me=Ae,te=Ee)}if(te<E.length-1&&S>E[te]){const Ee=E[te],Ae=E[te+1],De=D[te],Ye=D[te+1],ve=(S-Ee)/(Ae-Ee);Re=De+ve*(Ye-De);const Ue=(Ae-Ee)*1e3,Fe=Ye-De;Me=Ue>0?Fe/Ue:0}else if(te>0&&S<E[te]){const Ee=E[te-1],Ae=E[te],De=D[te-1],Ye=D[te],ve=(S-Ee)/(Ae-Ee);Re=De+ve*(Ye-De);const Ue=(Ae-Ee)*1e3,Fe=Ye-De;Me=Ue>0?Fe/Ue:0}else if(Re=D[te],te<E.length-1){const Ee=E[te],Ae=E[te+1],De=D[te],Ye=D[te+1],ve=(Ae-Ee)*1e3,Ue=Ye-De;Me=ve>0?Ue/ve:0}}return _.jsxs("div",{className:l,children:[(y||x)&&_.jsxs("div",{className:"space-y-2 mb-3",children:[y&&_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-xs text-muted-foreground w-12 shrink-0",children:"Start"}),_.jsx(bu,{min:0,max:je,step:1,value:c,onValueChange:y,className:"flex-1"}),_.jsxs("span",{className:"text-xs font-semibold text-primary w-14 text-right shrink-0",children:[c," km"]})]}),x&&_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-xs text-muted-foreground w-12 shrink-0",children:"Einde"}),_.jsx(bu,{min:10,max:Ne,step:1,value:f,onValueChange:x,className:"flex-1"}),_.jsxs("span",{className:"text-xs font-semibold text-primary w-14 text-right shrink-0",children:[f," km"]})]})]}),_.jsxs("svg",{ref:Se,width:"100%",height:"100%",viewBox:`0 0 ${F} ${K}`,preserveAspectRatio:"xMidYMid meet",onClick:U,onMouseMove:ue,onTouchStart:ie,onTouchMove:j,className:b?"cursor-pointer touch-none":"",children:[Ie.map((te,me)=>_.jsx("line",{x1:q.left,y1:he(te.value),x2:F-q.right,y2:he(te.value),stroke:"#e5e7eb",strokeWidth:"1"},`grid-y-${me}`)),Xe.map((te,me)=>_.jsx("line",{x1:fe(te.value),y1:q.top,x2:fe(te.value),y2:K-q.bottom,stroke:"#e5e7eb",strokeWidth:"1"},`grid-x-${me}`)),Le.map((te,me)=>_.jsx("path",{d:te.path,fill:te.color,fillOpacity:"0.7"},`segment-${me}`)),_.jsx("path",{d:We,fill:"none",stroke:"#374151",strokeWidth:"2",strokeLinejoin:"round"}),oe!==null&&Re!==null&&_.jsxs("g",{children:[_.jsx("line",{x1:oe,y1:q.top,x2:oe,y2:K-q.bottom,stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"5,5"}),_.jsx("circle",{cx:oe,cy:he(Re),r:"6",fill:"#ef4444",stroke:"white",strokeWidth:"2",className:"cursor-grab active:cursor-grabbing"}),_.jsxs("g",{children:[_.jsx("rect",{x:oe>F/2?oe-85:oe+10,y:q.top-5,width:"75",height:"40",fill:"rgba(0, 0, 0, 0.8)",rx:"4"}),_.jsxs("text",{x:oe>F/2?oe-47.5:oe+47.5,y:q.top+12,textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#fbbf24",children:[Math.round(Re),"m"]}),Me!==null&&_.jsxs("text",{x:oe>F/2?oe-47.5:oe+47.5,y:q.top+28,textAnchor:"middle",fontSize:"11",fill:Me>=0?"#ef4444":"#3b82f6",children:[(Me*100).toFixed(1),"%"]})]})]}),Ie.map((te,me)=>_.jsxs("text",{x:q.left-10,y:he(te.value),textAnchor:"end",dominantBaseline:"middle",fontSize:"12",fill:"#6b7280",children:[te.label,"m"]},`y-label-${me}`)),Xe.map((te,me)=>_.jsx("text",{x:fe(te.value),y:K-q.bottom+20,textAnchor:"middle",fontSize:"12",fill:"#6b7280",children:te.label},`x-label-${me}`))]})]})}const Nd={nl:{title:"Route knipper",subtitle:"Knip je route op maat, van lang naar perfect, segment voor segment",step1Title:"Stap 1: Route Laden",uploadPrompt:"Tik om GPX bestand te kiezen",tryExample:"Probeer voorbeeld",deleteRoute:"Wis route",previewTitle:"Route Preview",routeName:"Route naam:",totalDistance:"Totale afstand:",totalPoints:"Aantal punten:",maxSelection:"Max selectie:",step2Title:"Selecteer Segment",step2Description:"Gebruik de sliders om je segment te kiezen - de kaart toont het direct",startFromLabel:"Start vanaf (KM)",distanceLabel:"Afstand (KM)",selectedSegment:"Geselecteerd Segment:",points:"GPS punten",mapTitle:"Route Kaart",mapDescription:"Volledige route in grijs, geselecteerd segment in blauw",fullRouteGray:"Volledige route (grijs)",selectedBlue:"Geselecteerd segment (blauw)",openFullscreen:"Open fullscreen",closeFullscreen:"Sluit fullscreen",startMarker:"Start",endMarker:"Einde",dragToAdjust:"Sleep om aan te passen",generate2Segments:"Genereer 2 Segmenten",generate3Segments:"Genereer 3 Segmenten",allSegmentsTitle:"Alle Segmenten",allSegmentsDescription:"Klik op een segment om te downloaden",segment:"Segment",download:"Download",elevationGain:"Hoogtemeters stijging",elevationLoss:"Hoogtemeters daling",elevationMin:"Min. hoogte",elevationMax:"Max. hoogte",noElevationData:"Geen hoogte data",elevationProfile:"Hoogteprofiel",segmentsGenerated:"segmenten gegenereerd!",downloaded:"gedownload!",noRouteData:"Geen route data beschikbaar",error:"Er is een fout opgetreden",howItWorksTitle:"Hoe werkt dit?",howItWorksStep1:"Upload je GPX bestand. De route wordt automatisch geanalyseerd en getoond met kaart én hoogteprofiel.",howItWorksStep2:"Beweeg over het hoogteprofiel of kaart om hoogte en inclinatie te zien. Sleep de marker om je segment aan te passen.",howItWorksStep3:"Gebruik de sliders of sleep de start/einde markers op de kaart. Pas max afstand aan via het instellingen menu (⋮).",howItWorksStep4:'Klik "Genereer Segmenten" om je route in 2 of 3 delen te splitsen.',howItWorksStep5:"Download elk segment als GPX bestand - klaar voor je GPS apparaat!",aboutTitle:"Over dit project",aboutWhyTitle:"Waarom deze tool?",aboutWhyText1:"Je kan lange routes maken op Komoot, maar niet alle GPS trackers kunnen grote GPX bestanden aan.",aboutWhyText2:'De "day by day" functie van Komoot splitst je volledige route op, maar kan daarna niet meer gereset worden.',aboutWhyText3:"En één specifiek stuk uit een lange GPX route halen was gewoonweg niet mogelijk... tot nu.",aboutStoryTitle:"Een persoonlijke reis",aboutStoryText1:"Deze tool is gemaakt voor een bijzondere reis van meer dan 10.000 km.",aboutStoryText2:"Ter herdenking van het 10-jarig overlijden van mijn broer Koenraad (aka Koene), die uitgestrooid is op zee.",aboutStoryText3:"De route volgt de volledige Europese westkust:",aboutStoryText4:"Oostende → Faro → Noordkaap → Oostende",aboutJourneyDates:"De reis start op 01/05/2026 op de pier van Oostende en eindigt op 23/08/2026 op diezelfde pier. 10 jaar na het overlijden van mijn broer.",aboutCancerText:'Deze reis is ook in het teken van "Kom op tegen Kanker" om geld in te zamelen voor kankeronderzoek en ondersteuning.',aboutDedication:"100 dagen × 100 km/dag, in liefdevolle herinnering aan Koene",aboutLinksTitle:"Volg de reis",aboutLinkKomoot:"Bekijk de volledige route op Komoot",aboutLinkKomOpTegenKanker:'Steun de actie "10K voor K"',aboutLinkInstagram:"Volg het avontuur op Instagram",aboutTechTitle:"Open Source & Technologie",aboutTechText:"Deze tool is volledig open source en beschikbaar op GitHub. Iedereen kan de code bekijken, gebruiken en verbeteren.",aboutTechGithub:"Bekijk de code op GitHub",aboutTechClaude:"Volledig ontwikkeld met Claude Code (AI-assisted development)",languageName:"Nederlands",tabRoute:"Route Tool",tabAbout:"Over dit project"},en:{title:"Route Snipper",subtitle:"Cut your route to size, from long to perfect, segment by segment",step1Title:"Step 1: Load Route",uploadPrompt:"Click to choose GPX file",tryExample:"Try example",deleteRoute:"Delete route",previewTitle:"Route Preview",routeName:"Route name:",totalDistance:"Total distance:",totalPoints:"Total points:",maxSelection:"Max selection:",step2Title:"Select Segment",step2Description:"Use the sliders to choose your segment - the map updates immediately",startFromLabel:"Start from (KM)",distanceLabel:"Distance (KM)",selectedSegment:"Selected Segment:",points:"GPS points",mapTitle:"Route Map",mapDescription:"Full route in gray, selected segment in blue",fullRouteGray:"Full route (gray)",selectedBlue:"Selected segment (blue)",openFullscreen:"Open fullscreen",closeFullscreen:"Close fullscreen",startMarker:"Start",endMarker:"End",dragToAdjust:"Drag to adjust",generate2Segments:"Generate 2 Segments",generate3Segments:"Generate 3 Segments",allSegmentsTitle:"All Segments",allSegmentsDescription:"Click on a segment to download",segment:"Segment",download:"Download",elevationGain:"Elevation gain",elevationLoss:"Elevation loss",elevationMin:"Min. elevation",elevationMax:"Max. elevation",noElevationData:"No elevation data",elevationProfile:"Elevation Profile",segmentsGenerated:"segments generated!",downloaded:"downloaded!",noRouteData:"No route data available",error:"An error occurred",howItWorksTitle:"How does it work?",howItWorksStep1:"Upload your GPX file. The route is automatically analyzed and displayed with map and elevation profile.",howItWorksStep2:"Hover over the elevation profile or map to see elevation and slope. Drag the marker to adjust your segment.",howItWorksStep3:"Use the sliders or drag start/end markers on the map. Adjust max distance via the settings menu (⋮).",howItWorksStep4:'Click "Generate Segments" to split your route into 2 or 3 parts.',howItWorksStep5:"Download each segment as a GPX file - ready for your GPS device!",aboutTitle:"About this project",aboutWhyTitle:"Why this tool?",aboutWhyText1:"You can create long routes on Komoot, but not all GPS trackers can handle large GPX files.",aboutWhyText2:`Komoot's "day by day" feature splits your complete route, but cannot be reset afterwards.`,aboutWhyText3:"And extracting one specific section from a long GPX route was simply not possible... until now.",aboutStoryTitle:"A personal journey",aboutStoryText1:"This tool was created for a special journey of more than 10,000 km.",aboutStoryText2:"In memory of the 10th anniversary of my brother Koenraad's (aka Koene) passing, whose ashes were scattered at sea.",aboutStoryText3:"The route follows the entire European west coast:",aboutStoryText4:"Ostend → Faro → North Cape → Ostend",aboutJourneyDates:"The journey starts on May 1st, 2026 at the pier in Ostend and ends on August 23rd, 2026 at the same pier. 10 years after my brother's passing.",aboutCancerText:'This journey also supports "Kom op tegen Kanker" (Stand up to Cancer) to raise funds for cancer research and support.',aboutDedication:"100 days × 100 km/day, in loving memory of Koene",aboutLinksTitle:"Follow the journey",aboutLinkKomoot:"View the complete route on Komoot",aboutLinkKomOpTegenKanker:'Support the "10K for K" campaign',aboutLinkInstagram:"Follow the adventure on Instagram",aboutTechTitle:"Open Source & Technology",aboutTechText:"This tool is fully open source and available on GitHub. Anyone can view, use, and improve the code.",aboutTechGithub:"View code on GitHub",aboutTechClaude:"Fully developed with Claude Code (AI-assisted development)",languageName:"English",tabRoute:"Route Tool",tabAbout:"About this project"},fr:{title:"Découpeur de Route",subtitle:"Découpez votre route sur mesure, de longue à parfaite, segment par segment",step1Title:"Étape 1: Charger l'Itinéraire",uploadPrompt:"Cliquez pour choisir un fichier GPX",tryExample:"Essayer l'exemple",deleteRoute:"Supprimer l'itinéraire",previewTitle:"Aperçu de l'Itinéraire",routeName:"Nom de l'itinéraire:",totalDistance:"Distance totale:",totalPoints:"Points totaux:",maxSelection:"Sélection max:",step2Title:"Sélectionner le Segment",step2Description:"Utilisez les curseurs pour choisir votre segment - la carte se met à jour immédiatement",startFromLabel:"Départ de (KM)",distanceLabel:"Distance (KM)",selectedSegment:"Segment Sélectionné:",points:"points GPS",mapTitle:"Carte de l'Itinéraire",mapDescription:"Itinéraire complet en gris, segment sélectionné en bleu",fullRouteGray:"Itinéraire complet (gris)",selectedBlue:"Segment sélectionné (bleu)",openFullscreen:"Ouvrir en plein écran",closeFullscreen:"Fermer le plein écran",startMarker:"Départ",endMarker:"Fin",dragToAdjust:"Glisser pour ajuster",generate2Segments:"Générer 2 Segments",generate3Segments:"Générer 3 Segments",allSegmentsTitle:"Tous les Segments",allSegmentsDescription:"Cliquez sur un segment pour télécharger",segment:"Segment",download:"Télécharger",elevationGain:"Dénivelé positif",elevationLoss:"Dénivelé négatif",elevationMin:"Altitude min.",elevationMax:"Altitude max.",noElevationData:"Pas de données d'altitude",elevationProfile:"Profil d'Altitude",segmentsGenerated:"segments générés!",downloaded:"téléchargé!",noRouteData:"Aucune donnée d'itinéraire disponible",error:"Une erreur s'est produite",howItWorksTitle:"Comment ça marche ?",howItWorksStep1:"Téléchargez votre fichier GPX. L'itinéraire est automatiquement analysé et affiché avec carte et profil d'altitude.",howItWorksStep2:"Survolez le profil d'altitude ou la carte pour voir l'altitude et la pente. Déplacez le marqueur pour ajuster votre segment.",howItWorksStep3:"Utilisez les curseurs ou déplacez les marqueurs de début/fin sur la carte. Ajustez la distance max via le menu des paramètres (⋮).",howItWorksStep4:'Cliquez sur "Générer des Segments" pour diviser votre itinéraire en 2 ou 3 parties.',howItWorksStep5:"Téléchargez chaque segment en tant que fichier GPX - prêt pour votre appareil GPS !",aboutTitle:"À propos de ce projet",aboutWhyTitle:"Pourquoi cet outil ?",aboutWhyText1:"Vous pouvez créer de longs itinéraires sur Komoot, mais tous les GPS ne peuvent pas gérer de gros fichiers GPX.",aboutWhyText2:'La fonction "jour par jour" de Komoot divise votre itinéraire complet, mais ne peut pas être réinitialisée ensuite.',aboutWhyText3:"Et extraire une section spécifique d'un long itinéraire GPX était tout simplement impossible... jusqu'à présent.",aboutStoryTitle:"Un voyage personnel",aboutStoryText1:"Cet outil a été créé pour un voyage exceptionnel de plus de 10 000 km.",aboutStoryText2:"En mémoire du 10e anniversaire du décès de mon frère Koenraad (alias Koene), dont les cendres ont été dispersées en mer.",aboutStoryText3:"L'itinéraire suit toute la côte ouest européenne :",aboutStoryText4:"Ostende → Faro → Cap Nord → Ostende",aboutJourneyDates:"Le voyage commence le 1er mai 2026 sur la jetée d'Ostende et se termine le 23 août 2026 au même endroit. 10 ans après le décès de mon frère.",aboutCancerText:'Ce voyage soutient également "Kom op tegen Kanker" (Lutte contre le Cancer) pour collecter des fonds pour la recherche et le soutien.',aboutDedication:"100 jours × 100 km/jour, en mémoire affectueuse de Koene",aboutLinksTitle:"Suivez le voyage",aboutLinkKomoot:"Voir l'itinéraire complet sur Komoot",aboutLinkKomOpTegenKanker:'Soutenez la campagne "10K pour K"',aboutLinkInstagram:"Suivez l'aventure sur Instagram",aboutTechTitle:"Open Source & Technologie",aboutTechText:"Cet outil est entièrement open source et disponible sur GitHub. Tout le monde peut voir, utiliser et améliorer le code.",aboutTechGithub:"Voir le code sur GitHub",aboutTechClaude:"Entièrement développé avec Claude Code (développement assisté par IA)",languageName:"Français",tabRoute:"Outil d'Itinéraire",tabAbout:"À propos de ce projet"},es:{title:"Cortador de Ruta",subtitle:"Corta tu ruta a medida, de larga a perfecta, segmento por segmento",step1Title:"Paso 1: Cargar Ruta",uploadPrompt:"Haz clic para elegir archivo GPX",tryExample:"Probar ejemplo",deleteRoute:"Eliminar ruta",previewTitle:"Vista Previa de la Ruta",routeName:"Nombre de la ruta:",totalDistance:"Distancia total:",totalPoints:"Puntos totales:",maxSelection:"Selección máx:",step2Title:"Seleccionar Segmento",step2Description:"Use los deslizadores para elegir su segmento - el mapa se actualiza inmediatamente",startFromLabel:"Comenzar desde (KM)",distanceLabel:"Distancia (KM)",selectedSegment:"Segmento Seleccionado:",points:"puntos GPS",mapTitle:"Mapa de la Ruta",mapDescription:"Ruta completa en gris, segmento seleccionado en azul",fullRouteGray:"Ruta completa (gris)",selectedBlue:"Segmento seleccionado (azul)",openFullscreen:"Abrir pantalla completa",closeFullscreen:"Cerrar pantalla completa",startMarker:"Inicio",endMarker:"Fin",dragToAdjust:"Arrastrar para ajustar",generate2Segments:"Generar 2 Segmentos",generate3Segments:"Generar 3 Segmentos",allSegmentsTitle:"Todos los Segmentos",allSegmentsDescription:"Haz clic en un segmento para descargar",segment:"Segmento",download:"Descargar",elevationGain:"Desnivel positivo",elevationLoss:"Desnivel negativo",elevationMin:"Altitud mín.",elevationMax:"Altitud máx.",noElevationData:"Sin datos de altitud",elevationProfile:"Perfil de Altitud",segmentsGenerated:"segmentos generados!",downloaded:"descargado!",noRouteData:"No hay datos de ruta disponibles",error:"Se produjo un error",howItWorksTitle:"¿Cómo funciona?",howItWorksStep1:"Sube tu archivo GPX. La ruta se analiza automáticamente y se muestra con mapa y perfil de altitud.",howItWorksStep2:"Pasa el cursor sobre el perfil de altitud o el mapa para ver la altitud y la pendiente. Arrastra el marcador para ajustar tu segmento.",howItWorksStep3:"Usa los deslizadores o arrastra los marcadores de inicio/fin en el mapa. Ajusta la distancia máxima a través del menú de configuración (⋮).",howItWorksStep4:'Haz clic en "Generar Segmentos" para dividir tu ruta en 2 o 3 partes.',howItWorksStep5:"¡Descarga cada segmento como archivo GPX - listo para tu dispositivo GPS!",aboutTitle:"Sobre este proyecto",aboutWhyTitle:"¿Por qué esta herramienta?",aboutWhyText1:"Puedes crear rutas largas en Komoot, pero no todos los GPS pueden manejar archivos GPX grandes.",aboutWhyText2:'La función "día a día" de Komoot divide tu ruta completa, pero no se puede restablecer después.',aboutWhyText3:"Y extraer una sección específica de una ruta GPX larga simplemente no era posible... hasta ahora.",aboutStoryTitle:"Un viaje personal",aboutStoryText1:"Esta herramienta fue creada para un viaje especial de más de 10.000 km.",aboutStoryText2:"En memoria del 10° aniversario del fallecimiento de mi hermano Koenraad (alias Koene), cuyas cenizas fueron esparcidas en el mar.",aboutStoryText3:"La ruta sigue toda la costa oeste europea:",aboutStoryText4:"Ostende → Faro → Cabo Norte → Ostende",aboutJourneyDates:"El viaje comienza el 1 de mayo de 2026 en el muelle de Ostende y termina el 23 de agosto de 2026 en el mismo lugar. 10 años después del fallecimiento de mi hermano.",aboutCancerText:'Este viaje también apoya "Kom op tegen Kanker" (Lucha contra el Cáncer) para recaudar fondos para la investigación y el apoyo.',aboutDedication:"100 días × 100 km/día, en memoria amorosa de Koene",aboutLinksTitle:"Sigue el viaje",aboutLinkKomoot:"Ver la ruta completa en Komoot",aboutLinkKomOpTegenKanker:'Apoya la campaña "10K para K"',aboutLinkInstagram:"Sigue la aventura en Instagram",aboutTechTitle:"Código Abierto & Tecnología",aboutTechText:"Esta herramienta es completamente de código abierto y está disponible en GitHub. Cualquiera puede ver, usar y mejorar el código.",aboutTechGithub:"Ver el código en GitHub",aboutTechClaude:"Completamente desarrollado con Claude Code (desarrollo asistido por IA)",languageName:"Español",tabRoute:"Herramienta de Ruta",tabAbout:"Sobre este proyecto"},de:{title:"Routen Schneider",subtitle:"Schneiden Sie Ihre Route nach Maß, von lang zu perfekt, Segment für Segment",step1Title:"Schritt 1: Route Laden",uploadPrompt:"Klicken Sie, um GPX-Datei auszuwählen",tryExample:"Beispiel testen",deleteRoute:"Route löschen",previewTitle:"Routenvorschau",routeName:"Routenname:",totalDistance:"Gesamtdistanz:",totalPoints:"Gesamtpunkte:",maxSelection:"Max. Auswahl:",step2Title:"Segment Auswählen",step2Description:"Verwenden Sie die Schieberegler, um Ihr Segment auszuwählen - die Karte wird sofort aktualisiert",startFromLabel:"Start ab (KM)",distanceLabel:"Distanz (KM)",selectedSegment:"Ausgewähltes Segment:",points:"GPS-Punkte",mapTitle:"Routenkarte",mapDescription:"Vollständige Route in Grau, ausgewähltes Segment in Blau",fullRouteGray:"Vollständige Route (grau)",selectedBlue:"Ausgewähltes Segment (blau)",openFullscreen:"Vollbild öffnen",closeFullscreen:"Vollbild schließen",startMarker:"Start",endMarker:"Ende",dragToAdjust:"Ziehen zum Anpassen",generate2Segments:"2 Segmente Generieren",generate3Segments:"3 Segmente Generieren",allSegmentsTitle:"Alle Segmente",allSegmentsDescription:"Klicken Sie auf ein Segment zum Herunterladen",segment:"Segment",download:"Herunterladen",elevationGain:"Höhenmeter bergauf",elevationLoss:"Höhenmeter bergab",elevationMin:"Min. Höhe",elevationMax:"Max. Höhe",noElevationData:"Keine Höhendaten",elevationProfile:"Höhenprofil",segmentsGenerated:"Segmente generiert!",downloaded:"heruntergeladen!",noRouteData:"Keine Routendaten verfügbar",error:"Ein Fehler ist aufgetreten",howItWorksTitle:"Wie funktioniert es?",howItWorksStep1:"Laden Sie Ihre GPX-Datei hoch. Die Route wird automatisch analysiert und mit Karte und Höhenprofil angezeigt.",howItWorksStep2:"Fahren Sie mit der Maus über das Höhenprofil oder die Karte, um Höhe und Steigung zu sehen. Ziehen Sie den Marker, um Ihr Segment anzupassen.",howItWorksStep3:"Verwenden Sie die Schieberegler oder ziehen Sie Start-/Endmarker auf der Karte. Passen Sie die max. Distanz über das Einstellungsmenü (⋮) an.",howItWorksStep4:'Klicken Sie auf "Segmente Generieren", um Ihre Route in 2 oder 3 Teile zu teilen.',howItWorksStep5:"Laden Sie jedes Segment als GPX-Datei herunter - bereit für Ihr GPS-Gerät!",aboutTitle:"Über dieses Projekt",aboutWhyTitle:"Warum dieses Tool?",aboutWhyText1:"Sie können lange Routen auf Komoot erstellen, aber nicht alle GPS-Tracker können große GPX-Dateien verarbeiten.",aboutWhyText2:'Die "Tag für Tag"-Funktion von Komoot teilt Ihre komplette Route auf, kann aber danach nicht zurückgesetzt werden.',aboutWhyText3:"Und einen bestimmten Abschnitt aus einer langen GPX-Route zu extrahieren war einfach nicht möglich... bis jetzt.",aboutStoryTitle:"Eine persönliche Reise",aboutStoryText1:"Dieses Tool wurde für eine besondere Reise von mehr als 10.000 km erstellt.",aboutStoryText2:"Zum Gedenken an den 10. Jahrestag des Todes meines Bruders Koenraad (alias Koene), dessen Asche auf See verstreut wurde.",aboutStoryText3:"Die Route folgt der gesamten europäischen Westküste:",aboutStoryText4:"Ostende → Faro → Nordkap → Ostende",aboutJourneyDates:"Die Reise beginnt am 1. Mai 2026 am Pier von Ostende und endet am 23. August 2026 am selben Pier. 10 Jahre nach dem Tod meines Bruders.",aboutCancerText:'Diese Reise unterstützt auch "Kom op tegen Kanker" (Kampf gegen Krebs) zur Finanzierung von Krebsforschung und Unterstützung.',aboutDedication:"100 Tage × 100 km/Tag, in liebevoller Erinnerung an Koene",aboutLinksTitle:"Folgen Sie der Reise",aboutLinkKomoot:"Vollständige Route auf Komoot ansehen",aboutLinkKomOpTegenKanker:'Unterstützen Sie die Kampagne "10K für K"',aboutLinkInstagram:"Folgen Sie dem Abenteuer auf Instagram",aboutTechTitle:"Open Source & Technologie",aboutTechText:"Dieses Tool ist vollständig Open Source und auf GitHub verfügbar. Jeder kann den Code einsehen, verwenden und verbessern.",aboutTechGithub:"Code auf GitHub ansehen",aboutTechClaude:"Vollständig entwickelt mit Claude Code (KI-gestützte Entwicklung)",languageName:"Deutsch",tabRoute:"Routen-Tool",tabAbout:"Über dieses Projekt"},no:{title:"Ruteklipper",subtitle:"Klipp ruten din på mål, fra lang til perfekt, segment for segment",step1Title:"Trinn 1: Last Inn Rute",uploadPrompt:"Klikk for å velge GPX-fil",tryExample:"Prøv eksempel",deleteRoute:"Slett rute",previewTitle:"Ruteforhåndsvisning",routeName:"Rutenavn:",totalDistance:"Total avstand:",totalPoints:"Totalt antall punkter:",maxSelection:"Maks. valg:",step2Title:"Velg Segment",step2Description:"Bruk glidebrytere for å velge segment - kartet oppdateres umiddelbart",startFromLabel:"Start fra (KM)",distanceLabel:"Avstand (KM)",selectedSegment:"Valgt Segment:",points:"GPS-punkter",mapTitle:"Rutekart",mapDescription:"Full rute i grått, valgt segment i blått",fullRouteGray:"Full rute (grå)",selectedBlue:"Valgt segment (blå)",openFullscreen:"Åpne fullskjerm",closeFullscreen:"Lukk fullskjerm",startMarker:"Start",endMarker:"Slutt",dragToAdjust:"Dra for å justere",generate2Segments:"Generer 2 Segmenter",generate3Segments:"Generer 3 Segmenter",allSegmentsTitle:"Alle Segmenter",allSegmentsDescription:"Klikk på et segment for å laste ned",segment:"Segment",download:"Last Ned",elevationGain:"Høydemeter opp",elevationLoss:"Høydemeter ned",elevationMin:"Min. høyde",elevationMax:"Maks. høyde",noElevationData:"Ingen høydedata",elevationProfile:"Høydeprofil",segmentsGenerated:"segmenter generert!",downloaded:"lastet ned!",noRouteData:"Ingen rutedata tilgjengelig",error:"En feil oppstod",howItWorksTitle:"Hvordan fungerer det?",howItWorksStep1:"Last opp din GPX-fil. Ruten analyseres automatisk og vises med kart og høydeprofil.",howItWorksStep2:"Hold musepekeren over høydeprofilen eller kartet for å se høyde og stigning. Dra markøren for å justere segmentet ditt.",howItWorksStep3:"Bruk glidebrytere eller dra start-/sluttmarkører på kartet. Juster maks avstand via innstillingsmenyen (⋮).",howItWorksStep4:'Klikk på "Generer Segmenter" for å dele ruten din i 2 eller 3 deler.',howItWorksStep5:"Last ned hvert segment som en GPX-fil - klar for GPS-enheten din!",aboutTitle:"Om dette prosjektet",aboutWhyTitle:"Hvorfor dette verktøyet?",aboutWhyText1:"Du kan lage lange ruter på Komoot, men ikke alle GPS-trackere kan håndtere store GPX-filer.",aboutWhyText2:'Komoot sin "dag for dag"-funksjon deler opp hele ruten, men kan ikke tilbakestilles etterpå.',aboutWhyText3:"Og å hente ut en bestemt del fra en lang GPX-rute var rett og slett ikke mulig... før nå.",aboutStoryTitle:"En personlig reise",aboutStoryText1:"Dette verktøyet ble laget for en spesiell reise på mer enn 10 000 km.",aboutStoryText2:"Til minne om 10-årsdagen for min bror Koenraads (alias Koene) bortgang, hvis aske ble strødd i havet.",aboutStoryText3:"Ruten følger hele den europeiske vestkysten:",aboutStoryText4:"Oostende → Faro → Nordkapp → Oostende",aboutJourneyDates:"Reisen starter 1. mai 2026 på piren i Oostende og slutter 23. august 2026 på samme pier. 10 år etter min brors bortgang.",aboutCancerText:'Denne reisen støtter også "Kom op tegen Kanker" (Stå opp mot Kreft) for å samle inn penger til kreftforskning og støtte.',aboutDedication:"100 dager × 100 km/dag, i kjærlig minne om Koene",aboutLinksTitle:"Følg reisen",aboutLinkKomoot:"Se hele ruten på Komoot",aboutLinkKomOpTegenKanker:'Støtt kampanjen "10K for K"',aboutLinkInstagram:"Følg eventyret på Instagram",aboutTechTitle:"Open Source & Teknologi",aboutTechText:"Dette verktøyet er fullstendig åpen kildekode og tilgjengelig på GitHub. Alle kan se, bruke og forbedre koden.",aboutTechGithub:"Se koden på GitHub",aboutTechClaude:"Fullstendig utviklet med Claude Code (AI-assistert utvikling)",languageName:"Norsk",tabRoute:"Ruteverktøy",tabAbout:"Om dette prosjektet"},pt:{title:"Cortador de Rota",subtitle:"Corte sua rota sob medida, de longa a perfeita, segmento por segmento",step1Title:"Passo 1: Carregar Rota",uploadPrompt:"Clique para escolher arquivo GPX",tryExample:"Experimentar exemplo",deleteRoute:"Excluir rota",previewTitle:"Pré-visualização da Rota",routeName:"Nome da rota:",totalDistance:"Distância total:",totalPoints:"Pontos totais:",maxSelection:"Seleção máx:",step2Title:"Selecionar Segmento",step2Description:"Use os controles deslizantes para escolher seu segmento - o mapa atualiza imediatamente",startFromLabel:"Começar de (KM)",distanceLabel:"Distância (KM)",selectedSegment:"Segmento Selecionado:",points:"pontos GPS",mapTitle:"Mapa da Rota",mapDescription:"Rota completa em cinza, segmento selecionado em azul",fullRouteGray:"Rota completa (cinza)",selectedBlue:"Segmento selecionado (azul)",openFullscreen:"Abrir tela cheia",closeFullscreen:"Fechar tela cheia",startMarker:"Início",endMarker:"Fim",dragToAdjust:"Arrastar para ajustar",generate2Segments:"Gerar 2 Segmentos",generate3Segments:"Gerar 3 Segmentos",allSegmentsTitle:"Todos os Segmentos",allSegmentsDescription:"Clique em um segmento para baixar",segment:"Segmento",download:"Baixar",elevationGain:"Ganho de elevação",elevationLoss:"Perda de elevação",elevationMin:"Elevação mín.",elevationMax:"Elevação máx.",noElevationData:"Sem dados de elevação",elevationProfile:"Perfil de Elevação",segmentsGenerated:"segmentos gerados!",downloaded:"baixado!",noRouteData:"Nenhum dado de rota disponível",error:"Ocorreu um erro",howItWorksTitle:"Como funciona?",howItWorksStep1:"Carregue seu arquivo GPX. A rota é automaticamente analisada e exibida com mapa e perfil de elevação.",howItWorksStep2:"Passe o cursor sobre o perfil de elevação ou mapa para ver elevação e inclinação. Arraste o marcador para ajustar seu segmento.",howItWorksStep3:"Use os controles deslizantes ou arraste marcadores de início/fim no mapa. Ajuste a distância máxima através do menu de configurações (⋮).",howItWorksStep4:'Clique em "Gerar Segmentos" para dividir sua rota em 2 ou 3 partes.',howItWorksStep5:"Baixe cada segmento como arquivo GPX - pronto para seu dispositivo GPS!",aboutTitle:"Sobre este projeto",aboutWhyTitle:"Por que esta ferramenta?",aboutWhyText1:"Você pode criar rotas longas no Komoot, mas nem todos os GPS podem lidar com arquivos GPX grandes.",aboutWhyText2:'A função "dia a dia" do Komoot divide sua rota completa, mas não pode ser redefinida depois.',aboutWhyText3:"E extrair uma seção específica de uma rota GPX longa simplesmente não era possível... até agora.",aboutStoryTitle:"Uma jornada pessoal",aboutStoryText1:"Esta ferramenta foi criada para uma jornada especial de mais de 10.000 km.",aboutStoryText2:"Em memória do 10º aniversário do falecimento de meu irmão Koenraad (alias Koene), cujas cinzas foram espalhadas no mar.",aboutStoryText3:"A rota segue toda a costa oeste europeia:",aboutStoryText4:"Ostende → Faro → Cabo Norte → Ostende",aboutJourneyDates:"A jornada começa em 1º de maio de 2026 no cais de Ostende e termina em 23 de agosto de 2026 no mesmo cais. 10 anos após o falecimento do meu irmão.",aboutCancerText:'Esta jornada também apoia "Kom op tegen Kanker" (Combate ao Câncer) para arrecadar fundos para pesquisa e apoio.',aboutDedication:"100 dias × 100 km/dia, em memória amorosa de Koene",aboutLinksTitle:"Siga a jornada",aboutLinkKomoot:"Veja a rota completa no Komoot",aboutLinkKomOpTegenKanker:'Apoie a campanha "10K para K"',aboutLinkInstagram:"Siga a aventura no Instagram",aboutTechTitle:"Código Aberto & Tecnologia",aboutTechText:"Esta ferramenta é totalmente de código aberto e disponível no GitHub. Qualquer pessoa pode ver, usar e melhorar o código.",aboutTechGithub:"Ver código no GitHub",aboutTechClaude:"Totalmente desenvolvido com Claude Code (desenvolvimento assistido por IA)",languageName:"Português",tabRoute:"Ferramenta de Rota",tabAbout:"Sobre este projeto"}};function J5(o){return Nd[o]||Nd.nl}const Rd=[{code:"nl",name:"Nederlands",flag:"🇳🇱"},{code:"en",name:"English",flag:"🇬🇧"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"es",name:"Español",flag:"🇪🇸"},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"no",name:"Norsk",flag:"🇳🇴"},{code:"pt",name:"Português",flag:"🇵🇹"}],eg=["top","right","bottom","left"],ll=Math.min,_r=Math.max,Eu=Math.round,xu=Math.floor,Vi=o=>({x:o,y:o}),tg={left:"right",right:"left",bottom:"top",top:"bottom"},ng={start:"end",end:"start"};function D1(o,a,l){return _r(o,ll(a,l))}function xo(o,a){return typeof o=="function"?o(a):o}function To(o){return o.split("-")[0]}function ba(o){return o.split("-")[1]}function J1(o){return o==="x"?"y":"x"}function e0(o){return o==="y"?"height":"width"}const rg=new Set(["top","bottom"]);function Hi(o){return rg.has(To(o))?"y":"x"}function t0(o){return J1(Hi(o))}function ig(o,a,l){l===void 0&&(l=!1);const c=ba(o),f=t0(o),k=e0(f);let y=f==="x"?c===(l?"end":"start")?"right":"left":c==="start"?"bottom":"top";return a.reference[k]>a.floating[k]&&(y=Pu(y)),[y,Pu(y)]}function og(o){const a=Pu(o);return[z1(o),a,z1(a)]}function z1(o){return o.replace(/start|end/g,a=>ng[a])}const Id=["left","right"],Od=["right","left"],lg=["top","bottom"],ag=["bottom","top"];function sg(o,a,l){switch(o){case"top":case"bottom":return l?a?Od:Id:a?Id:Od;case"left":case"right":return a?lg:ag;default:return[]}}function ug(o,a,l,c){const f=ba(o);let k=sg(To(o),l==="start",c);return f&&(k=k.map(y=>y+"-"+f),a&&(k=k.concat(k.map(z1)))),k}function Pu(o){return o.replace(/left|right|bottom|top/g,a=>tg[a])}function cg(o){return{top:0,right:0,bottom:0,left:0,...o}}function Sf(o){return typeof o!="number"?cg(o):{top:o,right:o,bottom:o,left:o}}function Mu(o){const{x:a,y:l,width:c,height:f}=o;return{width:c,height:f,top:l,left:a,right:a+c,bottom:l+f,x:a,y:l}}function Ad(o,a,l){let{reference:c,floating:f}=o;const k=Hi(a),y=t0(a),x=e0(y),S=To(a),b=k==="y",R=c.x+c.width/2-f.width/2,E=c.y+c.height/2-f.height/2,A=c[x]/2-f[x]/2;let W;switch(S){case"top":W={x:R,y:c.y-f.height};break;case"bottom":W={x:R,y:c.y+c.height};break;case"right":W={x:c.x+c.width,y:E};break;case"left":W={x:c.x-f.width,y:E};break;default:W={x:c.x,y:c.y}}switch(ba(a)){case"start":W[y]-=A*(l&&b?-1:1);break;case"end":W[y]+=A*(l&&b?-1:1);break}return W}const pg=async(o,a,l)=>{const{placement:c="bottom",strategy:f="absolute",middleware:k=[],platform:y}=l,x=k.filter(Boolean),S=await(y.isRTL==null?void 0:y.isRTL(a));let b=await y.getElementRects({reference:o,floating:a,strategy:f}),{x:R,y:E}=Ad(b,c,S),A=c,W={},V=0;for(let D=0;D<x.length;D++){const{name:F,fn:K}=x[D],{x:q,y:ee,data:ce,reset:fe}=await K({x:R,y:E,initialPlacement:c,placement:A,strategy:f,middlewareData:W,rects:b,platform:y,elements:{reference:o,floating:a}});R=q??R,E=ee??E,W={...W,[F]:{...W[F],...ce}},fe&&V<=50&&(V++,typeof fe=="object"&&(fe.placement&&(A=fe.placement),fe.rects&&(b=fe.rects===!0?await y.getElementRects({reference:o,floating:a,strategy:f}):fe.rects),{x:R,y:E}=Ad(b,A,S)),D=-1)}return{x:R,y:E,placement:A,strategy:f,middlewareData:W}};async function as(o,a){var l;a===void 0&&(a={});const{x:c,y:f,platform:k,rects:y,elements:x,strategy:S}=o,{boundary:b="clippingAncestors",rootBoundary:R="viewport",elementContext:E="floating",altBoundary:A=!1,padding:W=0}=xo(a,o),V=Sf(W),F=x[A?E==="floating"?"reference":"floating":E],K=Mu(await k.getClippingRect({element:(l=await(k.isElement==null?void 0:k.isElement(F)))==null||l?F:F.contextElement||await(k.getDocumentElement==null?void 0:k.getDocumentElement(x.floating)),boundary:b,rootBoundary:R,strategy:S})),q=E==="floating"?{x:c,y:f,width:y.floating.width,height:y.floating.height}:y.reference,ee=await(k.getOffsetParent==null?void 0:k.getOffsetParent(x.floating)),ce=await(k.isElement==null?void 0:k.isElement(ee))?await(k.getScale==null?void 0:k.getScale(ee))||{x:1,y:1}:{x:1,y:1},fe=Mu(k.convertOffsetParentRelativeRectToViewportRelativeRect?await k.convertOffsetParentRelativeRectToViewportRelativeRect({elements:x,rect:q,offsetParent:ee,strategy:S}):q);return{top:(K.top-fe.top+V.top)/ce.y,bottom:(fe.bottom-K.bottom+V.bottom)/ce.y,left:(K.left-fe.left+V.left)/ce.x,right:(fe.right-K.right+V.right)/ce.x}}const dg=o=>({name:"arrow",options:o,async fn(a){const{x:l,y:c,placement:f,rects:k,platform:y,elements:x,middlewareData:S}=a,{element:b,padding:R=0}=xo(o,a)||{};if(b==null)return{};const E=Sf(R),A={x:l,y:c},W=t0(f),V=e0(W),D=await y.getDimensions(b),F=W==="y",K=F?"top":"left",q=F?"bottom":"right",ee=F?"clientHeight":"clientWidth",ce=k.reference[V]+k.reference[W]-A[W]-k.floating[V],fe=A[W]-k.reference[W],he=await(y.getOffsetParent==null?void 0:y.getOffsetParent(b));let de=he?he[ee]:0;(!de||!await(y.isElement==null?void 0:y.isElement(he)))&&(de=x.floating[ee]||k.floating[V]);const Pe=ce/2-fe/2,We=de/2-D[V]/2-1,Le=ll(E[K],We),Ie=ll(E[q],We),_e=Le,Xe=de-D[V]-Ie,je=de/2-D[V]/2+Pe,Ne=D1(_e,je,Xe),Se=!S.arrow&&ba(f)!=null&&je!==Ne&&k.reference[V]/2-(je<_e?Le:Ie)-D[V]/2<0,be=Se?je<_e?je-_e:je-Xe:0;return{[W]:A[W]+be,data:{[W]:Ne,centerOffset:je-Ne-be,...Se&&{alignmentOffset:be}},reset:Se}}}),fg=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(a){var l,c;const{placement:f,middlewareData:k,rects:y,initialPlacement:x,platform:S,elements:b}=a,{mainAxis:R=!0,crossAxis:E=!0,fallbackPlacements:A,fallbackStrategy:W="bestFit",fallbackAxisSideDirection:V="none",flipAlignment:D=!0,...F}=xo(o,a);if((l=k.arrow)!=null&&l.alignmentOffset)return{};const K=To(f),q=Hi(x),ee=To(x)===x,ce=await(S.isRTL==null?void 0:S.isRTL(b.floating)),fe=A||(ee||!D?[Pu(x)]:og(x)),he=V!=="none";!A&&he&&fe.push(...ug(x,D,V,ce));const de=[x,...fe],Pe=await as(a,F),We=[];let Le=((c=k.flip)==null?void 0:c.overflows)||[];if(R&&We.push(Pe[K]),E){const je=ig(f,y,ce);We.push(Pe[je[0]],Pe[je[1]])}if(Le=[...Le,{placement:f,overflows:We}],!We.every(je=>je<=0)){var Ie,_e;const je=(((Ie=k.flip)==null?void 0:Ie.index)||0)+1,Ne=de[je];if(Ne&&(!(E==="alignment"?q!==Hi(Ne):!1)||Le.every(U=>Hi(U.placement)===q?U.overflows[0]>0:!0)))return{data:{index:je,overflows:Le},reset:{placement:Ne}};let Se=(_e=Le.filter(be=>be.overflows[0]<=0).sort((be,U)=>be.overflows[1]-U.overflows[1])[0])==null?void 0:_e.placement;if(!Se)switch(W){case"bestFit":{var Xe;const be=(Xe=Le.filter(U=>{if(he){const ue=Hi(U.placement);return ue===q||ue==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(ue=>ue>0).reduce((ue,ie)=>ue+ie,0)]).sort((U,ue)=>U[1]-ue[1])[0])==null?void 0:Xe[0];be&&(Se=be);break}case"initialPlacement":Se=x;break}if(f!==Se)return{reset:{placement:Se}}}return{}}}};function Dd(o,a){return{top:o.top-a.height,right:o.right-a.width,bottom:o.bottom-a.height,left:o.left-a.width}}function zd(o){return eg.some(a=>o[a]>=0)}const mg=function(o){return o===void 0&&(o={}),{name:"hide",options:o,async fn(a){const{rects:l}=a,{strategy:c="referenceHidden",...f}=xo(o,a);switch(c){case"referenceHidden":{const k=await as(a,{...f,elementContext:"reference"}),y=Dd(k,l.reference);return{data:{referenceHiddenOffsets:y,referenceHidden:zd(y)}}}case"escaped":{const k=await as(a,{...f,altBoundary:!0}),y=Dd(k,l.floating);return{data:{escapedOffsets:y,escaped:zd(y)}}}default:return{}}}}},Zf=new Set(["left","top"]);async function hg(o,a){const{placement:l,platform:c,elements:f}=o,k=await(c.isRTL==null?void 0:c.isRTL(f.floating)),y=To(l),x=ba(l),S=Hi(l)==="y",b=Zf.has(y)?-1:1,R=k&&S?-1:1,E=xo(a,o);let{mainAxis:A,crossAxis:W,alignmentAxis:V}=typeof E=="number"?{mainAxis:E,crossAxis:0,alignmentAxis:null}:{mainAxis:E.mainAxis||0,crossAxis:E.crossAxis||0,alignmentAxis:E.alignmentAxis};return x&&typeof V=="number"&&(W=x==="end"?V*-1:V),S?{x:W*R,y:A*b}:{x:A*b,y:W*R}}const gg=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(a){var l,c;const{x:f,y:k,placement:y,middlewareData:x}=a,S=await hg(a,o);return y===((l=x.offset)==null?void 0:l.placement)&&(c=x.arrow)!=null&&c.alignmentOffset?{}:{x:f+S.x,y:k+S.y,data:{...S,placement:y}}}}},kg=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(a){const{x:l,y:c,placement:f}=a,{mainAxis:k=!0,crossAxis:y=!1,limiter:x={fn:F=>{let{x:K,y:q}=F;return{x:K,y:q}}},...S}=xo(o,a),b={x:l,y:c},R=await as(a,S),E=Hi(To(f)),A=J1(E);let W=b[A],V=b[E];if(k){const F=A==="y"?"top":"left",K=A==="y"?"bottom":"right",q=W+R[F],ee=W-R[K];W=D1(q,W,ee)}if(y){const F=E==="y"?"top":"left",K=E==="y"?"bottom":"right",q=V+R[F],ee=V-R[K];V=D1(q,V,ee)}const D=x.fn({...a,[A]:W,[E]:V});return{...D,data:{x:D.x-l,y:D.y-c,enabled:{[A]:k,[E]:y}}}}}},vg=function(o){return o===void 0&&(o={}),{options:o,fn(a){const{x:l,y:c,placement:f,rects:k,middlewareData:y}=a,{offset:x=0,mainAxis:S=!0,crossAxis:b=!0}=xo(o,a),R={x:l,y:c},E=Hi(f),A=J1(E);let W=R[A],V=R[E];const D=xo(x,a),F=typeof D=="number"?{mainAxis:D,crossAxis:0}:{mainAxis:0,crossAxis:0,...D};if(S){const ee=A==="y"?"height":"width",ce=k.reference[A]-k.floating[ee]+F.mainAxis,fe=k.reference[A]+k.reference[ee]-F.mainAxis;W<ce?W=ce:W>fe&&(W=fe)}if(b){var K,q;const ee=A==="y"?"width":"height",ce=Zf.has(To(f)),fe=k.reference[E]-k.floating[ee]+(ce&&((K=y.offset)==null?void 0:K[E])||0)+(ce?0:F.crossAxis),he=k.reference[E]+k.reference[ee]+(ce?0:((q=y.offset)==null?void 0:q[E])||0)-(ce?F.crossAxis:0);V<fe?V=fe:V>he&&(V=he)}return{[A]:W,[E]:V}}}},yg=function(o){return o===void 0&&(o={}),{name:"size",options:o,async fn(a){var l,c;const{placement:f,rects:k,platform:y,elements:x}=a,{apply:S=()=>{},...b}=xo(o,a),R=await as(a,b),E=To(f),A=ba(f),W=Hi(f)==="y",{width:V,height:D}=k.floating;let F,K;E==="top"||E==="bottom"?(F=E,K=A===(await(y.isRTL==null?void 0:y.isRTL(x.floating))?"start":"end")?"left":"right"):(K=E,F=A==="end"?"top":"bottom");const q=D-R.top-R.bottom,ee=V-R.left-R.right,ce=ll(D-R[F],q),fe=ll(V-R[K],ee),he=!a.middlewareData.shift;let de=ce,Pe=fe;if((l=a.middlewareData.shift)!=null&&l.enabled.x&&(Pe=ee),(c=a.middlewareData.shift)!=null&&c.enabled.y&&(de=q),he&&!A){const Le=_r(R.left,0),Ie=_r(R.right,0),_e=_r(R.top,0),Xe=_r(R.bottom,0);W?Pe=V-2*(Le!==0||Ie!==0?Le+Ie:_r(R.left,R.right)):de=D-2*(_e!==0||Xe!==0?_e+Xe:_r(R.top,R.bottom))}await S({...a,availableWidth:Pe,availableHeight:de});const We=await y.getDimensions(x.floating);return V!==We.width||D!==We.height?{reset:{rects:!0}}:{}}}};function Vu(){return typeof window<"u"}function Ca(o){return bf(o)?(o.nodeName||"").toLowerCase():"#document"}function xr(o){var a;return(o==null||(a=o.ownerDocument)==null?void 0:a.defaultView)||window}function Ui(o){var a;return(a=(bf(o)?o.ownerDocument:o.document)||window.document)==null?void 0:a.documentElement}function bf(o){return Vu()?o instanceof Node||o instanceof xr(o).Node:!1}function xi(o){return Vu()?o instanceof Element||o instanceof xr(o).Element:!1}function Gi(o){return Vu()?o instanceof HTMLElement||o instanceof xr(o).HTMLElement:!1}function jd(o){return!Vu()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof xr(o).ShadowRoot}const _g=new Set(["inline","contents"]);function ms(o){const{overflow:a,overflowX:l,overflowY:c,display:f}=Ti(o);return/auto|scroll|overlay|hidden|clip/.test(a+c+l)&&!_g.has(f)}const xg=new Set(["table","td","th"]);function Tg(o){return xg.has(Ca(o))}const wg=[":popover-open",":modal"];function Gu(o){return wg.some(a=>{try{return o.matches(a)}catch{return!1}})}const Sg=["transform","translate","scale","rotate","perspective"],Zg=["transform","translate","scale","rotate","perspective","filter"],bg=["paint","layout","strict","content"];function n0(o){const a=r0(),l=xi(o)?Ti(o):o;return Sg.some(c=>l[c]?l[c]!=="none":!1)||(l.containerType?l.containerType!=="normal":!1)||!a&&(l.backdropFilter?l.backdropFilter!=="none":!1)||!a&&(l.filter?l.filter!=="none":!1)||Zg.some(c=>(l.willChange||"").includes(c))||bg.some(c=>(l.contain||"").includes(c))}function Cg(o){let a=al(o);for(;Gi(a)&&!Sa(a);){if(n0(a))return a;if(Gu(a))return null;a=al(a)}return null}function r0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Eg=new Set(["html","body","#document"]);function Sa(o){return Eg.has(Ca(o))}function Ti(o){return xr(o).getComputedStyle(o)}function Uu(o){return xi(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function al(o){if(Ca(o)==="html")return o;const a=o.assignedSlot||o.parentNode||jd(o)&&o.host||Ui(o);return jd(a)?a.host:a}function Cf(o){const a=al(o);return Sa(a)?o.ownerDocument?o.ownerDocument.body:o.body:Gi(a)&&ms(a)?a:Cf(a)}function ss(o,a,l){var c;a===void 0&&(a=[]),l===void 0&&(l=!0);const f=Cf(o),k=f===((c=o.ownerDocument)==null?void 0:c.body),y=xr(f);if(k){const x=j1(y);return a.concat(y,y.visualViewport||[],ms(f)?f:[],x&&l?ss(x):[])}return a.concat(f,ss(f,[],l))}function j1(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function Ef(o){const a=Ti(o);let l=parseFloat(a.width)||0,c=parseFloat(a.height)||0;const f=Gi(o),k=f?o.offsetWidth:l,y=f?o.offsetHeight:c,x=Eu(l)!==k||Eu(c)!==y;return x&&(l=k,c=y),{width:l,height:c,$:x}}function i0(o){return xi(o)?o:o.contextElement}function wa(o){const a=i0(o);if(!Gi(a))return Vi(1);const l=a.getBoundingClientRect(),{width:c,height:f,$:k}=Ef(a);let y=(k?Eu(l.width):l.width)/c,x=(k?Eu(l.height):l.height)/f;return(!y||!Number.isFinite(y))&&(y=1),(!x||!Number.isFinite(x))&&(x=1),{x:y,y:x}}const Pg=Vi(0);function Pf(o){const a=xr(o);return!r0()||!a.visualViewport?Pg:{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}}function Mg(o,a,l){return a===void 0&&(a=!1),!l||a&&l!==xr(o)?!1:a}function zl(o,a,l,c){a===void 0&&(a=!1),l===void 0&&(l=!1);const f=o.getBoundingClientRect(),k=i0(o);let y=Vi(1);a&&(c?xi(c)&&(y=wa(c)):y=wa(o));const x=Mg(k,l,c)?Pf(k):Vi(0);let S=(f.left+x.x)/y.x,b=(f.top+x.y)/y.y,R=f.width/y.x,E=f.height/y.y;if(k){const A=xr(k),W=c&&xi(c)?xr(c):c;let V=A,D=j1(V);for(;D&&c&&W!==V;){const F=wa(D),K=D.getBoundingClientRect(),q=Ti(D),ee=K.left+(D.clientLeft+parseFloat(q.paddingLeft))*F.x,ce=K.top+(D.clientTop+parseFloat(q.paddingTop))*F.y;S*=F.x,b*=F.y,R*=F.x,E*=F.y,S+=ee,b+=ce,V=xr(D),D=j1(V)}}return Mu({width:R,height:E,x:S,y:b})}function Ku(o,a){const l=Uu(o).scrollLeft;return a?a.left+l:zl(Ui(o)).left+l}function Mf(o,a){const l=o.getBoundingClientRect(),c=l.left+a.scrollLeft-Ku(o,l),f=l.top+a.scrollTop;return{x:c,y:f}}function Lg(o){let{elements:a,rect:l,offsetParent:c,strategy:f}=o;const k=f==="fixed",y=Ui(c),x=a?Gu(a.floating):!1;if(c===y||x&&k)return l;let S={scrollLeft:0,scrollTop:0},b=Vi(1);const R=Vi(0),E=Gi(c);if((E||!E&&!k)&&((Ca(c)!=="body"||ms(y))&&(S=Uu(c)),Gi(c))){const W=zl(c);b=wa(c),R.x=W.x+c.clientLeft,R.y=W.y+c.clientTop}const A=y&&!E&&!k?Mf(y,S):Vi(0);return{width:l.width*b.x,height:l.height*b.y,x:l.x*b.x-S.scrollLeft*b.x+R.x+A.x,y:l.y*b.y-S.scrollTop*b.y+R.y+A.y}}function Ng(o){return Array.from(o.getClientRects())}function Rg(o){const a=Ui(o),l=Uu(o),c=o.ownerDocument.body,f=_r(a.scrollWidth,a.clientWidth,c.scrollWidth,c.clientWidth),k=_r(a.scrollHeight,a.clientHeight,c.scrollHeight,c.clientHeight);let y=-l.scrollLeft+Ku(o);const x=-l.scrollTop;return Ti(c).direction==="rtl"&&(y+=_r(a.clientWidth,c.clientWidth)-f),{width:f,height:k,x:y,y:x}}const Fd=25;function Ig(o,a){const l=xr(o),c=Ui(o),f=l.visualViewport;let k=c.clientWidth,y=c.clientHeight,x=0,S=0;if(f){k=f.width,y=f.height;const R=r0();(!R||R&&a==="fixed")&&(x=f.offsetLeft,S=f.offsetTop)}const b=Ku(c);if(b<=0){const R=c.ownerDocument,E=R.body,A=getComputedStyle(E),W=R.compatMode==="CSS1Compat"&&parseFloat(A.marginLeft)+parseFloat(A.marginRight)||0,V=Math.abs(c.clientWidth-E.clientWidth-W);V<=Fd&&(k-=V)}else b<=Fd&&(k+=b);return{width:k,height:y,x,y:S}}const Og=new Set(["absolute","fixed"]);function Ag(o,a){const l=zl(o,!0,a==="fixed"),c=l.top+o.clientTop,f=l.left+o.clientLeft,k=Gi(o)?wa(o):Vi(1),y=o.clientWidth*k.x,x=o.clientHeight*k.y,S=f*k.x,b=c*k.y;return{width:y,height:x,x:S,y:b}}function Bd(o,a,l){let c;if(a==="viewport")c=Ig(o,l);else if(a==="document")c=Rg(Ui(o));else if(xi(a))c=Ag(a,l);else{const f=Pf(o);c={x:a.x-f.x,y:a.y-f.y,width:a.width,height:a.height}}return Mu(c)}function Lf(o,a){const l=al(o);return l===a||!xi(l)||Sa(l)?!1:Ti(l).position==="fixed"||Lf(l,a)}function Dg(o,a){const l=a.get(o);if(l)return l;let c=ss(o,[],!1).filter(x=>xi(x)&&Ca(x)!=="body"),f=null;const k=Ti(o).position==="fixed";let y=k?al(o):o;for(;xi(y)&&!Sa(y);){const x=Ti(y),S=n0(y);!S&&x.position==="fixed"&&(f=null),(k?!S&&!f:!S&&x.position==="static"&&!!f&&Og.has(f.position)||ms(y)&&!S&&Lf(o,y))?c=c.filter(R=>R!==y):f=x,y=al(y)}return a.set(o,c),c}function zg(o){let{element:a,boundary:l,rootBoundary:c,strategy:f}=o;const y=[...l==="clippingAncestors"?Gu(a)?[]:Dg(a,this._c):[].concat(l),c],x=y[0],S=y.reduce((b,R)=>{const E=Bd(a,R,f);return b.top=_r(E.top,b.top),b.right=ll(E.right,b.right),b.bottom=ll(E.bottom,b.bottom),b.left=_r(E.left,b.left),b},Bd(a,x,f));return{width:S.right-S.left,height:S.bottom-S.top,x:S.left,y:S.top}}function jg(o){const{width:a,height:l}=Ef(o);return{width:a,height:l}}function Fg(o,a,l){const c=Gi(a),f=Ui(a),k=l==="fixed",y=zl(o,!0,k,a);let x={scrollLeft:0,scrollTop:0};const S=Vi(0);function b(){S.x=Ku(f)}if(c||!c&&!k)if((Ca(a)!=="body"||ms(f))&&(x=Uu(a)),c){const W=zl(a,!0,k,a);S.x=W.x+a.clientLeft,S.y=W.y+a.clientTop}else f&&b();k&&!c&&f&&b();const R=f&&!c&&!k?Mf(f,x):Vi(0),E=y.left+x.scrollLeft-S.x-R.x,A=y.top+x.scrollTop-S.y-R.y;return{x:E,y:A,width:y.width,height:y.height}}function C1(o){return Ti(o).position==="static"}function Wd(o,a){if(!Gi(o)||Ti(o).position==="fixed")return null;if(a)return a(o);let l=o.offsetParent;return Ui(o)===l&&(l=l.ownerDocument.body),l}function Nf(o,a){const l=xr(o);if(Gu(o))return l;if(!Gi(o)){let f=al(o);for(;f&&!Sa(f);){if(xi(f)&&!C1(f))return f;f=al(f)}return l}let c=Wd(o,a);for(;c&&Tg(c)&&C1(c);)c=Wd(c,a);return c&&Sa(c)&&C1(c)&&!n0(c)?l:c||Cg(o)||l}const Bg=async function(o){const a=this.getOffsetParent||Nf,l=this.getDimensions,c=await l(o.floating);return{reference:Fg(o.reference,await a(o.floating),o.strategy),floating:{x:0,y:0,width:c.width,height:c.height}}};function Wg(o){return Ti(o).direction==="rtl"}const Hg={convertOffsetParentRelativeRectToViewportRelativeRect:Lg,getDocumentElement:Ui,getClippingRect:zg,getOffsetParent:Nf,getElementRects:Bg,getClientRects:Ng,getDimensions:jg,getScale:wa,isElement:xi,isRTL:Wg};function Rf(o,a){return o.x===a.x&&o.y===a.y&&o.width===a.width&&o.height===a.height}function Vg(o,a){let l=null,c;const f=Ui(o);function k(){var x;clearTimeout(c),(x=l)==null||x.disconnect(),l=null}function y(x,S){x===void 0&&(x=!1),S===void 0&&(S=1),k();const b=o.getBoundingClientRect(),{left:R,top:E,width:A,height:W}=b;if(x||a(),!A||!W)return;const V=xu(E),D=xu(f.clientWidth-(R+A)),F=xu(f.clientHeight-(E+W)),K=xu(R),ee={rootMargin:-V+"px "+-D+"px "+-F+"px "+-K+"px",threshold:_r(0,ll(1,S))||1};let ce=!0;function fe(he){const de=he[0].intersectionRatio;if(de!==S){if(!ce)return y();de?y(!1,de):c=setTimeout(()=>{y(!1,1e-7)},1e3)}de===1&&!Rf(b,o.getBoundingClientRect())&&y(),ce=!1}try{l=new IntersectionObserver(fe,{...ee,root:f.ownerDocument})}catch{l=new IntersectionObserver(fe,ee)}l.observe(o)}return y(!0),k}function Gg(o,a,l,c){c===void 0&&(c={});const{ancestorScroll:f=!0,ancestorResize:k=!0,elementResize:y=typeof ResizeObserver=="function",layoutShift:x=typeof IntersectionObserver=="function",animationFrame:S=!1}=c,b=i0(o),R=f||k?[...b?ss(b):[],...ss(a)]:[];R.forEach(K=>{f&&K.addEventListener("scroll",l,{passive:!0}),k&&K.addEventListener("resize",l)});const E=b&&x?Vg(b,l):null;let A=-1,W=null;y&&(W=new ResizeObserver(K=>{let[q]=K;q&&q.target===b&&W&&(W.unobserve(a),cancelAnimationFrame(A),A=requestAnimationFrame(()=>{var ee;(ee=W)==null||ee.observe(a)})),l()}),b&&!S&&W.observe(b),W.observe(a));let V,D=S?zl(o):null;S&&F();function F(){const K=zl(o);D&&!Rf(D,K)&&l(),D=K,V=requestAnimationFrame(F)}return l(),()=>{var K;R.forEach(q=>{f&&q.removeEventListener("scroll",l),k&&q.removeEventListener("resize",l)}),E==null||E(),(K=W)==null||K.disconnect(),W=null,S&&cancelAnimationFrame(V)}}const Ug=gg,Kg=kg,$g=fg,Xg=yg,qg=mg,Hd=dg,Yg=vg,Qg=(o,a,l)=>{const c=new Map,f={platform:Hg,...l},k={...f.platform,_c:c};return pg(o,a,{...f,platform:k})};var Jg=typeof document<"u",e6=function(){},Zu=Jg?P.useLayoutEffect:e6;function Lu(o,a){if(o===a)return!0;if(typeof o!=typeof a)return!1;if(typeof o=="function"&&o.toString()===a.toString())return!0;let l,c,f;if(o&&a&&typeof o=="object"){if(Array.isArray(o)){if(l=o.length,l!==a.length)return!1;for(c=l;c--!==0;)if(!Lu(o[c],a[c]))return!1;return!0}if(f=Object.keys(o),l=f.length,l!==Object.keys(a).length)return!1;for(c=l;c--!==0;)if(!{}.hasOwnProperty.call(a,f[c]))return!1;for(c=l;c--!==0;){const k=f[c];if(!(k==="_owner"&&o.$$typeof)&&!Lu(o[k],a[k]))return!1}return!0}return o!==o&&a!==a}function If(o){return typeof window>"u"?1:(o.ownerDocument.defaultView||window).devicePixelRatio||1}function Vd(o,a){const l=If(o);return Math.round(a*l)/l}function E1(o){const a=P.useRef(o);return Zu(()=>{a.current=o}),a}function t6(o){o===void 0&&(o={});const{placement:a="bottom",strategy:l="absolute",middleware:c=[],platform:f,elements:{reference:k,floating:y}={},transform:x=!0,whileElementsMounted:S,open:b}=o,[R,E]=P.useState({x:0,y:0,strategy:l,placement:a,middlewareData:{},isPositioned:!1}),[A,W]=P.useState(c);Lu(A,c)||W(c);const[V,D]=P.useState(null),[F,K]=P.useState(null),q=P.useCallback(U=>{U!==he.current&&(he.current=U,D(U))},[]),ee=P.useCallback(U=>{U!==de.current&&(de.current=U,K(U))},[]),ce=k||V,fe=y||F,he=P.useRef(null),de=P.useRef(null),Pe=P.useRef(R),We=S!=null,Le=E1(S),Ie=E1(f),_e=E1(b),Xe=P.useCallback(()=>{if(!he.current||!de.current)return;const U={placement:a,strategy:l,middleware:A};Ie.current&&(U.platform=Ie.current),Qg(he.current,de.current,U).then(ue=>{const ie={...ue,isPositioned:_e.current!==!1};je.current&&!Lu(Pe.current,ie)&&(Pe.current=ie,Ou.flushSync(()=>{E(ie)}))})},[A,a,l,Ie,_e]);Zu(()=>{b===!1&&Pe.current.isPositioned&&(Pe.current.isPositioned=!1,E(U=>({...U,isPositioned:!1})))},[b]);const je=P.useRef(!1);Zu(()=>(je.current=!0,()=>{je.current=!1}),[]),Zu(()=>{if(ce&&(he.current=ce),fe&&(de.current=fe),ce&&fe){if(Le.current)return Le.current(ce,fe,Xe);Xe()}},[ce,fe,Xe,Le,We]);const Ne=P.useMemo(()=>({reference:he,floating:de,setReference:q,setFloating:ee}),[q,ee]),Se=P.useMemo(()=>({reference:ce,floating:fe}),[ce,fe]),be=P.useMemo(()=>{const U={position:l,left:0,top:0};if(!Se.floating)return U;const ue=Vd(Se.floating,R.x),ie=Vd(Se.floating,R.y);return x?{...U,transform:"translate("+ue+"px, "+ie+"px)",...If(Se.floating)>=1.5&&{willChange:"transform"}}:{position:l,left:ue,top:ie}},[l,x,Se.floating,R.x,R.y]);return P.useMemo(()=>({...R,update:Xe,refs:Ne,elements:Se,floatingStyles:be}),[R,Xe,Ne,Se,be])}const n6=o=>{function a(l){return{}.hasOwnProperty.call(l,"current")}return{name:"arrow",options:o,fn(l){const{element:c,padding:f}=typeof o=="function"?o(l):o;return c&&a(c)?c.current!=null?Hd({element:c.current,padding:f}).fn(l):{}:c?Hd({element:c,padding:f}).fn(l):{}}}},r6=(o,a)=>({...Ug(o),options:[o,a]}),i6=(o,a)=>({...Kg(o),options:[o,a]}),o6=(o,a)=>({...Yg(o),options:[o,a]}),l6=(o,a)=>({...$g(o),options:[o,a]}),a6=(o,a)=>({...Xg(o),options:[o,a]}),s6=(o,a)=>({...qg(o),options:[o,a]}),u6=(o,a)=>({...n6(o),options:[o,a]});var c6="Arrow",Of=P.forwardRef((o,a)=>{const{children:l,width:c=10,height:f=5,...k}=o;return _.jsx(Rt.svg,{...k,ref:a,width:c,height:f,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:o.asChild?l:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});Of.displayName=c6;var p6=Of;function d6(o){const[a,l]=P.useState(void 0);return ol(()=>{if(o){l({width:o.offsetWidth,height:o.offsetHeight});const c=new ResizeObserver(f=>{if(!Array.isArray(f)||!f.length)return;const k=f[0];let y,x;if("borderBoxSize"in k){const S=k.borderBoxSize,b=Array.isArray(S)?S[0]:S;y=b.inlineSize,x=b.blockSize}else y=o.offsetWidth,x=o.offsetHeight;l({width:y,height:x})});return c.observe(o,{box:"border-box"}),()=>c.unobserve(o)}else l(void 0)},[o]),a}var o0="Popper",[Af,Df]=Fl(o0),[f6,zf]=Af(o0),jf=o=>{const{__scopePopper:a,children:l}=o,[c,f]=P.useState(null);return _.jsx(f6,{scope:a,anchor:c,onAnchorChange:f,children:l})};jf.displayName=o0;var Ff="PopperAnchor",Bf=P.forwardRef((o,a)=>{const{__scopePopper:l,virtualRef:c,...f}=o,k=zf(Ff,l),y=P.useRef(null),x=Tn(a,y),S=P.useRef(null);return P.useEffect(()=>{const b=S.current;S.current=(c==null?void 0:c.current)||y.current,b!==S.current&&k.onAnchorChange(S.current)}),c?null:_.jsx(Rt.div,{...f,ref:x})});Bf.displayName=Ff;var l0="PopperContent",[m6,h6]=Af(l0),Wf=P.forwardRef((o,a)=>{var Ee,Ae,De,Ye,ve,Ue;const{__scopePopper:l,side:c="bottom",sideOffset:f=0,align:k="center",alignOffset:y=0,arrowPadding:x=0,avoidCollisions:S=!0,collisionBoundary:b=[],collisionPadding:R=0,sticky:E="partial",hideWhenDetached:A=!1,updatePositionStrategy:W="optimized",onPlaced:V,...D}=o,F=zf(l0,l),[K,q]=P.useState(null),ee=Tn(a,Fe=>q(Fe)),[ce,fe]=P.useState(null),he=d6(ce),de=(he==null?void 0:he.width)??0,Pe=(he==null?void 0:he.height)??0,We=c+(k!=="center"?"-"+k:""),Le=typeof R=="number"?R:{top:0,right:0,bottom:0,left:0,...R},Ie=Array.isArray(b)?b:[b],_e=Ie.length>0,Xe={padding:Le,boundary:Ie.filter(k6),altBoundary:_e},{refs:je,floatingStyles:Ne,placement:Se,isPositioned:be,middlewareData:U}=t6({strategy:"fixed",placement:We,whileElementsMounted:(...Fe)=>Gg(...Fe,{animationFrame:W==="always"}),elements:{reference:F.anchor},middleware:[r6({mainAxis:f+Pe,alignmentAxis:y}),S&&i6({mainAxis:!0,crossAxis:!1,limiter:E==="partial"?o6():void 0,...Xe}),S&&l6({...Xe}),a6({...Xe,apply:({elements:Fe,rects:st,availableWidth:wn,availableHeight:mn})=>{const{width:Sn,height:Zn}=st.reference,Jt=Fe.floating.style;Jt.setProperty("--radix-popper-available-width",`${wn}px`),Jt.setProperty("--radix-popper-available-height",`${mn}px`),Jt.setProperty("--radix-popper-anchor-width",`${Sn}px`),Jt.setProperty("--radix-popper-anchor-height",`${Zn}px`)}}),ce&&u6({element:ce,padding:x}),v6({arrowWidth:de,arrowHeight:Pe}),A&&s6({strategy:"referenceHidden",...Xe})]}),[ue,ie]=Gf(Se),j=_o(V);ol(()=>{be&&(j==null||j())},[be,j]);const oe=(Ee=U.arrow)==null?void 0:Ee.x,Re=(Ae=U.arrow)==null?void 0:Ae.y,Me=((De=U.arrow)==null?void 0:De.centerOffset)!==0,[te,me]=P.useState();return ol(()=>{K&&me(window.getComputedStyle(K).zIndex)},[K]),_.jsx("div",{ref:je.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ne,transform:be?Ne.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:te,"--radix-popper-transform-origin":[(Ye=U.transformOrigin)==null?void 0:Ye.x,(ve=U.transformOrigin)==null?void 0:ve.y].join(" "),...((Ue=U.hide)==null?void 0:Ue.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:o.dir,children:_.jsx(m6,{scope:l,placedSide:ue,onArrowChange:fe,arrowX:oe,arrowY:Re,shouldHideArrow:Me,children:_.jsx(Rt.div,{"data-side":ue,"data-align":ie,...D,ref:ee,style:{...D.style,animation:be?void 0:"none"}})})})});Wf.displayName=l0;var Hf="PopperArrow",g6={top:"bottom",right:"left",bottom:"top",left:"right"},Vf=P.forwardRef(function(a,l){const{__scopePopper:c,...f}=a,k=h6(Hf,c),y=g6[k.placedSide];return _.jsx("span",{ref:k.onArrowChange,style:{position:"absolute",left:k.arrowX,top:k.arrowY,[y]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[k.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[k.placedSide],visibility:k.shouldHideArrow?"hidden":void 0},children:_.jsx(p6,{...f,ref:l,style:{...f.style,display:"block"}})})});Vf.displayName=Hf;function k6(o){return o!==null}var v6=o=>({name:"transformOrigin",options:o,fn(a){var F,K,q;const{placement:l,rects:c,middlewareData:f}=a,y=((F=f.arrow)==null?void 0:F.centerOffset)!==0,x=y?0:o.arrowWidth,S=y?0:o.arrowHeight,[b,R]=Gf(l),E={start:"0%",center:"50%",end:"100%"}[R],A=(((K=f.arrow)==null?void 0:K.x)??0)+x/2,W=(((q=f.arrow)==null?void 0:q.y)??0)+S/2;let V="",D="";return b==="bottom"?(V=y?E:`${A}px`,D=`${-S}px`):b==="top"?(V=y?E:`${A}px`,D=`${c.floating.height+S}px`):b==="right"?(V=`${-S}px`,D=y?E:`${W}px`):b==="left"&&(V=`${c.floating.width+S}px`,D=y?E:`${W}px`),{data:{x:V,y:D}}}});function Gf(o){const[a,l="center"]=o.split("-");return[a,l]}var y6=jf,_6=Bf,x6=Wf,T6=Vf,F1=["Enter"," "],w6=["ArrowDown","PageUp","Home"],Uf=["ArrowUp","PageDown","End"],S6=[...w6,...Uf],Z6={ltr:[...F1,"ArrowRight"],rtl:[...F1,"ArrowLeft"]},b6={ltr:["ArrowLeft"],rtl:["ArrowRight"]},hs="Menu",[us,C6,E6]=s2(hs),[Bl,Kf]=Fl(hs,[E6,Df,Du]),$u=Df(),$f=Du(),[P6,Wl]=Bl(hs),[M6,gs]=Bl(hs),Xf=o=>{const{__scopeMenu:a,open:l=!1,children:c,dir:f,onOpenChange:k,modal:y=!0}=o,x=$u(a),[S,b]=P.useState(null),R=P.useRef(!1),E=_o(k),A=W1(f);return P.useEffect(()=>{const W=()=>{R.current=!0,document.addEventListener("pointerdown",V,{capture:!0,once:!0}),document.addEventListener("pointermove",V,{capture:!0,once:!0})},V=()=>R.current=!1;return document.addEventListener("keydown",W,{capture:!0}),()=>{document.removeEventListener("keydown",W,{capture:!0}),document.removeEventListener("pointerdown",V,{capture:!0}),document.removeEventListener("pointermove",V,{capture:!0})}},[]),_.jsx(y6,{...x,children:_.jsx(P6,{scope:a,open:l,onOpenChange:E,content:S,onContentChange:b,children:_.jsx(M6,{scope:a,onClose:P.useCallback(()=>E(!1),[E]),isUsingKeyboardRef:R,dir:A,modal:y,children:c})})})};Xf.displayName=hs;var L6="MenuAnchor",a0=P.forwardRef((o,a)=>{const{__scopeMenu:l,...c}=o,f=$u(l);return _.jsx(_6,{...f,...c,ref:a})});a0.displayName=L6;var s0="MenuPortal",[N6,qf]=Bl(s0,{forceMount:void 0}),Yf=o=>{const{__scopeMenu:a,forceMount:l,children:c,container:f}=o,k=Wl(s0,a);return _.jsx(N6,{scope:a,forceMount:l,children:_.jsx(wo,{present:l||k.open,children:_.jsx(U1,{asChild:!0,container:f,children:c})})})};Yf.displayName=s0;var Ur="MenuContent",[R6,u0]=Bl(Ur),Qf=P.forwardRef((o,a)=>{const l=qf(Ur,o.__scopeMenu),{forceMount:c=l.forceMount,...f}=o,k=Wl(Ur,o.__scopeMenu),y=gs(Ur,o.__scopeMenu);return _.jsx(us.Provider,{scope:o.__scopeMenu,children:_.jsx(wo,{present:c||k.open,children:_.jsx(us.Slot,{scope:o.__scopeMenu,children:y.modal?_.jsx(I6,{...f,ref:a}):_.jsx(O6,{...f,ref:a})})})})}),I6=P.forwardRef((o,a)=>{const l=Wl(Ur,o.__scopeMenu),c=P.useRef(null),f=Tn(a,c);return P.useEffect(()=>{const k=c.current;if(k)return H2(k)},[]),_.jsx(c0,{...o,ref:f,trapFocus:l.open,disableOutsidePointerEvents:l.open,disableOutsideScroll:!0,onFocusOutside:ct(o.onFocusOutside,k=>k.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>l.onOpenChange(!1)})}),O6=P.forwardRef((o,a)=>{const l=Wl(Ur,o.__scopeMenu);return _.jsx(c0,{...o,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>l.onOpenChange(!1)})}),A6=ls("MenuContent.ScrollLock"),c0=P.forwardRef((o,a)=>{const{__scopeMenu:l,loop:c=!1,trapFocus:f,onOpenAutoFocus:k,onCloseAutoFocus:y,disableOutsidePointerEvents:x,onEntryFocus:S,onEscapeKeyDown:b,onPointerDownOutside:R,onFocusOutside:E,onInteractOutside:A,onDismiss:W,disableOutsideScroll:V,...D}=o,F=Wl(Ur,l),K=gs(Ur,l),q=$u(l),ee=$f(l),ce=C6(l),[fe,he]=P.useState(null),de=P.useRef(null),Pe=Tn(a,de,F.onContentChange),We=P.useRef(0),Le=P.useRef(""),Ie=P.useRef(0),_e=P.useRef(null),Xe=P.useRef("right"),je=P.useRef(0),Ne=V?K1:P.Fragment,Se=V?{as:A6,allowPinchZoom:!0}:void 0,be=ue=>{var Ee,Ae;const ie=Le.current+ue,j=ce().filter(De=>!De.disabled),oe=document.activeElement,Re=(Ee=j.find(De=>De.ref.current===oe))==null?void 0:Ee.textValue,Me=j.map(De=>De.textValue),te=$6(Me,ie,Re),me=(Ae=j.find(De=>De.textValue===te))==null?void 0:Ae.ref.current;(function De(Ye){Le.current=Ye,window.clearTimeout(We.current),Ye!==""&&(We.current=window.setTimeout(()=>De(""),1e3))})(ie),me&&setTimeout(()=>me.focus())};P.useEffect(()=>()=>window.clearTimeout(We.current),[]),I2();const U=P.useCallback(ue=>{var j,oe;return Xe.current===((j=_e.current)==null?void 0:j.side)&&q6(ue,(oe=_e.current)==null?void 0:oe.area)},[]);return _.jsx(R6,{scope:l,searchRef:Le,onItemEnter:P.useCallback(ue=>{U(ue)&&ue.preventDefault()},[U]),onItemLeave:P.useCallback(ue=>{var ie;U(ue)||((ie=de.current)==null||ie.focus(),he(null))},[U]),onTriggerLeave:P.useCallback(ue=>{U(ue)&&ue.preventDefault()},[U]),pointerGraceTimerRef:Ie,onPointerGraceIntentChange:P.useCallback(ue=>{_e.current=ue},[]),children:_.jsx(Ne,{...Se,children:_.jsx(G1,{asChild:!0,trapped:f,onMountAutoFocus:ct(k,ue=>{var ie;ue.preventDefault(),(ie=de.current)==null||ie.focus({preventScroll:!0})}),onUnmountAutoFocus:y,children:_.jsx(V1,{asChild:!0,disableOutsidePointerEvents:x,onEscapeKeyDown:b,onPointerDownOutside:R,onFocusOutside:E,onInteractOutside:A,onDismiss:W,children:_.jsx(h2,{asChild:!0,...ee,dir:K.dir,orientation:"vertical",loop:c,currentTabStopId:fe,onCurrentTabStopIdChange:he,onEntryFocus:ct(S,ue=>{K.isUsingKeyboardRef.current||ue.preventDefault()}),preventScrollOnEntryFocus:!0,children:_.jsx(x6,{role:"menu","aria-orientation":"vertical","data-state":mm(F.open),"data-radix-menu-content":"",dir:K.dir,...q,...D,ref:Pe,style:{outline:"none",...D.style},onKeyDown:ct(D.onKeyDown,ue=>{const j=ue.target.closest("[data-radix-menu-content]")===ue.currentTarget,oe=ue.ctrlKey||ue.altKey||ue.metaKey,Re=ue.key.length===1;j&&(ue.key==="Tab"&&ue.preventDefault(),!oe&&Re&&be(ue.key));const Me=de.current;if(ue.target!==Me||!S6.includes(ue.key))return;ue.preventDefault();const me=ce().filter(Ee=>!Ee.disabled).map(Ee=>Ee.ref.current);Uf.includes(ue.key)&&me.reverse(),U6(me)}),onBlur:ct(o.onBlur,ue=>{ue.currentTarget.contains(ue.target)||(window.clearTimeout(We.current),Le.current="")}),onPointerMove:ct(o.onPointerMove,cs(ue=>{const ie=ue.target,j=je.current!==ue.clientX;if(ue.currentTarget.contains(ie)&&j){const oe=ue.clientX>je.current?"right":"left";Xe.current=oe,je.current=ue.clientX}}))})})})})})})});Qf.displayName=Ur;var D6="MenuGroup",p0=P.forwardRef((o,a)=>{const{__scopeMenu:l,...c}=o;return _.jsx(Rt.div,{role:"group",...c,ref:a})});p0.displayName=D6;var z6="MenuLabel",Jf=P.forwardRef((o,a)=>{const{__scopeMenu:l,...c}=o;return _.jsx(Rt.div,{...c,ref:a})});Jf.displayName=z6;var Nu="MenuItem",Gd="menu.itemSelect",Xu=P.forwardRef((o,a)=>{const{disabled:l=!1,onSelect:c,...f}=o,k=P.useRef(null),y=gs(Nu,o.__scopeMenu),x=u0(Nu,o.__scopeMenu),S=Tn(a,k),b=P.useRef(!1),R=()=>{const E=k.current;if(!l&&E){const A=new CustomEvent(Gd,{bubbles:!0,cancelable:!0});E.addEventListener(Gd,W=>c==null?void 0:c(W),{once:!0}),u2(E,A),A.defaultPrevented?b.current=!1:y.onClose()}};return _.jsx(em,{...f,ref:S,disabled:l,onClick:ct(o.onClick,R),onPointerDown:E=>{var A;(A=o.onPointerDown)==null||A.call(o,E),b.current=!0},onPointerUp:ct(o.onPointerUp,E=>{var A;b.current||(A=E.currentTarget)==null||A.click()}),onKeyDown:ct(o.onKeyDown,E=>{const A=x.searchRef.current!=="";l||A&&E.key===" "||F1.includes(E.key)&&(E.currentTarget.click(),E.preventDefault())})})});Xu.displayName=Nu;var em=P.forwardRef((o,a)=>{const{__scopeMenu:l,disabled:c=!1,textValue:f,...k}=o,y=u0(Nu,l),x=$f(l),S=P.useRef(null),b=Tn(a,S),[R,E]=P.useState(!1),[A,W]=P.useState("");return P.useEffect(()=>{const V=S.current;V&&W((V.textContent??"").trim())},[k.children]),_.jsx(us.ItemSlot,{scope:l,disabled:c,textValue:f??A,children:_.jsx(g2,{asChild:!0,...x,focusable:!c,children:_.jsx(Rt.div,{role:"menuitem","data-highlighted":R?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0,...k,ref:b,onPointerMove:ct(o.onPointerMove,cs(V=>{c?y.onItemLeave(V):(y.onItemEnter(V),V.defaultPrevented||V.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:ct(o.onPointerLeave,cs(V=>y.onItemLeave(V))),onFocus:ct(o.onFocus,()=>E(!0)),onBlur:ct(o.onBlur,()=>E(!1))})})})}),j6="MenuCheckboxItem",tm=P.forwardRef((o,a)=>{const{checked:l=!1,onCheckedChange:c,...f}=o;return _.jsx(lm,{scope:o.__scopeMenu,checked:l,children:_.jsx(Xu,{role:"menuitemcheckbox","aria-checked":Ru(l)?"mixed":l,...f,ref:a,"data-state":f0(l),onSelect:ct(f.onSelect,()=>c==null?void 0:c(Ru(l)?!0:!l),{checkForDefaultPrevented:!1})})})});tm.displayName=j6;var nm="MenuRadioGroup",[F6,B6]=Bl(nm,{value:void 0,onValueChange:()=>{}}),rm=P.forwardRef((o,a)=>{const{value:l,onValueChange:c,...f}=o,k=_o(c);return _.jsx(F6,{scope:o.__scopeMenu,value:l,onValueChange:k,children:_.jsx(p0,{...f,ref:a})})});rm.displayName=nm;var im="MenuRadioItem",om=P.forwardRef((o,a)=>{const{value:l,...c}=o,f=B6(im,o.__scopeMenu),k=l===f.value;return _.jsx(lm,{scope:o.__scopeMenu,checked:k,children:_.jsx(Xu,{role:"menuitemradio","aria-checked":k,...c,ref:a,"data-state":f0(k),onSelect:ct(c.onSelect,()=>{var y;return(y=f.onValueChange)==null?void 0:y.call(f,l)},{checkForDefaultPrevented:!1})})})});om.displayName=im;var d0="MenuItemIndicator",[lm,W6]=Bl(d0,{checked:!1}),am=P.forwardRef((o,a)=>{const{__scopeMenu:l,forceMount:c,...f}=o,k=W6(d0,l);return _.jsx(wo,{present:c||Ru(k.checked)||k.checked===!0,children:_.jsx(Rt.span,{...f,ref:a,"data-state":f0(k.checked)})})});am.displayName=d0;var H6="MenuSeparator",sm=P.forwardRef((o,a)=>{const{__scopeMenu:l,...c}=o;return _.jsx(Rt.div,{role:"separator","aria-orientation":"horizontal",...c,ref:a})});sm.displayName=H6;var V6="MenuArrow",um=P.forwardRef((o,a)=>{const{__scopeMenu:l,...c}=o,f=$u(l);return _.jsx(T6,{...f,...c,ref:a})});um.displayName=V6;var G6="MenuSub",[Uk,cm]=Bl(G6),is="MenuSubTrigger",pm=P.forwardRef((o,a)=>{const l=Wl(is,o.__scopeMenu),c=gs(is,o.__scopeMenu),f=cm(is,o.__scopeMenu),k=u0(is,o.__scopeMenu),y=P.useRef(null),{pointerGraceTimerRef:x,onPointerGraceIntentChange:S}=k,b={__scopeMenu:o.__scopeMenu},R=P.useCallback(()=>{y.current&&window.clearTimeout(y.current),y.current=null},[]);return P.useEffect(()=>R,[R]),P.useEffect(()=>{const E=x.current;return()=>{window.clearTimeout(E),S(null)}},[x,S]),_.jsx(a0,{asChild:!0,...b,children:_.jsx(em,{id:f.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":f.contentId,"data-state":mm(l.open),...o,ref:Iu(a,f.onTriggerChange),onClick:E=>{var A;(A=o.onClick)==null||A.call(o,E),!(o.disabled||E.defaultPrevented)&&(E.currentTarget.focus(),l.open||l.onOpenChange(!0))},onPointerMove:ct(o.onPointerMove,cs(E=>{k.onItemEnter(E),!E.defaultPrevented&&!o.disabled&&!l.open&&!y.current&&(k.onPointerGraceIntentChange(null),y.current=window.setTimeout(()=>{l.onOpenChange(!0),R()},100))})),onPointerLeave:ct(o.onPointerLeave,cs(E=>{var W,V;R();const A=(W=l.content)==null?void 0:W.getBoundingClientRect();if(A){const D=(V=l.content)==null?void 0:V.dataset.side,F=D==="right",K=F?-5:5,q=A[F?"left":"right"],ee=A[F?"right":"left"];k.onPointerGraceIntentChange({area:[{x:E.clientX+K,y:E.clientY},{x:q,y:A.top},{x:ee,y:A.top},{x:ee,y:A.bottom},{x:q,y:A.bottom}],side:D}),window.clearTimeout(x.current),x.current=window.setTimeout(()=>k.onPointerGraceIntentChange(null),300)}else{if(k.onTriggerLeave(E),E.defaultPrevented)return;k.onPointerGraceIntentChange(null)}})),onKeyDown:ct(o.onKeyDown,E=>{var W;const A=k.searchRef.current!=="";o.disabled||A&&E.key===" "||Z6[c.dir].includes(E.key)&&(l.onOpenChange(!0),(W=l.content)==null||W.focus(),E.preventDefault())})})})});pm.displayName=is;var dm="MenuSubContent",fm=P.forwardRef((o,a)=>{const l=qf(Ur,o.__scopeMenu),{forceMount:c=l.forceMount,...f}=o,k=Wl(Ur,o.__scopeMenu),y=gs(Ur,o.__scopeMenu),x=cm(dm,o.__scopeMenu),S=P.useRef(null),b=Tn(a,S);return _.jsx(us.Provider,{scope:o.__scopeMenu,children:_.jsx(wo,{present:c||k.open,children:_.jsx(us.Slot,{scope:o.__scopeMenu,children:_.jsx(c0,{id:x.contentId,"aria-labelledby":x.triggerId,...f,ref:b,align:"start",side:y.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:R=>{var E;y.isUsingKeyboardRef.current&&((E=S.current)==null||E.focus()),R.preventDefault()},onCloseAutoFocus:R=>R.preventDefault(),onFocusOutside:ct(o.onFocusOutside,R=>{R.target!==x.trigger&&k.onOpenChange(!1)}),onEscapeKeyDown:ct(o.onEscapeKeyDown,R=>{y.onClose(),R.preventDefault()}),onKeyDown:ct(o.onKeyDown,R=>{var W;const E=R.currentTarget.contains(R.target),A=b6[y.dir].includes(R.key);E&&A&&(k.onOpenChange(!1),(W=x.trigger)==null||W.focus(),R.preventDefault())})})})})})});fm.displayName=dm;function mm(o){return o?"open":"closed"}function Ru(o){return o==="indeterminate"}function f0(o){return Ru(o)?"indeterminate":o?"checked":"unchecked"}function U6(o){const a=document.activeElement;for(const l of o)if(l===a||(l.focus(),document.activeElement!==a))return}function K6(o,a){return o.map((l,c)=>o[(a+c)%o.length])}function $6(o,a,l){const f=a.length>1&&Array.from(a).every(b=>b===a[0])?a[0]:a,k=l?o.indexOf(l):-1;let y=K6(o,Math.max(k,0));f.length===1&&(y=y.filter(b=>b!==l));const S=y.find(b=>b.toLowerCase().startsWith(f.toLowerCase()));return S!==l?S:void 0}function X6(o,a){const{x:l,y:c}=o;let f=!1;for(let k=0,y=a.length-1;k<a.length;y=k++){const x=a[k],S=a[y],b=x.x,R=x.y,E=S.x,A=S.y;R>c!=A>c&&l<(E-b)*(c-R)/(A-R)+b&&(f=!f)}return f}function q6(o,a){if(!a)return!1;const l={x:o.clientX,y:o.clientY};return X6(l,a)}function cs(o){return a=>a.pointerType==="mouse"?o(a):void 0}var Y6=Xf,Q6=a0,J6=Yf,ek=Qf,tk=p0,nk=Jf,rk=Xu,ik=tm,ok=rm,lk=om,ak=am,sk=sm,uk=um,ck=pm,pk=fm,qu="DropdownMenu",[dk]=Fl(qu,[Kf]),Yn=Kf(),[fk,hm]=dk(qu),gm=o=>{const{__scopeDropdownMenu:a,children:l,dir:c,open:f,defaultOpen:k,onOpenChange:y,modal:x=!0}=o,S=Yn(a),b=P.useRef(null),[R,E]=Au({prop:f,defaultProp:k??!1,onChange:y,caller:qu});return _.jsx(fk,{scope:a,triggerId:Ol(),triggerRef:b,contentId:Ol(),open:R,onOpenChange:E,onOpenToggle:P.useCallback(()=>E(A=>!A),[E]),modal:x,children:_.jsx(Y6,{...S,open:R,onOpenChange:E,dir:c,modal:x,children:l})})};gm.displayName=qu;var km="DropdownMenuTrigger",vm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,disabled:c=!1,...f}=o,k=hm(km,l),y=Yn(l);return _.jsx(Q6,{asChild:!0,...y,children:_.jsx(Rt.button,{type:"button",id:k.triggerId,"aria-haspopup":"menu","aria-expanded":k.open,"aria-controls":k.open?k.contentId:void 0,"data-state":k.open?"open":"closed","data-disabled":c?"":void 0,disabled:c,...f,ref:Iu(a,k.triggerRef),onPointerDown:ct(o.onPointerDown,x=>{!c&&x.button===0&&x.ctrlKey===!1&&(k.onOpenToggle(),k.open||x.preventDefault())}),onKeyDown:ct(o.onKeyDown,x=>{c||(["Enter"," "].includes(x.key)&&k.onOpenToggle(),x.key==="ArrowDown"&&k.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(x.key)&&x.preventDefault())})})})});vm.displayName=km;var mk="DropdownMenuPortal",ym=o=>{const{__scopeDropdownMenu:a,...l}=o,c=Yn(a);return _.jsx(J6,{...c,...l})};ym.displayName=mk;var _m="DropdownMenuContent",xm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=hm(_m,l),k=Yn(l),y=P.useRef(!1);return _.jsx(ek,{id:f.contentId,"aria-labelledby":f.triggerId,...k,...c,ref:a,onCloseAutoFocus:ct(o.onCloseAutoFocus,x=>{var S;y.current||(S=f.triggerRef.current)==null||S.focus(),y.current=!1,x.preventDefault()}),onInteractOutside:ct(o.onInteractOutside,x=>{const S=x.detail.originalEvent,b=S.button===0&&S.ctrlKey===!0,R=S.button===2||b;(!f.modal||R)&&(y.current=!0)}),style:{...o.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});xm.displayName=_m;var hk="DropdownMenuGroup",gk=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(tk,{...f,...c,ref:a})});gk.displayName=hk;var kk="DropdownMenuLabel",Tm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(nk,{...f,...c,ref:a})});Tm.displayName=kk;var vk="DropdownMenuItem",wm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(rk,{...f,...c,ref:a})});wm.displayName=vk;var yk="DropdownMenuCheckboxItem",Sm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(ik,{...f,...c,ref:a})});Sm.displayName=yk;var _k="DropdownMenuRadioGroup",xk=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(ok,{...f,...c,ref:a})});xk.displayName=_k;var Tk="DropdownMenuRadioItem",Zm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(lk,{...f,...c,ref:a})});Zm.displayName=Tk;var wk="DropdownMenuItemIndicator",bm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(ak,{...f,...c,ref:a})});bm.displayName=wk;var Sk="DropdownMenuSeparator",Cm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(sk,{...f,...c,ref:a})});Cm.displayName=Sk;var Zk="DropdownMenuArrow",bk=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(uk,{...f,...c,ref:a})});bk.displayName=Zk;var Ck="DropdownMenuSubTrigger",Em=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(ck,{...f,...c,ref:a})});Em.displayName=Ck;var Ek="DropdownMenuSubContent",Pm=P.forwardRef((o,a)=>{const{__scopeDropdownMenu:l,...c}=o,f=Yn(l);return _.jsx(pk,{...f,...c,ref:a,style:{...o.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Pm.displayName=Ek;var Pk=gm,Mk=vm,Lk=ym,Mm=xm,Lm=Tm,Nm=wm,Rm=Sm,Im=Zm,Om=bm,Am=Cm,Dm=Em,zm=Pm;const Nk=Pk,Rk=Mk,Ik=P.forwardRef(({className:o,inset:a,children:l,...c},f)=>_.jsxs(Dm,{ref:f,className:Ct("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",o),...c,children:[l,_.jsx(Oh,{className:"ml-auto h-4 w-4"})]}));Ik.displayName=Dm.displayName;const Ok=P.forwardRef(({className:o,...a},l)=>_.jsx(zm,{ref:l,className:Ct("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...a}));Ok.displayName=zm.displayName;const jm=P.forwardRef(({className:o,sideOffset:a=4,...l},c)=>_.jsx(Lk,{children:_.jsx(Mm,{ref:c,sideOffset:a,className:Ct("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...l})}));jm.displayName=Mm.displayName;const Fm=P.forwardRef(({className:o,inset:a,...l},c)=>_.jsx(Nm,{ref:c,className:Ct("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",o),...l}));Fm.displayName=Nm.displayName;const Ak=P.forwardRef(({className:o,children:a,checked:l,...c},f)=>_.jsxs(Rm,{ref:f,className:Ct("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),checked:l,...c,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(Om,{children:_.jsx(Ih,{className:"h-4 w-4"})})}),a]}));Ak.displayName=Rm.displayName;const Dk=P.forwardRef(({className:o,children:a,...l},c)=>_.jsxs(Im,{ref:c,className:Ct("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...l,children:[_.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(Om,{children:_.jsx(Dh,{className:"h-2 w-2 fill-current"})})}),a]}));Dk.displayName=Im.displayName;const zk=P.forwardRef(({className:o,inset:a,...l},c)=>_.jsx(Lm,{ref:c,className:Ct("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",o),...l}));zk.displayName=Lm.displayName;const jk=P.forwardRef(({className:o,...a},l)=>_.jsx(Am,{ref:l,className:Ct("-mx-1 my-1 h-px bg-muted",o),...a}));jk.displayName=Am.displayName;function Fk({currentLanguage:o,onLanguageChange:a}){const l=Rd.find(c=>c.code===o);return _.jsxs(Nk,{children:[_.jsx(Rk,{asChild:!0,children:_.jsxs(Gr,{variant:"outline",size:"sm",className:"gap-2",children:[_.jsx(Wh,{className:"w-4 h-4"}),_.jsxs("span",{className:"hidden sm:inline",children:[l==null?void 0:l.flag," ",l==null?void 0:l.name]}),_.jsx("span",{className:"sm:hidden",children:l==null?void 0:l.flag})]})}),_.jsx(jm,{align:"end",children:Rd.map(c=>_.jsxs(Fm,{onClick:()=>a(c.code),className:o===c.code?"bg-accent":"",children:[_.jsx("span",{className:"mr-2",children:c.flag}),c.name]},c.code))})]})}const Bk="gpx-cutter",jl="routes",m0="current";function h0(){return new Promise((o,a)=>{const l=indexedDB.open(Bk,1);l.onupgradeneeded=()=>l.result.createObjectStore(jl),l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)})}async function P1(o,a,l,c){const f=await h0();return new Promise((k,y)=>{const x=f.transaction(jl,"readwrite");x.objectStore(jl).put({xml:o,filename:a,startFromKM:l,distanceKM:c},m0),x.oncomplete=()=>k(),x.onerror=()=>y(x.error)})}async function Ud(){const o=await h0();return new Promise((a,l)=>{const f=o.transaction(jl,"readonly").objectStore(jl).get(m0);f.onsuccess=()=>a(f.result??null),f.onerror=()=>l(f.error)})}async function Kd(){const o=await h0();return new Promise((a,l)=>{const c=o.transaction(jl,"readwrite");c.objectStore(jl).delete(m0),c.oncomplete=()=>a(),c.onerror=()=>l(c.error)})}const $d=`<?xml version='1.0' encoding='UTF-8'?>
<gpx version="1.1" creator="https://www.komoot.de" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>from Ostend to Antwerp</name>
    <author>
      <link href="https://www.komoot.de">
        <text>komoot</text>
        <type>text/html</type>
      </link>
    </author>
  </metadata>
  <trk>
    <name>from Ostend to Antwerp</name>
    <trkseg>
      <trkpt lat="51.238301" lon="2.918058">
        <ele>0.044322</ele>
        <time>2026-03-14T12:39:43.012Z</time>
      </trkpt>
      <trkpt lat="51.238340" lon="2.918100">
        <ele>0.044322</ele>
        <time>2026-03-14T12:39:44.761Z</time>
      </trkpt>
      <trkpt lat="51.237319" lon="2.920415">
        <ele>0.368553</ele>
        <time>2026-03-14T12:40:51.637Z</time>
      </trkpt>
      <trkpt lat="51.236876" lon="2.921165">
        <ele>0.595911</ele>
        <time>2026-03-14T12:41:17.029Z</time>
      </trkpt>
      <trkpt lat="51.236507" lon="2.921666">
        <ele>0.779395</ele>
        <time>2026-03-14T12:41:36.362Z</time>
      </trkpt>
      <trkpt lat="51.236006" lon="2.922258">
        <ele>1.030845</ele>
        <time>2026-03-14T12:42:00.516Z</time>
      </trkpt>
      <trkpt lat="51.235461" lon="2.922728">
        <ele>1.280748</ele>
        <time>2026-03-14T12:42:23.476Z</time>
      </trkpt>
      <trkpt lat="51.235147" lon="2.922968">
        <ele>1.450789</ele>
        <time>2026-03-14T12:42:36.898Z</time>
      </trkpt>
      <trkpt lat="51.234991" lon="2.923053">
        <ele>1.628418</ele>
        <time>2026-03-14T12:42:43.535Z</time>
      </trkpt>
      <trkpt lat="51.234847" lon="2.923063">
        <ele>1.783748</ele>
        <time>2026-03-14T12:42:49.454Z</time>
      </trkpt>
      <trkpt lat="51.234824" lon="2.922967">
        <ele>1.853104</ele>
        <time>2026-03-14T12:42:51.763Z</time>
      </trkpt>
      <trkpt lat="51.234592" lon="2.921912">
        <ele>2.607600</ele>
        <time>2026-03-14T12:43:15.713Z</time>
      </trkpt>
      <trkpt lat="51.234615" lon="2.921663">
        <ele>2.777434</ele>
        <time>2026-03-14T12:43:21.195Z</time>
      </trkpt>
      <trkpt lat="51.234620" lon="2.921505">
        <ele>2.884181</ele>
        <time>2026-03-14T12:43:24.722Z</time>
      </trkpt>
      <trkpt lat="51.234692" lon="2.921438">
        <ele>2.973983</ele>
        <time>2026-03-14T12:43:27.095Z</time>
      </trkpt>
      <trkpt lat="51.234709" lon="2.921308">
        <ele>3.063594</ele>
        <time>2026-03-14T12:43:29.551Z</time>
      </trkpt>
      <trkpt lat="51.234683" lon="2.921228">
        <ele>3.124413</ele>
        <time>2026-03-14T12:43:31.150Z</time>
      </trkpt>
      <trkpt lat="51.234612" lon="2.921178">
        <ele>3.208035</ele>
        <time>2026-03-14T12:43:33.288Z</time>
      </trkpt>
      <trkpt lat="51.234539" lon="2.921221">
        <ele>3.291884</ele>
        <time>2026-03-14T12:43:35.471Z</time>
      </trkpt>
      <trkpt lat="51.234510" lon="2.921296">
        <ele>3.343218</ele>
        <time>2026-03-14T12:43:36.890Z</time>
      </trkpt>
      <trkpt lat="51.234469" lon="2.921289">
        <ele>3.349744</ele>
        <time>2026-03-14T12:43:38.094Z</time>
      </trkpt>
      <trkpt lat="51.234251" lon="2.921399">
        <ele>3.385928</ele>
        <time>2026-03-14T12:43:44.018Z</time>
      </trkpt>
      <trkpt lat="51.234149" lon="2.921453">
        <ele>3.402935</ele>
        <time>2026-03-14T12:43:46.828Z</time>
      </trkpt>
      <trkpt lat="51.233478" lon="2.921818">
        <ele>3.515125</ele>
        <time>2026-03-14T12:44:02.495Z</time>
      </trkpt>
      <trkpt lat="51.233161" lon="2.921993">
        <ele>3.568209</ele>
        <time>2026-03-14T12:44:09.569Z</time>
      </trkpt>
      <trkpt lat="51.232626" lon="2.922267">
        <ele>3.568882</ele>
        <time>2026-03-14T12:44:21.316Z</time>
      </trkpt>
      <trkpt lat="51.232553" lon="2.922304">
        <ele>3.546096</ele>
        <time>2026-03-14T12:44:23.454Z</time>
      </trkpt>
      <trkpt lat="51.232440" lon="2.922363">
        <ele>3.510727</ele>
        <time>2026-03-14T12:44:26.728Z</time>
      </trkpt>
      <trkpt lat="51.232142" lon="2.922525">
        <ele>3.417073</ele>
        <time>2026-03-14T12:44:35.365Z</time>
      </trkpt>
      <trkpt lat="51.232033" lon="2.922583">
        <ele>3.382892</ele>
        <time>2026-03-14T12:44:38.515Z</time>
      </trkpt>
      <trkpt lat="51.231960" lon="2.922621">
        <ele>3.360049</ele>
        <time>2026-03-14T12:44:40.661Z</time>
      </trkpt>
      <trkpt lat="51.230942" lon="2.923172">
        <ele>3.040533</ele>
        <time>2026-03-14T12:45:03.964Z</time>
      </trkpt>
      <trkpt lat="51.230867" lon="2.923208">
        <ele>3.017357</ele>
        <time>2026-03-14T12:45:05.650Z</time>
      </trkpt>
      <trkpt lat="51.230266" lon="2.923521">
        <ele>2.830281</ele>
        <time>2026-03-14T12:45:19.361Z</time>
      </trkpt>
      <trkpt lat="51.229978" lon="2.923678">
        <ele>2.740222</ele>
        <time>2026-03-14T12:45:25.822Z</time>
      </trkpt>
      <trkpt lat="51.229871" lon="2.923737">
        <ele>2.706723</ele>
        <time>2026-03-14T12:45:28.213Z</time>
      </trkpt>
      <trkpt lat="51.229704" lon="2.923712">
        <ele>2.657085</ele>
        <time>2026-03-14T12:45:31.908Z</time>
      </trkpt>
      <trkpt lat="51.229601" lon="2.923689">
        <ele>2.626307</ele>
        <time>2026-03-14T12:45:34.170Z</time>
      </trkpt>
      <trkpt lat="51.229437" lon="2.923651">
        <ele>2.577265</ele>
        <time>2026-03-14T12:45:37.672Z</time>
      </trkpt>
      <trkpt lat="51.229265" lon="2.923594">
        <ele>2.526786</ele>
        <time>2026-03-14T12:45:41.349Z</time>
      </trkpt>
      <trkpt lat="51.229103" lon="2.923520">
        <ele>2.479144</ele>
        <time>2026-03-14T12:45:44.850Z</time>
      </trkpt>
      <trkpt lat="51.228821" lon="2.923391">
        <ele>2.396201</ele>
        <time>2026-03-14T12:45:51.094Z</time>
      </trkpt>
      <trkpt lat="51.228648" lon="2.923234">
        <ele>2.339938</ele>
        <time>2026-03-14T12:45:55.447Z</time>
      </trkpt>
      <trkpt lat="51.228584" lon="2.923116">
        <ele>2.312298</ele>
        <time>2026-03-14T12:45:57.580Z</time>
      </trkpt>
      <trkpt lat="51.228493" lon="2.922795">
        <ele>2.249908</ele>
        <time>2026-03-14T12:46:02.433Z</time>
      </trkpt>
      <trkpt lat="51.228339" lon="2.922222">
        <ele>2.139502</ele>
        <time>2026-03-14T12:46:11.139Z</time>
      </trkpt>
      <trkpt lat="51.228087" lon="2.921300">
        <ele>2.321399</ele>
        <time>2026-03-14T12:46:26.051Z</time>
      </trkpt>
      <trkpt lat="51.228051" lon="2.921168">
        <ele>2.398858</ele>
        <time>2026-03-14T12:46:28.417Z</time>
      </trkpt>
      <trkpt lat="51.227991" lon="2.921222">
        <ele>2.458030</ele>
        <time>2026-03-14T12:46:30.066Z</time>
      </trkpt>
      <trkpt lat="51.227940" lon="2.921268">
        <ele>2.508351</ele>
        <time>2026-03-14T12:46:31.492Z</time>
      </trkpt>
      <trkpt lat="51.227653" lon="2.921558">
        <ele>2.800140</ele>
        <time>2026-03-14T12:46:40.186Z</time>
      </trkpt>
      <trkpt lat="51.227546" lon="2.921666">
        <ele>2.908891</ele>
        <time>2026-03-14T12:46:43.498Z</time>
      </trkpt>
      <trkpt lat="51.227287" lon="2.921930">
        <ele>3.172874</ele>
        <time>2026-03-14T12:46:51.901Z</time>
      </trkpt>
      <trkpt lat="51.227236" lon="2.921985">
        <ele>3.225746</ele>
        <time>2026-03-14T12:46:53.614Z</time>
      </trkpt>
      <trkpt lat="51.227183" lon="2.922041">
        <ele>3.280346</ele>
        <time>2026-03-14T12:46:55.401Z</time>
      </trkpt>
      <trkpt lat="51.227134" lon="2.922055">
        <ele>3.323112</ele>
        <time>2026-03-14T12:46:56.861Z</time>
      </trkpt>
      <trkpt lat="51.227223" lon="2.922269">
        <ele>3.461324</ele>
        <time>2026-03-14T12:47:01.155Z</time>
      </trkpt>
      <trkpt lat="51.227186" lon="2.922307">
        <ele>3.499119</ele>
        <time>2026-03-14T12:47:02.783Z</time>
      </trkpt>
      <trkpt lat="51.227120" lon="2.922372">
        <ele>3.565739</ele>
        <time>2026-03-14T12:47:05.324Z</time>
      </trkpt>
      <trkpt lat="51.227083" lon="2.922384">
        <ele>3.597359</ele>
        <time>2026-03-14T12:47:06.720Z</time>
      </trkpt>
      <trkpt lat="51.226584" lon="2.923394">
        <ele>4.051975</ele>
        <time>2026-03-14T12:47:34.365Z</time>
      </trkpt>
      <trkpt lat="51.226515" lon="2.923452">
        <ele>4.095976</ele>
        <time>2026-03-14T12:47:36.655Z</time>
      </trkpt>
      <trkpt lat="51.226079" lon="2.923723">
        <ele>4.359988</ele>
        <time>2026-03-14T12:47:50.764Z</time>
      </trkpt>
      <trkpt lat="51.225652" lon="2.923993">
        <ele>4.614969</ele>
        <time>2026-03-14T12:48:03.604Z</time>
      </trkpt>
      <trkpt lat="51.225273" lon="2.924229">
        <ele>4.730336</ele>
        <time>2026-03-14T12:48:15.313Z</time>
      </trkpt>
      <trkpt lat="51.225216" lon="2.924264">
        <ele>4.747655</ele>
        <time>2026-03-14T12:48:17.151Z</time>
      </trkpt>
      <trkpt lat="51.224790" lon="2.924528">
        <ele>4.877246</ele>
        <time>2026-03-14T12:48:30.906Z</time>
      </trkpt>
      <trkpt lat="51.224682" lon="2.924666">
        <ele>4.916474</ele>
        <time>2026-03-14T12:48:35.201Z</time>
      </trkpt>
      <trkpt lat="51.224625" lon="2.924883">
        <ele>4.958268</ele>
        <time>2026-03-14T12:48:38.922Z</time>
      </trkpt>
      <trkpt lat="51.224295" lon="2.925825">
        <ele>5.094481</ele>
        <time>2026-03-14T12:48:56.528Z</time>
      </trkpt>
      <trkpt lat="51.224323" lon="2.925936">
        <ele>5.075248</ele>
        <time>2026-03-14T12:48:58.466Z</time>
      </trkpt>
      <trkpt lat="51.224350" lon="2.926033">
        <ele>5.058188</ele>
        <time>2026-03-14T12:49:00.206Z</time>
      </trkpt>
      <trkpt lat="51.224747" lon="2.927404">
        <ele>4.815434</ele>
        <time>2026-03-14T12:49:21.835Z</time>
      </trkpt>
      <trkpt lat="51.224826" lon="2.927676">
        <ele>4.767247</ele>
        <time>2026-03-14T12:49:25.675Z</time>
      </trkpt>
      <trkpt lat="51.225394" lon="2.929535">
        <ele>4.097585</ele>
        <time>2026-03-14T12:49:59.523Z</time>
      </trkpt>
      <trkpt lat="51.225404" lon="2.929596">
        <ele>4.072225</ele>
        <time>2026-03-14T12:50:00.308Z</time>
      </trkpt>
      <trkpt lat="51.225459" lon="2.929662">
        <ele>4.028042</ele>
        <time>2026-03-14T12:50:01.684Z</time>
      </trkpt>
      <trkpt lat="51.225471" lon="2.929702">
        <ele>4.010204</ele>
        <time>2026-03-14T12:50:02.266Z</time>
      </trkpt>
      <trkpt lat="51.225559" lon="2.929886">
        <ele>3.917090</ele>
        <time>2026-03-14T12:50:05.259Z</time>
      </trkpt>
      <trkpt lat="51.225608" lon="2.929975">
        <ele>3.869430</ele>
        <time>2026-03-14T12:50:06.803Z</time>
      </trkpt>
      <trkpt lat="51.225695" lon="2.929908">
        <ele>3.807400</ele>
        <time>2026-03-14T12:50:08.884Z</time>
      </trkpt>
      <trkpt lat="51.225751" lon="2.930033">
        <ele>3.745588</ele>
        <time>2026-03-14T12:50:10.973Z</time>
      </trkpt>
      <trkpt lat="51.226108" lon="2.930805">
        <ele>3.511173</ele>
        <time>2026-03-14T12:50:24.301Z</time>
      </trkpt>
      <trkpt lat="51.226111" lon="2.930812">
        <ele>3.511339</ele>
        <time>2026-03-14T12:50:24.433Z</time>
      </trkpt>
      <trkpt lat="51.226042" lon="2.931275">
        <ele>3.520615</ele>
        <time>2026-03-14T12:50:31.273Z</time>
      </trkpt>
      <trkpt lat="51.225869" lon="2.931675">
        <ele>3.530089</ele>
        <time>2026-03-14T12:50:37.869Z</time>
      </trkpt>
      <trkpt lat="51.225496" lon="2.932552">
        <ele>3.550752</ele>
        <time>2026-03-14T12:50:53.212Z</time>
      </trkpt>
      <trkpt lat="51.225387" lon="2.932700">
        <ele>3.555205</ele>
        <time>2026-03-14T12:50:56.496Z</time>
      </trkpt>
      <trkpt lat="51.225341" lon="2.932757">
        <ele>3.557017</ele>
        <time>2026-03-14T12:50:57.790Z</time>
      </trkpt>
      <trkpt lat="51.225246" lon="2.932875">
        <ele>3.557668</ele>
        <time>2026-03-14T12:51:00.504Z</time>
      </trkpt>
      <trkpt lat="51.225205" lon="2.932914">
        <ele>3.551691</ele>
        <time>2026-03-14T12:51:01.541Z</time>
      </trkpt>
      <trkpt lat="51.225195" lon="2.933111">
        <ele>3.536190</ele>
        <time>2026-03-14T12:51:04.250Z</time>
      </trkpt>
      <trkpt lat="51.225169" lon="2.933208">
        <ele>3.527915</ele>
        <time>2026-03-14T12:51:05.668Z</time>
      </trkpt>
      <trkpt lat="51.224643" lon="2.934413">
        <ele>3.412715</ele>
        <time>2026-03-14T12:51:25.273Z</time>
      </trkpt>
      <trkpt lat="51.224400" lon="2.935158">
        <ele>3.346835</ele>
        <time>2026-03-14T12:51:37.374Z</time>
      </trkpt>
      <trkpt lat="51.224322" lon="2.935296">
        <ele>3.335597</ele>
        <time>2026-03-14T12:51:40.056Z</time>
      </trkpt>
      <trkpt lat="51.224037" lon="2.936125">
        <ele>3.355299</ele>
        <time>2026-03-14T12:51:53.727Z</time>
      </trkpt>
      <trkpt lat="51.224042" lon="2.936225">
        <ele>3.357389</ele>
        <time>2026-03-14T12:51:55.191Z</time>
      </trkpt>
      <trkpt lat="51.224007" lon="2.936329">
        <ele>3.359848</ele>
        <time>2026-03-14T12:51:56.916Z</time>
      </trkpt>
      <trkpt lat="51.223953" lon="2.936485">
        <ele>3.363562</ele>
        <time>2026-03-14T12:51:59.526Z</time>
      </trkpt>
      <trkpt lat="51.223827" lon="2.936847">
        <ele>3.372190</ele>
        <time>2026-03-14T12:52:05.597Z</time>
      </trkpt>
      <trkpt lat="51.223787" lon="2.936963">
        <ele>3.374948</ele>
        <time>2026-03-14T12:52:07.535Z</time>
      </trkpt>
      <trkpt lat="51.223708" lon="2.937044">
        <ele>3.378072</ele>
        <time>2026-03-14T12:52:09.735Z</time>
      </trkpt>
      <trkpt lat="51.223432" lon="2.937889">
        <ele>3.386078</ele>
        <time>2026-03-14T12:52:23.660Z</time>
      </trkpt>
      <trkpt lat="51.223030" lon="2.939202">
        <ele>3.303738</ele>
        <time>2026-03-14T12:52:44.797Z</time>
      </trkpt>
      <trkpt lat="51.222944" lon="2.939593">
        <ele>3.280390</ele>
        <time>2026-03-14T12:52:50.498Z</time>
      </trkpt>
      <trkpt lat="51.222899" lon="2.940021">
        <ele>3.255939</ele>
        <time>2026-03-14T12:52:56.483Z</time>
      </trkpt>
      <trkpt lat="51.222939" lon="2.940461">
        <ele>3.227254</ele>
        <time>2026-03-14T12:53:02.889Z</time>
      </trkpt>
      <trkpt lat="51.223191" lon="2.940663">
        <ele>3.156570</ele>
        <time>2026-03-14T12:53:09.236Z</time>
      </trkpt>
      <trkpt lat="51.223388" lon="2.940824">
        <ele>3.101094</ele>
        <time>2026-03-14T12:53:14.139Z</time>
      </trkpt>
      <trkpt lat="51.223371" lon="2.940901">
        <ele>3.088276</ele>
        <time>2026-03-14T12:53:15.298Z</time>
      </trkpt>
      <trkpt lat="51.223334" lon="2.941051">
        <ele>3.062966</ele>
        <time>2026-03-14T12:53:17.571Z</time>
      </trkpt>
      <trkpt lat="51.223290" lon="2.941243">
        <ele>3.030868</ele>
        <time>2026-03-14T12:53:20.407Z</time>
      </trkpt>
      <trkpt lat="51.223230" lon="2.941393">
        <ele>3.002926</ele>
        <time>2026-03-14T12:53:22.856Z</time>
      </trkpt>
      <trkpt lat="51.223179" lon="2.941410">
        <ele>2.989866</ele>
        <time>2026-03-14T12:53:24.006Z</time>
      </trkpt>
      <trkpt lat="51.223098" lon="2.941486">
        <ele>2.966315</ele>
        <time>2026-03-14T12:53:26.044Z</time>
      </trkpt>
      <trkpt lat="51.223020" lon="2.941616">
        <ele>2.938051</ele>
        <time>2026-03-14T12:53:28.512Z</time>
      </trkpt>
      <trkpt lat="51.223105" lon="2.941814">
        <ele>2.900364</ele>
        <time>2026-03-14T12:53:31.768Z</time>
      </trkpt>
      <trkpt lat="51.223128" lon="2.941986">
        <ele>2.872752</ele>
        <time>2026-03-14T12:53:34.150Z</time>
      </trkpt>
      <trkpt lat="51.223064" lon="2.942426">
        <ele>2.801835</ele>
        <time>2026-03-14T12:53:40.414Z</time>
      </trkpt>
      <trkpt lat="51.222809" lon="2.943687">
        <ele>2.609315</ele>
        <time>2026-03-14T12:53:58.574Z</time>
      </trkpt>
      <trkpt lat="51.222345" lon="2.945919">
        <ele>2.394726</ele>
        <time>2026-03-14T12:54:31.943Z</time>
      </trkpt>
      <trkpt lat="51.222247" lon="2.946398">
        <ele>2.414314</ele>
        <time>2026-03-14T12:54:39.206Z</time>
      </trkpt>
      <trkpt lat="51.222116" lon="2.946883">
        <ele>2.434845</ele>
        <time>2026-03-14T12:54:47.242Z</time>
      </trkpt>
      <trkpt lat="51.222067" lon="2.947279">
        <ele>2.450536</ele>
        <time>2026-03-14T12:54:53.480Z</time>
      </trkpt>
      <trkpt lat="51.221944" lon="2.947813">
        <ele>2.472653</ele>
        <time>2026-03-14T12:55:01.937Z</time>
      </trkpt>
      <trkpt lat="51.221758" lon="2.948571">
        <ele>2.431630</ele>
        <time>2026-03-14T12:55:13.633Z</time>
      </trkpt>
      <trkpt lat="51.221676" lon="2.948951">
        <ele>2.400588</ele>
        <time>2026-03-14T12:55:18.942Z</time>
      </trkpt>
      <trkpt lat="51.221144" lon="2.950218">
        <ele>2.282778</ele>
        <time>2026-03-14T12:55:40.340Z</time>
      </trkpt>
      <trkpt lat="51.221117" lon="2.950346">
        <ele>2.272346</ele>
        <time>2026-03-14T12:55:42.234Z</time>
      </trkpt>
      <trkpt lat="51.221050" lon="2.950441">
        <ele>2.261297</ele>
        <time>2026-03-14T12:55:44.195Z</time>
      </trkpt>
      <trkpt lat="51.220759" lon="2.950815">
        <ele>2.372079</ele>
        <time>2026-03-14T12:55:52.710Z</time>
      </trkpt>
      <trkpt lat="51.220701" lon="2.950838">
        <ele>2.391627</ele>
        <time>2026-03-14T12:55:54.208Z</time>
      </trkpt>
      <trkpt lat="51.220586" lon="2.950985">
        <ele>2.439816</ele>
        <time>2026-03-14T12:55:57.912Z</time>
      </trkpt>
      <trkpt lat="51.220568" lon="2.951069">
        <ele>2.458005</ele>
        <time>2026-03-14T12:55:59.282Z</time>
      </trkpt>
      <trkpt lat="51.220584" lon="2.951244">
        <ele>2.494239</ele>
        <time>2026-03-14T12:56:02.144Z</time>
      </trkpt>
      <trkpt lat="51.220743" lon="2.951603">
        <ele>2.584321</ele>
        <time>2026-03-14T12:56:09.319Z</time>
      </trkpt>
      <trkpt lat="51.220886" lon="2.952050">
        <ele>2.687156</ele>
        <time>2026-03-14T12:56:17.671Z</time>
      </trkpt>
      <trkpt lat="51.220958" lon="2.952472">
        <ele>2.776765</ele>
        <time>2026-03-14T12:56:24.519Z</time>
      </trkpt>
      <trkpt lat="51.220926" lon="2.953170">
        <ele>2.799544</ele>
        <time>2026-03-14T12:56:34.427Z</time>
      </trkpt>
      <trkpt lat="51.220801" lon="2.953867">
        <ele>2.704748</ele>
        <time>2026-03-14T12:56:44.360Z</time>
      </trkpt>
      <trkpt lat="51.220139" lon="2.956951">
        <ele>2.321943</ele>
        <time>2026-03-14T12:57:29.523Z</time>
      </trkpt>
      <trkpt lat="51.219831" lon="2.958408">
        <ele>2.173834</ele>
        <time>2026-03-14T12:57:52.106Z</time>
      </trkpt>
      <trkpt lat="51.219521" lon="2.959807">
        <ele>2.104634</ele>
        <time>2026-03-14T12:58:13.292Z</time>
      </trkpt>
      <trkpt lat="51.219458" lon="2.960082">
        <ele>2.090979</ele>
        <time>2026-03-14T12:58:17.406Z</time>
      </trkpt>
      <trkpt lat="51.219394" lon="2.960452">
        <ele>2.073079</ele>
        <time>2026-03-14T12:58:22.548Z</time>
      </trkpt>
      <trkpt lat="51.218588" lon="2.964133">
        <ele>1.893099</ele>
        <time>2026-03-14T12:59:15.937Z</time>
      </trkpt>
      <trkpt lat="51.217382" lon="2.969770">
        <ele>2.284298</ele>
        <time>2026-03-14T13:00:41.294Z</time>
      </trkpt>
      <trkpt lat="51.216789" lon="2.972562">
        <ele>2.230316</ele>
        <time>2026-03-14T13:01:21.285Z</time>
      </trkpt>
      <trkpt lat="51.215699" lon="2.977696">
        <ele>2.569288</ele>
        <time>2026-03-14T13:02:39.175Z</time>
      </trkpt>
      <trkpt lat="51.215436" lon="2.978942">
        <ele>2.454591</ele>
        <time>2026-03-14T13:02:56.573Z</time>
      </trkpt>
      <trkpt lat="51.215302" lon="2.979379">
        <ele>2.412147</ele>
        <time>2026-03-14T13:03:03.077Z</time>
      </trkpt>
      <trkpt lat="51.215219" lon="2.979748">
        <ele>2.377946</ele>
        <time>2026-03-14T13:03:08.336Z</time>
      </trkpt>
      <trkpt lat="51.215180" lon="2.980057">
        <ele>2.354629</ele>
        <time>2026-03-14T13:03:12.583Z</time>
      </trkpt>
      <trkpt lat="51.215134" lon="2.980254">
        <ele>2.350735</ele>
        <time>2026-03-14T13:03:15.478Z</time>
      </trkpt>
      <trkpt lat="51.215084" lon="2.980469">
        <ele>2.346487</ele>
        <time>2026-03-14T13:03:18.621Z</time>
      </trkpt>
      <trkpt lat="51.215021" lon="2.980759">
        <ele>2.340802</ele>
        <time>2026-03-14T13:03:22.816Z</time>
      </trkpt>
      <trkpt lat="51.214726" lon="2.982194">
        <ele>2.312828</ele>
        <time>2026-03-14T13:03:44.065Z</time>
      </trkpt>
      <trkpt lat="51.214395" lon="2.983741">
        <ele>2.380731</ele>
        <time>2026-03-14T13:04:06.626Z</time>
      </trkpt>
      <trkpt lat="51.213181" lon="2.989380">
        <ele>2.620867</ele>
        <time>2026-03-14T13:05:32.834Z</time>
      </trkpt>
      <trkpt lat="51.212568" lon="2.992103">
        <ele>2.083132</ele>
        <time>2026-03-14T13:06:09.055Z</time>
      </trkpt>
      <trkpt lat="51.211484" lon="2.997219">
        <ele>1.634307</ele>
        <time>2026-03-14T13:07:24.138Z</time>
      </trkpt>
      <trkpt lat="51.211366" lon="2.997799">
        <ele>1.585446</ele>
        <time>2026-03-14T13:07:32.329Z</time>
      </trkpt>
      <trkpt lat="51.211291" lon="2.998143">
        <ele>1.556262</ele>
        <time>2026-03-14T13:07:37.212Z</time>
      </trkpt>
      <trkpt lat="51.211034" lon="2.999398">
        <ele>1.471216</ele>
        <time>2026-03-14T13:07:54.970Z</time>
      </trkpt>
      <trkpt lat="51.210662" lon="3.001228">
        <ele>1.415662</ele>
        <time>2026-03-14T13:08:21.760Z</time>
      </trkpt>
      <trkpt lat="51.210541" lon="3.001775">
        <ele>1.397465</ele>
        <time>2026-03-14T13:08:30.230Z</time>
      </trkpt>
      <trkpt lat="51.210470" lon="3.001975">
        <ele>1.382006</ele>
        <time>2026-03-14T13:08:33.570Z</time>
      </trkpt>
      <trkpt lat="51.210457" lon="3.002067">
        <ele>1.375664</ele>
        <time>2026-03-14T13:08:34.929Z</time>
      </trkpt>
      <trkpt lat="51.210441" lon="3.002166">
        <ele>1.368788</ele>
        <time>2026-03-14T13:08:36.433Z</time>
      </trkpt>
      <trkpt lat="51.210473" lon="3.002181">
        <ele>1.365208</ele>
        <time>2026-03-14T13:08:37.191Z</time>
      </trkpt>
      <trkpt lat="51.210492" lon="3.002297">
        <ele>1.357145</ele>
        <time>2026-03-14T13:08:38.932Z</time>
      </trkpt>
      <trkpt lat="51.210386" lon="3.002848">
        <ele>1.318383</ele>
        <time>2026-03-14T13:08:47.376Z</time>
      </trkpt>
      <trkpt lat="51.210401" lon="3.002967">
        <ele>1.310220</ele>
        <time>2026-03-14T13:08:49.150Z</time>
      </trkpt>
      <trkpt lat="51.210272" lon="3.003411">
        <ele>1.277307</ele>
        <time>2026-03-14T13:08:56.241Z</time>
      </trkpt>
      <trkpt lat="51.210145" lon="3.003590">
        <ele>1.259120</ele>
        <time>2026-03-14T13:09:00.046Z</time>
      </trkpt>
      <trkpt lat="51.210087" lon="3.003639">
        <ele>1.252076</ele>
        <time>2026-03-14T13:09:01.528Z</time>
      </trkpt>
      <trkpt lat="51.209907" lon="3.003775">
        <ele>1.230698</ele>
        <time>2026-03-14T13:09:05.991Z</time>
      </trkpt>
      <trkpt lat="51.209872" lon="3.003790">
        <ele>1.226808</ele>
        <time>2026-03-14T13:09:06.797Z</time>
      </trkpt>
      <trkpt lat="51.209843" lon="3.003899">
        <ele>1.218844</ele>
        <time>2026-03-14T13:09:08.437Z</time>
      </trkpt>
      <trkpt lat="51.209786" lon="3.004100">
        <ele>1.191847</ele>
        <time>2026-03-14T13:09:11.450Z</time>
      </trkpt>
      <trkpt lat="51.209770" lon="3.004151">
        <ele>1.172010</ele>
        <time>2026-03-14T13:09:12.227Z</time>
      </trkpt>
      <trkpt lat="51.209817" lon="3.004241">
        <ele>1.131260</ele>
        <time>2026-03-14T13:09:13.798Z</time>
      </trkpt>
      <trkpt lat="51.209801" lon="3.004415">
        <ele>1.070097</ele>
        <time>2026-03-14T13:09:16.139Z</time>
      </trkpt>
      <trkpt lat="51.209815" lon="3.004481">
        <ele>1.045863</ele>
        <time>2026-03-14T13:09:17.074Z</time>
      </trkpt>
      <trkpt lat="51.209797" lon="3.004645">
        <ele>0.987958</ele>
        <time>2026-03-14T13:09:19.255Z</time>
      </trkpt>
      <trkpt lat="51.209601" lon="3.005206">
        <ele>0.764560</ele>
        <time>2026-03-14T13:09:27.745Z</time>
      </trkpt>
      <trkpt lat="51.209497" lon="3.005452">
        <ele>0.661345</ele>
        <time>2026-03-14T13:09:31.659Z</time>
      </trkpt>
      <trkpt lat="51.209174" lon="3.006020">
        <ele>0.394555</ele>
        <time>2026-03-14T13:09:41.638Z</time>
      </trkpt>
      <trkpt lat="51.208571" lon="3.007370">
        <ele>0.018081</ele>
        <time>2026-03-14T13:10:03.127Z</time>
      </trkpt>
      <trkpt lat="51.208479" lon="3.007639">
        <ele>-0.033871</ele>
        <time>2026-03-14T13:10:07.295Z</time>
      </trkpt>
      <trkpt lat="51.208400" lon="3.007974">
        <ele>-0.094549</ele>
        <time>2026-03-14T13:10:12.172Z</time>
      </trkpt>
      <trkpt lat="51.208340" lon="3.008395">
        <ele>-0.167738</ele>
        <time>2026-03-14T13:10:18.025Z</time>
      </trkpt>
      <trkpt lat="51.208067" lon="3.011271">
        <ele>-0.464907</ele>
        <time>2026-03-14T13:10:57.472Z</time>
      </trkpt>
      <trkpt lat="51.207914" lon="3.013890">
        <ele>-0.506868</ele>
        <time>2026-03-14T13:11:33.883Z</time>
      </trkpt>
      <trkpt lat="51.207812" lon="3.014775">
        <ele>-0.497781</ele>
        <time>2026-03-14T13:11:46.693Z</time>
      </trkpt>
      <trkpt lat="51.207750" lon="3.015133">
        <ele>-0.453738</ele>
        <time>2026-03-14T13:11:52.042Z</time>
      </trkpt>
      <trkpt lat="51.207463" lon="3.016225">
        <ele>-0.313317</ele>
        <time>2026-03-14T13:12:09.253Z</time>
      </trkpt>
      <trkpt lat="51.206706" lon="3.018717">
        <ele>-0.120135</ele>
        <time>2026-03-14T13:12:49.177Z</time>
      </trkpt>
      <trkpt lat="51.206608" lon="3.019403">
        <ele>-0.100164</ele>
        <time>2026-03-14T13:12:58.913Z</time>
      </trkpt>
      <trkpt lat="51.206549" lon="3.020403">
        <ele>-0.131142</ele>
        <time>2026-03-14T13:13:12.586Z</time>
      </trkpt>
      <trkpt lat="51.206457" lon="3.021225">
        <ele>-0.255117</ele>
        <time>2026-03-14T13:13:23.780Z</time>
      </trkpt>
      <trkpt lat="51.206342" lon="3.021958">
        <ele>-0.367307</ele>
        <time>2026-03-14T13:13:33.849Z</time>
      </trkpt>
      <trkpt lat="51.205921" lon="3.024170">
        <ele>-0.574956</ele>
        <time>2026-03-14T13:14:04.419Z</time>
      </trkpt>
      <trkpt lat="51.205700" lon="3.025580">
        <ele>-0.646689</ele>
        <time>2026-03-14T13:14:24.778Z</time>
      </trkpt>
      <trkpt lat="51.205423" lon="3.027075">
        <ele>-0.379389</ele>
        <time>2026-03-14T13:14:47.861Z</time>
      </trkpt>
      <trkpt lat="51.205263" lon="3.027573">
        <ele>-0.279386</ele>
        <time>2026-03-14T13:14:56.281Z</time>
      </trkpt>
      <trkpt lat="51.204932" lon="3.028438">
        <ele>-0.130476</ele>
        <time>2026-03-14T13:15:11.106Z</time>
      </trkpt>
      <trkpt lat="51.204654" lon="3.029035">
        <ele>-0.110536</ele>
        <time>2026-03-14T13:15:21.602Z</time>
      </trkpt>
      <trkpt lat="51.203095" lon="3.031095">
        <ele>-0.058027</ele>
        <time>2026-03-14T13:16:06.348Z</time>
      </trkpt>
      <trkpt lat="51.202865" lon="3.031477">
        <ele>-0.057554</ele>
        <time>2026-03-14T13:16:13.759Z</time>
      </trkpt>
      <trkpt lat="51.202666" lon="3.031932">
        <ele>-0.057058</ele>
        <time>2026-03-14T13:16:21.562Z</time>
      </trkpt>
      <trkpt lat="51.201725" lon="3.034434">
        <ele>0.119022</ele>
        <time>2026-03-14T13:17:02.812Z</time>
      </trkpt>
      <trkpt lat="51.201032" lon="3.036043">
        <ele>0.253096</ele>
        <time>2026-03-14T13:17:30.767Z</time>
      </trkpt>
      <trkpt lat="51.200787" lon="3.036913">
        <ele>0.317778</ele>
        <time>2026-03-14T13:17:44.341Z</time>
      </trkpt>
      <trkpt lat="51.200697" lon="3.037421">
        <ele>0.324290</ele>
        <time>2026-03-14T13:17:51.812Z</time>
      </trkpt>
      <trkpt lat="51.200656" lon="3.038128">
        <ele>0.224578</ele>
        <time>2026-03-14T13:18:01.725Z</time>
      </trkpt>
      <trkpt lat="51.200658" lon="3.039307">
        <ele>0.059005</ele>
        <time>2026-03-14T13:18:17.559Z</time>
      </trkpt>
      <trkpt lat="51.200663" lon="3.039606">
        <ele>0.017000</ele>
        <time>2026-03-14T13:18:21.493Z</time>
      </trkpt>
      <trkpt lat="51.200676" lon="3.041696">
        <ele>-0.411874</ele>
        <time>2026-03-14T13:18:48.475Z</time>
      </trkpt>
      <trkpt lat="51.200703" lon="3.042337">
        <ele>-0.558255</ele>
        <time>2026-03-14T13:18:56.883Z</time>
      </trkpt>
      <trkpt lat="51.200910" lon="3.044109">
        <ele>-0.864690</ele>
        <time>2026-03-14T13:19:21.006Z</time>
      </trkpt>
      <trkpt lat="51.201304" lon="3.046516">
        <ele>-1.124772</ele>
        <time>2026-03-14T13:19:54.510Z</time>
      </trkpt>
      <trkpt lat="51.201547" lon="3.049584">
        <ele>-1.135798</ele>
        <time>2026-03-14T13:20:37.554Z</time>
      </trkpt>
      <trkpt lat="51.201583" lon="3.050272">
        <ele>-1.093777</ele>
        <time>2026-03-14T13:20:47.846Z</time>
      </trkpt>
      <trkpt lat="51.201590" lon="3.050895">
        <ele>-1.055852</ele>
        <time>2026-03-14T13:20:56.842Z</time>
      </trkpt>
      <trkpt lat="51.201523" lon="3.051658">
        <ele>-1.019317</ele>
        <time>2026-03-14T13:21:07.569Z</time>
      </trkpt>
      <trkpt lat="51.201479" lon="3.052078">
        <ele>-1.018554</ele>
        <time>2026-03-14T13:21:13.515Z</time>
      </trkpt>
      <trkpt lat="51.201436" lon="3.052508">
        <ele>-1.017773</ele>
        <time>2026-03-14T13:21:19.518Z</time>
      </trkpt>
      <trkpt lat="51.201403" lon="3.052874">
        <ele>-1.017111</ele>
        <time>2026-03-14T13:21:24.584Z</time>
      </trkpt>
      <trkpt lat="51.201406" lon="3.053425">
        <ele>-1.016124</ele>
        <time>2026-03-14T13:21:32.039Z</time>
      </trkpt>
      <trkpt lat="51.201510" lon="3.054601">
        <ele>-0.963016</ele>
        <time>2026-03-14T13:21:48.692Z</time>
      </trkpt>
      <trkpt lat="51.201517" lon="3.056127">
        <ele>-0.676885</ele>
        <time>2026-03-14T13:22:11.639Z</time>
      </trkpt>
      <trkpt lat="51.201595" lon="3.057229">
        <ele>-0.480175</ele>
        <time>2026-03-14T13:22:28.061Z</time>
      </trkpt>
      <trkpt lat="51.201629" lon="3.058214">
        <ele>-0.579138</ele>
        <time>2026-03-14T13:22:41.820Z</time>
      </trkpt>
      <trkpt lat="51.201502" lon="3.059480">
        <ele>-0.707760</ele>
        <time>2026-03-14T13:22:58.860Z</time>
      </trkpt>
      <trkpt lat="51.201481" lon="3.060889">
        <ele>-0.827766</ele>
        <time>2026-03-14T13:23:17.317Z</time>
      </trkpt>
      <trkpt lat="51.201386" lon="3.062175">
        <ele>-0.924958</ele>
        <time>2026-03-14T13:23:34.893Z</time>
      </trkpt>
      <trkpt lat="51.201352" lon="3.062989">
        <ele>-0.972384</ele>
        <time>2026-03-14T13:23:46.647Z</time>
      </trkpt>
      <trkpt lat="51.201315" lon="3.064192">
        <ele>-0.870827</ele>
        <time>2026-03-14T13:24:04.353Z</time>
      </trkpt>
      <trkpt lat="51.201360" lon="3.065078">
        <ele>-0.795875</ele>
        <time>2026-03-14T13:24:17.107Z</time>
      </trkpt>
      <trkpt lat="51.201376" lon="3.065920">
        <ele>-0.744002</ele>
        <time>2026-03-14T13:24:28.704Z</time>
      </trkpt>
      <trkpt lat="51.201339" lon="3.068062">
        <ele>-0.833699</ele>
        <time>2026-03-14T13:24:57.718Z</time>
      </trkpt>
      <trkpt lat="51.201344" lon="3.068832">
        <ele>-0.854466</ele>
        <time>2026-03-14T13:25:08.685Z</time>
      </trkpt>
      <trkpt lat="51.201482" lon="3.070596">
        <ele>-0.823870</ele>
        <time>2026-03-14T13:25:34.187Z</time>
      </trkpt>
      <trkpt lat="51.201651" lon="3.073353">
        <ele>-0.865113</ele>
        <time>2026-03-14T13:26:11.704Z</time>
      </trkpt>
      <trkpt lat="51.201755" lon="3.074121">
        <ele>-0.888924</ele>
        <time>2026-03-14T13:26:22.595Z</time>
      </trkpt>
      <trkpt lat="51.202321" lon="3.076784">
        <ele>-0.375760</ele>
        <time>2026-03-14T13:27:04.027Z</time>
      </trkpt>
      <trkpt lat="51.202333" lon="3.076835">
        <ele>-0.364867</ele>
        <time>2026-03-14T13:27:04.850Z</time>
      </trkpt>
      <trkpt lat="51.202433" lon="3.077316">
        <ele>-0.257259</ele>
        <time>2026-03-14T13:27:12.501Z</time>
      </trkpt>
      <trkpt lat="51.202529" lon="3.077781">
        <ele>-0.148747</ele>
        <time>2026-03-14T13:27:19.869Z</time>
      </trkpt>
      <trkpt lat="51.202774" lon="3.079016">
        <ele>0.138364</ele>
        <time>2026-03-14T13:27:39.066Z</time>
      </trkpt>
      <trkpt lat="51.203072" lon="3.080449">
        <ele>0.477017</ele>
        <time>2026-03-14T13:28:01.018Z</time>
      </trkpt>
      <trkpt lat="51.203437" lon="3.081934">
        <ele>0.839537</ele>
        <time>2026-03-14T13:28:25.113Z</time>
      </trkpt>
      <trkpt lat="51.203547" lon="3.082574">
        <ele>0.963164</ele>
        <time>2026-03-14T13:28:35.139Z</time>
      </trkpt>
      <trkpt lat="51.203584" lon="3.083215">
        <ele>0.937363</ele>
        <time>2026-03-14T13:28:44.513Z</time>
      </trkpt>
      <trkpt lat="51.203542" lon="3.083693">
        <ele>0.918017</ele>
        <time>2026-03-14T13:28:51.341Z</time>
      </trkpt>
      <trkpt lat="51.203542" lon="3.083976">
        <ele>0.906674</ele>
        <time>2026-03-14T13:28:55.263Z</time>
      </trkpt>
      <trkpt lat="51.203486" lon="3.084591">
        <ele>0.881765</ele>
        <time>2026-03-14T13:29:03.642Z</time>
      </trkpt>
      <trkpt lat="51.202993" lon="3.088287">
        <ele>-0.009483</ele>
        <time>2026-03-14T13:29:54.489Z</time>
      </trkpt>
      <trkpt lat="51.202897" lon="3.089174">
        <ele>0.015737</ele>
        <time>2026-03-14T13:30:06.889Z</time>
      </trkpt>
      <trkpt lat="51.202890" lon="3.089835">
        <ele>0.034260</ele>
        <time>2026-03-14T13:30:16.245Z</time>
      </trkpt>
      <trkpt lat="51.202952" lon="3.091408">
        <ele>0.292563</ele>
        <time>2026-03-14T13:30:40.979Z</time>
      </trkpt>
      <trkpt lat="51.202954" lon="3.094223">
        <ele>1.495879</ele>
        <time>2026-03-14T13:31:29.175Z</time>
      </trkpt>
      <trkpt lat="51.202941" lon="3.096561">
        <ele>1.138275</ele>
        <time>2026-03-14T13:31:59.325Z</time>
      </trkpt>
      <trkpt lat="51.203022" lon="3.097274">
        <ele>0.905557</ele>
        <time>2026-03-14T13:32:08.158Z</time>
      </trkpt>
      <trkpt lat="51.203105" lon="3.097644">
        <ele>0.761875</ele>
        <time>2026-03-14T13:32:12.984Z</time>
      </trkpt>
      <trkpt lat="51.203919" lon="3.100057">
        <ele>0.011056</ele>
        <time>2026-03-14T13:32:48.324Z</time>
      </trkpt>
      <trkpt lat="51.204578" lon="3.101652">
        <ele>-0.113551</ele>
        <time>2026-03-14T13:33:15.346Z</time>
      </trkpt>
      <trkpt lat="51.204797" lon="3.102316">
        <ele>-0.173997</ele>
        <time>2026-03-14T13:33:25.878Z</time>
      </trkpt>
      <trkpt lat="51.204855" lon="3.102569">
        <ele>-0.196517</ele>
        <time>2026-03-14T13:33:29.584Z</time>
      </trkpt>
      <trkpt lat="51.205113" lon="3.104217">
        <ele>-0.338513</ele>
        <time>2026-03-14T13:33:52.402Z</time>
      </trkpt>
      <trkpt lat="51.205331" lon="3.105138">
        <ele>-0.416209</ele>
        <time>2026-03-14T13:34:05.541Z</time>
      </trkpt>
      <trkpt lat="51.205884" lon="3.107146">
        <ele>-0.580012</ele>
        <time>2026-03-14T13:34:35.583Z</time>
      </trkpt>
      <trkpt lat="51.205997" lon="3.107644">
        <ele>-0.529625</ele>
        <time>2026-03-14T13:34:42.976Z</time>
      </trkpt>
      <trkpt lat="51.206112" lon="3.108576">
        <ele>-0.439259</ele>
        <time>2026-03-14T13:34:56.439Z</time>
      </trkpt>
      <trkpt lat="51.206152" lon="3.109395">
        <ele>-0.361110</ele>
        <time>2026-03-14T13:35:08.397Z</time>
      </trkpt>
      <trkpt lat="51.206227" lon="3.110110">
        <ele>-0.285595</ele>
        <time>2026-03-14T13:35:19.195Z</time>
      </trkpt>
      <trkpt lat="51.206384" lon="3.110783">
        <ele>-0.191970</ele>
        <time>2026-03-14T13:35:29.882Z</time>
      </trkpt>
      <trkpt lat="51.206613" lon="3.111546">
        <ele>-0.081673</ele>
        <time>2026-03-14T13:35:42.214Z</time>
      </trkpt>
      <trkpt lat="51.206772" lon="3.112085">
        <ele>-0.004004</ele>
        <time>2026-03-14T13:35:50.739Z</time>
      </trkpt>
      <trkpt lat="51.206977" lon="3.112986">
        <ele>0.044187</ele>
        <time>2026-03-14T13:36:04.086Z</time>
      </trkpt>
      <trkpt lat="51.207691" lon="3.117140">
        <ele>-0.141022</ele>
        <time>2026-03-14T13:37:03.019Z</time>
      </trkpt>
      <trkpt lat="51.207950" lon="3.118517">
        <ele>-0.145798</ele>
        <time>2026-03-14T13:37:23.134Z</time>
      </trkpt>
      <trkpt lat="51.208058" lon="3.119437">
        <ele>-0.074311</ele>
        <time>2026-03-14T13:37:36.417Z</time>
      </trkpt>
      <trkpt lat="51.208322" lon="3.122617">
        <ele>0.273811</ele>
        <time>2026-03-14T13:38:22.496Z</time>
      </trkpt>
      <trkpt lat="51.208390" lon="3.123889">
        <ele>0.444756</ele>
        <time>2026-03-14T13:38:41.183Z</time>
      </trkpt>
      <trkpt lat="51.208396" lon="3.124956">
        <ele>0.557671</ele>
        <time>2026-03-14T13:38:56.781Z</time>
      </trkpt>
      <trkpt lat="51.208429" lon="3.125599">
        <ele>0.625942</ele>
        <time>2026-03-14T13:39:06.424Z</time>
      </trkpt>
      <trkpt lat="51.208461" lon="3.125773">
        <ele>0.645131</ele>
        <time>2026-03-14T13:39:09.107Z</time>
      </trkpt>
      <trkpt lat="51.208542" lon="3.126021">
        <ele>0.674727</ele>
        <time>2026-03-14T13:39:13.235Z</time>
      </trkpt>
      <trkpt lat="51.208624" lon="3.126427">
        <ele>0.719867</ele>
        <time>2026-03-14T13:39:19.224Z</time>
      </trkpt>
      <trkpt lat="51.208669" lon="3.126903">
        <ele>0.707981</ele>
        <time>2026-03-14T13:39:25.912Z</time>
      </trkpt>
      <trkpt lat="51.209296" lon="3.134518">
        <ele>0.033462</ele>
        <time>2026-03-14T13:41:10.214Z</time>
      </trkpt>
      <trkpt lat="51.209332" lon="3.135307">
        <ele>-0.026805</ele>
        <time>2026-03-14T13:41:20.986Z</time>
      </trkpt>
      <trkpt lat="51.209302" lon="3.135899">
        <ele>-0.046199</ele>
        <time>2026-03-14T13:41:29.143Z</time>
      </trkpt>
      <trkpt lat="51.209314" lon="3.136371">
        <ele>-0.061623</ele>
        <time>2026-03-14T13:41:35.656Z</time>
      </trkpt>
      <trkpt lat="51.209395" lon="3.136824">
        <ele>-0.077006</ele>
        <time>2026-03-14T13:41:42.165Z</time>
      </trkpt>
      <trkpt lat="51.209646" lon="3.137739">
        <ele>-0.109622</ele>
        <time>2026-03-14T13:41:56.011Z</time>
      </trkpt>
      <trkpt lat="51.210282" lon="3.140576">
        <ele>-0.220773</ele>
        <time>2026-03-14T13:42:37.495Z</time>
      </trkpt>
      <trkpt lat="51.210705" lon="3.142681">
        <ele>-0.351208</ele>
        <time>2026-03-14T13:43:07.726Z</time>
      </trkpt>
      <trkpt lat="51.210904" lon="3.143756">
        <ele>-0.388005</ele>
        <time>2026-03-14T13:43:23.221Z</time>
      </trkpt>
      <trkpt lat="51.211073" lon="3.144839">
        <ele>-0.381239</ele>
        <time>2026-03-14T13:43:38.708Z</time>
      </trkpt>
      <trkpt lat="51.211177" lon="3.145857">
        <ele>-0.374985</ele>
        <time>2026-03-14T13:43:53.029Z</time>
      </trkpt>
      <trkpt lat="51.211245" lon="3.146525">
        <ele>-0.326144</ele>
        <time>2026-03-14T13:44:02.499Z</time>
      </trkpt>
      <trkpt lat="51.211444" lon="3.149979">
        <ele>0.109456</ele>
        <time>2026-03-14T13:44:53.085Z</time>
      </trkpt>
      <trkpt lat="51.211528" lon="3.150908">
        <ele>0.248246</ele>
        <time>2026-03-14T13:45:07.006Z</time>
      </trkpt>
      <trkpt lat="51.212204" lon="3.154163">
        <ele>0.315649</ele>
        <time>2026-03-14T13:45:54.803Z</time>
      </trkpt>
      <trkpt lat="51.212412" lon="3.155306">
        <ele>0.210863</ele>
        <time>2026-03-14T13:46:10.650Z</time>
      </trkpt>
      <trkpt lat="51.212672" lon="3.157190">
        <ele>-0.011607</ele>
        <time>2026-03-14T13:46:36.736Z</time>
      </trkpt>
      <trkpt lat="51.212932" lon="3.158673">
        <ele>0.054861</ele>
        <time>2026-03-14T13:46:58.572Z</time>
      </trkpt>
      <trkpt lat="51.213256" lon="3.160272">
        <ele>0.132908</ele>
        <time>2026-03-14T13:47:22.532Z</time>
      </trkpt>
      <trkpt lat="51.213381" lon="3.160746">
        <ele>0.121608</ele>
        <time>2026-03-14T13:47:29.761Z</time>
      </trkpt>
      <trkpt lat="51.214458" lon="3.163675">
        <ele>0.065494</ele>
        <time>2026-03-14T13:48:16.311Z</time>
      </trkpt>
      <trkpt lat="51.214668" lon="3.164416">
        <ele>0.059529</ele>
        <time>2026-03-14T13:48:27.616Z</time>
      </trkpt>
      <trkpt lat="51.215420" lon="3.167406">
        <ele>0.184005</ele>
        <time>2026-03-14T13:49:13.179Z</time>
      </trkpt>
      <trkpt lat="51.215641" lon="3.168272">
        <ele>0.242335</ele>
        <time>2026-03-14T13:49:26.433Z</time>
      </trkpt>
      <trkpt lat="51.215809" lon="3.169065">
        <ele>0.301123</ele>
        <time>2026-03-14T13:49:38.289Z</time>
      </trkpt>
      <trkpt lat="51.216513" lon="3.173141">
        <ele>0.604370</ele>
        <time>2026-03-14T13:50:38.442Z</time>
      </trkpt>
      <trkpt lat="51.216665" lon="3.174318">
        <ele>0.677642</ele>
        <time>2026-03-14T13:50:55.640Z</time>
      </trkpt>
      <trkpt lat="51.216833" lon="3.176201">
        <ele>0.790163</ele>
        <time>2026-03-14T13:51:22.513Z</time>
      </trkpt>
      <trkpt lat="51.216854" lon="3.176816">
        <ele>0.834069</ele>
        <time>2026-03-14T13:51:31.151Z</time>
      </trkpt>
      <trkpt lat="51.216821" lon="3.178313">
        <ele>0.940851</ele>
        <time>2026-03-14T13:51:52.488Z</time>
      </trkpt>
      <trkpt lat="51.216844" lon="3.179035">
        <ele>0.991960</ele>
        <time>2026-03-14T13:52:02.939Z</time>
      </trkpt>
      <trkpt lat="51.216940" lon="3.180007">
        <ele>1.027488</ele>
        <time>2026-03-14T13:52:17.115Z</time>
      </trkpt>
      <trkpt lat="51.217089" lon="3.181095">
        <ele>1.067698</ele>
        <time>2026-03-14T13:52:32.708Z</time>
      </trkpt>
      <trkpt lat="51.217144" lon="3.181741">
        <ele>1.091236</ele>
        <time>2026-03-14T13:52:41.652Z</time>
      </trkpt>
      <trkpt lat="51.217146" lon="3.182595">
        <ele>1.113092</ele>
        <time>2026-03-14T13:52:53.208Z</time>
      </trkpt>
      <trkpt lat="51.217072" lon="3.186479">
        <ele>1.825491</ele>
        <time>2026-03-14T13:53:48.293Z</time>
      </trkpt>
      <trkpt lat="51.217084" lon="3.188072">
        <ele>2.323685</ele>
        <time>2026-03-14T13:54:16.328Z</time>
      </trkpt>
      <trkpt lat="51.217087" lon="3.188721">
        <ele>2.431382</ele>
        <time>2026-03-14T13:54:26.816Z</time>
      </trkpt>
      <trkpt lat="51.217141" lon="3.189223">
        <ele>2.515902</ele>
        <time>2026-03-14T13:54:34.383Z</time>
      </trkpt>
      <trkpt lat="51.217322" lon="3.190155">
        <ele>2.677819</ele>
        <time>2026-03-14T13:54:47.364Z</time>
      </trkpt>
      <trkpt lat="51.217396" lon="3.190485">
        <ele>2.676743</ele>
        <time>2026-03-14T13:54:51.558Z</time>
      </trkpt>
      <trkpt lat="51.217784" lon="3.192077">
        <ele>1.874641</ele>
        <time>2026-03-14T13:55:11.833Z</time>
      </trkpt>
      <trkpt lat="51.218073" lon="3.193424">
        <ele>1.456189</ele>
        <time>2026-03-14T13:55:30.384Z</time>
      </trkpt>
      <trkpt lat="51.218166" lon="3.194098">
        <ele>1.620052</ele>
        <time>2026-03-14T13:55:40.112Z</time>
      </trkpt>
      <trkpt lat="51.218181" lon="3.194564">
        <ele>1.730839</ele>
        <time>2026-03-14T13:55:46.983Z</time>
      </trkpt>
      <trkpt lat="51.218153" lon="3.195236">
        <ele>1.890742</ele>
        <time>2026-03-14T13:55:57.301Z</time>
      </trkpt>
      <trkpt lat="51.218067" lon="3.195875">
        <ele>2.045921</ele>
        <time>2026-03-14T13:56:07.899Z</time>
      </trkpt>
      <trkpt lat="51.217839" lon="3.197054">
        <ele>2.714739</ele>
        <time>2026-03-14T13:56:29.396Z</time>
      </trkpt>
      <trkpt lat="51.217616" lon="3.197970">
        <ele>3.255906</ele>
        <time>2026-03-14T13:56:45.598Z</time>
      </trkpt>
      <trkpt lat="51.217569" lon="3.198125">
        <ele>3.350735</ele>
        <time>2026-03-14T13:56:48.181Z</time>
      </trkpt>
      <trkpt lat="51.217524" lon="3.198267">
        <ele>3.438368</ele>
        <time>2026-03-14T13:56:50.543Z</time>
      </trkpt>
      <trkpt lat="51.217394" lon="3.198681">
        <ele>3.637730</ele>
        <time>2026-03-14T13:56:57.191Z</time>
      </trkpt>
      <trkpt lat="51.217028" lon="3.199850">
        <ele>3.668328</ele>
        <time>2026-03-14T13:57:15.675Z</time>
      </trkpt>
      <trkpt lat="51.216938" lon="3.200242">
        <ele>3.678103</ele>
        <time>2026-03-14T13:57:21.520Z</time>
      </trkpt>
      <trkpt lat="51.216895" lon="3.200611">
        <ele>3.686891</ele>
        <time>2026-03-14T13:57:26.421Z</time>
      </trkpt>
      <trkpt lat="51.216887" lon="3.200847">
        <ele>3.692424</ele>
        <time>2026-03-14T13:57:29.586Z</time>
      </trkpt>
      <trkpt lat="51.216913" lon="3.201229">
        <ele>3.701420</ele>
        <time>2026-03-14T13:57:34.807Z</time>
      </trkpt>
      <trkpt lat="51.216957" lon="3.201755">
        <ele>3.679800</ele>
        <time>2026-03-14T13:57:42.101Z</time>
      </trkpt>
      <trkpt lat="51.217022" lon="3.202234">
        <ele>3.656873</ele>
        <time>2026-03-14T13:57:49.011Z</time>
      </trkpt>
      <trkpt lat="51.217033" lon="3.202358">
        <ele>3.651015</ele>
        <time>2026-03-14T13:57:51.341Z</time>
      </trkpt>
      <trkpt lat="51.217037" lon="3.202444">
        <ele>3.646981</ele>
        <time>2026-03-14T13:57:53.010Z</time>
      </trkpt>
      <trkpt lat="51.217046" lon="3.202653">
        <ele>3.637181</ele>
        <time>2026-03-14T13:57:56.918Z</time>
      </trkpt>
      <trkpt lat="51.217052" lon="3.202774">
        <ele>3.631503</ele>
        <time>2026-03-14T13:57:59.104Z</time>
      </trkpt>
      <trkpt lat="51.217174" lon="3.203558">
        <ele>3.593714</ele>
        <time>2026-03-14T13:58:13.235Z</time>
      </trkpt>
      <trkpt lat="51.217328" lon="3.204590">
        <ele>3.614004</ele>
        <time>2026-03-14T13:58:32.573Z</time>
      </trkpt>
      <trkpt lat="51.217514" lon="3.205846">
        <ele>3.728955</ele>
        <time>2026-03-14T13:58:57.622Z</time>
      </trkpt>
      <trkpt lat="51.217525" lon="3.205919">
        <ele>3.735642</ele>
        <time>2026-03-14T13:58:59.045Z</time>
      </trkpt>
      <trkpt lat="51.217621" lon="3.206496">
        <ele>3.788815</ele>
        <time>2026-03-14T13:59:10.171Z</time>
      </trkpt>
      <trkpt lat="51.217937" lon="3.207467">
        <ele>3.798407</ele>
        <time>2026-03-14T13:59:29.883Z</time>
      </trkpt>
      <trkpt lat="51.218266" lon="3.208421">
        <ele>3.758716</ele>
        <time>2026-03-14T13:59:49.657Z</time>
      </trkpt>
      <trkpt lat="51.218516" lon="3.209045">
        <ele>3.731720</ele>
        <time>2026-03-14T14:00:03.172Z</time>
      </trkpt>
      <trkpt lat="51.218773" lon="3.209673">
        <ele>3.664519</ele>
        <time>2026-03-14T14:00:16.760Z</time>
      </trkpt>
      <trkpt lat="51.218799" lon="3.209740">
        <ele>3.653954</ele>
        <time>2026-03-14T14:00:17.859Z</time>
      </trkpt>
      <trkpt lat="51.218816" lon="3.209784">
        <ele>3.647024</ele>
        <time>2026-03-14T14:00:18.571Z</time>
      </trkpt>
      <trkpt lat="51.218860" lon="3.209874">
        <ele>3.631720</ele>
        <time>2026-03-14T14:00:20.147Z</time>
      </trkpt>
      <trkpt lat="51.218913" lon="3.209980">
        <ele>3.613540</ele>
        <time>2026-03-14T14:00:22.023Z</time>
      </trkpt>
      <trkpt lat="51.218930" lon="3.210016">
        <ele>3.607496</ele>
        <time>2026-03-14T14:00:22.623Z</time>
      </trkpt>
      <trkpt lat="51.218969" lon="3.210135">
        <ele>3.589494</ele>
        <time>2026-03-14T14:00:24.486Z</time>
      </trkpt>
      <trkpt lat="51.219127" lon="3.211393">
        <ele>3.417511</ele>
        <time>2026-03-14T14:00:41.614Z</time>
      </trkpt>
      <trkpt lat="51.219243" lon="3.211621">
        <ele>3.378137</ele>
        <time>2026-03-14T14:00:45.407Z</time>
      </trkpt>
      <trkpt lat="51.219385" lon="3.212882">
        <ele>3.306634</ele>
        <time>2026-03-14T14:01:02.283Z</time>
      </trkpt>
      <trkpt lat="51.219361" lon="3.213075">
        <ele>3.300923</ele>
        <time>2026-03-14T14:01:04.968Z</time>
      </trkpt>
      <trkpt lat="51.219417" lon="3.213647">
        <ele>3.284117</ele>
        <time>2026-03-14T14:01:12.999Z</time>
      </trkpt>
      <trkpt lat="51.219481" lon="3.214166">
        <ele>3.268762</ele>
        <time>2026-03-14T14:01:20.520Z</time>
      </trkpt>
      <trkpt lat="51.219598" lon="3.214819">
        <ele>3.267913</ele>
        <time>2026-03-14T14:01:30.442Z</time>
      </trkpt>
      <trkpt lat="51.219849" lon="3.215817">
        <ele>3.540983</ele>
        <time>2026-03-14T14:01:46.454Z</time>
      </trkpt>
      <trkpt lat="51.220154" lon="3.217023">
        <ele>3.871219</ele>
        <time>2026-03-14T14:02:05.993Z</time>
      </trkpt>
      <trkpt lat="51.220481" lon="3.218264">
        <ele>4.026699</ele>
        <time>2026-03-14T14:02:26.157Z</time>
      </trkpt>
      <trkpt lat="51.220543" lon="3.218417">
        <ele>4.035947</ele>
        <time>2026-03-14T14:02:28.818Z</time>
      </trkpt>
      <trkpt lat="51.220588" lon="3.218489">
        <ele>4.041110</ele>
        <time>2026-03-14T14:02:30.277Z</time>
      </trkpt>
      <trkpt lat="51.220830" lon="3.219200">
        <ele>4.082179</ele>
        <time>2026-03-14T14:02:41.705Z</time>
      </trkpt>
      <trkpt lat="51.220853" lon="3.219266">
        <ele>4.086012</ele>
        <time>2026-03-14T14:02:42.768Z</time>
      </trkpt>
      <trkpt lat="51.221628" lon="3.221401">
        <ele>3.978753</ele>
        <time>2026-03-14T14:03:15.219Z</time>
      </trkpt>
      <trkpt lat="51.221676" lon="3.221596">
        <ele>3.960425</ele>
        <time>2026-03-14T14:03:18.041Z</time>
      </trkpt>
      <trkpt lat="51.221568" lon="3.221625">
        <ele>3.945128</ele>
        <time>2026-03-14T14:03:20.481Z</time>
      </trkpt>
      <trkpt lat="51.221647" lon="3.222186">
        <ele>3.894828</ele>
        <time>2026-03-14T14:03:28.575Z</time>
      </trkpt>
      <trkpt lat="51.221483" lon="3.222691">
        <ele>3.972281</ele>
        <time>2026-03-14T14:03:36.924Z</time>
      </trkpt>
      <trkpt lat="51.221309" lon="3.223229">
        <ele>4.146930</ele>
        <time>2026-03-14T14:03:46.138Z</time>
      </trkpt>
      <trkpt lat="51.221288" lon="3.223413">
        <ele>4.200877</ele>
        <time>2026-03-14T14:03:49.008Z</time>
      </trkpt>
      <trkpt lat="51.221287" lon="3.223784">
        <ele>4.307889</ele>
        <time>2026-03-14T14:03:54.837Z</time>
      </trkpt>
      <trkpt lat="51.221300" lon="3.224538">
        <ele>4.525455</ele>
        <time>2026-03-14T14:04:06.623Z</time>
      </trkpt>
      <trkpt lat="51.221433" lon="3.225329">
        <ele>4.729947</ele>
        <time>2026-03-14T14:04:18.713Z</time>
      </trkpt>
      <trkpt lat="51.221411" lon="3.225479">
        <ele>4.750346</ele>
        <time>2026-03-14T14:04:21.011Z</time>
      </trkpt>
      <trkpt lat="51.221355" lon="3.225623">
        <ele>4.772790</ele>
        <time>2026-03-14T14:04:23.520Z</time>
      </trkpt>
      <trkpt lat="51.221358" lon="3.225688">
        <ele>4.781420</ele>
        <time>2026-03-14T14:04:24.485Z</time>
      </trkpt>
      <trkpt lat="51.221477" lon="3.226002">
        <ele>4.830016</ele>
        <time>2026-03-14T14:04:29.804Z</time>
      </trkpt>
      <trkpt lat="51.221476" lon="3.226085">
        <ele>4.841008</ele>
        <time>2026-03-14T14:04:31.044Z</time>
      </trkpt>
      <trkpt lat="51.221446" lon="3.226199">
        <ele>4.857381</ele>
        <time>2026-03-14T14:04:32.872Z</time>
      </trkpt>
      <trkpt lat="51.221428" lon="3.226247">
        <ele>4.864789</ele>
        <time>2026-03-14T14:04:33.713Z</time>
      </trkpt>
      <trkpt lat="51.221402" lon="3.226317">
        <ele>4.875565</ele>
        <time>2026-03-14T14:04:34.908Z</time>
      </trkpt>
      <trkpt lat="51.221285" lon="3.226672">
        <ele>4.928682</ele>
        <time>2026-03-14T14:04:40.794Z</time>
      </trkpt>
      <trkpt lat="51.221260" lon="3.226748">
        <ele>4.940048</ele>
        <time>2026-03-14T14:04:41.997Z</time>
      </trkpt>
      <trkpt lat="51.221231" lon="3.226823">
        <ele>4.951719</ele>
        <time>2026-03-14T14:04:43.238Z</time>
      </trkpt>
      <trkpt lat="51.221143" lon="3.226807">
        <ele>4.970444</ele>
        <time>2026-03-14T14:04:45.226Z</time>
      </trkpt>
      <trkpt lat="51.221100" lon="3.226916">
        <ele>4.987501</ele>
        <time>2026-03-14T14:04:47.245Z</time>
      </trkpt>
      <trkpt lat="51.221088" lon="3.227450">
        <ele>5.058254</ele>
        <time>2026-03-14T14:04:55.629Z</time>
      </trkpt>
      <trkpt lat="51.221024" lon="3.228004">
        <ele>5.088026</ele>
        <time>2026-03-14T14:05:04.842Z</time>
      </trkpt>
      <trkpt lat="51.220847" lon="3.229462">
        <ele>5.106907</ele>
        <time>2026-03-14T14:05:28.849Z</time>
      </trkpt>
      <trkpt lat="51.220772" lon="3.229538">
        <ele>5.108710</ele>
        <time>2026-03-14T14:05:31.019Z</time>
      </trkpt>
      <trkpt lat="51.220731" lon="3.229941">
        <ele>5.113900</ele>
        <time>2026-03-14T14:05:36.525Z</time>
      </trkpt>
      <trkpt lat="51.220726" lon="3.229994">
        <ele>5.114581</ele>
        <time>2026-03-14T14:05:37.235Z</time>
      </trkpt>
      <trkpt lat="51.220718" lon="3.230073">
        <ele>5.115599</ele>
        <time>2026-03-14T14:05:38.295Z</time>
      </trkpt>
      <trkpt lat="51.220669" lon="3.230481">
        <ele>5.088221</ele>
        <time>2026-03-14T14:05:43.645Z</time>
      </trkpt>
      <trkpt lat="51.220580" lon="3.230732">
        <ele>4.983601</ele>
        <time>2026-03-14T14:05:47.246Z</time>
      </trkpt>
      <trkpt lat="51.220495" lon="3.230902">
        <ele>4.904699</ele>
        <time>2026-03-14T14:05:49.976Z</time>
      </trkpt>
      <trkpt lat="51.220372" lon="3.231056">
        <ele>4.814177</ele>
        <time>2026-03-14T14:05:53.125Z</time>
      </trkpt>
      <trkpt lat="51.220337" lon="3.231093">
        <ele>4.789867</ele>
        <time>2026-03-14T14:05:53.963Z</time>
      </trkpt>
      <trkpt lat="51.220364" lon="3.231172">
        <ele>4.757223</ele>
        <time>2026-03-14T14:05:55.092Z</time>
      </trkpt>
      <trkpt lat="51.220447" lon="3.231415">
        <ele>4.656827</ele>
        <time>2026-03-14T14:05:58.558Z</time>
      </trkpt>
      <trkpt lat="51.220736" lon="3.232066">
        <ele>4.367397</ele>
        <time>2026-03-14T14:06:08.407Z</time>
      </trkpt>
      <trkpt lat="51.220747" lon="3.232097">
        <ele>4.354473</ele>
        <time>2026-03-14T14:06:08.842Z</time>
      </trkpt>
      <trkpt lat="51.220835" lon="3.232439">
        <ele>4.220363</ele>
        <time>2026-03-14T14:06:13.515Z</time>
      </trkpt>
      <trkpt lat="51.220882" lon="3.232555">
        <ele>4.170251</ele>
        <time>2026-03-14T14:06:15.270Z</time>
      </trkpt>
      <trkpt lat="51.221184" lon="3.232856">
        <ele>4.064677</ele>
        <time>2026-03-14T14:06:22.728Z</time>
      </trkpt>
      <trkpt lat="51.221149" lon="3.232938">
        <ele>4.060432</ele>
        <time>2026-03-14T14:06:24.098Z</time>
      </trkpt>
      <trkpt lat="51.220916" lon="3.233369">
        <ele>4.036071</ele>
        <time>2026-03-14T14:06:32.261Z</time>
      </trkpt>
      <trkpt lat="51.220838" lon="3.233512">
        <ele>4.027957</ele>
        <time>2026-03-14T14:06:35.113Z</time>
      </trkpt>
      <trkpt lat="51.220771" lon="3.233609">
        <ele>4.021779</ele>
        <time>2026-03-14T14:06:37.261Z</time>
      </trkpt>
      <trkpt lat="51.220700" lon="3.233658">
        <ele>4.016495</ele>
        <time>2026-03-14T14:06:39.232Z</time>
      </trkpt>
      <trkpt lat="51.220600" lon="3.233839">
        <ele>4.006168</ele>
        <time>2026-03-14T14:06:43.016Z</time>
      </trkpt>
      <trkpt lat="51.220400" lon="3.234186">
        <ele>3.985990</ele>
        <time>2026-03-14T14:06:50.381Z</time>
      </trkpt>
      <trkpt lat="51.219771" lon="3.234714">
        <ele>3.970918</ele>
        <time>2026-03-14T14:07:08.112Z</time>
      </trkpt>
      <trkpt lat="51.219463" lon="3.234999">
        <ele>3.992299</ele>
        <time>2026-03-14T14:07:17.015Z</time>
      </trkpt>
      <trkpt lat="51.219410" lon="3.235047">
        <ele>3.995959</ele>
        <time>2026-03-14T14:07:18.595Z</time>
      </trkpt>
      <trkpt lat="51.218444" lon="3.235999">
        <ele>4.067260</ele>
        <time>2026-03-14T14:07:46.578Z</time>
      </trkpt>
      <trkpt lat="51.218335" lon="3.236077">
        <ele>4.100586</ele>
        <time>2026-03-14T14:07:49.602Z</time>
      </trkpt>
      <trkpt lat="51.218098" lon="3.236273">
        <ele>4.175053</ele>
        <time>2026-03-14T14:07:56.541Z</time>
      </trkpt>
      <trkpt lat="51.217443" lon="3.236813">
        <ele>4.380724</ele>
        <time>2026-03-14T14:08:15.899Z</time>
      </trkpt>
      <trkpt lat="51.217154" lon="3.237041">
        <ele>4.470662</ele>
        <time>2026-03-14T14:08:24.438Z</time>
      </trkpt>
      <trkpt lat="51.215539" lon="3.238371">
        <ele>4.838711</ele>
        <time>2026-03-14T14:09:10.941Z</time>
      </trkpt>
      <trkpt lat="51.215294" lon="3.238467">
        <ele>4.885389</ele>
        <time>2026-03-14T14:09:17.062Z</time>
      </trkpt>
      <trkpt lat="51.215162" lon="3.238521">
        <ele>4.893299</ele>
        <time>2026-03-14T14:09:20.365Z</time>
      </trkpt>
      <trkpt lat="51.214191" lon="3.239115">
        <ele>4.823469</ele>
        <time>2026-03-14T14:09:46.471Z</time>
      </trkpt>
      <trkpt lat="51.214102" lon="3.239171">
        <ele>4.817045</ele>
        <time>2026-03-14T14:09:48.915Z</time>
      </trkpt>
      <trkpt lat="51.213243" lon="3.239690">
        <ele>4.638256</ele>
        <time>2026-03-14T14:10:10.603Z</time>
      </trkpt>
      <trkpt lat="51.213010" lon="3.239799">
        <ele>4.534177</ele>
        <time>2026-03-14T14:10:16.075Z</time>
      </trkpt>
      <trkpt lat="51.212628" lon="3.239886">
        <ele>4.368768</ele>
        <time>2026-03-14T14:10:24.677Z</time>
      </trkpt>
      <trkpt lat="51.212612" lon="3.239891">
        <ele>4.361779</ele>
        <time>2026-03-14T14:10:25.037Z</time>
      </trkpt>
      <trkpt lat="51.212525" lon="3.239936">
        <ele>4.322577</ele>
        <time>2026-03-14T14:10:27.088Z</time>
      </trkpt>
      <trkpt lat="51.212377" lon="3.240001">
        <ele>4.256777</ele>
        <time>2026-03-14T14:10:30.572Z</time>
      </trkpt>
      <trkpt lat="51.212370" lon="3.240061">
        <ele>4.240388</ele>
        <time>2026-03-14T14:10:31.430Z</time>
      </trkpt>
      <trkpt lat="51.212182" lon="3.240135">
        <ele>4.157385</ele>
        <time>2026-03-14T14:10:35.787Z</time>
      </trkpt>
      <trkpt lat="51.211971" lon="3.240311">
        <ele>4.055333</ele>
        <time>2026-03-14T14:10:41.448Z</time>
      </trkpt>
      <trkpt lat="51.211692" lon="3.240437">
        <ele>4.058084</ele>
        <time>2026-03-14T14:10:48.449Z</time>
      </trkpt>
      <trkpt lat="51.211726" lon="3.240698">
        <ele>4.107656</ele>
        <time>2026-03-14T14:10:52.185Z</time>
      </trkpt>
      <trkpt lat="51.211755" lon="3.240960">
        <ele>4.157130</ele>
        <time>2026-03-14T14:10:56.068Z</time>
      </trkpt>
      <trkpt lat="51.211763" lon="3.241029">
        <ele>4.170179</ele>
        <time>2026-03-14T14:10:57.079Z</time>
      </trkpt>
      <trkpt lat="51.211685" lon="3.241049">
        <ele>4.193629</ele>
        <time>2026-03-14T14:10:59.528Z</time>
      </trkpt>
      <trkpt lat="51.211662" lon="3.241135">
        <ele>4.211017</ele>
        <time>2026-03-14T14:11:00.963Z</time>
      </trkpt>
      <trkpt lat="51.211575" lon="3.241375">
        <ele>4.262579</ele>
        <time>2026-03-14T14:11:05.358Z</time>
      </trkpt>
      <trkpt lat="51.211539" lon="3.241469">
        <ele>4.283067</ele>
        <time>2026-03-14T14:11:07.129Z</time>
      </trkpt>
      <trkpt lat="51.211245" lon="3.241803">
        <ele>4.390182</ele>
        <time>2026-03-14T14:11:16.036Z</time>
      </trkpt>
      <trkpt lat="51.211193" lon="3.241852">
        <ele>4.408106</ele>
        <time>2026-03-14T14:11:17.544Z</time>
      </trkpt>
      <trkpt lat="51.211010" lon="3.242132">
        <ele>4.483352</ele>
        <time>2026-03-14T14:11:23.939Z</time>
      </trkpt>
      <trkpt lat="51.210857" lon="3.242554">
        <ele>4.552949</ele>
        <time>2026-03-14T14:11:31.463Z</time>
      </trkpt>
      <trkpt lat="51.210771" lon="3.242894">
        <ele>4.578886</ele>
        <time>2026-03-14T14:11:36.568Z</time>
      </trkpt>
      <trkpt lat="51.210654" lon="3.243796">
        <ele>4.644045</ele>
        <time>2026-03-14T14:11:49.207Z</time>
      </trkpt>
      <trkpt lat="51.210517" lon="3.244846">
        <ele>4.719914</ele>
        <time>2026-03-14T14:12:04.159Z</time>
      </trkpt>
      <trkpt lat="51.210479" lon="3.245133">
        <ele>4.740664</ele>
        <time>2026-03-14T14:12:08.282Z</time>
      </trkpt>
      <trkpt lat="51.210156" lon="3.247701">
        <ele>4.974024</ele>
        <time>2026-03-14T14:12:45.882Z</time>
      </trkpt>
      <trkpt lat="51.210112" lon="3.248048">
        <ele>4.996693</ele>
        <time>2026-03-14T14:12:50.984Z</time>
      </trkpt>
      <trkpt lat="51.210004" lon="3.248858">
        <ele>4.960906</ele>
        <time>2026-03-14T14:13:02.644Z</time>
      </trkpt>
      <trkpt lat="51.209833" lon="3.250227">
        <ele>4.900583</ele>
        <time>2026-03-14T14:13:21.617Z</time>
      </trkpt>
      <trkpt lat="51.209417" lon="3.253468">
        <ele>4.837492</ele>
        <time>2026-03-14T14:14:06.981Z</time>
      </trkpt>
      <trkpt lat="51.209426" lon="3.253660">
        <ele>4.844429</ele>
        <time>2026-03-14T14:14:09.809Z</time>
      </trkpt>
      <trkpt lat="51.209401" lon="3.253900">
        <ele>4.887468</ele>
        <time>2026-03-14T14:14:13.426Z</time>
      </trkpt>
      <trkpt lat="51.209325" lon="3.254518">
        <ele>4.998879</ele>
        <time>2026-03-14T14:14:22.879Z</time>
      </trkpt>
      <trkpt lat="51.208991" lon="3.257088">
        <ele>5.335328</ele>
        <time>2026-03-14T14:15:01.589Z</time>
      </trkpt>
      <trkpt lat="51.208698" lon="3.259392">
        <ele>5.294441</ele>
        <time>2026-03-14T14:15:33.394Z</time>
      </trkpt>
      <trkpt lat="51.208449" lon="3.261356">
        <ele>5.106584</ele>
        <time>2026-03-14T14:16:00.750Z</time>
      </trkpt>
      <trkpt lat="51.208290" lon="3.262603">
        <ele>4.977377</ele>
        <time>2026-03-14T14:16:18.033Z</time>
      </trkpt>
      <trkpt lat="51.207990" lon="3.264959">
        <ele>4.722301</ele>
        <time>2026-03-14T14:16:50.283Z</time>
      </trkpt>
      <trkpt lat="51.207901" lon="3.265610">
        <ele>4.736129</ele>
        <time>2026-03-14T14:16:59.210Z</time>
      </trkpt>
      <trkpt lat="51.207519" lon="3.267289">
        <ele>4.773202</ele>
        <time>2026-03-14T14:17:24.341Z</time>
      </trkpt>
      <trkpt lat="51.207477" lon="3.267381">
        <ele>4.775564</ele>
        <time>2026-03-14T14:17:25.979Z</time>
      </trkpt>
      <trkpt lat="51.207407" lon="3.267695">
        <ele>4.809598</ele>
        <time>2026-03-14T14:17:30.827Z</time>
      </trkpt>
      <trkpt lat="51.207353" lon="3.267968">
        <ele>4.877885</ele>
        <time>2026-03-14T14:17:35.075Z</time>
      </trkpt>
      <trkpt lat="51.207201" lon="3.268596">
        <ele>5.038472</ele>
        <time>2026-03-14T14:17:45.265Z</time>
      </trkpt>
      <trkpt lat="51.207178" lon="3.268719">
        <ele>5.069090</ele>
        <time>2026-03-14T14:17:47.241Z</time>
      </trkpt>
      <trkpt lat="51.207093" lon="3.269480">
        <ele>5.253474</ele>
        <time>2026-03-14T14:17:59.186Z</time>
      </trkpt>
      <trkpt lat="51.207088" lon="3.269907">
        <ele>5.355345</ele>
        <time>2026-03-14T14:18:05.600Z</time>
      </trkpt>
      <trkpt lat="51.207043" lon="3.271513">
        <ele>5.453713</ele>
        <time>2026-03-14T14:18:29.159Z</time>
      </trkpt>
      <trkpt lat="51.207077" lon="3.274789">
        <ele>5.220750</ele>
        <time>2026-03-14T14:19:12.938Z</time>
      </trkpt>
      <trkpt lat="51.207091" lon="3.276682">
        <ele>4.897634</ele>
        <time>2026-03-14T14:19:38.619Z</time>
      </trkpt>
      <trkpt lat="51.207118" lon="3.279790">
        <ele>4.244756</ele>
        <time>2026-03-14T14:20:18.738Z</time>
      </trkpt>
      <trkpt lat="51.207121" lon="3.280253">
        <ele>4.189651</ele>
        <time>2026-03-14T14:20:24.903Z</time>
      </trkpt>
      <trkpt lat="51.207133" lon="3.282048">
        <ele>4.000000</ele>
        <time>2026-03-14T14:20:49.761Z</time>
      </trkpt>
      <trkpt lat="51.207200" lon="3.286621">
        <ele>4.056073</ele>
        <time>2026-03-14T14:21:53.460Z</time>
      </trkpt>
      <trkpt lat="51.207217" lon="3.287202">
        <ele>4.073194</ele>
        <time>2026-03-14T14:22:01.734Z</time>
      </trkpt>
      <trkpt lat="51.207235" lon="3.287765">
        <ele>4.106335</ele>
        <time>2026-03-14T14:22:09.810Z</time>
      </trkpt>
      <trkpt lat="51.207264" lon="3.288670">
        <ele>4.216619</ele>
        <time>2026-03-14T14:22:22.994Z</time>
      </trkpt>
      <trkpt lat="51.207328" lon="3.290824">
        <ele>4.457271</ele>
        <time>2026-03-14T14:22:54.360Z</time>
      </trkpt>
      <trkpt lat="51.207330" lon="3.290896">
        <ele>4.461810</ele>
        <time>2026-03-14T14:22:55.362Z</time>
      </trkpt>
      <trkpt lat="51.207335" lon="3.291083">
        <ele>4.473598</ele>
        <time>2026-03-14T14:22:58.003Z</time>
      </trkpt>
      <trkpt lat="51.207352" lon="3.291953">
        <ele>4.528419</ele>
        <time>2026-03-14T14:23:10.214Z</time>
      </trkpt>
      <trkpt lat="51.207296" lon="3.292893">
        <ele>4.587889</ele>
        <time>2026-03-14T14:23:23.432Z</time>
      </trkpt>
      <trkpt lat="51.207191" lon="3.293834">
        <ele>4.630445</ele>
        <time>2026-03-14T14:23:36.942Z</time>
      </trkpt>
      <trkpt lat="51.207021" lon="3.294760">
        <ele>4.659088</ele>
        <time>2026-03-14T14:23:50.621Z</time>
      </trkpt>
      <trkpt lat="51.206338" lon="3.297984">
        <ele>4.851855</ele>
        <time>2026-03-14T14:24:38.217Z</time>
      </trkpt>
      <trkpt lat="51.206110" lon="3.299037">
        <ele>5.012712</ele>
        <time>2026-03-14T14:24:54.489Z</time>
      </trkpt>
      <trkpt lat="51.205504" lon="3.301858">
        <ele>6.021688</ele>
        <time>2026-03-14T14:25:40.841Z</time>
      </trkpt>
      <trkpt lat="51.205279" lon="3.302967">
        <ele>6.236001</ele>
        <time>2026-03-14T14:25:58.886Z</time>
      </trkpt>
      <trkpt lat="51.204970" lon="3.304435">
        <ele>6.473394</ele>
        <time>2026-03-14T14:26:20.193Z</time>
      </trkpt>
      <trkpt lat="51.204776" lon="3.305350">
        <ele>6.448134</ele>
        <time>2026-03-14T14:26:33.065Z</time>
      </trkpt>
      <trkpt lat="51.204596" lon="3.306202">
        <ele>6.424622</ele>
        <time>2026-03-14T14:26:45.309Z</time>
      </trkpt>
      <trkpt lat="51.204379" lon="3.307231">
        <ele>6.419378</ele>
        <time>2026-03-14T14:27:00.903Z</time>
      </trkpt>
      <trkpt lat="51.204187" lon="3.308114">
        <ele>6.465775</ele>
        <time>2026-03-14T14:27:14.721Z</time>
      </trkpt>
      <trkpt lat="51.203576" lon="3.311015">
        <ele>6.515034</ele>
        <time>2026-03-14T14:27:56.911Z</time>
      </trkpt>
      <trkpt lat="51.203452" lon="3.311146">
        <ele>6.509775</ele>
        <time>2026-03-14T14:28:00.370Z</time>
      </trkpt>
      <trkpt lat="51.203435" lon="3.311196">
        <ele>6.508514</ele>
        <time>2026-03-14T14:28:01.213Z</time>
      </trkpt>
      <trkpt lat="51.203463" lon="3.311535">
        <ele>6.500937</ele>
        <time>2026-03-14T14:28:06.209Z</time>
      </trkpt>
      <trkpt lat="51.202426" lon="3.316436">
        <ele>6.685206</ele>
        <time>2026-03-14T14:29:21.012Z</time>
      </trkpt>
      <trkpt lat="51.202380" lon="3.316654">
        <ele>6.724566</ele>
        <time>2026-03-14T14:29:24.576Z</time>
      </trkpt>
      <trkpt lat="51.201941" lon="3.318709">
        <ele>7.165984</ele>
        <time>2026-03-14T14:29:59.338Z</time>
      </trkpt>
      <trkpt lat="51.201925" lon="3.318963">
        <ele>7.227023</ele>
        <time>2026-03-14T14:30:03.365Z</time>
      </trkpt>
      <trkpt lat="51.201658" lon="3.320295">
        <ele>7.561413</ele>
        <time>2026-03-14T14:30:24.697Z</time>
      </trkpt>
      <trkpt lat="51.201539" lon="3.320918">
        <ele>7.610100</ele>
        <time>2026-03-14T14:30:34.268Z</time>
      </trkpt>
      <trkpt lat="51.201504" lon="3.321275">
        <ele>7.612902</ele>
        <time>2026-03-14T14:30:39.570Z</time>
      </trkpt>
      <trkpt lat="51.201495" lon="3.321697">
        <ele>7.616177</ele>
        <time>2026-03-14T14:30:45.738Z</time>
      </trkpt>
      <trkpt lat="51.201490" lon="3.322130">
        <ele>7.619536</ele>
        <time>2026-03-14T14:30:51.949Z</time>
      </trkpt>
      <trkpt lat="51.201439" lon="3.322263">
        <ele>7.620745</ele>
        <time>2026-03-14T14:30:54.175Z</time>
      </trkpt>
      <trkpt lat="51.201376" lon="3.323093">
        <ele>7.627229</ele>
        <time>2026-03-14T14:31:06.327Z</time>
      </trkpt>
      <trkpt lat="51.201292" lon="3.323759">
        <ele>7.561537</ele>
        <time>2026-03-14T14:31:16.152Z</time>
      </trkpt>
      <trkpt lat="51.201300" lon="3.324109">
        <ele>7.512493</ele>
        <time>2026-03-14T14:31:21.167Z</time>
      </trkpt>
      <trkpt lat="51.201330" lon="3.324188">
        <ele>7.499557</ele>
        <time>2026-03-14T14:31:22.508Z</time>
      </trkpt>
      <trkpt lat="51.201385" lon="3.325738">
        <ele>7.282159</ele>
        <time>2026-03-14T14:31:44.023Z</time>
      </trkpt>
      <trkpt lat="51.201507" lon="3.327320">
        <ele>6.993665</ele>
        <time>2026-03-14T14:32:06.077Z</time>
      </trkpt>
      <trkpt lat="51.201632" lon="3.329164">
        <ele>6.604982</ele>
        <time>2026-03-14T14:32:31.691Z</time>
      </trkpt>
      <trkpt lat="51.201670" lon="3.329429">
        <ele>6.510583</ele>
        <time>2026-03-14T14:32:35.362Z</time>
      </trkpt>
      <trkpt lat="51.201659" lon="3.329641">
        <ele>6.436716</ele>
        <time>2026-03-14T14:32:38.212Z</time>
      </trkpt>
      <trkpt lat="51.201673" lon="3.329702">
        <ele>6.414158</ele>
        <time>2026-03-14T14:32:39.089Z</time>
      </trkpt>
      <trkpt lat="51.201659" lon="3.329927">
        <ele>6.335644</ele>
        <time>2026-03-14T14:32:41.984Z</time>
      </trkpt>
      <trkpt lat="51.201721" lon="3.330951">
        <ele>5.978411</ele>
        <time>2026-03-14T14:32:54.979Z</time>
      </trkpt>
      <trkpt lat="51.201808" lon="3.332123">
        <ele>5.612974</ele>
        <time>2026-03-14T14:33:09.760Z</time>
      </trkpt>
      <trkpt lat="51.201869" lon="3.333027">
        <ele>5.433163</ele>
        <time>2026-03-14T14:33:21.665Z</time>
      </trkpt>
      <trkpt lat="51.201860" lon="3.333153">
        <ele>5.408083</ele>
        <time>2026-03-14T14:33:23.420Z</time>
      </trkpt>
      <trkpt lat="51.202070" lon="3.336273">
        <ele>5.224864</ele>
        <time>2026-03-14T14:34:07.792Z</time>
      </trkpt>
      <trkpt lat="51.202593" lon="3.344118">
        <ele>7.292575</ele>
        <time>2026-03-14T14:36:12.518Z</time>
      </trkpt>
      <trkpt lat="51.203410" lon="3.356471">
        <ele>8.735391</ele>
        <time>2026-03-14T14:39:17.401Z</time>
      </trkpt>
      <trkpt lat="51.203958" lon="3.364794">
        <ele>10.992995</ele>
        <time>2026-03-14T14:41:28.190Z</time>
      </trkpt>
      <trkpt lat="51.204069" lon="3.364794">
        <ele>11.043012</ele>
        <time>2026-03-14T14:41:30.853Z</time>
      </trkpt>
      <trkpt lat="51.204117" lon="3.364795">
        <ele>11.064643</ele>
        <time>2026-03-14T14:41:32.021Z</time>
      </trkpt>
      <trkpt lat="51.204542" lon="3.371042">
        <ele>12.345932</ele>
        <time>2026-03-14T14:43:09.654Z</time>
      </trkpt>
      <trkpt lat="51.205052" lon="3.378708">
        <ele>10.060490</ele>
        <time>2026-03-14T14:44:51.453Z</time>
      </trkpt>
      <trkpt lat="51.205122" lon="3.379779">
        <ele>9.965615</ele>
        <time>2026-03-14T14:45:08.022Z</time>
      </trkpt>
      <trkpt lat="51.205183" lon="3.380760">
        <ele>10.022994</ele>
        <time>2026-03-14T14:45:23.381Z</time>
      </trkpt>
      <trkpt lat="51.205213" lon="3.380972">
        <ele>10.051463</ele>
        <time>2026-03-14T14:45:26.846Z</time>
      </trkpt>
      <trkpt lat="51.205230" lon="3.381217">
        <ele>10.083752</ele>
        <time>2026-03-14T14:45:30.825Z</time>
      </trkpt>
      <trkpt lat="51.205294" lon="3.382204">
        <ele>10.213730</ele>
        <time>2026-03-14T14:45:46.651Z</time>
      </trkpt>
      <trkpt lat="51.205281" lon="3.382387">
        <ele>10.237854</ele>
        <time>2026-03-14T14:45:49.250Z</time>
      </trkpt>
      <trkpt lat="51.205339" lon="3.383084">
        <ele>10.291558</ele>
        <time>2026-03-14T14:45:58.565Z</time>
      </trkpt>
      <trkpt lat="51.205348" lon="3.383162">
        <ele>10.278689</ele>
        <time>2026-03-14T14:45:59.579Z</time>
      </trkpt>
      <trkpt lat="51.205447" lon="3.384608">
        <ele>10.042666</ele>
        <time>2026-03-14T14:46:19.153Z</time>
      </trkpt>
      <trkpt lat="51.206180" lon="3.395633">
        <ele>10.062968</ele>
        <time>2026-03-14T14:49:01.662Z</time>
      </trkpt>
      <trkpt lat="51.208130" lon="3.396333">
        <ele>9.616401</ele>
        <time>2026-03-14T14:50:13.657Z</time>
      </trkpt>
      <trkpt lat="51.208917" lon="3.396620">
        <ele>9.346686</ele>
        <time>2026-03-14T14:50:42.220Z</time>
      </trkpt>
      <trkpt lat="51.213005" lon="3.398099">
        <ele>8.369458</ele>
        <time>2026-03-14T14:53:13.210Z</time>
      </trkpt>
      <trkpt lat="51.212012" lon="3.403617">
        <ele>9.104364</ele>
        <time>2026-03-14T14:54:41.471Z</time>
      </trkpt>
      <trkpt lat="51.212210" lon="3.403818">
        <ele>9.076593</ele>
        <time>2026-03-14T14:54:46.871Z</time>
      </trkpt>
      <trkpt lat="51.212274" lon="3.403967">
        <ele>9.063199</ele>
        <time>2026-03-14T14:54:49.431Z</time>
      </trkpt>
      <trkpt lat="51.212224" lon="3.405021">
        <ele>8.984831</ele>
        <time>2026-03-14T14:55:03.779Z</time>
      </trkpt>
      <trkpt lat="51.212257" lon="3.405798">
        <ele>8.812511</ele>
        <time>2026-03-14T14:55:14.096Z</time>
      </trkpt>
      <trkpt lat="51.212339" lon="3.406604">
        <ele>8.554090</ele>
        <time>2026-03-14T14:55:24.915Z</time>
      </trkpt>
      <trkpt lat="51.212490" lon="3.407061">
        <ele>8.390576</ele>
        <time>2026-03-14T14:55:31.764Z</time>
      </trkpt>
      <trkpt lat="51.213006" lon="3.408404">
        <ele>7.986433</ele>
        <time>2026-03-14T14:55:53.311Z</time>
      </trkpt>
      <trkpt lat="51.215218" lon="3.414408">
        <ele>6.998099</ele>
        <time>2026-03-14T14:57:31.368Z</time>
      </trkpt>
      <trkpt lat="51.215778" lon="3.415881">
        <ele>6.607245</ele>
        <time>2026-03-14T14:57:54.869Z</time>
      </trkpt>
      <trkpt lat="51.215930" lon="3.415966">
        <ele>6.522301</ele>
        <time>2026-03-14T14:57:58.275Z</time>
      </trkpt>
      <trkpt lat="51.216208" lon="3.416162">
        <ele>6.362016</ele>
        <time>2026-03-14T14:58:04.623Z</time>
      </trkpt>
      <trkpt lat="51.216347" lon="3.416549">
        <ele>6.214637</ele>
        <time>2026-03-14T14:58:10.368Z</time>
      </trkpt>
      <trkpt lat="51.216787" lon="3.418346">
        <ele>5.925431</ele>
        <time>2026-03-14T14:58:36.523Z</time>
      </trkpt>
      <trkpt lat="51.217196" lon="3.420203">
        <ele>6.099827</ele>
        <time>2026-03-14T14:59:07.320Z</time>
      </trkpt>
      <trkpt lat="51.217257" lon="3.420668">
        <ele>6.082297</ele>
        <time>2026-03-14T14:59:14.674Z</time>
      </trkpt>
      <trkpt lat="51.217334" lon="3.421029">
        <ele>6.059685</ele>
        <time>2026-03-14T14:59:20.404Z</time>
      </trkpt>
      <trkpt lat="51.217586" lon="3.421930">
        <ele>6.001178</ele>
        <time>2026-03-14T14:59:34.556Z</time>
      </trkpt>
      <trkpt lat="51.217865" lon="3.423839">
        <ele>5.590335</ele>
        <time>2026-03-14T15:00:00.904Z</time>
      </trkpt>
      <trkpt lat="51.217969" lon="3.425013">
        <ele>5.113836</ele>
        <time>2026-03-14T15:00:15.984Z</time>
      </trkpt>
      <trkpt lat="51.217965" lon="3.426182">
        <ele>4.790149</ele>
        <time>2026-03-14T15:00:31.840Z</time>
      </trkpt>
      <trkpt lat="51.218007" lon="3.426712">
        <ele>4.802967</ele>
        <time>2026-03-14T15:00:39.629Z</time>
      </trkpt>
      <trkpt lat="51.218077" lon="3.427089">
        <ele>4.812402</ele>
        <time>2026-03-14T15:00:45.487Z</time>
      </trkpt>
      <trkpt lat="51.218224" lon="3.427604">
        <ele>4.825982</ele>
        <time>2026-03-14T15:00:54.023Z</time>
      </trkpt>
      <trkpt lat="51.218488" lon="3.428221">
        <ele>4.843911</ele>
        <time>2026-03-14T15:01:05.556Z</time>
      </trkpt>
      <trkpt lat="51.218922" lon="3.429109">
        <ele>4.715987</ele>
        <time>2026-03-14T15:01:21.922Z</time>
      </trkpt>
      <trkpt lat="51.219572" lon="3.430105">
        <ele>4.484684</ele>
        <time>2026-03-14T15:01:41.339Z</time>
      </trkpt>
      <trkpt lat="51.220469" lon="3.430608">
        <ele>4.130060</ele>
        <time>2026-03-14T15:02:02.253Z</time>
      </trkpt>
      <trkpt lat="51.220530" lon="3.430972">
        <ele>4.024349</ele>
        <time>2026-03-14T15:02:07.449Z</time>
      </trkpt>
      <trkpt lat="51.220580" lon="3.433084">
        <ele>3.478500</ele>
        <time>2026-03-14T15:02:35.721Z</time>
      </trkpt>
      <trkpt lat="51.220637" lon="3.434071">
        <ele>3.286588</ele>
        <time>2026-03-14T15:02:49.024Z</time>
      </trkpt>
      <trkpt lat="51.221483" lon="3.444985">
        <ele>2.631558</ele>
        <time>2026-03-14T15:05:26.143Z</time>
      </trkpt>
      <trkpt lat="51.221195" lon="3.445133">
        <ele>2.665451</ele>
        <time>2026-03-14T15:05:33.446Z</time>
      </trkpt>
      <trkpt lat="51.221245" lon="3.445188">
        <ele>2.672253</ele>
        <time>2026-03-14T15:05:34.921Z</time>
      </trkpt>
      <trkpt lat="51.221514" lon="3.445084">
        <ele>2.703259</ele>
        <time>2026-03-14T15:05:41.610Z</time>
      </trkpt>
      <trkpt lat="51.221882" lon="3.444939">
        <ele>2.745721</ele>
        <time>2026-03-14T15:05:50.778Z</time>
      </trkpt>
      <trkpt lat="51.222110" lon="3.444856">
        <ele>2.780510</ele>
        <time>2026-03-14T15:05:56.460Z</time>
      </trkpt>
      <trkpt lat="51.222169" lon="3.444818">
        <ele>2.792719</ele>
        <time>2026-03-14T15:05:58.388Z</time>
      </trkpt>
      <trkpt lat="51.222224" lon="3.444729">
        <ele>2.807746</ele>
        <time>2026-03-14T15:06:00.774Z</time>
      </trkpt>
      <trkpt lat="51.222669" lon="3.444536">
        <ele>2.896234</ele>
        <time>2026-03-14T15:06:11.924Z</time>
      </trkpt>
      <trkpt lat="51.222795" lon="3.444487">
        <ele>2.921119</ele>
        <time>2026-03-14T15:06:15.028Z</time>
      </trkpt>
      <trkpt lat="51.223335" lon="3.444903">
        <ele>3.036174</ele>
        <time>2026-03-14T15:06:29.147Z</time>
      </trkpt>
      <trkpt lat="51.223639" lon="3.445220">
        <ele>3.105896</ele>
        <time>2026-03-14T15:06:37.712Z</time>
      </trkpt>
      <trkpt lat="51.223987" lon="3.445690">
        <ele>3.198370</ele>
        <time>2026-03-14T15:06:48.633Z</time>
      </trkpt>
      <trkpt lat="51.224400" lon="3.446520">
        <ele>3.333067</ele>
        <time>2026-03-14T15:07:04.725Z</time>
      </trkpt>
      <trkpt lat="51.224485" lon="3.446613">
        <ele>3.353973</ele>
        <time>2026-03-14T15:07:07.219Z</time>
      </trkpt>
      <trkpt lat="51.224686" lon="3.446749">
        <ele>3.398263</ele>
        <time>2026-03-14T15:07:12.486Z</time>
      </trkpt>
      <trkpt lat="51.224725" lon="3.446885">
        <ele>3.417269</ele>
        <time>2026-03-14T15:07:14.748Z</time>
      </trkpt>
      <trkpt lat="51.225207" lon="3.446867">
        <ele>3.455881</ele>
        <time>2026-03-14T15:07:25.938Z</time>
      </trkpt>
      <trkpt lat="51.226945" lon="3.446816">
        <ele>3.281682</ele>
        <time>2026-03-14T15:08:04.030Z</time>
      </trkpt>
      <trkpt lat="51.227137" lon="3.446810">
        <ele>3.193333</ele>
        <time>2026-03-14T15:08:08.007Z</time>
      </trkpt>
      <trkpt lat="51.229946" lon="3.446728">
        <ele>1.917821</ele>
        <time>2026-03-14T15:09:05.498Z</time>
      </trkpt>
      <trkpt lat="51.230451" lon="3.446730">
        <ele>1.714246</ele>
        <time>2026-03-14T15:09:16.197Z</time>
      </trkpt>
      <trkpt lat="51.230469" lon="3.446871">
        <ele>1.702266</ele>
        <time>2026-03-14T15:09:18.226Z</time>
      </trkpt>
      <trkpt lat="51.230517" lon="3.446949">
        <ele>1.693161</ele>
        <time>2026-03-14T15:09:19.722Z</time>
      </trkpt>
      <trkpt lat="51.230593" lon="3.446991">
        <ele>1.682468</ele>
        <time>2026-03-14T15:09:21.535Z</time>
      </trkpt>
      <trkpt lat="51.232019" lon="3.447293">
        <ele>1.491215</ele>
        <time>2026-03-14T15:09:54.091Z</time>
      </trkpt>
      <trkpt lat="51.232893" lon="3.447431">
        <ele>1.594555</ele>
        <time>2026-03-14T15:10:14.946Z</time>
      </trkpt>
      <trkpt lat="51.233013" lon="3.447507">
        <ele>1.611688</ele>
        <time>2026-03-14T15:10:18.089Z</time>
      </trkpt>
      <trkpt lat="51.230891" lon="3.457872">
        <ele>2.640395</ele>
        <time>2026-03-14T15:12:53.852Z</time>
      </trkpt>
      <trkpt lat="51.230777" lon="3.458556">
        <ele>2.734017</ele>
        <time>2026-03-14T15:13:04.281Z</time>
      </trkpt>
      <trkpt lat="51.230282" lon="3.460917">
        <ele>2.953709</ele>
        <time>2026-03-14T15:13:40.634Z</time>
      </trkpt>
      <trkpt lat="51.229932" lon="3.462742">
        <ele>2.940945</ele>
        <time>2026-03-14T15:14:06.882Z</time>
      </trkpt>
      <trkpt lat="51.229693" lon="3.464223">
        <ele>2.509252</ele>
        <time>2026-03-14T15:14:26.482Z</time>
      </trkpt>
      <trkpt lat="51.229534" lon="3.465542">
        <ele>2.189053</ele>
        <time>2026-03-14T15:14:43.500Z</time>
      </trkpt>
      <trkpt lat="51.228504" lon="3.479164">
        <ele>0.957417</ele>
        <time>2026-03-14T15:17:50.591Z</time>
      </trkpt>
      <trkpt lat="51.228386" lon="3.480363">
        <ele>0.825912</ele>
        <time>2026-03-14T15:18:06.597Z</time>
      </trkpt>
      <trkpt lat="51.228133" lon="3.481864">
        <ele>0.646454</ele>
        <time>2026-03-14T15:18:27.535Z</time>
      </trkpt>
      <trkpt lat="51.228000" lon="3.482521">
        <ele>0.593331</ele>
        <time>2026-03-14T15:18:37.111Z</time>
      </trkpt>
      <trkpt lat="51.227813" lon="3.483294">
        <ele>0.585034</ele>
        <time>2026-03-14T15:18:48.686Z</time>
      </trkpt>
      <trkpt lat="51.227550" lon="3.484151">
        <ele>0.575478</ele>
        <time>2026-03-14T15:19:02.011Z</time>
      </trkpt>
      <trkpt lat="51.227306" lon="3.484868">
        <ele>0.567307</ele>
        <time>2026-03-14T15:19:13.304Z</time>
      </trkpt>
      <trkpt lat="51.226918" lon="3.485833">
        <ele>0.631777</ele>
        <time>2026-03-14T15:19:29.382Z</time>
      </trkpt>
      <trkpt lat="51.224847" lon="3.489959">
        <ele>0.958248</ele>
        <time>2026-03-14T15:20:44.707Z</time>
      </trkpt>
      <trkpt lat="51.223655" lon="3.492321">
        <ele>1.137083</ele>
        <time>2026-03-14T15:21:27.133Z</time>
      </trkpt>
      <trkpt lat="51.223055" lon="3.493444">
        <ele>1.357619</ele>
        <time>2026-03-14T15:21:48.881Z</time>
      </trkpt>
      <trkpt lat="51.223094" lon="3.493499">
        <ele>1.370032</ele>
        <time>2026-03-14T15:21:50.201Z</time>
      </trkpt>
      <trkpt lat="51.223371" lon="3.493856">
        <ele>1.442990</ele>
        <time>2026-03-14T15:21:58.826Z</time>
      </trkpt>
      <trkpt lat="51.223414" lon="3.493896">
        <ele>1.443874</ele>
        <time>2026-03-14T15:22:00.028Z</time>
      </trkpt>
      <trkpt lat="51.223387" lon="3.494598">
        <ele>1.451699</ele>
        <time>2026-03-14T15:22:10.383Z</time>
      </trkpt>
      <trkpt lat="51.223510" lon="3.494980">
        <ele>1.456478</ele>
        <time>2026-03-14T15:22:16.750Z</time>
      </trkpt>
      <trkpt lat="51.225088" lon="3.499150">
        <ele>0.800607</ele>
        <time>2026-03-14T15:23:21.908Z</time>
      </trkpt>
      <trkpt lat="51.225372" lon="3.499868">
        <ele>0.399971</ele>
        <time>2026-03-14T15:23:32.445Z</time>
      </trkpt>
      <trkpt lat="51.225602" lon="3.500248">
        <ele>0.150656</ele>
        <time>2026-03-14T15:23:38.864Z</time>
      </trkpt>
      <trkpt lat="51.226960" lon="3.501816">
        <ele>-0.669197</ele>
        <time>2026-03-14T15:24:11.777Z</time>
      </trkpt>
      <trkpt lat="51.229674" lon="3.505111">
        <ele>-0.018458</ele>
        <time>2026-03-14T15:25:32.457Z</time>
      </trkpt>
      <trkpt lat="51.229731" lon="3.505332">
        <ele>0.030749</ele>
        <time>2026-03-14T15:25:35.986Z</time>
      </trkpt>
      <trkpt lat="51.229731" lon="3.505470">
        <ele>0.059159</ele>
        <time>2026-03-14T15:25:38.029Z</time>
      </trkpt>
      <trkpt lat="51.229440" lon="3.507776">
        <ele>0.387582</ele>
        <time>2026-03-14T15:26:12.399Z</time>
      </trkpt>
      <trkpt lat="51.229411" lon="3.508211">
        <ele>0.419146</ele>
        <time>2026-03-14T15:26:18.657Z</time>
      </trkpt>
      <trkpt lat="51.229374" lon="3.513991">
        <ele>0.223901</ele>
        <time>2026-03-14T15:27:37.901Z</time>
      </trkpt>
      <trkpt lat="51.229358" lon="3.519635">
        <ele>-0.016316</ele>
        <time>2026-03-14T15:28:55.683Z</time>
      </trkpt>
      <trkpt lat="51.229258" lon="3.519679">
        <ele>-0.023942</ele>
        <time>2026-03-14T15:28:57.968Z</time>
      </trkpt>
      <trkpt lat="51.229188" lon="3.519805">
        <ele>-0.031697</ele>
        <time>2026-03-14T15:29:00.263Z</time>
      </trkpt>
      <trkpt lat="51.229120" lon="3.519864">
        <ele>-0.037387</ele>
        <time>2026-03-14T15:29:01.995Z</time>
      </trkpt>
      <trkpt lat="51.229130" lon="3.519952">
        <ele>-0.041505</ele>
        <time>2026-03-14T15:29:03.221Z</time>
      </trkpt>
      <trkpt lat="51.229142" lon="3.520023">
        <ele>-0.044891</ele>
        <time>2026-03-14T15:29:04.226Z</time>
      </trkpt>
      <trkpt lat="51.229272" lon="3.520144">
        <ele>-0.055955</ele>
        <time>2026-03-14T15:29:07.556Z</time>
      </trkpt>
      <trkpt lat="51.229312" lon="3.520375">
        <ele>-0.066990</ele>
        <time>2026-03-14T15:29:10.884Z</time>
      </trkpt>
      <trkpt lat="51.229349" lon="3.520374">
        <ele>-0.069710</ele>
        <time>2026-03-14T15:29:11.753Z</time>
      </trkpt>
      <trkpt lat="51.229317" lon="3.525752">
        <ele>0.488251</ele>
        <time>2026-03-14T15:30:32.827Z</time>
      </trkpt>
      <trkpt lat="51.229238" lon="3.526886">
        <ele>0.583528</ele>
        <time>2026-03-14T15:30:49.166Z</time>
      </trkpt>
      <trkpt lat="51.228966" lon="3.529775">
        <ele>0.787538</ele>
        <time>2026-03-14T15:31:32.817Z</time>
      </trkpt>
      <trkpt lat="51.228796" lon="3.531132">
        <ele>0.893492</ele>
        <time>2026-03-14T15:31:53.487Z</time>
      </trkpt>
      <trkpt lat="51.228629" lon="3.532192">
        <ele>0.960831</ele>
        <time>2026-03-14T15:32:09.184Z</time>
      </trkpt>
      <trkpt lat="51.228590" lon="3.532475">
        <ele>0.964378</ele>
        <time>2026-03-14T15:32:13.341Z</time>
      </trkpt>
      <trkpt lat="51.227057" lon="3.542061">
        <ele>1.031597</ele>
        <time>2026-03-14T15:34:37.593Z</time>
      </trkpt>
      <trkpt lat="51.225877" lon="3.549324">
        <ele>0.538711</ele>
        <time>2026-03-14T15:36:24.201Z</time>
      </trkpt>
      <trkpt lat="51.225843" lon="3.549529">
        <ele>0.531394</ele>
        <time>2026-03-14T15:36:27.214Z</time>
      </trkpt>
      <trkpt lat="51.224966" lon="3.554774">
        <ele>0.637639</ele>
        <time>2026-03-14T15:37:45.539Z</time>
      </trkpt>
      <trkpt lat="51.224594" lon="3.557158">
        <ele>1.266677</ele>
        <time>2026-03-14T15:38:25.512Z</time>
      </trkpt>
      <trkpt lat="51.221238" lon="3.578261">
        <ele>0.221700</ele>
        <time>2026-03-14T15:43:36.027Z</time>
      </trkpt>
      <trkpt lat="51.221085" lon="3.578455">
        <ele>0.222063</ele>
        <time>2026-03-14T15:43:40.913Z</time>
      </trkpt>
      <trkpt lat="51.221189" lon="3.578566">
        <ele>0.222296</ele>
        <time>2026-03-14T15:43:43.876Z</time>
      </trkpt>
      <trkpt lat="51.223655" lon="3.581269">
        <ele>0.557930</ele>
        <time>2026-03-14T15:44:51.519Z</time>
      </trkpt>
      <trkpt lat="51.223684" lon="3.581428">
        <ele>0.575158</ele>
        <time>2026-03-14T15:44:54.119Z</time>
      </trkpt>
      <trkpt lat="51.218654" lon="3.588101">
        <ele>1.659367</ele>
        <time>2026-03-14T15:47:29.279Z</time>
      </trkpt>
      <trkpt lat="51.218083" lon="3.588883">
        <ele>2.018937</ele>
        <time>2026-03-14T15:47:48.829Z</time>
      </trkpt>
      <trkpt lat="51.218046" lon="3.588964">
        <ele>2.048950</ele>
        <time>2026-03-14T15:47:50.464Z</time>
      </trkpt>
      <trkpt lat="51.218035" lon="3.589066">
        <ele>2.079936</ele>
        <time>2026-03-14T15:47:52.168Z</time>
      </trkpt>
      <trkpt lat="51.218055" lon="3.589360">
        <ele>2.168470</ele>
        <time>2026-03-14T15:47:56.958Z</time>
      </trkpt>
      <trkpt lat="51.218027" lon="3.589455">
        <ele>2.199902</ele>
        <time>2026-03-14T15:47:58.681Z</time>
      </trkpt>
      <trkpt lat="51.217923" lon="3.589608">
        <ele>2.267496</ele>
        <time>2026-03-14T15:48:02.355Z</time>
      </trkpt>
      <trkpt lat="51.215211" lon="3.591040">
        <ele>2.971216</ele>
        <time>2026-03-14T15:49:10.991Z</time>
      </trkpt>
      <trkpt lat="51.215270" lon="3.591438">
        <ele>3.016473</ele>
        <time>2026-03-14T15:49:17.105Z</time>
      </trkpt>
      <trkpt lat="51.215876" lon="3.593668">
        <ele>3.227999</ele>
        <time>2026-03-14T15:49:53.562Z</time>
      </trkpt>
      <trkpt lat="51.216067" lon="3.594441">
        <ele>3.284316</ele>
        <time>2026-03-14T15:50:05.725Z</time>
      </trkpt>
      <trkpt lat="51.216315" lon="3.595711">
        <ele>3.300347</ele>
        <time>2026-03-14T15:50:24.871Z</time>
      </trkpt>
      <trkpt lat="51.216921" lon="3.599608">
        <ele>3.118932</ele>
        <time>2026-03-14T15:51:22.442Z</time>
      </trkpt>
      <trkpt lat="51.217639" lon="3.603925">
        <ele>3.026207</ele>
        <time>2026-03-14T15:52:26.569Z</time>
      </trkpt>
      <trkpt lat="51.217661" lon="3.604040">
        <ele>3.029025</ele>
        <time>2026-03-14T15:52:28.308Z</time>
      </trkpt>
      <trkpt lat="51.217745" lon="3.604155">
        <ele>3.033165</ele>
        <time>2026-03-14T15:52:30.881Z</time>
      </trkpt>
      <trkpt lat="51.217789" lon="3.604400">
        <ele>3.039137</ele>
        <time>2026-03-14T15:52:34.427Z</time>
      </trkpt>
      <trkpt lat="51.217833" lon="3.604876">
        <ele>3.050413</ele>
        <time>2026-03-14T15:52:41.163Z</time>
      </trkpt>
      <trkpt lat="51.218131" lon="3.609776">
        <ele>3.345630</ele>
        <time>2026-03-14T15:53:50.964Z</time>
      </trkpt>
      <trkpt lat="51.218335" lon="3.613423">
        <ele>3.816855</ele>
        <time>2026-03-14T15:54:44.162Z</time>
      </trkpt>
      <trkpt lat="51.218498" lon="3.615869">
        <ele>4.028186</ele>
        <time>2026-03-14T15:55:19.765Z</time>
      </trkpt>
      <trkpt lat="51.218522" lon="3.616152">
        <ele>4.030435</ele>
        <time>2026-03-14T15:55:23.738Z</time>
      </trkpt>
      <trkpt lat="51.218634" lon="3.617126">
        <ele>4.038235</ele>
        <time>2026-03-14T15:55:37.859Z</time>
      </trkpt>
      <trkpt lat="51.218692" lon="3.617355">
        <ele>4.040180</ele>
        <time>2026-03-14T15:55:41.359Z</time>
      </trkpt>
      <trkpt lat="51.218629" lon="3.617444">
        <ele>4.041238</ele>
        <time>2026-03-14T15:55:43.187Z</time>
      </trkpt>
      <trkpt lat="51.218618" lon="3.617576">
        <ele>4.041200</ele>
        <time>2026-03-14T15:55:44.994Z</time>
      </trkpt>
      <trkpt lat="51.218668" lon="3.617697">
        <ele>4.018473</ele>
        <time>2026-03-14T15:55:46.963Z</time>
      </trkpt>
      <trkpt lat="51.218756" lon="3.617729">
        <ele>3.995882</ele>
        <time>2026-03-14T15:55:48.915Z</time>
      </trkpt>
      <trkpt lat="51.218917" lon="3.618563">
        <ele>3.859060</ele>
        <time>2026-03-14T15:56:00.733Z</time>
      </trkpt>
      <trkpt lat="51.219117" lon="3.619598">
        <ele>3.689248</ele>
        <time>2026-03-14T15:56:15.281Z</time>
      </trkpt>
      <trkpt lat="51.219136" lon="3.619717">
        <ele>3.669995</ele>
        <time>2026-03-14T15:56:16.875Z</time>
      </trkpt>
      <trkpt lat="51.219127" lon="3.619836">
        <ele>3.651203</ele>
        <time>2026-03-14T15:56:18.470Z</time>
      </trkpt>
      <trkpt lat="51.219179" lon="3.620022">
        <ele>3.619269</ele>
        <time>2026-03-14T15:56:21.115Z</time>
      </trkpt>
      <trkpt lat="51.219192" lon="3.620095">
        <ele>3.607371</ele>
        <time>2026-03-14T15:56:22.097Z</time>
      </trkpt>
      <trkpt lat="51.219235" lon="3.620325">
        <ele>3.548115</ele>
        <time>2026-03-14T15:56:25.191Z</time>
      </trkpt>
      <trkpt lat="51.219306" lon="3.620711">
        <ele>3.423836</ele>
        <time>2026-03-14T15:56:30.369Z</time>
      </trkpt>
      <trkpt lat="51.219367" lon="3.621298">
        <ele>3.240021</ele>
        <time>2026-03-14T15:56:37.915Z</time>
      </trkpt>
      <trkpt lat="51.219435" lon="3.622032">
        <ele>3.010807</ele>
        <time>2026-03-14T15:56:47.363Z</time>
      </trkpt>
      <trkpt lat="51.219517" lon="3.622442">
        <ele>2.877850</ele>
        <time>2026-03-14T15:56:52.959Z</time>
      </trkpt>
      <trkpt lat="51.219687" lon="3.623059">
        <ele>2.659378</ele>
        <time>2026-03-14T15:57:01.708Z</time>
      </trkpt>
      <trkpt lat="51.219762" lon="3.623303">
        <ele>2.551045</ele>
        <time>2026-03-14T15:57:05.251Z</time>
      </trkpt>
      <trkpt lat="51.220120" lon="3.624830">
        <ele>1.901173</ele>
        <time>2026-03-14T15:57:25.931Z</time>
      </trkpt>
      <trkpt lat="51.220303" lon="3.625329">
        <ele>1.670697</ele>
        <time>2026-03-14T15:57:33.047Z</time>
      </trkpt>
      <trkpt lat="51.219415" lon="3.626115">
        <ele>1.030828</ele>
        <time>2026-03-14T15:57:53.100Z</time>
      </trkpt>
      <trkpt lat="51.219215" lon="3.626292">
        <ele>0.887009</ele>
        <time>2026-03-14T15:57:57.886Z</time>
      </trkpt>
      <trkpt lat="51.221110" lon="3.631379">
        <ele>-0.230877</ele>
        <time>2026-03-14T15:59:15.279Z</time>
      </trkpt>
      <trkpt lat="51.222066" lon="3.633991">
        <ele>0.218318</ele>
        <time>2026-03-14T16:00:03.227Z</time>
      </trkpt>
      <trkpt lat="51.223095" lon="3.636826">
        <ele>-0.240892</ele>
        <time>2026-03-14T16:00:45.373Z</time>
      </trkpt>
      <trkpt lat="51.223408" lon="3.637605">
        <ele>-0.289550</ele>
        <time>2026-03-14T16:00:57.282Z</time>
      </trkpt>
      <trkpt lat="51.224978" lon="3.641048">
        <ele>0.288925</ele>
        <time>2026-03-14T16:02:00.944Z</time>
      </trkpt>
      <trkpt lat="51.225088" lon="3.641247">
        <ele>0.327735</ele>
        <time>2026-03-14T16:02:04.815Z</time>
      </trkpt>
      <trkpt lat="51.225108" lon="3.641327">
        <ele>0.340330</ele>
        <time>2026-03-14T16:02:06.070Z</time>
      </trkpt>
      <trkpt lat="51.225114" lon="3.641339">
        <ele>0.342575</ele>
        <time>2026-03-14T16:02:06.290Z</time>
      </trkpt>
      <trkpt lat="51.225149" lon="3.641387">
        <ele>0.353347</ele>
        <time>2026-03-14T16:02:07.362Z</time>
      </trkpt>
      <trkpt lat="51.226032" lon="3.643306">
        <ele>0.428813</ele>
        <time>2026-03-14T16:02:41.159Z</time>
      </trkpt>
      <trkpt lat="51.226356" lon="3.644067">
        <ele>0.426488</ele>
        <time>2026-03-14T16:02:54.770Z</time>
      </trkpt>
      <trkpt lat="51.226846" lon="3.645423">
        <ele>0.393952</ele>
        <time>2026-03-14T16:03:18.243Z</time>
      </trkpt>
      <trkpt lat="51.227319" lon="3.646963">
        <ele>0.334959</ele>
        <time>2026-03-14T16:03:42.047Z</time>
      </trkpt>
      <trkpt lat="51.227688" lon="3.648453">
        <ele>0.184541</ele>
        <time>2026-03-14T16:04:04.470Z</time>
      </trkpt>
      <trkpt lat="51.229385" lon="3.656511">
        <ele>0.098680</ele>
        <time>2026-03-14T16:06:07.319Z</time>
      </trkpt>
      <trkpt lat="51.229409" lon="3.656627">
        <ele>0.104026</ele>
        <time>2026-03-14T16:06:09.059Z</time>
      </trkpt>
      <trkpt lat="51.232613" lon="3.671655">
        <ele>2.352657</ele>
        <time>2026-03-14T16:09:59.523Z</time>
      </trkpt>
      <trkpt lat="51.233098" lon="3.673945">
        <ele>2.867158</ele>
        <time>2026-03-14T16:10:35.563Z</time>
      </trkpt>
      <trkpt lat="51.233667" lon="3.676047">
        <ele>3.181070</ele>
        <time>2026-03-14T16:11:08.902Z</time>
      </trkpt>
      <trkpt lat="51.233735" lon="3.676381">
        <ele>3.229213</ele>
        <time>2026-03-14T16:11:13.994Z</time>
      </trkpt>
      <trkpt lat="51.234221" lon="3.678025">
        <ele>2.918640</ele>
        <time>2026-03-14T16:11:38.761Z</time>
      </trkpt>
      <trkpt lat="51.234668" lon="3.679570">
        <ele>2.473767</ele>
        <time>2026-03-14T16:12:00.182Z</time>
      </trkpt>
      <trkpt lat="51.235111" lon="3.680833">
        <ele>1.874644</ele>
        <time>2026-03-14T16:12:18.093Z</time>
      </trkpt>
      <trkpt lat="51.235455" lon="3.681512">
        <ele>1.513173</ele>
        <time>2026-03-14T16:12:29.437Z</time>
      </trkpt>
      <trkpt lat="51.236164" lon="3.682577">
        <ele>1.115190</ele>
        <time>2026-03-14T16:12:49.824Z</time>
      </trkpt>
      <trkpt lat="51.237506" lon="3.684561">
        <ele>0.516419</ele>
        <time>2026-03-14T16:13:27.969Z</time>
      </trkpt>
      <trkpt lat="51.239271" lon="3.687265">
        <ele>0.141868</ele>
        <time>2026-03-14T16:14:20.988Z</time>
      </trkpt>
      <trkpt lat="51.242749" lon="3.692499">
        <ele>0.162461</ele>
        <time>2026-03-14T16:16:07.651Z</time>
      </trkpt>
      <trkpt lat="51.246190" lon="3.697698">
        <ele>-0.068492</ele>
        <time>2026-03-14T16:17:51.937Z</time>
      </trkpt>
      <trkpt lat="51.246456" lon="3.698263">
        <ele>-0.062820</ele>
        <time>2026-03-14T16:18:01.642Z</time>
      </trkpt>
      <trkpt lat="51.246776" lon="3.699237">
        <ele>-0.053994</ele>
        <time>2026-03-14T16:18:16.901Z</time>
      </trkpt>
      <trkpt lat="51.246868" lon="3.699728">
        <ele>-0.049882</ele>
        <time>2026-03-14T16:18:24.107Z</time>
      </trkpt>
      <trkpt lat="51.247235" lon="3.702562">
        <ele>0.262646</ele>
        <time>2026-03-14T16:19:05.981Z</time>
      </trkpt>
      <trkpt lat="51.247235" lon="3.702676">
        <ele>0.271011</ele>
        <time>2026-03-14T16:19:07.651Z</time>
      </trkpt>
      <trkpt lat="51.247200" lon="3.702985">
        <ele>0.294052</ele>
        <time>2026-03-14T16:19:12.220Z</time>
      </trkpt>
      <trkpt lat="51.247507" lon="3.707186">
        <ele>0.407942</ele>
        <time>2026-03-14T16:20:12.025Z</time>
      </trkpt>
      <trkpt lat="51.247535" lon="3.707356">
        <ele>0.401623</ele>
        <time>2026-03-14T16:20:14.398Z</time>
      </trkpt>
      <trkpt lat="51.247561" lon="3.707845">
        <ele>0.383982</ele>
        <time>2026-03-14T16:20:20.957Z</time>
      </trkpt>
      <trkpt lat="51.247560" lon="3.708656">
        <ele>0.301386</ele>
        <time>2026-03-14T16:20:32.190Z</time>
      </trkpt>
      <trkpt lat="51.247515" lon="3.709049">
        <ele>0.233796</ele>
        <time>2026-03-14T16:20:37.658Z</time>
      </trkpt>
      <trkpt lat="51.247434" lon="3.709489">
        <ele>0.156205</ele>
        <time>2026-03-14T16:20:43.888Z</time>
      </trkpt>
      <trkpt lat="51.247328" lon="3.709913">
        <ele>0.078965</ele>
        <time>2026-03-14T16:20:50.113Z</time>
      </trkpt>
      <trkpt lat="51.247202" lon="3.710284">
        <ele>0.007556</ele>
        <time>2026-03-14T16:20:55.950Z</time>
      </trkpt>
      <trkpt lat="51.247004" lon="3.710721">
        <ele>-0.083710</ele>
        <time>2026-03-14T16:21:03.513Z</time>
      </trkpt>
      <trkpt lat="51.246761" lon="3.711169">
        <ele>-0.110891</ele>
        <time>2026-03-14T16:21:11.900Z</time>
      </trkpt>
      <trkpt lat="51.245012" lon="3.713915">
        <ele>-0.019727</ele>
        <time>2026-03-14T16:22:09.329Z</time>
      </trkpt>
      <trkpt lat="51.241215" lon="3.719838">
        <ele>0.345578</ele>
        <time>2026-03-14T16:24:13.437Z</time>
      </trkpt>
      <trkpt lat="51.240627" lon="3.720701">
        <ele>0.517678</ele>
        <time>2026-03-14T16:24:33.219Z</time>
      </trkpt>
      <trkpt lat="51.240306" lon="3.721265">
        <ele>0.537474</ele>
        <time>2026-03-14T16:24:44.839Z</time>
      </trkpt>
      <trkpt lat="51.238835" lon="3.723943">
        <ele>0.382183</ele>
        <time>2026-03-14T16:25:34.974Z</time>
      </trkpt>
      <trkpt lat="51.238070" lon="3.725415">
        <ele>0.317213</ele>
        <time>2026-03-14T16:26:02.611Z</time>
      </trkpt>
      <trkpt lat="51.236885" lon="3.727597">
        <ele>0.445264</ele>
        <time>2026-03-14T16:26:45.070Z</time>
      </trkpt>
      <trkpt lat="51.236395" lon="3.728533">
        <ele>0.553833</ele>
        <time>2026-03-14T16:27:03.303Z</time>
      </trkpt>
      <trkpt lat="51.236331" lon="3.728714">
        <ele>0.572330</ele>
        <time>2026-03-14T16:27:06.420Z</time>
      </trkpt>
      <trkpt lat="51.236269" lon="3.728892">
        <ele>0.590456</ele>
        <time>2026-03-14T16:27:09.482Z</time>
      </trkpt>
      <trkpt lat="51.235221" lon="3.730852">
        <ele>0.730628</ele>
        <time>2026-03-14T16:27:47.616Z</time>
      </trkpt>
      <trkpt lat="51.233265" lon="3.734495">
        <ele>0.520902</ele>
        <time>2026-03-14T16:28:56.989Z</time>
      </trkpt>
      <trkpt lat="51.231291" lon="3.738090">
        <ele>-0.679583</ele>
        <time>2026-03-14T16:30:00.766Z</time>
      </trkpt>
      <trkpt lat="51.228367" lon="3.743432">
        <ele>0.035531</ele>
        <time>2026-03-14T16:31:46.948Z</time>
      </trkpt>
      <trkpt lat="51.226129" lon="3.747480">
        <ele>1.520359</ele>
        <time>2026-03-14T16:33:12.140Z</time>
      </trkpt>
      <trkpt lat="51.225993" lon="3.747682">
        <ele>1.579153</ele>
        <time>2026-03-14T16:33:16.753Z</time>
      </trkpt>
      <trkpt lat="51.225784" lon="3.748172">
        <ele>1.696677</ele>
        <time>2026-03-14T16:33:25.873Z</time>
      </trkpt>
      <trkpt lat="51.225632" lon="3.748603">
        <ele>1.794732</ele>
        <time>2026-03-14T16:33:33.380Z</time>
      </trkpt>
      <trkpt lat="51.225551" lon="3.748856">
        <ele>1.851060</ele>
        <time>2026-03-14T16:33:37.639Z</time>
      </trkpt>
      <trkpt lat="51.225426" lon="3.749349">
        <ele>1.956496</ele>
        <time>2026-03-14T16:33:45.524Z</time>
      </trkpt>
      <trkpt lat="51.225411" lon="3.749467">
        <ele>1.965396</ele>
        <time>2026-03-14T16:33:47.281Z</time>
      </trkpt>
      <trkpt lat="51.224781" lon="3.751418">
        <ele>2.036200</ele>
        <time>2026-03-14T16:34:19.576Z</time>
      </trkpt>
      <trkpt lat="51.224519" lon="3.752166">
        <ele>2.012161</ele>
        <time>2026-03-14T16:34:32.030Z</time>
      </trkpt>
      <trkpt lat="51.224385" lon="3.752551">
        <ele>1.942145</ele>
        <time>2026-03-14T16:34:38.259Z</time>
      </trkpt>
      <trkpt lat="51.224288" lon="3.752717">
        <ele>1.906056</ele>
        <time>2026-03-14T16:34:41.420Z</time>
      </trkpt>
      <trkpt lat="51.224055" lon="3.753302">
        <ele>1.795850</ele>
        <time>2026-03-14T16:34:50.991Z</time>
      </trkpt>
      <trkpt lat="51.223681" lon="3.754267">
        <ele>1.615454</ele>
        <time>2026-03-14T16:35:06.498Z</time>
      </trkpt>
      <trkpt lat="51.223168" lon="3.755540">
        <ele>1.594677</ele>
        <time>2026-03-14T16:35:27.464Z</time>
      </trkpt>
      <trkpt lat="51.219729" lon="3.764488">
        <ele>1.654256</ele>
        <time>2026-03-14T16:38:01.127Z</time>
      </trkpt>
      <trkpt lat="51.214929" lon="3.776885">
        <ele>1.117880</ele>
        <time>2026-03-14T16:41:30.415Z</time>
      </trkpt>
      <trkpt lat="51.212639" lon="3.782873">
        <ele>1.167083</ele>
        <time>2026-03-14T16:43:07.896Z</time>
      </trkpt>
      <trkpt lat="51.210564" lon="3.788276">
        <ele>2.338104</ele>
        <time>2026-03-14T16:44:41.908Z</time>
      </trkpt>
      <trkpt lat="51.208401" lon="3.793877">
        <ele>2.048557</ele>
        <time>2026-03-14T16:46:11.433Z</time>
      </trkpt>
      <trkpt lat="51.207897" lon="3.795152">
        <ele>2.236540</ele>
        <time>2026-03-14T16:46:33.548Z</time>
      </trkpt>
      <trkpt lat="51.207572" lon="3.794698">
        <ele>2.322499</ele>
        <time>2026-03-14T16:46:44.116Z</time>
      </trkpt>
      <trkpt lat="51.207186" lon="3.794300">
        <ele>2.408251</ele>
        <time>2026-03-14T16:46:55.291Z</time>
      </trkpt>
      <trkpt lat="51.207014" lon="3.794041">
        <ele>2.451243</ele>
        <time>2026-03-14T16:47:00.945Z</time>
      </trkpt>
      <trkpt lat="51.206838" lon="3.793746">
        <ele>2.497644</ele>
        <time>2026-03-14T16:47:07.047Z</time>
      </trkpt>
      <trkpt lat="51.206251" lon="3.792590">
        <ele>2.667141</ele>
        <time>2026-03-14T16:47:29.308Z</time>
      </trkpt>
      <trkpt lat="51.205335" lon="3.794108">
        <ele>2.782788</ele>
        <time>2026-03-14T16:47:59.132Z</time>
      </trkpt>
      <trkpt lat="51.205130" lon="3.794455">
        <ele>2.808009</ele>
        <time>2026-03-14T16:48:05.812Z</time>
      </trkpt>
      <trkpt lat="51.203506" lon="3.797162">
        <ele>3.107986</ele>
        <time>2026-03-14T16:48:58.818Z</time>
      </trkpt>
      <trkpt lat="51.203390" lon="3.797490">
        <ele>3.184670</ele>
        <time>2026-03-14T16:49:04.216Z</time>
      </trkpt>
      <trkpt lat="51.202029" lon="3.796261">
        <ele>3.728731</ele>
        <time>2026-03-14T16:49:41.360Z</time>
      </trkpt>
      <trkpt lat="51.201876" lon="3.796147">
        <ele>3.802085</ele>
        <time>2026-03-14T16:49:45.479Z</time>
      </trkpt>
      <trkpt lat="51.200484" lon="3.794923">
        <ele>4.442845</ele>
        <time>2026-03-14T16:50:23.804Z</time>
      </trkpt>
      <trkpt lat="51.200371" lon="3.794806">
        <ele>4.478104</ele>
        <time>2026-03-14T16:50:27.011Z</time>
      </trkpt>
      <trkpt lat="51.200388" lon="3.795273">
        <ele>4.554829</ele>
        <time>2026-03-14T16:50:34.012Z</time>
      </trkpt>
      <trkpt lat="51.200388" lon="3.795725">
        <ele>4.628965</ele>
        <time>2026-03-14T16:50:40.831Z</time>
      </trkpt>
      <trkpt lat="51.200427" lon="3.798982">
        <ele>4.301729</ele>
        <time>2026-03-14T16:51:26.747Z</time>
      </trkpt>
      <trkpt lat="51.200432" lon="3.799171">
        <ele>4.250485</ele>
        <time>2026-03-14T16:51:28.918Z</time>
      </trkpt>
      <trkpt lat="51.200451" lon="3.799486">
        <ele>4.164760</ele>
        <time>2026-03-14T16:51:32.572Z</time>
      </trkpt>
      <trkpt lat="51.200454" lon="3.799599">
        <ele>4.134122</ele>
        <time>2026-03-14T16:51:33.841Z</time>
      </trkpt>
      <trkpt lat="51.200459" lon="3.799751">
        <ele>4.092890</ele>
        <time>2026-03-14T16:51:35.623Z</time>
      </trkpt>
      <trkpt lat="51.200491" lon="3.800166">
        <ele>3.996372</ele>
        <time>2026-03-14T16:51:40.440Z</time>
      </trkpt>
      <trkpt lat="51.200525" lon="3.800300">
        <ele>3.965294</ele>
        <time>2026-03-14T16:51:42.073Z</time>
      </trkpt>
      <trkpt lat="51.200528" lon="3.800392">
        <ele>3.945490</ele>
        <time>2026-03-14T16:51:43.176Z</time>
      </trkpt>
      <trkpt lat="51.200545" lon="3.801570">
        <ele>3.692186</ele>
        <time>2026-03-14T16:51:57.041Z</time>
      </trkpt>
      <trkpt lat="51.200563" lon="3.802865">
        <ele>3.519216</ele>
        <time>2026-03-14T16:52:17.994Z</time>
      </trkpt>
      <trkpt lat="51.200571" lon="3.803069">
        <ele>3.629983</ele>
        <time>2026-03-14T16:52:21.665Z</time>
      </trkpt>
      <trkpt lat="51.200574" lon="3.803121">
        <ele>3.658281</ele>
        <time>2026-03-14T16:52:22.601Z</time>
      </trkpt>
      <trkpt lat="51.200551" lon="3.803319">
        <ele>3.767409</ele>
        <time>2026-03-14T16:52:26.225Z</time>
      </trkpt>
      <trkpt lat="51.200584" lon="3.803621">
        <ele>3.933537</ele>
        <time>2026-03-14T16:52:31.738Z</time>
      </trkpt>
      <trkpt lat="51.200699" lon="3.804220">
        <ele>4.273039</ele>
        <time>2026-03-14T16:52:42.997Z</time>
      </trkpt>
      <trkpt lat="51.200966" lon="3.805161">
        <ele>4.832825</ele>
        <time>2026-03-14T16:53:00.179Z</time>
      </trkpt>
      <trkpt lat="51.201019" lon="3.805341">
        <ele>4.940602</ele>
        <time>2026-03-14T16:53:03.133Z</time>
      </trkpt>
      <trkpt lat="51.201182" lon="3.805877">
        <ele>4.964214</ele>
        <time>2026-03-14T16:53:11.582Z</time>
      </trkpt>
      <trkpt lat="51.201229" lon="3.806033">
        <ele>4.951773</ele>
        <time>2026-03-14T16:53:13.958Z</time>
      </trkpt>
      <trkpt lat="51.201431" lon="3.806698">
        <ele>4.898657</ele>
        <time>2026-03-14T16:53:23.741Z</time>
      </trkpt>
      <trkpt lat="51.201741" lon="3.807706">
        <ele>4.817953</ele>
        <time>2026-03-14T16:53:38.906Z</time>
      </trkpt>
      <trkpt lat="51.201751" lon="3.807745">
        <ele>4.814924</ele>
        <time>2026-03-14T16:53:39.459Z</time>
      </trkpt>
      <trkpt lat="51.201765" lon="3.807794">
        <ele>4.811054</ele>
        <time>2026-03-14T16:53:40.177Z</time>
      </trkpt>
      <trkpt lat="51.201810" lon="3.807956">
        <ele>4.798317</ele>
        <time>2026-03-14T16:53:42.527Z</time>
      </trkpt>
      <trkpt lat="51.201996" lon="3.808604">
        <ele>4.861912</ele>
        <time>2026-03-14T16:53:52.264Z</time>
      </trkpt>
      <trkpt lat="51.202042" lon="3.808717">
        <ele>4.876481</ele>
        <time>2026-03-14T16:53:54.181Z</time>
      </trkpt>
      <trkpt lat="51.202317" lon="3.809653">
        <ele>4.988247</ele>
        <time>2026-03-14T16:54:09.399Z</time>
      </trkpt>
      <trkpt lat="51.202345" lon="3.809750">
        <ele>4.999793</ele>
        <time>2026-03-14T16:54:10.984Z</time>
      </trkpt>
      <trkpt lat="51.202238" lon="3.809811">
        <ele>5.019398</ele>
        <time>2026-03-14T16:54:13.614Z</time>
      </trkpt>
      <trkpt lat="51.202225" lon="3.809820">
        <ele>5.021843</ele>
        <time>2026-03-14T16:54:13.949Z</time>
      </trkpt>
      <trkpt lat="51.202134" lon="3.809919">
        <ele>5.040846</ele>
        <time>2026-03-14T16:54:16.478Z</time>
      </trkpt>
      <trkpt lat="51.202068" lon="3.809919">
        <ele>5.052234</ele>
        <time>2026-03-14T16:54:18.008Z</time>
      </trkpt>
      <trkpt lat="51.201427" lon="3.810358">
        <ele>5.173026</ele>
        <time>2026-03-14T16:54:34.302Z</time>
      </trkpt>
      <trkpt lat="51.201061" lon="3.810603">
        <ele>5.241939</ele>
        <time>2026-03-14T16:54:43.974Z</time>
      </trkpt>
      <trkpt lat="51.200328" lon="3.811167">
        <ele>5.383232</ele>
        <time>2026-03-14T16:55:02.489Z</time>
      </trkpt>
      <trkpt lat="51.200177" lon="3.811295">
        <ele>5.412919</ele>
        <time>2026-03-14T16:55:06.241Z</time>
      </trkpt>
      <trkpt lat="51.199905" lon="3.811505">
        <ele>5.356037</ele>
        <time>2026-03-14T16:55:12.695Z</time>
      </trkpt>
      <trkpt lat="51.199805" lon="3.811579">
        <ele>5.333144</ele>
        <time>2026-03-14T16:55:15.021Z</time>
      </trkpt>
      <trkpt lat="51.199042" lon="3.812198">
        <ele>5.155378</ele>
        <time>2026-03-14T16:55:33.083Z</time>
      </trkpt>
      <trkpt lat="51.199254" lon="3.812838">
        <ele>5.061167</ele>
        <time>2026-03-14T16:55:42.900Z</time>
      </trkpt>
      <trkpt lat="51.199456" lon="3.813478">
        <ele>4.982161</ele>
        <time>2026-03-14T16:55:52.574Z</time>
      </trkpt>
      <trkpt lat="51.199464" lon="3.813505">
        <ele>4.979021</ele>
        <time>2026-03-14T16:55:52.979Z</time>
      </trkpt>
      <trkpt lat="51.199544" lon="3.813817">
        <ele>4.943585</ele>
        <time>2026-03-14T16:55:57.487Z</time>
      </trkpt>
      <trkpt lat="51.200319" lon="3.815429">
        <ele>4.737805</ele>
        <time>2026-03-14T16:56:25.068Z</time>
      </trkpt>
      <trkpt lat="51.200443" lon="3.815694">
        <ele>4.729365</ele>
        <time>2026-03-14T16:56:29.596Z</time>
      </trkpt>
      <trkpt lat="51.200593" lon="3.816012">
        <ele>4.719208</ele>
        <time>2026-03-14T16:56:35.062Z</time>
      </trkpt>
      <trkpt lat="51.199585" lon="3.817644">
        <ele>4.663998</ele>
        <time>2026-03-14T16:57:06.860Z</time>
      </trkpt>
      <trkpt lat="51.199369" lon="3.817983">
        <ele>4.658033</ele>
        <time>2026-03-14T16:57:13.415Z</time>
      </trkpt>
      <trkpt lat="51.199326" lon="3.818047">
        <ele>4.656875</ele>
        <time>2026-03-14T16:57:14.695Z</time>
      </trkpt>
      <trkpt lat="51.198664" lon="3.819037">
        <ele>4.639013</ele>
        <time>2026-03-14T16:57:34.895Z</time>
      </trkpt>
      <trkpt lat="51.198576" lon="3.819170">
        <ele>4.636627</ele>
        <time>2026-03-14T16:57:37.616Z</time>
      </trkpt>
      <trkpt lat="51.198395" lon="3.819439">
        <ele>4.631757</ele>
        <time>2026-03-14T16:57:43.150Z</time>
      </trkpt>
      <trkpt lat="51.198257" lon="3.819626">
        <ele>4.659056</ele>
        <time>2026-03-14T16:57:47.243Z</time>
      </trkpt>
      <trkpt lat="51.197607" lon="3.820668">
        <ele>4.803218</ele>
        <time>2026-03-14T16:58:08.518Z</time>
      </trkpt>
      <trkpt lat="51.196751" lon="3.822156">
        <ele>4.984799</ele>
        <time>2026-03-14T16:58:37.443Z</time>
      </trkpt>
      <trkpt lat="51.196474" lon="3.822628">
        <ele>5.036360</ele>
        <time>2026-03-14T16:58:46.604Z</time>
      </trkpt>
      <trkpt lat="51.196396" lon="3.822691">
        <ele>5.047484</ele>
        <time>2026-03-14T16:58:48.572Z</time>
      </trkpt>
      <trkpt lat="51.196380" lon="3.822610">
        <ele>5.054256</ele>
        <time>2026-03-14T16:58:49.851Z</time>
      </trkpt>
      <trkpt lat="51.196311" lon="3.822531">
        <ele>5.065061</ele>
        <time>2026-03-14T16:58:51.857Z</time>
      </trkpt>
      <trkpt lat="51.196256" lon="3.822545">
        <ele>5.072147</ele>
        <time>2026-03-14T16:58:53.197Z</time>
      </trkpt>
      <trkpt lat="51.196191" lon="3.822578">
        <ele>5.080826</ele>
        <time>2026-03-14T16:58:54.848Z</time>
      </trkpt>
      <trkpt lat="51.196134" lon="3.822658">
        <ele>5.090485</ele>
        <time>2026-03-14T16:58:56.665Z</time>
      </trkpt>
      <trkpt lat="51.196120" lon="3.822759">
        <ele>5.098733</ele>
        <time>2026-03-14T16:58:58.210Z</time>
      </trkpt>
      <trkpt lat="51.196160" lon="3.822955">
        <ele>5.115169</ele>
        <time>2026-03-14T16:59:01.275Z</time>
      </trkpt>
      <trkpt lat="51.196136" lon="3.823062">
        <ele>5.124230</ele>
        <time>2026-03-14T16:59:02.932Z</time>
      </trkpt>
      <trkpt lat="51.196180" lon="3.823095">
        <ele>5.130416</ele>
        <time>2026-03-14T16:59:04.080Z</time>
      </trkpt>
      <trkpt lat="51.196134" lon="3.823221">
        <ele>5.141859</ele>
        <time>2026-03-14T16:59:06.116Z</time>
      </trkpt>
      <trkpt lat="51.196078" lon="3.823391">
        <ele>5.130751</ele>
        <time>2026-03-14T16:59:08.779Z</time>
      </trkpt>
      <trkpt lat="51.195798" lon="3.824117">
        <ele>5.081445</ele>
        <time>2026-03-14T16:59:20.416Z</time>
      </trkpt>
      <trkpt lat="51.195515" lon="3.824816">
        <ele>5.033311</ele>
        <time>2026-03-14T16:59:31.804Z</time>
      </trkpt>
      <trkpt lat="51.195455" lon="3.825046">
        <ele>5.018902</ele>
        <time>2026-03-14T16:59:35.204Z</time>
      </trkpt>
      <trkpt lat="51.195325" lon="3.825608">
        <ele>4.984252</ele>
        <time>2026-03-14T16:59:43.330Z</time>
      </trkpt>
      <trkpt lat="51.195236" lon="3.826072">
        <ele>5.003327</ele>
        <time>2026-03-14T16:59:49.855Z</time>
      </trkpt>
      <trkpt lat="51.195155" lon="3.826349">
        <ele>5.027864</ele>
        <time>2026-03-14T16:59:54.013Z</time>
      </trkpt>
      <trkpt lat="51.194979" lon="3.826752">
        <ele>5.067296</ele>
        <time>2026-03-14T17:00:00.800Z</time>
      </trkpt>
      <trkpt lat="51.193210" lon="3.829526">
        <ele>5.496681</ele>
        <time>2026-03-14T17:00:58.713Z</time>
      </trkpt>
      <trkpt lat="51.193022" lon="3.829707">
        <ele>5.542386</ele>
        <time>2026-03-14T17:01:04.023Z</time>
      </trkpt>
      <trkpt lat="51.192648" lon="3.829916">
        <ele>5.559350</ele>
        <time>2026-03-14T17:01:13.319Z</time>
      </trkpt>
      <trkpt lat="51.191921" lon="3.830265">
        <ele>5.482783</ele>
        <time>2026-03-14T17:01:31.717Z</time>
      </trkpt>
      <trkpt lat="51.191434" lon="3.830501">
        <ele>5.431453</ele>
        <time>2026-03-14T17:01:43.619Z</time>
      </trkpt>
      <trkpt lat="51.190614" lon="3.830870">
        <ele>5.441141</ele>
        <time>2026-03-14T17:02:02.925Z</time>
      </trkpt>
      <trkpt lat="51.188074" lon="3.831975">
        <ele>5.891747</ele>
        <time>2026-03-14T17:03:03.787Z</time>
      </trkpt>
      <trkpt lat="51.187933" lon="3.831989">
        <ele>5.928054</ele>
        <time>2026-03-14T17:03:07.124Z</time>
      </trkpt>
      <trkpt lat="51.187795" lon="3.831937">
        <ele>5.964496</ele>
        <time>2026-03-14T17:03:10.461Z</time>
      </trkpt>
      <trkpt lat="51.187849" lon="3.832194">
        <ele>6.012034</ele>
        <time>2026-03-14T17:03:14.647Z</time>
      </trkpt>
      <trkpt lat="51.187950" lon="3.832642">
        <ele>6.141428</ele>
        <time>2026-03-14T17:03:22.049Z</time>
      </trkpt>
      <trkpt lat="51.187955" lon="3.832821">
        <ele>6.190125</ele>
        <time>2026-03-14T17:03:24.854Z</time>
      </trkpt>
      <trkpt lat="51.187777" lon="3.833186">
        <ele>6.315815</ele>
        <time>2026-03-14T17:03:32.135Z</time>
      </trkpt>
      <trkpt lat="51.187532" lon="3.833398">
        <ele>6.436670</ele>
        <time>2026-03-14T17:03:39.176Z</time>
      </trkpt>
      <trkpt lat="51.187461" lon="3.833502">
        <ele>6.478465</ele>
        <time>2026-03-14T17:03:41.613Z</time>
      </trkpt>
      <trkpt lat="51.187105" lon="3.834734">
        <ele>6.813102</ele>
        <time>2026-03-14T17:04:02.874Z</time>
      </trkpt>
      <trkpt lat="51.187014" lon="3.834951">
        <ele>6.846710</ele>
        <time>2026-03-14T17:04:06.852Z</time>
      </trkpt>
      <trkpt lat="51.187036" lon="3.835103">
        <ele>6.866791</ele>
        <time>2026-03-14T17:04:09.231Z</time>
      </trkpt>
      <trkpt lat="51.186894" lon="3.835156">
        <ele>6.896741</ele>
        <time>2026-03-14T17:04:12.591Z</time>
      </trkpt>
      <trkpt lat="51.186770" lon="3.835152">
        <ele>6.922212</ele>
        <time>2026-03-14T17:04:15.441Z</time>
      </trkpt>
      <trkpt lat="51.186749" lon="3.834992">
        <ele>6.943254</ele>
        <time>2026-03-14T17:04:17.791Z</time>
      </trkpt>
      <trkpt lat="51.186704" lon="3.835012">
        <ele>6.952848</ele>
        <time>2026-03-14T17:04:18.914Z</time>
      </trkpt>
      <trkpt lat="51.186531" lon="3.835250">
        <ele>6.999761</ele>
        <time>2026-03-14T17:04:24.338Z</time>
      </trkpt>
      <trkpt lat="51.186404" lon="3.835353">
        <ele>7.029020</ele>
        <time>2026-03-14T17:04:27.687Z</time>
      </trkpt>
      <trkpt lat="51.186350" lon="3.835458">
        <ele>7.046503</ele>
        <time>2026-03-14T17:04:29.671Z</time>
      </trkpt>
      <trkpt lat="51.183472" lon="3.836966">
        <ele>7.411732</ele>
        <time>2026-03-14T17:05:38.059Z</time>
      </trkpt>
      <trkpt lat="51.183165" lon="3.837131">
        <ele>7.449520</ele>
        <time>2026-03-14T17:05:45.533Z</time>
      </trkpt>
      <trkpt lat="51.181588" lon="3.837958">
        <ele>7.467922</ele>
        <time>2026-03-14T17:06:23.488Z</time>
      </trkpt>
      <trkpt lat="51.180504" lon="3.838528">
        <ele>7.307984</ele>
        <time>2026-03-14T17:06:47.665Z</time>
      </trkpt>
      <trkpt lat="51.180500" lon="3.838849">
        <ele>7.233776</ele>
        <time>2026-03-14T17:06:51.883Z</time>
      </trkpt>
      <trkpt lat="51.180442" lon="3.839464">
        <ele>7.090032</ele>
        <time>2026-03-14T17:07:00.036Z</time>
      </trkpt>
      <trkpt lat="51.180342" lon="3.840104">
        <ele>6.937582</ele>
        <time>2026-03-14T17:07:08.588Z</time>
      </trkpt>
      <trkpt lat="51.180290" lon="3.840343">
        <ele>6.879109</ele>
        <time>2026-03-14T17:07:11.850Z</time>
      </trkpt>
      <trkpt lat="51.180069" lon="3.841105">
        <ele>6.668019</ele>
        <time>2026-03-14T17:07:22.860Z</time>
      </trkpt>
      <trkpt lat="51.179806" lon="3.841780">
        <ele>6.422225</ele>
        <time>2026-03-14T17:07:33.305Z</time>
      </trkpt>
      <trkpt lat="51.179236" lon="3.843043">
        <ele>5.940919</ele>
        <time>2026-03-14T17:07:54.118Z</time>
      </trkpt>
      <trkpt lat="51.179077" lon="3.843453">
        <ele>5.798566</ele>
        <time>2026-03-14T17:08:00.507Z</time>
      </trkpt>
      <trkpt lat="51.178876" lon="3.843991">
        <ele>5.628112</ele>
        <time>2026-03-14T17:08:08.478Z</time>
      </trkpt>
      <trkpt lat="51.178558" lon="3.844793">
        <ele>5.369841</ele>
        <time>2026-03-14T17:08:20.582Z</time>
      </trkpt>
      <trkpt lat="51.177580" lon="3.847659">
        <ele>4.711667</ele>
        <time>2026-03-14T17:09:04.634Z</time>
      </trkpt>
      <trkpt lat="51.177117" lon="3.849348">
        <ele>4.341736</ele>
        <time>2026-03-14T17:09:28.663Z</time>
      </trkpt>
      <trkpt lat="51.176901" lon="3.850242">
        <ele>4.127831</ele>
        <time>2026-03-14T17:09:41.142Z</time>
      </trkpt>
      <trkpt lat="51.176877" lon="3.850342">
        <ele>4.103925</ele>
        <time>2026-03-14T17:09:42.570Z</time>
      </trkpt>
      <trkpt lat="51.176815" lon="3.850601">
        <ele>4.042029</ele>
        <time>2026-03-14T17:09:46.278Z</time>
      </trkpt>
      <trkpt lat="51.176792" lon="3.850699">
        <ele>4.018666</ele>
        <time>2026-03-14T17:09:47.672Z</time>
      </trkpt>
      <trkpt lat="51.176454" lon="3.852274">
        <ele>3.757509</ele>
        <time>2026-03-14T17:10:09.798Z</time>
      </trkpt>
      <trkpt lat="51.176275" lon="3.853227">
        <ele>3.615753</ele>
        <time>2026-03-14T17:10:23.168Z</time>
      </trkpt>
      <trkpt lat="51.176020" lon="3.854732">
        <ele>3.685328</ele>
        <time>2026-03-14T17:10:44.427Z</time>
      </trkpt>
      <trkpt lat="51.175878" lon="3.855777">
        <ele>3.829182</ele>
        <time>2026-03-14T17:11:00.554Z</time>
      </trkpt>
      <trkpt lat="51.175706" lon="3.857191">
        <ele>3.967576</ele>
        <time>2026-03-14T17:11:22.009Z</time>
      </trkpt>
      <trkpt lat="51.175596" lon="3.858419">
        <ele>4.035421</ele>
        <time>2026-03-14T17:11:39.758Z</time>
      </trkpt>
      <trkpt lat="51.175489" lon="3.859994">
        <ele>4.108945</ele>
        <time>2026-03-14T17:12:00.934Z</time>
      </trkpt>
      <trkpt lat="51.175423" lon="3.861582">
        <ele>4.163834</ele>
        <time>2026-03-14T17:12:23.403Z</time>
      </trkpt>
      <trkpt lat="51.175421" lon="3.863980">
        <ele>4.315705</ele>
        <time>2026-03-14T17:12:59.079Z</time>
      </trkpt>
      <trkpt lat="51.175483" lon="3.869613">
        <ele>3.918256</ele>
        <time>2026-03-14T17:14:13.977Z</time>
      </trkpt>
      <trkpt lat="51.175511" lon="3.871704">
        <ele>3.975643</ele>
        <time>2026-03-14T17:14:45.794Z</time>
      </trkpt>
      <trkpt lat="51.175578" lon="3.878418">
        <ele>4.166315</ele>
        <time>2026-03-14T17:16:19.286Z</time>
      </trkpt>
      <trkpt lat="51.175579" lon="3.878443">
        <ele>4.165863</ele>
        <time>2026-03-14T17:16:19.638Z</time>
      </trkpt>
      <trkpt lat="51.175579" lon="3.878493">
        <ele>4.164960</ele>
        <time>2026-03-14T17:16:20.349Z</time>
      </trkpt>
      <trkpt lat="51.175660" lon="3.886005">
        <ele>3.875932</ele>
        <time>2026-03-14T17:18:03.363Z</time>
      </trkpt>
      <trkpt lat="51.175733" lon="3.892675">
        <ele>4.030915</ele>
        <time>2026-03-14T17:19:37.835Z</time>
      </trkpt>
      <trkpt lat="51.175874" lon="3.903510">
        <ele>3.405590</ele>
        <time>2026-03-14T17:22:06.295Z</time>
      </trkpt>
      <trkpt lat="51.176014" lon="3.914211">
        <ele>1.909844</ele>
        <time>2026-03-14T17:24:29.637Z</time>
      </trkpt>
      <trkpt lat="51.176081" lon="3.919613">
        <ele>1.285020</ele>
        <time>2026-03-14T17:25:42.694Z</time>
      </trkpt>
      <trkpt lat="51.176139" lon="3.920776">
        <ele>1.469249</ele>
        <time>2026-03-14T17:25:59.049Z</time>
      </trkpt>
      <trkpt lat="51.176384" lon="3.923448">
        <ele>1.914510</ele>
        <time>2026-03-14T17:26:39.608Z</time>
      </trkpt>
      <trkpt lat="51.176374" lon="3.923550">
        <ele>1.932696</ele>
        <time>2026-03-14T17:26:41.210Z</time>
      </trkpt>
      <trkpt lat="51.176396" lon="3.923711">
        <ele>1.961724</ele>
        <time>2026-03-14T17:26:43.750Z</time>
      </trkpt>
      <trkpt lat="51.176436" lon="3.924126">
        <ele>2.035689</ele>
        <time>2026-03-14T17:26:49.908Z</time>
      </trkpt>
      <trkpt lat="51.176452" lon="3.924300">
        <ele>2.066668</ele>
        <time>2026-03-14T17:26:52.577Z</time>
      </trkpt>
      <trkpt lat="51.176531" lon="3.924321">
        <ele>2.089173</ele>
        <time>2026-03-14T17:26:54.493Z</time>
      </trkpt>
      <trkpt lat="51.176552" lon="3.924327">
        <ele>2.095167</ele>
        <time>2026-03-14T17:26:55.000Z</time>
      </trkpt>
      <trkpt lat="51.176578" lon="3.924641">
        <ele>2.150961</ele>
        <time>2026-03-14T17:26:59.549Z</time>
      </trkpt>
      <trkpt lat="51.176654" lon="3.925559">
        <ele>2.269240</ele>
        <time>2026-03-14T17:27:12.653Z</time>
      </trkpt>
      <trkpt lat="51.176739" lon="3.926764">
        <ele>2.356820</ele>
        <time>2026-03-14T17:27:29.887Z</time>
      </trkpt>
      <trkpt lat="51.176749" lon="3.927487">
        <ele>2.409051</ele>
        <time>2026-03-14T17:27:40.265Z</time>
      </trkpt>
      <trkpt lat="51.176721" lon="3.927920">
        <ele>2.440490</ele>
        <time>2026-03-14T17:27:46.527Z</time>
      </trkpt>
      <trkpt lat="51.176612" lon="3.928793">
        <ele>2.502632</ele>
        <time>2026-03-14T17:27:59.216Z</time>
      </trkpt>
      <trkpt lat="51.176376" lon="3.929962">
        <ele>2.588129</ele>
        <time>2026-03-14T17:28:16.511Z</time>
      </trkpt>
      <trkpt lat="51.176372" lon="3.930138">
        <ele>2.600390</ele>
        <time>2026-03-14T17:28:18.987Z</time>
      </trkpt>
      <trkpt lat="51.176398" lon="3.930362">
        <ele>2.616249</ele>
        <time>2026-03-14T17:28:22.199Z</time>
      </trkpt>
      <trkpt lat="51.176411" lon="3.930440">
        <ele>2.621868</ele>
        <time>2026-03-14T17:28:23.337Z</time>
      </trkpt>
      <trkpt lat="51.176423" lon="3.930513">
        <ele>2.627122</ele>
        <time>2026-03-14T17:28:24.394Z</time>
      </trkpt>
      <trkpt lat="51.176462" lon="3.930738">
        <ele>2.643373</ele>
        <time>2026-03-14T17:28:27.692Z</time>
      </trkpt>
      <trkpt lat="51.175415" lon="3.932177">
        <ele>2.998062</ele>
        <time>2026-03-14T17:29:00.918Z</time>
      </trkpt>
      <trkpt lat="51.175246" lon="3.932489">
        <ele>3.064812</ele>
        <time>2026-03-14T17:29:07.337Z</time>
      </trkpt>
      <trkpt lat="51.174909" lon="3.933112">
        <ele>3.230250</ele>
        <time>2026-03-14T17:29:20.198Z</time>
      </trkpt>
      <trkpt lat="51.174794" lon="3.933453">
        <ele>3.315749</ele>
        <time>2026-03-14T17:29:26.136Z</time>
      </trkpt>
      <trkpt lat="51.174709" lon="3.933482">
        <ele>3.346364</ele>
        <time>2026-03-14T17:29:28.246Z</time>
      </trkpt>
      <trkpt lat="51.174551" lon="3.934352">
        <ele>3.546368</ele>
        <time>2026-03-14T17:29:41.747Z</time>
      </trkpt>
      <trkpt lat="51.174511" lon="3.934993">
        <ele>3.688609</ele>
        <time>2026-03-14T17:29:51.305Z</time>
      </trkpt>
      <trkpt lat="51.174536" lon="3.935473">
        <ele>3.763245</ele>
        <time>2026-03-14T17:29:58.328Z</time>
      </trkpt>
      <trkpt lat="51.174621" lon="3.936097">
        <ele>3.818244</ele>
        <time>2026-03-14T17:30:07.524Z</time>
      </trkpt>
      <trkpt lat="51.174840" lon="3.937534">
        <ele>3.945618</ele>
        <time>2026-03-14T17:30:28.691Z</time>
      </trkpt>
      <trkpt lat="51.175074" lon="3.938926">
        <ele>4.004027</ele>
        <time>2026-03-14T17:30:48.636Z</time>
      </trkpt>
      <trkpt lat="51.175398" lon="3.940903">
        <ele>4.042273</ele>
        <time>2026-03-14T17:31:17.224Z</time>
      </trkpt>
      <trkpt lat="51.175696" lon="3.942702">
        <ele>4.208343</ele>
        <time>2026-03-14T17:31:43.885Z</time>
      </trkpt>
      <trkpt lat="51.176010" lon="3.944609">
        <ele>4.293557</ele>
        <time>2026-03-14T17:32:12.213Z</time>
      </trkpt>
      <trkpt lat="51.176148" lon="3.945451">
        <ele>4.296939</ele>
        <time>2026-03-14T17:32:24.525Z</time>
      </trkpt>
      <trkpt lat="51.176268" lon="3.946183">
        <ele>4.299879</ele>
        <time>2026-03-14T17:32:34.954Z</time>
      </trkpt>
      <trkpt lat="51.176421" lon="3.947105">
        <ele>4.151149</ele>
        <time>2026-03-14T17:32:47.616Z</time>
      </trkpt>
      <trkpt lat="51.176541" lon="3.947831">
        <ele>4.006364</ele>
        <time>2026-03-14T17:32:57.252Z</time>
      </trkpt>
      <trkpt lat="51.176684" lon="3.948705">
        <ele>3.832178</ele>
        <time>2026-03-14T17:33:08.906Z</time>
      </trkpt>
      <trkpt lat="51.177682" lon="3.954731">
        <ele>3.539556</ele>
        <time>2026-03-14T17:34:35.340Z</time>
      </trkpt>
      <trkpt lat="51.178114" lon="3.957437">
        <ele>3.170151</ele>
        <time>2026-03-14T17:35:12.648Z</time>
      </trkpt>
      <trkpt lat="51.180506" lon="3.971814">
        <ele>3.258719</ele>
        <time>2026-03-14T17:38:40.805Z</time>
      </trkpt>
      <trkpt lat="51.180960" lon="3.974560">
        <ele>3.189899</ele>
        <time>2026-03-14T17:39:19.505Z</time>
      </trkpt>
      <trkpt lat="51.180993" lon="3.974766">
        <ele>3.204689</ele>
        <time>2026-03-14T17:39:22.466Z</time>
      </trkpt>
      <trkpt lat="51.181390" lon="3.977134">
        <ele>3.379656</ele>
        <time>2026-03-14T17:39:57.873Z</time>
      </trkpt>
      <trkpt lat="51.182311" lon="3.982040">
        <ele>3.789291</ele>
        <time>2026-03-14T17:41:10.763Z</time>
      </trkpt>
      <trkpt lat="51.182971" lon="3.985449">
        <ele>4.136662</ele>
        <time>2026-03-14T17:42:01.181Z</time>
      </trkpt>
      <trkpt lat="51.183491" lon="3.988230">
        <ele>4.911003</ele>
        <time>2026-03-14T17:42:45.669Z</time>
      </trkpt>
      <trkpt lat="51.184102" lon="3.991114">
        <ele>5.520298</ele>
        <time>2026-03-14T17:43:30.391Z</time>
      </trkpt>
      <trkpt lat="51.184544" lon="3.992720">
        <ele>5.845300</ele>
        <time>2026-03-14T17:43:56.448Z</time>
      </trkpt>
      <trkpt lat="51.185044" lon="3.994277">
        <ele>6.091067</ele>
        <time>2026-03-14T17:44:21.639Z</time>
      </trkpt>
      <trkpt lat="51.185829" lon="3.996525">
        <ele>6.344001</ele>
        <time>2026-03-14T17:44:58.536Z</time>
      </trkpt>
      <trkpt lat="51.186561" lon="3.998636">
        <ele>6.438415</ele>
        <time>2026-03-14T17:45:32.525Z</time>
      </trkpt>
      <trkpt lat="51.187251" lon="4.000582">
        <ele>6.333122</ele>
        <time>2026-03-14T17:46:02.911Z</time>
      </trkpt>
      <trkpt lat="51.188732" lon="4.004943">
        <ele>6.261316</ele>
        <time>2026-03-14T17:47:12.055Z</time>
      </trkpt>
      <trkpt lat="51.189791" lon="4.007952">
        <ele>5.980997</ele>
        <time>2026-03-14T17:47:59.305Z</time>
      </trkpt>
      <trkpt lat="51.189883" lon="4.008309">
        <ele>5.940433</ele>
        <time>2026-03-14T17:48:04.354Z</time>
      </trkpt>
      <trkpt lat="51.190464" lon="4.009965">
        <ele>5.439513</ele>
        <time>2026-03-14T17:48:28.909Z</time>
      </trkpt>
      <trkpt lat="51.191809" lon="4.013807">
        <ele>4.259385</ele>
        <time>2026-03-14T17:49:26.781Z</time>
      </trkpt>
      <trkpt lat="51.192714" lon="4.016465">
        <ele>3.248018</ele>
        <time>2026-03-14T17:50:04.165Z</time>
      </trkpt>
      <trkpt lat="51.195236" lon="4.023674">
        <ele>2.878965</ele>
        <time>2026-03-14T17:51:59.391Z</time>
      </trkpt>
      <trkpt lat="51.195387" lon="4.024086">
        <ele>2.856666</ele>
        <time>2026-03-14T17:52:06.000Z</time>
      </trkpt>
      <trkpt lat="51.196244" lon="4.026577">
        <ele>2.744243</ele>
        <time>2026-03-14T17:52:44.796Z</time>
      </trkpt>
      <trkpt lat="51.197415" lon="4.029904">
        <ele>2.920195</ele>
        <time>2026-03-14T17:53:38.061Z</time>
      </trkpt>
      <trkpt lat="51.197877" lon="4.031273">
        <ele>3.097350</ele>
        <time>2026-03-14T17:54:01.793Z</time>
      </trkpt>
      <trkpt lat="51.198009" lon="4.031669">
        <ele>3.134611</ele>
        <time>2026-03-14T17:54:08.797Z</time>
      </trkpt>
      <trkpt lat="51.199250" lon="4.035105">
        <ele>3.377145</ele>
        <time>2026-03-14T17:55:05.786Z</time>
      </trkpt>
      <trkpt lat="51.199264" lon="4.035145">
        <ele>3.378938</ele>
        <time>2026-03-14T17:55:06.501Z</time>
      </trkpt>
      <trkpt lat="51.199362" lon="4.035422">
        <ele>3.391386</ele>
        <time>2026-03-14T17:55:11.483Z</time>
      </trkpt>
      <trkpt lat="51.199377" lon="4.035465">
        <ele>3.393311</ele>
        <time>2026-03-14T17:55:12.256Z</time>
      </trkpt>
      <trkpt lat="51.199804" lon="4.036723">
        <ele>3.448479</ele>
        <time>2026-03-14T17:55:34.125Z</time>
      </trkpt>
      <trkpt lat="51.199913" lon="4.037043">
        <ele>3.462418</ele>
        <time>2026-03-14T17:55:39.578Z</time>
      </trkpt>
      <trkpt lat="51.200155" lon="4.037728">
        <ele>3.492514</ele>
        <time>2026-03-14T17:55:50.863Z</time>
      </trkpt>
      <trkpt lat="51.200519" lon="4.038760">
        <ele>3.553851</ele>
        <time>2026-03-14T17:56:07.265Z</time>
      </trkpt>
      <trkpt lat="51.201437" lon="4.041346">
        <ele>3.844408</ele>
        <time>2026-03-14T17:56:52.051Z</time>
      </trkpt>
      <trkpt lat="51.202723" lon="4.044969">
        <ele>4.694387</ele>
        <time>2026-03-14T17:57:53.428Z</time>
      </trkpt>
      <trkpt lat="51.203147" lon="4.046198">
        <ele>4.953616</ele>
        <time>2026-03-14T17:58:14.322Z</time>
      </trkpt>
      <trkpt lat="51.203164" lon="4.046246">
        <ele>4.958991</ele>
        <time>2026-03-14T17:58:15.135Z</time>
      </trkpt>
      <trkpt lat="51.203174" lon="4.046275">
        <ele>4.962218</ele>
        <time>2026-03-14T17:58:15.640Z</time>
      </trkpt>
      <trkpt lat="51.203197" lon="4.046341">
        <ele>4.969580</ele>
        <time>2026-03-14T17:58:16.807Z</time>
      </trkpt>
      <trkpt lat="51.203433" lon="4.047007">
        <ele>5.044168</ele>
        <time>2026-03-14T17:58:28.475Z</time>
      </trkpt>
      <trkpt lat="51.203565" lon="4.047380">
        <ele>5.085928</ele>
        <time>2026-03-14T17:58:34.958Z</time>
      </trkpt>
      <trkpt lat="51.203578" lon="4.047418">
        <ele>5.090148</ele>
        <time>2026-03-14T17:58:35.621Z</time>
      </trkpt>
      <trkpt lat="51.203588" lon="4.047451">
        <ele>5.093722</ele>
        <time>2026-03-14T17:58:36.171Z</time>
      </trkpt>
      <trkpt lat="51.204549" lon="4.050188">
        <ele>5.133087</ele>
        <time>2026-03-14T17:59:19.723Z</time>
      </trkpt>
      <trkpt lat="51.205107" lon="4.051780">
        <ele>5.157951</ele>
        <time>2026-03-14T17:59:44.290Z</time>
      </trkpt>
      <trkpt lat="51.205163" lon="4.051931">
        <ele>5.167031</ele>
        <time>2026-03-14T17:59:46.731Z</time>
      </trkpt>
      <trkpt lat="51.205261" lon="4.052271">
        <ele>5.186396</ele>
        <time>2026-03-14T17:59:51.947Z</time>
      </trkpt>
      <trkpt lat="51.205264" lon="4.052350">
        <ele>5.190491</ele>
        <time>2026-03-14T17:59:53.070Z</time>
      </trkpt>
      <trkpt lat="51.205309" lon="4.052417">
        <ele>5.195574</ele>
        <time>2026-03-14T17:59:54.447Z</time>
      </trkpt>
      <trkpt lat="51.205344" lon="4.052450">
        <ele>5.198931</ele>
        <time>2026-03-14T17:59:55.371Z</time>
      </trkpt>
      <trkpt lat="51.206521" lon="4.055854">
        <ele>5.829202</ele>
        <time>2026-03-14T18:00:53.118Z</time>
      </trkpt>
      <trkpt lat="51.207883" lon="4.059650">
        <ele>6.067186</ele>
        <time>2026-03-14T18:01:55.010Z</time>
      </trkpt>
      <trkpt lat="51.209348" lon="4.063731">
        <ele>6.112229</ele>
        <time>2026-03-14T18:03:00.569Z</time>
      </trkpt>
      <trkpt lat="51.210638" lon="4.067324">
        <ele>6.309048</ele>
        <time>2026-03-14T18:03:58.523Z</time>
      </trkpt>
      <trkpt lat="51.211309" lon="4.069271">
        <ele>6.573368</ele>
        <time>2026-03-14T18:04:31.022Z</time>
      </trkpt>
      <trkpt lat="51.211502" lon="4.069899">
        <ele>6.680796</ele>
        <time>2026-03-14T18:04:41.181Z</time>
      </trkpt>
      <trkpt lat="51.212113" lon="4.071910">
        <ele>6.983781</ele>
        <time>2026-03-14T18:05:13.748Z</time>
      </trkpt>
      <trkpt lat="51.212317" lon="4.071771">
        <ele>7.025063</ele>
        <time>2026-03-14T18:05:18.955Z</time>
      </trkpt>
      <trkpt lat="51.212715" lon="4.072853">
        <ele>7.171353</ele>
        <time>2026-03-14T18:05:36.933Z</time>
      </trkpt>
      <trkpt lat="51.212751" lon="4.073195">
        <ele>7.220612</ele>
        <time>2026-03-14T18:05:41.822Z</time>
      </trkpt>
      <trkpt lat="51.212710" lon="4.073453">
        <ele>7.265221</ele>
        <time>2026-03-14T18:05:45.702Z</time>
      </trkpt>
      <trkpt lat="51.212400" lon="4.073296">
        <ele>7.352231</ele>
        <time>2026-03-14T18:05:52.935Z</time>
      </trkpt>
      <trkpt lat="51.212295" lon="4.073294">
        <ele>7.380325</ele>
        <time>2026-03-14T18:05:55.293Z</time>
      </trkpt>
      <trkpt lat="51.212122" lon="4.073383">
        <ele>7.428953</ele>
        <time>2026-03-14T18:05:59.426Z</time>
      </trkpt>
      <trkpt lat="51.211689" lon="4.073816">
        <ele>7.565650</ele>
        <time>2026-03-14T18:06:11.409Z</time>
      </trkpt>
      <trkpt lat="51.211636" lon="4.073944">
        <ele>7.591365</ele>
        <time>2026-03-14T18:06:13.725Z</time>
      </trkpt>
      <trkpt lat="51.211546" lon="4.074388">
        <ele>7.669577</ele>
        <time>2026-03-14T18:06:20.859Z</time>
      </trkpt>
      <trkpt lat="51.211495" lon="4.074715">
        <ele>7.793471</ele>
        <time>2026-03-14T18:06:26.065Z</time>
      </trkpt>
      <trkpt lat="51.211399" lon="4.074762">
        <ele>7.854352</ele>
        <time>2026-03-14T18:06:28.543Z</time>
      </trkpt>
      <trkpt lat="51.211000" lon="4.075082">
        <ele>8.125084</ele>
        <time>2026-03-14T18:06:39.620Z</time>
      </trkpt>
      <trkpt lat="51.210690" lon="4.075359">
        <ele>8.340481</ele>
        <time>2026-03-14T18:06:48.520Z</time>
      </trkpt>
      <trkpt lat="51.210665" lon="4.075380">
        <ele>8.357610</ele>
        <time>2026-03-14T18:06:49.224Z</time>
      </trkpt>
      <trkpt lat="51.210626" lon="4.075410">
        <ele>8.383858</ele>
        <time>2026-03-14T18:06:50.291Z</time>
      </trkpt>
      <trkpt lat="51.210298" lon="4.075679">
        <ele>8.607437</ele>
        <time>2026-03-14T18:06:59.425Z</time>
      </trkpt>
      <trkpt lat="51.210266" lon="4.075708">
        <ele>8.629748</ele>
        <time>2026-03-14T18:07:00.313Z</time>
      </trkpt>
      <trkpt lat="51.209890" lon="4.076051">
        <ele>8.872724</ele>
        <time>2026-03-14T18:07:10.785Z</time>
      </trkpt>
      <trkpt lat="51.209118" lon="4.076698">
        <ele>9.321071</ele>
        <time>2026-03-14T18:07:32.100Z</time>
      </trkpt>
      <trkpt lat="51.208505" lon="4.077206">
        <ele>9.676222</ele>
        <time>2026-03-14T18:07:48.847Z</time>
      </trkpt>
      <trkpt lat="51.208137" lon="4.077491">
        <ele>9.761589</ele>
        <time>2026-03-14T18:07:58.894Z</time>
      </trkpt>
      <trkpt lat="51.207994" lon="4.077607">
        <ele>9.792111</ele>
        <time>2026-03-14T18:08:02.857Z</time>
      </trkpt>
      <trkpt lat="51.207071" lon="4.078380">
        <ele>9.990438</ele>
        <time>2026-03-14T18:08:26.720Z</time>
      </trkpt>
      <trkpt lat="51.207299" lon="4.078968">
        <ele>9.865839</ele>
        <time>2026-03-14T18:08:35.878Z</time>
      </trkpt>
      <trkpt lat="51.207450" lon="4.079347">
        <ele>9.658233</ele>
        <time>2026-03-14T18:08:41.603Z</time>
      </trkpt>
      <trkpt lat="51.207433" lon="4.079363">
        <ele>9.643673</ele>
        <time>2026-03-14T18:08:42.015Z</time>
      </trkpt>
      <trkpt lat="51.207106" lon="4.079848">
        <ele>9.314340</ele>
        <time>2026-03-14T18:08:50.763Z</time>
      </trkpt>
      <trkpt lat="51.206870" lon="4.080114">
        <ele>9.101187</ele>
        <time>2026-03-14T18:08:56.339Z</time>
      </trkpt>
      <trkpt lat="51.205954" lon="4.081027">
        <ele>8.217892</ele>
        <time>2026-03-14T18:09:17.313Z</time>
      </trkpt>
      <trkpt lat="51.205707" lon="4.081331">
        <ele>7.937860</ele>
        <time>2026-03-14T18:09:23.467Z</time>
      </trkpt>
      <trkpt lat="51.205636" lon="4.081488">
        <ele>7.828945</ele>
        <time>2026-03-14T18:09:25.860Z</time>
      </trkpt>
      <trkpt lat="51.205692" lon="4.081597">
        <ele>7.749654</ele>
        <time>2026-03-14T18:09:27.603Z</time>
      </trkpt>
      <trkpt lat="51.205811" lon="4.082299">
        <ele>7.340581</ele>
        <time>2026-03-14T18:09:36.546Z</time>
      </trkpt>
      <trkpt lat="51.205810" lon="4.082414">
        <ele>7.275887</ele>
        <time>2026-03-14T18:09:37.960Z</time>
      </trkpt>
      <trkpt lat="51.205722" lon="4.082735">
        <ele>7.078949</ele>
        <time>2026-03-14T18:09:42.242Z</time>
      </trkpt>
      <trkpt lat="51.205500" lon="4.083018">
        <ele>6.827868</ele>
        <time>2026-03-14T18:09:47.707Z</time>
      </trkpt>
      <trkpt lat="51.205396" lon="4.083300">
        <ele>6.646689</ele>
        <time>2026-03-14T18:09:51.649Z</time>
      </trkpt>
      <trkpt lat="51.205364" lon="4.083597">
        <ele>6.479831</ele>
        <time>2026-03-14T18:09:55.286Z</time>
      </trkpt>
      <trkpt lat="51.205366" lon="4.084323">
        <ele>6.077854</ele>
        <time>2026-03-14T18:10:04.123Z</time>
      </trkpt>
      <trkpt lat="51.205391" lon="4.084661">
        <ele>5.889410</ele>
        <time>2026-03-14T18:10:08.293Z</time>
      </trkpt>
      <trkpt lat="51.205709" lon="4.086039">
        <ele>5.292150</ele>
        <time>2026-03-14T18:10:26.618Z</time>
      </trkpt>
      <trkpt lat="51.205804" lon="4.086694">
        <ele>5.109945</ele>
        <time>2026-03-14T18:10:35.491Z</time>
      </trkpt>
      <trkpt lat="51.205825" lon="4.086995">
        <ele>5.027867</ele>
        <time>2026-03-14T18:10:39.485Z</time>
      </trkpt>
      <trkpt lat="51.205813" lon="4.087074">
        <ele>5.005837</ele>
        <time>2026-03-14T18:10:40.560Z</time>
      </trkpt>
      <trkpt lat="51.205796" lon="4.087185">
        <ele>4.974870</ele>
        <time>2026-03-14T18:10:42.074Z</time>
      </trkpt>
      <trkpt lat="51.205295" lon="4.087929">
        <ele>4.690261</ele>
        <time>2026-03-14T18:10:56.519Z</time>
      </trkpt>
      <trkpt lat="51.204921" lon="4.088368">
        <ele>4.543697</ele>
        <time>2026-03-14T18:11:06.379Z</time>
      </trkpt>
      <trkpt lat="51.204867" lon="4.088467">
        <ele>4.517734</ele>
        <time>2026-03-14T18:11:08.076Z</time>
      </trkpt>
      <trkpt lat="51.204841" lon="4.088769">
        <ele>4.457438</ele>
        <time>2026-03-14T18:11:12.024Z</time>
      </trkpt>
      <trkpt lat="51.204869" lon="4.089050">
        <ele>4.401158</ele>
        <time>2026-03-14T18:11:15.745Z</time>
      </trkpt>
      <trkpt lat="51.204906" lon="4.089294">
        <ele>4.351502</ele>
        <time>2026-03-14T18:11:19.030Z</time>
      </trkpt>
      <trkpt lat="51.204991" lon="4.089564">
        <ele>4.291734</ele>
        <time>2026-03-14T18:11:23.008Z</time>
      </trkpt>
      <trkpt lat="51.205274" lon="4.090256">
        <ele>4.152872</ele>
        <time>2026-03-14T18:11:34.074Z</time>
      </trkpt>
      <trkpt lat="51.205722" lon="4.091770">
        <ele>4.148282</ele>
        <time>2026-03-14T18:11:57.169Z</time>
      </trkpt>
      <trkpt lat="51.205910" lon="4.092464">
        <ele>4.146210</ele>
        <time>2026-03-14T18:12:08.090Z</time>
      </trkpt>
      <trkpt lat="51.205892" lon="4.092526">
        <ele>4.146022</ele>
        <time>2026-03-14T18:12:09.076Z</time>
      </trkpt>
      <trkpt lat="51.205773" lon="4.092628">
        <ele>4.145431</ele>
        <time>2026-03-14T18:12:12.173Z</time>
      </trkpt>
      <trkpt lat="51.205665" lon="4.092773">
        <ele>4.154955</ele>
        <time>2026-03-14T18:12:15.403Z</time>
      </trkpt>
      <trkpt lat="51.204496" lon="4.094664">
        <ele>4.285900</ele>
        <time>2026-03-14T18:12:52.943Z</time>
      </trkpt>
      <trkpt lat="51.204007" lon="4.095476">
        <ele>4.341511</ele>
        <time>2026-03-14T18:13:08.594Z</time>
      </trkpt>
      <trkpt lat="51.203705" lon="4.095876">
        <ele>4.372440</ele>
        <time>2026-03-14T18:13:17.344Z</time>
      </trkpt>
      <trkpt lat="51.201874" lon="4.097954">
        <ele>4.821092</ele>
        <time>2026-03-14T18:14:08.988Z</time>
      </trkpt>
      <trkpt lat="51.201171" lon="4.098789">
        <ele>5.094877</ele>
        <time>2026-03-14T18:14:30.107Z</time>
      </trkpt>
      <trkpt lat="51.200574" lon="4.100664">
        <ele>5.491917</ele>
        <time>2026-03-14T18:15:01.254Z</time>
      </trkpt>
      <trkpt lat="51.199519" lon="4.103544">
        <ele>5.491661</ele>
        <time>2026-03-14T18:15:46.844Z</time>
      </trkpt>
      <trkpt lat="51.197864" lon="4.108123">
        <ele>5.886408</ele>
        <time>2026-03-14T18:17:02.676Z</time>
      </trkpt>
      <trkpt lat="51.196397" lon="4.112206">
        <ele>6.322237</ele>
        <time>2026-03-14T18:18:09.444Z</time>
      </trkpt>
      <trkpt lat="51.196018" lon="4.113646">
        <ele>6.511989</ele>
        <time>2026-03-14T18:18:32.836Z</time>
      </trkpt>
      <trkpt lat="51.195911" lon="4.113961">
        <ele>6.554856</ele>
        <time>2026-03-14T18:18:38.160Z</time>
      </trkpt>
      <trkpt lat="51.195743" lon="4.114286">
        <ele>6.605260</ele>
        <time>2026-03-14T18:18:44.357Z</time>
      </trkpt>
      <trkpt lat="51.195638" lon="4.114435">
        <ele>6.632086</ele>
        <time>2026-03-14T18:18:47.579Z</time>
      </trkpt>
      <trkpt lat="51.195508" lon="4.114571">
        <ele>6.661762</ele>
        <time>2026-03-14T18:18:51.106Z</time>
      </trkpt>
      <trkpt lat="51.195194" lon="4.114799">
        <ele>6.727624</ele>
        <time>2026-03-14T18:18:58.768Z</time>
      </trkpt>
      <trkpt lat="51.194301" lon="4.115410">
        <ele>6.778071</ele>
        <time>2026-03-14T18:19:20.058Z</time>
      </trkpt>
      <trkpt lat="51.192311" lon="4.116832">
        <ele>6.998440</ele>
        <time>2026-03-14T18:20:09.189Z</time>
      </trkpt>
      <trkpt lat="51.191832" lon="4.117191">
        <ele>7.092171</ele>
        <time>2026-03-14T18:20:21.685Z</time>
      </trkpt>
      <trkpt lat="51.191481" lon="4.117277">
        <ele>7.120440</ele>
        <time>2026-03-14T18:20:30.024Z</time>
      </trkpt>
      <trkpt lat="51.191127" lon="4.117319">
        <ele>7.131767</ele>
        <time>2026-03-14T18:20:38.240Z</time>
      </trkpt>
      <trkpt lat="51.191092" lon="4.117366">
        <ele>7.133227</ele>
        <time>2026-03-14T18:20:39.305Z</time>
      </trkpt>
      <trkpt lat="51.191064" lon="4.117436">
        <ele>7.134888</ele>
        <time>2026-03-14T18:20:40.503Z</time>
      </trkpt>
      <trkpt lat="51.190484" lon="4.122803">
        <ele>7.076776</ele>
        <time>2026-03-14T18:21:54.747Z</time>
      </trkpt>
      <trkpt lat="51.190269" lon="4.124961">
        <ele>7.332960</ele>
        <time>2026-03-14T18:22:27.266Z</time>
      </trkpt>
      <trkpt lat="51.190177" lon="4.126451">
        <ele>7.452406</ele>
        <time>2026-03-14T18:22:48.488Z</time>
      </trkpt>
      <trkpt lat="51.190088" lon="4.127696">
        <ele>7.552504</ele>
        <time>2026-03-14T18:23:06.002Z</time>
      </trkpt>
      <trkpt lat="51.190069" lon="4.128246">
        <ele>7.610727</ele>
        <time>2026-03-14T18:23:14.094Z</time>
      </trkpt>
      <trkpt lat="51.190086" lon="4.128491">
        <ele>7.636781</ele>
        <time>2026-03-14T18:23:17.760Z</time>
      </trkpt>
      <trkpt lat="51.190210" lon="4.129027">
        <ele>7.697172</ele>
        <time>2026-03-14T18:23:26.039Z</time>
      </trkpt>
      <trkpt lat="51.190681" lon="4.130920">
        <ele>7.935482</ele>
        <time>2026-03-14T18:23:54.971Z</time>
      </trkpt>
      <trkpt lat="51.190870" lon="4.131512">
        <ele>8.034015</ele>
        <time>2026-03-14T18:24:04.839Z</time>
      </trkpt>
      <trkpt lat="51.190918" lon="4.131874">
        <ele>8.088890</ele>
        <time>2026-03-14T18:24:12.061Z</time>
      </trkpt>
      <trkpt lat="51.191234" lon="4.133379">
        <ele>8.280813</ele>
        <time>2026-03-14T18:24:42.345Z</time>
      </trkpt>
      <trkpt lat="51.191320" lon="4.135589">
        <ele>8.279892</ele>
        <time>2026-03-14T18:25:22.062Z</time>
      </trkpt>
      <trkpt lat="51.191338" lon="4.137416">
        <ele>8.568629</ele>
        <time>2026-03-14T18:25:56.323Z</time>
      </trkpt>
      <trkpt lat="51.191299" lon="4.137965">
        <ele>8.677667</ele>
        <time>2026-03-14T18:26:07.221Z</time>
      </trkpt>
      <trkpt lat="51.191198" lon="4.138790">
        <ele>8.843558</ele>
        <time>2026-03-14T18:26:23.824Z</time>
      </trkpt>
      <trkpt lat="51.191043" lon="4.139742">
        <ele>9.031820</ele>
        <time>2026-03-14T18:26:43.083Z</time>
      </trkpt>
      <trkpt lat="51.190619" lon="4.142519">
        <ele>9.353647</ele>
        <time>2026-03-14T18:27:36.827Z</time>
      </trkpt>
      <trkpt lat="51.190561" lon="4.142632">
        <ele>9.347319</ele>
        <time>2026-03-14T18:27:39.490Z</time>
      </trkpt>
      <trkpt lat="51.190745" lon="4.142740">
        <ele>9.333766</ele>
        <time>2026-03-14T18:27:43.922Z</time>
      </trkpt>
      <trkpt lat="51.190631" lon="4.143117">
        <ele>9.315631</ele>
        <time>2026-03-14T18:27:49.593Z</time>
      </trkpt>
      <trkpt lat="51.189733" lon="4.144964">
        <ele>9.134775</ele>
        <time>2026-03-14T18:28:21.156Z</time>
      </trkpt>
      <trkpt lat="51.189516" lon="4.145398">
        <ele>9.076842</ele>
        <time>2026-03-14T18:28:28.725Z</time>
      </trkpt>
      <trkpt lat="51.189453" lon="4.145540">
        <ele>9.058688</ele>
        <time>2026-03-14T18:28:31.100Z</time>
      </trkpt>
      <trkpt lat="51.189281" lon="4.146133">
        <ele>8.990505</ele>
        <time>2026-03-14T18:28:40.016Z</time>
      </trkpt>
      <trkpt lat="51.189058" lon="4.146970">
        <ele>8.833084</ele>
        <time>2026-03-14T18:28:52.340Z</time>
      </trkpt>
      <trkpt lat="51.188489" lon="4.149390">
        <ele>8.377596</ele>
        <time>2026-03-14T18:29:26.136Z</time>
      </trkpt>
      <trkpt lat="51.188149" lon="4.151289">
        <ele>8.165657</ele>
        <time>2026-03-14T18:29:52.956Z</time>
      </trkpt>
      <trkpt lat="51.188023" lon="4.152309">
        <ele>8.123673</ele>
        <time>2026-03-14T18:30:07.262Z</time>
      </trkpt>
      <trkpt lat="51.187903" lon="4.154066">
        <ele>8.143812</ele>
        <time>2026-03-14T18:30:32.000Z</time>
      </trkpt>
      <trkpt lat="51.187930" lon="4.155575">
        <ele>8.234186</ele>
        <time>2026-03-14T18:30:53.558Z</time>
      </trkpt>
      <trkpt lat="51.187920" lon="4.155998">
        <ele>8.270187</ele>
        <time>2026-03-14T18:30:59.694Z</time>
      </trkpt>
      <trkpt lat="51.187682" lon="4.159074">
        <ele>8.548904</ele>
        <time>2026-03-14T18:31:43.635Z</time>
      </trkpt>
      <trkpt lat="51.187448" lon="4.161353">
        <ele>8.919960</ele>
        <time>2026-03-14T18:32:17.192Z</time>
      </trkpt>
      <trkpt lat="51.187179" lon="4.162397">
        <ele>9.185797</ele>
        <time>2026-03-14T18:32:34.353Z</time>
      </trkpt>
      <trkpt lat="51.187111" lon="4.162547">
        <ele>9.229395</ele>
        <time>2026-03-14T18:32:37.200Z</time>
      </trkpt>
      <trkpt lat="51.186102" lon="4.163285">
        <ele>9.584736</ele>
        <time>2026-03-14T18:33:03.732Z</time>
      </trkpt>
      <trkpt lat="51.186090" lon="4.163382">
        <ele>9.603331</ele>
        <time>2026-03-14T18:33:05.162Z</time>
      </trkpt>
      <trkpt lat="51.185533" lon="4.163819">
        <ele>9.789578</ele>
        <time>2026-03-14T18:33:19.326Z</time>
      </trkpt>
      <trkpt lat="51.184385" lon="4.164621">
        <ele>10.121382</ele>
        <time>2026-03-14T18:33:48.316Z</time>
      </trkpt>
      <trkpt lat="51.184212" lon="4.164816">
        <ele>10.175107</ele>
        <time>2026-03-14T18:33:53.321Z</time>
      </trkpt>
      <trkpt lat="51.182498" lon="4.167152">
        <ele>10.668547</ele>
        <time>2026-03-14T18:34:45.828Z</time>
      </trkpt>
      <trkpt lat="51.181830" lon="4.168127">
        <ele>10.925802</ele>
        <time>2026-03-14T18:35:06.363Z</time>
      </trkpt>
      <trkpt lat="51.181622" lon="4.168546">
        <ele>11.027474</ele>
        <time>2026-03-14T18:35:14.050Z</time>
      </trkpt>
      <trkpt lat="51.181094" lon="4.169980">
        <ele>11.346655</ele>
        <time>2026-03-14T18:35:39.200Z</time>
      </trkpt>
      <trkpt lat="51.180722" lon="4.170883">
        <ele>11.558437</ele>
        <time>2026-03-14T18:35:55.509Z</time>
      </trkpt>
      <trkpt lat="51.180670" lon="4.170964">
        <ele>11.581161</ele>
        <time>2026-03-14T18:35:57.222Z</time>
      </trkpt>
      <trkpt lat="51.180636" lon="4.170926">
        <ele>11.594141</ele>
        <time>2026-03-14T18:35:58.212Z</time>
      </trkpt>
      <trkpt lat="51.180658" lon="4.171032">
        <ele>11.616025</ele>
        <time>2026-03-14T18:36:00.364Z</time>
      </trkpt>
      <trkpt lat="51.181944" lon="4.174826">
        <ele>11.967115</ele>
        <time>2026-03-14T18:37:00.948Z</time>
      </trkpt>
      <trkpt lat="51.182256" lon="4.175757">
        <ele>12.123733</ele>
        <time>2026-03-14T18:37:16.177Z</time>
      </trkpt>
      <trkpt lat="51.182879" lon="4.177590">
        <ele>12.514202</ele>
        <time>2026-03-14T18:37:47.097Z</time>
      </trkpt>
      <trkpt lat="51.182911" lon="4.177671">
        <ele>12.539370</ele>
        <time>2026-03-14T18:37:48.520Z</time>
      </trkpt>
      <trkpt lat="51.183541" lon="4.179513">
        <ele>13.090461</ele>
        <time>2026-03-14T18:38:19.969Z</time>
      </trkpt>
      <trkpt lat="51.183685" lon="4.179824">
        <ele>13.186336</ele>
        <time>2026-03-14T18:38:25.842Z</time>
      </trkpt>
      <trkpt lat="51.184027" lon="4.180818">
        <ele>13.467502</ele>
        <time>2026-03-14T18:38:42.995Z</time>
      </trkpt>
      <trkpt lat="51.184574" lon="4.182264">
        <ele>13.858192</ele>
        <time>2026-03-14T18:39:08.113Z</time>
      </trkpt>
      <trkpt lat="51.185015" lon="4.183437">
        <ele>14.094374</ele>
        <time>2026-03-14T18:39:27.937Z</time>
      </trkpt>
      <trkpt lat="51.185400" lon="4.184546">
        <ele>14.322592</ele>
        <time>2026-03-14T18:39:46.355Z</time>
      </trkpt>
      <trkpt lat="51.185503" lon="4.184814">
        <ele>14.397912</ele>
        <time>2026-03-14T18:39:50.966Z</time>
      </trkpt>
      <trkpt lat="51.185613" lon="4.184812">
        <ele>14.439961</ele>
        <time>2026-03-14T18:39:53.568Z</time>
      </trkpt>
      <trkpt lat="51.185740" lon="4.184862">
        <ele>14.489962</ele>
        <time>2026-03-14T18:39:56.676Z</time>
      </trkpt>
      <trkpt lat="51.185650" lon="4.185806">
        <ele>14.718735</ele>
        <time>2026-03-14T18:40:11.905Z</time>
      </trkpt>
      <trkpt lat="51.186103" lon="4.187138">
        <ele>14.874835</ele>
        <time>2026-03-14T18:40:41.167Z</time>
      </trkpt>
      <trkpt lat="51.186183" lon="4.187296">
        <ele>14.827633</ele>
        <time>2026-03-14T18:40:44.125Z</time>
      </trkpt>
      <trkpt lat="51.190887" lon="4.201196">
        <ele>11.230017</ele>
        <time>2026-03-14T18:44:10.255Z</time>
      </trkpt>
      <trkpt lat="51.191011" lon="4.201346">
        <ele>11.181026</ele>
        <time>2026-03-14T18:44:13.725Z</time>
      </trkpt>
      <trkpt lat="51.191098" lon="4.201551">
        <ele>11.132174</ele>
        <time>2026-03-14T18:44:17.188Z</time>
      </trkpt>
      <trkpt lat="51.191167" lon="4.202061">
        <ele>11.040313</ele>
        <time>2026-03-14T18:44:24.474Z</time>
      </trkpt>
      <trkpt lat="51.192283" lon="4.205686">
        <ele>10.529104</ele>
        <time>2026-03-14T18:45:18.213Z</time>
      </trkpt>
      <trkpt lat="51.192377" lon="4.206073">
        <ele>10.495262</ele>
        <time>2026-03-14T18:45:23.782Z</time>
      </trkpt>
      <trkpt lat="51.195386" lon="4.215973">
        <ele>10.336007</ele>
        <time>2026-03-14T18:47:57.554Z</time>
      </trkpt>
      <trkpt lat="51.196130" lon="4.218422">
        <ele>10.059397</ele>
        <time>2026-03-14T18:48:33.374Z</time>
      </trkpt>
      <trkpt lat="51.196303" lon="4.218938">
        <ele>10.008165</ele>
        <time>2026-03-14T18:48:41.295Z</time>
      </trkpt>
      <trkpt lat="51.197410" lon="4.222600">
        <ele>10.200079</ele>
        <time>2026-03-14T18:49:39.218Z</time>
      </trkpt>
      <trkpt lat="51.197470" lon="4.222861">
        <ele>10.251576</ele>
        <time>2026-03-14T18:49:43.170Z</time>
      </trkpt>
      <trkpt lat="51.197769" lon="4.223668">
        <ele>10.425235</ele>
        <time>2026-03-14T18:49:56.879Z</time>
      </trkpt>
      <trkpt lat="51.197936" lon="4.224124">
        <ele>10.523070</ele>
        <time>2026-03-14T18:50:04.733Z</time>
      </trkpt>
      <trkpt lat="51.198087" lon="4.224447">
        <ele>10.597716</ele>
        <time>2026-03-14T18:50:10.763Z</time>
      </trkpt>
      <trkpt lat="51.198111" lon="4.224500">
        <ele>10.609828</ele>
        <time>2026-03-14T18:50:11.764Z</time>
      </trkpt>
      <trkpt lat="51.198288" lon="4.224885">
        <ele>10.698278</ele>
        <time>2026-03-14T18:50:19.061Z</time>
      </trkpt>
      <trkpt lat="51.198376" lon="4.225078">
        <ele>10.689756</ele>
        <time>2026-03-14T18:50:22.655Z</time>
      </trkpt>
      <trkpt lat="51.198568" lon="4.225475">
        <ele>10.621396</ele>
        <time>2026-03-14T18:50:29.957Z</time>
      </trkpt>
      <trkpt lat="51.198681" lon="4.225723">
        <ele>10.579598</ele>
        <time>2026-03-14T18:50:34.301Z</time>
      </trkpt>
      <trkpt lat="51.198865" lon="4.226132">
        <ele>10.510965</ele>
        <time>2026-03-14T18:50:41.206Z</time>
      </trkpt>
      <trkpt lat="51.198972" lon="4.226366">
        <ele>10.471478</ele>
        <time>2026-03-14T18:50:45.026Z</time>
      </trkpt>
      <trkpt lat="51.199050" lon="4.226395">
        <ele>10.454055</ele>
        <time>2026-03-14T18:50:46.694Z</time>
      </trkpt>
      <trkpt lat="51.199154" lon="4.226613">
        <ele>10.416707</ele>
        <time>2026-03-14T18:50:50.197Z</time>
      </trkpt>
      <trkpt lat="51.199714" lon="4.227882">
        <ele>10.001513</ele>
        <time>2026-03-14T18:51:09.352Z</time>
      </trkpt>
      <trkpt lat="51.200004" lon="4.228654">
        <ele>9.662897</ele>
        <time>2026-03-14T18:51:20.679Z</time>
      </trkpt>
      <trkpt lat="51.200106" lon="4.229063">
        <ele>9.497293</ele>
        <time>2026-03-14T18:51:26.294Z</time>
      </trkpt>
      <trkpt lat="51.200320" lon="4.229560">
        <ele>9.270434</ele>
        <time>2026-03-14T18:51:34.089Z</time>
      </trkpt>
      <trkpt lat="51.202106" lon="4.233363">
        <ele>8.559656</ele>
        <time>2026-03-14T18:52:37.807Z</time>
      </trkpt>
      <trkpt lat="51.202580" lon="4.234338">
        <ele>8.436050</ele>
        <time>2026-03-14T18:52:54.710Z</time>
      </trkpt>
      <trkpt lat="51.202644" lon="4.234420">
        <ele>8.434667</ele>
        <time>2026-03-14T18:52:56.514Z</time>
      </trkpt>
      <trkpt lat="51.202743" lon="4.234618">
        <ele>8.431992</ele>
        <time>2026-03-14T18:52:59.979Z</time>
      </trkpt>
      <trkpt lat="51.203370" lon="4.236037">
        <ele>8.413658</ele>
        <time>2026-03-14T18:53:24.033Z</time>
      </trkpt>
      <trkpt lat="51.203305" lon="4.236095">
        <ele>8.412403</ele>
        <time>2026-03-14T18:53:25.759Z</time>
      </trkpt>
      <trkpt lat="51.203221" lon="4.236170">
        <ele>8.410781</ele>
        <time>2026-03-14T18:53:27.907Z</time>
      </trkpt>
      <trkpt lat="51.203375" lon="4.236501">
        <ele>8.416444</ele>
        <time>2026-03-14T18:53:33.735Z</time>
      </trkpt>
      <trkpt lat="51.203500" lon="4.236765">
        <ele>8.445433</ele>
        <time>2026-03-14T18:53:38.415Z</time>
      </trkpt>
      <trkpt lat="51.203532" lon="4.237186">
        <ele>8.482587</ele>
        <time>2026-03-14T18:53:44.416Z</time>
      </trkpt>
      <trkpt lat="51.203505" lon="4.237961">
        <ele>8.550587</ele>
        <time>2026-03-14T18:53:55.487Z</time>
      </trkpt>
      <trkpt lat="51.203560" lon="4.238494">
        <ele>8.597911</ele>
        <time>2026-03-14T18:54:03.262Z</time>
      </trkpt>
      <trkpt lat="51.203505" lon="4.238635">
        <ele>8.612462</ele>
        <time>2026-03-14T18:54:05.608Z</time>
      </trkpt>
      <trkpt lat="51.203363" lon="4.239062">
        <ele>8.654813</ele>
        <time>2026-03-14T18:54:14.524Z</time>
      </trkpt>
      <trkpt lat="51.203429" lon="4.239280">
        <ele>8.724061</ele>
        <time>2026-03-14T18:54:17.929Z</time>
      </trkpt>
      <trkpt lat="51.203437" lon="4.239355">
        <ele>8.749531</ele>
        <time>2026-03-14T18:54:18.988Z</time>
      </trkpt>
      <trkpt lat="51.203410" lon="4.239469">
        <ele>8.790332</ele>
        <time>2026-03-14T18:54:20.774Z</time>
      </trkpt>
      <trkpt lat="51.202972" lon="4.239811">
        <ele>9.050870</ele>
        <time>2026-03-14T18:54:32.966Z</time>
      </trkpt>
      <trkpt lat="51.203103" lon="4.240229">
        <ele>9.207339</ele>
        <time>2026-03-14T18:54:40.396Z</time>
      </trkpt>
      <trkpt lat="51.203133" lon="4.240577">
        <ele>9.324941</ele>
        <time>2026-03-14T18:54:45.981Z</time>
      </trkpt>
      <trkpt lat="51.202692" lon="4.240888">
        <ele>9.582554</ele>
        <time>2026-03-14T18:54:58.591Z</time>
      </trkpt>
      <trkpt lat="51.202715" lon="4.240960">
        <ele>9.609611</ele>
        <time>2026-03-14T18:54:59.845Z</time>
      </trkpt>
      <trkpt lat="51.202847" lon="4.241197">
        <ele>9.607386</ele>
        <time>2026-03-14T18:55:04.762Z</time>
      </trkpt>
      <trkpt lat="51.205354" lon="4.249472">
        <ele>9.106810</ele>
        <time>2026-03-14T18:57:09.696Z</time>
      </trkpt>
      <trkpt lat="51.206138" lon="4.252049">
        <ele>9.155137</ele>
        <time>2026-03-14T18:57:50.370Z</time>
      </trkpt>
      <trkpt lat="51.207215" lon="4.255903">
        <ele>9.423668</ele>
        <time>2026-03-14T18:58:48.946Z</time>
      </trkpt>
      <trkpt lat="51.207290" lon="4.256188">
        <ele>9.454974</ele>
        <time>2026-03-14T18:58:53.417Z</time>
      </trkpt>
      <trkpt lat="51.207714" lon="4.257772">
        <ele>10.123206</ele>
        <time>2026-03-14T18:59:20.818Z</time>
      </trkpt>
      <trkpt lat="51.207715" lon="4.257893">
        <ele>10.179101</ele>
        <time>2026-03-14T18:59:22.825Z</time>
      </trkpt>
      <trkpt lat="51.207939" lon="4.258807">
        <ele>10.632425</ele>
        <time>2026-03-14T18:59:43.244Z</time>
      </trkpt>
      <trkpt lat="51.208001" lon="4.259060">
        <ele>10.757906</ele>
        <time>2026-03-14T18:59:47.768Z</time>
      </trkpt>
      <trkpt lat="51.207248" lon="4.259727">
        <ele>10.860438</ele>
        <time>2026-03-14T19:00:14.284Z</time>
      </trkpt>
      <trkpt lat="51.207548" lon="4.261106">
        <ele>10.911488</ele>
        <time>2026-03-14T19:00:33.735Z</time>
      </trkpt>
      <trkpt lat="51.207622" lon="4.261784">
        <ele>10.748804</ele>
        <time>2026-03-14T19:00:42.831Z</time>
      </trkpt>
      <trkpt lat="51.207749" lon="4.263049">
        <ele>10.337078</ele>
        <time>2026-03-14T19:00:59.352Z</time>
      </trkpt>
      <trkpt lat="51.207847" lon="4.263328">
        <ele>10.234283</ele>
        <time>2026-03-14T19:01:03.410Z</time>
      </trkpt>
      <trkpt lat="51.208154" lon="4.264400">
        <ele>9.814537</ele>
        <time>2026-03-14T19:01:18.208Z</time>
      </trkpt>
      <trkpt lat="51.208314" lon="4.264845">
        <ele>9.601108</ele>
        <time>2026-03-14T19:01:24.533Z</time>
      </trkpt>
      <trkpt lat="51.208871" lon="4.266652">
        <ele>8.781997</ele>
        <time>2026-03-14T19:01:49.804Z</time>
      </trkpt>
      <trkpt lat="51.209055" lon="4.267404">
        <ele>8.615424</ele>
        <time>2026-03-14T19:02:00.295Z</time>
      </trkpt>
      <trkpt lat="51.209122" lon="4.267730">
        <ele>8.544633</ele>
        <time>2026-03-14T19:02:04.769Z</time>
      </trkpt>
      <trkpt lat="51.209162" lon="4.268058">
        <ele>8.475687</ele>
        <time>2026-03-14T19:02:09.141Z</time>
      </trkpt>
      <trkpt lat="51.209589" lon="4.273609">
        <ele>7.860640</ele>
        <time>2026-03-14T19:03:25.380Z</time>
      </trkpt>
      <trkpt lat="51.210019" lon="4.279106">
        <ele>7.192115</ele>
        <time>2026-03-14T19:04:40.073Z</time>
      </trkpt>
      <trkpt lat="51.210012" lon="4.279470">
        <ele>7.144100</ele>
        <time>2026-03-14T19:04:44.961Z</time>
      </trkpt>
      <trkpt lat="51.210066" lon="4.279764">
        <ele>7.103706</ele>
        <time>2026-03-14T19:04:49.073Z</time>
      </trkpt>
      <trkpt lat="51.210503" lon="4.285341">
        <ele>6.335984</ele>
        <time>2026-03-14T19:06:04.599Z</time>
      </trkpt>
      <trkpt lat="51.210455" lon="4.285638">
        <ele>6.286692</ele>
        <time>2026-03-14T19:06:08.616Z</time>
      </trkpt>
      <trkpt lat="51.210333" lon="4.286183">
        <ele>6.193684</ele>
        <time>2026-03-14T19:06:16.308Z</time>
      </trkpt>
      <trkpt lat="51.210302" lon="4.286390">
        <ele>6.159481</ele>
        <time>2026-03-14T19:06:19.134Z</time>
      </trkpt>
      <trkpt lat="51.210560" lon="4.286931">
        <ele>6.112854</ele>
        <time>2026-03-14T19:06:28.174Z</time>
      </trkpt>
      <trkpt lat="51.210639" lon="4.287084">
        <ele>6.099324</ele>
        <time>2026-03-14T19:06:30.847Z</time>
      </trkpt>
      <trkpt lat="51.210657" lon="4.287173">
        <ele>6.092942</ele>
        <time>2026-03-14T19:06:32.101Z</time>
      </trkpt>
      <trkpt lat="51.211040" lon="4.292299">
        <ele>5.983969</ele>
        <time>2026-03-14T19:07:43.789Z</time>
      </trkpt>
      <trkpt lat="51.211573" lon="4.298996">
        <ele>6.768516</ele>
        <time>2026-03-14T19:09:21.832Z</time>
      </trkpt>
      <trkpt lat="51.211779" lon="4.301829">
        <ele>6.748553</ele>
        <time>2026-03-14T19:10:00.874Z</time>
      </trkpt>
      <trkpt lat="51.211760" lon="4.302238">
        <ele>6.718903</ele>
        <time>2026-03-14T19:10:06.337Z</time>
      </trkpt>
      <trkpt lat="51.211724" lon="4.302486">
        <ele>6.700499</ele>
        <time>2026-03-14T19:10:09.731Z</time>
      </trkpt>
      <trkpt lat="51.211566" lon="4.303089">
        <ele>6.653246</ele>
        <time>2026-03-14T19:10:18.629Z</time>
      </trkpt>
      <trkpt lat="51.211527" lon="4.304016">
        <ele>6.738079</ele>
        <time>2026-03-14T19:10:31.698Z</time>
      </trkpt>
      <trkpt lat="51.211586" lon="4.306181">
        <ele>7.012424</ele>
        <time>2026-03-14T19:11:03.685Z</time>
      </trkpt>
      <trkpt lat="51.212086" lon="4.307827">
        <ele>7.055201</ele>
        <time>2026-03-14T19:11:29.490Z</time>
      </trkpt>
      <trkpt lat="51.212278" lon="4.308281">
        <ele>7.068010</ele>
        <time>2026-03-14T19:11:36.930Z</time>
      </trkpt>
      <trkpt lat="51.212503" lon="4.311102">
        <ele>7.017619</ele>
        <time>2026-03-14T19:12:15.998Z</time>
      </trkpt>
      <trkpt lat="51.212509" lon="4.311221">
        <ele>7.014597</ele>
        <time>2026-03-14T19:12:17.713Z</time>
      </trkpt>
      <trkpt lat="51.212462" lon="4.311335">
        <ele>7.011142</ele>
        <time>2026-03-14T19:12:19.645Z</time>
      </trkpt>
      <trkpt lat="51.211886" lon="4.311829">
        <ele>6.923702</ele>
        <time>2026-03-14T19:12:34.393Z</time>
      </trkpt>
      <trkpt lat="51.211938" lon="4.312012">
        <ele>6.903821</ele>
        <time>2026-03-14T19:12:37.281Z</time>
      </trkpt>
      <trkpt lat="51.212074" lon="4.312501">
        <ele>6.850886</ele>
        <time>2026-03-14T19:12:44.937Z</time>
      </trkpt>
      <trkpt lat="51.212105" lon="4.312629">
        <ele>6.837308</ele>
        <time>2026-03-14T19:12:46.853Z</time>
      </trkpt>
      <trkpt lat="51.212531" lon="4.312301">
        <ele>6.762609</ele>
        <time>2026-03-14T19:12:57.400Z</time>
      </trkpt>
      <trkpt lat="51.212579" lon="4.312318">
        <ele>6.754844</ele>
        <time>2026-03-14T19:12:58.502Z</time>
      </trkpt>
      <trkpt lat="51.212611" lon="4.312387">
        <ele>6.746350</ele>
        <time>2026-03-14T19:12:59.691Z</time>
      </trkpt>
      <trkpt lat="51.212691" lon="4.313435">
        <ele>6.494547</ele>
        <time>2026-03-14T19:13:14.002Z</time>
      </trkpt>
      <trkpt lat="51.213016" lon="4.317622">
        <ele>5.347560</ele>
        <time>2026-03-14T19:14:08.610Z</time>
      </trkpt>
      <trkpt lat="51.213278" lon="4.320996">
        <ele>4.699413</ele>
        <time>2026-03-14T19:14:53.389Z</time>
      </trkpt>
      <trkpt lat="51.213430" lon="4.320821">
        <ele>4.668320</ele>
        <time>2026-03-14T19:14:57.566Z</time>
      </trkpt>
      <trkpt lat="51.213866" lon="4.326203">
        <ele>4.733336</ele>
        <time>2026-03-14T19:16:17.230Z</time>
      </trkpt>
      <trkpt lat="51.214022" lon="4.327906">
        <ele>4.751419</ele>
        <time>2026-03-14T19:16:41.553Z</time>
      </trkpt>
      <trkpt lat="51.214096" lon="4.328373">
        <ele>4.756393</ele>
        <time>2026-03-14T19:16:48.455Z</time>
      </trkpt>
      <trkpt lat="51.214228" lon="4.329312">
        <ele>4.784854</ele>
        <time>2026-03-14T19:17:02.950Z</time>
      </trkpt>
      <trkpt lat="51.214292" lon="4.330141">
        <ele>4.969155</ele>
        <time>2026-03-14T19:17:16.053Z</time>
      </trkpt>
      <trkpt lat="51.214353" lon="4.330363">
        <ele>5.022644</ele>
        <time>2026-03-14T19:17:19.869Z</time>
      </trkpt>
      <trkpt lat="51.214216" lon="4.330547">
        <ele>5.085708</ele>
        <time>2026-03-14T19:17:24.355Z</time>
      </trkpt>
      <trkpt lat="51.214085" lon="4.330699">
        <ele>5.142752</ele>
        <time>2026-03-14T19:17:28.378Z</time>
      </trkpt>
      <trkpt lat="51.214038" lon="4.330751">
        <ele>5.162895</ele>
        <time>2026-03-14T19:17:29.803Z</time>
      </trkpt>
      <trkpt lat="51.214115" lon="4.331751">
        <ele>5.385204</ele>
        <time>2026-03-14T19:17:44.643Z</time>
      </trkpt>
      <trkpt lat="51.214089" lon="4.332215">
        <ele>5.418546</ele>
        <time>2026-03-14T19:17:51.440Z</time>
      </trkpt>
      <trkpt lat="51.214171" lon="4.332537">
        <ele>5.435406</ele>
        <time>2026-03-14T19:17:56.444Z</time>
      </trkpt>
      <trkpt lat="51.214189" lon="4.332724">
        <ele>5.444583</ele>
        <time>2026-03-14T19:17:59.142Z</time>
      </trkpt>
      <trkpt lat="51.214168" lon="4.333111">
        <ele>5.463426</ele>
        <time>2026-03-14T19:18:04.734Z</time>
      </trkpt>
      <trkpt lat="51.214136" lon="4.333225">
        <ele>5.469485</ele>
        <time>2026-03-14T19:18:06.546Z</time>
      </trkpt>
      <trkpt lat="51.214167" lon="4.333318">
        <ele>5.474595</ele>
        <time>2026-03-14T19:18:08.108Z</time>
      </trkpt>
      <trkpt lat="51.214227" lon="4.333586">
        <ele>5.488400</ele>
        <time>2026-03-14T19:18:12.308Z</time>
      </trkpt>
      <trkpt lat="51.214307" lon="4.334654">
        <ele>5.522672</ele>
        <time>2026-03-14T19:18:27.977Z</time>
      </trkpt>
      <trkpt lat="51.214575" lon="4.338012">
        <ele>4.328272</ele>
        <time>2026-03-14T19:19:12.877Z</time>
      </trkpt>
      <trkpt lat="51.214567" lon="4.338085">
        <ele>4.292115</ele>
        <time>2026-03-14T19:19:13.840Z</time>
      </trkpt>
      <trkpt lat="51.214617" lon="4.338214">
        <ele>4.218102</ele>
        <time>2026-03-14T19:19:15.706Z</time>
      </trkpt>
      <trkpt lat="51.214653" lon="4.338607">
        <ele>4.024321</ele>
        <time>2026-03-14T19:19:20.584Z</time>
      </trkpt>
      <trkpt lat="51.214669" lon="4.338882">
        <ele>3.889574</ele>
        <time>2026-03-14T19:19:23.932Z</time>
      </trkpt>
      <trkpt lat="51.214664" lon="4.338984">
        <ele>3.839657</ele>
        <time>2026-03-14T19:19:25.185Z</time>
      </trkpt>
      <trkpt lat="51.214619" lon="4.339048">
        <ele>3.792716</ele>
        <time>2026-03-14T19:19:26.334Z</time>
      </trkpt>
      <trkpt lat="51.214408" lon="4.339295">
        <ele>3.588924</ele>
        <time>2026-03-14T19:19:31.371Z</time>
      </trkpt>
      <trkpt lat="51.214290" lon="4.339432">
        <ele>3.475281</ele>
        <time>2026-03-14T19:19:34.213Z</time>
      </trkpt>
      <trkpt lat="51.213782" lon="4.340375">
        <ele>3.261177</ele>
        <time>2026-03-14T19:19:49.906Z</time>
      </trkpt>
      <trkpt lat="51.213656" lon="4.340600">
        <ele>3.287642</ele>
        <time>2026-03-14T19:19:53.807Z</time>
      </trkpt>
      <trkpt lat="51.213649" lon="4.340659">
        <ele>3.292908</ele>
        <time>2026-03-14T19:19:54.601Z</time>
      </trkpt>
      <trkpt lat="51.213669" lon="4.340716">
        <ele>3.298637</ele>
        <time>2026-03-14T19:19:55.477Z</time>
      </trkpt>
      <trkpt lat="51.213607" lon="4.340800">
        <ele>3.310021</ele>
        <time>2026-03-14T19:19:57.186Z</time>
      </trkpt>
      <trkpt lat="51.213376" lon="4.341112">
        <ele>3.352380</ele>
        <time>2026-03-14T19:20:06.089Z</time>
      </trkpt>
      <trkpt lat="51.212840" lon="4.341637">
        <ele>3.440412</ele>
        <time>2026-03-14T19:20:26.391Z</time>
      </trkpt>
      <trkpt lat="51.212872" lon="4.341692">
        <ele>3.446995</ele>
        <time>2026-03-14T19:20:27.721Z</time>
      </trkpt>
      <trkpt lat="51.212913" lon="4.341759">
        <ele>3.470664</ele>
        <time>2026-03-14T19:20:29.330Z</time>
      </trkpt>
      <trkpt lat="51.212882" lon="4.342208">
        <ele>3.805790</ele>
        <time>2026-03-14T19:20:37.394Z</time>
      </trkpt>
      <trkpt lat="51.212823" lon="4.342281">
        <ele>3.894196</ele>
        <time>2026-03-14T19:20:39.506Z</time>
      </trkpt>
      <trkpt lat="51.212770" lon="4.342306">
        <ele>3.959648</ele>
        <time>2026-03-14T19:20:41.065Z</time>
      </trkpt>
      <trkpt lat="51.212507" lon="4.342283">
        <ele>4.271590</ele>
        <time>2026-03-14T19:20:49.040Z</time>
      </trkpt>
      <trkpt lat="51.211912" lon="4.343162">
        <ele>5.231713</ele>
        <time>2026-03-14T19:21:11.567Z</time>
      </trkpt>
      <trkpt lat="51.211798" lon="4.343323">
        <ele>5.411979</ele>
        <time>2026-03-14T19:21:15.261Z</time>
      </trkpt>
      <trkpt lat="51.211627" lon="4.343526">
        <ele>5.589381</ele>
        <time>2026-03-14T19:21:20.329Z</time>
      </trkpt>
      <trkpt lat="51.211580" lon="4.343621">
        <ele>5.596115</ele>
        <time>2026-03-14T19:21:22.162Z</time>
      </trkpt>
      <trkpt lat="51.211320" lon="4.344320">
        <ele>5.641339</ele>
        <time>2026-03-14T19:21:34.258Z</time>
      </trkpt>
      <trkpt lat="51.211269" lon="4.344598">
        <ele>5.657454</ele>
        <time>2026-03-14T19:21:38.375Z</time>
      </trkpt>
      <trkpt lat="51.211180" lon="4.344590">
        <ele>5.665369</ele>
        <time>2026-03-14T19:21:40.469Z</time>
      </trkpt>
      <trkpt lat="51.211143" lon="4.344745">
        <ele>5.674597</ele>
        <time>2026-03-14T19:21:42.586Z</time>
      </trkpt>
      <trkpt lat="51.210865" lon="4.345296">
        <ele>5.713955</ele>
        <time>2026-03-14T19:21:51.626Z</time>
      </trkpt>
      <trkpt lat="51.210412" lon="4.346167">
        <ele>5.648132</ele>
        <time>2026-03-14T19:22:07.405Z</time>
      </trkpt>
      <trkpt lat="51.210260" lon="4.346408">
        <ele>5.594883</ele>
        <time>2026-03-14T19:22:12.374Z</time>
      </trkpt>
      <trkpt lat="51.210058" lon="4.346669">
        <ele>5.530289</ele>
        <time>2026-03-14T19:22:18.037Z</time>
      </trkpt>
      <trkpt lat="51.209852" lon="4.346939">
        <ele>5.464039</ele>
        <time>2026-03-14T19:22:25.583Z</time>
      </trkpt>
      <trkpt lat="51.209817" lon="4.346929">
        <ele>5.455202</ele>
        <time>2026-03-14T19:22:26.592Z</time>
      </trkpt>
      <trkpt lat="51.209574" lon="4.347147">
        <ele>5.385919</ele>
        <time>2026-03-14T19:22:34.386Z</time>
      </trkpt>
      <trkpt lat="51.209546" lon="4.347259">
        <ele>5.367142</ele>
        <time>2026-03-14T19:22:36.482Z</time>
      </trkpt>
      <trkpt lat="51.209611" lon="4.347220">
        <ele>5.349883</ele>
        <time>2026-03-14T19:22:37.982Z</time>
      </trkpt>
      <trkpt lat="51.209660" lon="4.347230">
        <ele>5.337605</ele>
        <time>2026-03-14T19:22:39.041Z</time>
      </trkpt>
      <trkpt lat="51.210191" lon="4.349120">
        <ele>4.455958</ele>
        <time>2026-03-14T19:23:05.376Z</time>
      </trkpt>
      <trkpt lat="51.210184" lon="4.349329">
        <ele>4.358501</ele>
        <time>2026-03-14T19:23:07.929Z</time>
      </trkpt>
      <trkpt lat="51.210135" lon="4.349415">
        <ele>4.304371</ele>
        <time>2026-03-14T19:23:09.335Z</time>
      </trkpt>
      <trkpt lat="51.209433" lon="4.349738">
        <ele>3.667408</ele>
        <time>2026-03-14T19:23:23.287Z</time>
      </trkpt>
      <trkpt lat="51.209825" lon="4.351297">
        <ele>2.513578</ele>
        <time>2026-03-14T19:23:43.216Z</time>
      </trkpt>
      <trkpt lat="51.209871" lon="4.351460">
        <ele>2.390787</ele>
        <time>2026-03-14T19:23:45.320Z</time>
      </trkpt>
      <trkpt lat="51.209760" lon="4.351580">
        <ele>2.243804</ele>
        <time>2026-03-14T19:23:47.882Z</time>
      </trkpt>
      <trkpt lat="51.209707" lon="4.351664">
        <ele>2.161919</ele>
        <time>2026-03-14T19:23:49.316Z</time>
      </trkpt>
      <trkpt lat="51.209377" lon="4.352524">
        <ele>1.818568</ele>
        <time>2026-03-14T19:24:01.731Z</time>
      </trkpt>
      <trkpt lat="51.209259" lon="4.352792">
        <ele>1.745350</ele>
        <time>2026-03-14T19:24:05.896Z</time>
      </trkpt>
      <trkpt lat="51.209182" lon="4.352848">
        <ele>1.715161</ele>
        <time>2026-03-14T19:24:07.652Z</time>
      </trkpt>
      <trkpt lat="51.207526" lon="4.353542">
        <ele>1.546138</ele>
        <time>2026-03-14T19:24:45.375Z</time>
      </trkpt>
      <trkpt lat="51.206769" lon="4.354045">
        <ele>1.789799</ele>
        <time>2026-03-14T19:25:05.015Z</time>
      </trkpt>
      <trkpt lat="51.206445" lon="4.354271">
        <ele>1.910810</ele>
        <time>2026-03-14T19:25:13.851Z</time>
      </trkpt>
      <trkpt lat="51.206280" lon="4.354294">
        <ele>2.012232</ele>
        <time>2026-03-14T19:25:18.076Z</time>
      </trkpt>
      <trkpt lat="51.206203" lon="4.354345">
        <ele>2.063282</ele>
        <time>2026-03-14T19:25:20.189Z</time>
      </trkpt>
      <trkpt lat="51.204741" lon="4.355562">
        <ele>2.972179</ele>
        <time>2026-03-14T19:26:01.385Z</time>
      </trkpt>
      <trkpt lat="51.204677" lon="4.355590">
        <ele>2.968164</ele>
        <time>2026-03-14T19:26:02.873Z</time>
      </trkpt>
      <trkpt lat="51.204271" lon="4.355558">
        <ele>2.943568</ele>
        <time>2026-03-14T19:26:11.676Z</time>
      </trkpt>
      <trkpt lat="51.204198" lon="4.355574">
        <ele>2.939109</ele>
        <time>2026-03-14T19:26:13.281Z</time>
      </trkpt>
      <trkpt lat="51.204083" lon="4.355658">
        <ele>2.931457</ele>
        <time>2026-03-14T19:26:15.948Z</time>
      </trkpt>
      <trkpt lat="51.204145" lon="4.355831">
        <ele>2.923901</ele>
        <time>2026-03-14T19:26:18.538Z</time>
      </trkpt>
      <trkpt lat="51.205884" lon="4.361560">
        <ele>2.720723</ele>
        <time>2026-03-14T19:27:44.837Z</time>
      </trkpt>
      <trkpt lat="51.206291" lon="4.362792">
        <ele>3.034091</ele>
        <time>2026-03-14T19:28:06.703Z</time>
      </trkpt>
      <trkpt lat="51.207259" lon="4.365606">
        <ele>3.796858</ele>
        <time>2026-03-14T19:28:56.786Z</time>
      </trkpt>
      <trkpt lat="51.207193" lon="4.365651">
        <ele>3.779468</ele>
        <time>2026-03-14T19:28:58.548Z</time>
      </trkpt>
      <trkpt lat="51.207107" lon="4.365765">
        <ele>3.752383</ele>
        <time>2026-03-14T19:29:01.272Z</time>
      </trkpt>
      <trkpt lat="51.207570" lon="4.367064">
        <ele>3.525521</ele>
        <time>2026-03-14T19:29:19.796Z</time>
      </trkpt>
      <trkpt lat="51.207648" lon="4.367143">
        <ele>3.472581</ele>
        <time>2026-03-14T19:29:21.518Z</time>
      </trkpt>
      <trkpt lat="51.207785" lon="4.367841">
        <ele>3.003394</ele>
        <time>2026-03-14T19:29:30.500Z</time>
      </trkpt>
      <trkpt lat="51.207888" lon="4.367926">
        <ele>2.884676</ele>
        <time>2026-03-14T19:29:32.744Z</time>
      </trkpt>
      <trkpt lat="51.207938" lon="4.367960">
        <ele>2.829031</ele>
        <time>2026-03-14T19:29:33.821Z</time>
      </trkpt>
      <trkpt lat="51.208207" lon="4.368686">
        <ele>2.287996</ele>
        <time>2026-03-14T19:29:43.956Z</time>
      </trkpt>
      <trkpt lat="51.208157" lon="4.368750">
        <ele>2.222376</ele>
        <time>2026-03-14T19:29:45.123Z</time>
      </trkpt>
      <trkpt lat="51.207841" lon="4.369095">
        <ele>1.830394</ele>
        <time>2026-03-14T19:29:52.811Z</time>
      </trkpt>
      <trkpt lat="51.207803" lon="4.369113">
        <ele>1.789810</ele>
        <time>2026-03-14T19:29:53.595Z</time>
      </trkpt>
      <trkpt lat="51.203950" lon="4.373203">
        <ele>3.040392</ele>
        <time>2026-03-14T19:31:42.601Z</time>
      </trkpt>
      <trkpt lat="51.203874" lon="4.373252">
        <ele>3.079553</ele>
        <time>2026-03-14T19:31:44.617Z</time>
      </trkpt>
      <trkpt lat="51.203490" lon="4.373646">
        <ele>3.297652</ele>
        <time>2026-03-14T19:31:56.045Z</time>
      </trkpt>
      <trkpt lat="51.203363" lon="4.373826">
        <ele>3.378799</ele>
        <time>2026-03-14T19:32:00.208Z</time>
      </trkpt>
      <trkpt lat="51.203487" lon="4.374161">
        <ele>3.491490</ele>
        <time>2026-03-14T19:32:06.674Z</time>
      </trkpt>
      <trkpt lat="51.203778" lon="4.374920">
        <ele>3.726618</ele>
        <time>2026-03-14T19:32:21.101Z</time>
      </trkpt>
      <trkpt lat="51.203759" lon="4.374968">
        <ele>3.741621</ele>
        <time>2026-03-14T19:32:21.992Z</time>
      </trkpt>
      <trkpt lat="51.203979" lon="4.375431">
        <ele>3.895167</ele>
        <time>2026-03-14T19:32:31.107Z</time>
      </trkpt>
      <trkpt lat="51.204129" lon="4.375578">
        <ele>3.969401</ele>
        <time>2026-03-14T19:32:35.308Z</time>
      </trkpt>
      <trkpt lat="51.204216" lon="4.375737">
        <ele>4.025181</ele>
        <time>2026-03-14T19:32:38.292Z</time>
      </trkpt>
      <trkpt lat="51.204606" lon="4.376704">
        <ele>4.210719</ele>
        <time>2026-03-14T19:32:54.798Z</time>
      </trkpt>
      <trkpt lat="51.204832" lon="4.377543">
        <ele>4.186334</ele>
        <time>2026-03-14T19:33:07.009Z</time>
      </trkpt>
      <trkpt lat="51.205660" lon="4.379584">
        <ele>4.226519</ele>
        <time>2026-03-14T19:33:40.394Z</time>
      </trkpt>
      <trkpt lat="51.206274" lon="4.380909">
        <ele>4.379189</ele>
        <time>2026-03-14T19:34:04.142Z</time>
      </trkpt>
      <trkpt lat="51.206632" lon="4.381617">
        <ele>4.626028</ele>
        <time>2026-03-14T19:34:17.832Z</time>
      </trkpt>
      <trkpt lat="51.206988" lon="4.382307">
        <ele>4.964741</ele>
        <time>2026-03-14T19:34:31.541Z</time>
      </trkpt>
      <trkpt lat="51.207831" lon="4.383885">
        <ele>5.926625</ele>
        <time>2026-03-14T19:35:04.420Z</time>
      </trkpt>
      <trkpt lat="51.207978" lon="4.384139">
        <ele>6.149268</ele>
        <time>2026-03-14T19:35:10.024Z</time>
      </trkpt>
      <trkpt lat="51.208129" lon="4.384385">
        <ele>6.371011</ele>
        <time>2026-03-14T19:35:15.823Z</time>
      </trkpt>
      <trkpt lat="51.208554" lon="4.385155">
        <ele>7.031744</ele>
        <time>2026-03-14T19:35:33.823Z</time>
      </trkpt>
      <trkpt lat="51.209075" lon="4.385963">
        <ele>7.194491</ele>
        <time>2026-03-14T19:35:52.699Z</time>
      </trkpt>
      <trkpt lat="51.209393" lon="4.386436">
        <ele>7.036166</ele>
        <time>2026-03-14T19:36:01.535Z</time>
      </trkpt>
      <trkpt lat="51.209777" lon="4.387010">
        <ele>6.844541</ele>
        <time>2026-03-14T19:36:11.585Z</time>
      </trkpt>
      <trkpt lat="51.210157" lon="4.387504">
        <ele>6.694332</ele>
        <time>2026-03-14T19:36:20.720Z</time>
      </trkpt>
      <trkpt lat="51.210487" lon="4.387908">
        <ele>6.707252</ele>
        <time>2026-03-14T19:36:29.424Z</time>
      </trkpt>
      <trkpt lat="51.211362" lon="4.388922">
        <ele>6.740842</ele>
        <time>2026-03-14T19:36:54.953Z</time>
      </trkpt>
      <trkpt lat="51.212061" lon="4.389714">
        <ele>6.843614</ele>
        <time>2026-03-14T19:37:15.807Z</time>
      </trkpt>
      <trkpt lat="51.212147" lon="4.389810">
        <ele>6.859613</ele>
        <time>2026-03-14T19:37:18.169Z</time>
      </trkpt>
      <trkpt lat="51.213076" lon="4.390772">
        <ele>7.023304</ele>
        <time>2026-03-14T19:37:42.440Z</time>
      </trkpt>
      <trkpt lat="51.213291" lon="4.390989">
        <ele>7.030211</ele>
        <time>2026-03-14T19:37:48.160Z</time>
      </trkpt>
      <trkpt lat="51.213448" lon="4.391143">
        <ele>7.035215</ele>
        <time>2026-03-14T19:37:52.236Z</time>
      </trkpt>
      <trkpt lat="51.214311" lon="4.391984">
        <ele>7.062672</ele>
        <time>2026-03-14T19:38:14.715Z</time>
      </trkpt>
      <trkpt lat="51.215064" lon="4.392673">
        <ele>7.310991</ele>
        <time>2026-03-14T19:38:34.593Z</time>
      </trkpt>
      <trkpt lat="51.215684" lon="4.393139">
        <ele>7.604673</ele>
        <time>2026-03-14T19:38:52.009Z</time>
      </trkpt>
      <trkpt lat="51.216371" lon="4.393632">
        <ele>7.754094</ele>
        <time>2026-03-14T19:39:09.857Z</time>
      </trkpt>
      <trkpt lat="51.216424" lon="4.393670">
        <ele>7.728568</ele>
        <time>2026-03-14T19:39:11.140Z</time>
      </trkpt>
      <trkpt lat="51.216571" lon="4.393650">
        <ele>7.663750</ele>
        <time>2026-03-14T19:39:14.463Z</time>
      </trkpt>
      <trkpt lat="51.216853" lon="4.393843">
        <ele>7.528949</ele>
        <time>2026-03-14T19:39:21.259Z</time>
      </trkpt>
      <trkpt lat="51.217790" lon="4.394518">
        <ele>7.077309</ele>
        <time>2026-03-14T19:39:48.470Z</time>
      </trkpt>
      <trkpt lat="51.218743" lon="4.395187">
        <ele>7.027063</ele>
        <time>2026-03-14T19:40:15.995Z</time>
      </trkpt>
      <trkpt lat="51.218775" lon="4.395210">
        <ele>7.026185</ele>
        <time>2026-03-14T19:40:16.893Z</time>
      </trkpt>
      <trkpt lat="51.218984" lon="4.395362">
        <ele>7.020444</ele>
        <time>2026-03-14T19:40:24.146Z</time>
      </trkpt>
      <trkpt lat="51.220043" lon="4.396090">
        <ele>7.836521</ele>
        <time>2026-03-14T19:41:03.570Z</time>
      </trkpt>
      <trkpt lat="51.221170" lon="4.396934">
        <ele>9.518498</ele>
        <time>2026-03-14T19:41:47.489Z</time>
      </trkpt>
      <trkpt lat="51.221361" lon="4.397070">
        <ele>9.654726</ele>
        <time>2026-03-14T19:41:54.437Z</time>
      </trkpt>
      <trkpt lat="51.221326" lon="4.397202">
        <ele>9.713206</ele>
        <time>2026-03-14T19:41:57.012Z</time>
      </trkpt>
      <trkpt lat="51.221305" lon="4.397285">
        <ele>9.749727</ele>
        <time>2026-03-14T19:41:58.440Z</time>
      </trkpt>
      <trkpt lat="51.221213" lon="4.397229">
        <ele>9.813862</ele>
        <time>2026-03-14T19:42:01.384Z</time>
      </trkpt>
      <trkpt lat="51.221068" lon="4.397797">
        <ele>10.064104</ele>
        <time>2026-03-14T19:42:12.685Z</time>
      </trkpt>
      <trkpt lat="51.221044" lon="4.397893">
        <ele>10.106275</ele>
        <time>2026-03-14T19:42:14.681Z</time>
      </trkpt>
      <trkpt lat="51.220862" lon="4.398618">
        <ele>10.424935</ele>
        <time>2026-03-14T19:42:26.380Z</time>
      </trkpt>
      <trkpt lat="51.220739" lon="4.399103">
        <ele>10.638412</ele>
        <time>2026-03-14T19:42:33.482Z</time>
      </trkpt>
      <trkpt lat="51.220651" lon="4.399176">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:35.720Z</time>
      </trkpt>
      <trkpt lat="51.220569" lon="4.399316">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:38.200Z</time>
      </trkpt>
      <trkpt lat="51.220604" lon="4.399692">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:42.837Z</time>
      </trkpt>
      <trkpt lat="51.220636" lon="4.400359">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:51.285Z</time>
      </trkpt>
      <trkpt lat="51.220641" lon="4.400457">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:52.486Z</time>
      </trkpt>
      <trkpt lat="51.220443" lon="4.400398">
        <ele>10.658937</ele>
        <time>2026-03-14T19:42:56.475Z</time>
      </trkpt>
    </trkseg>
  </trk>
</gpx>`;function Wk({startFromKM:o,distanceKM:a,maxDistanceInput:l,maxDistanceSetting:c,roundedMaxDistance:f,maxDistanceKM:k,setStartFromKM:y,setDistanceKM:x,setMaxDistanceInput:S,setMaxDistanceSetting:b,onClose:R,startFromLabel:E,distanceLabel:A}){const[W,V]=P.useState(o.toString()),[D,F]=P.useState(a.toString());P.useEffect(()=>{V(o.toString()),F(a.toString())},[o,a]);const K=()=>{const ee=parseInt(l,10);!isNaN(ee)&&ee>=10&&ee<=1e3?(b(ee),S(ee.toString())):S(c.toString());const ce=parseInt(W,10);!isNaN(ce)&&ce>=0&&ce<=f-10&&y(ce);const fe=parseInt(D,10);!isNaN(fe)&&fe>=10&&fe<=k&&x(fe),R()},q=ee=>{ee.key==="Enter"&&K()};return _.jsxs("div",{className:"space-y-6 py-4",children:[_.jsxs("div",{id:"settings-segment-inputs",className:"space-y-4 p-4 bg-muted/30 rounded-lg border",children:[_.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Segment selectie"}),_.jsxs("div",{className:"space-y-2",children:[_.jsx(os,{htmlFor:"modal-startKm",className:"text-sm",children:E}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("input",{id:"modal-startKm",type:"number",inputMode:"numeric",min:0,max:Math.max(0,f-10),step:1,value:W,onFocus:ee=>ee.target.select(),onChange:ee=>V(ee.target.value),onKeyDown:q,className:"flex-1 px-3 py-2 text-base border rounded focus:outline-none focus:ring-2 focus:ring-primary"}),_.jsx("span",{className:"text-sm text-muted-foreground w-8",children:"km"})]})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsx(os,{htmlFor:"modal-distanceKm",className:"text-sm",children:A}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("input",{id:"modal-distanceKm",type:"number",inputMode:"numeric",min:10,max:k,step:1,value:D,onFocus:ee=>ee.target.select(),onChange:ee=>F(ee.target.value),onKeyDown:q,className:"flex-1 px-3 py-2 text-base border rounded focus:outline-none focus:ring-2 focus:ring-primary"}),_.jsx("span",{className:"text-sm text-muted-foreground w-8",children:"km"})]})]})]}),_.jsxs("div",{id:"settings-max-distance",className:"space-y-3 p-4 bg-muted/30 rounded-lg border",children:[_.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Max afstand"}),_.jsx("p",{className:"text-xs text-muted-foreground",children:"Bovengrens voor de afstand slider"}),_.jsxs("div",{className:"flex items-center justify-center gap-4 bg-background rounded-full p-2",children:[_.jsx(Gr,{variant:"ghost",size:"icon",className:"h-10 w-10 rounded-full hover:bg-muted",onClick:()=>{const ee=parseInt(l,10),ce=Math.max(10,ee-10);S(ce.toString())},children:_.jsx(Gh,{className:"h-4 w-4"})}),_.jsxs("div",{className:"flex items-center gap-2 min-w-[100px] justify-center",children:[_.jsx("span",{className:"text-2xl font-bold",children:l}),_.jsx("span",{className:"text-base text-muted-foreground",children:"km"})]}),_.jsx(Gr,{variant:"ghost",size:"icon",className:"h-10 w-10 rounded-full hover:bg-muted",onClick:()=>{const ee=parseInt(l,10),ce=Math.min(1e3,ee+10);S(ce.toString())},children:_.jsx(Uh,{className:"h-4 w-4"})})]})]}),_.jsx(Gr,{onClick:K,className:"w-full",children:"Pas aan"})]})}const Xd="1.2.0",Hk=new Date().toISOString().split("T")[0];function Vk(){const[o,a]=P.useState(()=>{const ve=localStorage.getItem("language");return ve&&["nl","en","fr","es","de","no","pt"].includes(ve)?ve:"nl"}),l=J5(o),[c,f]=P.useState(null),[k,y]=P.useState(null),[x,S]=P.useState(0),[b,R]=P.useState(100),[E,A]=P.useState(null),[W,V]=P.useState([]),[D,F]=P.useState(null),[K,q]=P.useState({show:!1,message:""}),[ee,ce]=P.useState(!1),[fe,he]=P.useState(null),[de,Pe]=P.useState(null),[We,Le]=P.useState(()=>{const ve=localStorage.getItem("maxDistanceSetting");return ve?parseInt(ve,10):250}),[Ie,_e]=P.useState(()=>localStorage.getItem("maxDistanceSetting")||"250"),[Xe,je]=P.useState(!1),Ne=P.useRef(null);P.useEffect(()=>{Ud().then(ve=>{if(ve){he(ve.filename);const Fe=new DOMParser().parseFromString(ve.xml,"text/xml");y(Fe);try{const st=w1(Fe);A(st),S(ve.startFromKM??0),R(ve.distanceKM??Math.min(100,Math.floor(st.totalDistance)))}catch(st){console.error("Failed to preview cached route:",st)}}})},[]);const Se=ve=>{a(ve),localStorage.setItem("language",ve)};P.useEffect(()=>{localStorage.setItem("maxDistanceSetting",We.toString())},[We]);const be=ve=>{q({show:!0,message:ve}),setTimeout(()=>{q({show:!1,message:""})},3e3)},U=P.useMemo(()=>{if(!k||!E)return null;try{return _a(k,{startFromKM:x,distanceKM:b})}catch{return null}},[k,x,b,E]),ue=(ve,Ue)=>{const st=new DOMParser().parseFromString(ve,"text/xml");y(st),A(null),V([]),F(null),he(Ue)},ie=ve=>{var Fe;const Ue=(Fe=ve.target.files)==null?void 0:Fe[0];if(Ue){f(Ue),A(null),V([]),F(null);const st=new FileReader;st.onload=wn=>{var Sn;const mn=(Sn=wn.target)==null?void 0:Sn.result;ue(mn,Ue.name),P1(mn,Ue.name).catch(()=>{})},st.readAsText(Ue)}},j=async()=>{const ve=await Ud();if(ve){he(ve.filename);const Fe=new DOMParser().parseFromString(ve.xml,"text/xml");y(Fe),V([]),F(null);try{const st=w1(Fe);A(st),S(ve.startFromKM??0),R(ve.distanceKM??Math.min(100,Math.floor(st.totalDistance)))}catch(st){console.error("Failed to preview cached route:",st)}}},oe=()=>{Kd().catch(()=>{}),he(null),f(null),y(null),A(null),V([]),F(null)},Re=()=>{f(null),ue($d,"Voorbeeld Route: Oostende - Antwerpen"),P1($d,"Voorbeeld Route: Oostende - Antwerpen").catch(()=>{})},Me=()=>{f(null),y(null),A(null),V([]),F(null),S(0),R(100),Kd().catch(()=>{}),he(null),be("Route gewist")},te=()=>{if(k)try{const ve=w1(k);A(ve),S(0),R(Math.min(100,Math.floor(ve.totalDistance))),be("Preview geladen!")}catch(ve){be(ve instanceof Error?ve.message:"Er is een fout opgetreden")}},me=()=>{if(!(!k||!E))try{const ve=[];if(x===0){const Ue=_a(k,{startFromKM:0,distanceKM:b});ve.push(Ue);const Fe=E.totalDistance-Ue.endKm;Fe>.1&&ve.push(_a(k,{startFromKM:Ue.endKm,distanceKM:Fe}))}else{x>0&&ve.push(_a(k,{startFromKM:0,distanceKM:x}));const Ue=_a(k,{startFromKM:x,distanceKM:b});ve.push(Ue);const Fe=E.totalDistance-Ue.endKm;Fe>1&&ve.push(_a(k,{startFromKM:Ue.endKm,distanceKM:Fe}))}V(ve),F(null),be(`${ve.length} ${l.segmentsGenerated}`)}catch(ve){be(ve instanceof Error?ve.message:l.error)}};P.useEffect(()=>{k&&!E&&te()},[k]);const Ee=ve=>{const Ue=URL.createObjectURL(ve.blob),Fe=document.createElement("a");Fe.href=Ue,Fe.download=ve.fileName,document.body.appendChild(Fe),Fe.click(),document.body.removeChild(Fe),URL.revokeObjectURL(Ue),be(`${ve.fileName} ${l.downloaded}`)},Ae=(E==null?void 0:E.totalDistance)||0,De=Math.ceil(Ae),Ye=Math.max(10,Math.min(We,Math.floor(Ae-x)));return P.useEffect(()=>{E&&b>Ye&&R(Math.max(10,Ye))},[x,E,Ye,b]),P.useEffect(()=>{if(k&&fe){const Ue=new XMLSerializer().serializeToString(k);P1(Ue,fe,x,b).catch(()=>{})}},[x,b]),_.jsxs("div",{className:"min-h-screen bg-background p-2 md:p-4 pb-20",children:[_.jsx(a2,{show:K.show,children:K.message}),_.jsx("header",{className:"mb-4 md:mb-8 mt-2 md:mt-4 max-w-7xl mx-auto px-2",children:_.jsxs("div",{className:"flex flex-col",children:[_.jsx("div",{className:"lg:hidden mb-6",children:_.jsx("div",{className:"sticky top-4",children:_.jsxs("a",{href:"https://www.komoptegenkanker.be/acties/10k-voor-k",target:"_blank",rel:"noopener noreferrer",className:" hover:opacity-80 transition-opacity flex gap-4 items-end",title:"Kom op tegen Kanker - 10K voor K",children:[_.jsx("img",{src:"kotk_base_logo-mobile.svg",alt:"Kom op tegen Kanker"}),_.jsxs("span",{className:"italic text-sm block mt-2 text-amber-900",children:["#10k-voor-k ",_.jsx("br",{}),"#KomOpTegenKanker"]})]})})}),_.jsxs("div",{className:"flex justify-between items-start gap-4",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-foreground tracking-tight",children:l.title}),_.jsx("p",{className:"text-sm md:text-base text-muted-foreground mt-1",children:l.subtitle})]}),_.jsx(Fk,{currentLanguage:o,onLanguageChange:Se})]})]})}),_.jsxs("div",{className:"max-w-7xl mx-auto px-2 flex",children:[_.jsxs(s4,{defaultValue:"route",className:"w-full",children:[_.jsxs(M2,{className:"grid w-full grid-cols-2 mb-6",children:[_.jsx(N1,{value:"route",children:l.tabRoute}),_.jsx(N1,{value:"about",children:l.tabAbout})]}),_.jsxs(R1,{value:"route",className:"space-y-4",children:[_.jsx("input",{ref:Ne,type:"file",accept:".gpx",className:"hidden",onChange:ie}),!E&&_.jsxs(Ll,{children:[_.jsx(Nl,{children:_.jsxs(Rl,{className:"flex items-center gap-2",children:[_.jsx(zh,{className:"w-5 h-5 text-primary"}),l.step1Title]})}),_.jsxs(Il,{className:"space-y-4",children:[fe&&_.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-center justify-between gap-3",children:[_.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[_.jsx(p1,{className:"w-4 h-4 text-blue-600 shrink-0"}),_.jsxs("div",{className:"min-w-0",children:[_.jsx("p",{className:"text-xs text-blue-600 dark:text-blue-400 font-medium",children:"Vorige route opgeslagen"}),_.jsx("p",{className:"text-sm font-semibold text-blue-900 dark:text-blue-100 truncate",children:fe})]})]}),_.jsxs("div",{className:"flex gap-2 shrink-0",children:[_.jsx(Gr,{size:"sm",onClick:j,children:"Laad opnieuw"}),_.jsx(Gr,{size:"sm",variant:"ghost",className:"text-muted-foreground",onClick:oe,children:"Wis"})]})]}),_.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"relative border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-accent/50 transition-colors cursor-pointer",onClick:()=>{var ve;return(ve=Ne.current)==null?void 0:ve.click()},children:[_.jsx(id,{className:"w-8 h-8 mx-auto text-muted-foreground mb-2"}),_.jsx("p",{className:"text-sm text-muted-foreground",children:l.uploadPrompt})]}),_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"flex-1 border-t border-border"}),_.jsx("span",{className:"text-xs text-muted-foreground uppercase",children:"of"}),_.jsx("div",{className:"flex-1 border-t border-border"})]}),_.jsxs(Gr,{onClick:Re,variant:"outline",className:"w-full",children:[_.jsx(d1,{className:"w-4 h-4 mr-2"}),l.tryExample]})]}),c&&_.jsxs("div",{className:"bg-primary/10 text-primary p-3 rounded-lg text-sm flex items-center gap-2",children:[_.jsx(p1,{className:"w-4 h-4"}),_.jsx("span",{children:c.name})]})]})]}),E&&_.jsxs("div",{className:"flex items-center justify-between gap-3 px-1",children:[_.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground min-w-0",children:[_.jsx(p1,{className:"w-4 h-4 text-primary shrink-0"}),_.jsx("span",{className:"truncate font-medium",children:fe||(c==null?void 0:c.name)})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsxs(Gr,{size:"sm",variant:"outline",onClick:()=>{var ve;return(ve=Ne.current)==null?void 0:ve.click()},children:[_.jsx(id,{className:"w-4 h-4"}),"Andere route"]}),_.jsx(Gr,{size:"sm",variant:"ghost",onClick:Me,title:l.deleteRoute,children:_.jsx($h,{className:"w-4 h-4 text-destructive"})})]})]}),E&&_.jsxs(Ll,{className:"border-blue-200 bg-blue-50/50 dark:bg-blue-950/20",children:[_.jsx(Nl,{children:_.jsxs(Rl,{className:"flex items-center gap-2 text-blue-900 dark:text-blue-100",children:[_.jsx(d1,{className:"w-5 h-5"}),l.previewTitle]})}),_.jsx(Il,{children:_.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-muted-foreground",children:l.routeName}),_.jsx("p",{className:"font-semibold",children:E.originalName})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-muted-foreground",children:l.totalDistance}),_.jsxs("p",{className:"font-semibold",children:[E.totalDistance.toFixed(2)," km"]})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-muted-foreground",children:l.totalPoints}),_.jsx("p",{className:"font-semibold",children:E.totalPoints.toLocaleString()})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-muted-foreground",children:l.maxSelection}),_.jsxs("p",{className:"font-semibold",children:["0 - ",E.totalDistance.toFixed(0)," km"]})]})]})})]}),E&&_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[_.jsxs(Ll,{className:"border-orange-200 bg-orange-50/50 dark:bg-orange-950/20",children:[_.jsx(Nl,{children:_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsxs("div",{className:"flex-1",children:[_.jsxs(Rl,{className:"flex items-center gap-2 text-orange-900 dark:text-orange-100",children:[_.jsx(ad,{className:"w-5 h-5"}),l.step2Title]}),_.jsx(Tu,{children:l.step2Description})]}),_.jsxs(w5,{open:Xe,onOpenChange:je,children:[_.jsx(S5,{asChild:!0,children:_.jsx(Gr,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:_.jsx(Fh,{className:"h-4 w-4"})})}),_.jsxs(df,{className:"sm:max-w-md",children:[_.jsx(ff,{children:_.jsx(mf,{children:"Instellingen"})}),_.jsx(Wk,{startFromKM:x,distanceKM:b,maxDistanceInput:Ie,maxDistanceSetting:We,roundedMaxDistance:De,maxDistanceKM:Ye,setStartFromKM:S,setDistanceKM:R,setMaxDistanceInput:_e,setMaxDistanceSetting:Le,onClose:()=>je(!1),startFromLabel:l.startFromLabel,distanceLabel:l.distanceLabel})]})]})]})}),_.jsxs(Il,{className:"space-y-4",children:[_.jsxs("div",{className:"space-y-2",children:[_.jsxs("div",{className:"flex justify-between items-center",children:[_.jsx(os,{htmlFor:"startFromKM",className:"text-sm",children:l.startFromLabel}),_.jsxs("span",{className:"text-base font-semibold text-primary",children:[x," km"]})]}),_.jsx(bu,{id:"startFromKM",min:0,max:De,step:1,value:x,onValueChange:S})]}),_.jsxs("div",{className:"space-y-2",children:[_.jsxs("div",{className:"flex justify-between items-center",children:[_.jsx(os,{htmlFor:"distanceKM",className:"text-sm",children:l.distanceLabel}),_.jsxs("span",{className:"text-base font-semibold text-primary",children:[b," km"]})]}),_.jsx(bu,{id:"distanceKM",min:10,max:Ye,step:1,value:b,onValueChange:R})]})]})]}),_.jsxs(Ll,{id:"map-and-segments-card",className:"border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 h-fit lg:sticky lg:top-4",children:[_.jsxs(Nl,{children:[_.jsxs(Rl,{className:"flex items-center gap-2 text-amber-900 dark:text-amber-100",children:[_.jsx(ld,{className:"w-5 h-5"}),l.mapTitle]}),_.jsx(Tu,{children:l.mapDescription})]}),_.jsxs(Il,{className:"space-y-4",children:[_.jsx("div",{id:"map-viewer-container",className:"h-[400px] md:h-[500px] lg:h-[600px]",children:_.jsx(Q5,{allPoints:E.allPoints,selectedPoints:U==null?void 0:U.selectedPoints,startKm:x,endKm:x+b,onStartKmChange:ve=>{const Ue=Math.floor(E.totalDistance-10),Fe=Math.max(0,Math.min(ve,Ue));S(Fe)},onDistanceChange:ve=>{const Ue=Math.floor(E.totalDistance-x),Fe=Math.max(10,Math.min(ve,Ue));R(Fe)},pointerKm:de,onPointerKmChange:Pe,elevationProfile:U&&U.selectedPoints.length>0&&U.elevation?_.jsx("div",{className:"p-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-amber-200",children:_.jsx(Ld,{points:U.selectedPoints,startKm:x,className:"w-full",pointerKm:de,onPointerKmChange:Pe})}):void 0,translations:{openFullscreen:l.openFullscreen,closeFullscreen:l.closeFullscreen,startMarker:l.startMarker,endMarker:l.endMarker,pointerMarker:"Positie",noRouteData:l.noRouteData,dragToAdjust:l.dragToAdjust}})}),U&&U.selectedPoints.length>0&&U.elevation&&_.jsx("div",{id:"elevation-profile-section",className:"p-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-amber-200",children:_.jsx(Ld,{points:U.selectedPoints,startKm:x,className:"w-full",pointerKm:de,onPointerKmChange:Pe})}),E&&_.jsxs(Gr,{id:"generate-segments-button",onClick:me,className:"w-full h-12 text-base bg-amber-600 hover:bg-amber-700",size:"lg",children:[_.jsx(ad,{className:"w-5 h-5"}),x===0?l.generate2Segments:l.generate3Segments]}),W.length>0&&_.jsxs("div",{id:"all-segments-grid",children:[_.jsxs("div",{className:"mb-3",children:[_.jsxs("h3",{className:"font-semibold text-green-900 dark:text-green-100",children:[l.allSegmentsTitle," (",W.length,")"]}),_.jsx("p",{className:"text-sm text-muted-foreground",children:l.allSegmentsDescription})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:W.map((ve,Ue)=>_.jsxs("button",{onClick:()=>Ee(ve),onMouseEnter:()=>F(Ue),onMouseLeave:()=>F(null),className:`p-4 rounded-lg border-2 transition-all text-left ${D===Ue?"border-green-500 bg-green-100 dark:bg-green-900/50 shadow-lg scale-105":"border-green-200 bg-white dark:bg-green-950/20 hover:border-green-400"}`,children:[_.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_.jsxs("span",{className:"font-semibold text-green-900 dark:text-green-100",children:[l.segment," ",Ue+1]}),_.jsx(jh,{className:"w-4 h-4 text-green-600"})]}),_.jsxs("div",{className:"text-sm space-y-1",children:[_.jsxs("p",{className:"text-muted-foreground",children:[ve.startKm.toFixed(1)," - ",ve.endKm.toFixed(1)," km"]}),_.jsxs("p",{className:"font-medium",children:[ve.distance.toFixed(2)," km · ",ve.pointCount," ",l.points]}),ve.elevation&&_.jsxs("p",{className:"text-xs text-muted-foreground",children:["↗ ",ve.elevation.gain,"m · ↘ ",ve.elevation.loss,"m"]})]})]},Ue))})]})]})]})]}),_.jsxs(Ll,{className:"mt-8",children:[_.jsx(Nl,{className:"cursor-pointer hover:bg-accent/50 transition-colors",onClick:()=>ce(!ee),children:_.jsxs(Rl,{className:"flex items-center gap-2",children:[_.jsx(Ah,{className:"w-5 h-5"}),l.howItWorksTitle]})}),ee&&_.jsx(Il,{children:_.jsx(Tu,{className:"space-y-2",children:_.jsxs("ol",{className:"list-decimal pl-5 space-y-2",children:[_.jsx("li",{children:l.howItWorksStep1}),_.jsx("li",{children:l.howItWorksStep2}),_.jsx("li",{children:l.howItWorksStep3}),_.jsx("li",{children:l.howItWorksStep4}),_.jsx("li",{children:l.howItWorksStep5})]})})})]})]}),_.jsx(R1,{value:"about",className:"space-y-4",children:_.jsxs(Ll,{className:"border-4 border-blue-300 bg-gradient-to-br from-blue-50 via-amber-50 to-yellow-50 dark:from-blue-950/40 dark:via-amber-950/40 dark:to-yellow-950/40 shadow-xl",children:[_.jsx(Nl,{className:"pb-4",children:_.jsxs(Rl,{className:"flex items-center gap-3 text-2xl text-blue-900 dark:text-blue-100",children:[_.jsx(od,{className:"w-7 h-7 text-yellow-600 fill-yellow-600"}),l.aboutTitle]})}),_.jsxs(Il,{className:"space-y-6",children:[_.jsxs("div",{className:"space-y-3 bg-white/60 dark:bg-gray-900/20 p-4 rounded-lg",children:[_.jsx("h3",{className:"font-bold text-lg text-blue-900 dark:text-blue-100",children:l.aboutWhyTitle}),_.jsxs("div",{className:"space-y-2 text-sm",children:[_.jsxs("p",{children:["• ",l.aboutWhyText1]}),_.jsxs("p",{children:["• ",l.aboutWhyText2]}),_.jsxs("p",{children:["• ",l.aboutWhyText3]})]})]}),_.jsxs("div",{className:"space-y-4 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 dark:from-amber-950/30 dark:to-yellow-950/30 p-5 rounded-lg border-2 border-amber-200 dark:border-amber-800",children:[_.jsx("h3",{className:"font-bold text-xl text-amber-900 dark:text-amber-100 flex items-center gap-2",children:l.aboutStoryTitle}),_.jsxs("div",{className:"space-y-3 text-sm",children:[_.jsx("p",{className:"font-medium",children:l.aboutStoryText1}),_.jsx("p",{children:l.aboutStoryText2}),_.jsx("p",{className:"pt-2 font-semibold",children:l.aboutStoryText3}),_.jsx("p",{className:"font-bold text-blue-700 dark:text-blue-300 text-xl py-3 bg-white/50 dark:bg-gray-900/30 rounded-lg",children:l.aboutStoryText4}),_.jsx("p",{className:"text-sm font-medium bg-blue-50/80 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800",children:l.aboutJourneyDates}),_.jsx("div",{className:"bg-yellow-300/80 dark:bg-yellow-950/40 p-4 rounded-lg border-2 border-yellow-500 dark:border-yellow-700 mt-4",children:_.jsx("p",{className:"font-bold text-yellow-900 dark:text-yellow-100 text-lg flex items-center justify-center gap-2",children:l.aboutCancerText})}),_.jsx("p",{className:"italic font-bold text-lg text-amber-700 dark:text-amber-300 pt-3",children:l.aboutDedication})]})]}),_.jsxs("div",{className:"space-y-3 bg-white/60 dark:bg-gray-900/20 p-4 rounded-lg",children:[_.jsx("h3",{className:"font-bold text-lg text-blue-900 dark:text-blue-100 mb-3",children:l.aboutLinksTitle}),_.jsxs("div",{className:"space-y-2",children:[_.jsxs("a",{href:"https://www.komoot.com/collection/3148111/-tenkfork",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline transition-colors font-medium",children:[_.jsx(ld,{className:"w-5 h-5"}),l.aboutLinkKomoot,_.jsx(fu,{className:"w-4 h-4"})]}),_.jsxs("a",{href:"https://www.komoptegenkanker.be/acties/10k-voor-k",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 hover:underline transition-colors font-medium",children:[_.jsx(od,{className:"w-5 h-5 fill-current"}),l.aboutLinkKomOpTegenKanker,_.jsx(fu,{className:"w-4 h-4"})]}),_.jsxs("a",{href:"https://www.instagram.com/steven_verhoest?igsh=eHY0Y3BsOXd3dTdv&utm_source=qr",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 hover:underline transition-colors font-medium",children:[_.jsx(d1,{className:"w-5 h-5"}),l.aboutLinkInstagram,_.jsx(fu,{className:"w-4 h-4"})]})]})]}),_.jsxs("div",{className:"space-y-3 bg-gradient-to-r from-gray-50/80 to-blue-50/80 dark:from-gray-900/30 dark:to-blue-950/30 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700",children:[_.jsxs("h3",{className:"font-bold text-lg text-gray-900 dark:text-gray-100 flex items-center gap-2",children:[_.jsx(rd,{className:"w-5 h-5"}),l.aboutTechTitle]}),_.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:l.aboutTechText}),_.jsxs("div",{className:"space-y-2 pt-2",children:[_.jsxs("a",{href:"https://github.com/vervorm/gpx-cutter",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white hover:underline transition-colors font-medium",children:[_.jsx(Bh,{className:"w-5 h-5"}),l.aboutTechGithub,_.jsx(fu,{className:"w-4 h-4"})]}),_.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-300 dark:border-gray-600",children:[_.jsx(rd,{className:"w-4 h-4"}),_.jsx("span",{children:l.aboutTechClaude})]}),_.jsxs("div",{className:"text-xs text-gray-500 dark:text-gray-500 pt-2 text-center",children:["v",Xd]})]})]})]})]})})]}),_.jsx("div",{className:"hidden lg:block ml-6",children:_.jsx("div",{className:"sticky top-4",children:_.jsxs("a",{href:"https://www.komoptegenkanker.be/acties/10k-voor-k",target:"_blank",rel:"noopener noreferrer",className:"block hover:opacity-80 transition-opacity",title:"Kom op tegen Kanker - 10K voor K",children:[_.jsx("img",{src:"kom-op-tegen-kanker.svg",alt:"Kom op tegen Kanker",className:"w-40 rounded-lg shadow-lg"}),_.jsx("span",{className:"italic text-sm block mt-2 text-amber-900",children:"#10k-voor-k #KomOpTegenKanker"})]})})})]}),_.jsx("footer",{className:"text-center py-6 mt-8 border-t border-border",children:_.jsxs("p",{className:"text-xs text-muted-foreground font-mono",title:`Built on ${Hk}`,children:["v",Xd]})})]})}Mh.createRoot(document.getElementById("root")).render(_.jsx(P.StrictMode,{children:_.jsx(Vk,{})}));
