const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/install-dialog-B2RxDy66.js","assets/styles-Bc1Iw6Cm.js","assets/index-Cxu_mapz.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yo(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const ce={},qt=[],qe=()=>{},vs=()=>!1,Pn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bo=e=>e.startsWith("onUpdate:"),ge=Object.assign,_o=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ws=Object.prototype.hasOwnProperty,K=(e,t)=>ws.call(e,t),M=Array.isArray,kt=e=>Tn(e)==="[object Map]",ti=e=>Tn(e)==="[object Set]",U=e=>typeof e=="function",fe=e=>typeof e=="string",ft=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",ni=e=>(le(e)||U(e))&&U(e.then)&&U(e.catch),oi=Object.prototype.toString,Tn=e=>oi.call(e),Rs=e=>Tn(e).slice(8,-1),ri=e=>Tn(e)==="[object Object]",Co=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ut=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),En=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},As=/-(\w)/g,$e=En(e=>e.replace(As,(t,n)=>n?n.toUpperCase():"")),Ps=/\B([A-Z])/g,Ot=En(e=>e.replace(Ps,"-$1").toLowerCase()),xn=En(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=En(e=>e?`on${xn(e)}`:""),pt=(e,t)=>!Object.is(e,t),Un=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ii=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Es=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Yo;const si=()=>Yo||(Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vo(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=fe(o)?qs(o):vo(o);if(r)for(const i in r)t[i]=r[i]}return t}else if(fe(e)||le(e))return e}const xs=/;(?![^(]*\))/g,Is=/:([^]+)/,Ns=/\/\*[^]*?\*\//g;function qs(e){const t={};return e.replace(Ns,"").split(xs).forEach(n=>{if(n){const o=n.split(Is);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Tt(e){let t="";if(fe(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const o=Tt(e[n]);o&&(t+=o+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ls=yo(ks);function ai(e){return!!e||e===""}const li=e=>!!(e&&e.__v_isRef===!0),_n=e=>fe(e)?e:e==null?"":M(e)||le(e)&&(e.toString===oi||!U(e.toString))?li(e)?_n(e.value):JSON.stringify(e,ci,2):String(e),ci=(e,t)=>li(t)?ci(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],i)=>(n[Wn(o,i)+" =>"]=r,n),{})}:ti(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Wn(n))}:ft(t)?Wn(t):le(t)&&!M(t)&&!ri(t)?String(t):t,Wn=(e,t="")=>{var n;return ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Fs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ds(e,t=Me){t&&t.active&&t.effects.push(e)}function Os(){return Me}let Rt;class wo{constructor(t,n,o,r){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ds(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ht();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Ms(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),mt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=dt,n=Rt;try{return dt=!0,Rt=this,this._runnings++,Qo(this),this.fn()}finally{Jo(this),this._runnings--,Rt=n,dt=t}}stop(){this.active&&(Qo(this),Jo(this),this.onStop&&this.onStop(),this.active=!1)}}function Ms(e){return e.value}function Qo(e){e._trackId++,e._depsLength=0}function Jo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)di(e.deps[t],e);e.deps.length=e._depsLength}}function di(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let dt=!0,to=0;const ui=[];function ht(){ui.push(dt),dt=!1}function mt(){const e=ui.pop();dt=e===void 0?!0:e}function Ro(){to++}function Ao(){for(to--;!to&&no.length;)no.shift()()}function pi(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&di(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const no=[];function gi(e,t,n){Ro();for(const o of e.keys()){let r;o._dirtyLevel<t&&(r??(r=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(r??(r=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&no.push(o.scheduler)))}Ao()}const fi=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},oo=new WeakMap,At=Symbol(""),ro=Symbol("");function Pe(e,t,n){if(dt&&Rt){let o=oo.get(e);o||oo.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=fi(()=>o.delete(n))),pi(Rt,r)}}function Je(e,t,n,o,r,i){const s=oo.get(e);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(n==="length"&&M(e)){const a=Number(o);s.forEach((d,p)=>{(p==="length"||!ft(p)&&p>=a)&&l.push(d)})}else switch(n!==void 0&&l.push(s.get(n)),t){case"add":M(e)?Co(n)&&l.push(s.get("length")):(l.push(s.get(At)),kt(e)&&l.push(s.get(ro)));break;case"delete":M(e)||(l.push(s.get(At)),kt(e)&&l.push(s.get(ro)));break;case"set":kt(e)&&l.push(s.get(At));break}Ro();for(const a of l)a&&gi(a,4);Ao()}const Bs=yo("__proto__,__v_isRef,__isVue"),hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ft)),Zo=Gs();function Gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=j(this);for(let i=0,s=this.length;i<s;i++)Pe(o,"get",i+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ht(),Ro();const o=j(this)[t].apply(this,n);return Ao(),mt(),o}}),e}function Vs(e){ft(e)||(e=String(e));const t=j(this);return Pe(t,"has",e),t.hasOwnProperty(e)}class mi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(r?i?ea:_i:i?bi:yi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const s=M(t);if(!r){if(s&&K(Zo,n))return Reflect.get(Zo,n,o);if(n==="hasOwnProperty")return Vs}const l=Reflect.get(t,n,o);return(ft(n)?hi.has(n):Bs(n))||(r||Pe(t,"get",n),i)?l:Te(l)?s&&Co(n)?l:l.value:le(l)?r?vi(l):Nn(l):l}}class Si extends mi{constructor(t=!1){super(!1,t)}set(t,n,o,r){let i=t[n];if(!this._isShallow){const a=Yt(i);if(!Cn(o)&&!Yt(o)&&(i=j(i),o=j(o)),!M(t)&&Te(i)&&!Te(o))return a?!1:(i.value=o,!0)}const s=M(t)&&Co(n)?Number(n)<t.length:K(t,n),l=Reflect.set(t,n,o,r);return t===j(r)&&(s?pt(o,i)&&Je(t,"set",n,o):Je(t,"add",n,o)),l}deleteProperty(t,n){const o=K(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&Je(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!ft(n)||!hi.has(n))&&Pe(t,"has",n),o}ownKeys(t){return Pe(t,"iterate",M(t)?"length":At),Reflect.ownKeys(t)}}class Us extends mi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ws=new Si,Hs=new Us,Xs=new Si(!0);const Po=e=>e,In=e=>Reflect.getPrototypeOf(e);function an(e,t,n=!1,o=!1){e=e.__v_raw;const r=j(e),i=j(t);n||(pt(t,i)&&Pe(r,"get",t),Pe(r,"get",i));const{has:s}=In(r),l=o?Po:n?xo:Qt;if(s.call(r,t))return l(e.get(t));if(s.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,o=j(n),r=j(e);return t||(pt(e,r)&&Pe(o,"has",e),Pe(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function cn(e,t=!1){return e=e.__v_raw,!t&&Pe(j(e),"iterate",At),Reflect.get(e,"size",e)}function er(e){e=j(e);const t=j(this);return In(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function tr(e,t){t=j(t);const n=j(this),{has:o,get:r}=In(n);let i=o.call(n,e);i||(e=j(e),i=o.call(n,e));const s=r.call(n,e);return n.set(e,t),i?pt(t,s)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function nr(e){const t=j(this),{has:n,get:o}=In(t);let r=n.call(t,e);r||(e=j(e),r=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return r&&Je(t,"delete",e,void 0),i}function or(){const e=j(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function dn(e,t){return function(o,r){const i=this,s=i.__v_raw,l=j(s),a=t?Po:e?xo:Qt;return!e&&Pe(l,"iterate",At),s.forEach((d,p)=>o.call(r,a(d),a(p),i))}}function un(e,t,n){return function(...o){const r=this.__v_raw,i=j(r),s=kt(i),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,d=r[e](...o),p=n?Po:t?xo:Qt;return!t&&Pe(i,"iterate",a?ro:At),{next(){const{value:g,done:f}=d.next();return f?{value:g,done:f}:{value:l?[p(g[0]),p(g[1])]:p(g),done:f}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ks(){const e={get(i){return an(this,i)},get size(){return cn(this)},has:ln,add:er,set:tr,delete:nr,clear:or,forEach:dn(!1,!1)},t={get(i){return an(this,i,!1,!0)},get size(){return cn(this)},has:ln,add:er,set:tr,delete:nr,clear:or,forEach:dn(!1,!0)},n={get(i){return an(this,i,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:dn(!0,!1)},o={get(i){return an(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return ln.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=un(i,!1,!1),n[i]=un(i,!0,!1),t[i]=un(i,!1,!0),o[i]=un(i,!0,!0)}),[e,n,t,o]}const[zs,$s,js,Ys]=Ks();function To(e,t){const n=t?e?Ys:js:e?$s:zs;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(K(n,r)&&r in o?n:o,r,i)}const Qs={get:To(!1,!1)},Js={get:To(!1,!0)},Zs={get:To(!0,!1)};const yi=new WeakMap,bi=new WeakMap,_i=new WeakMap,ea=new WeakMap;function ta(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function na(e){return e.__v_skip||!Object.isExtensible(e)?0:ta(Rs(e))}function Nn(e){return Yt(e)?e:Eo(e,!1,Ws,Qs,yi)}function Ci(e){return Eo(e,!1,Xs,Js,bi)}function vi(e){return Eo(e,!0,Hs,Zs,_i)}function Eo(e,t,n,o,r){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const s=na(e);if(s===0)return e;const l=new Proxy(e,s===2?o:n);return r.set(e,l),l}function Wt(e){return Yt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function Cn(e){return!!(e&&e.__v_isShallow)}function wi(e){return e?!!e.__v_raw:!1}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function oa(e){return Object.isExtensible(e)&&ii(e,"__v_skip",!0),e}const Qt=e=>le(e)?Nn(e):e,xo=e=>le(e)?vi(e):e;class Ri{constructor(t,n,o,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wo(()=>t(this._value),()=>fn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=j(this);return(!t._cacheable||t.effect.dirty)&&pt(t._value,t._value=t.effect.run())&&fn(t,4),Ai(t),t.effect._dirtyLevel>=2&&fn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ra(e,t,n=!1){let o,r;const i=U(e);return i?(o=e,r=qe):(o=e.get,r=e.set),new Ri(o,r,i||!r,n)}function Ai(e){var t;dt&&Rt&&(e=j(e),pi(Rt,(t=e.dep)!=null?t:e.dep=fi(()=>e.dep=void 0,e instanceof Ri?e:void 0)))}function fn(e,t=4,n,o){e=j(e);const r=e.dep;r&&gi(r,t)}function Te(e){return!!(e&&e.__v_isRef===!0)}function Io(e){return Pi(e,!1)}function ia(e){return Pi(e,!0)}function Pi(e,t){return Te(e)?e:new sa(e,t)}class sa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:j(t),this._value=n?t:Qt(t)}get value(){return Ai(this),this._value}set value(t){const n=this.__v_isShallow||Cn(t)||Yt(t);t=n?t:j(t),pt(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Qt(t),fn(this,4))}}function ke(e){return Te(e)?e.value:e}const aa={get:(e,t,n)=>ke(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Te(r)&&!Te(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ti(e){return Wt(e)?e:new Proxy(e,aa)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ut(e,t,n,o){try{return o?e(...o):e()}catch(r){qn(r,t,n)}}function Fe(e,t,n,o){if(U(e)){const r=ut(e,t,n,o);return r&&ni(r)&&r.catch(i=>{qn(i,t,n)}),r}if(M(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Fe(e[i],t,n,o));return r}}function qn(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const d=i.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,s,l)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){ht(),ut(a,null,10,[e,s,l]),mt();return}}la(e,n,r,o)}function la(e,t,n,o=!0){console.error(e)}let Jt=!1,io=!1;const Ce=[];let Xe=0;const Lt=[];let it=null,Ct=0;const Ei=Promise.resolve();let No=null;function qo(e){const t=No||Ei;return e?t.then(this?e.bind(this):e):t}function ca(e){let t=Xe+1,n=Ce.length;for(;t<n;){const o=t+n>>>1,r=Ce[o],i=Zt(r);i<e||i===e&&r.pre?t=o+1:n=o}return t}function ko(e){(!Ce.length||!Ce.includes(e,Jt&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?Ce.push(e):Ce.splice(ca(e.id),0,e),xi())}function xi(){!Jt&&!io&&(io=!0,No=Ei.then(Ni))}function da(e){const t=Ce.indexOf(e);t>Xe&&Ce.splice(t,1)}function ua(e){M(e)?Lt.push(...e):(!it||!it.includes(e,e.allowRecurse?Ct+1:Ct))&&Lt.push(e),xi()}function rr(e,t,n=Jt?Xe+1:0){for(;n<Ce.length;n++){const o=Ce[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;Ce.splice(n,1),n--,o()}}}function Ii(e){if(Lt.length){const t=[...new Set(Lt)].sort((n,o)=>Zt(n)-Zt(o));if(Lt.length=0,it){it.push(...t);return}for(it=t,Ct=0;Ct<it.length;Ct++){const n=it[Ct];n.active!==!1&&n()}it=null,Ct=0}}const Zt=e=>e.id==null?1/0:e.id,pa=(e,t)=>{const n=Zt(e)-Zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ni(e){io=!1,Jt=!0,Ce.sort(pa);try{for(Xe=0;Xe<Ce.length;Xe++){const t=Ce[Xe];t&&t.active!==!1&&ut(t,null,14)}}finally{Xe=0,Ce.length=0,Ii(),Jt=!1,No=null,(Ce.length||Lt.length)&&Ni()}}function ga(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ce;let r=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in o){const p=`${s==="modelValue"?"model":s}Modifiers`,{number:g,trim:f}=o[p]||ce;f&&(r=n.map(m=>fe(m)?m.trim():m)),g&&(r=n.map(Ts))}let l,a=o[l=Vn(t)]||o[l=Vn($e(t))];!a&&i&&(a=o[l=Vn(Ot(t))]),a&&Fe(a,e,6,r);const d=o[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Fe(d,e,6,r)}}function qi(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!U(e)){const a=d=>{const p=qi(d,t,!0);p&&(l=!0,ge(s,p))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(le(e)&&o.set(e,null),null):(M(i)?i.forEach(a=>s[a]=null):ge(s,i),le(e)&&o.set(e,s),s)}function kn(e,t){return!e||!Pn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Ot(t))||K(e,t))}let Le=null,Ln=null;function vn(e){const t=Le;return Le=e,Ln=e&&e.type.__scopeId||null,t}function fa(e){Ln=e}function ha(){Ln=null}function ct(e,t=Le,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&yr(-1);const i=vn(t);let s;try{s=e(...r)}finally{vn(i),o._d&&yr(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function Hn(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:a,render:d,renderCache:p,props:g,data:f,setupState:m,ctx:x,inheritAttrs:E}=e,G=vn(e);let B,F;try{if(n.shapeFlag&4){const X=r||o,oe=X;B=He(d.call(oe,X,p,g,m,f,x)),F=l}else{const X=t;B=He(X.length>1?X(g,{attrs:l,slots:s,emit:a}):X(g,null)),F=t.props?l:ma(l)}}catch(X){zt.length=0,qn(X,e,1),B=ae(xe)}let N=B;if(F&&E!==!1){const X=Object.keys(F),{shapeFlag:oe}=N;X.length&&oe&7&&(i&&X.some(bo)&&(F=Sa(F,i)),N=gt(N,F,!1,!0))}return n.dirs&&(N=gt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),B=N,vn(G),B}const ma=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pn(n))&&((t||(t={}))[n]=e[n]);return t},Sa=(e,t)=>{const n={};for(const o in e)(!bo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function ya(e,t,n){const{props:o,children:r,component:i}=e,{props:s,children:l,patchFlag:a}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?ir(o,s,d):!!s;if(a&8){const p=t.dynamicProps;for(let g=0;g<p.length;g++){const f=p[g];if(s[f]!==o[f]&&!kn(d,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===s?!1:o?s?ir(o,s,d):!0:!!s;return!1}function ir(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(t[i]!==e[i]&&!kn(n,i))return!0}return!1}function ba({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const _a="components";function Lo(e,t){return va(_a,e,!0,t)||e}const Ca=Symbol.for("v-ndc");function va(e,t,n=!0,o=!1){const r=Le||be;if(r){const i=r.type;{const l=yl(i,!1);if(l&&(l===t||l===$e(t)||l===xn($e(t))))return i}const s=sr(r[e]||i[e],t)||sr(r.appContext[e],t);return!s&&o?i:s}}function sr(e,t){return e&&(e[t]||e[$e(t)]||e[xn($e(t))])}const wa=e=>e.__isSuspense;function Ra(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):ua(e)}function Fn(e,t,n=be,o=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{ht();const l=rn(n),a=Fe(t,n,e,s);return l(),mt(),a});return o?r.unshift(i):r.push(i),i}}const Ze=e=>(t,n=be)=>{(!Mn||e==="sp")&&Fn(e,(...o)=>t(...o),n)},Aa=Ze("bm"),Fo=Ze("m"),Pa=Ze("bu"),Ta=Ze("u"),ki=Ze("bum"),Li=Ze("um"),Ea=Ze("sp"),xa=Ze("rtg"),Ia=Ze("rtc");function Na(e,t=be){Fn("ec",e,t)}function St(e,t,n,o){const r=e.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let a=l.dir[o];a&&(ht(),Fe(a,n,8,[e.el,l,e,t]),mt())}}function ar(e,t,n,o){let r;const i=n;if(M(e)||fe(e)){r=new Array(e.length);for(let s=0,l=e.length;s<l;s++)r[s]=t(e[s],s,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=t(s+1,s,void 0,i)}else if(le(e))if(e[Symbol.iterator])r=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);r=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const d=s[l];r[l]=t(e[d],d,l,i)}}else r=[];return r}/*! #__NO_SIDE_EFFECTS__ */function pe(e,t){return U(e)?ge({name:e.name},t,{setup:e}):e}const hn=e=>!!e.type.__asyncLoader,so=e=>e?os(e)?Bo(e):so(e.parent):null,Ht=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>so(e.parent),$root:e=>so(e.root),$emit:e=>e.emit,$options:e=>Do(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ko(e.update)}),$nextTick:e=>e.n||(e.n=qo.bind(e.proxy)),$watch:e=>Qa.bind(e)}),Xn=(e,t)=>e!==ce&&!e.__isScriptSetup&&K(e,t),qa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:i,accessCache:s,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Xn(o,t))return s[t]=1,o[t];if(r!==ce&&K(r,t))return s[t]=2,r[t];if((d=e.propsOptions[0])&&K(d,t))return s[t]=3,i[t];if(n!==ce&&K(n,t))return s[t]=4,n[t];ao&&(s[t]=0)}}const p=Ht[t];let g,f;if(p)return t==="$attrs"&&Pe(e.attrs,"get",""),p(e);if((g=l.__cssModules)&&(g=g[t]))return g;if(n!==ce&&K(n,t))return s[t]=4,n[t];if(f=a.config.globalProperties,K(f,t))return f[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;return Xn(r,t)?(r[t]=n,!0):o!==ce&&K(o,t)?(o[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:i}},s){let l;return!!n[s]||e!==ce&&K(e,s)||Xn(t,s)||(l=i[0])&&K(l,s)||K(o,s)||K(Ht,s)||K(r.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function lr(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ao=!0;function ka(e){const t=Do(e),n=e.proxy,o=e.ctx;ao=!1,t.beforeCreate&&cr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:a,inject:d,created:p,beforeMount:g,mounted:f,beforeUpdate:m,updated:x,activated:E,deactivated:G,beforeDestroy:B,beforeUnmount:F,destroyed:N,unmounted:X,render:oe,renderTracked:O,renderTriggered:re,errorCaptured:me,serverPrefetch:W,expose:z,inheritAttrs:ie,components:q,directives:Y,filters:Se}=t;if(d&&La(d,o,null),s)for(const ne in s){const Q=s[ne];U(Q)&&(o[ne]=Q.bind(n))}if(r){const ne=r.call(n,n);le(ne)&&(e.data=Nn(ne))}if(ao=!0,i)for(const ne in i){const Q=i[ne],je=U(Q)?Q.bind(n,n):U(Q.get)?Q.get.bind(n,n):qe,et=!U(Q)&&U(Q.set)?Q.set.bind(n):qe,Ve=Ne({get:je,set:et});Object.defineProperty(o,ne,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Re=>Ve.value=Re})}if(l)for(const ne in l)Fi(l[ne],o,n,ne);if(a){const ne=U(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(Q=>{mn(Q,ne[Q])})}p&&cr(p,e,"c");function ue(ne,Q){M(Q)?Q.forEach(je=>ne(je.bind(n))):Q&&ne(Q.bind(n))}if(ue(Aa,g),ue(Fo,f),ue(Pa,m),ue(Ta,x),ue(Ja,E),ue(Za,G),ue(Na,me),ue(Ia,O),ue(xa,re),ue(ki,F),ue(Li,X),ue(Ea,W),M(z))if(z.length){const ne=e.exposed||(e.exposed={});z.forEach(Q=>{Object.defineProperty(ne,Q,{get:()=>n[Q],set:je=>n[Q]=je})})}else e.exposed||(e.exposed={});oe&&e.render===qe&&(e.render=oe),ie!=null&&(e.inheritAttrs=ie),q&&(e.components=q),Y&&(e.directives=Y)}function La(e,t,n=qe){M(e)&&(e=lo(e));for(const o in e){const r=e[o];let i;le(r)?"default"in r?i=ze(r.from||o,r.default,!0):i=ze(r.from||o):i=ze(r),Te(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[o]=i}}function cr(e,t,n){Fe(M(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fi(e,t,n,o){const r=o.includes(".")?$i(n,o):()=>n[o];if(fe(e)){const i=t[e];U(i)&&Kt(r,i)}else if(U(e))Kt(r,e.bind(n));else if(le(e))if(M(e))e.forEach(i=>Fi(i,t,n,o));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&Kt(r,i,e)}}function Do(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!o?a=t:(a={},r.length&&r.forEach(d=>wn(a,d,s,!0)),wn(a,t,s)),le(t)&&i.set(t,a),a}function wn(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&wn(e,i,n,!0),r&&r.forEach(s=>wn(e,s,n,!0));for(const s in t)if(!(o&&s==="expose")){const l=Fa[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const Fa={data:dr,props:ur,emits:ur,methods:Vt,computed:Vt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Vt,directives:Vt,watch:Oa,provide:dr,inject:Da};function dr(e,t){return t?e?function(){return ge(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Da(e,t){return Vt(lo(e),lo(t))}function lo(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ge(Object.create(null),e,t):t}function ur(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ge(Object.create(null),lr(e),lr(t??{})):t}function Oa(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const o in t)n[o]=ve(e[o],t[o]);return n}function Di(){return{app:null,config:{isNativeTag:vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ma=0;function Ba(e,t){return function(o,r=null){U(o)||(o=ge({},o)),r!=null&&!le(r)&&(r=null);const i=Di(),s=new WeakSet;let l=!1;const a=i.app={_uid:Ma++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:_l,get config(){return i.config},set config(d){},use(d,...p){return s.has(d)||(d&&U(d.install)?(s.add(d),d.install(a,...p)):U(d)&&(s.add(d),d(a,...p))),a},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),a},component(d,p){return p?(i.components[d]=p,a):i.components[d]},directive(d,p){return p?(i.directives[d]=p,a):i.directives[d]},mount(d,p,g){if(!l){const f=ae(o,r);return f.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&t?t(f,d):e(f,d,g),l=!0,a._container=d,d.__vue_app__=a,Bo(f.component)}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,p){return i.provides[d]=p,a},runWithContext(d){const p=Xt;Xt=a;try{return d()}finally{Xt=p}}};return a}}let Xt=null;function mn(e,t){if(be){let n=be.provides;const o=be.parent&&be.parent.provides;o===n&&(n=be.provides=Object.create(o)),n[e]=t}}function ze(e,t,n=!1){const o=be||Le;if(o||Xt){const r=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Xt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&U(t)?t.call(o&&o.proxy):t}}const Oi={},Mi=()=>Object.create(Oi),Bi=e=>Object.getPrototypeOf(e)===Oi;function Ga(e,t,n,o=!1){const r={},i=Mi();e.propsDefaults=Object.create(null),Gi(e,t,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);n?e.props=o?r:Ci(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Va(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=j(r),[a]=e.propsOptions;let d=!1;if((o||s>0)&&!(s&16)){if(s&8){const p=e.vnode.dynamicProps;for(let g=0;g<p.length;g++){let f=p[g];if(kn(e.emitsOptions,f))continue;const m=t[f];if(a)if(K(i,f))m!==i[f]&&(i[f]=m,d=!0);else{const x=$e(f);r[x]=co(a,l,x,m,e,!1)}else m!==i[f]&&(i[f]=m,d=!0)}}}else{Gi(e,t,r,i)&&(d=!0);let p;for(const g in l)(!t||!K(t,g)&&((p=Ot(g))===g||!K(t,p)))&&(a?n&&(n[g]!==void 0||n[p]!==void 0)&&(r[g]=co(a,l,g,void 0,e,!0)):delete r[g]);if(i!==l)for(const g in i)(!t||!K(t,g))&&(delete i[g],d=!0)}d&&Je(e.attrs,"set","")}function Gi(e,t,n,o){const[r,i]=e.propsOptions;let s=!1,l;if(t)for(let a in t){if(Ut(a))continue;const d=t[a];let p;r&&K(r,p=$e(a))?!i||!i.includes(p)?n[p]=d:(l||(l={}))[p]=d:kn(e.emitsOptions,a)||(!(a in o)||d!==o[a])&&(o[a]=d,s=!0)}if(i){const a=j(n),d=l||ce;for(let p=0;p<i.length;p++){const g=i[p];n[g]=co(r,a,g,d[g],e,!K(d,g))}}return s}function co(e,t,n,o,r,i){const s=e[n];if(s!=null){const l=K(s,"default");if(l&&o===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&U(a)){const{propsDefaults:d}=r;if(n in d)o=d[n];else{const p=rn(r);o=d[n]=a.call(null,t),p()}}else o=a}s[0]&&(i&&!l?o=!1:s[1]&&(o===""||o===Ot(n))&&(o=!0))}return o}function Vi(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const i=e.props,s={},l=[];let a=!1;if(!U(e)){const p=g=>{a=!0;const[f,m]=Vi(g,t,!0);ge(s,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!a)return le(e)&&o.set(e,qt),qt;if(M(i))for(let p=0;p<i.length;p++){const g=$e(i[p]);pr(g)&&(s[g]=ce)}else if(i)for(const p in i){const g=$e(p);if(pr(g)){const f=i[p],m=s[g]=M(f)||U(f)?{type:f}:ge({},f);if(m){const x=hr(Boolean,m.type),E=hr(String,m.type);m[0]=x>-1,m[1]=E<0||x<E,(x>-1||K(m,"default"))&&l.push(g)}}}const d=[s,l];return le(e)&&o.set(e,d),d}function pr(e){return e[0]!=="$"&&!Ut(e)}function gr(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function fr(e,t){return gr(e)===gr(t)}function hr(e,t){return M(t)?t.findIndex(n=>fr(n,e)):U(t)&&fr(t,e)?0:-1}const Ui=e=>e[0]==="_"||e==="$stable",Oo=e=>M(e)?e.map(He):[He(e)],Ua=(e,t,n)=>{if(t._n)return t;const o=ct((...r)=>Oo(t(...r)),n);return o._c=!1,o},Wi=(e,t,n)=>{const o=e._ctx;for(const r in e){if(Ui(r))continue;const i=e[r];if(U(i))t[r]=Ua(r,i,o);else if(i!=null){const s=Oo(i);t[r]=()=>s}}},Hi=(e,t)=>{const n=Oo(t);e.slots.default=()=>n},Wa=(e,t)=>{const n=e.slots=Mi();if(e.vnode.shapeFlag&32){const o=t._;o?(ge(n,t),ii(n,"_",o,!0)):Wi(t,n)}else t&&Hi(e,t)},Ha=(e,t,n)=>{const{vnode:o,slots:r}=e;let i=!0,s=ce;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(ge(r,t),!n&&l===1&&delete r._):(i=!t.$stable,Wi(t,r)),s=t}else t&&(Hi(e,t),s={default:1});if(i)for(const l in r)!Ui(l)&&s[l]==null&&delete r[l]};function uo(e,t,n,o,r=!1){if(M(e)){e.forEach((f,m)=>uo(f,t&&(M(t)?t[m]:t),n,o,r));return}if(hn(o)&&!r)return;const i=o.shapeFlag&4?Bo(o.component):o.el,s=r?null:i,{i:l,r:a}=e,d=t&&t.r,p=l.refs===ce?l.refs={}:l.refs,g=l.setupState;if(d!=null&&d!==a&&(fe(d)?(p[d]=null,K(g,d)&&(g[d]=null)):Te(d)&&(d.value=null)),U(a))ut(a,l,12,[s,p]);else{const f=fe(a),m=Te(a);if(f||m){const x=()=>{if(e.f){const E=f?K(g,a)?g[a]:p[a]:a.value;r?M(E)&&_o(E,i):M(E)?E.includes(i)||E.push(i):f?(p[a]=[i],K(g,a)&&(g[a]=p[a])):(a.value=[i],e.k&&(p[e.k]=a.value))}else f?(p[a]=s,K(g,a)&&(g[a]=s)):m&&(a.value=s,e.k&&(p[e.k]=s))};s?(x.id=-1,Ae(x,n)):x()}}}const Ae=Ra;function Xa(e){return Ka(e)}function Ka(e,t){const n=si();n.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:s,createText:l,createComment:a,setText:d,setElementText:p,parentNode:g,nextSibling:f,setScopeId:m=qe,insertStaticContent:x}=e,E=(c,u,h,b=null,S=null,v=null,R=void 0,C=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!wt(c,u)&&(b=y(c),Re(c,S,v,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:_,ref:T,shapeFlag:D}=u;switch(_){case On:G(c,u,h,b);break;case xe:B(c,u,h,b);break;case Sn:c==null&&F(u,h,b,R);break;case we:q(c,u,h,b,S,v,R,C,w);break;default:D&1?oe(c,u,h,b,S,v,R,C,w):D&6?Y(c,u,h,b,S,v,R,C,w):(D&64||D&128)&&_.process(c,u,h,b,S,v,R,C,w,k)}T!=null&&S&&uo(T,c&&c.ref,v,u||c,!u)},G=(c,u,h,b)=>{if(c==null)o(u.el=l(u.children),h,b);else{const S=u.el=c.el;u.children!==c.children&&d(S,u.children)}},B=(c,u,h,b)=>{c==null?o(u.el=a(u.children||""),h,b):u.el=c.el},F=(c,u,h,b)=>{[c.el,c.anchor]=x(c.children,u,h,b,c.el,c.anchor)},N=({el:c,anchor:u},h,b)=>{let S;for(;c&&c!==u;)S=f(c),o(c,h,b),c=S;o(u,h,b)},X=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=f(c),r(c),c=h;r(u)},oe=(c,u,h,b,S,v,R,C,w)=>{u.type==="svg"?R="svg":u.type==="math"&&(R="mathml"),c==null?O(u,h,b,S,v,R,C,w):W(c,u,S,v,R,C,w)},O=(c,u,h,b,S,v,R,C)=>{let w,_;const{props:T,shapeFlag:D,transition:L,dirs:V}=c;if(w=c.el=s(c.type,v,T&&T.is,T),D&8?p(w,c.children):D&16&&me(c.children,w,null,b,S,Kn(c,v),R,C),V&&St(c,null,b,"created"),re(w,c,c.scopeId,R,b),T){for(const se in T)se!=="value"&&!Ut(se)&&i(w,se,null,T[se],v,c.children,b,S,_e);"value"in T&&i(w,"value",null,T.value,v),(_=T.onVnodeBeforeMount)&&We(_,b,c)}V&&St(c,null,b,"beforeMount");const H=za(S,L);H&&L.beforeEnter(w),o(w,u,h),((_=T&&T.onVnodeMounted)||H||V)&&Ae(()=>{_&&We(_,b,c),H&&L.enter(w),V&&St(c,null,b,"mounted")},S)},re=(c,u,h,b,S)=>{if(h&&m(c,h),b)for(let v=0;v<b.length;v++)m(c,b[v]);if(S){let v=S.subTree;if(u===v){const R=S.vnode;re(c,R,R.scopeId,R.slotScopeIds,S.parent)}}},me=(c,u,h,b,S,v,R,C,w=0)=>{for(let _=w;_<c.length;_++){const T=c[_]=C?at(c[_]):He(c[_]);E(null,T,u,h,b,S,v,R,C)}},W=(c,u,h,b,S,v,R)=>{const C=u.el=c.el;let{patchFlag:w,dynamicChildren:_,dirs:T}=u;w|=c.patchFlag&16;const D=c.props||ce,L=u.props||ce;let V;if(h&&yt(h,!1),(V=L.onVnodeBeforeUpdate)&&We(V,h,u,c),T&&St(u,c,h,"beforeUpdate"),h&&yt(h,!0),_?z(c.dynamicChildren,_,C,h,b,Kn(u,S),v):R||Q(c,u,C,null,h,b,Kn(u,S),v,!1),w>0){if(w&16)ie(C,u,D,L,h,b,S);else if(w&2&&D.class!==L.class&&i(C,"class",null,L.class,S),w&4&&i(C,"style",D.style,L.style,S),w&8){const H=u.dynamicProps;for(let se=0;se<H.length;se++){const J=H[se],ye=D[J],Oe=L[J];(Oe!==ye||J==="value")&&i(C,J,ye,Oe,S,c.children,h,b,_e)}}w&1&&c.children!==u.children&&p(C,u.children)}else!R&&_==null&&ie(C,u,D,L,h,b,S);((V=L.onVnodeUpdated)||T)&&Ae(()=>{V&&We(V,h,u,c),T&&St(u,c,h,"updated")},b)},z=(c,u,h,b,S,v,R)=>{for(let C=0;C<u.length;C++){const w=c[C],_=u[C],T=w.el&&(w.type===we||!wt(w,_)||w.shapeFlag&70)?g(w.el):h;E(w,_,T,null,b,S,v,R,!0)}},ie=(c,u,h,b,S,v,R)=>{if(h!==b){if(h!==ce)for(const C in h)!Ut(C)&&!(C in b)&&i(c,C,h[C],null,R,u.children,S,v,_e);for(const C in b){if(Ut(C))continue;const w=b[C],_=h[C];w!==_&&C!=="value"&&i(c,C,_,w,R,u.children,S,v,_e)}"value"in b&&i(c,"value",h.value,b.value,R)}},q=(c,u,h,b,S,v,R,C,w)=>{const _=u.el=c?c.el:l(""),T=u.anchor=c?c.anchor:l("");let{patchFlag:D,dynamicChildren:L,slotScopeIds:V}=u;V&&(C=C?C.concat(V):V),c==null?(o(_,h,b),o(T,h,b),me(u.children||[],h,T,S,v,R,C,w)):D>0&&D&64&&L&&c.dynamicChildren?(z(c.dynamicChildren,L,h,S,v,R,C),(u.key!=null||S&&u===S.subTree)&&Xi(c,u,!0)):Q(c,u,h,T,S,v,R,C,w)},Y=(c,u,h,b,S,v,R,C,w)=>{u.slotScopeIds=C,c==null?u.shapeFlag&512?S.ctx.activate(u,h,b,R,w):Se(u,h,b,S,v,R,w):De(c,u,w)},Se=(c,u,h,b,S,v,R)=>{const C=c.component=pl(c,b,S);if(Dn(c)&&(C.ctx.renderer=k),fl(C),C.asyncDep){if(S&&S.registerDep(C,ue,R),!c.el){const w=C.subTree=ae(xe);B(null,w,u,h)}}else ue(C,c,u,h,S,v,R)},De=(c,u,h)=>{const b=u.component=c.component;if(ya(c,u,h))if(b.asyncDep&&!b.asyncResolved){ne(b,u,h);return}else b.next=u,da(b.update),b.effect.dirty=!0,b.update();else u.el=c.el,b.vnode=u},ue=(c,u,h,b,S,v,R)=>{const C=()=>{if(c.isMounted){let{next:T,bu:D,u:L,parent:V,vnode:H}=c;{const It=Ki(c);if(It){T&&(T.el=H.el,ne(c,T,R)),It.asyncDep.then(()=>{c.isUnmounted||C()});return}}let se=T,J;yt(c,!1),T?(T.el=H.el,ne(c,T,R)):T=H,D&&Un(D),(J=T.props&&T.props.onVnodeBeforeUpdate)&&We(J,V,T,H),yt(c,!0);const ye=Hn(c),Oe=c.subTree;c.subTree=ye,E(Oe,ye,g(Oe.el),y(Oe),c,S,v),T.el=ye.el,se===null&&ba(c,ye.el),L&&Ae(L,S),(J=T.props&&T.props.onVnodeUpdated)&&Ae(()=>We(J,V,T,H),S)}else{let T;const{el:D,props:L}=u,{bm:V,m:H,parent:se}=c,J=hn(u);if(yt(c,!1),V&&Un(V),!J&&(T=L&&L.onVnodeBeforeMount)&&We(T,se,u),yt(c,!0),D&&de){const ye=()=>{c.subTree=Hn(c),de(D,c.subTree,c,S,null)};J?u.type.__asyncLoader().then(()=>!c.isUnmounted&&ye()):ye()}else{const ye=c.subTree=Hn(c);E(null,ye,h,b,c,S,v),u.el=ye.el}if(H&&Ae(H,S),!J&&(T=L&&L.onVnodeMounted)){const ye=u;Ae(()=>We(T,se,ye),S)}(u.shapeFlag&256||se&&hn(se.vnode)&&se.vnode.shapeFlag&256)&&c.a&&Ae(c.a,S),c.isMounted=!0,u=h=b=null}},w=c.effect=new wo(C,qe,()=>ko(_),c.scope),_=c.update=()=>{w.dirty&&w.run()};_.id=c.uid,yt(c,!0),_()},ne=(c,u,h)=>{u.component=c;const b=c.vnode.props;c.vnode=u,c.next=null,Va(c,u.props,b,h),Ha(c,u.children,h),ht(),rr(c),mt()},Q=(c,u,h,b,S,v,R,C,w=!1)=>{const _=c&&c.children,T=c?c.shapeFlag:0,D=u.children,{patchFlag:L,shapeFlag:V}=u;if(L>0){if(L&128){et(_,D,h,b,S,v,R,C,w);return}else if(L&256){je(_,D,h,b,S,v,R,C,w);return}}V&8?(T&16&&_e(_,S,v),D!==_&&p(h,D)):T&16?V&16?et(_,D,h,b,S,v,R,C,w):_e(_,S,v,!0):(T&8&&p(h,""),V&16&&me(D,h,b,S,v,R,C,w))},je=(c,u,h,b,S,v,R,C,w)=>{c=c||qt,u=u||qt;const _=c.length,T=u.length,D=Math.min(_,T);let L;for(L=0;L<D;L++){const V=u[L]=w?at(u[L]):He(u[L]);E(c[L],V,h,null,S,v,R,C,w)}_>T?_e(c,S,v,!0,!1,D):me(u,h,b,S,v,R,C,w,D)},et=(c,u,h,b,S,v,R,C,w)=>{let _=0;const T=u.length;let D=c.length-1,L=T-1;for(;_<=D&&_<=L;){const V=c[_],H=u[_]=w?at(u[_]):He(u[_]);if(wt(V,H))E(V,H,h,null,S,v,R,C,w);else break;_++}for(;_<=D&&_<=L;){const V=c[D],H=u[L]=w?at(u[L]):He(u[L]);if(wt(V,H))E(V,H,h,null,S,v,R,C,w);else break;D--,L--}if(_>D){if(_<=L){const V=L+1,H=V<T?u[V].el:b;for(;_<=L;)E(null,u[_]=w?at(u[_]):He(u[_]),h,H,S,v,R,C,w),_++}}else if(_>L)for(;_<=D;)Re(c[_],S,v,!0),_++;else{const V=_,H=_,se=new Map;for(_=H;_<=L;_++){const Ee=u[_]=w?at(u[_]):He(u[_]);Ee.key!=null&&se.set(Ee.key,_)}let J,ye=0;const Oe=L-H+1;let It=!1,zo=0;const Mt=new Array(Oe);for(_=0;_<Oe;_++)Mt[_]=0;for(_=V;_<=D;_++){const Ee=c[_];if(ye>=Oe){Re(Ee,S,v,!0);continue}let Ue;if(Ee.key!=null)Ue=se.get(Ee.key);else for(J=H;J<=L;J++)if(Mt[J-H]===0&&wt(Ee,u[J])){Ue=J;break}Ue===void 0?Re(Ee,S,v,!0):(Mt[Ue-H]=_+1,Ue>=zo?zo=Ue:It=!0,E(Ee,u[Ue],h,null,S,v,R,C,w),ye++)}const $o=It?$a(Mt):qt;for(J=$o.length-1,_=Oe-1;_>=0;_--){const Ee=H+_,Ue=u[Ee],jo=Ee+1<T?u[Ee+1].el:b;Mt[_]===0?E(null,Ue,h,jo,S,v,R,C,w):It&&(J<0||_!==$o[J]?Ve(Ue,h,jo,2):J--)}}},Ve=(c,u,h,b,S=null)=>{const{el:v,type:R,transition:C,children:w,shapeFlag:_}=c;if(_&6){Ve(c.component.subTree,u,h,b);return}if(_&128){c.suspense.move(u,h,b);return}if(_&64){R.move(c,u,h,k);return}if(R===we){o(v,u,h);for(let D=0;D<w.length;D++)Ve(w[D],u,h,b);o(c.anchor,u,h);return}if(R===Sn){N(c,u,h);return}if(b!==2&&_&1&&C)if(b===0)C.beforeEnter(v),o(v,u,h),Ae(()=>C.enter(v),S);else{const{leave:D,delayLeave:L,afterLeave:V}=C,H=()=>o(v,u,h),se=()=>{D(v,()=>{H(),V&&V()})};L?L(v,H,se):se()}else o(v,u,h)},Re=(c,u,h,b=!1,S=!1)=>{const{type:v,props:R,ref:C,children:w,dynamicChildren:_,shapeFlag:T,patchFlag:D,dirs:L,memoIndex:V}=c;if(D===-2&&(S=!1),C!=null&&uo(C,null,h,c,!0),V!=null&&(u.renderCache[V]=void 0),T&256){u.ctx.deactivate(c);return}const H=T&1&&L,se=!hn(c);let J;if(se&&(J=R&&R.onVnodeBeforeUnmount)&&We(J,u,c),T&6)sn(c.component,h,b);else{if(T&128){c.suspense.unmount(h,b);return}H&&St(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,h,k,b):_&&(v!==we||D>0&&D&64)?_e(_,u,h,!1,!0):(v===we&&D&384||!S&&T&16)&&_e(w,u,h),b&&Et(c)}(se&&(J=R&&R.onVnodeUnmounted)||H)&&Ae(()=>{J&&We(J,u,c),H&&St(c,null,u,"unmounted")},h)},Et=c=>{const{type:u,el:h,anchor:b,transition:S}=c;if(u===we){xt(h,b);return}if(u===Sn){X(c);return}const v=()=>{r(h),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(c.shapeFlag&1&&S&&!S.persisted){const{leave:R,delayLeave:C}=S,w=()=>R(h,v);C?C(c.el,v,w):w()}else v()},xt=(c,u)=>{let h;for(;c!==u;)h=f(c),r(c),c=h;r(u)},sn=(c,u,h)=>{const{bum:b,scope:S,update:v,subTree:R,um:C,m:w,a:_}=c;mr(w),mr(_),b&&Un(b),S.stop(),v&&(v.active=!1,Re(R,c,u,h)),C&&Ae(C,u),Ae(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},_e=(c,u,h,b=!1,S=!1,v=0)=>{for(let R=v;R<c.length;R++)Re(c[R],u,h,b,S)},y=c=>c.shapeFlag&6?y(c.component.subTree):c.shapeFlag&128?c.suspense.next():f(c.anchor||c.el);let P=!1;const A=(c,u,h)=>{c==null?u._vnode&&Re(u._vnode,null,null,!0):E(u._vnode||null,c,u,null,null,null,h),P||(P=!0,rr(),Ii(),P=!1),u._vnode=c},k={p:E,um:Re,m:Ve,r:Et,mt:Se,mc:me,pc:Q,pbc:z,n:y,o:e};let Z,de;return{render:A,hydrate:Z,createApp:Ba(A,Z)}}function Kn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function za(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xi(e,t,n=!1){const o=e.children,r=t.children;if(M(o)&&M(r))for(let i=0;i<o.length;i++){const s=o[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=at(r[i]),l.el=s.el),!n&&l.patchFlag!==-2&&Xi(s,l)),l.type===On&&(l.el=s.el)}}function $a(e){const t=e.slice(),n=[0];let o,r,i,s,l;const a=e.length;for(o=0;o<a;o++){const d=e[o];if(d!==0){if(r=n[n.length-1],e[r]<d){t[o]=r,n.push(o);continue}for(i=0,s=n.length-1;i<s;)l=i+s>>1,e[n[l]]<d?i=l+1:s=l;d<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function Ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ki(t)}function mr(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const ja=Symbol.for("v-scx"),Ya=()=>ze(ja),pn={};function Kt(e,t,n){return zi(e,t,n)}function zi(e,t,{immediate:n,deep:o,flush:r,once:i,onTrack:s,onTrigger:l}=ce){if(t&&i){const O=t;t=(...re)=>{O(...re),oe()}}const a=be,d=O=>o===!0?O:vt(O,o===!1?1:void 0);let p,g=!1,f=!1;if(Te(e)?(p=()=>e.value,g=Cn(e)):Wt(e)?(p=()=>d(e),g=!0):M(e)?(f=!0,g=e.some(O=>Wt(O)||Cn(O)),p=()=>e.map(O=>{if(Te(O))return O.value;if(Wt(O))return d(O);if(U(O))return ut(O,a,2)})):U(e)?t?p=()=>ut(e,a,2):p=()=>(m&&m(),Fe(e,a,3,[x])):p=qe,t&&o){const O=p;p=()=>vt(O())}let m,x=O=>{m=N.onStop=()=>{ut(O,a,4),m=N.onStop=void 0}},E;if(Mn)if(x=qe,t?n&&Fe(t,a,3,[p(),f?[]:void 0,x]):p(),r==="sync"){const O=Ya();E=O.__watcherHandles||(O.__watcherHandles=[])}else return qe;let G=f?new Array(e.length).fill(pn):pn;const B=()=>{if(!(!N.active||!N.dirty))if(t){const O=N.run();(o||g||(f?O.some((re,me)=>pt(re,G[me])):pt(O,G)))&&(m&&m(),Fe(t,a,3,[O,G===pn?void 0:f&&G[0]===pn?[]:G,x]),G=O)}else N.run()};B.allowRecurse=!!t;let F;r==="sync"?F=B:r==="post"?F=()=>Ae(B,a&&a.suspense):(B.pre=!0,a&&(B.id=a.uid),F=()=>ko(B));const N=new wo(p,qe,F),X=Os(),oe=()=>{N.stop(),X&&_o(X.effects,N)};return t?n?B():G=N.run():r==="post"?Ae(N.run.bind(N),a&&a.suspense):N.run(),E&&E.push(oe),oe}function Qa(e,t,n){const o=this.proxy,r=fe(e)?e.includes(".")?$i(o,e):()=>o[e]:e.bind(o,o);let i;U(t)?i=t:(i=t.handler,n=t);const s=rn(this),l=zi(r,i.bind(o),n);return s(),l}function $i(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function vt(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Te(e))vt(e.value,t,n);else if(M(e))for(let o=0;o<e.length;o++)vt(e[o],t,n);else if(ti(e)||kt(e))e.forEach(o=>{vt(o,t,n)});else if(ri(e)){for(const o in e)vt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&vt(e[o],t,n)}return e}const Dn=e=>e.type.__isKeepAlive;function Ja(e,t){ji(e,"a",t)}function Za(e,t){ji(e,"da",t)}function ji(e,t,n=be){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Fn(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Dn(r.parent.vnode)&&el(o,t,n,r),r=r.parent}}function el(e,t,n,o){const r=Fn(t,e,o,!0);Li(()=>{_o(o[t],r)},n)}const st=Symbol("_leaveCb"),gn=Symbol("_enterCb");function tl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fo(()=>{e.isMounted=!0}),ki(()=>{e.isUnmounting=!0}),e}const Ie=[Function,Array],Yi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},Qi=e=>{const t=e.subTree;return t.component?Qi(t.component):t},nl={name:"BaseTransition",props:Yi,setup(e,{slots:t}){const n=gl(),o=tl();return()=>{const r=t.default&&Zi(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const f of r)if(f.type!==xe){i=f;break}}const s=j(e),{mode:l}=s;if(o.isLeaving)return zn(i);const a=Sr(i);if(!a)return zn(i);let d=po(a,s,o,n,f=>d=f);Rn(a,d);const p=n.subTree,g=p&&Sr(p);if(g&&g.type!==xe&&!wt(a,g)&&Qi(n).type!==xe){const f=po(g,s,o,n);if(Rn(g,f),l==="out-in"&&a.type!==xe)return o.isLeaving=!0,f.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},zn(i);l==="in-out"&&a.type!==xe&&(f.delayLeave=(m,x,E)=>{const G=Ji(o,g);G[String(g.key)]=g,m[st]=()=>{x(),m[st]=void 0,delete d.delayedLeave},d.delayedLeave=E})}return i}}},ol=nl;function Ji(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function po(e,t,n,o,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:p,onEnterCancelled:g,onBeforeLeave:f,onLeave:m,onAfterLeave:x,onLeaveCancelled:E,onBeforeAppear:G,onAppear:B,onAfterAppear:F,onAppearCancelled:N}=t,X=String(e.key),oe=Ji(n,e),O=(W,z)=>{W&&Fe(W,o,9,z)},re=(W,z)=>{const ie=z[1];O(W,z),M(W)?W.every(q=>q.length<=1)&&ie():W.length<=1&&ie()},me={mode:s,persisted:l,beforeEnter(W){let z=a;if(!n.isMounted)if(i)z=G||a;else return;W[st]&&W[st](!0);const ie=oe[X];ie&&wt(e,ie)&&ie.el[st]&&ie.el[st](),O(z,[W])},enter(W){let z=d,ie=p,q=g;if(!n.isMounted)if(i)z=B||d,ie=F||p,q=N||g;else return;let Y=!1;const Se=W[gn]=De=>{Y||(Y=!0,De?O(q,[W]):O(ie,[W]),me.delayedLeave&&me.delayedLeave(),W[gn]=void 0)};z?re(z,[W,Se]):Se()},leave(W,z){const ie=String(e.key);if(W[gn]&&W[gn](!0),n.isUnmounting)return z();O(f,[W]);let q=!1;const Y=W[st]=Se=>{q||(q=!0,z(),Se?O(E,[W]):O(x,[W]),W[st]=void 0,oe[ie]===e&&delete oe[ie])};oe[ie]=e,m?re(m,[W,Y]):Y()},clone(W){const z=po(W,t,n,o,r);return r&&r(z),z}};return me}function zn(e){if(Dn(e))return e=gt(e),e.children=null,e}function Sr(e){if(!Dn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&U(n.default))return n.default()}}function Rn(e,t){e.shapeFlag&6&&e.component?Rn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zi(e,t=!1,n){let o=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===we?(s.patchFlag&128&&r++,o=o.concat(Zi(s.children,t,l))):(t||s.type!==xe)&&o.push(l!=null?gt(s,{key:l}):s)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}const rl=e=>e.__isTeleport,we=Symbol.for("v-fgt"),On=Symbol.for("v-txt"),xe=Symbol.for("v-cmt"),Sn=Symbol.for("v-stc"),zt=[];let Be=null;function $(e=!1){zt.push(Be=e?null:[])}function il(){zt.pop(),Be=zt[zt.length-1]||null}let en=1;function yr(e){en+=e}function es(e){return e.dynamicChildren=en>0?Be||qt:null,il(),en>0&&Be&&Be.push(e),e}function te(e,t,n,o,r,i){return es(I(e,t,n,o,r,i,!0))}function ts(e,t,n,o,r){return es(ae(e,t,n,o,r,!0))}function go(e){return e?e.__v_isVNode===!0:!1}function wt(e,t){return e.type===t.type&&e.key===t.key}const ns=({key:e})=>e??null,yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||Te(e)||U(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function I(e,t=null,n=null,o=0,r=null,i=e===we?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ns(t),ref:t&&yn(t),scopeId:Ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Le};return l?(Mo(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),en>0&&!s&&Be&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Be.push(a),a}const ae=sl;function sl(e,t=null,n=null,o=0,r=null,i=!1){if((!e||e===Ca)&&(e=xe),go(e)){const l=gt(e,t,!0);return n&&Mo(l,n),en>0&&!i&&Be&&(l.shapeFlag&6?Be[Be.indexOf(e)]=l:Be.push(l)),l.patchFlag=-2,l}if(bl(e)&&(e=e.__vccOpts),t){t=al(t);let{class:l,style:a}=t;l&&!fe(l)&&(t.class=Tt(l)),le(a)&&(wi(a)&&!M(a)&&(a=ge({},a)),t.style=vo(a))}const s=fe(e)?1:wa(e)?128:rl(e)?64:le(e)?4:U(e)?2:0;return I(e,t,n,o,r,s,i,!0)}function al(e){return e?wi(e)||Bi(e)?ge({},e):e:null}function gt(e,t,n=!1,o=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:a}=e,d=t?cl(r||{},t):r,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ns(d),ref:t&&t.ref?n&&i?M(i)?i.concat(yn(t)):[i,yn(t)]:yn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==we?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&Rn(p,a.clone(p)),p}function Pt(e=" ",t=0){return ae(On,null,e,t)}function he(e,t){const n=ae(Sn,null,e);return n.staticCount=t,n}function ll(e="",t=!1){return t?($(),ts(xe,null,e)):ae(xe,null,e)}function He(e){return e==null||typeof e=="boolean"?ae(xe):M(e)?ae(we,null,e.slice()):typeof e=="object"?at(e):ae(On,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function Mo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Mo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Bi(t)?t._ctx=Le:r===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),o&64?(n=16,t=[Pt(t)]):n=8);e.children=t,e.shapeFlag|=n}function cl(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Tt([t.class,o.class]));else if(r==="style")t.style=vo([t.style,o.style]);else if(Pn(r)){const i=t[r],s=o[r];s&&i!==s&&!(M(i)&&i.includes(s))&&(t[r]=i?[].concat(i,s):s)}else r!==""&&(t[r]=o[r])}return t}function We(e,t,n,o=null){Fe(e,t,7,[n,o])}const dl=Di();let ul=0;function pl(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||dl,i={uid:ul++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vi(o,r),emitsOptions:qi(o,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:o.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ga.bind(null,i),e.ce&&e.ce(i),i}let be=null;const gl=()=>be||Le;let An,fo;{const e=si(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};An=t("__VUE_INSTANCE_SETTERS__",n=>be=n),fo=t("__VUE_SSR_SETTERS__",n=>Mn=n)}const rn=e=>{const t=be;return An(e),e.scope.on(),()=>{e.scope.off(),An(t)}},br=()=>{be&&be.scope.off(),An(null)};function os(e){return e.vnode.shapeFlag&4}let Mn=!1;function fl(e,t=!1){t&&fo(t);const{props:n,children:o}=e.vnode,r=os(e);Ga(e,n,r,t),Wa(e,o);const i=r?hl(e,t):void 0;return t&&fo(!1),i}function hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qa);const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?Sl(e):null,i=rn(e);ht();const s=ut(o,e,0,[e.props,r]);if(mt(),i(),ni(s)){if(s.then(br,br),t)return s.then(l=>{_r(e,l,t)}).catch(l=>{qn(l,e,0)});e.asyncDep=s}else _r(e,s,t)}else rs(e,t)}function _r(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Ti(t)),rs(e,n)}let Cr;function rs(e,t,n){const o=e.type;if(!e.render){if(!t&&Cr&&!o.render){const r=o.template||Do(e).template;if(r){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=o,d=ge(ge({isCustomElement:i,delimiters:l},s),a);o.render=Cr(r,d)}}e.render=o.render||qe}{const r=rn(e);ht();try{ka(e)}finally{mt(),r()}}}const ml={get(e,t){return Pe(e,"get",""),e[t]}};function Sl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ml),slots:e.slots,emit:e.emit,expose:t}}function Bo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ti(oa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}})):e.proxy}function yl(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function bl(e){return U(e)&&"__vccOpts"in e}const Ne=(e,t)=>ra(e,t,Mn);function Go(e,t,n){const o=arguments.length;return o===2?le(t)&&!M(t)?go(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&go(n)&&(n=[n]),ae(e,t,n))}const _l="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cl="http://www.w3.org/2000/svg",vl="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,vr=Qe&&Qe.createElement("template"),wl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?Qe.createElementNS(Cl,e):t==="mathml"?Qe.createElementNS(vl,e):n?Qe.createElement(e,{is:n}):Qe.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,i){const s=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{vr.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const l=vr.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},nt="transition",Bt="animation",tn=Symbol("_vtc"),Vo=(e,{slots:t})=>Go(ol,Rl(e),t);Vo.displayName="Transition";const is={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vo.props=ge({},Yi,is);const bt=(e,t=[])=>{M(e)?e.forEach(n=>n(...t)):e&&e(...t)},wr=e=>e?M(e)?e.some(t=>t.length>1):e.length>1:!1;function Rl(e){const t={};for(const q in e)q in is||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:d=s,appearToClass:p=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,x=Al(r),E=x&&x[0],G=x&&x[1],{onBeforeEnter:B,onEnter:F,onEnterCancelled:N,onLeave:X,onLeaveCancelled:oe,onBeforeAppear:O=B,onAppear:re=F,onAppearCancelled:me=N}=t,W=(q,Y,Se)=>{_t(q,Y?p:l),_t(q,Y?d:s),Se&&Se()},z=(q,Y)=>{q._isLeaving=!1,_t(q,g),_t(q,m),_t(q,f),Y&&Y()},ie=q=>(Y,Se)=>{const De=q?re:F,ue=()=>W(Y,q,Se);bt(De,[Y,ue]),Rr(()=>{_t(Y,q?a:i),ot(Y,q?p:l),wr(De)||Ar(Y,o,E,ue)})};return ge(t,{onBeforeEnter(q){bt(B,[q]),ot(q,i),ot(q,s)},onBeforeAppear(q){bt(O,[q]),ot(q,a),ot(q,d)},onEnter:ie(!1),onAppear:ie(!0),onLeave(q,Y){q._isLeaving=!0;const Se=()=>z(q,Y);ot(q,g),ot(q,f),El(),Rr(()=>{q._isLeaving&&(_t(q,g),ot(q,m),wr(X)||Ar(q,o,G,Se))}),bt(X,[q,Se])},onEnterCancelled(q){W(q,!1),bt(N,[q])},onAppearCancelled(q){W(q,!0),bt(me,[q])},onLeaveCancelled(q){z(q),bt(oe,[q])}})}function Al(e){if(e==null)return null;if(le(e))return[$n(e.enter),$n(e.leave)];{const t=$n(e);return[t,t]}}function $n(e){return Es(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[tn]||(e[tn]=new Set)).add(t)}function _t(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[tn];n&&(n.delete(t),n.size||(e[tn]=void 0))}function Rr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Pl=0;function Ar(e,t,n,o){const r=e._endId=++Pl,i=()=>{r===e._endId&&o()};if(n)return setTimeout(i,n);const{type:s,timeout:l,propCount:a}=Tl(e,t);if(!s)return o();const d=s+"end";let p=0;const g=()=>{e.removeEventListener(d,f),i()},f=m=>{m.target===e&&++p>=a&&g()};setTimeout(()=>{p<a&&g()},l+1),e.addEventListener(d,f)}function Tl(e,t){const n=window.getComputedStyle(e),o=x=>(n[x]||"").split(", "),r=o(`${nt}Delay`),i=o(`${nt}Duration`),s=Pr(r,i),l=o(`${Bt}Delay`),a=o(`${Bt}Duration`),d=Pr(l,a);let p=null,g=0,f=0;t===nt?s>0&&(p=nt,g=s,f=i.length):t===Bt?d>0&&(p=Bt,g=d,f=a.length):(g=Math.max(s,d),p=g>0?s>d?nt:Bt:null,f=p?p===nt?i.length:a.length:0);const m=p===nt&&/\b(transform|all)(,|$)/.test(o(`${nt}Property`).toString());return{type:p,timeout:g,propCount:f,hasTransform:m}}function Pr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Tr(n)+Tr(e[o])))}function Tr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function El(){return document.body.offsetHeight}function xl(e,t,n){const o=e[tn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Er=Symbol("_vod"),Il=Symbol("_vsh"),Nl=Symbol(""),ql=/(^|;)\s*display\s*:/;function kl(e,t,n){const o=e.style,r=fe(n);let i=!1;if(n&&!r){if(t)if(fe(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();n[l]==null&&bn(o,l,"")}else for(const s in t)n[s]==null&&bn(o,s,"");for(const s in n)s==="display"&&(i=!0),bn(o,s,n[s])}else if(r){if(t!==n){const s=o[Nl];s&&(n+=";"+s),o.cssText=n,i=ql.test(n)}}else t&&e.removeAttribute("style");Er in e&&(e[Er]=i?o.display:"",e[Il]&&(o.display="none"))}const xr=/\s*!important$/;function bn(e,t,n){if(M(n))n.forEach(o=>bn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ll(e,t);xr.test(n)?e.setProperty(Ot(o),n.replace(xr,""),"important"):e[o]=n}}const Ir=["Webkit","Moz","ms"],jn={};function Ll(e,t){const n=jn[t];if(n)return n;let o=$e(t);if(o!=="filter"&&o in e)return jn[t]=o;o=xn(o);for(let r=0;r<Ir.length;r++){const i=Ir[r]+o;if(i in e)return jn[t]=i}return t}const Nr="http://www.w3.org/1999/xlink";function qr(e,t,n,o,r,i=Ls(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Nr,t.slice(6,t.length)):e.setAttributeNS(Nr,t,n):n==null||i&&!ai(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ft(n)?String(n):n)}function Fl(e,t,n,o,r,i,s){if(t==="innerHTML"||t==="textContent"){o&&s(o,r,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const d=l==="OPTION"?e.getAttribute("value")||"":e.value,p=n==null?"":String(n);(d!==p||!("_value"in e))&&(e.value=p),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const d=typeof e[t];d==="boolean"?n=ai(n):n==null&&d==="string"?(n="",a=!0):d==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Dl(e,t,n,o){e.addEventListener(t,n,o)}function Ol(e,t,n,o){e.removeEventListener(t,n,o)}const kr=Symbol("_vei");function Ml(e,t,n,o,r=null){const i=e[kr]||(e[kr]={}),s=i[t];if(o&&s)s.value=o;else{const[l,a]=Bl(t);if(o){const d=i[t]=Ul(o,r);Dl(e,l,d,a)}else s&&(Ol(e,l,s,a),i[t]=void 0)}}const Lr=/(?:Once|Passive|Capture)$/;function Bl(e){let t;if(Lr.test(e)){t={};let o;for(;o=e.match(Lr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let Yn=0;const Gl=Promise.resolve(),Vl=()=>Yn||(Gl.then(()=>Yn=0),Yn=Date.now());function Ul(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Fe(Wl(o,n.value),t,5,[o])};return n.value=e,n.attached=Vl(),n}function Wl(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Fr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hl=(e,t,n,o,r,i,s,l,a)=>{const d=r==="svg";t==="class"?xl(e,o,d):t==="style"?kl(e,n,o):Pn(t)?bo(t)||Ml(e,t,n,o,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xl(e,t,o,d))?(Fl(e,t,o,i,s,l,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qr(e,t,o,d,s,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),qr(e,t,o,d))};function Xl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fr(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fr(t)&&fe(n)?!1:t in e}const Kl=ge({patchProp:Hl},wl);let Dr;function zl(){return Dr||(Dr=Xa(Kl))}const $l=(...e)=>{const t=zl().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=Yl(o);if(!r)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,jl(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function jl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yl(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nt=typeof document<"u";function Ql(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Qn(e,t){const n={};for(const o in t){const r=t[o];n[o]=Ge(r)?r.map(e):e(r)}return n}const $t=()=>{},Ge=Array.isArray,ss=/#/g,Jl=/&/g,Zl=/\//g,ec=/=/g,tc=/\?/g,as=/\+/g,nc=/%5B/g,oc=/%5D/g,ls=/%5E/g,rc=/%60/g,cs=/%7B/g,ic=/%7C/g,ds=/%7D/g,sc=/%20/g;function Uo(e){return encodeURI(""+e).replace(ic,"|").replace(nc,"[").replace(oc,"]")}function ac(e){return Uo(e).replace(cs,"{").replace(ds,"}").replace(ls,"^")}function ho(e){return Uo(e).replace(as,"%2B").replace(sc,"+").replace(ss,"%23").replace(Jl,"%26").replace(rc,"`").replace(cs,"{").replace(ds,"}").replace(ls,"^")}function lc(e){return ho(e).replace(ec,"%3D")}function cc(e){return Uo(e).replace(ss,"%23").replace(tc,"%3F")}function dc(e){return e==null?"":cc(e).replace(Zl,"%2F")}function nn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const uc=/\/$/,pc=e=>e.replace(uc,"");function Jn(e,t,n="/"){let o,r={},i="",s="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(o=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),r=e(i)),l>-1&&(o=o||t.slice(0,l),s=t.slice(l,t.length)),o=mc(o??t,n),{fullPath:o+(i&&"?")+i+s,path:o,query:r,hash:nn(s)}}function gc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Or(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fc(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&Ft(t.matched[o],n.matched[r])&&us(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ft(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function us(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hc(e[n],t[n]))return!1;return!0}function hc(e,t){return Ge(e)?Mr(e,t):Ge(t)?Mr(t,e):e===t}function Mr(e,t){return Ge(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function mc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),r=o[o.length-1];(r===".."||r===".")&&o.push("");let i=n.length-1,s,l;for(s=0;s<o.length;s++)if(l=o[s],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+o.slice(s).join("/")}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var on;(function(e){e.pop="pop",e.push="push"})(on||(on={}));var jt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(jt||(jt={}));function Sc(e){if(!e)if(Nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pc(e)}const yc=/^[^#]+#/;function bc(e,t){return e.replace(yc,"#")+t}function _c(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Bn=()=>({left:window.scrollX,top:window.scrollY});function Cc(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=_c(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Br(e,t){return(history.state?history.state.position-t:-1)+e}const mo=new Map;function vc(e,t){mo.set(e,t)}function wc(e){const t=mo.get(e);return mo.delete(e),t}let Rc=()=>location.protocol+"//"+location.host;function ps(e,t){const{pathname:n,search:o,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),Or(a,"")}return Or(n,e)+o+r}function Ac(e,t,n,o){let r=[],i=[],s=null;const l=({state:f})=>{const m=ps(e,location),x=n.value,E=t.value;let G=0;if(f){if(n.value=m,t.value=f,s&&s===x){s=null;return}G=E?f.position-E.position:0}else o(m);r.forEach(B=>{B(n.value,x,{delta:G,type:on.pop,direction:G?G>0?jt.forward:jt.back:jt.unknown})})};function a(){s=n.value}function d(f){r.push(f);const m=()=>{const x=r.indexOf(f);x>-1&&r.splice(x,1)};return i.push(m),m}function p(){const{history:f}=window;f.state&&f.replaceState(ee({},f.state,{scroll:Bn()}),"")}function g(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:a,listen:d,destroy:g}}function Gr(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?Bn():null}}function Pc(e){const{history:t,location:n}=window,o={value:ps(e,n)},r={value:t.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,d,p){const g=e.indexOf("#"),f=g>-1?(n.host&&document.querySelector("base")?e:e.slice(g))+a:Rc()+e+a;try{t[p?"replaceState":"pushState"](d,"",f),r.value=d}catch(m){console.error(m),n[p?"replace":"assign"](f)}}function s(a,d){const p=ee({},t.state,Gr(r.value.back,a,r.value.forward,!0),d,{position:r.value.position});i(a,p,!0),o.value=a}function l(a,d){const p=ee({},r.value,t.state,{forward:a,scroll:Bn()});i(p.current,p,!0);const g=ee({},Gr(o.value,a,null),{position:p.position+1},d);i(a,g,!1),o.value=a}return{location:o,state:r,push:l,replace:s}}function Tc(e){e=Sc(e);const t=Pc(e),n=Ac(e,t.state,t.location,t.replace);function o(i,s=!0){s||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:e,go:o,createHref:bc.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ec(e){return typeof e=="string"||e&&typeof e=="object"}function gs(e){return typeof e=="string"||typeof e=="symbol"}const fs=Symbol("");var Vr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vr||(Vr={}));function Dt(e,t){return ee(new Error,{type:e,[fs]:!0},t)}function Ye(e,t){return e instanceof Error&&fs in e&&(t==null||!!(e.type&t))}const Ur="[^/]+?",xc={sensitive:!1,strict:!1,start:!0,end:!0},Ic=/[.+*?^${}()[\]/\\]/g;function Nc(e,t){const n=ee({},xc,t),o=[];let r=n.start?"^":"";const i=[];for(const d of e){const p=d.length?[]:[90];n.strict&&!d.length&&(r+="/");for(let g=0;g<d.length;g++){const f=d[g];let m=40+(n.sensitive?.25:0);if(f.type===0)g||(r+="/"),r+=f.value.replace(Ic,"\\$&"),m+=40;else if(f.type===1){const{value:x,repeatable:E,optional:G,regexp:B}=f;i.push({name:x,repeatable:E,optional:G});const F=B||Ur;if(F!==Ur){m+=10;try{new RegExp(`(${F})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${x}" (${F}): `+X.message)}}let N=E?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;g||(N=G&&d.length<2?`(?:/${N})`:"/"+N),G&&(N+="?"),r+=N,m+=20,G&&(m+=-8),E&&(m+=-20),F===".*"&&(m+=-50)}p.push(m)}o.push(p)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const s=new RegExp(r,n.sensitive?"":"i");function l(d){const p=d.match(s),g={};if(!p)return null;for(let f=1;f<p.length;f++){const m=p[f]||"",x=i[f-1];g[x.name]=m&&x.repeatable?m.split("/"):m}return g}function a(d){let p="",g=!1;for(const f of e){(!g||!p.endsWith("/"))&&(p+="/"),g=!1;for(const m of f)if(m.type===0)p+=m.value;else if(m.type===1){const{value:x,repeatable:E,optional:G}=m,B=x in d?d[x]:"";if(Ge(B)&&!E)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const F=Ge(B)?B.join("/"):B;if(!F)if(G)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):g=!0);else throw new Error(`Missing required param "${x}"`);p+=F}}return p||"/"}return{re:s,score:o,keys:i,parse:l,stringify:a}}function qc(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function hs(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const i=qc(o[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-o.length)===1){if(Wr(o))return 1;if(Wr(r))return-1}return r.length-o.length}function Wr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kc={type:0,value:""},Lc=/[a-zA-Z0-9_]/;function Fc(e){if(!e)return[[]];if(e==="/")return[[kc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${d}": ${m}`)}let n=0,o=n;const r=[];let i;function s(){i&&r.push(i),i=[]}let l=0,a,d="",p="";function g(){d&&(n===0?i.push({type:0,value:d}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:p,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function f(){d+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(d&&g(),s()):a===":"?(g(),n=1):f();break;case 4:f(),n=o;break;case 1:a==="("?n=2:Lc.test(a)?f():(g(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+a:n=3:p+=a;break;case 3:g(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),g(),s(),r}function Dc(e,t,n){const o=Nc(Fc(e.path),n),r=ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Oc(e,t){const n=[],o=new Map;t=Kr({strict:!1,end:!0,sensitive:!1},t);function r(g){return o.get(g)}function i(g,f,m){const x=!m,E=Mc(g);E.aliasOf=m&&m.record;const G=Kr(t,g),B=[E];if("alias"in g){const X=typeof g.alias=="string"?[g.alias]:g.alias;for(const oe of X)B.push(ee({},E,{components:m?m.record.components:E.components,path:oe,aliasOf:m?m.record:E}))}let F,N;for(const X of B){const{path:oe}=X;if(f&&oe[0]!=="/"){const O=f.record.path,re=O[O.length-1]==="/"?"":"/";X.path=f.record.path+(oe&&re+oe)}if(F=Dc(X,f,G),m?m.alias.push(F):(N=N||F,N!==F&&N.alias.push(F),x&&g.name&&!Xr(F)&&s(g.name)),ms(F)&&a(F),E.children){const O=E.children;for(let re=0;re<O.length;re++)i(O[re],F,m&&m.children[re])}m=m||F}return N?()=>{s(N)}:$t}function s(g){if(gs(g)){const f=o.get(g);f&&(o.delete(g),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(g);f>-1&&(n.splice(f,1),g.record.name&&o.delete(g.record.name),g.children.forEach(s),g.alias.forEach(s))}}function l(){return n}function a(g){const f=Vc(g,n);n.splice(f,0,g),g.record.name&&!Xr(g)&&o.set(g.record.name,g)}function d(g,f){let m,x={},E,G;if("name"in g&&g.name){if(m=o.get(g.name),!m)throw Dt(1,{location:g});G=m.record.name,x=ee(Hr(f.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),g.params&&Hr(g.params,m.keys.map(N=>N.name))),E=m.stringify(x)}else if(g.path!=null)E=g.path,m=n.find(N=>N.re.test(E)),m&&(x=m.parse(E),G=m.record.name);else{if(m=f.name?o.get(f.name):n.find(N=>N.re.test(f.path)),!m)throw Dt(1,{location:g,currentLocation:f});G=m.record.name,x=ee({},f.params,g.params),E=m.stringify(x)}const B=[];let F=m;for(;F;)B.unshift(F.record),F=F.parent;return{name:G,path:E,params:x,matched:B,meta:Gc(B)}}e.forEach(g=>i(g));function p(){n.length=0,o.clear()}return{addRoute:i,resolve:d,removeRoute:s,clearRoutes:p,getRoutes:l,getRecordMatcher:r}}function Hr(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Mc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function Xr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gc(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Kr(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Vc(e,t){let n=0,o=t.length;for(;n!==o;){const i=n+o>>1;hs(e,t[i])<0?o=i:n=i+1}const r=Uc(e);return r&&(o=t.lastIndexOf(r,o-1)),o}function Uc(e){let t=e;for(;t=t.parent;)if(ms(t)&&hs(e,t)===0)return t}function ms({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Wc(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const i=o[r].replace(as," "),s=i.indexOf("="),l=nn(s<0?i:i.slice(0,s)),a=s<0?null:nn(i.slice(s+1));if(l in t){let d=t[l];Ge(d)||(d=t[l]=[d]),d.push(a)}else t[l]=a}return t}function zr(e){let t="";for(let n in e){const o=e[n];if(n=lc(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(o)?o.map(i=>i&&ho(i)):[o&&ho(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Hc(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Ge(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const Xc=Symbol(""),$r=Symbol(""),Wo=Symbol(""),Ho=Symbol(""),So=Symbol("");function Gt(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function lt(e,t,n,o,r,i=s=>s()){const s=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const d=f=>{f===!1?a(Dt(4,{from:n,to:t})):f instanceof Error?a(f):Ec(f)?a(Dt(2,{from:t,to:f})):(s&&o.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),l())},p=i(()=>e.call(o&&o.instances[r],t,n,d));let g=Promise.resolve(p);e.length<3&&(g=g.then(d)),g.catch(f=>a(f))})}function Zn(e,t,n,o,r=i=>i()){const i=[];for(const s of e)for(const l in s.components){let a=s.components[l];if(!(t!=="beforeRouteEnter"&&!s.instances[l]))if(Kc(a)){const p=(a.__vccOpts||a)[t];p&&i.push(lt(p,n,o,s,l,r))}else{let d=a();i.push(()=>d.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${s.path}"`));const g=Ql(p)?p.default:p;s.components[l]=g;const m=(g.__vccOpts||g)[t];return m&&lt(m,n,o,s,l,r)()}))}}return i}function Kc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jr(e){const t=ze(Wo),n=ze(Ho),o=Ne(()=>{const a=ke(e.to);return t.resolve(a)}),r=Ne(()=>{const{matched:a}=o.value,{length:d}=a,p=a[d-1],g=n.matched;if(!p||!g.length)return-1;const f=g.findIndex(Ft.bind(null,p));if(f>-1)return f;const m=Yr(a[d-2]);return d>1&&Yr(p)===m&&g[g.length-1].path!==m?g.findIndex(Ft.bind(null,a[d-2])):f}),i=Ne(()=>r.value>-1&&jc(n.params,o.value.params)),s=Ne(()=>r.value>-1&&r.value===n.matched.length-1&&us(n.params,o.value.params));function l(a={}){return $c(a)?t[ke(e.replace)?"replace":"push"](ke(e.to)).catch($t):Promise.resolve()}return{route:o,href:Ne(()=>o.value.href),isActive:i,isExactActive:s,navigate:l}}const zc=pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jr,setup(e,{slots:t}){const n=Nn(jr(e)),{options:o}=ze(Wo),r=Ne(()=>({[Qr(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qr(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Go("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ss=zc;function $c(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jc(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Ge(r)||r.length!==o.length||o.some((i,s)=>i!==r[s]))return!1}return!0}function Yr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qr=(e,t,n)=>e??t??n,Yc=pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=ze(So),r=Ne(()=>e.route||o.value),i=ze($r,0),s=Ne(()=>{let d=ke(i);const{matched:p}=r.value;let g;for(;(g=p[d])&&!g.components;)d++;return d}),l=Ne(()=>r.value.matched[s.value]);mn($r,Ne(()=>s.value+1)),mn(Xc,l),mn(So,r);const a=Io();return Kt(()=>[a.value,l.value,e.name],([d,p,g],[f,m,x])=>{p&&(p.instances[g]=d,m&&m!==p&&d&&d===f&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),d&&p&&(!m||!Ft(p,m)||!f)&&(p.enterCallbacks[g]||[]).forEach(E=>E(d))},{flush:"post"}),()=>{const d=r.value,p=e.name,g=l.value,f=g&&g.components[p];if(!f)return Jr(n.default,{Component:f,route:d});const m=g.props[p],x=m?m===!0?d.params:typeof m=="function"?m(d):m:null,G=Go(f,ee({},x,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(g.instances[p]=null)},ref:a}));return Jr(n.default,{Component:G,route:d})||G}}});function Jr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ys=Yc;function Qc(e){const t=Oc(e.routes,e),n=e.parseQuery||Wc,o=e.stringifyQuery||zr,r=e.history,i=Gt(),s=Gt(),l=Gt(),a=ia(rt);let d=rt;Nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Qn.bind(null,y=>""+y),g=Qn.bind(null,dc),f=Qn.bind(null,nn);function m(y,P){let A,k;return gs(y)?(A=t.getRecordMatcher(y),k=P):k=y,t.addRoute(k,A)}function x(y){const P=t.getRecordMatcher(y);P&&t.removeRoute(P)}function E(){return t.getRoutes().map(y=>y.record)}function G(y){return!!t.getRecordMatcher(y)}function B(y,P){if(P=ee({},P||a.value),typeof y=="string"){const u=Jn(n,y,P.path),h=t.resolve({path:u.path},P),b=r.createHref(u.fullPath);return ee(u,h,{params:f(h.params),hash:nn(u.hash),redirectedFrom:void 0,href:b})}let A;if(y.path!=null)A=ee({},y,{path:Jn(n,y.path,P.path).path});else{const u=ee({},y.params);for(const h in u)u[h]==null&&delete u[h];A=ee({},y,{params:g(u)}),P.params=g(P.params)}const k=t.resolve(A,P),Z=y.hash||"";k.params=p(f(k.params));const de=gc(o,ee({},y,{hash:ac(Z),path:k.path})),c=r.createHref(de);return ee({fullPath:de,hash:Z,query:o===zr?Hc(y.query):y.query||{}},k,{redirectedFrom:void 0,href:c})}function F(y){return typeof y=="string"?Jn(n,y,a.value.path):ee({},y)}function N(y,P){if(d!==y)return Dt(8,{from:P,to:y})}function X(y){return re(y)}function oe(y){return X(ee(F(y),{replace:!0}))}function O(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:A}=P;let k=typeof A=="function"?A(y):A;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),ee({query:y.query,hash:y.hash,params:k.path!=null?{}:y.params},k)}}function re(y,P){const A=d=B(y),k=a.value,Z=y.state,de=y.force,c=y.replace===!0,u=O(A);if(u)return re(ee(F(u),{state:typeof u=="object"?ee({},Z,u.state):Z,force:de,replace:c}),P||A);const h=A;h.redirectedFrom=P;let b;return!de&&fc(o,k,A)&&(b=Dt(16,{to:h,from:k}),Ve(k,k,!0,!1)),(b?Promise.resolve(b):z(h,k)).catch(S=>Ye(S)?Ye(S,2)?S:et(S):Q(S,h,k)).then(S=>{if(S){if(Ye(S,2))return re(ee({replace:c},F(S.to),{state:typeof S.to=="object"?ee({},Z,S.to.state):Z,force:de}),P||h)}else S=q(h,k,!0,c,Z);return ie(h,k,S),S})}function me(y,P){const A=N(y,P);return A?Promise.reject(A):Promise.resolve()}function W(y){const P=xt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(y):y()}function z(y,P){let A;const[k,Z,de]=Jc(y,P);A=Zn(k.reverse(),"beforeRouteLeave",y,P);for(const u of k)u.leaveGuards.forEach(h=>{A.push(lt(h,y,P))});const c=me.bind(null,y,P);return A.push(c),_e(A).then(()=>{A=[];for(const u of i.list())A.push(lt(u,y,P));return A.push(c),_e(A)}).then(()=>{A=Zn(Z,"beforeRouteUpdate",y,P);for(const u of Z)u.updateGuards.forEach(h=>{A.push(lt(h,y,P))});return A.push(c),_e(A)}).then(()=>{A=[];for(const u of de)if(u.beforeEnter)if(Ge(u.beforeEnter))for(const h of u.beforeEnter)A.push(lt(h,y,P));else A.push(lt(u.beforeEnter,y,P));return A.push(c),_e(A)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),A=Zn(de,"beforeRouteEnter",y,P,W),A.push(c),_e(A))).then(()=>{A=[];for(const u of s.list())A.push(lt(u,y,P));return A.push(c),_e(A)}).catch(u=>Ye(u,8)?u:Promise.reject(u))}function ie(y,P,A){l.list().forEach(k=>W(()=>k(y,P,A)))}function q(y,P,A,k,Z){const de=N(y,P);if(de)return de;const c=P===rt,u=Nt?history.state:{};A&&(k||c?r.replace(y.fullPath,ee({scroll:c&&u&&u.scroll},Z)):r.push(y.fullPath,Z)),a.value=y,Ve(y,P,A,c),et()}let Y;function Se(){Y||(Y=r.listen((y,P,A)=>{if(!sn.listening)return;const k=B(y),Z=O(k);if(Z){re(ee(Z,{replace:!0}),k).catch($t);return}d=k;const de=a.value;Nt&&vc(Br(de.fullPath,A.delta),Bn()),z(k,de).catch(c=>Ye(c,12)?c:Ye(c,2)?(re(c.to,k).then(u=>{Ye(u,20)&&!A.delta&&A.type===on.pop&&r.go(-1,!1)}).catch($t),Promise.reject()):(A.delta&&r.go(-A.delta,!1),Q(c,k,de))).then(c=>{c=c||q(k,de,!1),c&&(A.delta&&!Ye(c,8)?r.go(-A.delta,!1):A.type===on.pop&&Ye(c,20)&&r.go(-1,!1)),ie(k,de,c)}).catch($t)}))}let De=Gt(),ue=Gt(),ne;function Q(y,P,A){et(y);const k=ue.list();return k.length?k.forEach(Z=>Z(y,P,A)):console.error(y),Promise.reject(y)}function je(){return ne&&a.value!==rt?Promise.resolve():new Promise((y,P)=>{De.add([y,P])})}function et(y){return ne||(ne=!y,Se(),De.list().forEach(([P,A])=>y?A(y):P()),De.reset()),y}function Ve(y,P,A,k){const{scrollBehavior:Z}=e;if(!Nt||!Z)return Promise.resolve();const de=!A&&wc(Br(y.fullPath,0))||(k||!A)&&history.state&&history.state.scroll||null;return qo().then(()=>Z(y,P,de)).then(c=>c&&Cc(c)).catch(c=>Q(c,y,P))}const Re=y=>r.go(y);let Et;const xt=new Set,sn={currentRoute:a,listening:!0,addRoute:m,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:G,getRoutes:E,resolve:B,options:e,push:X,replace:oe,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:ue.add,isReady:je,install(y){const P=this;y.component("RouterLink",Ss),y.component("RouterView",ys),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(a)}),Nt&&!Et&&a.value===rt&&(Et=!0,X(r.location).catch(Z=>{}));const A={};for(const Z in rt)Object.defineProperty(A,Z,{get:()=>a.value[Z],enumerable:!0});y.provide(Wo,P),y.provide(Ho,Ci(A)),y.provide(So,a);const k=y.unmount;xt.add(y),y.unmount=function(){xt.delete(y),xt.size<1&&(d=rt,Y&&Y(),Y=null,a.value=rt,Et=!1,ne=!1),k()}}};function _e(y){return y.reduce((P,A)=>P.then(()=>W(A)),Promise.resolve())}return sn}function Jc(e,t){const n=[],o=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(e.matched.find(d=>Ft(d,l))?o.push(l):n.push(l));const a=e.matched[s];a&&(t.matched.find(d=>Ft(d,a))||r.push(a))}return[n,o,r]}function Zc(e){return ze(Ho)}const ed="modulepreload",td=function(e){return"/"+e},Zr={},ei=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(l=>{if(l=td(l),l in Zr)return;Zr[l]=!0;const a=l.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":ed,a||(p.as="script",p.crossOrigin=""),p.href=l,s&&p.setAttribute("nonce",s),document.head.appendChild(p),a)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},bs=async e=>{ei(()=>import("./install-dialog-B2RxDy66.js"),__vite__mapDeps([0,1]));let t;try{t=await navigator.serial.requestPort()}catch(o){if(o.name==="NotFoundError"){ei(()=>import("./index-Cxu_mapz.js"),__vite__mapDeps([2,1])).then(r=>r.openNoPortPickedDialog(()=>bs(e)));return}alert(`Error: ${o.message}`);return}if(!t)return;try{await t.open({baudRate:115200,bufferSize:8192})}catch(o){alert(o.message);return}const n=document.createElement("ewt-install-dialog");n.port=t,n.manifestPath=e.manifest||e.getAttribute("manifest"),n.overrides=e.overrides,n.addEventListener("closed",()=>{t.close()},{once:!0}),document.body.appendChild(n)};class Ke extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:"open"}),!Ke.isSupported||!Ke.isAllowed){this.toggleAttribute("install-unsupported",!0),this.renderRoot.innerHTML=Ke.isAllowed?"<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>":"<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";return}this.toggleAttribute("install-supported",!0);const t=document.createElement("slot");t.addEventListener("click",async o=>{o.preventDefault(),bs(this)}),t.name="activate";const n=document.createElement("button");if(n.innerText="Connect",t.append(n),"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const o=new CSSStyleSheet;o.replaceSync(Ke.style),this.renderRoot.adoptedStyleSheets=[o]}else{const o=document.createElement("style");o.innerText=Ke.style,this.renderRoot.append(o)}this.renderRoot.append(t)}}Ke.isSupported="serial"in navigator;Ke.isAllowed=window.isSecureContext;Ke.style=`
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  .hidden {
    display: none;
  }`;customElements.define("esp-web-install-button",Ke);const Xo=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},nd={};function od(e,t){const n=Lo("router-view");return $(),ts(n)}const rd=Xo(nd,[["render",od]]),id=()=>{const e=Io("light"),t=()=>{localStorage.getItem("theme")?e.value=localStorage.getItem("theme"):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(e.value="dark"),e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),document.documentElement.setAttribute("data-theme",e.value),localStorage.setItem("theme",e.value)};function n(){e.value=e.value==="light"?"dark":"light",e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),document.documentElement.setAttribute("data-theme",e.value),localStorage.setItem("theme",e.value)}return Fo(t),{currentTheme:e,switchTheme:n}},sd={class:"border-b border-slate-800 bg-slate-900"},ad={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},ld={class:"flex h-16 justify-between"},cd={class:"flex items-center"},dd={class:"flex items-center space-x-4"},ud=I("a",{href:"https://github.com/kc1awv/LoRaTNCX",target:"_blank",rel:"noopener",class:"rounded-md p-2 text-slate-400 transition-colors hover:text-white"},[I("svg",{class:"size-5",fill:"currentColor",viewBox:"0 0 24 24"},[I("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})])],-1),pd={class:"ml-4 border-l border-slate-700 pl-4"},gd={key:0,xmlns:"http://www.w3.org/2000/svg",class:"size-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},fd=I("path",{d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),hd=[fd],md={key:1,xmlns:"http://www.w3.org/2000/svg",class:"size-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},Sd=I("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),yd=[Sd],Ko={__name:"NavBar",setup(e){const{currentTheme:t,switchTheme:n}=id();return(o,r)=>{const i=Lo("router-link");return $(),te("nav",sd,[I("div",ad,[I("div",ld,[I("div",cd,[ae(i,{to:"/",class:"text-xl font-bold text-white transition-colors hover:text-indigo-400"},{default:ct(()=>[Pt(" LoRaTNCX ")]),_:1})]),I("div",dd,[ae(i,{to:"/flash",class:Tt(["rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white",{"bg-slate-800 text-white":o.$route.path==="/flash"}])},{default:ct(()=>[Pt(" Flash Firmware ")]),_:1},8,["class"]),ae(i,{to:"/manual",class:Tt(["rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white",{"bg-slate-800 text-white":o.$route.path==="/manual"}])},{default:ct(()=>[Pt(" Manual ")]),_:1},8,["class"]),ud,I("div",pd,[I("button",{class:"rounded-md p-2 text-slate-400 transition-colors hover:text-white",onClick:r[0]||(r[0]=s=>ke(n)())},[ae(Vo,{"enter-active-class":"transition duration-200 ease-out","leave-active-class":"transition duration-200 ease-in","enter-from-class":ke(t)==="dark"?"transform -translate-y-full scale-50 opacity-0":"transform translate-y-full scale-50 opacity-0","enter-to-class":"transform translate-y-0","leave-from-class":"transform translate-y-0","leave-to-class":ke(t)==="dark"?"transform translate-y-full scale-50 opacity-0":"transform -translate-y-full scale-50 opacity-0",mode:"out-in"},{default:ct(()=>[ke(t)==="dark"?($(),te("svg",gd,hd)):($(),te("svg",md,yd))]),_:1},8,["enter-from-class","leave-to-class"])])])])])])])}}},bd={class:"mx-auto flex flex-col items-center justify-center px-4 py-16"},_d={class:"space-y-6"},Cd=I("h1",{class:"text-center text-6xl font-bold text-gray-700 dark:text-gray-100"}," LoRaTNCX ",-1),vd=I("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," LoRa-based KISS TNC for ESP32 boards ",-1),wd={class:"mx-auto max-w-4xl space-y-4 text-justify text-gray-700 dark:text-gray-300"},Rd=I("p",null," LoRaTNCX is a KISS-compatible Terminal Node Controller built for modern ESP32 LoRa boards. Because apparently, we needed another way to send packets through the air using radio waves that travel at the speed of light. Who doesn't love that? ",-1),Ad=I("p",null," This project is also a grand experiment in AI-assisted programming. Yes, large portions of this website and firmware were written with the help of AI tools. We're basically letting robots write our radio software. What could possibly go wrong? ",-1),Pd=I("p",null,` But hey, it actually works! The firmware integrates with existing packet radio software while leveraging LoRa's exceptional link budget for reliable long-range communications. Because nothing says "cutting-edge technology" like resurrecting 1980s packet radio protocols with modern hardware. `,-1),Td={class:"flex justify-center space-x-4 pt-4"},Ed=I("svg",{class:"size-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[I("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})],-1),xd=I("span",null,"Flash Firmware",-1),Id=I("svg",{class:"size-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[I("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})],-1),Nd=I("span",null,"Documentation",-1),qd=he('<div class="space-y-4 pt-8"><h2 class="text-center text-2xl font-semibold text-gray-700 dark:text-gray-100"> Supported Boards </h2><div class="mx-auto grid max-w-4xl gap-4 md:grid-cols-2"><div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"><h3 class="font-semibold text-gray-700 dark:text-gray-100"> Heltec WiFi LoRa 32 V3 </h3><p class="text-sm text-gray-600 dark:text-gray-300"> ESP32-S3 with 8 MB flash </p></div><div class="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"><h3 class="font-semibold text-gray-700 dark:text-gray-100"> Heltec WiFi LoRa 32 V4 </h3><p class="text-sm text-gray-600 dark:text-gray-300"> ESP32-S3 with 16 MB flash + GNSS support </p></div></div></div><div class="space-y-4 pt-8"><h2 class="text-center text-2xl font-semibold text-gray-700 dark:text-gray-100"> The AI Experiment </h2><div class="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:from-indigo-900/20 dark:to-purple-900/20"><p class="text-gray-700 dark:text-gray-300"> This entire project is a learning experiment in AI-assisted development. From the Vue.js website you&#39;re looking at right now, to the ESP32 firmware running on your LoRa board, significant portions were created with AI assistance. </p><p class="mt-3 text-sm text-gray-600 dark:text-gray-400"> We&#39;re exploring how AI can accelerate development while maintaining code quality and functionality. So far, the results are promising - the code works, and we learned a lot about prompting AI tools effectively! </p></div></div><div class="pt-8 text-center"><a href="https://github.com/kc1awv/LoRaTNCX" target="_blank" rel="noopener" class="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"><svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span>View on GitHub</span></a></div>',3),kd={class:"py-4 text-center text-sm text-gray-500 dark:text-gray-400"},Ld=I("p",{class:"mt-1 text-xs"}," And yes, AI helped write most of this. Send complaints to the robots. ",-1),Fd={__name:"index",setup(e){return(t,n)=>{const o=Lo("router-link");return $(),te(we,null,[ae(Ko),I("main",bd,[I("div",_d,[Cd,vd,I("div",wd,[Rd,Ad,Pd,I("div",Td,[ae(o,{to:"/flash",class:"inline-flex items-center space-x-2 rounded-md bg-indigo-600 px-6 py-3 font-medium text-indigo-50 shadow-xl transition duration-300 hover:bg-indigo-700 hover:shadow-md"},{default:ct(()=>[Ed,xd]),_:1}),ae(o,{to:"/manual",class:"inline-flex items-center space-x-2 rounded-md bg-gray-600 px-6 py-3 font-medium text-gray-50 shadow-xl transition duration-300 hover:bg-gray-700 hover:shadow-md"},{default:ct(()=>[Id,Nd]),_:1})])]),qd])]),I("footer",kd,[I("p",null,"© "+_n(new Date().getFullYear())+" LoRaTNCX Developers, et al. Built with ♥ for the packet radio community.",1),Ld])],64)}}},Dd={},Od={class:"flex h-screen items-center justify-center"},Md=I("h1",{class:"text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100"}," Page not Found ",-1),Bd=[Md];function Gd(e,t){return $(),te("header",Od,Bd)}const Vd=Xo(Dd,[["render",Gd]]),Gn=e=>(fa("data-v-c5a9d520"),e=e(),ha(),e),Ud={class:"min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"},Wd={class:"flex flex-col gap-6 px-4 py-8 lg:flex-row lg:py-12"},Hd={class:"w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 lg:w-64 lg:p-5"},Xd=Gn(()=>I("p",{class:"text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500"}," Documentation ",-1)),Kd=Gn(()=>I("h1",{class:"mb-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50"}," LoRaTNCX Manual ",-1)),zd=Gn(()=>I("p",{class:"mb-4 text-sm text-slate-600 dark:text-slate-400"}," Firmware usage, KISS details, and general wizardry for the TNC. ",-1)),$d={class:"space-y-1 text-sm"},jd={class:"w-full space-y-4"},Yd={class:"rounded-2xl border border-slate-200 bg-white px-4 py-6 text-sm leading-relaxed text-slate-900 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-100 sm:px-6 sm:py-7 lg:p-8"},Qd={key:0,class:"w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/70 lg:w-64 lg:p-5"},Jd=Gn(()=>I("h1",{class:"mb-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50"}," On this page ",-1)),Zd={class:"space-y-1 text-sm"},eu=["href"],tu=pe({__name:"ManualLayout",setup(e){const t=[{label:"Overview",to:"/manual"},{label:"Introduction",to:"/manual/introduction"},{label:"Getting Started",to:"/manual/getting-started"},{label:"Hardware Overview",to:"/manual/hardware-overview"},{label:"Software Architecture",to:"/manual/software-architecture"},{label:"Installation & Setup",to:"/manual/installation-setup"},{label:"Configuration",to:"/manual/configuration"},{label:"LoRa Radio Configuration",to:"/manual/lora-radio-configuration"},{label:"WiFi and Networking",to:"/manual/wifi-networking"},{label:"Web Interface",to:"/manual/web-interface"},{label:"KISS Protocol Usage",to:"/manual/kiss-protocol-usage"},{label:"GNSS Support",to:"/manual/gnss-support"},{label:"Applications and Integration",to:"/manual/applications-integration"},{label:"Testing and Validation",to:"/manual/testing-validation"},{label:"Troubleshooting",to:"/manual/troubleshooting"},{label:"Advanced Topics",to:"/manual/advanced-topics"},{label:"Development & Customization",to:"/manual/development-customization"},{label:"Appendices",to:"/manual/appendices"}],n=Zc(),o=Ne(()=>n.path),r=Io([]);function i(l){let a="";for(let d=0;d<l.length;d+=1){const p=l[d].toLowerCase();p>="a"&&p<="z"||p>="0"&&p<="9"?a+=p:a&&!a.endsWith("-")&&(a+="-")}for(;a.endsWith("-");)a=a.slice(0,-1);return a}return Kt(n,()=>{qo(()=>{const l=document.querySelectorAll(".markdown-body h1, .markdown-body h2, .markdown-body h3");l.forEach(a=>{a.id||(a.id=i(a.textContent||""))}),r.value=Array.from(l).map(a=>{var d;return{text:((d=a.textContent)==null?void 0:d.trim())||"",id:a.id,level:a.tagName.toLowerCase()}})})},{immediate:!0}),(l,a)=>($(),te(we,null,[ae(Ko),I("div",Ud,[I("div",Wd,[I("aside",Hd,[Xd,Kd,zd,I("nav",$d,[($(),te(we,null,ar(t,d=>ae(ke(Ss),{key:d.to,to:d.to,class:Tt(["block rounded-xl px-3 py-2 transition",o.value===d.to?"border border-sky-500/40 bg-sky-500/15 text-sky-700 dark:border-sky-500/40 dark:text-sky-300":"border border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50"])},{default:ct(()=>[Pt(_n(d.label),1)]),_:2},1032,["to","class"])),64))])]),I("main",jd,[I("section",Yd,[ae(ke(ys))])]),r.value.length>0?($(),te("aside",Qd,[Jd,I("nav",Zd,[($(!0),te(we,null,ar(r.value,d=>($(),te("a",{key:d.id,href:`#${d.id}`,class:Tt(["block rounded-xl border border-transparent px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50",{"ml-6":d.level==="h4"||d.level==="h5"||d.level==="h6","ml-3":d.level==="h3"}])},_n(d.text),11,eu))),128))])])):ll("",!0)])])],64))}}),nu=Xo(tu,[["__scopeId","data-v-c5a9d520"]]),ou=I("header",{class:"space-y-3"},[I("h1",{class:"text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"}," Flash LoRaTNCX firmware "),I("p",{class:"text-slate-700 dark:text-slate-300"}," Use this page to flash the latest LoRaTNCX firmware and SPIFFS filesystem onto your Heltec boards directly from a supported browser. "),I("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," Use a Chromium-based browser on desktop. Web Serial / WebUSB support in other browsers is… patchy. ")],-1),ru=I("h2",{class:"text-lg font-semibold text-slate-900 dark:text-white"}," Heltec WiFi LoRa 32 V3 ",-1),iu=I("p",{class:"pb-2 text-sm text-slate-700 dark:text-slate-300"}," Standard LoRaTNCX firmware for the V3 board (8 MB flash). ",-1),su=I("p",{class:"text-xs text-slate-500 dark:text-slate-400"},[Pt(" Connect the board via USB. If it isn't detected, hold the "),I("strong",null,"BOOT"),Pt(" button while plugging it in, then try again. ")],-1),au=I("h2",{class:"text-lg font-semibold text-slate-900 dark:text-white"}," Heltec WiFi LoRa 32 V4 ",-1),lu=I("p",{class:"pb-2 text-sm text-slate-700 dark:text-slate-300"}," LoRaTNCX firmware for the V4 board (16 MB flash) with optional GNSS support. ",-1),cu=I("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," Same drill: USB cable, supported browser, mild patience. If it hangs, unplug/replug and retry. ",-1),du=he('<section class="space-y-2 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400"><h3 class="text-sm font-semibold text-slate-900 dark:text-slate-200"> What gets flashed? </h3><ul class="list-disc space-y-1 pl-5"><li>Bootloader to <code>bootloader</code> at <code>0x0</code>.</li><li>Partition table to <code>partitions</code> at <code>0x8000</code>.</li><li>Main firmware image to <code>app0</code> at <code>0x10000</code>.</li><li> SPIFFS filesystem image to the <code>spiffs</code> partition (offset depends on board). </li></ul></section>',1),uu="/firmware/heltec_v3.manifest.json",pu="/firmware/heltec_v4.manifest.json",gu={__name:"FlashView",setup(e){return(t,n)=>($(),te(we,null,[ae(Ko),I("div",{class:"min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"},[I("section",{class:"mx-auto max-w-4xl space-y-8 px-4 py-10"},[ou,I("div",{class:"grid gap-6 md:grid-cols-2"},[I("article",{class:"space-y-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70"},[ru,iu,I("esp-web-install-button",{manifest:uu}),su]),I("article",{class:"space-y-3 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/70"},[au,lu,I("esp-web-install-button",{manifest:pu}),cu])]),du])])],64))}},fu={class:"markdown-body"},hu=he('<h1>LoRaTNCX User Manual</h1><h2>About This Manual</h2><p>This user manual is organized into separate files for easier maintenance and contribution. Each section focuses on a specific aspect of LoRaTNCX usage and configuration.</p><p>This manual assumes a basic understanding of amateur radio, LoRa technology, and general computing concepts.</p><h3>Caveat</h3><ul><li>The manual was initially written mostly by various LLMs with human oversight and editing by S. Miller KC1AWV. Omissions and errors on this site should be reported via the <a href="https://github.com/kc1awv/LoRaTNCX-site/issues">repository’s issue tracker</a>. No LLM or automated tool can perfectly understand all the nuances of amateur radio regulations, best practices, or specific user scenarios. Users should verify critical information independently and offer their own expertise where applicable.</li></ul><h3>Reading the Manual</h3><ul><li>Start with <a href="manual/introduction">Section 1: Introduction</a> if you’re new to LoRaTNCX</li><li>Follow <a href="manual/getting-started">Section 2: Getting Started</a> for initial setup</li><li>Use the table of contents above to navigate to specific topics</li></ul><h3>Contributing</h3><p><a href="https://github.com/kc1awv/LoRaTNCX-site">LoRaTNCX Project Website Source</a></p><p>This manual is written in Markdown and welcomes contributions. Each section is in its own file under the <code class="">manual/</code> directory. To contribute:</p><ol><li>Edit the appropriate section file</li><li>Ensure links and references remain valid</li><li>Test that the manual renders correctly</li></ol>',12),mu=[hu],Su=pe({__name:"index",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",fu,mu))}}),yu={class:"markdown-body"},bu=he('<h1>1. Introduction</h1><h2>1.1. What is LoRaTNCX?</h2><p>LoRaTNCX is an AI-assisted implementation of a KISS (Keep It Simple, Stupid) Terminal Node Controller (TNC) for LoRa radio communications. It provides a bridge between packet radio applications and LoRa transceivers, enabling long-range, low-power digital communications for amateur radio and IoT applications.</p><h2>1.2. Key Features</h2><ul><li>Full KISS protocol implementation with LoRa extensions</li><li>Web-based configuration interface</li><li>WiFi connectivity (AP, STA, or dual mode)</li><li>GNSS support for location tracking</li><li>TCP KISS server for network access</li><li>OLED status display</li><li>Battery voltage monitoring</li><li>Persistent configuration storage</li><li>Command-line configuration tool</li><li>RESTful API for automation</li></ul><h2>1.3. Supported Hardware</h2><ul><li>Heltec WiFi LoRa 32 V3 (SX1262, no external PA)</li><li>Heltec WiFi LoRa 32 V4 (SX1262 with external PA)</li><li>Optional GNSS module for V4 boards</li></ul><h2>1.4. System Requirements</h2><ul><li>Amateur radio license (where required)</li><li>Compatible LoRa board</li><li>USB cable for programming and serial access</li><li>Antenna suitable for operating frequency</li><li>Computer with PlatformIO for development</li></ul><hr><p><a href="/manual">← Back to Main Manual</a> | <a href="getting-started">Next: Getting Started →</a></p>',11),_u=[bu],Cu=pe({__name:"01-introduction",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",yu,_u))}}),vu={class:"markdown-body"},wu=he(`<h1>2. Getting Started</h1><p>This section will guide you through your first experience with LoRaTNCX, from unboxing to sending your first packet.</p><h2>2.1. Unboxing and Initial Setup</h2><h3>What You’ll Need</h3><p><strong>Required Hardware:</strong></p><ul><li>Heltec WiFi LoRa 32 V3 or V4 board</li><li>USB-C cable (for programming and power)</li><li>Antenna suitable for your operating frequency (433MHz, 868MHz, 915MHz, or 928MHz)</li><li>Computer with USB port</li></ul><p><strong>Optional Hardware:</strong></p><ul><li>GNSS module (V4 boards only) for GPS functionality</li><li>External power source (battery or DC supply) for field operation</li></ul><p><strong>Software Prerequisites:</strong></p><ul><li>Python 3.6+ (for configuration tool)</li><li>PlatformIO IDE or VS Code with PlatformIO extension</li><li>Git (for cloning the repository)</li></ul><h3>Board Identification</h3><p>LoRaTNCX supports two board variants:</p><p><strong>Heltec WiFi LoRa 32 V3:</strong></p><ul><li>ESP32-S3 microcontroller</li><li>SX1262 LoRa radio</li><li>OLED display</li></ul><p><strong>Heltec WiFi LoRa 32 V4:</strong></p><ul><li>ESP32-S3 microcontroller</li><li>SX1262 LoRa radio with external PA</li><li>GNSS module connector</li><li>OLED display</li><li>Enhanced power management</li></ul><h3>Initial Hardware Setup</h3><ol><li><strong>Attach Antenna</strong>: Connect a suitable LoRa antenna to the antenna connector on your board</li><li><strong>Optional GNSS</strong>: For V4 boards, attach the Heltec GNSS module if desired</li><li><strong>Power Connection</strong>: Connect via USB-C cable to your computer</li></ol><p>⚠️ <strong>Important</strong>: Never transmit without a proper antenna attached. This can damage the radio module.</p><h2>2.2. Firmware Installation</h2><h3>Step 1: Clone the Repository</h3><pre><code class="language-bash">git clone https://github.com/kc1awv/LoRaTNCX.git
cd LoRaTNCX
</code></pre><h3>Step 2: Install PlatformIO</h3><p><strong>Using VS Code (Recommended):</strong></p><ol><li>Install VS Code</li><li>Install the PlatformIO IDE extension</li><li>Open the LoRaTNCX folder in VS Code</li></ol><p><strong>Command Line:</strong></p><pre><code class="language-bash"># Install PlatformIO Core
pip install platformio

# Or using the installer script
curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py | python
</code></pre><h3>Step 3: Build and Upload Firmware</h3><p><strong>For Heltec WiFi LoRa 32 V3:</strong></p><pre><code class="language-bash"># Build
platformio run --environment heltec_wifi_lora_32_V3

# Upload
platformio run --target upload --environment heltec_wifi_lora_32_V3
</code></pre><p><strong>For Heltec WiFi LoRa 32 V4:</strong></p><pre><code class="language-bash"># Build
platformio run --environment heltec_wifi_lora_32_V4

# Upload
platformio run --target upload --environment heltec_wifi_lora_32_V4
</code></pre><p><strong>Using VS Code Tasks:</strong></p><ul><li>Open Command Palette (Ctrl+Shift+P)</li><li>Select “Tasks: Run Task”</li><li>Choose “Upload (heltec_wifi_lora_32_V3)” or “Upload (heltec_wifi_lora_32_V4)”</li></ul><h3>Step 4: Upload Web Interface Files</h3><p>The web interface files must be uploaded separately to the board’s SPIFFS filesystem:</p><pre><code class="language-bash"># For V3
platformio run --target uploadfs --environment heltec_wifi_lora_32_V3

# For V4
platformio run --target uploadfs --environment heltec_wifi_lora_32_V4
</code></pre><p><strong>VS Code Task:</strong> “Upload Filesystem (SPIFFS) V3/V4”</p><h2>2.3. First Power-On</h2><h3>Default Behavior</h3><p>After uploading firmware, the TNC will:</p><ol><li><strong>Boot up</strong> and show startup messages on the OLED display</li><li><strong>Create a WiFi Access Point</strong> named <code class="">LoRaTNCX-XXXXXXXXXXXX</code> (where XXXXXXXXXXXX is a unique ID)</li><li><strong>Set default LoRa parameters</strong>: <ul><li>Frequency: 915.0 MHz</li><li>Bandwidth: 125 kHz</li><li>Spreading Factor: 12</li><li>Coding Rate: 4/7</li><li>Output Power: 20 dBm</li><li>Sync Word: 0x1424</li></ul></li></ol><h3>Connecting to the Web Interface</h3><ol><li><strong>Find the WiFi Network</strong>: Look for <code class="">LoRaTNCX-XXXXXXXXXXXX</code> in your WiFi networks</li><li><strong>Connect</strong>: Password is <code class="">loratncx</code></li><li><strong>Open Browser</strong>: Navigate to <code class="">http://192.168.4.1</code></li><li><strong>Change Default Password</strong>: Immediately change the WiFi password for security</li></ol><h3>OLED Display Status</h3><p>The OLED display shows:</p><ul><li>LoRaTNCX splash screen</li><li>Device boot process</li><li>Device basic status</li><li>Radio configuration summary</li><li>Current WiFi mode and status</li><li>GNSS status (if applicable)</li><li>Battery voltage (if connected)</li><li>Blank screen (OLED power off mode)</li></ul><h3>Serial Monitor</h3><p>Connect to the serial port to see detailed boot messages:</p><pre><code class="language-bash"># Find your serial port
ls /dev/tty* | grep -E &quot;(USB|ACM)&quot;

# Monitor (adjust port as needed)
platformio device monitor --environment heltec_wifi_lora_32_V4
</code></pre><h2>2.4. Basic Configuration</h2><h3>Using the Web Interface</h3><ol><li><strong>Access the web interface</strong> at <code class="">http://192.168.4.1</code></li><li><strong>Navigate to LoRa Settings</strong></li><li><strong>Configure basic parameters</strong>: <ul><li>Set your operating frequency</li><li>Adjust bandwidth and spreading factor for your use case</li><li>Set appropriate output power (start low, increase as needed)</li></ul></li></ol><h3>Using the Command-Line Tool</h3><p>The <code class="">loratncx_config.py</code> tool provides command-line configuration:</p><pre><code class="language-bash"># Make executable
chmod +x tools/loratncx_config.py

# Get current configuration
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-config

# Set frequency (example: 433.775 MHz for European ISM)
python3 tools/loratncx_config.py /dev/ttyUSB0 --frequency 433.775

# Set spreading factor for longer range
python3 tools/loratncx_config.py /dev/ttyUSB0 --spreading-factor 12

# Save configuration
python3 tools/loratncx_config.py /dev/ttyUSB0 --save
</code></pre><h3>Testing Basic Functionality</h3><p><strong>Quick Test with Echo:</strong></p><ol><li>Connect to serial port with a terminal program (minicom, screen, PuTTY)</li><li>Send a KISS frame (you’ll need KISS-aware software for this)</li><li>Or use the test script: <code class="">python3 test/kiss_test.py /dev/ttyUSB0</code></li></ol><p><strong>Range Test:</strong></p><ol><li>Set up two TNCs with identical configuration</li><li>Use the test script for bidirectional testing</li><li>Start with short range, gradually increase distance</li></ol><h3>Next Steps</h3><p>Once basic configuration is complete:</p><ul><li><a href="08-wifi-networking.md">Configure WiFi settings</a> for your network</li><li><a href="12-applications-integration.md">Set up your KISS application</a> (Dire Wolf, etc.)</li><li><a href="13-testing-validation.md">Test with real packet radio software</a></li></ul><hr><p><a href="introduction">← Previous: Introduction</a> | <a href="/manual">Back to Main Manual</a> | <a href="hardware-overview">Next: Hardware Overview →</a></p>`,66),Ru=[wu],Au=pe({__name:"02-getting-started",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",vu,Ru))}}),Pu={class:"markdown-body"},Tu=he(`<h1>3. Hardware Overview</h1><p>This section provides detailed information about the supported hardware platforms, their capabilities, and key differences.</p><h2>3.1. Heltec WiFi LoRa 32 V3 Board</h2><h3>Overview</h3><p>The Heltec WiFi LoRa 32 V3 features an ESP32-S3 microcontroller and SX1262 LoRa radio module.</p><h3>Key Specifications</h3><ul><li><strong>Microcontroller</strong>: ESP32-S3 (dual-core, WiFi, Bluetooth)</li><li><strong>LoRa Radio</strong>: SX1262 (direct control, no external PA)</li><li><strong>Display</strong>: 0.96&quot; OLED (128x64 SSD1306)</li><li><strong>Memory</strong>: 8MB flash, 512KB RAM</li><li><strong>Power</strong>: 5V input via USB-C</li><li><strong>Frequency Range</strong>: 433-928 MHz ISM bands (dependent on version bought)</li><li><strong>Antenna</strong>: U.FL/IPEX connector</li><li><strong>GNSS</strong>: Custom support (attach your own, no dedicated connector)</li></ul><h3>Pin Configuration</h3><pre><code class="">ESP32-S3 GPIO Pinout (V3):
- GPIO 0:  User button (BOOT)
- GPIO 1:  Battery ADC input
- GPIO 8:  LoRa SPI CS
- GPIO 9:  LoRa SPI SCK
- GPIO 10: LoRa SPI MOSI
- GPIO 11: LoRa SPI MISO
- GPIO 12: LoRa RST
- GPIO 13: LoRa BUSY
- GPIO 14: LoRa DIO0/DIO1
- GPIO 35: Built-in LED
- GPIO 37: Battery ADC control
- GPIO 41: I2C SDA (OLED)
- GPIO 42: I2C SCL (OLED)
- GPIO 43: UART TX
- GPIO 44: UART RX
</code></pre><h3>Radio Architecture</h3><p>The V3 uses direct SX1262 control without external power amplification. The radio module handles antenna switching internally, making the design simpler but with potentially lower transmit power compared to the V4.</p><h3>Battery Monitoring</h3><ul><li>Uses GPIO 1 for ADC measurement</li><li>GPIO 37 controls ADC circuit (active HIGH for V3.2, active LOW for original V3)</li><li>Supports 3.3V-4.2V LiPo batteries</li></ul><h2>3.2. Heltec WiFi LoRa 32 V4 Board</h2><h3>Overview</h3><p>The Heltec WiFi LoRa 32 V4 is the enhanced version with external power amplification and GNSS support.</p><h3>Key Specifications</h3><ul><li><strong>Microcontroller</strong>: ESP32-S3 (dual-core, WiFi, Bluetooth)</li><li><strong>LoRa Radio</strong>: SX1262 with external PA</li><li><strong>Display</strong>: 0.96&quot; OLED (128x64 SSD1306)</li><li><strong>Memory</strong>: 16MB flash, 512KB RAM</li><li><strong>Power</strong>: 5V input via USB-C</li><li><strong>Frequency Range</strong>: 433-928 MHz ISM bands (dependent on version bought)</li><li><strong>Antenna</strong>: SMA connector</li><li><strong>GNSS</strong>: Dedicated connector for Heltec GNSS module</li></ul><h3>Pin Configuration</h3><pre><code class="">ESP32-S3 GPIO Pinout (V4):
- GPIO 0:  User button (BOOT)
- GPIO 1:  Battery ADC input
- GPIO 2:  LoRa PA enable
- GPIO 7:  LoRa PA power control
- GPIO 8:  LoRa SPI CS
- GPIO 9:  LoRa SPI SCK
- GPIO 10: LoRa SPI MOSI
- GPIO 11: LoRa SPI MISO
- GPIO 12: LoRa RST
- GPIO 13: LoRa BUSY
- GPIO 14: LoRa DIO0/DIO1
- GPIO 34: GNSS power control
- GPIO 35: Built-in LED
- GPIO 37: Battery ADC control
- GPIO 38: GNSS UART TX
- GPIO 39: GNSS UART RX
- GPIO 40: GNSS wake
- GPIO 41: GNSS PPS
- GPIO 42: GNSS reset
- GPIO 46: LoRa PA TX enable
- GPIO 3:  I2C SDA (OLED)
- GPIO 4:  I2C SCL (OLED)
- GPIO 43: UART TX
- GPIO 44: UART RX
</code></pre><h3>Radio Architecture</h3><p>The V4 includes an external power amplifier that requires careful control sequencing. Three additional GPIO pins manage PA power, enable, and transmit states for optimal performance.</p><h3>Battery Monitoring</h3><ul><li>Uses GPIO 1 for ADC measurement</li><li>GPIO 37 controls ADC circuit (active HIGH)</li><li>Supports 3.3V-4.2V LiPo batteries</li></ul><h2>3.3. Power Amplifier Control Differences</h2><h3>V3 Board (No External PA)</h3><ul><li><strong>Architecture</strong>: Direct SX1262 control</li><li><strong>Power Control</strong>: Internal to SX1262 radio module</li><li><strong>Initialization</strong>: Simple radio initialization only</li><li><strong>Transmit Power</strong>: Limited by SX1262 internal PA (~20dBm max)</li><li><strong>Complexity</strong>: Lower hardware complexity</li></ul><h3>V4 Board (External PA)</h3><ul><li><strong>Architecture</strong>: SX1262 + external RF power amplifier</li><li><strong>Power Control</strong>: Requires 3 GPIO pins for PA management</li><li><strong>Initialization Sequence</strong>: <ol><li>Configure PA control pins (GPIO 2, 7, 46)</li><li>Enable PA power (GPIO 2 HIGH)</li><li>Enable TX path (GPIO 46 HIGH)</li><li>Initialize radio module</li></ol></li><li><strong>Transmit Power</strong>: Higher output power capability</li><li><strong>Complexity</strong>: Higher hardware complexity, more precise timing required</li></ul><h3>Firmware Handling</h3><p>The firmware automatically detects board type at compile time using build flags:</p><ul><li><code class="">-DARDUINO_HELTEC_WIFI_LORA_32_V3</code> for V3 boards</li><li><code class="">-DARDUINO_HELTEC_WIFI_LORA_32_V4</code> for V4 boards</li></ul><p>This ensures correct radio and PA control initialization for each hardware variant.</p><h2>3.4. Antenna Connections</h2><h3>SMA Connector</h3><p>Both V3 and V4 boards feature U.FL antenna connectors for secure, professional antenna connections.</p><h3>Supported Antennas</h3><ul><li><strong>Frequency Range</strong>: Must match your operating frequency (433, 868, 915, 928 MHz)</li><li><strong>Impedance</strong>: 50Ω</li><li><strong>Connector Type</strong>: U.FL</li><li><strong>Gain</strong>: 2-5 dBi recommended for most applications</li></ul><h3>Antenna Requirements</h3><ul><li><strong>LoRa Operation</strong>: Quarter-wave or half-wave antennas optimized for your frequency</li><li><strong>VSWR</strong>: &lt; 2.0:1 recommended for best performance</li><li><strong>Power Handling</strong>: Must handle transmit power (28dBm/~600mW)</li></ul><p>⚠️ <strong>Important</strong>: Never transmit without a proper antenna connected. This can damage the radio module and violate FCC regulations.</p><h3>Antenna Selection Examples</h3><ul><li><strong>433 MHz</strong>: ¼-wave whip (164mm) or ½-wave dipole (328mm)</li><li><strong>868/915 MHz</strong>: ¼-wave whip (82mm) or ½-wave dipole (164mm)</li><li><strong>928 MHz</strong>: ¼-wave whip (76mm) or ½-wave dipole (152mm)</li></ul><h2>3.5. GNSS Module (V4 Only)</h2><h3>Hardware Interface</h3><p>The V4 board includes a dedicated 6-pin GNSS connector for the Heltec GNSS module.</p><h3>Pin Assignment</h3><pre><code class="">GNSS Connector (J1):
Pin 1: RST_GPS (Reset)
Pin 2: PPS (Pulse Per Second output)
Pin 3: WAKE_UP (Wake-up signal)
Pin 4: RX_GPS (ESP32 TX -&gt; module RX)
Pin 5: TX_GPS (module TX -&gt; ESP32 RX)
Pin 6: VDD_3V3 (3.3V Power)
Pin 7: VGNSS_Ctrl (Power control)
Pin 8: GND
</code></pre><h3>Supported Module</h3><ul><li><strong>Heltec GNSS Module</strong> <a href="https://heltec.org/project/l76-gnss-module/">L76K GNSS Module</a></li><li><strong>GNSS Systems</strong>: GPS, GLONASS, BeiDou, QZSS</li><li><strong>Antenna</strong>: Attached as part of the GNSS module</li><li><strong>Power</strong>: 3.3V, ~30-40mA current draw</li></ul><h3>ESP32 Pin Mapping</h3><ul><li><strong>GPIO 34</strong>: VGNSS_CTRL (power control, active LOW)</li><li><strong>GPIO 38</strong>: GNSS UART TX (ESP32 → GNSS)</li><li><strong>GPIO 39</strong>: GNSS UART RX (GNSS → ESP32)</li><li><strong>GPIO 40</strong>: GNSS WAKE</li><li><strong>GPIO 41</strong>: GNSS PPS</li><li><strong>GPIO 42</strong>: GNSS RST</li></ul><h3>Features</h3><ul><li><strong>NMEA Output</strong>: Standard NMEA-0183 sentences</li><li><strong>TCP Streaming</strong>: GNSS data available over network</li><li><strong>Serial Passthrough</strong>: Direct USB access for debugging</li><li><strong>Location Services</strong>: Position, velocity, time data</li><li><strong>Multiple Clients</strong>: Up to 4 simultaneous TCP connections</li></ul><h2>3.6. OLED Display</h2><h3>Display Specifications</h3><ul><li><strong>Type</strong>: SSD1306 OLED controller</li><li><strong>Size</strong>: 0.96&quot; diagonal (128x64 pixels)</li><li><strong>Interface</strong>: I2C</li><li><strong>Colors</strong>: Monochrome (blue pixels on black background)</li><li><strong>Viewing Angle</strong>: High contrast, wide viewing angle</li></ul><h3>Pin Connections</h3><p><strong>V3 Board:</strong></p><ul><li>SDA: GPIO 41</li><li>SCL: GPIO 42</li></ul><p><strong>V4 Board:</strong></p><ul><li>SDA: GPIO 3</li><li>SCL: GPIO 4</li></ul><h3>Display Content</h3><p>The OLED display shows real-time status information:</p><ol><li><p><strong>Splash Screen</strong> (3 seconds):</p><ul><li>LoRaTNCX logo</li></ul></li><li><p><strong>Boot Screen</strong></p><ul><li>Firmware version</li><li>Boot process</li></ul></li><li><p><strong>Status Screen</strong> (rotating display):</p><ul><li>TNC Basic Status</li><li>Current LoRa frequency and parameters</li><li>WiFi connection status</li><li>GNSS status (if applicable)</li><li>Battery voltage</li><li>Blank screen to save power</li></ul></li></ol><h3>Power Management</h3><ul><li><strong>Vext Control</strong>: Automatically powered on/off to save battery</li><li><strong>Low Power</strong>: Minimal current draw when not updating</li><li><strong>Configurable</strong>: Can be disabled via web interface</li></ul><h3>Configuration</h3><ul><li><strong>Rotation</strong>: Automatic cycling through different views</li><li><strong>Brightness</strong>: Fixed (OLED technology)</li><li><strong>Orientation</strong>: Landscape (128x64)</li></ul><h3>Benefits</h3><ul><li><strong>Field Operation</strong>: Check status without phone/computer</li><li><strong>Configuration Verification</strong>: Confirm settings at a glance</li><li><strong>Battery Monitoring</strong>: Real-time voltage display</li><li><strong>Professional Appearance</strong>: Status display enhances user experience</li></ul><hr><p><a href="getting-started">← Previous: Getting Started</a> | <a href="/manual">Back to Main Manual</a> | <a href="software-architecture">Next: Software Architecture →</a></p>`,73),Eu=[Tu],xu=pe({__name:"03-hardware-overview",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Pu,Eu))}}),Iu={class:"markdown-body"},Nu=he(`<h1>4. Software Architecture</h1><p>This section explains the internal structure of LoRaTNCX firmware, including the KISS protocol implementation, interrupt handling, and system organization.</p><h2>4.1. KISS Protocol Implementation</h2><h3>Overview</h3><p>LoRaTNCX implements the standard KISS (Keep It Simple, Stupid) protocol with LoRa-specific extensions. The KISS philosophy emphasizes silent operation - the TNC never sends unsolicited output, only responding to properly formatted KISS frames.</p><h3>Core Principles</h3><ul><li><strong>Silent Operation</strong>: No startup banners, debug output, or human-readable messages after startup</li><li><strong>Frame-Based Communication</strong>: All communication uses binary KISS frames</li><li><strong>Computer-to-Computer</strong>: Designed exclusively for programmatic control</li><li><strong>Minimal State</strong>: No complex command interpreters or mode switching</li></ul><h3>KISS Frame Format</h3><pre><code class="">Frame Structure:
┌─────────┬─────────┬─────────┬─────────────────┐
│ FEND    │ Command │ Data... │ FEND            │
│ (0xC0)  │ (0x00+) │         │ (0xC0)          │
└─────────┴─────────┴─────────┴─────────────────┘

FEND = Frame End (0xC0)
Command = Frame type (0x00 = Data, 0x06 = SETHARDWARE, etc.)
</code></pre><h3>Standard KISS Commands</h3><ul><li><strong>0x00</strong>: DATA frame - Send/receive packet data</li><li><strong>0xC0</strong>: FEND - Frame delimiter</li><li><strong>0xDB</strong>: FESC - Frame escape character</li><li><strong>0xDC</strong>: TFEND - Transposed frame end</li><li><strong>0xDD</strong>: TFESC - Transposed frame escape</li></ul><h3>LoRa Extensions (SETHARDWARE)</h3><p>Command <strong>0x06</strong> with subcommands for LoRa configuration:</p><table><thead><tr><th>Subcommand</th><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>0x01</td><td>4-byte float</td><td>Set frequency (MHz)</td></tr><tr><td>0x02</td><td>4-byte float</td><td>Set bandwidth (kHz)</td></tr><tr><td>0x03</td><td>1-byte</td><td>Set spreading factor (7-12)</td></tr><tr><td>0x04</td><td>1-byte</td><td>Set coding rate (5-8 = 4/5 to 4/8)</td></tr><tr><td>0x05</td><td>1-byte signed</td><td>Set TX power (2-20 dBm)</td></tr><tr><td>0x06</td><td>-</td><td>Get current configuration</td></tr><tr><td>0x07</td><td>-</td><td>Save to NVS flash</td></tr><tr><td>0x08</td><td>2-byte</td><td>Set sync word</td></tr><tr><td>0x09</td><td>1-byte</td><td>Enable/disable GNSS</td></tr><tr><td>0xFF</td><td>-</td><td>Factory reset</td></tr></tbody></table><h3>LoRa Extensions (GETHARDWARE)</h3><p>Command <strong>0x07</strong> for querying hardware status:</p><table><thead><tr><th>Subcommand</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td>0x01</td><td>Radio config</td><td>Frequency, BW, SF, CR, power, sync</td></tr><tr><td>0x02</td><td>4-byte float</td><td>Battery voltage</td></tr><tr><td>0x03</td><td>String</td><td>Board type and name</td></tr><tr><td>0x04</td><td>GNSS Status</td><td>GNSS enable, fix, sats, location</td></tr><tr><td>0xFF</td><td>All data</td><td>Complete status dump</td></tr></tbody></table><h2>4.2. SETHARDWARE and GETHARDWARE Commands</h2><h3>SETHARDWARE Implementation</h3><p>The SETHARDWARE command (0x06) allows runtime configuration of LoRa parameters:</p><pre><code class="language-cpp">// Example: Set frequency to 915.0 MHz
uint8_t frame[] = {0xC0, 0x06, 0x01, 0x00, 0x00, 0x3C, 0x70, 0xC0};
//                          ^     ^     ^     ^^^^^^^^^^^^     ^
//                         FEND  CMD  SUB   915.0 (float)   FEND
</code></pre><h3>GETHARDWARE Implementation</h3><p>The GETHARDWARE command (0x07) provides read access to current settings:</p><pre><code class="language-cpp">// Query battery voltage
uint8_t query[] = {0xC0, 0x07, 0x02, 0xC0};

// Response format:
// FEND, CMD, SUB, DATA..., FEND
// Example: Battery = 3.85V
// 0xC0, 0x07, 0x02, 0x40, 0x75, 0xC2, 0x8F, 0xC0
</code></pre><h3>Parameter Validation</h3><ul><li><strong>Frequency</strong>: 433.0 - 928.0 MHz (ISM bands)</li><li><strong>Bandwidth</strong>: 7.8, 10.4, 15.6, 20.8, 31.25, 41.7, 62.5, 125, 250, 500 kHz</li><li><strong>Spreading Factor</strong>: 7-12 (higher = longer range, slower data rate)</li><li><strong>Coding Rate</strong>: 5-8 (4/5 through 4/8, higher = better error correction)</li><li><strong>TX Power</strong>: 2-20 dBm (V3 limited by internal PA, V4 can use full range)</li><li><strong>Sync Word</strong>: 2-byte value (0x1424 default for public networks)</li><li><strong>GNSS Enable</strong>: 1-byte value (1 on, 0 off)</li></ul><h2>4.3. Interrupt-Driven Reception</h2><h3>Radio Event System</h3><p>LoRaTNCX uses interrupt-driven packet reception for efficient operation:</p><pre><code class="language-cpp">// Radio event callbacks
void OnTxDone(void) {
    // Transmission completed
    radioState = RADIO_STATE_RX;
    Radio.Rx(0); // Return to receive mode
}

void OnRxDone(uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr) {
    // Packet received successfully
    processReceivedPacket(payload, size, rssi, snr);
}

void OnTxTimeout(void) {
    // Transmission timeout
    handleTxTimeout();
}

void OnRxTimeout(void) {
    // Receive timeout
    Radio.Rx(0); // Continue listening
}

void OnRxError(void) {
    // Receive error (CRC, etc.)
    Radio.Rx(0); // Continue listening
}
</code></pre><h3>Interrupt Sources</h3><ul><li><strong>DIO0/DIO1</strong>: Radio state change interrupts</li><li><strong>BUSY</strong>: Radio busy status</li><li><strong>Timer</strong>: Deaf period timing</li><li><strong>Serial</strong>: KISS frame reception</li></ul><h3>Packet Processing Flow</h3><ol><li><strong>Radio Interrupt</strong>: Packet received, triggers OnRxDone</li><li><strong>CRC Validation</strong>: Automatic hardware CRC checking</li><li><strong>Frame Formatting</strong>: Add KISS framing (FEND + DATA + FEND)</li><li><strong>Queue Management</strong>: Buffer packet for serial transmission</li><li><strong>Serial Output</strong>: Send framed packet to host application</li></ol><h3>Transmit Flow</h3><ol><li><strong>KISS Frame Reception</strong>: Host sends data frame</li><li><strong>Deframing</strong>: Remove KISS framing, extract payload</li><li><strong>Radio Configuration</strong>: Set TX parameters</li><li><strong>Transmission</strong>: Send packet via LoRa radio</li><li><strong>Return to RX</strong>: Automatically switch back to receive mode</li></ol><h2>4.4. Configuration Management</h2><h3>NVS Storage</h3><p>Configuration persists across power cycles using ESP32 Non-Volatile Storage:</p><pre><code class="language-cpp">// Configuration structure for LoRa parameters
struct LoRaConfig {
    float frequency;        // MHz
    float bandwidth;        // kHz
    uint8_t spreading;      // SF 7-12
    uint8_t codingRate;     // 5-8 (for 4/5 to 4/8)
    int8_t power;           // dBm
    uint16_t syncWord;      // Sync word (2 bytes for SX126x)
    uint8_t preamble;       // Preamble length
    uint32_t magic;         // Magic number to verify valid config
};

// Save configuration
bool ConfigManager::saveConfig(const LoRaConfig&amp; config) {
    if (!preferences.begin(NVS_NAMESPACE, false)) {
        return false;
    }
    
    // Create a copy with magic number
    LoRaConfig configToSave = config;
    configToSave.magic = CONFIG_MAGIC;
    
    // Write configuration as a blob
    size_t written = preferences.putBytes(NVS_CONFIG_KEY, &amp;configToSave, sizeof(LoRaConfig));
    preferences.end();
    
    if (written != sizeof(LoRaConfig)) {
        return false;
    }
    
    return true;
}

// Load configuration
bool ConfigManager::loadConfig(LoRaConfig&amp; config) {
    if (!preferences.begin(NVS_NAMESPACE, false)) {
        return false;
    }
    
    // Check if config key exists
    if (!preferences.isKey(NVS_CONFIG_KEY)) {
        preferences.end();
        return false;
    }
    
    size_t len = preferences.getBytes(NVS_CONFIG_KEY, &amp;config, sizeof(LoRaConfig));
    preferences.end();
    
    // Check if we read the correct size
    if (len != sizeof(LoRaConfig)) {
        return false;
    }
    
    // Validate magic number
    if (config.magic != CONFIG_MAGIC) {
        return false;
    }
    
    // Validate ranges
    if (config.frequency &lt; 137.0 || config.frequency &gt; 1020.0 ||
        config.bandwidth &lt; 7.8 || config.bandwidth &gt; 500.0 ||
        config.spreading &lt; 6 || config.spreading &gt; 12 ||
        config.codingRate &lt; 5 || config.codingRate &gt; 8 ||
        config.power &lt; -9 || config.power &gt; 22) {
        return false;
    }
    
    return true;
}
</code></pre><h3>Configuration Sources</h3><ol><li><strong>Factory Defaults</strong>: Compiled-in default values</li><li><strong>NVS Storage</strong>: Persistent user configuration</li><li><strong>Runtime Commands</strong>: SETHARDWARE commands</li><li><strong>Web Interface</strong>: JSON API updates</li></ol><h3>Validation and Safety</h3><ul><li>Parameter range checking</li><li>Safe defaults for invalid values</li><li>Configuration backup before changes</li><li>Factory reset capability</li></ul><h2>4.5. Web Server and REST API</h2><h3>Web Server Architecture</h3><p>The firmware includes a complete web interface using ESPAsyncWebServer:</p><pre><code class="language-cpp">// Web server setup
AsyncWebServer server(80);

// Serve static files from SPIFFS
server.serveStatic(&quot;/&quot;, SPIFFS, &quot;/&quot;).setDefaultFile(&quot;index.html&quot;);

// API endpoints
server.on(&quot;/api/status&quot;, HTTP_GET, [](AsyncWebServerRequest *request) {
    String json = getSystemStatusJson();
    request-&gt;send(200, &quot;application/json&quot;, json);
});

server.on(&quot;/api/lora/config&quot;, HTTP_POST, [](AsyncWebServerRequest *request) {
    // Handle LoRa configuration update
    handleLoRaConfigUpdate(request);
});

// Start server
server.begin();
</code></pre><h3>REST API Endpoints</h3><h4>Status and Monitoring</h4><ul><li><code class="">GET /api/status</code> - System status (WiFi, battery, uptime)</li><li><code class="">GET /api/lora/config</code> - Current LoRa configuration</li><li><code class="">GET /api/wifi/config</code> - Current WiFi configuration</li><li><code class="">GET /api/wifi/scan</code> - Available WiFi networks</li></ul><h4>Configuration Updates</h4><ul><li><code class="">POST /api/lora/config</code> - Update LoRa parameters</li><li><code class="">POST /api/lora/save</code> - Save LoRa config to flash</li><li><code class="">POST /api/wifi/config</code> - Update WiFi settings</li><li><code class="">POST /api/reboot</code> - Reboot the device</li></ul><h3>Web Interface Features</h3><ul><li><strong>Responsive Design</strong>: Works on desktop, tablet, and mobile</li><li><strong>Real-time Updates</strong>: AJAX polling for status information</li><li><strong>Form Validation</strong>: Client-side parameter validation</li><li><strong>Error Handling</strong>: User-friendly error messages</li><li><strong>Security</strong>: Basic authentication for configuration changes</li></ul><h3>SPIFFS File System</h3><p>Web interface files are stored in SPIFFS:</p><ul><li><code class="">index.html</code> - Main interface</li><li><code class="">style.css</code> - Styling</li><li><code class="">app.js</code> - Client-side JavaScript</li><li>Various assets (icons, fonts)</li></ul><h3>Power Considerations</h3><ul><li>Web server can be disabled to save power</li><li>WiFi modes: Off, AP only, STA only, AP+STA</li><li>Automatic power management for battery operation</li></ul><hr><p><a href="hardware-overview">← Previous: Hardware Overview</a> | <a href="/manual">Back to Main Manual</a> | <a href="installation-setup">Next: Installation and Setup →</a></p>`,62),qu=[Nu],ku=pe({__name:"04-software-architecture",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Iu,qu))}}),Lu={class:"markdown-body"},Fu=he(`<h1>5. Installation and Setup</h1><p>This section provides detailed instructions for setting up your development environment and building/uploading LoRaTNCX firmware to your Heltec board.</p><h2>5.1. PlatformIO Environment Setup</h2><h3>System Requirements</h3><p><strong>Operating Systems:</strong></p><ul><li>Windows 10/11</li><li>macOS 10.12 or later</li><li>Linux (Ubuntu 18.04+, CentOS 7+, etc.)</li></ul><p><strong>Hardware Requirements:</strong></p><ul><li>2GB RAM minimum (4GB recommended)</li><li>1GB free disk space</li><li>USB port for board connection</li></ul><p><strong>Software Prerequisites:</strong></p><ul><li>Python 3.6 or later</li><li>Git</li><li>USB-to-serial drivers (usually automatic on Linux/macOS)</li></ul><h3>Installation Methods</h3><h4>Method 1: VS Code with PlatformIO Extension (Recommended)</h4><ol><li><p><strong>Install Visual Studio Code</strong></p><pre><code class="language-bash"># Windows: Download from https://code.visualstudio.com/
# macOS: brew install --cask visual-studio-code
# Linux: sudo snap install code --classic
</code></pre></li><li><p><strong>Install PlatformIO Extension</strong></p><ul><li>Open VS Code</li><li>Go to Extensions (Ctrl+Shift+X)</li><li>Search for “PlatformIO IDE”</li><li>Install and reload VS Code</li></ul></li><li><p><strong>Clone the Repository</strong></p><pre><code class="language-bash">git clone https://github.com/kc1awv/LoRaTNCX.git
cd LoRaTNCX
</code></pre></li><li><p><strong>Open in VS Code</strong></p><ul><li>File → Open Folder → Select LoRaTNCX directory</li><li>PlatformIO should automatically detect the project</li></ul></li></ol><h4>Method 2: PlatformIO Core (Command Line)</h4><ol><li><p><strong>Install PlatformIO Core</strong></p><pre><code class="language-bash"># Using pip (recommended)
pip install platformio

# Or using installer script
curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py | python
</code></pre></li><li><p><strong>Clone Repository</strong></p><pre><code class="language-bash">git clone https://github.com/kc1awv/LoRaTNCX.git
cd LoRaTNCX
</code></pre></li><li><p><strong>Verify Installation</strong></p><pre><code class="language-bash">pio --version
# Should show: PlatformIO Core, version x.x.x
</code></pre></li></ol><h3>Project Structure</h3><p>After setup, your project should have this structure:</p><pre><code class="">LoRaTNCX/
├── platformio.ini          # PlatformIO configuration
├── src/                    # Source code
│   ├── main.cpp
│   ├── kiss.cpp
│   └── ...
├── include/                # Header files
├── data/                   # SPIFFS web interface files
├── test/                   # Test files
├── boards/                 # Custom board definitions
├── variants/               # Board-specific pin configurations
└── .vscode/                # VS Code configuration
</code></pre><h3>Initial Configuration</h3><ol><li><p><strong>Select Target Board</strong></p><ul><li>The project supports two environments: <ul><li><code class="">heltec_wifi_lora_32_V3</code> for Heltec WiFi LoRa 32 V3</li><li><code class="">heltec_wifi_lora_32_V4</code> for Heltec WiFi LoRa 32 V4</li></ul></li></ul></li><li><p><strong>Verify Dependencies</strong></p><pre><code class="language-bash">pio lib list
# Should show installed libraries:
# RadioLib, U8g2, ESPAsyncWebServer, ArduinoJson, TinyGPSPlus
</code></pre></li></ol><h2>5.2. Building the Firmware</h2><h3>Build Process Overview</h3><p>The build process:</p><ol><li>Compiles C/C++ source files</li><li>Links with required libraries</li><li>Generates firmware binary</li><li>Prepares for upload</li></ol><h3>Building for V3 Board</h3><p><strong>Using VS Code:</strong></p><ol><li>Open PlatformIO sidebar (alien icon)</li><li>Select “heltec_wifi_lora_32_V3” environment</li><li>Click the “Build” button (✓)</li></ol><p><strong>Using Command Line:</strong></p><pre><code class="language-bash"># Build firmware
pio run --environment heltec_wifi_lora_32_V3

# Expected output:
# Processing heltec_wifi_lora_32_V3 (board: heltec_wifi_lora_32_V3; framework: arduino)
# ----------------------------------------------------------------------------------
# Verbose mode can be enabled via \`-v, --verbose\` option
# CONFIGURATION: https://docs.platformio.org/page/boards/espressif32/heltec_wifi_lora_32_V3.html
# PLATFORM: Espressif 32 (6.4.0) &gt; Heltec WiFi LoRa 32 (V3)
# ...
# Building in release mode
# ...
# Firmware size: 1.2 MB
# ============== [SUCCESS] Took 45.67 seconds ==============
</code></pre><h3>Building for V4 Board</h3><p><strong>Using VS Code:</strong></p><ol><li>Open PlatformIO sidebar</li><li>Select “heltec_wifi_lora_32_V4” environment</li><li>Click the “Build” button</li></ol><p><strong>Using Command Line:</strong></p><pre><code class="language-bash"># Build firmware
pio run --environment heltec_wifi_lora_32_V4
</code></pre><h3>Build Configuration</h3><p>The <code class="">platformio.ini</code> file defines build settings:</p><pre><code class="language-ini">[env:heltec_wifi_lora_32_V3]
board = heltec_wifi_lora_32_V3
board_build.filesystem = spiffs
build_flags =
    -DARDUINO_HELTEC_WIFI_LORA_32_V3
</code></pre><p><strong>Key Build Flags:</strong></p><ul><li><code class="">-DARDUINO_HELTEC_WIFI_LORA_32_V3/V4</code>: Board identification</li><li>Watchdog timer configuration for stability</li><li>SPIFFS filesystem support</li></ul><h3>Troubleshooting Builds</h3><p><strong>Common Issues:</strong></p><ol><li><p><strong>Missing Dependencies</strong></p><pre><code class="language-bash">pio lib install  # Install all required libraries
</code></pre></li><li><p><strong>Board Not Recognized</strong></p><pre><code class="language-bash">pio boards espressif32 | grep heltec
# Should list available Heltec boards
</code></pre></li><li><p><strong>Compilation Errors</strong></p><ul><li>Check ESP32 board support in PlatformIO</li><li>Update PlatformIO: <code class="">pio upgrade</code></li><li>Clean build: <code class="">pio run --target clean</code></li></ul></li><li><p><strong>Memory Issues</strong></p><ul><li>Firmware size should be under 8MB</li><li>Check build output for memory usage warnings</li></ul></li></ol><h2>5.3. Uploading Firmware</h2><h3>Upload Requirements</h3><p><strong>Hardware Setup:</strong></p><ul><li>Connect board via USB-C cable</li><li>Ensure board is in bootloader mode (automatic)</li><li>No antenna needed for upload</li></ul><p><strong>Serial Port Detection:</strong></p><pre><code class="language-bash"># Linux/macOS
ls /dev/tty* | grep -E &quot;(USB|ACM)&quot;

# Windows
# Check Device Manager for COM ports
</code></pre><h3>Uploading to V3 Board</h3><p><strong>Using VS Code:</strong></p><ol><li>Select “heltec_wifi_lora_32_V3” environment</li><li>Click “Upload” button (→)</li></ol><p><strong>Using Command Line:</strong></p><pre><code class="language-bash"># Upload firmware
pio run --target upload --environment heltec_wifi_lora_32_V3

# Or specify serial port
pio run --target upload --environment heltec_wifi_lora_32_V3 --upload-port /dev/ttyACM0
</code></pre><h3>Uploading to V4 Board</h3><p><strong>Using VS Code:</strong></p><ol><li>Select “heltec_wifi_lora_32_V4” environment</li><li>Click “Upload” button</li></ol><p><strong>Using Command Line:</strong></p><pre><code class="language-bash"># Upload firmware
pio run --target upload --environment heltec_wifi_lora_32_V4
</code></pre><h3>Upload Process Details</h3><ol><li><strong>Bootloader Mode</strong>: PlatformIO automatically resets board into bootloader</li><li><strong>Flash Programming</strong>: ESP32 flash memory is programmed</li><li><strong>Verification</strong>: Firmware integrity is checked after upload</li><li><strong>Reset</strong>: Board automatically reboots with new firmware</li></ol><h3>Upload Troubleshooting</h3><p><strong>Common Issues:</strong></p><ol><li><p><strong>Port Not Found</strong></p><pre><code class="language-bash"># List available ports
pio device list

# Manual port specification
pio run --target upload --upload-port /dev/ttyUSB0
</code></pre></li><li><p><strong>Permission Denied (Linux)</strong></p><pre><code class="language-bash"># Add user to dialout group
sudo usermod -a -G dialout $USER
# Logout and login again
</code></pre></li><li><p><strong>Upload Fails</strong></p><ul><li>Check USB cable (data cable, not charge-only)</li><li>Try different USB port</li><li>Reset board manually (press and release RST button)</li></ul></li><li><p><strong>Bootloader Issues</strong></p><ul><li>Hold BOOT button while plugging in USB</li><li>Or press RST while holding BOOT</li></ul></li></ol><h2>5.4. Uploading Filesystem (SPIFFS)</h2><h3>SPIFFS Overview</h3><p>SPIFFS (SPI Flash File System) stores the web interface files:</p><ul><li><code class="">index.html</code> - Main web interface</li><li>CSS and JavaScript files</li><li>Static assets (fonts, icons)</li></ul><h3>Upload Process</h3><p><strong>Important:</strong> Upload firmware first, then filesystem.</p><p><strong>Using VS Code:</strong></p><ol><li>Select environment (V3 or V4)</li><li>Run “Upload Filesystem Image” task</li></ol><p><strong>Using Command Line:</strong></p><p>For V3:</p><pre><code class="language-bash">pio run --target uploadfs --environment heltec_wifi_lora_32_V3
</code></pre><p>For V4:</p><pre><code class="language-bash">pio run --target uploadfs --environment heltec_wifi_lora_32_V4
</code></pre><h3>Filesystem Contents</h3><p>The <code class="">data/</code> directory contains:</p><pre><code class="">data/
├── index.html        # Main web interface
├── app.js.gz         # JavaScript functionality
└── a/
    ├── css
    |   └── bs.css.gz # Bootstrap 5 CSS
    └── js
        └── bs.js.gz  # Bootstrap 5 JS
</code></pre><h3>SPIFFS Operations</h3><p><strong>File Management:</strong></p><ul><li>Files are read-only at runtime</li><li>Upload overwrites entire filesystem</li><li>No file modification after upload</li></ul><p><strong>Size Limits:</strong></p><ul><li>Total filesystem size: ~1.5MB (depends on partition)</li><li>Individual files: Limited by available space</li><li>Compression: Files are stored uncompressed</li></ul><h3>Troubleshooting SPIFFS Upload</h3><ol><li><strong>Upload Order</strong>: Always upload firmware before filesystem</li><li><strong>Space Issues</strong>: Check file sizes in data/ directory</li><li><strong>Corruption</strong>: Re-upload if web interface doesn’t load</li><li><strong>Verification</strong>: Web interface should be accessible after upload</li></ol><h2>5.5. Factory Reset and Erase Flash</h2><h3>When to Erase</h3><p><strong>Scenarios requiring flash erase:</strong></p><ul><li>Corrupted configuration</li><li>Testing with clean state</li><li>Preparing for new firmware version</li></ul><h3>Erase Process</h3><p><strong>Using VS Code:</strong></p><ol><li>Select environment</li><li>Run “Erase Flash” task</li></ol><p><strong>Using Command Line:</strong></p><p>For V3:</p><pre><code class="language-bash">pio run --target erase --environment heltec_wifi_lora_32_V3
</code></pre><p>For V4:</p><pre><code class="language-bash">pio run --target erase --environment heltec_wifi_lora_32_V4
</code></pre><h3>What Gets Erased</h3><p><strong>Complete Flash Erase:</strong></p><ul><li>All firmware code</li><li>SPIFFS filesystem (web interface)</li><li>NVS configuration storage</li><li>WiFi credentials</li><li>LoRa radio settings</li><li>All user data</li></ul><p><strong>Result:</strong> Board returns to factory state, requires full setup.</p><h3>Post-Erase Setup</h3><p>After erase:</p><ol><li><strong>Upload Firmware</strong> (Section 5.3)</li><li><strong>Upload Filesystem</strong> (Section 5.4)</li><li><strong>Configure Device</strong> (Section 6)</li><li><strong>Test Operation</strong> (Section 13)</li></ol><h3>Partial Reset Options</h3><p><strong>Configuration Reset Only:</strong></p><ul><li>Use web interface “Factory Reset” button</li><li>Or send KISS command: <code class="">0xC0 0x06 0xFF 0xC0</code></li><li>Preserves firmware and filesystem</li></ul><p><strong>WiFi Reset:</strong></p><ul><li>Web interface: WiFi → “Clear Settings”</li><li>Removes saved WiFi credentials only</li></ul><h3>Safety Precautions</h3><p>⚠️ <strong>Backup Important Data:</strong></p><ul><li>Document your LoRa configuration</li><li>Save WiFi network settings</li><li>Note any custom configurations</li></ul><p>⚠️ <strong>Complete Process:</strong></p><ul><li>Erase → Upload Firmware → Upload Filesystem → Configure</li><li>Skipping steps may result in non-functional device</li></ul><hr><p><a href="software-architecture">← Previous: Software Architecture</a> | <a href="/manual">Back to Main Manual</a> | <a href="configuration">Next: Configuration →</a></p>`,117),Du=[Fu],Ou=pe({__name:"05-installation-setup",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Lu,Du))}}),Mu={class:"markdown-body"},Bu=he(`<h1>6. Configuration</h1><p>LoRaTNCX provides multiple configuration methods to suit different user preferences and use cases. This section covers all available configuration approaches and their appropriate applications.</p><h2>6.1. Using the Command-Line Tool</h2><p>The <code class="">loratncx_config.py</code> script provides comprehensive command-line configuration capabilities, ideal for scripting, automation, and users who prefer terminal interfaces.</p><h3>Installation and Setup</h3><pre><code class="language-bash"># Make executable
chmod +x tools/loratncx_config.py

# Verify Python dependencies (usually pre-installed)
python3 --version  # Should be 3.6+
</code></pre><h3>Basic Usage</h3><pre><code class="language-bash"># Syntax
python3 tools/loratncx_config.py &lt;serial_port&gt; [options]

# Example
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-config
</code></pre><h3>Query Commands</h3><p><strong>Get Current Configuration:</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-config
# Output:
# ================================================================
# LoRaTNCX Current Configuration
# ================================================================
#   Frequency:        915.000 MHz
#   Bandwidth:        125.0 kHz
#   Spreading Factor: SF12
#   Coding Rate:      4/7
#   Output Power:     20 dBm
#   Sync Word:        0x1424
# ================================================================
</code></pre><p><strong>Get Battery Voltage:</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-battery
# Output: Battery: 3.85V
</code></pre><p><strong>Get Board Information:</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-board
# Output: Board: Heltec WiFi LoRa 32 V4
</code></pre><p><strong>Get GNSS Status (V4 only):</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-gnss
# Output: GNSS: enabled, satellites: 8, position: 42.3601°N 71.0589°W
</code></pre><p><strong>Get All Information:</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-all
# Combines config + battery + board + gnss info
</code></pre><h3>Configuration Commands</h3><p><strong>Set Frequency:</strong></p><pre><code class="language-bash"># Valid ranges: 433.0 - 928.0 MHz
python3 tools/loratncx_config.py /dev/ttyUSB0 --frequency 915.0
python3 tools/loratncx_config.py /dev/ttyUSB0 --frequency 433.775
</code></pre><p><strong>Set Bandwidth:</strong></p><pre><code class="language-bash"># Valid values: 7.8, 10.4, 15.6, 20.8, 31.25, 41.7, 62.5, 125, 250, 500 kHz
python3 tools/loratncx_config.py /dev/ttyUSB0 --bandwidth 125.0
python3 tools/loratncx_config.py /dev/ttyUSB0 --bandwidth 62.5  # Long range
</code></pre><p><strong>Set Spreading Factor:</strong></p><pre><code class="language-bash"># Valid range: 6-12 (higher = longer range, slower speed)
python3 tools/loratncx_config.py /dev/ttyUSB0 --spreading-factor 12  # Maximum range
python3 tools/loratncx_config.py /dev/ttyUSB0 --spreading-factor 7   # Fastest speed
</code></pre><p><strong>Set Coding Rate:</strong></p><pre><code class="language-bash"># Valid range: 5-8 (4/5 through 4/8, higher = better error correction)
python3 tools/loratncx_config.py /dev/ttyUSB0 --coding-rate 7  # 4/7 (default)
python3 tools/loratncx_config.py /dev/ttyUSB0 --coding-rate 8  # 4/8 (best FEC)
</code></pre><p><strong>Set Output Power:</strong></p><pre><code class="language-bash"># Valid range: 2-20 dBm (V3 limited by internal PA, V4 can use full range)
python3 tools/loratncx_config.py /dev/ttyUSB0 --power 20   # Maximum power
python3 tools/loratncx_config.py /dev/ttyUSB0 --power 10   # Reduced power
</code></pre><p><strong>Set Sync Word:</strong></p><pre><code class="language-bash"># 2-byte hex value (default: 0x1424 for public networks)
python3 tools/loratncx_config.py /dev/ttyUSB0 --syncword 0x1424
python3 tools/loratncx_config.py /dev/ttyUSB0 --syncword 0x3444  # LoRaWAN
</code></pre><p><strong>GNSS Control (V4 only):</strong></p><pre><code class="language-bash"># Enable/disable GNSS
python3 tools/loratncx_config.py /dev/ttyUSB0 --gnss-enable true
python3 tools/loratncx_config.py /dev/ttyUSB0 --gnss-enable false
</code></pre><h3>Management Commands</h3><p><strong>Save Configuration:</strong></p><pre><code class="language-bash"># Save current settings to non-volatile storage
python3 tools/loratncx_config.py /dev/ttyUSB0 --save
</code></pre><p><strong>Factory Reset:</strong></p><pre><code class="language-bash"># Reset all settings to factory defaults
python3 tools/loratncx_config.py /dev/ttyUSB0 --reset
</code></pre><h3>Advanced Usage</h3><p><strong>Batch Configuration:</strong></p><pre><code class="language-bash"># Configure for long-range operation
python3 tools/loratncx_config.py /dev/ttyUSB0 \\
    --frequency 915.0 \\
    --bandwidth 62.5 \\
    --spreading-factor 12 \\
    --coding-rate 8 \\
    --power 20 \\
    --save
</code></pre><p><strong>Scripting Example:</strong></p><pre><code class="language-bash">#!/bin/bash
# Configure multiple TNCs identically
PORTS=(&quot;/dev/ttyUSB0&quot; &quot;/dev/ttyUSB1&quot; &quot;/dev/ttyACM0&quot;)

for port in &quot;\${PORTS[@]}&quot;; do
    echo &quot;Configuring $port...&quot;
    python3 tools/loratncx_config.py $port --frequency 915.0 --save
done
</code></pre><h3>Troubleshooting</h3><p><strong>Port Not Found:</strong></p><pre><code class="language-bash"># List available serial ports
python3 -c &quot;import serial.tools.list_ports; print([p.device for p in serial.tools.list_ports.comports()])&quot;
</code></pre><p><strong>Permission Denied:</strong></p><pre><code class="language-bash"># Add user to dialout group (Linux)
sudo usermod -a -G dialout $USER
# Logout and login again
</code></pre><p><strong>No Response:</strong></p><ul><li>Verify correct serial port</li><li>Check baud rate (default 115200)</li><li>Ensure TNC is powered and firmware uploaded</li><li>Try resetting the TNC</li></ul><h2>6.2. Web Interface Configuration</h2><p>The web interface provides an intuitive, browser-based configuration experience suitable for most users and all device types.</p><h3>Accessing the Interface</h3><p><strong>Default Access:</strong></p><ol><li>Connect to LoRaTNCX WiFi network: <code class="">LoRaTNCX-XXXXXXXXXXXX</code></li><li>Password: <code class="">loratncx</code></li><li>Open browser to: <code class="">http://192.168.4.1</code></li></ol><p><strong>Station Mode Access:</strong></p><ul><li>Connect to same network as TNC</li><li>Access via TNC’s IP address</li><li>Default: <code class="">http://192.168.4.1</code> (may vary in station mode)</li></ul><h3>Interface Overview</h3><p>The web interface consists of several main sections:</p><p><strong>Status Dashboard:</strong></p><ul><li>Real-time system information</li><li>Battery voltage and WiFi status</li><li>Current LoRa configuration</li><li>GNSS status (V4 only)</li></ul><p><strong>LoRa Configuration:</strong></p><ul><li>Frequency, bandwidth, spreading factor</li><li>Coding rate and output power</li><li>Sync word settings</li><li>Configuration save/load</li></ul><p><strong>WiFi Configuration:</strong></p><ul><li>Network mode selection (AP/STA/AP+STA)</li><li>Access point settings</li><li>Station mode network selection</li><li>Security settings</li></ul><p><strong>GNSS Configuration (V4):</strong></p><ul><li>GNSS enable/disable</li><li>TCP port configuration</li><li>Serial passthrough settings</li><li>Real-time position display</li></ul><h3>Configuration Workflow</h3><ol><li><strong>Connect</strong> to TNC’s WiFi or network</li><li><strong>Navigate</strong> to configuration sections</li><li><strong>Adjust</strong> parameters using form controls</li><li><strong>Save</strong> changes to take effect</li><li><strong>Verify</strong> settings on status dashboard</li></ol><h3>Form Validation</h3><p>The web interface includes client-side validation:</p><ul><li>Parameter range checking</li><li>Real-time feedback</li><li>Error highlighting</li><li>Confirmation dialogs for critical changes</li></ul><h3>Real-time Updates</h3><ul><li><strong>AJAX Polling</strong>: Status updates every 5 seconds</li><li><strong>Live Feedback</strong>: Immediate parameter validation</li><li><strong>Connection Monitoring</strong>: Network status indicators</li></ul><h3>Mobile Compatibility</h3><ul><li><strong>Responsive Design</strong>: Works on phones/tablets</li><li><strong>Touch Controls</strong>: Optimized for mobile interaction</li><li><strong>Simplified Layout</strong>: Mobile-friendly navigation</li></ul><h2>6.3. KISS Protocol Configuration</h2><p>For advanced users and applications that need programmatic configuration, LoRaTNCX supports direct KISS protocol commands.</p><h3>KISS Frame Format</h3><p>All configuration uses standard KISS framing:</p><pre><code class="">┌───────┬───────┬─────────┬─────────────────┐
│ FEND  │ CMD   │ SUBCMD  │ DATA...         │ FEND
│ 0xC0  │ 0x06  │ 0x01    │ &lt;frequency&gt;     │ 0xC0
└───────┴───────┴─────────┴─────────────────┘
</code></pre><h3>SETHARDWARE Commands (0x06)</h3><table><thead><tr><th>Subcommand</th><th>Data Format</th><th>Description</th></tr></thead><tbody><tr><td>0x01</td><td>4-byte float</td><td>Set frequency (MHz)</td></tr><tr><td>0x02</td><td>4-byte float</td><td>Set bandwidth (kHz)</td></tr><tr><td>0x03</td><td>1-byte uint</td><td>Set spreading factor (7-12)</td></tr><tr><td>0x04</td><td>1-byte uint</td><td>Set coding rate (5-8)</td></tr><tr><td>0x05</td><td>1-byte int</td><td>Set TX power (2-20 dBm)</td></tr><tr><td>0x06</td><td>-</td><td>Get current configuration</td></tr><tr><td>0x07</td><td>-</td><td>Save to NVS</td></tr><tr><td>0x08</td><td>2-byte uint</td><td>Set sync word</td></tr><tr><td>0x09</td><td>1-byte bool</td><td>Enable/disable GNSS</td></tr><tr><td>0xFF</td><td>-</td><td>Factory reset</td></tr></tbody></table><h3>GETHARDWARE Queries (0x07)</h3><table><thead><tr><th>Subcommand</th><th>Response Format</th><th>Description</th></tr></thead><tbody><tr><td>0x01</td><td>Config struct</td><td>Radio configuration</td></tr><tr><td>0x02</td><td>4-byte float</td><td>Battery voltage</td></tr><tr><td>0x03</td><td>String</td><td>Board information</td></tr><tr><td>0x04</td><td>GNSS struct</td><td>GNSS status/position</td></tr><tr><td>0xFF</td><td>All data</td><td>Complete status</td></tr></tbody></table><h3>Example KISS Commands</h3><p><strong>Set Frequency to 915 MHz:</strong></p><pre><code class="">C0 06 01 42 F6 00 00 C0
# 0x42F60000 = 915.0 as IEEE 754 float
</code></pre><p><strong>Get Configuration:</strong></p><pre><code class="">C0 06 06 C0
# Response: C0 07 01 &lt;config_data&gt; C0
</code></pre><p><strong>Save Configuration:</strong></p><pre><code class="">C0 06 07 C0
</code></pre><h3>Integration with Applications</h3><p>KISS configuration works with any terminal program or custom application that can send/receive serial data.</p><p><strong>Python Example:</strong></p><pre><code class="language-python">import serial
import time

def send_kiss_command(port, command_bytes):
    ser = serial.Serial(port, 115200, timeout=1)
    # Add FEND framing
    frame = b&#39;\\xC0&#39; + command_bytes + b&#39;\\xC0&#39;
    ser.write(frame)
    time.sleep(0.1)
    response = ser.read(ser.in_waiting)
    ser.close()
    return response

# Set frequency to 915 MHz
freq_cmd = b&#39;\\x06\\x01&#39; + (915.0).to_bytes(4, &#39;big&#39;, signed=False)
send_kiss_command(&#39;/dev/ttyUSB0&#39;, freq_cmd)
</code></pre><h2>6.4. Persistent Settings</h2><p>LoRaTNCX automatically saves configuration changes to non-volatile storage, ensuring settings persist across power cycles.</p><h3>Storage Mechanism</h3><p><strong>NVS (Non-Volatile Storage):</strong></p><ul><li>ESP32’s built-in flash storage system</li><li>Key-value storage with wear leveling</li><li>Survives firmware updates</li><li>Limited write cycles (100,000+)</li></ul><h3>Configuration Persistence</h3><p><strong>Automatic Saving:</strong></p><ul><li>Web interface changes saved immediately</li><li>Command-line tool requires explicit <code class="">--save</code> flag</li><li>KISS commands require explicit save subcommand (0x07)</li></ul><p><strong>What Gets Saved:</strong></p><ul><li>LoRa radio parameters (frequency, BW, SF, CR, power, sync word)</li><li>WiFi configuration (mode, credentials, settings)</li><li>GNSS settings (enable/disable, TCP port)</li><li>System preferences</li></ul><p><strong>What Doesn’t Get Saved:</strong></p><ul><li>Current battery voltage (real-time only)</li><li>GNSS position data (temporary)</li><li>Network scan results (temporary)</li></ul><h3>Configuration Management</h3><p><strong>Backup Current Settings:</strong></p><pre><code class="language-bash"># Use command-line tool to document settings
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-all &gt; config_backup.txt
</code></pre><p><strong>Restore from Backup:</strong></p><pre><code class="language-bash"># Manual restoration using saved values
python3 tools/loratncx_config.py /dev/ttyUSB0 --frequency 915.0 --save
</code></pre><p><strong>Factory Reset:</strong></p><ul><li>Web interface: System → Factory Reset</li><li>Command line: <code class="">loratncx_config.py --reset</code></li><li>KISS command: <code class="">C0 06 FF C0</code></li></ul><h3>Configuration Conflicts</h3><p><strong>Multiple Configuration Methods:</strong></p><ul><li>Changes from any method are immediately effective</li><li>Last change wins (no method priority)</li><li>Save operations commit current runtime settings</li></ul><p><strong>Network Considerations:</strong></p><ul><li>WiFi settings changes may require reconnection</li><li>IP address changes require interface restart</li><li>Port changes require service restart</li></ul><h3>Best Practices</h3><ol><li><strong>Test Configuration</strong>: Verify settings work as expected</li><li><strong>Save Regularly</strong>: Use save commands after changes</li><li><strong>Document Changes</strong>: Keep records of working configurations</li><li><strong>Backup Critical Settings</strong>: Document important configurations</li><li><strong>Test After Reset</strong>: Verify operation after factory reset</li></ol><hr><p><a href="installation-setup">← Previous: Installation and Setup</a> | <a href="/manual">Back to Main Manual</a> | <a href="lora-radio-configuration">Next: LoRa Radio Configuration →</a></p>`,125),Gu=[Bu],Vu=pe({__name:"06-configuration",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Mu,Gu))}}),Uu={class:"markdown-body"},Wu=he(`<h1>7. LoRa Radio Configuration</h1><h2>Overview</h2><p>LoRaTNCX provides extensive configuration options for the LoRa radio parameters. These settings control the fundamental characteristics of your LoRa communication link, including range, speed, reliability, and network compatibility. Understanding these parameters is crucial for optimizing your LoRa network for specific applications.</p><h2>Key LoRa Parameters</h2><h3>Frequency (150-960 MHz)</h3><p>The operating frequency determines which radio band your device uses. This is the most critical parameter as all devices in your network must use the same frequency.</p><p><strong>Default:</strong> 915.0 MHz (US ISM band)</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --frequency 915.0</code></li><li><strong>Web Interface:</strong> Frequency field in Radio Configuration section</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x01 &lt;frequency_bytes&gt;</code> (4-byte float, little-endian)</li></ul><p><strong>Regional Considerations:</strong></p><ul><li><strong>US/Canada:</strong> 902-928 MHz ISM band</li><li><strong>Europe:</strong> 863-870 MHz or 433 MHz</li><li><strong>Australia:</strong> 915-928 MHz</li><li><strong>Asia:</strong> 433 MHz or 470-510 MHz</li></ul><p><strong>Important:</strong> Always verify local regulations before selecting frequencies. Some bands require licenses.</p><h3>Bandwidth</h3><p>Bandwidth affects data rate and receiver sensitivity. Wider bandwidth provides higher data rates but requires stronger signals.</p><p><strong>Default:</strong> 125 kHz</p><p><strong>Available Options:</strong></p><p><em><strong>Narrow bandwidths:</strong></em></p><ul><li><strong>7.8 kHz:</strong> Very high sensitivity, very slow data rate (not commonly used)</li><li><strong>10.4 kHz:</strong> High sensitivity, slow data rate</li><li><strong>15.6 kHz:</strong> Moderate sensitivity and data rate</li><li><strong>20.8 kHz:</strong> Balanced sensitivity and speed</li></ul><p><em><strong>Medium bandwidths:</strong></em></p><ul><li><strong>31.25 kHz:</strong> Faster data rate, lower sensitivity</li><li><strong>41.7 kHz:</strong> Even faster data rate, reduced sensitivity</li><li><strong>62.5 kHz:</strong> High data rate, lower sensitivity</li></ul><p><em><strong>Wide bandwidths:</strong></em></p><ul><li><strong>125 kHz:</strong> Best sensitivity, longest range, slower data rate</li><li><strong>250 kHz:</strong> Medium sensitivity and data rate</li><li><strong>500 kHz:</strong> Fastest data rate, shortest range</li></ul><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --bandwidth 125</code></li><li><strong>Web Interface:</strong> Bandwidth dropdown</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x02 &lt;float&gt;</code> (4-byte float, kHz)</li></ul><p><strong>Trade-offs:</strong></p><ul><li>Narrower bandwidth = longer range, slower speed</li><li>Wider bandwidth = shorter range, faster speed</li></ul><h3>Spreading Factor (7-12)</h3><p>Spreading factor determines how much the signal is “spread” across time and frequency. Higher spreading factors provide better sensitivity but slower data rates.</p><p><strong>Default:</strong> 12 (maximum sensitivity)</p><p><strong>Available Options:</strong> 7, 8, 9, 10, 11, 12</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --spreading-factor 12</code></li><li><strong>Web Interface:</strong> Spreading Factor dropdown</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x03 &lt;value&gt;</code> (7-12)</li></ul><p><strong>Trade-offs:</strong></p><ul><li><strong>SF7:</strong> Fastest (~5.5 kbps), shortest range</li><li><strong>SF12:</strong> Slowest (~293 bps), longest range (~20x SF7)</li></ul><p><strong>Data Rates (approximate, 125kHz BW):</strong></p><ul><li>SF7: 5469 bps</li><li>SF8: 3125 bps</li><li>SF9: 1758 bps</li><li>SF10: 977 bps</li><li>SF11: 537 bps</li><li>SF12: 293 bps</li></ul><h3>Coding Rate (5-8)</h3><p>Coding rate adds error correction to the data. Higher coding rates provide better reliability but reduce effective data rate.</p><p><strong>Default:</strong> 7 (4/7 coding)</p><p><strong>Available Options:</strong> 5, 6, 7, 8 (representing 4/5, 4/6, 4/7, 4/8)</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --coding-rate 7</code></li><li><strong>Web Interface:</strong> Coding Rate dropdown</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x04 &lt;value&gt;</code> (5-8)</li></ul><p><strong>Trade-offs:</strong></p><ul><li>Lower coding rate = higher data rate, less error correction</li><li>Higher coding rate = lower data rate, better error correction</li></ul><h3>Transmit Power (2-20 dBm)</h3><p>Output power controls transmission strength. Higher power increases range but consumes more battery.</p><p><strong>Default:</strong> 20 dBm (100 mW)</p><p><strong>Available Range:</strong> 2-22 dBm (V3 board), 2-28 dBm (V4 board with PA control)</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --power 20</code></li><li><strong>Web Interface:</strong> Power field (2-22/28 dBm)</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x05 &lt;value&gt;</code> (dBm value)</li></ul><p><strong>Power Considerations:</strong></p><ul><li><strong>Legal Limits:</strong> Check local regulations (US FCC: 30 dBm EIRP max for 915 MHz)</li><li><strong>Battery Life:</strong> Each 3dB increase doubles transmit power consumption</li><li><strong>Heat:</strong> High power may require cooling on V4 boards</li></ul><h3>Sync Word (0x0000-0xFFFF)</h3><p>Sync word allows multiple networks to coexist on the same frequency. Only devices with matching sync words can communicate.</p><p><strong>Default:</strong> 0x1424 (private network, SX127x compatible)</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --sync-word 0x1424</code></li><li><strong>Web Interface:</strong> Sync Word field (hex value)</li><li><strong>KISS Protocol:</strong> <code class="">SETHARDWARE 0x08 &lt;sync_bytes&gt;</code> (2 bytes, big-endian)</li></ul><p><strong>Recommended Values:</strong></p><ul><li><strong>0x1424:</strong> Private network (recommended)</li><li><strong>0x3444:</strong> Public/LoRaWAN network</li></ul><p><strong>Important:</strong> All devices in your network must use the same sync word.</p><h2>Advanced Configuration</h2><h3>Deaf Period (0-5000 ms)</h3><p>The deaf period prevents the radio from receiving immediately after transmitting, avoiding hearing its own echo when radios are close together.</p><p><strong>Default:</strong> 0 ms</p><p><strong>Configuration Methods:</strong></p><ul><li><strong>Command Line:</strong> <code class="">loratncx_config.py --deaf-period 2000</code></li><li><strong>Web Interface:</strong> Deaf Period field (milliseconds)</li></ul><p><strong>When to Adjust:</strong></p><ul><li><strong>Increase:</strong> If experiencing self-interference at close range</li><li><strong>Decrease:</strong> For faster turnaround in half-duplex applications</li><li><strong>Set to 0:</strong> Disable (not recommended unless you know what you’re doing)</li></ul><h2>Configuration Examples</h2><h3>Long Range, Slow Speed (Default)</h3><pre><code class="">Frequency: 915.0 MHz
Bandwidth: 125 kHz
Spreading Factor: 12
Coding Rate: 7
Power: 20 dBm
</code></pre><p><strong>Use Case:</strong> Maximum range, low data rate applications</p><h3>Medium Range, Balanced</h3><pre><code class="">Frequency: 915.0 MHz
Bandwidth: 250 kHz
Spreading Factor: 9
Coding Rate: 7
Power: 17 dBm
</code></pre><p><strong>Use Case:</strong> General purpose, mobile applications</p><h3>Short Range, High Speed</h3><pre><code class="">Frequency: 915.0 MHz
Bandwidth: 500 kHz
Spreading Factor: 7
Coding Rate: 5
Power: 14 dBm
</code></pre><p><strong>Use Case:</strong> Local networks, high-throughput applications</p><h2>Performance Optimization</h2><h3>Range vs Speed Trade-offs</h3><p>LoRa communication involves fundamental trade-offs between range, speed, and reliability:</p><ol><li><strong>Maximum Range:</strong> SF12, 125kHz BW, CR8, high power</li><li><strong>Balanced Performance:</strong> SF9-10, 250kHz BW, CR7, medium power</li><li><strong>Maximum Speed:</strong> SF7, 500kHz BW, CR5, any power</li></ol><h3>Link Budget Calculation</h3><p>Received signal strength depends on:</p><ul><li>Transmit power</li><li>Antenna gain (transmit and receive)</li><li>Free space path loss</li><li>Spreading factor gain</li><li>Coding rate overhead</li></ul><p><strong>Basic Range Estimation (line-of-sight):</strong></p><ul><li>SF12, 20dBm: ~10-20 km</li><li>SF9, 17dBm: ~2-5 km</li><li>SF7, 14dBm: ~0.5-1 km</li></ul><h3>Testing Your Configuration</h3><ol><li><strong>Start with defaults</strong> for initial testing</li><li><strong>Test range</strong> with your specific equipment and environment</li><li><strong>Monitor RSSI</strong> (Received Signal Strength Indicator) via KISS commands</li><li><strong>Adjust parameters</strong> based on real-world performance</li><li><strong>Document settings</strong> for each link in your network</li></ol><h2>Troubleshooting</h2><h3>No Communication</h3><ul><li><strong>Check frequency:</strong> All devices must use identical frequency</li><li><strong>Verify sync word:</strong> Must match across all devices</li><li><strong>Test power:</strong> Ensure adequate transmit power</li><li><strong>Check antennas:</strong> Proper antenna type and connection</li></ul><h3>Poor Range</h3><ul><li><strong>Increase spreading factor:</strong> SF12 provides maximum sensitivity</li><li><strong>Reduce bandwidth:</strong> 125kHz provides best sensitivity</li><li><strong>Increase power:</strong> If within legal limits</li><li><strong>Check antenna performance:</strong> SWR, gain, orientation</li></ul><h3>Slow Data Rate</h3><ul><li><strong>Increase bandwidth:</strong> 500kHz provides fastest data rate</li><li><strong>Reduce spreading factor:</strong> SF7 provides fastest transmission</li><li><strong>Lower coding rate:</strong> CR5 provides highest throughput</li></ul><h3>Interference Issues</h3><ul><li><strong>Change frequency:</strong> Move to less crowded channel</li><li><strong>Adjust sync word:</strong> Use private network sync word</li><li><strong>Modify bandwidth:</strong> Wider bandwidth may avoid narrowband interference</li></ul><hr><p><a href="configuration">← Previous: Configuration</a> | <a href="/manual">Back to Main Manual</a> | <a href="wifi-networking">Next: WiFi and Networking →</a></p>`,100),Hu=[Wu],Xu=pe({__name:"07-lora-radio-configuration",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Uu,Hu))}}),Ku={class:"markdown-body"},zu=he(`<h1>8. WiFi and Networking</h1><h2>Overview</h2><p>LoRaTNCX provides comprehensive WiFi networking capabilities that enable remote configuration, monitoring, and network-based KISS communication. The device can operate in multiple WiFi modes and includes a built-in web interface for easy management.</p><h2>WiFi Operating Modes</h2><p>LoRaTNCX supports four WiFi operating modes, allowing flexible network integration:</p><h3>1. Off Mode (TNC_WIFI_OFF = 0)</h3><ul><li><strong>Description:</strong> WiFi radio is completely disabled</li><li><strong>Use Case:</strong> Battery-powered operation, minimal power consumption</li><li><strong>Access:</strong> Serial connection only</li><li><strong>Default:</strong> No</li></ul><h3>2. Access Point Mode (TNC_WIFI_AP = 1)</h3><ul><li><strong>Description:</strong> Device creates its own WiFi network</li><li><strong>Use Case:</strong> Initial setup, field operation, direct device connection</li><li><strong>Access:</strong> Web interface at <code class="">http://192.168.4.1</code></li><li><strong>Default:</strong> Yes (factory default)</li></ul><h3>3. Station Mode (TNC_WIFI_STA = 2)</h3><ul><li><strong>Description:</strong> Device connects to existing WiFi network</li><li><strong>Use Case:</strong> Integration with home/office networks, remote monitoring</li><li><strong>Access:</strong> Device gets IP from network DHCP</li><li><strong>Default:</strong> No</li></ul><h3>4. Access Point + Station Mode (TNC_WIFI_AP_STA = 3)</h3><ul><li><strong>Description:</strong> Device creates AP while connected to external network</li><li><strong>Use Case:</strong> Bridging networks, multiple device access</li><li><strong>Access:</strong> Both AP (192.168.4.1) and station IP available</li><li><strong>Default:</strong> No</li></ul><h2>Default Configuration</h2><p>When LoRaTNCX starts for the first time or after a factory reset:</p><ul><li><strong>Mode:</strong> Access Point (AP) only</li><li><strong>AP SSID:</strong> <code class="">LoRaTNCX-XXXXXXXXXXXX</code> (where XXXXXXXXXXXX is MAC address)</li><li><strong>AP Password:</strong> <code class="">loratncx</code></li><li><strong>AP IP Address:</strong> <code class="">192.168.4.1</code></li><li><strong>TCP KISS Server:</strong> Enabled on port 8001</li><li><strong>DHCP:</strong> Enabled for station mode</li></ul><h2>Access Point Configuration</h2><h3>Setting Up Access Point Mode</h3><p><strong>Via Web Interface:</strong></p><ol><li>Connect to <code class="">LoRaTNCX-XXXXXXXXXXXX</code> network with password <code class="">loratncx</code></li><li>Open browser to <code class="">http://192.168.4.1</code></li><li>Navigate to WiFi Configuration page</li><li>Set Mode to “Access Point”</li><li>Configure AP SSID and password</li><li>Save configuration</li></ol><p><strong>Via REST API:</strong></p><pre><code class="language-json">POST /api/wifi/config
{
  &quot;mode&quot;: 1,
  &quot;ap_ssid&quot;: &quot;MyLoRaTNC&quot;,
  &quot;ap_password&quot;: &quot;mypassword123&quot;
}
</code></pre><h3>Access Point Security</h3><ul><li><strong>Password:</strong> 8-63 characters required</li><li><strong>Encryption:</strong> WPA2-PSK (WiFi Protected Access 2 with Pre-Shared Key)</li><li><strong>Channel:</strong> Auto-selected (typically channel 1, 6, or 11)</li><li><strong>Max Clients:</strong> Up to 4 concurrent connections</li></ul><p><strong>Security Recommendations:</strong></p><ul><li>Use strong, unique passwords</li><li>Change default SSID and password</li><li>Avoid using in public areas without additional security measures</li></ul><h2>Station Mode Setup</h2><h3>Connecting to Existing Networks</h3><p><strong>Via Web Interface:</strong></p><ol><li>Connect to LoRaTNCX access point</li><li>Open browser to <code class="">http://192.168.4.1</code></li><li>Go to WiFi Configuration page</li><li>Set Mode to “Station” or “Access Point + Station”</li><li>Click “Scan Networks” to find available WiFi networks</li><li>Select your network and enter password</li><li>Configure IP settings (DHCP recommended)</li><li>Save configuration</li></ol><p><strong>Via REST API:</strong></p><pre><code class="language-json">POST /api/wifi/config
{
  &quot;mode&quot;: 2,
  &quot;ssid&quot;: &quot;MyHomeNetwork&quot;,
  &quot;password&quot;: &quot;networkpassword&quot;,
  &quot;dhcp&quot;: true
}
</code></pre><h3>Network Scanning</h3><p>The device can scan for available WiFi networks:</p><p><strong>Via Web Interface:</strong></p><ul><li>WiFi Configuration page has “Scan Networks” button</li><li>Shows SSID, signal strength (RSSI), and encryption status</li></ul><p><strong>Via REST API:</strong></p><pre><code class="language-http">GET /api/wifi/scan
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;networks&quot;: [
    {
      &quot;ssid&quot;: &quot;MyHomeNetwork&quot;,
      &quot;rssi&quot;: -45,
      &quot;encrypted&quot;: true
    },
    {
      &quot;ssid&quot;: &quot;OpenNetwork&quot;,
      &quot;rssi&quot;: -67,
      &quot;encrypted&quot;: false
    }
  ]
}
</code></pre><h3>Static IP Configuration</h3><p>For networks without DHCP or when a fixed IP is required:</p><p><strong>Via Web Interface:</strong></p><ul><li>Set “DHCP” to disabled</li><li>Enter IP address, gateway, subnet mask, and DNS server</li></ul><p><strong>Via REST API:</strong></p><pre><code class="language-json">POST /api/wifi/config
{
  &quot;mode&quot;: 2,
  &quot;ssid&quot;: &quot;MyNetwork&quot;,
  &quot;password&quot;: &quot;password&quot;,
  &quot;dhcp&quot;: false,
  &quot;ip&quot;: &quot;192.168.1.100&quot;,
  &quot;gateway&quot;: &quot;192.168.1.1&quot;,
  &quot;subnet&quot;: &quot;255.255.255.0&quot;,
  &quot;dns&quot;: &quot;8.8.8.8&quot;
}
</code></pre><h2>TCP KISS Server</h2><p>LoRaTNCX includes a TCP KISS server for network-based packet radio applications.</p><h3>Configuration</h3><ul><li><strong>Default Port:</strong> 8001</li><li><strong>Protocol:</strong> Raw TCP with KISS framing</li><li><strong>Enabled by Default:</strong> Yes</li></ul><p><strong>Via Web Interface:</strong></p><ul><li>WiFi Configuration page</li><li>“TCP KISS Server” section</li><li>Enable/disable and set port number</li></ul><p><strong>Via REST API:</strong></p><pre><code class="language-json">POST /api/wifi/config
{
  &quot;tcp_kiss_enabled&quot;: true,
  &quot;tcp_kiss_port&quot;: 8001
}
</code></pre><h3>Connecting to TCP KISS Server</h3><p><strong>Using Netcat:</strong></p><pre><code class="language-bash">nc 192.168.4.1 8001
</code></pre><p><strong>Using Telnet:</strong></p><pre><code class="language-bash">telnet 192.168.4.1 8001
</code></pre><p><strong>Using Python:</strong></p><pre><code class="language-python">import socket
import time

# Connect to TCP KISS server
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((&#39;192.168.4.1&#39;, 8001))

# Send KISS frame (example: SET HARDWARE command)
kiss_frame = b&#39;\\xc0\\x06\\x01\\x00\\x00\\x80\\x3f\\xc0&#39;  # SET FREQUENCY to 1.0 MHz
sock.send(kiss_frame)

# Receive response
response = sock.recv(1024)
print(f&quot;Received: {response.hex()}&quot;)

sock.close()
</code></pre><h3>Integration Examples</h3><p><strong>Dire Wolf Integration:</strong></p><pre><code class="language-bash"># In direwolf.conf
AGWPORT 8001
AGWPEER 192.168.4.1:8001
</code></pre><p><strong>Custom Applications:</strong> The TCP KISS server accepts standard KISS frames for:</p><ul><li>Transmitting packets via LoRa</li><li>Receiving packets from LoRa network</li><li>Configuring radio parameters</li><li>Monitoring device status</li></ul><h2>Security Considerations</h2><h3>Network Security</h3><ol><li><p><strong>Change Default Passwords:</strong></p><ul><li>Access point password should be changed from default</li><li>Use strong passwords (12+ characters, mixed case, numbers, symbols)</li></ul></li><li><p><strong>WiFi Encryption:</strong></p><ul><li>Only connect to WPA2/WPA3 encrypted networks</li><li>Avoid open (unencrypted) WiFi networks</li></ul></li><li><p><strong>Firewall and Access Control:</strong></p><ul><li>Limit access to web interface when in station mode</li><li>Use VPN for remote access over public networks</li></ul></li></ol><h3>Device Security</h3><ol><li><p><strong>Firmware Updates:</strong></p><ul><li>Keep firmware updated for security patches</li><li>Verify firmware integrity before flashing</li></ul></li><li><p><strong>Physical Security:</strong></p><ul><li>Secure device physically when deployed</li><li>Use tamper-evident enclosures if needed</li></ul></li><li><p><strong>Configuration Backup:</strong></p><ul><li>Save configuration backups securely</li><li>Document network settings for recovery</li></ul></li></ol><h2>Troubleshooting</h2><h3>Cannot Connect to Access Point</h3><p><strong>Symptoms:</strong> Device not visible in WiFi network list</p><p><strong>Solutions:</strong></p><ul><li>Check if device is powered on and WiFi is enabled</li><li>Verify AP mode is active (OLED display shows “AP: LoRaTNCX-XXXX”)</li><li>Try different WiFi channels (1, 6, 11)</li><li>Check for interference from other devices</li></ul><h3>Cannot Connect to External Network</h3><p><strong>Symptoms:</strong> Station mode connection fails</p><p><strong>Solutions:</strong></p><ul><li>Verify SSID and password are correct</li><li>Check signal strength (RSSI should be better than -70 dBm)</li><li>Try different WiFi channels</li><li>Check if network has MAC address filtering</li><li>Verify DHCP server is available</li></ul><h3>Web Interface Not Accessible</h3><p><strong>Symptoms:</strong> Cannot reach <code class="">http://192.168.4.1</code> or station IP</p><p><strong>Solutions:</strong></p><ul><li>Ensure connected to correct WiFi network</li><li>Check IP address via OLED display or serial console</li><li>Try different browsers</li><li>Clear browser cache</li><li>Check firewall/antivirus blocking access</li></ul><h3>TCP KISS Server Connection Issues</h3><p><strong>Symptoms:</strong> Cannot connect to TCP port 8001</p><p><strong>Solutions:</strong></p><ul><li>Verify TCP KISS server is enabled in configuration</li><li>Check port number (default 8001)</li><li>Ensure no firewall blocking the port</li><li>Try connecting from same network segment</li><li>Check device logs for connection attempts</li></ul><h3>Slow or Unreliable Connection</h3><p><strong>Symptoms:</strong> Intermittent connectivity, slow response</p><p><strong>Solutions:</strong></p><ul><li>Check signal strength and move closer to access point</li><li>Avoid channel congestion (use WiFi analyzer app)</li><li>Reduce number of connected devices</li><li>Update device firmware</li><li>Check for electrical interference</li></ul><h2>Advanced Configuration</h2><h3>mDNS Service Discovery</h3><p>LoRaTNCX supports mDNS (Multicast DNS) for easy network discovery:</p><ul><li><strong>Service Name:</strong> <code class="">_http._tcp</code></li><li><strong>Hostname:</strong> <code class="">loratncx-xxxx.local</code> (where xxxx is MAC address suffix)</li><li><strong>Access:</strong> <code class="">http://loratncx-xxxx.local</code></li></ul><h3>Captive Portal</h3><p>When in AP mode, the device provides a captive portal for initial configuration:</p><ul><li>Automatically redirects to web interface</li><li>Works with most mobile devices and operating systems</li><li>Provides setup wizard for first-time configuration</li></ul><h3>Connection Monitoring</h3><p>The device includes automatic connection monitoring:</p><ul><li><strong>Reconnection:</strong> Automatic retry with exponential backoff</li><li><strong>Status Display:</strong> OLED shows connection status and IP addresses</li><li><strong>Logging:</strong> Connection events logged to serial console</li></ul><h3>Power Management</h3><p>WiFi power consumption can be significant:</p><ul><li><strong>AP Mode:</strong> ~80-120mA continuous</li><li><strong>STA Mode:</strong> ~60-100mA when connected</li><li><strong>AP+STA Mode:</strong> ~100-150mA continuous</li></ul><p>For battery operation, consider:</p><ul><li>Using station mode when possible</li><li>Disabling WiFi when not needed</li><li>Using sleep modes between transmissions</li></ul><hr><p><a href="lora-radio-configuration">← Previous: LoRa Radio Configuration</a> | <a href="/manual">Back to Main Manual</a> | <a href="web-interface">Next: Web Interface →</a></p>`,109),$u=[zu],ju=pe({__name:"08-wifi-networking",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Ku,$u))}}),Yu={class:"markdown-body"},Qu=he(`<h1>9. Web Interface</h1><h2>Overview</h2><p>LoRaTNCX includes a comprehensive web-based control center that provides full configuration and monitoring capabilities through any modern web browser. The interface is served directly from the device and requires no additional software installation.</p><h2>Accessing the Web Interface</h2><h3>Default Access Points</h3><p><strong>Access Point Mode (Default):</strong></p><ul><li><strong>URL:</strong> <code class="">http://192.168.4.1</code></li><li><strong>Network:</strong> <code class="">LoRaTNCX-XXXXXXXXXXXX</code> (where XXXXXXXXXXXX is MAC address)</li><li><strong>Password:</strong> <code class="">loratncx</code></li></ul><p><strong>Station Mode:</strong></p><ul><li><strong>URL:</strong> Device IP address (shown on OLED display or via serial)</li><li><strong>Network:</strong> Your configured WiFi network</li><li><strong>Example:</strong> <code class="">http://192.168.1.100</code></li></ul><p><strong>mDNS Discovery:</strong></p><ul><li><strong>URL:</strong> <code class="">http://loratncx.local</code> (where xxxx is MAC address suffix)</li><li><strong>Works on:</strong> Networks that support mDNS (Bonjour)</li></ul><h3>Browser Compatibility</h3><p>The web interface works with all modern browsers:</p><ul><li><strong>Chrome/Chromium:</strong> Recommended (best performance)</li><li><strong>Firefox:</strong> Fully supported</li><li><strong>Safari:</strong> Supported (including iOS)</li><li><strong>Edge:</strong> Fully supported</li><li><strong>Mobile browsers:</strong> Responsive design for phones/tablets</li></ul><h3>First-Time Setup</h3><ol><li><strong>Power on</strong> the LoRaTNCX device</li><li><strong>Connect</strong> to the <code class="">LoRaTNCX-XXXXXXXXXXXX</code> WiFi network</li><li><strong>Open browser</strong> and navigate to <code class="">http://192.168.4.1</code></li><li><strong>Configure</strong> WiFi settings for your network (optional)</li><li><strong>Begin using</strong> the device</li></ol><h2>Status Dashboard</h2><p>The status dashboard provides real-time information about device status and is visible at the top of every page.</p><h3>Status Cards</h3><p><strong>Board Information:</strong></p><ul><li><strong>Icon:</strong> Microchip symbol</li><li><strong>Shows:</strong> Board type (V3/V4) and hardware revision</li><li><strong>Updates:</strong> On device startup</li></ul><p><strong>WiFi Status:</strong></p><ul><li><strong>Icon:</strong> WiFi signal symbol (changes color based on status)</li><li><strong>Shows:</strong> Connection state (AP/STA/AP+STA) and mode</li><li><strong>Colors:</strong><ul><li><strong>Green:</strong> Connected to network</li><li><strong>Red:</strong> Disconnected or error</li><li><strong>Gray:</strong> WiFi disabled</li></ul></li></ul><p><strong>IP Address:</strong></p><ul><li><strong>Icon:</strong> Network cable symbol</li><li><strong>Shows:</strong> Current IP address(es)</li><li><strong>Displays:</strong><ul><li>AP mode: <code class="">192.168.4.1</code></li><li>STA mode: DHCP-assigned IP</li><li>AP+STA mode: Both addresses</li></ul></li></ul><p><strong>Battery Status:</strong></p><ul><li><strong>Icon:</strong> Battery symbol with level indicator</li><li><strong>Shows:</strong> Voltage and charge status</li><li><strong>Levels:</strong><ul><li><strong>Green:</strong> &gt; 3.9V (Good)</li><li><strong>Yellow:</strong> 3.7-3.9V (Medium)</li><li><strong>Red:</strong> &lt; 3.4V (Low/Critical)</li></ul></li></ul><p><strong>Uptime:</strong></p><ul><li><strong>Icon:</strong> Clock symbol</li><li><strong>Shows:</strong> Time since last restart</li><li><strong>Format:</strong> Days, hours, minutes, seconds</li></ul><h3>Auto-Refresh Feature</h3><ul><li><strong>Default:</strong> Enabled (refreshes every 5 seconds)</li><li><strong>Toggle:</strong> Checkbox in navigation area</li><li><strong>Purpose:</strong> Keeps status information current</li><li><strong>Disable:</strong> For manual control or to reduce network traffic</li></ul><h2>LoRa Configuration Page</h2><p>The LoRa Radio tab provides complete control over LoRa radio parameters.</p><h3>Configuration Fields</h3><p><strong>Frequency (MHz):</strong></p><ul><li><strong>Range:</strong> 150.0 - 960.0 MHz</li><li><strong>Default:</strong> 915.0 MHz (US ISM band)</li><li><strong>Input:</strong> Numeric field with validation</li></ul><p><strong>Bandwidth (kHz):</strong></p><ul><li><strong>Options:</strong> 125, 250, 500 kHz</li><li><strong>Default:</strong> 125 kHz</li><li><strong>Dropdown:</strong> Select from available options</li></ul><p><strong>Spreading Factor:</strong></p><ul><li><strong>Range:</strong> 7-12</li><li><strong>Default:</strong> 12</li><li><strong>Dropdown:</strong> SF7 through SF12</li></ul><p><strong>Coding Rate:</strong></p><ul><li><strong>Options:</strong> 4/5, 4/6, 4/7, 4/8</li><li><strong>Default:</strong> 4/7</li><li><strong>Dropdown:</strong> Displayed as 5-8 (numerator-1)</li></ul><p><strong>Output Power (dBm):</strong></p><ul><li><strong>Range:</strong> 2-20 dBm (V3), 2-22 dBm (V4)</li><li><strong>Default:</strong> 20 dBm</li><li><strong>Slider:</strong> Visual power level indicator</li></ul><p><strong>Sync Word:</strong></p><ul><li><strong>Format:</strong> Hexadecimal (0x0000-0xFFFF)</li><li><strong>Default:</strong> 0x1424</li><li><strong>Input:</strong> Hex field with validation</li></ul><h3>Configuration Actions</h3><p><strong>Apply Changes:</strong></p><ul><li><strong>Button:</strong> “Apply Configuration”</li><li><strong>Action:</strong> Applies settings to radio immediately</li><li><strong>Feedback:</strong> Success/error messages</li><li><strong>Persistence:</strong> Changes are temporary until saved</li></ul><p><strong>Save to Flash:</strong></p><ul><li><strong>Button:</strong> “Save Configuration”</li><li><strong>Action:</strong> Saves current settings to non-volatile memory</li><li><strong>Result:</strong> Settings persist across reboots</li></ul><p><strong>Reset to Defaults:</strong></p><ul><li><strong>Button:</strong> “Reset to Defaults”</li><li><strong>Action:</strong> Restores factory LoRa settings</li><li><strong>Confirmation:</strong> Requires user confirmation</li><li><strong>Scope:</strong> Only affects LoRa parameters</li></ul><h3>Real-Time Feedback</h3><ul><li><strong>Success Messages:</strong> Green alerts for successful operations</li><li><strong>Error Messages:</strong> Red alerts for configuration errors</li><li><strong>Validation:</strong> Input validation prevents invalid parameters</li><li><strong>Status Updates:</strong> Radio status updates after configuration changes</li></ul><h2>WiFi Configuration Page</h2><p>The Network tab manages all WiFi and networking settings.</p><h3>WiFi Mode Selection</h3><p><strong>Mode Options:</strong></p><ul><li><strong>Off:</strong> WiFi completely disabled</li><li><strong>Access Point:</strong> Device creates WiFi network</li><li><strong>Station:</strong> Device connects to existing network</li><li><strong>Access Point + Station:</strong> Both modes simultaneously</li></ul><p><strong>Mode Switching:</strong></p><ul><li><strong>Immediate Effect:</strong> Changes apply when “Apply” is clicked</li><li><strong>Connection Impact:</strong> May disconnect current session</li><li><strong>Reconnection:</strong> User may need to reconnect to new network</li></ul><h3>Access Point Configuration</h3><p><strong>SSID Settings:</strong></p><ul><li><strong>Field:</strong> Access Point SSID</li><li><strong>Default:</strong> <code class="">LoRaTNCX-XXXX</code></li><li><strong>Length:</strong> 1-32 characters</li></ul><p><strong>Password Settings:</strong></p><ul><li><strong>Field:</strong> Access Point Password</li><li><strong>Default:</strong> <code class="">loratncx</code></li><li><strong>Requirements:</strong> 8-63 characters</li><li><strong>Security:</strong> WPA2-PSK encryption</li></ul><h3>Station Mode Configuration</h3><p><strong>Network Selection:</strong></p><ul><li><strong>Scan Button:</strong> “Scan Networks”</li><li><strong>Results:</strong> List of available networks with signal strength</li><li><strong>Selection:</strong> Click network to auto-fill SSID</li></ul><p><strong>Connection Settings:</strong></p><ul><li><strong>SSID:</strong> Network name (manual entry or from scan)</li><li><strong>Password:</strong> Network password</li><li><strong>Security:</strong> Supports WPA/WPA2/WPA3 networks</li></ul><h3>Network Settings</h3><p><strong>DHCP Configuration:</strong></p><ul><li><strong>Toggle:</strong> Enable/disable DHCP</li><li><strong>Default:</strong> Enabled (automatic IP assignment)</li></ul><p><strong>Static IP (when DHCP disabled):</strong></p><ul><li><strong>IP Address:</strong> Device IP</li><li><strong>Gateway:</strong> Network gateway</li><li><strong>Subnet Mask:</strong> Network subnet</li><li><strong>DNS Server:</strong> DNS server IP</li></ul><h3>TCP KISS Server</h3><p><strong>Server Control:</strong></p><ul><li><strong>Enable/Disable:</strong> TCP KISS server toggle</li><li><strong>Port:</strong> Server port number</li><li><strong>Default:</strong> Enabled, port 8001</li></ul><p><strong>Connection Info:</strong></p><ul><li><strong>Status:</strong> Shows if server is running</li><li><strong>Clients:</strong> Number of connected clients (future feature)</li></ul><h3>Configuration Actions</h3><p><strong>Apply Changes:</strong></p><ul><li><strong>Button:</strong> “Apply Configuration”</li><li><strong>Warning:</strong> May cause disconnection</li><li><strong>Delay:</strong> 500ms delay before applying changes</li></ul><p><strong>Save to Flash:</strong></p><ul><li><strong>Button:</strong> “Save Configuration”</li><li><strong>Persistence:</strong> Settings survive reboots</li></ul><h2>GNSS Configuration Page</h2><p>The GNSS tab configures GPS/GLONASS functionality (V4 boards only).</p><h3>GNSS Settings</h3><p><strong>Enable/Disable:</strong></p><ul><li><strong>Toggle:</strong> GNSS functionality on/off</li><li><strong>Default:</strong> Enabled</li><li><strong>Hardware:</strong> Only available on V4 boards</li></ul><p><strong>Status Display:</strong></p><ul><li><strong>Fix Status:</strong> GPS lock indicator</li><li><strong>Satellites:</strong> Number of satellites visible</li><li><strong>Position:</strong> Latitude, longitude, altitude (when available)</li></ul><h3>NMEA Configuration</h3><p><strong>TCP Server:</strong></p><ul><li><strong>Port:</strong> NMEA data TCP port</li><li><strong>Default:</strong> 10110</li><li><strong>Protocol:</strong> Standard NMEA over TCP</li></ul><p><strong>Serial Output:</strong></p><ul><li><strong>Baud Rate:</strong> Serial GNSS output</li><li><strong>Default:</strong> 9600 baud</li><li><strong>Passthrough:</strong> Raw NMEA data on serial port</li></ul><h2>System Page</h2><p>The System tab provides system information and maintenance functions.</p><h3>System Information</h3><p><strong>Device Info:</strong></p><ul><li><strong>Board Type:</strong> V3 or V4</li><li><strong>Firmware Version:</strong> Current firmware version</li><li><strong>MAC Address:</strong> Device MAC address</li><li><strong>Chip ID:</strong> ESP32 unique identifier</li></ul><p><strong>Performance Metrics:</strong></p><ul><li><strong>Uptime:</strong> Time since last restart</li><li><strong>Free Heap:</strong> Available RAM</li><li><strong>CPU Frequency:</strong> Current clock speed</li></ul><p><strong>Storage Info:</strong></p><ul><li><strong>Flash Size:</strong> Total flash memory</li><li><strong>Free Space:</strong> Available storage</li><li><strong>SPIFFS Usage:</strong> Filesystem utilization</li></ul><h3>Maintenance Functions</h3><p><strong>Reboot Device:</strong></p><ul><li><strong>Button:</strong> “Reboot Device”</li><li><strong>Action:</strong> Restarts the ESP32</li><li><strong>Warning:</strong> Causes temporary disconnection</li></ul><p><strong>Factory Reset:</strong></p><ul><li><strong>Button:</strong> “Factory Reset” (future feature)</li><li><strong>Action:</strong> Reset all settings to defaults</li><li><strong>Warning:</strong> Removes all saved configurations</li></ul><h2>REST API Usage</h2><p>The web interface uses a RESTful API that can be accessed programmatically.</p><h3>API Endpoints</h3><p><strong>Status Information:</strong></p><pre><code class="language-http">GET /api/status
</code></pre><p>Returns real-time device status information.</p><p><strong>System Information:</strong></p><pre><code class="language-http">GET /api/system
</code></pre><p>Returns system performance metrics.</p><p><strong>LoRa Configuration:</strong></p><pre><code class="language-http">GET  /api/lora/config     # Get current LoRa settings
POST /api/lora/config     # Apply LoRa configuration
POST /api/lora/save       # Save LoRa config to flash
POST /api/lora/reset      # Reset LoRa to defaults
</code></pre><p><strong>WiFi Configuration:</strong></p><pre><code class="language-http">GET  /api/wifi/config     # Get current WiFi settings
POST /api/wifi/config     # Apply WiFi configuration
POST /api/wifi/save       # Save WiFi config to flash
GET  /api/wifi/scan       # Scan available networks
</code></pre><p><strong>GNSS Configuration:</strong></p><pre><code class="language-http">GET  /api/gnss/config     # Get GNSS settings
POST /api/gnss/config     # Apply GNSS configuration
GET  /api/gnss/status     # Get GNSS status/fix info
</code></pre><p><strong>System Control:</strong></p><pre><code class="language-http">POST /api/reboot          # Reboot the device
</code></pre><h3>API Response Format</h3><p>All API responses use JSON format:</p><p><strong>Success Response:</strong></p><pre><code class="language-json">{
  &quot;success&quot;: true,
  &quot;data&quot;: { ... },
  &quot;timestamp&quot;: 1234567890
}
</code></pre><p><strong>Error Response:</strong></p><pre><code class="language-json">{
  &quot;success&quot;: false,
  &quot;error&quot;: &quot;Error description&quot;,
  &quot;timestamp&quot;: 1234567890
}
</code></pre><h3>Authentication</h3><ul><li><strong>Current:</strong> No authentication required</li><li><strong>Security:</strong> Access control via network isolation</li><li><strong>Future:</strong> May include API key authentication</li></ul><h3>CORS Support</h3><ul><li><strong>Enabled:</strong> Cross-Origin Resource Sharing</li><li><strong>Headers:</strong> Standard CORS headers included</li><li><strong>Purpose:</strong> Allows web applications to access API</li></ul><h2>Mobile Compatibility</h2><p>The web interface is fully responsive and works on mobile devices.</p><h3>Mobile Features</h3><p><strong>Touch-Optimized:</strong></p><ul><li>Large touch targets for buttons</li><li>Swipe gestures for navigation</li><li>Responsive layout for small screens</li></ul><p><strong>Mobile Browsers:</strong></p><ul><li><strong>iOS Safari:</strong> Full support</li><li><strong>Android Chrome:</strong> Full support</li><li><strong>Mobile Firefox:</strong> Supported</li></ul><p><strong>Network Considerations:</strong></p><ul><li><strong>WiFi Only:</strong> Requires connection to device network</li><li><strong>No Cellular:</strong> Cannot access over cellular data</li><li><strong>Local Access:</strong> Must be on same network segment</li></ul><h2>Troubleshooting</h2><h3>Cannot Access Web Interface</h3><p><strong>Symptoms:</strong> Browser cannot reach <code class="">http://192.168.4.1</code></p><p><strong>Solutions:</strong></p><ul><li>Verify connection to correct WiFi network</li><li>Check device power and status LEDs</li><li>Try different browser or clear cache</li><li>Check firewall/antivirus blocking access</li><li>Verify device IP address via serial console</li></ul><h3>Interface Not Loading</h3><p><strong>Symptoms:</strong> Page loads but interface doesn’t work</p><p><strong>Solutions:</strong></p><ul><li>Check browser console for JavaScript errors</li><li>Ensure JavaScript is enabled</li><li>Try incognito/private browsing mode</li><li>Clear browser cache and cookies</li><li>Update browser to latest version</li></ul><h3>Configuration Not Applying</h3><p><strong>Symptoms:</strong> Changes don’t take effect</p><p><strong>Solutions:</strong></p><ul><li>Click “Apply” button after making changes</li><li>Wait for success confirmation message</li><li>Check for validation errors (red alerts)</li><li>Try refreshing the page and reapplying</li><li>Check device logs via serial console</li></ul><h3>Auto-Refresh Not Working</h3><p><strong>Symptoms:</strong> Status doesn’t update automatically</p><p><strong>Solutions:</strong></p><ul><li>Verify “Auto-refresh” checkbox is checked</li><li>Check browser console for network errors</li><li>Ensure stable WiFi connection</li><li>Try manual refresh with browser reload</li><li>Disable and re-enable auto-refresh</li></ul><h3>Mobile Access Issues</h3><p><strong>Symptoms:</strong> Cannot access from mobile device</p><p><strong>Solutions:</strong></p><ul><li>Ensure mobile device is connected to device WiFi</li><li>Check mobile browser compatibility</li><li>Try different mobile browser</li><li>Verify mobile data is disabled (must use WiFi)</li><li>Check for mobile firewall or security apps</li></ul><h2>Security Considerations</h2><h3>Network Security</h3><ol><li><p><strong>Default Passwords:</strong></p><ul><li>Change default AP password immediately</li><li>Use strong, unique passwords</li></ul></li><li><p><strong>Network Access:</strong></p><ul><li>Limit physical access to device</li><li>Use in trusted network environments</li><li>Consider VPN for remote access</li></ul></li><li><p><strong>API Access:</strong></p><ul><li>Currently open (no authentication)</li><li>Restrict network access to trusted devices</li><li>Monitor for unauthorized access</li></ul></li></ol><h3>Data Privacy</h3><ol><li><p><strong>Configuration Data:</strong></p><ul><li>WiFi passwords stored locally</li><li>No data transmitted to external servers</li><li>All configuration remains on device</li></ul></li><li><p><strong>Location Data:</strong></p><ul><li>GNSS data stays local</li><li>NMEA data only accessible on local network</li><li>No automatic data transmission</li></ul></li></ol><h2>Advanced Features</h2><h3>Keyboard Shortcuts</h3><ul><li><strong>Ctrl+R:</strong> Manual refresh</li><li><strong>Tab:</strong> Navigate between form fields</li><li><strong>Enter:</strong> Submit forms (where applicable)</li></ul><h3>Browser Developer Tools</h3><p><strong>Console Logging:</strong></p><ul><li>Open browser developer tools (F12)</li><li>Monitor network requests and responses</li><li>View JavaScript console for debugging</li></ul><p><strong>Network Tab:</strong></p><ul><li>Monitor API calls and responses</li><li>Check response times and status codes</li><li>Debug connection issues</li></ul><h3>Custom Styling</h3><p>The interface uses CSS custom properties (variables) that can be modified for custom themes:</p><pre><code class="language-css">:root {
  --primary-bg: #0a0a0a;
  --accent: #00d4aa;
  /* ... other variables ... */
}
</code></pre><hr><p><a href="wifi-networking">← Previous: WiFi and Networking</a> | <a href="/manual">Back to Main Manual</a> | <a href="kiss-protocol-usage">Next: KISS Protocol Usage →</a></p>`,188),Ju=[Qu],Zu=pe({__name:"09-web-interface",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Yu,Ju))}}),ep={class:"markdown-body"},tp=he(`<h1>10. KISS Protocol Usage</h1><h2>Overview</h2><p>LoRaTNCX implements the KISS (Keep It Simple, Stupid) protocol for packet radio communication. KISS provides a simple framing mechanism for exchanging data packets between the TNC and host applications. The protocol is widely used in amateur packet radio and supports both serial and network connections.</p><h2>Connecting via Serial</h2><h3>Serial Port Configuration</h3><p><strong>Default Settings:</strong></p><ul><li><strong>Baud Rate:</strong> 115200 bps</li><li><strong>Data Bits:</strong> 8</li><li><strong>Parity:</strong> None</li><li><strong>Stop Bits:</strong> 1</li><li><strong>Flow Control:</strong> None</li></ul><p><strong>Platform-Specific Connection:</strong></p><p><strong>Linux/macOS:</strong></p><pre><code class="language-bash"># List available serial ports
ls /dev/tty*

# Connect using screen
screen /dev/ttyACM0 115200

# Or using minicom
minicom -b 115200 -o -D /dev/ttyACM0
</code></pre><p><strong>Windows:</strong></p><pre><code class="language-cmd"># Using PuTTY
# Serial line: COM3
# Speed: 115200
# Data bits: 8
# Stop bits: 1
# Parity: None
# Flow control: None

# Using PowerShell
# (Requires serial terminal program)
</code></pre><p><strong>Python (Cross-Platform):</strong></p><pre><code class="language-python">import serial
import time

# Open serial connection
ser = serial.Serial(&#39;/dev/ttyACM0&#39;, 115200, timeout=1)
time.sleep(2)  # Allow device to initialize

# Connection is now ready for KISS communication
</code></pre><h3>Serial Connection States</h3><p><strong>Initialization:</strong></p><ul><li>Device sends no data until first valid KISS frame</li><li>Serial buffer is flushed on connection</li><li>Ready for KISS commands immediately</li></ul><p><strong>Active Communication:</strong></p><ul><li>Bidirectional data exchange</li><li>No keepalive packets required</li><li>Connection remains active until disconnected</li></ul><h2>TCP KISS Server</h2><h3>Server Configuration</h3><p><strong>Default Settings:</strong></p><ul><li><strong>Port:</strong> 8001</li><li><strong>Protocol:</strong> Raw TCP</li><li><strong>Max Clients:</strong> 4 simultaneous connections</li><li><strong>Enabled by Default:</strong> Yes</li></ul><p><strong>Server Control:</strong></p><ul><li>Configure via web interface (Network tab)</li><li>Enable/disable TCP KISS server</li><li>Change port number (requires reboot)</li><li>Monitor connected clients</li></ul><h3>Connecting to TCP Server</h3><p><strong>Using Netcat:</strong></p><pre><code class="language-bash"># Connect to TCP KISS server
nc 192.168.4.1 8001

# Or with timeout
timeout 30 nc 192.168.4.1 8001
</code></pre><p><strong>Using Telnet:</strong></p><pre><code class="language-bash">telnet 192.168.4.1 8001
</code></pre><p><strong>Using Python:</strong></p><pre><code class="language-python">import socket

# Connect to TCP KISS server
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((&#39;192.168.4.1&#39;, 8001))

print(&quot;Connected to LoRaTNCX TCP KISS server&quot;)
# Now ready to send/receive KISS frames
</code></pre><p><strong>Using JavaScript/Node.js:</strong></p><pre><code class="language-javascript">const net = require(&#39;net&#39;);

const client = net.createConnection({ port: 8001, host: &#39;192.168.4.1&#39; }, () =&gt; {
    console.log(&#39;Connected to LoRaTNCX TCP KISS server&#39;);
    // Ready for KISS communication
});

client.on(&#39;data&#39;, (data) =&gt; {
    console.log(&#39;Received:&#39;, data);
});

client.on(&#39;close&#39;, () =&gt; {
    console.log(&#39;Connection closed&#39;);
});
</code></pre><h3>Multiple Client Support</h3><ul><li><strong>Concurrent Connections:</strong> Up to 4 clients simultaneously</li><li><strong>Broadcast Reception:</strong> All clients receive incoming LoRa packets</li><li><strong>Individual Transmission:</strong> Any client can transmit packets</li><li><strong>No Client Isolation:</strong> All clients share the same radio interface</li></ul><h2>Data Frame Format</h2><h3>KISS Frame Structure</h3><p>KISS frames use byte stuffing to embed control characters in data streams:</p><p><strong>Frame Format:</strong></p><pre><code class="">FEND + Command/Data + FEND
</code></pre><p><strong>Control Characters:</strong></p><ul><li><strong>FEND (0xC0):</strong> Frame boundary marker</li><li><strong>FESC (0xDB):</strong> Escape character</li><li><strong>TFEND (0xDC):</strong> Escaped FEND</li><li><strong>TFESC (0xDD):</strong> Escaped FESC</li></ul><h3>Byte Stuffing Rules</h3><p><strong>Data Transmission:</strong></p><ol><li>If data contains FEND (0xC0) → Replace with FESC + TFEND</li><li>If data contains FESC (0xDB) → Replace with FESC + TFESC</li><li>Other bytes pass through unchanged</li></ol><p><strong>Data Reception:</strong></p><ol><li>If FESC + TFEND → Replace with FEND</li><li>If FESC + TFESC → Replace with FESC</li><li>Other bytes pass through unchanged</li></ol><h3>Frame Types</h3><p><strong>Data Frames (CMD_DATA = 0x00):</strong></p><pre><code class="">FEND + 0x00 + [escaped packet data] + FEND
</code></pre><p>Used for transmitting and receiving packet radio data.</p><p><strong>Command Frames:</strong></p><pre><code class="">FEND + Command + [escaped command data] + FEND
</code></pre><p>Used for configuration and status queries.</p><h2>Hardware Commands</h2><h3>SETHARDWARE Commands (Configuration)</h3><p>All SETHARDWARE commands use the format:</p><pre><code class="">FEND + 0x06 + Subcommand + [Data] + FEND
</code></pre><p><strong>Set Frequency (0x01):</strong></p><ul><li><strong>Data:</strong> 4 bytes (float, little-endian)</li><li><strong>Range:</strong> 150.0 - 960.0 MHz</li><li><strong>Example:</strong> Set to 915.0 MHz<pre><code class="">FEND + 0x06 + 0x01 + [0x00, 0x00, 0x3C, 0x44] + FEND
</code></pre></li></ul><p><strong>Set Bandwidth (0x02):</strong></p><ul><li><strong>Data:</strong> 4 bytes (float, little-endian)</li><li><strong>Values:</strong> 125.0, 250.0, 500.0 kHz</li><li><strong>Example:</strong> Set to 125 kHz<pre><code class="">FEND + 0x06 + 0x02 + [0x00, 0x00, 0x00, 0x42] + FEND
</code></pre></li></ul><p><strong>Set Spreading Factor (0x03):</strong></p><ul><li><strong>Data:</strong> 1 byte</li><li><strong>Range:</strong> 7-12</li><li><strong>Example:</strong> Set to SF12<pre><code class="">FEND + 0x06 + 0x03 + 0x0C + FEND
</code></pre></li></ul><p><strong>Set Coding Rate (0x04):</strong></p><ul><li><strong>Data:</strong> 1 byte</li><li><strong>Range:</strong> 5-8 (representing 4/5 to 4/8)</li><li><strong>Example:</strong> Set to 4/7<pre><code class="">FEND + 0x06 + 0x04 + 0x07 + FEND
</code></pre></li></ul><p><strong>Set Power (0x05):</strong></p><ul><li><strong>Data:</strong> 1 byte (signed int)</li><li><strong>Range:</strong> -9 to +22 dBm</li><li><strong>Example:</strong> Set to 20 dBm<pre><code class="">FEND + 0x06 + 0x05 + 0x14 + FEND
</code></pre></li></ul><p><strong>Set Sync Word (0x08):</strong></p><ul><li><strong>Data:</strong> 2 bytes (big-endian)</li><li><strong>Range:</strong> 0x0000-0xFFFF</li><li><strong>Example:</strong> Set to 0x1424<pre><code class="">FEND + 0x06 + 0x08 + [0x14, 0x24] + FEND
</code></pre></li></ul><p><strong>Set GNSS Enable (0x09):</strong></p><ul><li><strong>Data:</strong> 1 byte (0=disable, 1=enable)</li><li><strong>Example:</strong> Enable GNSS<pre><code class="">FEND + 0x06 + 0x09 + 0x01 + FEND
</code></pre></li></ul><p><strong>Save Configuration (0x07):</strong></p><ul><li><strong>Data:</strong> None</li><li><strong>Example:</strong> Save current settings<pre><code class="">FEND + 0x06 + 0x07 + FEND
</code></pre></li></ul><p><strong>Reset Configuration (0xFF):</strong></p><ul><li><strong>Data:</strong> None</li><li><strong>Example:</strong> Reset to factory defaults<pre><code class="">FEND + 0x06 + 0xFF + FEND
</code></pre></li></ul><h3>GETHARDWARE Commands (Status Queries)</h3><p>All GETHARDWARE commands use the format:</p><pre><code class="">FEND + 0x07 + Subcommand + [Data] + FEND
</code></pre><p><strong>Query Configuration (0x01):</strong></p><ul><li><strong>Response:</strong> Current LoRa radio settings</li><li><strong>Format:</strong> Binary data with frequency, bandwidth, etc.</li><li><strong>Example Query:</strong><pre><code class="">FEND + 0x07 + 0x01 + FEND
</code></pre></li></ul><p><strong>Query Battery (0x02):</strong></p><ul><li><strong>Response:</strong> Battery status (voltage, averaged voltage, percentage, state, ready flag)</li><li><strong>Format:</strong> 4 bytes voltage (float) + 4 bytes avg_voltage (float) + 4 bytes percent (float) + 1 byte state (uint8) + 1 byte ready (uint8)</li><li><strong>State values:</strong> 0=unknown, 1=discharging, 2=charging, 3=charged</li><li><strong>Ready flag:</strong> 0=not ready (collecting samples), 1=ready (averaged values available)</li><li><strong>Example Query:</strong><pre><code class="">FEND + 0x07 + 0x02 + FEND
</code></pre></li></ul><p><strong>Query Board (0x03):</strong></p><ul><li><strong>Response:</strong> Board type and name</li><li><strong>Format:</strong> Board type byte + ASCII name string</li><li><strong>Example Query:</strong><pre><code class="">FEND + 0x07 + 0x03 + FEND
</code></pre></li></ul><p><strong>Query GNSS (0x04):</strong></p><ul><li><strong>Response:</strong> GNSS status and position</li><li><strong>Format:</strong> Binary data with fix status, satellites, coordinates</li><li><strong>Example Query:</strong><pre><code class="">FEND + 0x07 + 0x04 + FEND
</code></pre></li></ul><p><strong>Query All (0xFF):</strong></p><ul><li><strong>Response:</strong> Complete system status</li><li><strong>Format:</strong> Multiple frames with all information</li><li><strong>Example Query:</strong><pre><code class="">FEND + 0x07 + 0xFF + FEND
</code></pre></li></ul><h2>Integration with Applications</h2><h3>Dire Wolf Integration</h3><p>Dire Wolf is a popular packet radio software modem that supports KISS TNC connections.</p><p><strong>Configuration (direwolf.conf):</strong></p><pre><code class="language-ini"># KISS TNC Configuration
AGWPORT 8001
AGWPEER 192.168.4.1:8001

# Or for serial connection
# PTT /dev/ttyACM0 RTS
# KISSPORT /dev/ttyACM0

# Radio parameters (let LoRaTNCX handle these)
# Let the TNC handle modulation parameters
</code></pre><p><strong>Running Dire Wolf:</strong></p><pre><code class="language-bash"># Connect via TCP
direwolf -c direwolf.conf

# Or via serial
direwolf -c direwolf-serial.conf
</code></pre><h3>APRS Applications</h3><p><strong>APRS-IS Gateway:</strong></p><pre><code class="language-python">import socket
import kiss

# Connect to LoRaTNCX
tnc = kiss.KISS(host=&#39;192.168.4.1&#39;, port=8001)
tnc.start()

# Connect to APRS-IS
aprs_is = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
aprs_is.connect((&#39;rotate.aprs2.net&#39;, 14580))
aprs_is.send(b&#39;user YOURCALL pass YOURPASS vers LoRaTNCX 1.0\\r\\n&#39;)

# Bridge packets between LoRa and APRS-IS
while True:
    # Receive from LoRa
    packet = tnc.read()
    if packet:
        # Forward to APRS-IS
        aprs_is.send(packet + b&#39;\\r\\n&#39;)
    
    # Receive from APRS-IS
    data = aprs_is.recv(1024)
    if data:
        # Forward to LoRa
        tnc.write(data.strip())
</code></pre><h3>Custom Packet Radio Applications</h3><p><strong>Python KISS Library:</strong></p><pre><code class="language-python">import kiss
import time

class LoRaTNC:
    def __init__(self, host=&#39;192.168.4.1&#39;, port=8001):
        self.kiss = kiss.KISS(host=host, port=port)
        self.kiss.start()
    
    def send_packet(self, data):
        &quot;&quot;&quot;Send a packet via LoRa&quot;&quot;&quot;
        self.kiss.write(data)
        print(f&quot;Sent packet: {data.hex()}&quot;)
    
    def receive_packets(self):
        &quot;&quot;&quot;Receive packets from LoRa&quot;&quot;&quot;
        while True:
            packet = self.kiss.read()
            if packet:
                print(f&quot;Received packet: {packet.hex()}&quot;)
                # Process packet here
            time.sleep(0.1)

# Usage
tnc = LoRaTNC()
tnc.send_packet(b&#39;Hello LoRa World!&#39;)
tnc.receive_packets()
</code></pre><p><strong>JavaScript/Node.js Implementation:</strong></p><pre><code class="language-javascript">const net = require(&#39;net&#39;);
const EventEmitter = require(&#39;events&#39;);

class LoRaTNC extends EventEmitter {
    constructor(host = &#39;192.168.4.1&#39;, port = 8001) {
        super();
        this.host = host;
        this.port = port;
        this.socket = null;
        this.buffer = Buffer.alloc(0);
    }
    
    connect() {
        this.socket = net.createConnection({
            host: this.host,
            port: this.port
        });
        
        this.socket.on(&#39;connect&#39;, () =&gt; {
            console.log(&#39;Connected to LoRaTNCX&#39;);
            this.emit(&#39;connected&#39;);
        });
        
        this.socket.on(&#39;data&#39;, (data) =&gt; {
            this.buffer = Buffer.concat([this.buffer, data]);
            this.processFrames();
        });
        
        this.socket.on(&#39;close&#39;, () =&gt; {
            console.log(&#39;Disconnected from LoRaTNCX&#39;);
            this.emit(&#39;disconnected&#39;);
        });
        
        this.socket.on(&#39;error&#39;, (err) =&gt; {
            console.error(&#39;Connection error:&#39;, err);
            this.emit(&#39;error&#39;, err);
        });
    }
    
    sendFrame(frame) {
        if (this.socket &amp;&amp; this.socket.writable) {
            this.socket.write(frame);
        }
    }
    
    processFrames() {
        // KISS frame processing logic here
        // Parse FEND-delimited frames
        // Handle escape sequences
        // Emit &#39;packet&#39; events for data frames
    }
}

// Usage
const tnc = new LoRaTNC();
tnc.connect();

tnc.on(&#39;connected&#39;, () =&gt; {
    console.log(&#39;Ready to send/receive packets&#39;);
});

tnc.on(&#39;packet&#39;, (packet) =&gt; {
    console.log(&#39;Received packet:&#39;, packet.toString(&#39;hex&#39;));
});
</code></pre><h3>AX.25 Packet Construction</h3><p><strong>Basic AX.25 Packet:</strong></p><pre><code class="language-python">def create_ax25_packet(source_call, dest_call, data):
    &quot;&quot;&quot;
    Create a basic AX.25 packet for LoRa transmission
    &quot;&quot;&quot;
    # AX.25 header (simplified)
    header = b&#39;&#39;
    
    # Destination callsign (6 bytes + SSID)
    dest_padded = dest_call.ljust(6, b&#39; &#39;).upper()
    header += dest_padded + b&#39;\\x40&#39;  # SSID byte
    
    # Source callsign (6 bytes + SSID)
    src_padded = source_call.ljust(6, b&#39; &#39;).upper()
    header += src_padded + b&#39;\\x40&#39;  # SSID byte
    
    # Control and PID bytes
    header += b&#39;\\x03\\xf0&#39;  # UI frame
    
    # Packet data
    packet = header + data
    
    return packet

# Example usage
packet = create_ax25_packet(&#39;N0CALL&#39;, &#39;CQ&#39;, b&#39;Hello from LoRa!&#39;)
# Send via KISS interface
</code></pre><h2>Troubleshooting</h2><h3>Serial Connection Issues</h3><p><strong>No Response from Device:</strong></p><ul><li>Check serial port and baud rate</li><li>Verify device is powered on</li><li>Try different USB cable/port</li><li>Check device manager (Windows) or dmesg (Linux)</li></ul><p><strong>Garbled Data:</strong></p><ul><li>Verify baud rate (115200)</li><li>Check serial port settings</li><li>Ensure no flow control</li><li>Try different terminal program</li></ul><p><strong>Permission Errors:</strong></p><pre><code class="language-bash"># Linux: Add user to dialout group
sudo usermod -a -G dialout $USER

# Then logout and login again, or:
newgrp dialout
</code></pre><h3>TCP Connection Issues</h3><p><strong>Connection Refused:</strong></p><ul><li>Verify TCP KISS server is enabled</li><li>Check port number (default 8001)</li><li>Ensure device is on same network</li><li>Check firewall settings</li></ul><p><strong>Connection Drops:</strong></p><ul><li>Check WiFi signal strength</li><li>Verify device hasn’t rebooted</li><li>Monitor device logs</li><li>Try different client application</li></ul><h3>KISS Protocol Issues</h3><p><strong>Invalid Frame Errors:</strong></p><ul><li>Check byte stuffing implementation</li><li>Verify FEND/FESC handling</li><li>Ensure proper frame boundaries</li><li>Debug with packet sniffer</li></ul><p><strong>No Data Reception:</strong></p><ul><li>Verify antenna connections</li><li>Check LoRa parameters (frequency, bandwidth, etc.)</li><li>Ensure devices use same sync word</li><li>Test with known working setup</li></ul><p><strong>Transmission Failures:</strong></p><ul><li>Check transmit power settings</li><li>Verify antenna SWR</li><li>Monitor duty cycle limits</li><li>Check for interference</li></ul><h3>Performance Optimization</h3><p><strong>Latency Considerations:</strong></p><ul><li>Serial: Low latency, direct connection</li><li>TCP: Slight latency due to network stack</li><li>Buffer sizes affect responsiveness</li></ul><p><strong>Throughput Limits:</strong></p><ul><li>LoRa data rates: 293 bps (SF12) to 5469 bps (SF7)</li><li>Serial baud rate: 115200 bps (not limiting)</li><li>TCP overhead: Minimal impact</li></ul><p><strong>Error Handling:</strong></p><ul><li>Implement retry logic for failed transmissions</li><li>Monitor RSSI for link quality</li><li>Use appropriate spreading factors for range/speed balance</li></ul><h2>Advanced Usage</h2><h3>Custom KISS Implementations</h3><p><strong>Low-Level Frame Processing:</strong></p><pre><code class="language-c">// Example C implementation of KISS frame processing
#define FEND  0xC0
#define FESC  0xDB
#define TFEND 0xDC
#define TFESC 0xDD

void process_kiss_byte(uint8_t byte, kiss_state_t* state) {
    switch (state-&gt;phase) {
        case KISS_OUTSIDE_FRAME:
            if (byte == FEND) {
                state-&gt;phase = KISS_IN_FRAME;
                state-&gt;buffer_index = 0;
            }
            break;
            
        case KISS_IN_FRAME:
            if (byte == FEND) {
                if (state-&gt;buffer_index &gt; 0) {
                    // Complete frame received
                    process_frame(state-&gt;buffer, state-&gt;buffer_index);
                    state-&gt;phase = KISS_OUTSIDE_FRAME;
                }
            } else if (byte == FESC) {
                state-&gt;phase = KISS_ESCAPE_PENDING;
            } else {
                if (state-&gt;buffer_index &lt; BUFFER_SIZE) {
                    state-&gt;buffer[state-&gt;buffer_index++] = byte;
                }
            }
            break;
            
        case KISS_ESCAPE_PENDING:
            state-&gt;phase = KISS_IN_FRAME;
            if (byte == TFEND) {
                state-&gt;buffer[state-&gt;buffer_index++] = FEND;
            } else if (byte == TFESC) {
                state-&gt;buffer[state-&gt;buffer_index++] = FESC;
            } else {
                // Invalid escape sequence
                state-&gt;buffer[state-&gt;buffer_index++] = byte;
            }
            break;
    }
}
</code></pre><h3>Protocol Extensions</h3><p><strong>LoRa-Specific Commands:</strong></p><ul><li>Hardware configuration commands extend standard KISS</li><li>GNSS integration commands for position data</li><li>Battery monitoring for remote installations</li></ul><p><strong>Future Extensions:</strong></p><ul><li>Quality of Service (QoS) parameters</li><li>Channel access coordination</li><li>Mesh networking commands</li></ul><hr><p><a href="web-interface">← Previous: Web Interface</a> | <a href="/manual">Back to Main Manual</a> | <a href="gnss-support">Next: GNSS Support →</a></p>`,146),np=[tp],op=pe({__name:"10-kiss-protocol-usage",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",ep,np))}}),rp={class:"markdown-body"},ip=he(`<h1>11. GNSS Support</h1><h2>Overview</h2><p>LoRaTNCX provides comprehensive GNSS (Global Navigation Satellite System) support for position-aware packet radio applications. The system supports multi-constellation receivers including GPS, GLONASS, BeiDou, and QZSS through dedicated GNSS modules. GNSS data is made available via NMEA protocol over TCP for integration with external applications.</p><p><strong>Important Note:</strong> LoRaTNCX provides GNSS data streams but does not include built-in APRS functionality. APRS position reporting and messaging must be handled by external applications that connect to the NMEA TCP server.</p><h2>Hardware Requirements</h2><h3>Supported Boards</h3><p><strong>Heltec WiFi LoRa 32 V4:</strong></p><ul><li>Optional GNSS module</li><li>Dedicated GNSS pins with power control</li><li>Integrated GNSS antenna</li><li>Default configuration available</li></ul><p><strong>Heltec WiFi LoRa 32 V3:</strong></p><ul><li>No built-in GNSS module</li><li>External GNSS module required</li><li>User-configurable pins</li><li>Manual antenna connection needed</li></ul><h2>GNSS Configuration</h2><h3>Enabling GNSS</h3><p><strong>Via Web Interface:</strong></p><ol><li>Connect to LoRaTNCX web interface</li><li>Navigate to GNSS tab</li><li>Check “Enable GNSS” checkbox</li><li>Configure pin settings (V3 boards only)</li><li>Set TCP port (default 10110)</li><li>Save configuration</li></ol><p><strong>Via REST API:</strong></p><pre><code class="language-json">POST /api/gnss/config
{
  &quot;enabled&quot;: true,
  &quot;tcpPort&quot;: 10110
}
</code></pre><h3>Pin Configuration (V3 Boards)</h3><p>For V3 boards without built-in GNSS, configure the following pins:</p><p><strong>Required Pins:</strong></p><ul><li><strong>RX Pin:</strong> GNSS TX → MCU RX (data input)</li><li><strong>TX Pin:</strong> MCU TX → GNSS RX (data output)</li></ul><p><strong>Optional Pins:</strong></p><ul><li><strong>Control Pin:</strong> Power control (active LOW)</li><li><strong>Wake Pin:</strong> Wake-up signal</li><li><strong>PPS Pin:</strong> Pulse per second output</li><li><strong>Reset Pin:</strong> Module reset (active LOW)</li></ul><p><strong>Default V3 Pin Suggestions:</strong></p><pre><code class="language-json">{
  &quot;pinRX&quot;: 39,
  &quot;pinTX&quot;: 38,
  &quot;pinCtrl&quot;: 34,
  &quot;pinWake&quot;: -1,
  &quot;pinPPS&quot;: -1,
  &quot;pinRST&quot;: -1
}
</code></pre><h3>V4 Board Configuration</h3><p>V4 boards have fixed GNSS pin assignments:</p><ul><li><strong>RX:</strong> GPIO39 (GNSS TX → MCU RX)</li><li><strong>TX:</strong> GPIO38 (MCU TX → GNSS RX)</li><li><strong>Control:</strong> GPIO34 (power control, active LOW)</li><li><strong>Wake:</strong> GPIO40</li><li><strong>PPS:</strong> GPIO41</li><li><strong>Reset:</strong> GPIO42</li></ul><p>No pin configuration needed - automatically detected.</p><h2>NMEA over TCP</h2><h3>TCP Server Configuration</h3><p><strong>Default Settings:</strong></p><ul><li><strong>Port:</strong> 10110 (standard NMEA-over-TCP port)</li><li><strong>Max Clients:</strong> 4 simultaneous connections</li><li><strong>Protocol:</strong> Raw TCP with NMEA sentences</li><li><strong>Buffering:</strong> Real-time sentence forwarding</li></ul><p><strong>Server Control:</strong></p><ul><li>Automatically starts when GNSS is enabled</li><li>Runs on same IP as web interface</li><li>No authentication required</li><li>Survives WiFi mode changes</li></ul><h3>Connecting to NMEA Server</h3><p><strong>Using Netcat:</strong></p><pre><code class="language-bash"># Connect and monitor NMEA data
nc 192.168.4.1 10110
</code></pre><p><strong>Using Telnet:</strong></p><pre><code class="language-bash">telnet 192.168.4.1 10110
</code></pre><p><strong>Using Python:</strong></p><pre><code class="language-python">import socket
import time

# Connect to NMEA server
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((&#39;192.168.4.1&#39;, 10110))

print(&quot;Connected to NMEA server&quot;)

# Read NMEA sentences
buffer = &quot;&quot;
while True:
    data = sock.recv(1024).decode(&#39;ascii&#39;, errors=&#39;ignore&#39;)
    buffer += data
    
    # Process complete sentences
    while &#39;\\n&#39; in buffer:
        line, buffer = buffer.split(&#39;\\n&#39;, 1)
        if line.startswith(&#39;$&#39;):
            print(f&quot;NMEA: {line.strip()}&quot;)
    
    time.sleep(0.1)
</code></pre><p><strong>Using Node.js:</strong></p><pre><code class="language-javascript">const net = require(&#39;net&#39;);

const client = net.createConnection({
    port: 10110,
    host: &#39;192.168.4.1&#39;
}, () =&gt; {
    console.log(&#39;Connected to NMEA server&#39;);
});

client.on(&#39;data&#39;, (data) =&gt; {
    const sentences = data.toString().split(&#39;\\n&#39;);
    sentences.forEach(sentence =&gt; {
        if (sentence.startsWith(&#39;$&#39;)) {
            console.log(&#39;NMEA:&#39;, sentence.trim());
        }
    });
});

client.on(&#39;close&#39;, () =&gt; {
    console.log(&#39;NMEA connection closed&#39;);
});
</code></pre><h3>NMEA Sentence Types</h3><p>LoRaTNCX forwards all standard NMEA sentences from the GNSS module. Modern multi-constellation receivers may use different talker IDs:</p><p><strong>Position and Time:</strong></p><ul><li><strong>$GNGGA:</strong> Multi-constellation fix data (position, time, satellites)</li><li><strong>$GNRMC:</strong> Multi-constellation recommended minimum navigation information</li><li><strong>$GNGLL:</strong> Multi-constellation geographic position, latitude/longitude</li><li><strong>$GNVTG:</strong> Multi-constellation track made good and ground speed</li><li><strong>$GNZDA:</strong> Multi-constellation time and date</li></ul><p><strong>Satellite Information:</strong></p><ul><li><strong>$GPGSV:</strong> GPS satellites in view</li><li><strong>$GLGSV:</strong> GLONASS satellites in view</li><li><strong>$BDGSV:</strong> BeiDou satellites in view</li><li><strong>$GQGSV:</strong> QZSS satellites in view</li></ul><p><strong>Accuracy and Status:</strong></p><ul><li><strong>$GNGSA:</strong> Multi-constellation DOP and active satellites</li><li><strong>$GNGST:</strong> Multi-constellation pseudorange noise statistics</li></ul><p><strong>System Information:</strong></p><ul><li><strong>$GPTXT:</strong> Text messages from GNSS receiver (antenna status, warnings)</li></ul><h3>NMEA Data Format</h3><p><strong>Example NMEA Sentences (No Fix Condition):</strong></p><pre><code class="">$GNGGA,,,,,,0,00,25.5,,,,,,*64
$GNGLL,,,,,,V,N*7A
$GNGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5,1*01
$GNGSA,A,1,,,,,,,,,,,,,25.5,25.5,25.5,4*04
$GPGSV,1,1,00,0*65
$BDGSV,1,1,00,0*74
$GNRMC,,V,,,,,,,,,,N,V*37
$GNVTG,,,,,,,,,N*2E
$GNZDA,,,,,,*56
$GPTXT,01,01,01,ANTENNA OPEN*25
</code></pre><p><strong>Example NMEA Sentences (With Fix):</strong></p><pre><code class="">$GNGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47
$GNRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A
$GNGLL,4807.038,N,01131.000,E,123519,A,A*5C
$GNVTG,054.7,T,034.4,M,005.5,N,010.2,K*48
</code></pre><p><strong>Sentence Structure:</strong></p><ul><li><strong>$</strong> - Sentence start delimiter</li><li><strong>GN/GP/GL/BD/GQ</strong> - Talker ID (GN = multi-constellation, GP = GPS, GL = GLONASS, BD = BeiDou, GQ = QZSS)</li><li><strong>GGA</strong> - Sentence type</li><li><strong>,</strong> - Field separator</li><li><strong>*</strong> - Checksum delimiter</li><li><strong>47</strong> - Checksum (hex)</li></ul><h2>GNSS Status Monitoring</h2><h3>Web Interface Status</h3><p>The GNSS tab displays real-time status information:</p><p><strong>Fix Status:</strong></p><ul><li><strong>No Fix:</strong> Not receiving satellite signals</li><li><strong>2D Fix:</strong> Position only (latitude/longitude)</li><li><strong>3D Fix:</strong> Position with altitude</li></ul><p><strong>Satellite Information:</strong></p><ul><li><strong>Satellites Used:</strong> Number of satellites in fix calculation</li><li><strong>Satellites Visible:</strong> Total satellites detected</li></ul><p><strong>Position Data:</strong></p><ul><li><strong>Latitude/Longitude:</strong> Current position (when available)</li><li><strong>Altitude:</strong> Height above sea level</li><li><strong>HDOP:</strong> Horizontal dilution of precision</li></ul><p><strong>Time Information:</strong></p><ul><li><strong>UTC Time:</strong> Current time from satellites</li><li><strong>Date:</strong> Current date</li></ul><h3>REST API Status</h3><p><strong>Get GNSS Status:</strong></p><pre><code class="language-http">GET /api/gnss/status
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;enabled&quot;: true,
  &quot;hasFix&quot;: true,
  &quot;latitude&quot;: 40.7128,
  &quot;longitude&quot;: -74.0060,
  &quot;altitude&quot;: 10.5,
  &quot;satellites&quot;: 8,
  &quot;hdop&quot;: 1.2,
  &quot;speed&quot;: 0.0,
  &quot;course&quot;: 0.0,
  &quot;time&quot;: {
    &quot;hour&quot;: 14,
    &quot;minute&quot;: 30,
    &quot;second&quot;: 45
  },
  &quot;date&quot;: {
    &quot;day&quot;: 15,
    &quot;month&quot;: 10,
    &quot;year&quot;: 2024
  }
}
</code></pre><h3>Serial Passthrough</h3><p>GNSS data is also available via serial port for direct connection:</p><p><strong>Serial Configuration:</strong></p><ul><li>Same baud rate as GNSS module (default 9600)</li><li>Raw NMEA data stream</li><li>No KISS framing</li><li>Available when GNSS enabled</li></ul><p><strong>Accessing Serial GNSS:</strong></p><pre><code class="language-bash"># Monitor GNSS data on serial port
# (Requires second serial connection or serial multiplexer)
screen /dev/ttyACM0 9600
</code></pre><h2>External APRS Integration</h2><p><strong>Important:</strong> LoRaTNCX does not include built-in APRS functionality. Position reporting and APRS messaging must be implemented using external applications.</p><h3>APRS Software Integration</h3><p><strong>Using Dire Wolf with GPS:</strong></p><pre><code class="language-bash"># Dire Wolf configuration for APRS with GPS
# direwolf.conf
AGWPORT 8001
AGWPEER 192.168.4.1:8001

# GPS configuration
GPSD localhost:2947  # If using gpsd
# Or direct NMEA
# GPSNMEA 192.168.4.1:10110

# APRS beacon configuration
PBEACON sendto=IG delay=0:30 every=10:00 symbol=&quot;igate&quot; overlay=&quot;R&quot; comment=&quot;LoRaTNCX iGate&quot; via=WIDE1-1
</code></pre><p><strong>Python APRS Gateway:</strong></p><pre><code class="language-python">import socket
import aprslib
import threading
import time

class APRSGateway:
    def __init__(self, tnc_host=&#39;192.168.4.1&#39;, tnc_port=8001, nmea_host=&#39;192.168.4.1&#39;, nmea_port=10110):
        self.tnc_host = tnc_host
        self.tnc_port = tnc_port
        self.nmea_host = nmea_host
        self.nmea_port = nmea_port
        
        # APRS-IS connection
        self.aprs_is = aprslib.IS(&#39;N0CALL&#39;, passwd=&#39;12345&#39;, host=&#39;rotate.aprs2.net&#39;, port=14580)
        
        # Position tracking
        self.last_position = None
        
    def connect_nmea(self):
        &quot;&quot;&quot;Connect to NMEA server for position data&quot;&quot;&quot;
        self.nmea_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.nmea_sock.connect((self.nmea_host, self.nmea_port))
        
        # Start NMEA processing thread
        threading.Thread(target=self.process_nmea, daemon=True).start()
    
    def process_nmea(self):
        &quot;&quot;&quot;Process NMEA sentences for position updates&quot;&quot;&quot;
        buffer = &quot;&quot;
        while True:
            try:
                data = self.nmea_sock.recv(1024).decode(&#39;ascii&#39;, errors=&#39;ignore&#39;)
                buffer += data
                
                # Process complete sentences
                while &#39;\\n&#39; in buffer:
                    line, buffer = buffer.split(&#39;\\n&#39;, 1)
                    if line.startswith(&#39;$GPRMC&#39;) or line.startswith(&#39;$GPGGA&#39;):
                        # Parse position from NMEA
                        position = self.parse_nmea_position(line)
                        if position:
                            self.last_position = position
                            
            except Exception as e:
                print(f&quot;NMEA error: {e}&quot;)
                time.sleep(1)
    
    def parse_nmea_position(self, sentence):
        &quot;&quot;&quot;Parse position from NMEA sentence&quot;&quot;&quot;
        # Simplified NMEA parsing - use pynmea2 library for production
        parts = sentence.split(&#39;,&#39;)
        if len(parts) &gt;= 6:
            try:
                lat = float(parts[3]) if parts[3] else None
                lon = float(parts[5]) if parts[5] else None
                if lat and lon:
                    return (lat, lon)
            except ValueError:
                pass
        return None
    
    def send_aprs_position(self):
        &quot;&quot;&quot;Send APRS position report&quot;&quot;&quot;
        if self.last_position:
            lat, lon = self.last_position
            
            # Create APRS position report
            position = f&quot;{lat:.4f},{lon:.4f}&quot;
            
            # Send to APRS-IS
            self.aprs_is.sendall(f&quot;N0CALL&gt;APRS,TCPIP*:@{position} LoRaTNCX Gateway&quot;)
    
    def run(self):
        &quot;&quot;&quot;Main gateway loop&quot;&quot;&quot;
        self.connect_nmea()
        
        # APRS-IS connection
        self.aprs_is.connect()
        
        # Send position updates every 10 minutes
        while True:
            self.send_aprs_position()
            time.sleep(600)  # 10 minutes

# Usage
gateway = APRSGateway()
gateway.run()
</code></pre><p><strong>APRS Applications:</strong></p><ul><li><strong>Dire Wolf:</strong> Sound card TNC with APRS capabilities</li><li><strong>YAAC:</strong> Yet Another APRS Client (Java-based)</li><li><strong>APRSdroid:</strong> Android APRS application</li><li><strong>Xastir:</strong> Linux APRS client</li><li><strong>UI-View32:</strong> Windows APRS software</li></ul><h3>Position Beacon Configuration</h3><p><strong>Automatic Beacons:</strong> Most APRS software can be configured to automatically send position beacons:</p><pre><code class="language-ini"># Dire Wolf PBEACON configuration
PBEACON sendto=IG delay=0:30 every=10:00 symbol=&quot;igate&quot; overlay=&quot;R&quot; comment=&quot;LoRaTNCX iGate&quot; via=WIDE1-1
</code></pre><p><strong>Manual Position Reports:</strong> Send position reports manually through packet radio applications:</p><pre><code class="">N0CALL&gt;APRS: =4455.55N/09322.22W- LoRaTNCX Mobile
</code></pre><h2>Performance and Accuracy</h2><h3>GNSS Performance Factors</h3><p><strong>Satellite Visibility:</strong></p><ul><li><strong>Open Sky:</strong> Best performance, fast fixes</li><li><strong>Urban Areas:</strong> Reduced satellite visibility, slower fixes</li><li><strong>Indoors:</strong> Limited or no satellite reception</li><li><strong>Weather:</strong> Generally not affected by weather</li></ul><p><strong>Accuracy Specifications:</strong></p><ul><li><strong>GPS Only:</strong> ~5-10 meters horizontal accuracy</li><li><strong>GPS + GLONASS:</strong> Improved accuracy and faster fixes</li><li><strong>SBAS Enabled:</strong> ~1-2 meters accuracy (WAAS, EGNOS, etc.)</li></ul><p><strong>Time to First Fix:</strong></p><ul><li><strong>Cold Start:</strong> 30-60 seconds</li><li><strong>Warm Start:</strong> 10-30 seconds</li><li><strong>Hot Start:</strong> 1-5 seconds</li></ul><h3>Power Consumption</h3><p><strong>GNSS Power States:</strong></p><ul><li><strong>Active:</strong> ~25-30mA (tracking satellites)</li><li><strong>Standby:</strong> ~5-10mA (power control enabled)</li><li><strong>Off:</strong> ~0mA (power control disabled)</li></ul><p><strong>Battery Life Impact:</strong></p><ul><li>Continuous operation: Reduces battery life by ~20-30%</li><li>Periodic operation: Minimal impact if duty-cycled</li><li>Mobile applications: Position updates every 5-10 minutes typical</li></ul><h2>Troubleshooting</h2><h3>General GNSS Diagnostics</h3><p><strong>Monitor NMEA Output:</strong> Connect to the NMEA TCP server (port 10110) to monitor raw GNSS data:</p><pre><code class="language-bash"># Monitor NMEA sentences in real-time
nc 192.168.4.1 10110
</code></pre><p><strong>Key Diagnostic Information:</strong></p><ul><li><strong>$GPTXT sentences:</strong> Check for antenna status messages (“ANTENNA OPEN”, “ANTENNA SHORT”)</li><li><strong>Satellite counts:</strong> Look at $GPGSV, $BDGSV, etc. for satellites in view</li><li><strong>HDOP values:</strong> High values (&gt;10) indicate poor geometry</li><li><strong>Fix status:</strong> “V” = no fix, “A” = valid fix in $GNRMC/$GPRMC</li></ul><h3>No GNSS Fix</h3><p><strong>Symptoms:</strong> No satellite lock, no position data</p><p><strong>Solutions:</strong></p><ul><li>Check antenna connection and placement</li><li>Ensure clear sky view (outdoors)</li><li>Wait 1-2 minutes for satellite acquisition</li><li>Check GNSS module power (LED indicators)</li><li>Verify correct baud rate configuration</li><li>Check for “ANTENNA OPEN” messages in $GPTXT sentences</li></ul><h3>Antenna Connection Issues</h3><p><strong>Symptoms:</strong> $GPTXT messages showing “ANTENNA OPEN” or “ANTENNA SHORT”</p><p><strong>Solutions:</strong></p><ul><li><strong>ANTENNA OPEN:</strong> Antenna not connected or cable damaged <ul><li>Check antenna cable connection to GNSS module</li><li>Verify antenna cable continuity</li><li>Try different antenna cable</li><li>For V4 boards: Check integrated antenna connection</li></ul></li><li><strong>ANTENNA SHORT:</strong> Antenna cable shorted <ul><li>Check for damaged antenna cable</li><li>Verify antenna impedance (should be 50Ω)</li><li>Replace faulty antenna</li></ul></li><li><strong>No Antenna Messages:</strong> May indicate older GNSS module firmware <ul><li>Check module documentation for antenna status reporting</li><li>Monitor satellite visibility ($GPGSV, $BDGSV, etc.) instead</li></ul></li></ul><h3>Incorrect Position Data</h3><p><strong>Symptoms:</strong> Position readings are wrong or jumpy</p><p><strong>Solutions:</strong></p><ul><li>Check antenna orientation (point skyward)</li><li>Avoid metal obstructions near antenna</li><li>Allow time for GPS to stabilize (HDOP &lt; 2.0 preferred)</li><li>Check for multipath interference</li><li>Verify coordinate system (lat/lon format)</li></ul><h3>NMEA Server Connection Issues</h3><p><strong>Symptoms:</strong> Cannot connect to TCP port 10110</p><p><strong>Solutions:</strong></p><ul><li>Verify GNSS is enabled in configuration</li><li>Check TCP port number (default 10110)</li><li>Ensure device is on same network</li><li>Test with different client applications</li><li>Check firewall blocking port</li></ul><h3>Serial GNSS Issues</h3><p><strong>Symptoms:</strong> No data on serial port</p><p><strong>Solutions:</strong></p><ul><li>Verify baud rate matches GNSS module</li><li>Check serial pin connections</li><li>Test with different terminal programs</li><li>Verify GNSS module is powered and active</li></ul><h3>APRS Integration Problems</h3><p><strong>Symptoms:</strong> Position reports not appearing on APRS networks</p><p><strong>Solutions:</strong></p><ul><li>Verify external APRS application configuration</li><li>Check NMEA data format and parsing</li><li>Ensure proper APRS packet formatting</li><li>Test with known working APRS setup</li><li>Check APRS-IS server connectivity</li></ul><h2>Advanced Configuration</h2><h3>GNSS Module Settings</h3><p><strong>Baud Rate Configuration:</strong></p><ul><li>Default: 9600 bps</li><li>Supported: 4800, 9600, 19200, 38400, 57600, 115200</li><li>Must match module capabilities</li></ul><p><strong>Update Rate:</strong></p><ul><li>Default: 1Hz (1 position update per second)</li><li>Configurable: 0.1Hz to 10Hz (depending on module)</li><li>Lower rates save power</li></ul><p><strong>Constellation Selection:</strong></p><ul><li>GPS only (default)</li><li>GPS + GLONASS</li><li>GPS + Galileo (newer modules)</li><li>All available constellations</li></ul><h3>NMEA Sentence Filtering</h3><p>Some GNSS modules allow filtering of NMEA sentences:</p><p><strong>Common Sentences:</strong></p><ul><li>GPGGA (essential for position)</li><li>GPRMC (recommended minimum)</li><li>GPGSV (satellite information)</li><li>GPGSA (accuracy information)</li></ul><p><strong>Filtering Commands:</strong></p><pre><code class="">$PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0*28  # Enable GGA,RMC,GSV,GSA
$PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29  # RMC only
</code></pre><h3>Antenna Considerations</h3><p><strong>Active vs Passive Antennas:</strong></p><ul><li><strong>Active:</strong> Powered antenna with built-in amplifier</li><li><strong>Passive:</strong> No power required, lower gain</li><li>V4 boards include active antenna with LNA</li></ul><p><strong>Antenna Placement:</strong></p><ul><li>Clear sky view (hemispherical)</li><li>Away from metal objects</li><li>Minimum 10cm ground plane recommended</li><li>Avoid proximity to LoRa antenna</li></ul><h3>Multipath Mitigation</h3><p><strong>Causes of Multipath:</strong></p><ul><li>Reflections from buildings/ground</li><li>Indoor operation</li><li>Near large metal structures</li></ul><p><strong>Mitigation Strategies:</strong></p><ul><li>Use choke ring antennas (advanced)</li><li>Position antenna away from reflectors</li><li>Use carrier-phase tracking (expensive receivers)</li><li>Accept reduced accuracy in problematic environments</li></ul><hr><p><a href="kiss-protocol-usage">← Previous: KISS Protocol Usage</a> | <a href="/manual">Back to Main Manual</a> | <a href="applications-integration">Next: Applications and Integration →</a></p>`,165),sp=[ip],ap=pe({__name:"11-gnss-support",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",rp,sp))}}),lp={class:"markdown-body"},cp=he(`<h1>12. Applications and Integration</h1><h2>Overview</h2><p>LoRaTNCX integrates seamlessly with existing packet radio software through standard protocols. This section provides practical examples for connecting LoRaTNCX with popular applications including Dire Wolf, APRS clients, BPQ32, and custom software. All integrations use either serial KISS or TCP KISS connections.</p><h2>Dire Wolf Integration</h2><p>Dire Wolf is a popular sound card TNC application that supports KISS protocol. LoRaTNCX can be used as a high-performance LoRa TNC with Dire Wolf.</p><h3>Basic Dire Wolf Configuration</h3><p><strong>Create direwolf.conf:</strong></p><pre><code class="language-ini"># Dire Wolf configuration for LoRaTNCX
# Use TCP KISS connection (recommended)
AGWPORT 8001
AGWPEER 192.168.4.1:8001

# Or use serial port
# PTT /dev/ttyACM0 RTS
# KISSPORT /dev/ttyACM0

# APRS configuration
MYCALL N0CALL-1
IGATE 1
TXDELAY 30
TXTAIL 10

# LoRa-specific settings (adjust for your region)
# 433.775 MHz APRS frequency (adjust for your region)
FREQ 433.775
MODEM 1200  # Dire Wolf will use this, but LoRaTNCX handles modulation

# Beacon configuration
PBEACON sendto=IG delay=0:30 every=10:00 symbol=&quot;igate&quot; overlay=&quot;R&quot; comment=&quot;LoRaTNCX iGate&quot; via=WIDE1-1
</code></pre><p><strong>Start Dire Wolf:</strong></p><pre><code class="language-bash"># Using TCP KISS (recommended)
direwolf -c direwolf.conf

# Or using serial port
direwolf -c direwolf.conf -p
</code></pre><h3>Dire Wolf with GNSS Integration</h3><p><strong>Enhanced Configuration with GPS:</strong></p><pre><code class="language-ini"># Dire Wolf with GPS support
AGWPORT 8001
AGWPEER 192.168.4.1:8001

# GPS configuration (connect to NMEA server)
GPSD localhost:2947

# Or direct NMEA connection
# GPSNMEA 192.168.4.1:10110

MYCALL N0CALL-1
IGATE 1

# Smart beaconing based on speed
SMARTBEACONING 30 3:00 5 00:15 30 00:45 255 02:00

# Position beaconing
PBEACON sendto=IG delay=0:30 every=10:00 symbol=&quot;igate&quot; overlay=&quot;R&quot; comment=&quot;LoRaTNCX iGate&quot; via=WIDE1-1
</code></pre><h3>Dire Wolf APRS iGate Setup</h3><p><strong>Complete iGate Configuration:</strong></p><pre><code class="language-ini">AGWPORT 8001
AGWPEER 192.168.4.1:8001

MYCALL YOURCALL-10  # Your iGate callsign
IGATE 1
IGTXVIA 0           # Don&#39;t add via path to transmitted packets
IGRXVIA 0           # Don&#39;t add via path to received packets

# APRS-IS server configuration
IGLOGIN YOURCALL-10 YOURPASSCODE

# Filters for iGate operation
FILTER IG 0         # iGate filter - only gate packets that need gating
FILTER IG ONLY      # Only iGate, don&#39;t send to RF

# Logging
LOGDIR /var/log/direwolf
LOGFILE igate.log
</code></pre><h2>APRS Clients</h2><h3>YAAC (Yet Another APRS Client)</h3><p><strong>YAAC Configuration:</strong></p><ol><li><p><strong>Add TNC Port:</strong></p><ul><li>Port Type: AGWPE</li><li>Host: 192.168.4.1</li><li>Port: 8001</li><li>Callsign: YOURCALL-1</li></ul></li><li><p><strong>Station Configuration:</strong></p><ul><li>Callsign: YOURCALL-1</li><li>Symbol: /l (laptop)</li><li>Comment: LoRaTNCX</li></ul></li></ol><p><strong>YAAC Properties (yaac.properties):</strong></p><pre><code class="language-properties"># LoRaTNCX TCP KISS configuration
agwpe.enabled=true
agwpe.host=192.168.4.1
agwpe.port=8001
agwpe.callsign=YOURCALL-1

# APRS-IS connectivity
aprsis.enabled=true
aprsis.host=rotate.aprs2.net
aprsis.port=14580
aprsis.callsign=YOURCALL-1
aprsis.passcode=YOURPASSCODE
</code></pre><h3>APRSDroid (Android)</h3><p><strong>APRSdroid Configuration:</strong></p><ol><li><strong>Connection Method:</strong> TCP/IP (KISS)</li><li><strong>Host:</strong> 192.168.4.1</li><li><strong>Port:</strong> 8001</li><li><strong>Callsign:</strong> YOURCALL-1</li></ol><p><strong>Advanced Settings:</strong></p><ul><li><strong>Beaconing:</strong> Smart beaconing enabled</li><li><strong>Speed thresholds:</strong> Adjust for LoRa range</li><li><strong>Symbol:</strong> /l (laptop)</li><li><strong>Comment:</strong> LoRaTNCX Mobile</li></ul><h3>Xastir (Linux)</h3><p><strong>Xastir Configuration:</strong></p><ol><li><p><strong>Interface Configuration:</strong></p><ul><li>Interface Type: KISS</li><li>Device: 192.168.4.1:8001 (TCP)</li><li>Callsign: YOURCALL-1</li></ul></li><li><p><strong>Station Setup:</strong></p><ul><li>Callsign: YOURCALL-1</li><li>Symbol: /l</li><li>Comment: LoRaTNCX</li></ul></li></ol><p><strong>xastir.cnf:</strong></p><pre><code class="language-ini">[TNC-0]
device=192.168.4.1:8001
style=0  # 0=TCP KISS, 1=Serial KISS
</code></pre><h2>BPQ32 Configuration</h2><p>BPQ32 is a Windows packet radio BBS system that supports multiple TNC connections.</p><h3>BPQ32 Basic Setup</h3><p><strong>bpq32.cfg Configuration:</strong></p><pre><code class="language-ini">; BPQ32 Configuration for LoRaTNCX
LOCATOR=EM00aa    ; Your grid square
NODECALL=YOURCALL-1
NODEALIAS=LORA
IDMSG:
LoRaTNCX BBS - LoRa Packet Radio
***

; Port configuration for LoRaTNCX
PORT
 PORTNUM=1
 ID=LoRaTNCX Port
 TYPE=EXTERNAL
 DLLNAME=KISSDLL.DLL
 QUALITY=192
 MINQUAL=120
 FRACK=7000
 RESPTIME=1000
 RETRIES=10
 PACLEN=236
 TXDELAY=300
 TXTAIL=100
ENDPORT

; KISS configuration
[KISS]
; TCP KISS connection
HOST=192.168.4.1
PORT=8001
END[KISS]
</code></pre><h3>BPQ32 with Multiple Ports</h3><p><strong>Advanced Configuration:</strong></p><pre><code class="language-ini">; Multiple port configuration
LOCATOR=EM00aa
NODECALL=YOURCALL-1

; LoRa Port
PORT
 PORTNUM=1
 ID=LoRa VHF
 TYPE=EXTERNAL
 DLLNAME=KISSDLL.DLL
 QUALITY=192
 MINQUAL=120
 FRACK=7000
 RESPTIME=1000
 RETRIES=10
 PACLEN=236
 TXDELAY=300
 TXTAIL=100
ENDPORT

; HF Port (if available)
PORT
 PORTNUM=2
 ID=LoRa HF
 TYPE=EXTERNAL
 DLLNAME=KISSDLL.DLL
 QUALITY=100
 MINQUAL=80
 FRACK=15000
 RESPTIME=2000
 RETRIES=15
 PACLEN=100
ENDPORT

; Application definitions
APPLICATION 1,BBS,,YOURCALL-1
APPLICATION 2,CHAT,,YOURCALL-1
APPLICATION 3,DXC,,YOURCALL-1

[KISS]
HOST=192.168.4.1
PORT=8001
END[KISS]
</code></pre><h2>Packet Radio Software</h2><h3>LinBPQ (Linux BPQ32)</h3><p><strong>LinBPQ Configuration:</strong></p><pre><code class="language-ini">LOCATOR=EM00aa
NODECALL=YOURCALL-1

PORT
 PORTNUM=1
 ID=LoRaTNCX
 TYPE=EXTERNAL
 DLLNAME=/usr/local/lib/linbpq/kiss.so
 QUALITY=192
 MINQUAL=120
 FRACK=7000
 RESPTIME=1000
 RETRIES=10
 PACLEN=236
 TXDELAY=300
 TXTAIL=100
ENDPORT

[KISS]
HOST=192.168.4.1
PORT=8001
END[KISS]
</code></pre><h3>Linux AX.25 Stack</h3><p><strong>AX.25 Configuration:</strong></p><pre><code class="language-bash"># Configure AX.25 port
sudo kissattach /dev/ttyACM0 ax0 44.131.1.1

# Or for TCP KISS (requires socat)
socat TCP:192.168.4.1:8001 PTY,link=/dev/ttyKISS &amp;
sudo kissattach /dev/ttyKISS ax0 44.131.1.1

# Configure interface
sudo ifconfig ax0 44.131.1.1 netmask 255.255.255.0 up

# Add route
sudo route add -net 44.131.1.0 netmask 255.255.255.0 dev ax0
</code></pre><p><strong>ax25d.conf for BBS:</strong></p><pre><code class="language-ini"># AX.25 daemon configuration
[YOURCALL-1 VIA ax0]
NOCALL   * * * * * *  L
default  * * * * * *  - root /usr/sbin/node node
</code></pre><h3>Winlink Express</h3><p><strong>Winlink Configuration:</strong></p><ol><li><p><strong>Add Packet TNC:</strong></p><ul><li>TNC Type: KISS</li><li>Serial Port: TCP connection to 192.168.4.1:8001</li><li>Callsign: YOURCALL-1</li></ul></li><li><p><strong>RMS Express Setup:</strong></p><ul><li>Configure for packet radio</li><li>Set appropriate frequencies for your region</li><li>Enable compression for LoRa bandwidth efficiency</li></ul></li></ol><h2>Custom Applications</h2><h3>Python KISS Client</h3><p><strong>Basic KISS Client:</strong></p><pre><code class="language-python">import socket
import time
import struct

class LoRaTNCXClient:
    def __init__(self, host=&#39;192.168.4.1&#39;, port=8001):
        self.host = host
        self.port = port
        self.sock = None
        self.connected = False
        
    def connect(self):
        &quot;&quot;&quot;Connect to LoRaTNCX TCP KISS server&quot;&quot;&quot;
        try:
            self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.sock.connect((self.host, self.port))
            self.connected = True
            print(f&quot;Connected to LoRaTNCX at {self.host}:{self.port}&quot;)
            return True
        except Exception as e:
            print(f&quot;Connection failed: {e}&quot;)
            return False
    
    def disconnect(self):
        &quot;&quot;&quot;Disconnect from server&quot;&quot;&quot;
        if self.sock:
            self.sock.close()
        self.connected = False
    
    def send_kiss_frame(self, data):
        &quot;&quot;&quot;Send data as KISS frame&quot;&quot;&quot;
        if not self.connected:
            return False
            
        # KISS frame: FEND + data + FEND
        FEND = 0xC0
        frame = bytes([FEND]) + data + bytes([FEND])
        
        try:
            self.sock.send(frame)
            return True
        except Exception as e:
            print(f&quot;Send failed: {e}&quot;)
            return False
    
    def receive_kiss_frame(self, timeout=1.0):
        &quot;&quot;&quot;Receive KISS frame&quot;&quot;&quot;
        if not self.connected:
            return None
            
        self.sock.settimeout(timeout)
        try:
            data = self.sock.recv(1024)
            if data:
                # Strip FEND bytes and return payload
                if len(data) &gt;= 2 and data[0] == 0xC0 and data[-1] == 0xC0:
                    return data[1:-1]
            return data
        except socket.timeout:
            return None
        except Exception as e:
            print(f&quot;Receive failed: {e}&quot;)
            return None

# Usage example
if __name__ == &quot;__main__&quot;:
    client = LoRaTNCXClient()
    
    if client.connect():
        # Send APRS packet
        aprs_packet = b&quot;N0CALL&gt;APRS:&gt;Hello from LoRaTNCX!&quot;
        client.send_kiss_frame(aprs_packet)
        
        # Listen for packets
        while True:
            packet = client.receive_kiss_frame()
            if packet:
                print(f&quot;Received: {packet}&quot;)
            time.sleep(0.1)
    
    client.disconnect()
</code></pre><h3>Node.js KISS Client</h3><p><strong>Node.js Implementation:</strong></p><pre><code class="language-javascript">const net = require(&#39;net&#39;);

class LoRaTNCXClient {
    constructor(host = &#39;192.168.4.1&#39;, port = 8001) {
        this.host = host;
        this.port = port;
        this.client = null;
        this.connected = false;
    }
    
    connect() {
        return new Promise((resolve, reject) =&gt; {
            this.client = net.createConnection({
                host: this.host,
                port: this.port
            }, () =&gt; {
                this.connected = true;
                console.log(\`Connected to LoRaTNCX at \${this.host}:\${this.port}\`);
                resolve(true);
            });
            
            this.client.on(&#39;error&#39;, (err) =&gt; {
                console.error(&#39;Connection error:&#39;, err);
                reject(err);
            });
            
            this.client.on(&#39;data&#39;, (data) =&gt; {
                this.handleData(data);
            });
            
            this.client.on(&#39;close&#39;, () =&gt; {
                this.connected = false;
                console.log(&#39;Connection closed&#39;);
            });
        });
    }
    
    sendKISSFrame(data) {
        if (!this.connected) return false;
        
        const FEND = 0xC0;
        const frame = Buffer.concat([
            Buffer.from([FEND]),
            Buffer.from(data),
            Buffer.from([FEND])
        ]);
        
        this.client.write(frame);
        return true;
    }
    
    handleData(data) {
        // Process incoming KISS frames
        console.log(&#39;Received data:&#39;, data);
        
        // Strip FEND bytes if present
        if (data[0] === 0xC0 &amp;&amp; data[data.length - 1] === 0xC0) {
            const payload = data.slice(1, -1);
            console.log(&#39;KISS payload:&#39;, payload.toString());
        }
    }
    
    disconnect() {
        if (this.client) {
            this.client.end();
        }
        this.connected = false;
    }
}

// Usage
const client = new LoRaTNCXClient();

client.connect()
    .then(() =&gt; {
        // Send APRS beacon
        const aprsBeacon = &quot;N0CALL&gt;APRS:&gt;LoRaTNCX Test Beacon&quot;;
        client.sendKISSFrame(Buffer.from(aprsBeacon));
        
        // Keep connection alive
        setInterval(() =&gt; {
            console.log(&#39;Connection active...&#39;);
        }, 30000);
    })
    .catch(console.error);
</code></pre><h3>APRS Position Reporter</h3><p><strong>Python APRS Gateway with GNSS:</strong></p><pre><code class="language-python">import socket
import threading
import time
import aprslib

class APRSGateway:
    def __init__(self, tnc_host=&#39;192.168.4.1&#39;, tnc_port=8001, 
                 nmea_host=&#39;192.168.4.1&#39;, nmea_port=10110):
        self.tnc_host = tnc_host
        self.tnc_port = tnc_port
        self.nmea_host = nmea_host
        self.nmea_port = nmea_port
        
        # APRS-IS connection
        self.aprs_is = aprslib.IS(&#39;N0CALL&#39;, passwd=&#39;12345&#39;, 
                                host=&#39;rotate.aprs2.net&#39;, port=14580)
        
        # TNC connection
        self.tnc_sock = None
        
        # Position tracking
        self.last_position = None
        
    def connect_tnc(self):
        &quot;&quot;&quot;Connect to LoRaTNCX KISS server&quot;&quot;&quot;
        try:
            self.tnc_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.tnc_sock.connect((self.tnc_host, self.tnc_port))
            print(&quot;Connected to LoRaTNCX TNC&quot;)
            return True
        except Exception as e:
            print(f&quot;TNC connection failed: {e}&quot;)
            return False
    
    def connect_nmea(self):
        &quot;&quot;&quot;Connect to NMEA server for position data&quot;&quot;&quot;
        try:
            self.nmea_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.nmea_sock.connect((self.nmea_host, self.nmea_port))
            print(&quot;Connected to NMEA server&quot;)
            
            # Start NMEA processing thread
            threading.Thread(target=self.process_nmea, daemon=True).start()
            return True
        except Exception as e:
            print(f&quot;NMEA connection failed: {e}&quot;)
            return False
    
    def process_nmea(self):
        &quot;&quot;&quot;Process NMEA sentences for position updates&quot;&quot;&quot;
        buffer = &quot;&quot;
        while True:
            try:
                data = self.nmea_sock.recv(1024).decode(&#39;ascii&#39;, errors=&#39;ignore&#39;)
                buffer += data
                
                # Process complete sentences
                while &#39;\\n&#39; in buffer:
                    line, buffer = buffer.split(&#39;\\n&#39;, 1)
                    if line.startswith(&#39;$GNRMC&#39;) or line.startswith(&#39;$GPRMC&#39;):
                        # Parse position from RMC sentence
                        self.parse_position(line)
                        
            except Exception as e:
                print(f&quot;NMEA error: {e}&quot;)
                time.sleep(1)
    
    def parse_position(self, rmc_sentence):
        &quot;&quot;&quot;Parse position from RMC sentence&quot;&quot;&quot;
        parts = rmc_sentence.split(&#39;,&#39;)
        if len(parts) &gt;= 7:
            try:
                lat = parts[3]
                lat_dir = parts[4]
                lon = parts[5] 
                lon_dir = parts[6]
                
                if lat and lon:
                    # Convert to decimal degrees
                    lat_dd = self.nmea_to_decimal(lat, lat_dir)
                    lon_dd = self.nmea_to_decimal(lon, lon_dir)
                    
                    self.last_position = (lat_dd, lon_dd)
                    print(f&quot;Position updated: {lat_dd}, {lon_dd}&quot;)
                    
            except (ValueError, IndexError):
                pass
    
    def nmea_to_decimal(self, nmea_coord, direction):
        &quot;&quot;&quot;Convert NMEA coordinate to decimal degrees&quot;&quot;&quot;
        # DDMM.MMMM format to decimal degrees
        degrees = float(nmea_coord[:2])
        minutes = float(nmea_coord[2:])
        decimal = degrees + minutes / 60.0
        
        if direction in [&#39;S&#39;, &#39;W&#39;]:
            decimal = -decimal
            
        return decimal
    
    def send_aprs_position(self):
        &quot;&quot;&quot;Send APRS position report&quot;&quot;&quot;
        if self.last_position and self.tnc_sock:
            lat, lon = self.last_position
            
            # Create APRS position report
            position = f&quot;{lat:.4f},{lon:.4f}&quot;
            aprs_packet = f&quot;N0CALL&gt;APRS:@123456z{position} LoRaTNCX Mobile&quot;
            
            # Send via KISS
            kiss_frame = b&#39;\\xC0&#39; + aprs_packet.encode() + b&#39;\\xC0&#39;
            self.tnc_sock.send(kiss_frame)
            
            print(f&quot;Sent APRS position: {aprs_packet}&quot;)
    
    def run(self):
        &quot;&quot;&quot;Main gateway loop&quot;&quot;&quot;
        if not self.connect_tnc() or not self.connect_nmea():
            return
        
        # APRS-IS connection
        try:
            self.aprs_is.connect()
        except Exception as e:
            print(f&quot;APRS-IS connection failed: {e}&quot;)
            return
        
        print(&quot;APRS Gateway running...&quot;)
        
        # Send position updates every 5 minutes
        while True:
            self.send_aprs_position()
            time.sleep(300)

if __name__ == &quot;__main__&quot;:
    gateway = APRSGateway()
    gateway.run()
</code></pre><h2>Integration Best Practices</h2><h3>Connection Management</h3><p><strong>TCP vs Serial:</strong></p><ul><li><strong>TCP KISS:</strong> Preferred for network-based applications, multiple clients supported</li><li><strong>Serial KISS:</strong> Direct hardware connection, lower latency, single client</li></ul><p><strong>Connection Stability:</strong></p><ul><li>Implement reconnection logic for network interruptions</li><li>Monitor connection health with periodic pings</li><li>Handle connection drops gracefully</li></ul><h3>Performance Optimization</h3><p><strong>Frame Size:</strong></p><ul><li>Maximum KISS frame size: 236 bytes (BPQ32 default)</li><li>Adjust PACLEN based on LoRa bandwidth and SF <ul><li>Higher SF = lower data rate = smaller PACLEN</li><li>Lower SF = higher data rate = larger PACLEN</li></ul></li><li>Consider compression for text-heavy applications</li></ul><h3>Error Handling</h3><p><strong>Common Issues:</strong></p><ul><li><strong>Connection timeouts:</strong> Increase FRACK for long-distance links</li><li><strong>Frame corruption:</strong> Implement CRC checking in applications</li><li><strong>Buffer overflows:</strong> Monitor packet sizes and implement flow control</li></ul><p><strong>Debugging:</strong></p><ul><li>Enable verbose logging in applications</li><li>Monitor LoRaTNCX web interface for radio statistics</li><li>Use packet sniffers to analyze KISS traffic</li></ul><h3>Security Considerations</h3><p><strong>Network Security:</strong></p><ul><li>Use firewall rules to restrict KISS port access</li><li>Consider VPN for remote TNC access</li><li>Implement authentication for critical applications</li></ul><p><strong>RF Security:</strong></p><ul><li>Use unique sync words for private networks</li><li>Implement frequency hopping for sensitive communications</li><li>Monitor for unauthorized transmissions</li></ul><hr><p><a href="gnss-support">← Previous: GNSS Support</a> | <a href="/manual">Back to Main Manual</a> | <a href="testing-validation">Next: Testing and Validation →</a></p>`,83),dp=[cp],up=pe({__name:"12-applications-integration",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",lp,dp))}}),pp={class:"markdown-body"},gp=he(`<h1>13. Testing and Validation</h1><h2>Overview</h2><p>LoRaTNCX includes comprehensive testing tools and procedures to validate functionality, performance, and reliability. This section covers automated testing, interactive validation, range testing, and performance metrics to ensure your LoRaTNCX deployment works correctly.</p><h2>Automated Test Suite</h2><h3>Bidirectional Communication Test</h3><p>The primary test suite validates end-to-end communication between two LoRaTNCX devices using the KISS protocol.</p><p><strong>Requirements:</strong></p><ul><li>Two LoRaTNCX devices (any combination of V3/V4)</li><li>Two USB serial connections</li><li>Python 3 with pyserial library</li><li>Devices within 10 meters for initial testing</li></ul><p><strong>Installation:</strong></p><pre><code class="language-bash"># Install required Python packages
pip3 install pyserial

# Make test script executable
chmod +x test/kiss_test.py
</code></pre><p><strong>Basic Test Run:</strong></p><pre><code class="language-bash"># Test communication between two devices
python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0
</code></pre><p><strong>Expected Output:</strong></p><pre><code class="">============================================================
LoRaTNCX Bidirectional Test Suite
============================================================
Opening TNC1 on /dev/ttyUSB0...
✓ TNC1 opened successfully
Opening TNC2 on /dev/ttyACM0...
✓ TNC2 opened successfully

Reading configurations...
TNC1 Configuration:
  Frequency: 433.775 MHz
  Bandwidth: 125.0 kHz
  Spreading Factor: SF12
  Coding Rate: 4/7
  Output Power: 20 dBm
  Sync Word: 0x1424

TNC2 Configuration:
  Frequency: 433.775 MHz
  Bandwidth: 125.0 kHz
  Spreading Factor: SF12
  Coding Rate: 4/7
  Output Power: 20 dBm
  Sync Word: 0x1424

Test 1: TNC1 → TNC2
----------------------------------------------------------------------
Sending: &#39;Hello from TNC1 at 14:30:22&#39;
Listening on TNC2...
✓ Received 1 frame(s)
  Frame 1: &#39;Hello from TNC1 at 14:30:22&#39;
  ✓ Message matches!

Test 2: TNC2 → TNC1
----------------------------------------------------------------------
Sending: &#39;Hello from TNC2 at 14:30:25&#39;
Listening on TNC1...
✓ Received 1 frame(s)
  Frame 1: &#39;Hello from TNC2 at 14:30:25&#39;
  ✓ Message matches!

Test 3: Rapid Fire Test
----------------------------------------------------------------------
Sending 5 rapid messages from TNC1...
✓ All 5 messages received on TNC2

============================================================
TEST RESULTS: PASSED (3/3 tests)
============================================================
</code></pre><h3>Configuration Validation</h3><p><strong>Verify Device Configuration:</strong></p><pre><code class="language-bash"># Check configuration using command-line tool
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-config
</code></pre><p><strong>Expected Configuration Match:</strong></p><pre><code class="">============================================================
LoRaTNCX Current Configuration
============================================================
  Frequency:        433.775 MHz
  Bandwidth:        125.0 kHz
  Spreading Factor: SF12
  Coding Rate:      4/7
  Output Power:     20 dBm
  Sync Word:        0x1424
============================================================
</code></pre><h3>Hardware Diagnostics</h3><p><strong>Battery Voltage Check (V3 only):</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-battery
</code></pre><p><strong>Board Information:</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-board
</code></pre><p><strong>GNSS Status (V4 only):</strong></p><pre><code class="language-bash">python3 tools/loratncx_config.py /dev/ttyUSB0 --get-gnss
</code></pre><h2>Interactive Testing</h2><h3>Chat Mode Testing</h3><p>For manual testing and experimentation, use interactive mode:</p><pre><code class="language-bash">python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0 --interactive
</code></pre><p><strong>Interactive Commands:</strong></p><pre><code class="">Interactive Mode - Type commands:
  1:message    Send from TNC1
  2:message    Send from TNC2
  r            Check for received messages
  q            Quit

LoRaTNCX&gt; 1:Hello from device 1!
LoRaTNCX&gt; r
Checking for messages...
TNC2 received: Hello from device 1!
LoRaTNCX&gt; 2:Reply from device 2!
LoRaTNCX&gt; r
Checking for messages...
TNC1 received: Reply from device 2!
</code></pre><h3>Serial Monitor Testing</h3><p><strong>Monitor Raw KISS Traffic:</strong></p><pre><code class="language-bash"># Monitor TNC1
screen /dev/ttyUSB0 115200

# Monitor TNC2 (in another terminal)
screen /dev/ttyACM0 115200
</code></pre><p><strong>Send Test Frames Manually:</strong></p><pre><code class="language-bash"># Send a test frame (FEND + data + FEND)
echo -e &#39;\\xc0Hello World\\xc0&#39; &gt; /dev/ttyUSB0
</code></pre><h3>Web Interface Testing</h3><p><strong>Access Web Interface:</strong></p><ol><li>Connect to LoRaTNCX WiFi (AP mode)</li><li>Open browser to <code class="">http://192.168.4.1</code></li><li>Navigate through all tabs: <ul><li>Status Dashboard</li><li>LoRa Configuration</li><li>WiFi Configuration</li><li>GNSS Configuration (V4)</li></ul></li></ol><p><strong>Test REST API:</strong></p><pre><code class="language-bash"># Get current status
curl http://192.168.4.1/api/status

# Get LoRa configuration
curl http://192.168.4.1/api/lora/config

# Test configuration update
curl -X POST http://192.168.4.1/api/lora/config \\
  -H &quot;Content-Type: application/json&quot; \\
  -d &#39;{&quot;frequency&quot;: 433.775, &quot;spreadingFactor&quot;: 12}&#39;
</code></pre><h2>Range Testing</h2><h3>Setup for Range Testing</h3><p><strong>Equipment Needed:</strong></p><ul><li>Two LoRaTNCX devices</li><li>External antennas (recommended for best range)</li><li>GPS coordinates for distance measurement</li><li>Notebook for logging results</li></ul><p><strong>Pre-Test Configuration:</strong></p><pre><code class="language-bash"># Set both devices to same parameters
python3 tools/loratncx_config.py /dev/ttyUSB0 --frequency 433.775 --spreading-factor 12 --bandwidth 125
python3 tools/loratncx_config.py /dev/ttyACM0 --frequency 433.775 --spreading-factor 12 --bandwidth 125

# Save configuration
python3 tools/loratncx_config.py /dev/ttyUSB0 --save
python3 tools/loratncx_config.py /dev/ttyACM0 --save
</code></pre><h3>Range Test Procedure</h3><p><strong>Step 1: Baseline Test (10 meters)</strong></p><pre><code class="language-bash">python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0
# Should pass all tests
</code></pre><p><strong>Step 2: Incremental Distance Testing</strong></p><ul><li>Start at 100 meters</li><li>Send test messages every 50 meters</li><li>Record success rate and signal quality</li><li>Note terrain, obstacles, and weather conditions</li></ul><p><strong>Step 3: Maximum Range Test</strong></p><ul><li>Continue until communication fails</li><li>Try different locations and times</li><li>Test with different spreading factors</li></ul><h3>Range Test Data Collection</h3><p><strong>Test Log Template:</strong></p><pre><code class="">Date/Time: 2025-11-10 14:30:00
Location: Grid EM00aa
Device 1: V4, Antenna: Diamond RH795 (5dBi)
Device 2: V3, Antenna: Stock helical
Frequency: 433.775 MHz
SF: 12, BW: 125kHz, CR: 4/7

Distance (km) | Success Rate | Notes
--------------|--------------|--------
0.01          | 100% (10/10) | Line of sight
0.1           | 100% (10/10) | Line of sight
0.5           | 95% (19/20)  | Light tree cover
1.0           | 80% (16/20)  | Rolling terrain
2.0           | 60% (12/20)  | Hill between stations
5.0           | 20% (4/20)   | Mountain ridge
</code></pre><h3>Environmental Factors</h3><p><strong>Line-of-Sight Testing:</strong></p><ul><li>Best case: Direct visual contact, elevated positions</li><li>Typical range: 5-20 km with good antennas</li><li>Record elevation profiles and Fresnel zone clearance</li></ul><p><strong>Obstructed Testing:</strong></p><ul><li>Urban environments: 1-5 km typical</li><li>Forested areas: 0.5-2 km typical</li><li>Indoor testing: 10-100 meters through walls</li></ul><p><strong>Weather Impact:</strong></p><ul><li>Rain/fog: Minimal impact on LoRa signals</li><li>Temperature: -40°C to +85°C operational range</li><li>Humidity: No significant effect</li></ul><h2>Performance Metrics</h2><h3>Radio Performance Metrics</h3><p><strong>Key Performance Indicators:</strong></p><p><strong>Time on Air (ToA):</strong></p><ul><li>SF7, 125kHz: ~50ms for 100 bytes</li><li>SF12, 125kHz: ~2000ms for 100 bytes</li><li>Formula: ToA = (2^SF / BW) * (4/(4+CR)) * (payload_bytes + 8)</li></ul><p><strong>Throughput:</strong></p><ul><li>Effective data rate depends on SF and payload size</li><li>SF7: ~5-10 kbps effective</li><li>SF12: ~0.2-0.5 kbps effective</li><li>Includes protocol overhead and duty cycle limits</li></ul><p><strong>Receive Sensitivity:</strong></p><ul><li>SX1262 typical: -148 dBm (SF12, 125kHz)</li><li>Real-world: -135 to -140 dBm with antennas</li><li>Affects maximum range capability</li></ul><h3>Latency Measurements</h3><p><strong>Round-Trip Time (RTT):</strong></p><pre><code class="language-bash"># Measure latency with ping test
python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0 --latency-test
</code></pre><p><strong>Typical Latency:</strong></p><ul><li>SF7: 100-200ms RTT</li><li>SF12: 4-6 seconds RTT</li><li>Includes transmit time, propagation delay, and processing time</li></ul><h3>Packet Success Rate (PSR)</h3><p><strong>Measuring PSR:</strong></p><pre><code class="language-bash"># Send 100 test packets and measure success rate
python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0 --psr-test 100
</code></pre><p><strong>PSR Factors:</strong></p><ul><li>Distance and signal strength</li><li>Interference from other transmitters</li><li>Spreading factor and coding rate</li><li>Antenna quality and placement</li><li>Duty cycle limitations</li></ul><h3>Battery Life Testing</h3><p><strong>V3 Battery Testing:</strong></p><pre><code class="language-bash"># Monitor battery voltage during operation
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-battery --monitor
</code></pre><p><strong>Power Consumption:</strong></p><ul><li>Receive mode: ~80-100mA</li><li>Transmit mode: 150-300mA (depending on power setting)</li><li>Sleep mode: &lt;1mA</li><li>GNSS active: +25-30mA</li></ul><p><strong>Battery Life Calculation:</strong></p><pre><code class="">Life_hours = (battery_mAh * 0.8) / average_current_mA
# 0.8 = 80% usable capacity
# Example: 2000mAh battery, 100mA average = 16 hours
</code></pre><h3>Error Rate Testing</h3><p><strong>Bit Error Rate (BER) Testing:</strong></p><pre><code class="language-bash"># Test at various signal levels
python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0 --ber-test
</code></pre><p><strong>Packet Error Rate (PER):</strong></p><ul><li>Measure percentage of lost or corrupted packets</li><li>Target: &lt;1% PER for reliable communication</li><li>Acceptable: &lt;5% PER for most applications</li></ul><h2>Factory Test Procedures</h2><h3>V4 Factory Test</h3><p><strong>Hardware Test Sequence:</strong></p><ol><li><strong>OLED Display Test:</strong> Shows test progress and results</li><li><strong>Serial Communication:</strong> Verifies USB/serial interface</li><li><strong>LED Test:</strong> Blinks onboard LEDs</li><li><strong>WiFi Test:</strong> Connects to network and scans for access points</li><li><strong>LoRa Test:</strong> Ping-pong communication test</li><li><strong>Timer Test:</strong> Validates timing functions</li><li><strong>GNSS Test:</strong> Checks GPS/GLONASS/BDS/QZSS reception</li></ol><p><strong>Running Factory Test:</strong></p><pre><code class="language-bash"># Upload factory test firmware
pio run --target upload --environment heltec_wifi_lora_32_V4_factory_test

# Monitor test output
pio device monitor
</code></pre><h3>V3 Factory Test</h3><p><strong>V3 Test Features:</strong></p><ul><li>Similar to V4 but without GNSS testing</li><li>Focuses on LoRa, WiFi, and display functions</li><li>Battery voltage monitoring</li><li>External antenna testing</li></ul><h3>Test Result Interpretation</h3><p><strong>Pass Criteria:</strong></p><ul><li>✅ All hardware interfaces functional</li><li>✅ LoRa communication successful</li><li>✅ WiFi connectivity working</li><li>✅ Display and LEDs operational</li><li>✅ GNSS fix achieved (V4)</li></ul><p><strong>Common Failure Points:</strong></p><ul><li>Antenna not connected (GNSS test fails)</li><li>Power supply issues (battery test fails)</li><li>LoRa module not responding (communication test fails)</li><li>WiFi interference (connection test fails)</li></ul><h2>Troubleshooting Failed Tests</h2><h3>Communication Test Failures</h3><p><strong>No Messages Received:</strong></p><pre><code class="language-bash"># Check device configurations match
python3 tools/loratncx_config.py /dev/ttyUSB0 --get-config
python3 tools/loratncx_config.py /dev/ttyACM0 --get-config

# Verify frequency, SF, BW, CR, sync word are identical
</code></pre><p><strong>One Direction Works:</strong></p><ul><li>Check PA control on V4 transmitter</li><li>Verify antenna connections</li><li>Test with devices swapped</li><li>Check for interference on frequency</li></ul><p><strong>Garbled Messages:</strong></p><ul><li>Reduce distance between devices</li><li>Change to less crowded frequency</li><li>Verify sync word matches</li><li>Check for baud rate issues</li></ul><h3>Serial Connection Issues</h3><p><strong>Permission Denied:</strong></p><pre><code class="language-bash"># Add user to dialout group
sudo usermod -a -G dialout $USER
# Logout and login again

# Or run with sudo
sudo python3 test/kiss_test.py /dev/ttyUSB0 /dev/ttyACM0
</code></pre><p><strong>Device Not Found:</strong></p><pre><code class="language-bash"># List available ports
ls -l /dev/tty{USB,ACM,S}*

# Check dmesg for device detection
dmesg | tail -20

# Try different USB ports/cables
</code></pre><h3>Web Interface Issues</h3><p><strong>Cannot Access Web Interface:</strong></p><pre><code class="language-bash"># Check WiFi connection
nmcli device wifi list

# Verify IP address
curl http://192.168.4.1/api/status

# Check firewall settings
sudo ufw status
</code></pre><p><strong>API Returns Errors:</strong></p><pre><code class="language-bash"># Check JSON format
curl -v http://192.168.4.1/api/lora/config

# Verify firmware version
curl http://192.168.4.1/api/status | jq .version
</code></pre><h2>Performance Optimization</h2><h3>Parameter Tuning</h3><p><strong>Range vs Speed Trade-offs:</strong></p><pre><code class="language-bash"># Long range, slow (SF12)
python3 tools/loratncx_config.py /dev/ttyUSB0 --spreading-factor 12 --bandwidth 62.5

# Short range, fast (SF7)
python3 tools/loratncx_config.py /dev/ttyUSB0 --spreading-factor 7 --bandwidth 250
</code></pre><p><strong>Coding Rate Optimization:</strong></p><ul><li>CR 4/5: Faster, less robust</li><li>CR 4/8: Slower, more robust</li><li>Default CR 4/7: Good balance</li></ul><h3>Duty Cycle Management</h3><p><strong>LoRa Duty Cycle Limits:</strong></p><ul><li>433 MHz: 10% duty cycle (ETSI)</li><li>868 MHz: 1% duty cycle (ETSI)</li><li>915 MHz: 1% duty cycle (FCC)</li></ul><p><strong>Managing Duty Cycle:</strong></p><pre><code class="language-bash"># Calculate safe transmit interval
# For 10% duty cycle, ToA = 100ms
# Safe interval = ToA * 9 = 900ms between transmissions
</code></pre><h3>Interference Mitigation</h3><p><strong>Frequency Hopping:</strong></p><pre><code class="language-bash"># Use different sync words for multiple networks
python3 tools/loratncx_config.py /dev/ttyUSB0 --syncword 0x1425
python3 tools/loratncx_config.py /dev/ttyACM0 --syncword 0x1426
</code></pre><p><strong>Channel Monitoring:</strong></p><pre><code class="language-bash"># Monitor for interference
python3 test/kiss_test.py /dev/ttyUSB0 --monitor-mode
</code></pre><h2>Validation Checklists</h2><h3>Pre-Deployment Checklist</h3><ul><li>[ ] Automated test suite passes</li><li>[ ] Configuration verified on both devices</li><li>[ ] Antennas properly connected and oriented</li><li>[ ] Power sources stable and adequate</li><li>[ ] Serial connections reliable</li><li>[ ] Web interface accessible</li><li>[ ] GNSS functioning (V4)</li></ul><h3>Post-Deployment Validation</h3><ul><li>[ ] Range testing completed at target distances</li><li>[ ] Packet success rate &gt;95% under normal conditions</li><li>[ ] Latency within acceptable limits</li><li>[ ] Battery life meets requirements</li><li>[ ] Interference levels acceptable</li><li>[ ] Duty cycle compliance verified</li></ul><h3>Maintenance Testing</h3><p><strong>Monthly Validation:</strong></p><ul><li>Run automated test suite</li><li>Check battery voltage and health</li><li>Verify antenna connections</li><li>Update firmware if needed</li><li>Backup configuration settings</li></ul><p><strong>Annual Testing:</strong></p><ul><li>Complete range survey</li><li>Antenna system inspection</li><li>Battery replacement if needed</li><li>Performance benchmarking</li></ul><hr><p><a href="applications-integration">← Previous: Applications and Integration</a> | <a href="/manual">Back to Main Manual</a> | <a href="troubleshooting">Next: Troubleshooting →</a></p>`,156),fp=[gp],hp=pe({__name:"13-testing-validation",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",pp,fp))}}),mp={class:"markdown-body"},Sp=he(`<h1>14. Troubleshooting</h1><h2>Overview</h2><p>This section provides comprehensive troubleshooting guidance for common LoRaTNCX issues. Problems are organized by category with step-by-step diagnostic procedures and solutions. Most issues can be resolved through systematic troubleshooting.</p><h2>Common Issues</h2><h3>Device Won’t Power On</h3><p><strong>Symptoms:</strong></p><ul><li>No LED activity</li><li>Device doesn’t respond to serial commands</li><li>Web interface not accessible</li></ul><p><strong>Possible Causes &amp; Solutions:</strong></p><p><strong>1. Power Supply Issues:</strong></p><ul><li><strong>Low Voltage:</strong> Ensure input voltage is 5V (USB) or 3.3-5V (external)</li><li><strong>Current Limiting:</strong> LoRa transmission requires 150-300mA peaks</li><li><strong>Cable Quality:</strong> Use short, thick USB cables for reliable power delivery</li></ul><p><strong>2. Hardware Damage:</strong></p><ul><li><strong>ESD Damage:</strong> Handle boards carefully, use anti-static precautions</li><li><strong>Overvoltage:</strong> Never apply more than 5.5V to any pin</li><li><strong>Short Circuit:</strong> Check for solder bridges or component damage</li></ul><p><strong>3. Firmware Corruption:</strong></p><ul><li><strong>Corrupt Flash:</strong> Perform factory reset and re-flash firmware</li><li><strong>Bootloader Issues:</strong> Try different USB ports or cables</li><li><strong>Watchdog Reset:</strong> May indicate power supply instability</li></ul><p><strong>Diagnostic Steps:</strong></p><pre><code class="language-bash"># Check if device enumerates on USB
lsusb | grep -i esp32

# Monitor serial output during boot
screen /dev/ttyACM0 115200

# Check power consumption (if multimeter available)
# Should draw ~80mA in receive mode, ~150mA during TX
</code></pre><h3>No Serial Communication</h3><p><strong>Symptoms:</strong></p><ul><li>Device powers on but no serial response</li><li>Terminal programs can’t connect</li><li>Command-line tools fail with “port not found”</li></ul><p><strong>Serial Port Issues:</strong></p><p><strong>1. Permission Problems:</strong></p><pre><code class="language-bash"># Add user to dialout group (Linux)
sudo usermod -a -G dialout $USER
# Logout and login again

# Or run commands with sudo
sudo python3 tools/loratncx_config.py /dev/ttyACM0 --get-config
</code></pre><p><strong>2. Port Detection:</strong></p><pre><code class="language-bash"># List available serial ports
ls -l /dev/tty{USB,ACM,S}*

# Check system messages for device detection
dmesg | tail -20 | grep tty

# Try different USB ports/cables
</code></pre><p><strong>3. Driver Issues:</strong></p><ul><li><strong>Linux:</strong> Usually works out-of-the-box with cdc_acm driver</li><li><strong>Windows:</strong> Install CP210x USB-to-UART drivers from Silicon Labs</li><li><strong>macOS:</strong> Usually works out-of-the-box</li></ul><p><strong>4. Port Conflicts:</strong></p><pre><code class="language-bash"># Check if port is already in use
sudo lsof /dev/ttyACM0

# Kill conflicting processes
sudo fuser -k /dev/ttyACM0

# Reset USB subsystem (Linux)
sudo modprobe -r cdc_acm
sudo modprobe cdc_acm
</code></pre><h3>OLED Display Problems</h3><p><strong>Symptoms:</strong></p><ul><li>Blank display</li><li>Garbled text</li><li>Display doesn’t update</li></ul><p><strong>Display Issues:</strong></p><p><strong>1. Connection Problems:</strong></p><ul><li><strong>I2C Bus Issues:</strong> Check SDA/SCL pin connections</li><li><strong>Power Supply:</strong> OLED requires stable 3.3V supply</li><li><strong>Address Conflict:</strong> Ensure no other I2C devices use 0x3C</li></ul><p><strong>2. Firmware Issues:</strong></p><ul><li><strong>U8g2 Library:</strong> Verify correct pin definitions in variants</li><li><strong>Initialization Failure:</strong> Check serial logs for OLED errors</li><li><strong>Memory Issues:</strong> May fail if ESP32 RAM is heavily used</li></ul><p><strong>3. Hardware Problems:</strong></p><ul><li><strong>Defective Display:</strong> Try known working display</li><li><strong>Cable Damage:</strong> Check ribbon cable connections</li><li><strong>ESD Damage:</strong> Handle display carefully</li></ul><p><strong>Diagnostic Commands:</strong></p><pre><code class="language-bash"># Check I2C bus (requires i2c-tools)
sudo apt install i2c-tools
sudo i2cdetect -y 1  # Check I2C bus 1

# Monitor serial output for OLED errors
screen /dev/ttyACM0 115200
</code></pre><h2>Firmware Update Problems</h2><h3>Upload Fails</h3><p><strong>Symptoms:</strong></p><ul><li>PlatformIO build succeeds but upload fails</li><li>“Failed to connect” or timeout errors</li><li>Device not found during upload</li></ul><p><strong>Upload Issues:</strong></p><p><strong>1. Bootloader Mode:</strong></p><ul><li><strong>Manual Boot:</strong> Hold BOOT button while plugging in USB</li><li><strong>Auto Reset:</strong> Ensure RTS/DTR signals work (some USB-serial adapters lack this)</li><li><strong>Timing Issues:</strong> Try slower upload speeds</li></ul><p><strong>2. Serial Connection:</strong></p><pre><code class="language-bash"># Test basic serial connectivity
screen /dev/ttyACM0 115200
# Should see bootloader messages or firmware output

# Check upload port
pio run --target upload --upload-port /dev/ttyACM0 --verbose
</code></pre><p><strong>3. PlatformIO Configuration:</strong></p><ul><li><strong>Board Selection:</strong> Verify correct board (V3 vs V4) in platformio.ini</li><li><strong>Environment:</strong> Use <code class="">heltec_wifi_lora_32_V3</code> or <code class="">heltec_wifi_lora_32_V4</code></li><li><strong>Dependencies:</strong> Ensure all libraries are installed</li></ul><p><strong>4. USB Issues:</strong></p><ul><li><strong>Power Delivery:</strong> Some USB ports don’t provide enough current</li><li><strong>Cable Quality:</strong> Use USB 2.0 cables, avoid USB 3.0 ports</li><li><strong>Hub Issues:</strong> Connect directly to computer, avoid USB hubs</li></ul><h3>Build Errors</h3><p><strong>Symptoms:</strong></p><ul><li>Compilation fails with errors</li><li>Library dependency issues</li><li>PlatformIO environment problems</li></ul><p><strong>Build Problems:</strong></p><p><strong>1. Library Issues:</strong></p><pre><code class="language-bash"># Clean and rebuild dependencies
pio lib update
pio run --clean

# Check library versions in platformio.ini
# RadioLib@^7.4.0
# U8g2@^2.35.30
# ESPAsyncWebServer@^3.6.0
</code></pre><p><strong>2. PlatformIO Setup:</strong></p><pre><code class="language-bash"># Update PlatformIO
pio upgrade

# Check Python version (should be 3.6+)
python3 --version

# Reinstall PlatformIO (if issues persist)
pip uninstall platformio
pip install platformio
</code></pre><p><strong>3. Code Issues:</strong></p><ul><li><strong>Variant Files:</strong> Ensure correct pins defined in variants/ directory</li><li><strong>Build Flags:</strong> Check platformio.ini for correct board-specific flags</li><li><strong>RAM Issues:</strong> Reduce features if getting “out of memory” errors</li></ul><h3>Filesystem Upload Issues</h3><p><strong>Symptoms:</strong></p><ul><li>Firmware uploads but web interface shows errors</li><li>SPIFFS filesystem not accessible</li><li>Configuration not persisting</li></ul><p><strong>SPIFFS Issues:</strong></p><p><strong>1. Upload Process:</strong></p><pre><code class="language-bash"># Upload filesystem separately
pio run --target uploadfs --environment heltec_wifi_lora_32_V4

# Check filesystem size
pio run --environment heltec_wifi_lora_32_V4 | grep &quot;SPIFFS&quot;
</code></pre><p><strong>2. Filesystem Corruption:</strong></p><ul><li><strong>Factory Reset:</strong> Erase flash and re-upload both firmware and filesystem</li><li><strong>Size Mismatch:</strong> Ensure data/ directory contents fit in SPIFFS partition</li><li><strong>Upload Timing:</strong> Wait for filesystem upload to complete (can take time)</li></ul><p><strong>3. Recovery:</strong></p><pre><code class="language-bash"># Erase entire flash
pio run --target erase --environment heltec_wifi_lora_32_V4

# Re-upload firmware
pio run --target upload --environment heltec_wifi_lora_32_V4

# Re-upload filesystem
pio run --target uploadfs --environment heltec_wifi_lora_32_V4
</code></pre><h2>Communication Failures</h2><h3>No LoRa Transmission</h3><p><strong>Symptoms:</strong></p><ul><li>LED doesn’t flash during transmission attempts</li><li>Other devices don’t receive packets</li><li>Serial monitor shows no TX activity</li></ul><p><strong>Transmission Issues:</strong></p><p><strong>1. Configuration Mismatch:</strong></p><pre><code class="language-bash"># Verify LoRa parameters match between devices
python3 tools/loratncx_config.py /dev/ttyACM0 --get-config
python3 tools/loratncx_config.py /dev/ttyACM1 --get-config

# Check: Frequency, Bandwidth, SF, CR, Sync Word must match
</code></pre><p><strong>2. Power Amplifier (V4):</strong></p><ul><li><strong>PA Control:</strong> Ensure PA is enabled for transmission</li><li><strong>Power Setting:</strong> Check output power (10-20dBm typical)</li><li><strong>Antenna Connection:</strong> Verify antenna is connected and matched</li></ul><p><strong>3. Hardware Issues:</strong></p><ul><li><strong>SX1262 Module:</strong> May be damaged or not initialized</li><li><strong>SPI Bus:</strong> Check SPI pin connections</li><li><strong>Clock Issues:</strong> Verify crystal oscillator is working</li></ul><p><strong>4. Duty Cycle Limits:</strong></p><ul><li><strong>Regulatory Limits:</strong> Check local regulations (ETSI, FCC)</li><li><strong>Thermal Issues:</strong> High power transmission may cause overheating</li></ul><h3>No LoRa Reception</h3><p><strong>Symptoms:</strong></p><ul><li>Transmissions work but no packets received</li><li>RSSI readings are very low or negative</li><li>High packet loss rate</li></ul><p><strong>Reception Issues:</strong></p><p><strong>1. Sensitivity Problems:</strong></p><ul><li><strong>Antenna Issues:</strong> Check antenna connection and orientation</li><li><strong>Frequency Offset:</strong> Recalibrate frequency if using non-standard crystals</li><li><strong>Interference:</strong> Scan for interfering signals on frequency</li></ul><p><strong>2. Configuration Issues:</strong></p><ul><li><strong>Bandwidth Mismatch:</strong> Ensure RX bandwidth matches TX</li><li><strong>SF/Rate Mismatch:</strong> Coding rate must match between devices</li><li><strong>Sync Word:</strong> Must be identical for communication</li></ul><p><strong>3. Range Issues:</strong></p><ul><li><strong>Path Loss:</strong> Calculate free space path loss</li><li><strong>Obstructions:</strong> Line-of-sight required for long range</li><li><strong>Multipath Fading:</strong> Avoid reflective surfaces near antennas</li></ul><p><strong>4. Hardware Problems:</strong></p><ul><li><strong>LNA Issues:</strong> Low noise amplifier may be damaged</li><li><strong>Filter Problems:</strong> RX filters may be misaligned</li><li><strong>AGC Issues:</strong> Automatic gain control malfunction</li></ul><h3>Packet Corruption</h3><p><strong>Symptoms:</strong></p><ul><li>Packets received but data is garbled</li><li>CRC errors in received packets</li><li>Intermittent communication</li></ul><p><strong>Data Integrity Issues:</strong></p><p><strong>1. Interference:</strong></p><ul><li><strong>Co-channel:</strong> Other LoRa devices on same frequency</li><li><strong>Adjacent Channel:</strong> Strong signals on nearby frequencies</li><li><strong>Broadband Noise:</strong> Electrical noise from nearby equipment</li></ul><p><strong>2. Timing Issues:</strong></p><ul><li><strong>Clock Drift:</strong> Crystal accuracy affects symbol timing</li><li><strong>Preamble Detection:</strong> Insufficient preamble length</li><li><strong>Frame Timing:</strong> TX/RX timing synchronization problems</li></ul><p><strong>3. Protocol Issues:</strong></p><ul><li><strong>KISS Framing:</strong> Incorrect frame boundaries</li><li><strong>Escaping:</strong> FESC/TFESC sequences corrupted</li><li><strong>Buffer Overflows:</strong> Packet too large for buffers</li></ul><h2>Power Issues</h2><h3>Battery Problems (V3)</h3><p><strong>Symptoms:</strong></p><ul><li>Incorrect battery voltage readings</li><li>Rapid battery drain</li><li>Device shuts down unexpectedly</li></ul><p><strong>Battery Issues:</strong></p><p><strong>1. Voltage Reading Errors:</strong></p><ul><li><strong>V3.2+ Boards:</strong> Use standard configuration</li><li><strong>Original V3 Boards:</strong> Uncomment V3_ORIGINAL_BATTERY_LOGIC in platformio.ini</li><li><strong>Calibration:</strong> Battery readings may need offset adjustment</li></ul><p><strong>2. Power Consumption:</strong></p><ul><li><strong>High Current Draw:</strong> Check for short circuits</li><li><strong>Sleep Mode:</strong> Ensure device enters sleep when inactive</li><li><strong>Radio Duty Cycle:</strong> High transmit power increases consumption</li></ul><p><strong>3. Battery Health:</strong></p><ul><li><strong>Capacity Loss:</strong> LiPo batteries degrade over time</li><li><strong>Internal Resistance:</strong> High resistance causes voltage drops</li><li><strong>Charging Issues:</strong> Use proper LiPo charger with balancing</li></ul><h3>Power Supply Problems</h3><p><strong>Symptoms:</strong></p><ul><li>Device resets during transmission</li><li>Unstable operation</li><li>Watchdog timer resets</li></ul><p><strong>Power Supply Issues:</strong></p><p><strong>1. Voltage Stability:</strong></p><ul><li><strong>Ripple:</strong> Switching power supplies may have AC ripple</li><li><strong>Dropout:</strong> Voltage sags during high current draw</li><li><strong>Noise:</strong> Electrical noise on power lines</li></ul><p><strong>2. Current Capacity:</strong></p><ul><li><strong>Peak Current:</strong> LoRa TX requires 150-300mA peaks</li><li><strong>Average Current:</strong> 80-100mA in receive mode</li><li><strong>USB Limits:</strong> Some USB ports current-limit at 500mA</li></ul><p><strong>3. Cable and Connector Issues:</strong></p><ul><li><strong>Resistance:</strong> Long/thin cables have high resistance</li><li><strong>Contact Problems:</strong> Poor connections cause voltage drops</li><li><strong>Connector Damage:</strong> Bent pins or corrosion</li></ul><p><strong>Diagnostic Commands:</strong></p><pre><code class="language-bash"># Monitor voltage during operation (requires multimeter)
# Check voltage at device pins during TX/RX

# Monitor serial for watchdog resets
screen /dev/ttyACM0 115200
# Look for &quot;ets_main.c&quot; or watchdog messages
</code></pre><h2>Configuration Problems</h2><h3>Settings Not Persisting</h3><p><strong>Symptoms:</strong></p><ul><li>Configuration changes lost after reboot</li><li>Web interface shows old values</li><li>Command-line tools show unexpected values</li></ul><p><strong>Persistence Issues:</strong></p><p><strong>1. SPIFFS Problems:</strong></p><pre><code class="language-bash"># Check filesystem health
# Web interface should show configuration status

# Re-upload filesystem
pio run --target uploadfs --environment heltec_wifi_lora_32_V4
</code></pre><p><strong>2. Save Operations:</strong></p><ul><li><strong>Manual Save:</strong> Use <code class="">--save</code> flag with command-line tool</li><li><strong>Web Interface:</strong> Click “Save Configuration” button</li><li><strong>Hardware Command:</strong> Send HW_SAVE_CONFIG via KISS</li></ul><p><strong>3. Corruption:</strong></p><ul><li><strong>Factory Reset:</strong> Reset to defaults and reconfigure</li><li><strong>Flash Erase:</strong> Complete flash erase and re-upload</li><li><strong>Backup Config:</strong> Save working configuration before changes</li></ul><h3>Invalid Configuration Values</h3><p><strong>Symptoms:</strong></p><ul><li>Device accepts invalid parameters</li><li>Communication fails with “valid” configuration</li><li>Unexpected behavior with certain settings</li></ul><p><strong>Parameter Validation:</strong></p><p><strong>1. Frequency Limits:</strong></p><ul><li><strong>433 MHz Band:</strong> 433.05 - 434.79 MHz (Europe)</li><li><strong>868 MHz Band:</strong> 868.0 - 868.6 MHz (Europe)</li><li><strong>915 MHz Band:</strong> 902.0 - 928.0 MHz (USA)</li><li><strong>Check Local Regulations:</strong> Verify legal frequencies in your area</li></ul><p><strong>2. Parameter Combinations:</strong></p><ul><li><strong>Bandwidth/SF Trade-off:</strong> Higher SF allows narrower bandwidth</li><li><strong>Coding Rate Impact:</strong> Higher CR improves robustness but reduces throughput</li><li><strong>Power Limits:</strong> Respect regulatory limits (typically 14-20dBm ERP)</li></ul><p><strong>3. Sync Word Conflicts:</strong></p><ul><li><strong>Default:</strong> 0x1424 (avoid conflicts with other networks)</li><li><strong>Private Networks:</strong> Use unique sync words</li><li><strong>Standard Values:</strong> Some applications expect specific sync words</li></ul><h3>Network Configuration Issues</h3><p><strong>Symptoms:</strong></p><ul><li>WiFi connection fails</li><li>TCP KISS server not accessible</li><li>IP address conflicts</li></ul><p><strong>Network Problems:</strong></p><p><strong>1. WiFi Issues:</strong></p><pre><code class="language-bash"># Check WiFi scan results
nmcli device wifi list

# Test connection manually
nmcli device wifi connect &quot;LoRaTNCX&quot; password &quot;password&quot;

# Check IP assignment
ip addr show wlan0
</code></pre><p><strong>2. TCP Server Problems:</strong></p><pre><code class="language-bash"># Test TCP connectivity
telnet 192.168.4.1 8001

# Check port binding
netstat -tlnp | grep 8001

# Firewall rules
sudo ufw status
sudo ufw allow 8001
</code></pre><p><strong>3. IP Address Issues:</strong></p><ul><li><strong>DHCP Problems:</strong> Static IP may be needed in some networks</li><li><strong>Subnet Conflicts:</strong> Ensure unique IP in network range</li><li><strong>Gateway Issues:</strong> Check default route configuration</li></ul><h2>GNSS Issues</h2><h3>No GNSS Fix</h3><p><strong>Symptoms:</strong></p><ul><li>No satellite lock after extended period</li><li>“ANTENNA OPEN” messages in NMEA data</li><li>Position data shows zeros or invalid values</li></ul><p><strong>GNSS Problems:</strong></p><p><strong>1. Antenna Issues:</strong></p><ul><li><strong>Connection:</strong> Verify antenna cable is securely connected</li><li><strong>Type:</strong> Use active GNSS antenna with proper voltage</li><li><strong>Placement:</strong> Clear sky view, away from metal objects</li><li><strong>Cable Damage:</strong> Check for cuts or shorts in antenna cable</li></ul><p><strong>2. Module Configuration:</strong></p><pre><code class="language-bash"># Check GNSS configuration
python3 tools/loratncx_config.py /dev/ttyACM0 --get-gnss

# Verify correct pins (V3 boards)
# RX: GNSS TX → MCU RX, TX: MCU TX → GNSS RX
</code></pre><p><strong>3. Environmental Factors:</strong></p><ul><li><strong>Indoor Operation:</strong> Limited satellite visibility</li><li><strong>Urban Canyon:</strong> Buildings block satellite signals</li><li><strong>Weather:</strong> Generally not affected, but heavy cloud cover may reduce signal</li><li><strong>Jamming:</strong> Check for GPS jamming sources</li></ul><p><strong>4. Hardware Issues:</strong></p><ul><li><strong>Module Damage:</strong> Try different GNSS module</li><li><strong>Power Supply:</strong> GNSS needs clean 3.3V supply</li><li><strong>UART Issues:</strong> Check serial communication at 9600 baud</li></ul><h3>Incorrect Position Data</h3><p><strong>Symptoms:</strong></p><ul><li>Position readings are inaccurate</li><li>Coordinates jump erratically</li><li>Altitude readings wrong</li></ul><p><strong>Position Accuracy Issues:</strong></p><p><strong>1. Satellite Geometry:</strong></p><ul><li><strong>HDOP:</strong> High dilution of precision (&gt;5) indicates poor geometry</li><li><strong>Satellite Count:</strong> Need at least 4 satellites for 3D fix</li><li><strong>Elevation Angles:</strong> Low elevation satellites less accurate</li></ul><p><strong>2. Multipath Errors:</strong></p><ul><li><strong>Reflections:</strong> Signals bouncing off buildings/ground</li><li><strong>Antenna Placement:</strong> Mount antenna away from reflective surfaces</li><li><strong>Choke Ring:</strong> Advanced antennas reduce multipath</li></ul><p><strong>3. Timing Issues:</strong></p><ul><li><strong>Clock Drift:</strong> GNSS module clock accuracy</li><li><strong>Leap Seconds:</strong> UTC timing corrections</li><li><strong>Coordinate System:</strong> Ensure correct datum (WGS84)</li></ul><h3>NMEA Data Problems</h3><p><strong>Symptoms:</strong></p><ul><li>No NMEA sentences received</li><li>Garbled or incomplete sentences</li><li>TCP server not providing data</li></ul><p><strong>NMEA Issues:</strong></p><p><strong>1. Serial Communication:</strong></p><pre><code class="language-bash"># Monitor raw NMEA data
screen /dev/ttyACM0 115200
# Look for $GNGGA, $GNRMC, etc.

# Check baud rate (default 9600)
# May need to configure module for different rate
</code></pre><p><strong>2. TCP Server Issues:</strong></p><pre><code class="language-bash"># Test NMEA TCP server
nc 192.168.4.1 10110

# Check server status via web interface
curl http://192.168.4.1/api/gnss/status
</code></pre><p><strong>3. Sentence Parsing:</strong></p><ul><li><strong>Talker IDs:</strong> GN (multi-constellation), GP (GPS), BD (BeiDou)</li><li><strong>Checksums:</strong> Verify NMEA checksums are valid</li><li><strong>Field Format:</strong> Check coordinate and time formats</li></ul><h2>Advanced Diagnostics</h2><h3>Serial Debug Output</h3><p><strong>Enable Debug Logging:</strong></p><pre><code class="language-cpp">// In main.cpp, change LOG_LEVEL
#define LOG_LEVEL LOG_LEVEL_DEBUG
</code></pre><p><strong>Monitor Debug Output:</strong></p><pre><code class="language-bash"># Capture all debug information
screen /dev/ttyACM0 115200 | tee debug.log

# Look for error messages, initialization status, and state changes
</code></pre><h3>Web Interface Diagnostics</h3><p><strong>API Status Endpoints:</strong></p><pre><code class="language-bash"># System status
curl http://192.168.4.1/api/status

# LoRa radio status
curl http://192.168.4.1/api/lora/status

# GNSS status
curl http://192.168.4.1/api/gnss/status

# Network status
curl http://192.168.4.1/api/wifi/status
</code></pre><h3>Hardware Testing</h3><p><strong>Factory Test Mode:</strong></p><pre><code class="language-bash"># Upload factory test firmware
pio run --target upload --environment heltec_wifi_lora_32_V4_factory_test

# Run comprehensive hardware tests
# Tests OLED, serial, LED, WiFi, LoRa, GNSS
</code></pre><h3>Performance Monitoring</h3><p><strong>Radio Statistics:</strong></p><ul><li><strong>RSSI:</strong> Received signal strength indicator</li><li><strong>SNR:</strong> Signal-to-noise ratio</li><li><strong>PER:</strong> Packet error rate</li><li><strong>Throughput:</strong> Bytes per second</li></ul><p><strong>System Resources:</strong></p><ul><li><strong>RAM Usage:</strong> Free heap memory</li><li><strong>CPU Usage:</strong> Task execution times</li><li><strong>Temperature:</strong> ESP32 junction temperature</li><li><strong>Uptime:</strong> System runtime statistics</li></ul><h2>Recovery Procedures</h2><h3>Factory Reset</h3><p><strong>Software Reset:</strong></p><pre><code class="language-bash"># Via command-line tool
python3 tools/loratncx_config.py /dev/ttyACM0 --reset

# Via web interface
# Navigate to configuration page and click &quot;Reset to Defaults&quot;
</code></pre><p><strong>Hardware Reset:</strong></p><ul><li><strong>Full Flash Erase:</strong> <code class="">pio run --target erase</code></li><li><strong>Re-upload:</strong> Firmware and filesystem</li><li><strong>Reconfigure:</strong> All settings from defaults</li></ul><h3>Backup and Restore</h3><p><strong>Configuration Backup:</strong></p><pre><code class="language-bash"># Save current configuration
python3 tools/loratncx_config.py /dev/ttyACM0 --get-all &gt; config_backup.txt
</code></pre><p><strong>Configuration Restore:</strong></p><pre><code class="language-bash"># Apply saved configuration
python3 tools/loratncx_config.py /dev/ttyACM0 --frequency 433.775
python3 tools/loratncx_config.py /dev/ttyACM0 --save
</code></pre><h3>Emergency Recovery</h3><p><strong>Bootloader Access:</strong></p><ol><li>Hold BOOT button while plugging in USB</li><li>Device enters bootloader mode</li><li>Use <code class="">esptool.py</code> for manual flash operations</li></ol><p><strong>Minimal Firmware:</strong></p><ul><li>Upload basic firmware without web interface</li><li>Use serial commands for configuration</li><li>Gradually add features back</li></ul><h2>Getting Help</h2><h3>Diagnostic Information to Provide</h3><p>When seeking help, include:</p><p><strong>System Information:</strong></p><ul><li>Board version (V3/V4)</li><li>Firmware version</li><li>PlatformIO version</li><li>Operating system and version</li></ul><p><strong>Configuration Details:</strong></p><ul><li>LoRa parameters (frequency, SF, BW, CR, power)</li><li>WiFi mode and settings</li><li>GNSS configuration</li><li>Serial port and baud rate</li></ul><p><strong>Error Messages:</strong></p><ul><li>Exact error text from serial monitor</li><li>PlatformIO build/upload output</li><li>Test script results</li><li>Web interface error responses</li></ul><p><strong>Test Results:</strong></p><ul><li>Automated test suite output</li><li>Range test data</li><li>Performance measurements</li><li>Environmental conditions</li></ul><h3>Community Resources</h3><p><strong>Documentation:</strong></p><ul><li><a href="https://github.com/kc1awv/LoRaTNCX">LoRaTNCX GitHub Repository</a></li><li><a href="https://docs.platformio.org/">PlatformIO Documentation</a></li><li><a href="https://www.espressif.com/en/products/socs/esp32">ESP32 Technical Reference</a></li></ul><p><strong>Community Support:</strong></p><ul><li>GitHub Issues for bug reports</li><li>Amateur radio forums (LoRa, APRS discussions)</li><li>ESP32 development communities</li></ul><p><strong>Professional Support:</strong></p><ul><li>Heltec support for hardware issues</li><li>Semtech LoRa module support</li><li>Quectel GNSS module support</li></ul><hr><p><a href="testing-validation">← Previous: Testing and Validation</a> | <a href="/manual">Back to Main Manual</a> | <a href="advanced-topics">Next: Advanced Topics →</a></p>`,248),yp=[Sp],bp=pe({__name:"14-troubleshooting",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",mp,yp))}}),_p={class:"markdown-body"},Cp=he(`<h1>15. Advanced Topics</h1><h2>Overview</h2><p>This section covers advanced LoRaTNCX features and optimization techniques for experienced users. Topics include custom network configuration, power management, multi-client operation, and performance tuning.</p><h2>Custom Sync Words</h2><h3>Understanding Sync Words</h3><p>Sync words are special bit sequences used to identify valid LoRa transmissions. They act like network IDs, allowing multiple independent LoRa networks to coexist on the same frequency without interference.</p><p><strong>Default Sync Word:</strong> <code class="">0x1424</code> (compatible with SX127x <code class="">0x12</code>)</p><p><strong>Purpose:</strong></p><ul><li>Network isolation (prevent cross-network interference)</li><li>Coexistence with other LoRa devices</li><li>Private network security</li></ul><h3>Configuring Custom Sync Words</h3><p><strong>Via Command-Line Tool:</strong></p><pre><code class="language-bash"># Set custom sync word (16-bit value)
python3 tools/loratncx_config.py /dev/ttyACM0 --syncword 0xABCD

# Save configuration
python3 tools/loratncx_config.py /dev/ttyACM0 --save
</code></pre><p><strong>Via KISS Protocol:</strong></p><pre><code class="language-python">import serial
import struct

# Open serial connection
ser = serial.Serial(&#39;/dev/ttyACM0&#39;, 115200)

# Set sync word to 0xABCD
# KISS frame: FEND + CMD_SETHARDWARE + HW_SET_SYNCWORD + syncword_bytes + FEND
syncword = 0xABCD
frame = bytes([0xC0, 0x06, 0x08]) + struct.pack(&#39;&lt;H&#39;, syncword) + bytes([0xC0])
ser.write(frame)
</code></pre><p><strong>Via Web Interface:</strong></p><ol><li>Navigate to LoRa Configuration page</li><li>Enter sync word in hex format (e.g., ABCD)</li><li>Click “Save Configuration”</li></ol><h3>Sync Word Best Practices</h3><p><strong>Choosing Sync Words:</strong></p><ul><li>Use values between <code class="">0x0001</code> and <code class="">0xFFFF</code></li><li>Avoid <code class="">0x0000</code> (reserved)</li><li>Avoid <code class="">0x1424</code> if operating near other LoRa devices</li><li>Document your network’s sync word for sharing</li></ul><p><strong>Network Planning:</strong></p><pre><code class="language-bash"># Example: Different sync words for different applications
# Emergency communications: 0xE911
# Amateur radio: 0xA1A1
# IoT sensors: 0x10T1
# Experimental: 0x1234
</code></pre><p><strong>Compatibility Notes:</strong></p><ul><li>SX126x uses 16-bit sync words (0x0000-0xFFFF)</li><li>SX127x uses 8-bit sync words (0x00-0xFF), but 0x1424 maps to 0x12</li><li>Ensure all devices in your network use identical sync words</li></ul><h3>Troubleshooting Sync Word Issues</h3><p><strong>Symptoms of Wrong Sync Word:</strong></p><ul><li>Packets not received despite correct frequency/SF/BW</li><li>One-way communication (transmit works, receive doesn’t)</li><li>High packet loss rate</li></ul><p><strong>Verification:</strong></p><pre><code class="language-bash"># Check current sync word
python3 tools/loratncx_config.py /dev/ttyACM0 --get-config

# Test with known good sync word
python3 tools/loratncx_config.py /dev/ttyACM0 --syncword 0x1424
python3 tools/loratncx_config.py /dev/ttyACM0 --save
</code></pre><h2>Power Management</h2><h3>Display Power Control</h3><p><strong>Automatic Power Save:</strong> The OLED display includes intelligent power management:</p><ul><li><strong>Active Mode:</strong> Display updates continuously when in use</li><li><strong>Power Save Mode:</strong> Display blanks after period of inactivity</li><li><strong>Deep Sleep:</strong> Long button press initiates complete system shutdown</li></ul><p><strong>Display Control:</strong></p><pre><code class="language-cpp">// Display automatically enters power save mode
// Wake with button press or system activity

// Manual control via code
displayManager.displayOff();  // Power save mode
displayManager.displayOn();   // Active mode
</code></pre><p><strong>Power Consumption:</strong></p><ul><li><strong>Display Active:</strong> ~15-20mA additional current</li><li><strong>Display Off:</strong> ~1-2mA (power save mode)</li><li><strong>Deep Sleep:</strong> &lt;1mA (complete shutdown)</li></ul><h3>Radio Power Optimization</h3><p><strong>Adaptive Power Control:</strong></p><pre><code class="language-bash"># Set appropriate power for range requirements
# Short range (100m): 5-10dBm
python3 tools/loratncx_config.py /dev/ttyACM0 --power 10

# Medium range (1km): 14-17dBm
python3 tools/loratncx_config.py /dev/ttyACM0 --power 17

# Long range (10km+): 20dBm (maximum)
python3 tools/loratncx_config.py /dev/ttyACM0 --power 20
</code></pre><p><strong>Power vs Performance Trade-offs:</strong></p><ul><li>Higher power increases range but reduces battery life</li><li>Lower power improves efficiency but reduces reliability</li><li>Consider local regulations (ETSI, FCC power limits)</li></ul><h3>System Sleep Modes</h3><p><strong>Deep Sleep Implementation:</strong></p><pre><code class="language-cpp">// Initiated by long button press on display
// Complete system shutdown with ESP32 deep sleep

// Recovery requires physical reset or power cycle
// All configurations preserved in flash memory
</code></pre><p><strong>Sleep Mode Considerations:</strong></p><ul><li>GNSS module powers down automatically</li><li>WiFi disconnects during sleep</li><li>Serial connections terminate</li><li>Recovery time: ~2 seconds from reset</li></ul><h2>Battery Operation</h2><h3>V3 Battery Monitoring</h3><p><strong>Hardware Differences:</strong></p><ul><li><strong>V3.2+ Boards:</strong> Standard battery voltage reading</li><li><strong>Original V3 Boards:</strong> Inverted logic requires configuration change</li></ul><p><strong>Configuration for Original V3 Boards:</strong></p><pre><code class="language-ini"># platformio.ini for original V3 boards
[env:heltec_wifi_lora_32_V3]
board = heltec_wifi_lora_32_V3
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V3
    -DV3_ORIGINAL_BATTERY_LOGIC  # Required for original V3 boards
</code></pre><p><strong>Battery Voltage Reading:</strong></p><pre><code class="language-bash"># Check battery voltage
python3 tools/loratncx_config.py /dev/ttyACM0 --get-battery

# Output format:
# Battery Voltage: 3.85V (78% estimated)
</code></pre><h3>Battery Life Optimization</h3><p><strong>Power Consumption Breakdown:</strong></p><ul><li><strong>ESP32 Active:</strong> 80-100mA</li><li><strong>LoRa Receive:</strong> +20-30mA</li><li><strong>LoRa Transmit:</strong> +150-300mA (depends on power setting)</li><li><strong>GNSS Active:</strong> +25-30mA</li><li><strong>Display Active:</strong> +15-20mA</li><li><strong>WiFi Active:</strong> +100-150mA</li></ul><p><strong>Battery Life Calculations:</strong></p><pre><code class="language-python"># Example calculation for 2000mAh LiPo battery
BATTERY_CAPACITY = 2000  # mAh
BATTERY_VOLTAGE = 3.7    # V

def calculate_life(current_ma, efficiency=0.8):
    &quot;&quot;&quot;Calculate battery life in hours&quot;&quot;&quot;
    available_capacity = BATTERY_CAPACITY * efficiency
    life_hours = available_capacity / current_ma
    return life_hours

# Receive mode (100mA average)
rx_life = calculate_life(100)  # ~16 hours

# With GNSS (125mA average)
gnss_life = calculate_life(125)  # ~12.8 hours

# Transmit duty cycle (20% TX at 200mA, 80% RX at 100mA)
avg_tx_current = 0.2 * 200 + 0.8 * 100  # 120mA
tx_life = calculate_life(120)  # ~13.3 hours
</code></pre><h3>Battery Health Monitoring</h3><p><strong>Voltage Ranges:</strong></p><ul><li><strong>4.2V:</strong> Fully charged (100%)</li><li><strong>3.7V:</strong> Nominal voltage (50%)</li><li><strong>3.3V:</strong> Discharge cutoff (0%)</li><li><strong>&lt;3.0V:</strong> Deep discharge (damage risk)</li></ul><p><strong>Health Indicators:</strong></p><ul><li><strong>Capacity Loss:</strong> Reduced runtime over time</li><li><strong>Voltage Drop:</strong> Excessive sag under load</li><li><strong>Internal Resistance:</strong> Increased resistance causes heating</li></ul><p><strong>Maintenance:</strong></p><ul><li>Store at 3.7-3.8V when not in use</li><li>Avoid deep discharge cycles</li><li>Use proper LiPo charger with balancing</li><li>Replace after 300-500 charge cycles</li></ul><h3>External Power Options</h3><p><strong>USB Power Bank:</strong></p><ul><li>Provides 5V regulated power</li><li>Enables continuous operation</li><li>Consider power bank capacity and output current</li></ul><p><strong>Solar Power:</strong></p><ul><li>Small solar panels (5-10W) for remote operation</li><li>Charge controller required for LiPo safety</li><li>Weather-dependent reliability</li><li>Backup battery for nighttime operation</li></ul><h2>Multiple TNC Networks</h2><h3>TCP KISS Multi-Client Support</h3><p><strong>Client Capacity:</strong></p><ul><li><strong>Maximum Clients:</strong> 4 simultaneous TCP connections</li><li><strong>Port:</strong> 8001 (default, configurable)</li><li><strong>Protocol:</strong> Standard KISS over TCP</li></ul><p><strong>Multi-Client Operation:</strong></p><pre><code class="language-bash"># Client 1: Dire Wolf iGate
direwolf -c direwolf.conf

# Client 2: APRS Client
yacc

# Client 3: Packet Terminal
minicom -D 192.168.4.1:8001

# Client 4: Custom Application
python3 my_kiss_client.py
</code></pre><p><strong>Client Management:</strong></p><ul><li>All clients receive identical packet streams</li><li>No client prioritization (first-come, first-served)</li><li>Automatic cleanup of disconnected clients</li><li>No authentication or access control</li></ul><h3>Network Architecture Options</h3><p><strong>Single TNC, Multiple Applications:</strong></p><pre><code class="">Internet ↔ Router ↔ LoRaTNCX ↔ Multiple Clients
                              ↘ Dire Wolf (iGate)
                              ↘ YAAC (APRS)
                              ↘ BPQ32 (BBS)
                              ↘ Custom App
</code></pre><p><strong>Distributed TNC Network:</strong></p><pre><code class="">TNC1 (433.775 MHz) ↔ Client Apps
TNC2 (868.000 MHz) ↔ Client Apps
TNC3 (915.000 MHz) ↔ Client Apps
</code></pre><p><strong>Redundant TNC Setup:</strong></p><pre><code class="">Primary TNC ↔ Client Apps
Backup TNC ↔ (Standby mode)
</code></pre><h3>Client Isolation</h3><p><strong>Sync Word Separation:</strong></p><pre><code class="language-bash"># Different applications use different sync words
# APRS Network: 0x1424
python3 tools/loratncx_config.py /dev/ttyACM0 --syncword 0x1424

# IoT Network: 0xABCD
python3 tools/loratncx_config.py /dev/ttyACM1 --syncword 0xABCD

# Experimental: 0x1234
python3 tools/loratncx_config.py /dev/ttyACM2 --syncword 0x1234
</code></pre><p><strong>Frequency Separation:</strong></p><pre><code class="language-bash"># Different applications on different frequencies
# APRS: 433.775 MHz
python3 tools/loratncx_config.py /dev/ttyACM0 --frequency 433.775

# LoRaWAN: 868.100 MHz
python3 tools/loratncx_config.py /dev/ttyACM1 --frequency 868.100

# Custom: 914.500 MHz
python3 tools/loratncx_config.py /dev/ttyACM2 --frequency 914.500
</code></pre><h3>Load Balancing</h3><p><strong>Client Distribution:</strong></p><ul><li>Spread clients across multiple TNC instances</li><li>Use different ports for different applications</li><li>Implement client-side load balancing</li></ul><p><strong>Performance Considerations:</strong></p><ul><li>Each client adds processing overhead</li><li>TCP buffering may delay packet delivery</li><li>Monitor CPU usage with many active clients</li></ul><h2>Performance Optimization</h2><h3>LoRa Parameter Tuning</h3><p><strong>Range vs Speed Optimization:</strong></p><p><strong>Maximum Range Configuration:</strong></p><pre><code class="language-bash"># Slow but long range
python3 tools/loratncx_config.py /dev/ttyACM0 \\
  --spreading-factor 12 \\
  --bandwidth 7.8 \\
  --coding-rate 8 \\
  --power 20
# Time on Air: ~30 seconds for 100 bytes
# Range: 10-20 km (line of sight)
</code></pre><p><strong>Balanced Configuration:</strong></p><pre><code class="language-bash"># Good balance of speed and range
python3 tools/loratncx_config.py /dev/ttyACM0 \\
  --spreading-factor 9 \\
  --bandwidth 125 \\
  --coding-rate 7 \\
  --power 17
# Time on Air: ~1 second for 100 bytes
# Range: 2-5 km (line of sight)
</code></pre><p><strong>Maximum Speed Configuration:</strong></p><pre><code class="language-bash"># Fast but short range
python3 tools/loratncx_config.py /dev/ttyACM0 \\
  --spreading-factor 7 \\
  --bandwidth 250 \\
  --coding-rate 5 \\
  --power 10
# Time on Air: ~100ms for 100 bytes
# Range: 0.5-1 km (line of sight)
</code></pre><h3>Bandwidth Optimization</h3><p><strong>Bandwidth Selection Guide:</strong></p><ul><li><strong>7.8 kHz:</strong> Maximum range, minimum data rate, high immunity to interference</li><li><strong>10.4 kHz:</strong> Good range, moderate data rate</li><li><strong>15.6 kHz:</strong> Balanced performance</li><li><strong>20.8 kHz:</strong> Higher data rate, reduced range</li><li><strong>31.25 kHz:</strong> Fast transmission, shorter range</li><li><strong>41.7 kHz:</strong> Very fast, limited range</li><li><strong>62.5 kHz:</strong> High speed, urban ranges</li><li><strong>125 kHz:</strong> Maximum speed, short range</li><li><strong>250 kHz:</strong> Ultra-fast, very short range</li></ul><p><strong>Adaptive Bandwidth:</strong></p><pre><code class="language-bash"># Urban environment (interference): Use narrow bandwidth
python3 tools/loratncx_config.py /dev/ttyACM0 --bandwidth 31.25

# Rural environment (clean spectrum): Use wider bandwidth
python3 tools/loratncx_config.py /dev/ttyACM0 --bandwidth 125
</code></pre><h3>Coding Rate Optimization</h3><p><strong>CR Selection:</strong></p><ul><li><strong>4/5:</strong> Fastest transmission, least robust</li><li><strong>4/6:</strong> Good balance</li><li><strong>4/7:</strong> Default, good robustness</li><li><strong>4/8:</strong> Maximum robustness, slowest transmission</li></ul><p><strong>Error Environment Adaptation:</strong></p><pre><code class="language-bash"># Clean RF environment
python3 tools/loratncx_config.py /dev/ttyACM0 --coding-rate 5

# Noisy RF environment
python3 tools/loratncx_config.py /dev/ttyACM0 --coding-rate 8
</code></pre><h3>Duty Cycle Management</h3><p><strong>Regulatory Compliance:</strong></p><pre><code class="language-python"># Calculate safe duty cycle
def calculate_duty_cycle(toa_ms, interval_ms):
    &quot;&quot;&quot;Calculate duty cycle percentage&quot;&quot;&quot;
    return (toa_ms / interval_ms) * 100

# Example: SF12, 100 byte packet = ~2000ms ToA
# For 10% duty cycle: interval = 20000ms (20 seconds)
duty_cycle = calculate_duty_cycle(2000, 20000)  # 10%
</code></pre><p><strong>Transmission Scheduling:</strong></p><pre><code class="language-python">import time
import random

class DutyCycleManager:
    def __init__(self, max_duty_cycle=0.1, measurement_period=3600):
        self.max_duty_cycle = max_duty_cycle
        self.period = measurement_period
        self.transmissions = []
    
    def can_transmit(self, toa_ms):
        &quot;&quot;&quot;Check if transmission is allowed under duty cycle limits&quot;&quot;&quot;
        now = time.time()
        
        # Remove old transmissions outside measurement period
        cutoff = now - self.period
        self.transmissions = [t for t in self.transmissions if t &gt; cutoff]
        
        # Calculate current duty cycle
        total_toa = len(self.transmissions) * (toa_ms / 1000)  # Convert to seconds
        current_duty_cycle = total_toa / self.period
        
        return current_duty_cycle + (toa_ms / 1000) / self.period &lt;= self.max_duty_cycle
    
    def record_transmission(self, toa_ms):
        &quot;&quot;&quot;Record a transmission for duty cycle tracking&quot;&quot;&quot;
        self.transmissions.append(time.time())

# Usage
manager = DutyCycleManager(max_duty_cycle=0.1)  # 10% duty cycle

if manager.can_transmit(2000):  # 2 second ToA
    # Transmit packet
    transmit_packet()
    manager.record_transmission(2000)
else:
    # Wait before next transmission attempt
    time.sleep(10)
</code></pre><h3>Interference Mitigation</h3><p><strong>Frequency Hopping:</strong></p><pre><code class="language-python">import random

class FrequencyHopper:
    def __init__(self, base_freq=433.775, hop_range=1.0, channels=10):
        self.base_freq = base_freq
        self.hop_range = hop_range
        self.channels = channels
        self.current_channel = 0
        
    def get_next_frequency(self):
        &quot;&quot;&quot;Get next frequency in hop sequence&quot;&quot;&quot;
        # Simple sequential hopping
        self.current_channel = (self.current_channel + 1) % self.channels
        freq_offset = (self.current_channel / self.channels) * self.hop_range
        return self.base_freq + freq_offset
    
    def randomize_hop(self):
        &quot;&quot;&quot;Random frequency hopping&quot;&quot;&quot;
        freq_offset = random.uniform(0, self.hop_range)
        return self.base_freq + freq_offset

# Usage
hopper = FrequencyHopper(base_freq=433.775, hop_range=1.0, channels=10)

# Set next hop frequency
next_freq = hopper.get_next_frequency()
run_command(f&quot;loratncx_config --frequency {next_freq}&quot;)
</code></pre><p><strong>Channel Monitoring:</strong></p><pre><code class="language-bash"># Monitor RSSI on different frequencies
python3 tools/loratncx_config.py /dev/ttyACM0 --monitor-rssi

# Scan for interference sources
# Use spectrum analyzer or SDR to identify busy frequencies
</code></pre><h3>Throughput Optimization</h3><p><strong>Packet Size Optimization:</strong></p><pre><code class="language-python"># Calculate optimal packet size for given parameters
def calculate_optimal_packet_size(sf, bw, cr, target_toa=1000):
    &quot;&quot;&quot;Calculate optimal packet size for target time on air&quot;&quot;&quot;
    # Simplified calculation
    # Actual formula involves detailed LoRa timing calculations
    base_toa = 100  # ms for 10 bytes at SF7, 125kHz
    size_factor = 2 ** sf * (4 / (4 + cr - 4))  # Simplified
    optimal_size = (target_toa / base_toa) / size_factor * 10
    return min(optimal_size, 236)  # KISS frame limit

# Example: SF12, 125kHz, CR 4/7, target 1 second
packet_size = calculate_optimal_packet_size(12, 125, 7, 1000)
print(f&quot;Optimal packet size: {packet_size} bytes&quot;)
</code></pre><p><strong>Buffering Strategies:</strong></p><ul><li>Implement application-level buffering</li><li>Use appropriate timeouts for packet assembly</li><li>Consider compression for text-heavy protocols</li></ul><h3>Advanced Monitoring</h3><p><strong>Performance Metrics Collection:</strong></p><pre><code class="language-python">class LoRaPerformanceMonitor:
    def __init__(self):
        self.packets_sent = 0
        self.packets_received = 0
        self.bytes_sent = 0
        self.bytes_received = 0
        self.errors = 0
        self.start_time = time.time()
    
    def record_send(self, bytes_count):
        self.packets_sent += 1
        self.bytes_sent += bytes_count
    
    def record_receive(self, bytes_count):
        self.packets_received += 1
        self.bytes_received += bytes_count
    
    def record_error(self):
        self.errors += 1
    
    def get_stats(self):
        elapsed = time.time() - self.start_time
        return {
            &#39;packets_sent&#39;: self.packets_sent,
            &#39;packets_received&#39;: self.packets_received,
            &#39;bytes_sent&#39;: self.bytes_sent,
            &#39;bytes_received&#39;: self.bytes_received,
            &#39;errors&#39;: self.errors,
            &#39;packet_loss_rate&#39;: (self.errors / max(1, self.packets_sent)) * 100,
            &#39;throughput_bps&#39;: self.bytes_sent / elapsed,
            &#39;uptime_seconds&#39;: elapsed
        }

# Usage
monitor = LoRaPerformanceMonitor()

# Record packet events
monitor.record_send(100)  # Sent 100 bytes
monitor.record_receive(95)  # Received 95 bytes (some loss)

# Get performance stats
stats = monitor.get_stats()
print(f&quot;Packet loss rate: {stats[&#39;packet_loss_rate&#39;]:.1f}%&quot;)
print(f&quot;Throughput: {stats[&#39;throughput_bps&#39;]:.1f} bps&quot;)
</code></pre><hr><p><a href="troubleshooting">← Previous: Troubleshooting</a> | <a href="/manual">Back to Main Manual</a> | <a href="development-customization">Next: Development and Customization →</a></p>`,135),vp=[Cp],wp=pe({__name:"15-advanced-topics",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",_p,vp))}}),Rp={class:"markdown-body"},Ap=he(`<h1>16. Development and Customization</h1><h2>Overview</h2><p>This section provides guidance for developers who want to modify, extend, or contribute to the LoRaTNCX firmware. Topics include source code architecture, adding new features, build customization, and contribution guidelines.</p><h2>Source Code Overview</h2><h3>Project Architecture</h3><p>LoRaTNCX follows a modular architecture with clear separation of concerns:</p><pre><code class="">LoRaTNCX/
├── src/                    # Main source code
│   ├── main.cpp           # Application entry point and initialization
│   ├── board_config.cpp   # Board-specific pin configurations
│   ├── config_manager.cpp # Configuration persistence and management
│   ├── display.cpp        # OLED display and user interface
│   ├── gnss.cpp           # GNSS module handling
│   ├── kiss.cpp           # KISS protocol implementation
│   ├── nmea_server.cpp   # NMEA-over-TCP server
│   ├── radio.cpp          # LoRa radio interface
│   ├── tcp_kiss.cpp       # TCP KISS server
│   ├── web_server.cpp    # RESTful web API and interface
│   └── wifi_manager.cpp   # WiFi connectivity management
├── include/               # Header files
│   ├── board_config.h     # Board pin definitions
│   ├── config.h           # Protocol constants and defaults
│   ├── config_manager.h   # Configuration management interface
│   ├── debug.h            # Debug utilities
│   ├── display.h          # Display interface
│   ├── gnss.h             # GNSS module interface
│   ├── kiss.h             # KISS protocol definitions
│   ├── nmea_server.h     # NMEA server interface
│   ├── radio.h            # Radio interface
│   ├── tcp_kiss.h         # TCP KISS server interface
│   ├── web_server.h      # Web server interface
│   └── wifi_manager.h     # WiFi manager interface
├── boards/                # Board-specific configurations
├── variants/              # Arduino variant definitions
├── data/                  # Web interface files (SPIFFS)
├── test/                  # Test utilities
├── tools/                 # Development tools
└── docs/                  # Documentation
</code></pre><h3>Core Components</h3><p><strong>Main Application (<code class="">main.cpp</code>):</strong></p><ul><li>System initialization and startup sequence</li><li>Service instantiation and dependency injection</li><li>Main event loop and task coordination</li><li>Error handling and recovery</li></ul><p><strong>KISS Protocol (<code class="">kiss.cpp</code>, <code class="">kiss.h</code>):</strong></p><ul><li>Frame encoding/decoding with byte stuffing</li><li>Command processing (DATA, SETHARDWARE, GETHARDWARE)</li><li>Serial communication handling</li><li>Protocol state management</li></ul><p><strong>Radio Interface (<code class="">radio.cpp</code>, <code class="">radio.h</code>):</strong></p><ul><li>LoRa radio configuration and control</li><li>Packet transmission and reception</li><li>RadioLib integration</li><li>Interrupt-driven receive handling</li></ul><p><strong>Configuration Management (<code class="">config_manager.cpp</code>, <code class="">config_manager.h</code>):</strong></p><ul><li>Persistent storage using ESP32 NVS</li><li>Runtime configuration management</li><li>Parameter validation and bounds checking</li><li>Factory reset functionality</li></ul><p><strong>WiFi Management (<code class="">wifi_manager.cpp</code>, <code class="">wifi_manager.h</code>):</strong></p><ul><li>AP/STA/AP+STA mode support</li><li>Network configuration and connection</li><li>DHCP server for AP mode</li><li>Connection monitoring and recovery</li></ul><p><strong>Web Server (<code class="">web_server.cpp</code>, <code class="">web_server.h</code>):</strong></p><ul><li>RESTful API endpoints</li><li>Static file serving (SPIFFS)</li><li>WebSocket support for real-time updates</li><li>CORS handling for web interface</li></ul><p><strong>TCP KISS Server (<code class="">tcp_kiss.cpp</code>, <code class="">tcp_kiss.h</code>):</strong></p><ul><li>Multi-client TCP server (up to 4 simultaneous connections)</li><li>KISS protocol over TCP</li><li>Client connection management</li><li>Thread-safe packet distribution</li></ul><p><strong>GNSS Module (<code class="">gnss.cpp</code>, <code class="">gnss.h</code>):</strong></p><ul><li>GPS/GLONASS/BeiDou/QZSS support</li><li>TinyGPS++ integration</li><li>NMEA sentence parsing</li><li>Location data caching</li></ul><p><strong>Display System (<code class="">display.cpp</code>, <code class="">display.h</code>):</strong></p><ul><li>U8g2 OLED library integration</li><li>Real-time status display</li><li>Button input handling</li><li>Power management (deep sleep)</li></ul><h3>Build System</h3><p><strong>PlatformIO Configuration:</strong></p><pre><code class="language-ini">[env]
platform = espressif32
framework = arduino
board_build.variants_dir = variants
monitor_speed = 115200
lib_deps = 
    RadioLib@^7.4.0
    olikraus/U8g2@^2.35.30
    mathieucarbou/ESPAsyncWebServer@^3.6.0
    bblanchon/ArduinoJson@^7.0.0
    mikalhart/TinyGPSPlus@^1.1.0
build_flags = 
    -DCONFIG_TASK_WDT_TIMEOUT_S=30
    -DCONFIG_TASK_WDT_CHECK_IDLE_TASK_CPU0=0
    -DCONFIG_TASK_WDT_CHECK_IDLE_TASK_CPU1=0
</code></pre><p><strong>Board-Specific Environments:</strong></p><pre><code class="language-ini">[env:heltec_wifi_lora_32_V3]
board = heltec_wifi_lora_32_V3
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V3

[env:heltec_wifi_lora_32_V4]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
</code></pre><h3>Key Dependencies</h3><p><strong>RadioLib (^7.4.0):</strong></p><ul><li>LoRa radio control and configuration</li><li>SX1262/SX127x support</li><li>Packet handling and modulation</li></ul><p><strong>U8g2 (^2.35.30):</strong></p><ul><li>OLED display driver</li><li>Font rendering and graphics</li><li>Hardware abstraction for multiple displays</li></ul><p><strong>ESPAsyncWebServer (^3.6.0):</strong></p><ul><li>Asynchronous HTTP server</li><li>WebSocket support</li><li>Static file serving</li></ul><p><strong>ArduinoJson (^7.0.0):</strong></p><ul><li>JSON parsing and generation</li><li>REST API data handling</li><li>Configuration serialization</li></ul><p><strong>TinyGPSPlus (^1.1.0):</strong></p><ul><li>NMEA sentence parsing</li><li>GNSS data extraction</li><li>Location calculation utilities</li></ul><h2>Development Environment Setup</h2><h3>Prerequisites</h3><p><strong>Required Software:</strong></p><ul><li><strong>PlatformIO IDE</strong> (VS Code extension) or PlatformIO Core</li><li><strong>Python 3.7+</strong> (for configuration tools and testing)</li><li><strong>Git</strong> (for version control and contributions)</li></ul><p><strong>Hardware Requirements:</strong></p><ul><li>Heltec WiFi LoRa 32 V3 or V4 board</li><li>USB cable for programming</li><li>Optional: GNSS module for V4 boards</li></ul><h3>Installation</h3><p><strong>1. Clone the Repository:</strong></p><pre><code class="language-bash">git clone https://github.com/kc1awv/LoRaTNCX.git
cd LoRaTNCX
</code></pre><p><strong>2. Install PlatformIO:</strong></p><pre><code class="language-bash"># Using pip (recommended)
pip install platformio

# Or install VS Code extension
# Search for &quot;PlatformIO IDE&quot; in VS Code extensions
</code></pre><p><strong>3. Install Dependencies:</strong></p><pre><code class="language-bash"># PlatformIO will automatically download libraries
# First build will install all required dependencies
platformio run --environment heltec_wifi_lora_32_V4
</code></pre><p><strong>4. Configure Board Selection:</strong></p><pre><code class="language-bash"># For V3 boards
export PLATFORMIO_ENV=heltec_wifi_lora_32_V3

# For V4 boards  
export PLATFORMIO_ENV=heltec_wifi_lora_32_V4
</code></pre><h3>Build and Upload</h3><p><strong>Basic Build:</strong></p><pre><code class="language-bash"># Build for V4 (default)
platformio run

# Build for specific board
platformio run --environment heltec_wifi_lora_32_V4
platformio run --environment heltec_wifi_lora_32_V3
</code></pre><p><strong>Upload Firmware:</strong></p><pre><code class="language-bash"># Upload to connected board
platformio run --target upload --environment heltec_wifi_lora_32_V4

# Upload filesystem (web interface)
platformio run --target uploadfs --environment heltec_wifi_lora_32_V4
</code></pre><p><strong>Monitor Serial Output:</strong></p><pre><code class="language-bash"># Open serial monitor
platformio device monitor --environment heltec_wifi_lora_32_V4
</code></pre><h3>VS Code Tasks</h3><p>The project includes pre-configured VS Code tasks for common operations:</p><pre><code class="language-json">{
    &quot;version&quot;: &quot;2.0.0&quot;,
    &quot;tasks&quot;: [
        {
            &quot;label&quot;: &quot;Build (V4)&quot;,
            &quot;type&quot;: &quot;shell&quot;,
            &quot;command&quot;: &quot;platformio&quot;,
            &quot;args&quot;: [&quot;run&quot;, &quot;--environment&quot;, &quot;heltec_wifi_lora_32_V4&quot;],
            &quot;group&quot;: &quot;build&quot;
        },
        {
            &quot;label&quot;: &quot;Upload (V4)&quot;,
            &quot;type&quot;: &quot;shell&quot;, 
            &quot;command&quot;: &quot;platformio&quot;,
            &quot;args&quot;: [&quot;run&quot;, &quot;--target&quot;, &quot;upload&quot;, &quot;--environment&quot;, &quot;heltec_wifi_lora_32_V4&quot;],
            &quot;group&quot;: &quot;build&quot;
        },
        {
            &quot;label&quot;: &quot;Upload Filesystem (V4)&quot;,
            &quot;type&quot;: &quot;shell&quot;,
            &quot;command&quot;: &quot;platformio&quot;,
            &quot;args&quot;: [&quot;run&quot;, &quot;--target&quot;, &quot;uploadfs&quot;, &quot;--environment&quot;, &quot;heltec_wifi_lora_32_V4&quot;],
            &quot;group&quot;: &quot;build&quot;
        }
    ]
}
</code></pre><h2>Adding New Features</h2><h3>Feature Development Process</h3><p><strong>1. Plan the Feature:</strong></p><ul><li>Define requirements and scope</li><li>Identify affected components</li><li>Consider backward compatibility</li><li>Plan testing approach</li></ul><p><strong>2. Implement Core Logic:</strong></p><ul><li>Add new classes/functions in appropriate modules</li><li>Update header files with new interfaces</li><li>Follow existing code patterns and naming conventions</li></ul><p><strong>3. Integrate with Main Application:</strong></p><ul><li>Add service instantiation in <code class="">main.cpp</code></li><li>Wire dependencies between components</li><li>Update initialization sequence if needed</li></ul><p><strong>4. Add Configuration Support:</strong></p><ul><li>Define new parameters in <code class="">config.h</code></li><li>Add validation ranges and defaults</li><li>Update configuration persistence</li></ul><p><strong>5. Update User Interfaces:</strong></p><ul><li>Add REST API endpoints in <code class="">web_server.cpp</code></li><li>Update web interface files in <code class="">data/</code></li><li>Add KISS command support if needed</li></ul><h3>Example: Adding a New Radio Parameter</h3><p><strong>1. Define the Parameter:</strong></p><pre><code class="language-cpp">// In config.h
#define HW_SET_NEW_PARAMETER 0x0A  // Next available subcommand

// Add to validation ranges
#define RADIO_NEW_PARAM_MIN 0
#define RADIO_NEW_PARAM_MAX 100

// Add to defaults
#define LORA_NEW_PARAM 50
</code></pre><p><strong>2. Implement in Radio Class:</strong></p><pre><code class="language-cpp">// In radio.h
class LoRaRadio {
public:
    bool setNewParameter(uint8_t value);
    uint8_t getNewParameter() const;
    
private:
    uint8_t newParameter = LORA_NEW_PARAM;
};

// In radio.cpp
bool LoRaRadio::setNewParameter(uint8_t value) {
    if (value &lt; RADIO_NEW_PARAM_MIN || value &gt; RADIO_NEW_PARAM_MAX) {
        return false;
    }
    newParameter = value;
    // Apply to radio hardware
    return radio.setNewParameter(value);
}

uint8_t LoRaRadio::getNewParameter() const {
    return newParameter;
}
</code></pre><p><strong>3. Add KISS Command Support:</strong></p><pre><code class="language-cpp">// In kiss.cpp
void KISSProtocol::processHardwareCommand(const uint8_t* data, size_t length) {
    // ... existing commands ...
    
    case HW_SET_NEW_PARAMETER:
        if (length &gt;= 1) {
            uint8_t value = data[0];
            if (loraRadio.setNewParameter(value)) {
                sendHardwareResponse(HW_SET_NEW_PARAMETER, &amp;value, 1);
            } else {
                sendErrorResponse(&quot;Invalid new parameter value&quot;);
            }
        }
        break;
}
</code></pre><p><strong>4. Add Configuration Persistence:</strong></p><pre><code class="language-cpp">// In config_manager.h
struct LoRaConfig {
    // ... existing fields ...
    uint8_t newParameter;
};

// In config_manager.cpp
void ConfigManager::loadDefaults() {
    // ... existing defaults ...
    config.newParameter = LORA_NEW_PARAM;
}

void ConfigManager::applyConfig() {
    // ... existing application ...
    loraRadio.setNewParameter(config.newParameter);
}
</code></pre><p><strong>5. Update Web Interface:</strong></p><pre><code class="language-cpp">// In web_server.cpp
void TNCWebServer::handleGetConfig(AsyncWebServerRequest* request) {
    // ... existing config ...
    doc[&quot;newParameter&quot;] = loraRadio.getNewParameter();
}

void TNCWebServer::handleSetConfig(AsyncWebServerRequest* request) {
    // ... existing validation ...
    if (request-&gt;hasParam(&quot;newParameter&quot;)) {
        uint8_t value = request-&gt;getParam(&quot;newParameter&quot;)-&gt;value().toInt();
        if (loraRadio.setNewParameter(value)) {
            configManager.saveConfig();
        }
    }
}
</code></pre><h3>Adding Hardware Support</h3><p><strong>Board-Specific Pin Definitions:</strong></p><pre><code class="language-cpp">// In board_config.h
#ifdef ARDUINO_HELTEC_WIFI_LORA_32_V4
    #define NEW_PIN 42  // GPIO pin for new feature
#else
    #define NEW_PIN 38  // Different pin for V3
#endif
</code></pre><p><strong>Conditional Compilation:</strong></p><pre><code class="language-cpp">// In main.cpp
#ifdef FEATURE_NEW_HARDWARE
    initializeNewHardware();
#endif
</code></pre><p><strong>Build Flag Configuration:</strong></p><pre><code class="language-ini"># In platformio.ini
[env:heltec_wifi_lora_32_V4_custom]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -DFEATURE_NEW_HARDWARE  # Enable new feature
</code></pre><h3>Testing New Features</h3><p><strong>Unit Testing:</strong></p><pre><code class="language-python"># In test/ directory
def test_new_parameter():
    # Test parameter validation
    assert radio.setNewParameter(50) == True
    assert radio.getNewParameter() == 50
    
    # Test bounds checking
    assert radio.setNewParameter(150) == False  # Out of range
    assert radio.setNewParameter(0) == True    # Minimum
    assert radio.setNewParameter(100) == True  # Maximum
</code></pre><p><strong>Integration Testing:</strong></p><pre><code class="language-bash"># Test with configuration tool
python3 tools/loratncx_config.py /dev/ttyACM0 --new-parameter 75

# Verify via KISS protocol
python3 test/kiss_test.py --set-new-param 75 --verify
</code></pre><p><strong>Field Testing:</strong></p><ul><li>Test in various environments</li><li>Verify power consumption impact</li><li>Check for interference with existing features</li><li>Validate user interface integration</li></ul><h2>Modifying Configurations</h2><h3>Build-Time Configuration</h3><p><strong>Custom Build Flags:</strong></p><pre><code class="language-ini"># platformio.ini - Custom environment
[env:custom_build]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -DLOG_LEVEL=4                    # Maximum logging
    -DDEAF_PERIOD_MS=5000           # Longer deaf period
    -DCUSTOM_FREQUENCY_DEFAULT=868.0 # Different default frequency
    -DMAX_TCP_CLIENTS=8             # More TCP clients
</code></pre><p><strong>Feature Flags:</strong></p><pre><code class="language-cpp">// Conditional compilation based on build flags
#ifdef CUSTOM_FEATURE_ENABLED
    // Custom feature code
#endif

#ifndef LOG_LEVEL
    #define LOG_LEVEL LOG_LEVEL_INFO
#endif
</code></pre><h3>Runtime Configuration</h3><p><strong>Adding New Parameters:</strong></p><pre><code class="language-cpp">// In config.h - Extend LoRaConfig struct
struct LoRaConfig {
    float frequency;
    float bandwidth;
    uint8_t spreadingFactor;
    uint8_t codingRate;
    uint8_t power;
    uint16_t syncWord;
    bool gnssEnabled;
    // New parameters
    uint8_t newParameter;
    bool customFeatureEnabled;
    uint32_t customTimeout;
};
</code></pre><p><strong>Parameter Validation:</strong></p><pre><code class="language-cpp">// In config_manager.cpp
bool ConfigManager::validateConfig(const LoRaConfig&amp; cfg) {
    return (cfg.frequency &gt;= RADIO_FREQ_MIN &amp;&amp; cfg.frequency &lt;= RADIO_FREQ_MAX) &amp;&amp;
           (cfg.spreadingFactor &gt;= RADIO_SF_MIN &amp;&amp; cfg.spreadingFactor &lt;= RADIO_SF_MAX) &amp;&amp;
           (cfg.newParameter &gt;= RADIO_NEW_PARAM_MIN &amp;&amp; cfg.newParameter &lt;= RADIO_NEW_PARAM_MAX) &amp;&amp;
           // ... other validations
           true;
}
</code></pre><h3>Board Variants</h3><p><strong>Creating New Board Support:</strong></p><pre><code class="language-cpp">// In board_config.h
#ifdef ARDUINO_HELTEC_WIFI_LORA_32_V5  // Hypothetical V5
    #define LORA_SCK 9
    #define LORA_MISO 11
    #define LORA_MOSI 10
    #define LORA_CS 8
    #define LORA_RST 12
    #define LORA_DIO1 14
    #define LORA_BUSY 13
    
    #define OLED_SDA 17
    #define OLED_SCL 18
    #define OLED_RST 21
    
    #define BUTTON_PIN 0
    
    #define GNSS_TX 33
    #define GNSS_RX 34
    
    #define BATTERY_PIN 1
#endif
</code></pre><p><strong>PlatformIO Board Configuration:</strong></p><pre><code class="language-ini"># In platformio.ini
[env:heltec_wifi_lora_32_V5]
board = heltec_wifi_lora_32_V5  # Custom board definition
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V5
</code></pre><h3>Custom Default Parameters</h3><p><strong>Region-Specific Defaults:</strong></p><pre><code class="language-cpp">// In config.h
#ifdef REGION_EU
    #define LORA_FREQUENCY 868.0    // EU ISM band
    #define LORA_POWER 14           // EU power limit
#elif defined(REGION_US)
    #define LORA_FREQUENCY 915.0    // US ISM band
    #define LORA_POWER 20           // US power limit
#endif
</code></pre><p><strong>Application-Specific Profiles:</strong></p><pre><code class="language-cpp">// In main.cpp
void loadApplicationProfile() {
#ifdef APPLICATION_APRS
    // APRS-specific settings
    loraRadio.setFrequency(433.775);
    loraRadio.setBandwidth(125.0);
    loraRadio.setSpreadingFactor(12);
    
#elif defined(APPLICATION_LORAWAN)
    // LoRaWAN-specific settings
    loraRadio.setFrequency(868.1);
    loraRadio.setBandwidth(125.0);
    loraRadio.setSpreadingFactor(7);
    
#endif
}
</code></pre><h2>Contributing to the Project</h2><h3>Development Workflow</h3><p><strong>1. Fork and Clone:</strong></p><pre><code class="language-bash">git clone https://github.com/yourusername/LoRaTNCX.git
cd LoRaTNCX
git checkout -b feature/your-feature-name
</code></pre><p><strong>2. Development Process:</strong></p><pre><code class="language-bash"># Create feature branch
git checkout -b feature/new-radio-parameter

# Make changes
# ... edit files ...

# Test changes
platformio run --environment heltec_wifi_lora_32_V4
platformio run --target upload --environment heltec_wifi_lora_32_V4
python3 test/kiss_test.py

# Commit changes
git add .
git commit -m &quot;Add new radio parameter support

- Add HW_SET_NEW_PARAMETER command
- Implement parameter validation
- Update web interface
- Add unit tests&quot;
</code></pre><p><strong>3. Pull Request Process:</strong></p><pre><code class="language-bash"># Push to your fork
git push origin feature/new-radio-parameter

# Create pull request on GitHub
# - Describe the changes
# - Reference any related issues
# - Include testing instructions
# - Update documentation if needed
</code></pre><h3>Code Standards</h3><p><strong>C++ Coding Style:</strong></p><pre><code class="language-cpp">// Use consistent naming
class MyClass {
public:
    void doSomething();           // camelCase for methods
private:
    uint8_t myVariable;           // camelCase for variables
    static const uint8_t MY_CONSTANT = 42;  // UPPER_SNAKE_CASE for constants
};

// Use meaningful names
void setRadioFrequency(float frequencyMHz);  // Clear parameter names
bool isValidFrequency(float freq);           // Boolean methods start with &#39;is&#39;

// Error handling
if (!radio.configure()) {
    LOG_ERRORLN(&quot;Failed to configure radio&quot;);
    return false;
}
</code></pre><p><strong>Documentation Standards:</strong></p><pre><code class="language-cpp">/**
 * Configure the LoRa radio with specified parameters
 * @param frequency Center frequency in MHz (150.0 - 960.0)
 * @param bandwidth Bandwidth in kHz (7.8, 10.4, 15.6, 20.8, 31.25, 41.7, 62.5, 125, 250, 500)
 * @param spreadingFactor Spreading factor (7-12)
 * @param codingRate Coding rate (5-8 for 4/5 through 4/8)
 * @param power Transmit power in dBm (-9 to 22)
 * @return true if configuration successful, false otherwise
 */
bool LoRaRadio::configure(float frequency, float bandwidth, 
                         uint8_t spreadingFactor, uint8_t codingRate, 
                         uint8_t power);
</code></pre><h3>Testing Requirements</h3><p><strong>Unit Tests:</strong></p><ul><li>Test all new functions and methods</li><li>Test parameter validation (bounds checking)</li><li>Test error conditions and edge cases</li><li>Mock hardware interfaces where possible</li></ul><p><strong>Integration Tests:</strong></p><ul><li>Test with actual hardware</li><li>Verify KISS protocol compliance</li><li>Test web interface functionality</li><li>Validate configuration persistence</li></ul><p><strong>Performance Tests:</strong></p><ul><li>Measure power consumption impact</li><li>Test memory usage</li><li>Verify timing requirements</li><li>Check for memory leaks</li></ul><p><strong>Compatibility Tests:</strong></p><ul><li>Test on both V3 and V4 boards</li><li>Verify backward compatibility</li><li>Test with existing KISS applications</li><li>Validate web interface on different browsers</li></ul><h3>Documentation Updates</h3><p><strong>Code Documentation:</strong></p><ul><li>Update header file comments</li><li>Document new KISS commands</li><li>Explain configuration parameters</li><li>Provide usage examples</li></ul><p><strong>User Documentation:</strong></p><ul><li>Update relevant manual sections</li><li>Add configuration examples</li><li>Document new features</li><li>Update troubleshooting guides</li></ul><p><strong>API Documentation:</strong></p><ul><li>Update REST API reference</li><li>Document new endpoints</li><li>Provide example requests/responses</li><li>Update OpenAPI specifications</li></ul><h3>Issue Reporting</h3><p><strong>Bug Reports:</strong></p><ul><li>Use the issue template</li><li>Include firmware version and board type</li><li>Provide serial logs and error messages</li><li>Describe steps to reproduce</li><li>Include configuration details</li></ul><p><strong>Feature Requests:</strong></p><ul><li>Clearly describe the desired functionality</li><li>Explain the use case and benefits</li><li>Consider implementation complexity</li><li>Suggest design approaches if possible</li></ul><h3>Release Process</h3><p><strong>Version Numbering:</strong></p><ul><li>Follow semantic versioning (MAJOR.MINOR.PATCH)</li><li>Increment MAJOR for breaking changes</li><li>Increment MINOR for new features</li><li>Increment PATCH for bug fixes</li></ul><p><strong>Release Checklist:</strong></p><ul><li>[ ] All tests pass</li><li>[ ] Documentation updated</li><li>[ ] Changelog updated</li><li>[ ] Compatibility verified</li><li>[ ] Performance validated</li><li>[ ] Security review completed</li></ul><h2>Custom Firmware Builds</h2><h3>Advanced PlatformIO Configuration</h3><p><strong>Custom Build Environments:</strong></p><pre><code class="language-ini"># platformio.ini - Advanced configuration
[env:debug_build]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -DLOG_LEVEL=4                    # Maximum debug logging
    -DCORE_DEBUG_LEVEL=5            # ESP32 core debugging
    -DDEBUG_ESP_PORT=Serial         # Enable serial debugging
    -DDEBUG_ESP_CORE                # Core debug output
    -DDEBUG_ESP_WIFI                # WiFi debug output
    -DDEBUG_ESP_HTTP_CLIENT         # HTTP client debugging
    -DDEBUG_ESP_HTTP_SERVER         # HTTP server debugging

[env:minimal_build]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -DDISABLE_WEB_INTERFACE         # Remove web server
    -DDISABLE_TCP_KISS             # Remove TCP server
    -DDISABLE_DISPLAY              # Remove OLED support
    -DDISABLE_GNSS                 # Remove GNSS support
    # Reduces binary size for specific applications

[env:performance_build]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -O3                             # Maximum optimization
    -flto                           # Link-time optimization
    -DCONFIG_FREERTOS_HZ=1000      # Higher FreeRTOS tick rate
    -DCONFIG_ESP32_DEFAULT_CPU_FREQ_240  # Overclock to 240MHz
</code></pre><p><strong>Custom Partition Tables:</strong></p><pre><code class="language-ini"># For larger applications or additional features
board_build.partitions = custom_partitions.csv

# custom_partitions.csv
# Name,   Type, SubType, Offset,  Size, Flags
nvs,      data, nvs,     0x9000,  0x5000,
otadata,  data, ota,     0xe000,  0x2000,
app0,     app,  ota_0,   0x10000, 0x1E0000,
app1,     app,  ota_1,   0x1F0000,0x1E0000,
spiffs,   data, spiffs,  0x3D0000,0x30000,
</code></pre><h3>Library Management</h3><p><strong>Adding Custom Libraries:</strong></p><pre><code class="language-ini"># In platformio.ini
lib_deps = 
    \${env.lib_deps}
    https://github.com/username/CustomLibrary.git#v1.0.0
    file:///path/to/local/library

# Or in lib/ directory
# Copy library files to lib/CustomLibrary/
# PlatformIO will automatically find and compile
</code></pre><p><strong>Library Optimization:</strong></p><pre><code class="language-ini"># Reduce binary size by excluding unused features
build_flags = 
    \${env.build_flags}
    -DARDUINOJSON_ENABLE_COMMENTS=0    # Disable JSON comments
    -DARDUINOJSON_ENABLE_NAN=0         # Disable NaN handling
    -DARDUINOJSON_ENABLE_INFINITY=0    # Disable infinity handling
</code></pre><h3>Firmware Customization Scripts</h3><p><strong>Automated Build Script:</strong></p><pre><code class="language-bash">#!/bin/bash
# build_custom.sh - Custom firmware build script

set -e

# Configuration
BOARD=\${1:-heltec_wifi_lora_32_V4}
CUSTOM_FLAGS=\${2:-}

echo &quot;Building custom firmware for $BOARD&quot;

# Clean previous build
platformio run --environment $BOARD --target clean

# Build with custom flags
platformio run --environment $BOARD \\
    --build_flags &quot;$CUSTOM_FLAGS&quot;

# Upload if requested
if [ &quot;$3&quot; = &quot;upload&quot; ]; then
    platformio run --environment $BOARD --target upload
fi

echo &quot;Build complete&quot;
</code></pre><p><strong>Usage:</strong></p><pre><code class="language-bash"># Standard build
./build_custom.sh heltec_wifi_lora_32_V4

# Debug build
./build_custom.sh heltec_wifi_lora_32_V4 &quot;-DLOG_LEVEL=4 -DDEBUG_ESP_CORE&quot;

# Build and upload
./build_custom.sh heltec_wifi_lora_32_V4 &quot;&quot; upload
</code></pre><h3>OTA Updates</h3><p><strong>Over-The-Air Updates:</strong></p><pre><code class="language-cpp">// In main.cpp - Add OTA support
#include &lt;ArduinoOTA.h&gt;

void setupOTA() {
    ArduinoOTA.setHostname(&quot;LoRaTNCX&quot;);
    ArduinoOTA.setPassword(&quot;your-ota-password&quot;);
    
    ArduinoOTA.onStart([]() {
        LOG_INFOLN(&quot;OTA update started&quot;);
    });
    
    ArduinoOTA.onEnd([]() {
        LOG_INFOLN(&quot;OTA update finished&quot;);
    });
    
    ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
        LOG_INFO(&quot;OTA progress: %u%%\\r&quot;, (progress / (total / 100)));
    });
    
    ArduinoOTA.onError([](ota_error_t error) {
        LOG_ERROR(&quot;OTA error[%u]: &quot;, error);
        // Handle error
    });
    
    ArduinoOTA.begin();
}

void loop() {
    // ... existing loop code ...
    ArduinoOTA.handle();
}
</code></pre><p><strong>OTA Build Configuration:</strong></p><pre><code class="language-ini"># In platformio.ini
[env:ota_build]
board = heltec_wifi_lora_32_V4
board_build.filesystem = spiffs
build_flags = 
    \${env.build_flags}
    -DARDUINO_HELTEC_WIFI_LORA_32_V4
    -DENABLE_OTA_UPDATES
upload_protocol = espota
upload_port = 192.168.4.1  # IP address when in AP mode
upload_flags = 
    --auth=your-ota-password
</code></pre><h3>Performance Profiling</h3><p><strong>Memory Usage Analysis:</strong></p><pre><code class="language-bash"># Check binary size
platformio run --environment heltec_wifi_lora_32_V4 --target size

# Monitor heap usage at runtime
void printMemoryInfo() {
    LOG_INFO(&quot;Free heap: %d bytes\\n&quot;, ESP.getFreeHeap());
    LOG_INFO(&quot;Min free heap: %d bytes\\n&quot;, ESP.getMinFreeHeap());
    LOG_INFO(&quot;Max alloc heap: %d bytes\\n&quot;, ESP.getMaxAllocHeap());
}
</code></pre><p><strong>CPU Usage Monitoring:</strong></p><pre><code class="language-cpp">// Add to main loop for profiling
static unsigned long lastProfileTime = 0;
if (millis() - lastProfileTime &gt; 5000) {  // Every 5 seconds
    LOG_INFO(&quot;Task high water marks:\\n&quot;);
    // Print FreeRTOS task stack usage
    lastProfileTime = millis();
}
</code></pre><p><strong>Power Consumption Profiling:</strong></p><pre><code class="language-cpp">// Measure current consumption
void measurePowerConsumption() {
    static unsigned long lastMeasure = 0;
    if (millis() - lastMeasure &gt; 1000) {
        float voltage = getBatteryVoltage();
        // Estimate current based on voltage drop and known resistance
        // Log power consumption data
        lastMeasure = millis();
    }
}
</code></pre><hr><p><a href="advanced-topics">← Previous: Advanced Topics</a> | <a href="/manual">Back to Main Manual</a> | <a href="appendices">Next: Appendices →</a></p>`,194),Pp=[Ap],Tp=pe({__name:"16-development-customization",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Rp,Pp))}}),Ep={class:"markdown-body"},xp=he(`<h1>17. Appendices</h1><h2>17.1. KISS Protocol Reference</h2><h3>Frame Format</h3><p>LoRaTNCX implements the standard KISS (Keep It Simple, Stupid) protocol for TNC communication. KISS frames use byte stuffing to ensure reliable transmission over serial/TCP connections.</p><h4>Frame Structure</h4><pre><code class="">FEND + Command/Data + FEND
</code></pre><p>Where:</p><ul><li><strong>FEND</strong> (<code class="">0xC0</code>): Frame delimiter</li><li><strong>Command/Data</strong>: Frame payload</li><li><strong>Data frames</strong> contain packet data for transmission</li><li><strong>Command frames</strong> contain protocol control information</li></ul><h4>Byte Stuffing</h4><p>KISS uses byte stuffing to prevent FEND bytes from appearing in data:</p><table><thead><tr><th>Original Byte</th><th>Stuffed Sequence</th></tr></thead><tbody><tr><td><code class="">0xC0</code> (FEND)</td><td><code class="">0xDB 0xDC</code> (FESC TFEND)</td></tr><tr><td><code class="">0xDB</code> (FESC)</td><td><code class="">0xDB 0xDD</code> (FESC TFESC)</td></tr></tbody></table><h3>KISS Commands</h3><h4>Standard Commands</h4><table><thead><tr><th>Command</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code class="">CMD_DATA</code></td><td><code class="">0x00</code></td><td>Data frame for packet transmission/reception</td></tr><tr><td><code class="">CMD_TXDELAY</code></td><td><code class="">0x01</code></td><td>Not used (LoRa has instant TX)</td></tr><tr><td><code class="">CMD_P</code></td><td><code class="">0x02</code></td><td>Not used (LoRa uses CAD, not CSMA)</td></tr><tr><td><code class="">CMD_SLOTTIME</code></td><td><code class="">0x03</code></td><td>Not used (LoRa uses CAD, not CSMA)</td></tr><tr><td><code class="">CMD_TXTAIL</code></td><td><code class="">0x04</code></td><td>Not used (No squelch tail in LoRa)</td></tr><tr><td><code class="">CMD_FULLDUPLEX</code></td><td><code class="">0x05</code></td><td>Not used (SX1262 is half-duplex only)</td></tr><tr><td><code class="">CMD_SETHARDWARE</code></td><td><code class="">0x06</code></td><td>Hardware-specific configuration</td></tr><tr><td><code class="">CMD_GETHARDWARE</code></td><td><code class="">0x07</code></td><td>Query hardware status</td></tr><tr><td><code class="">CMD_RETURN</code></td><td><code class="">0xFF</code></td><td>Exit KISS mode</td></tr></tbody></table><h4>Data Frames</h4><p>Data frames contain raw packet data for transmission:</p><pre><code class="">FEND + 0x00 + [packet data] + FEND
</code></pre><p><strong>Example:</strong> Transmit “HELLO” packet</p><pre><code class="">C0 00 48 45 4C 4C 4F C0
</code></pre><h4>Command Frames</h4><p>Command frames use the format:</p><pre><code class="">FEND + Command + Subcommand + [parameters] + FEND
</code></pre><h2>17.2. SETHARDWARE Command Reference</h2><p>SETHARDWARE commands configure LoRa radio parameters and system settings.</p><h3>Command Format</h3><pre><code class="">FEND + 0x06 + Subcommand + [parameters] + FEND
</code></pre><h3>Subcommands</h3><h4>Radio Configuration</h4><table><thead><tr><th>Subcommand</th><th>Value</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td><code class="">HW_SET_FREQUENCY</code></td><td><code class="">0x01</code></td><td>4 bytes (float, MHz)</td><td>Set center frequency</td></tr><tr><td><code class="">HW_SET_BANDWIDTH</code></td><td><code class="">0x02</code></td><td>1 byte</td><td>Set bandwidth (see table below)</td></tr><tr><td><code class="">HW_SET_SPREADING</code></td><td><code class="">0x03</code></td><td>1 byte (7-12)</td><td>Set spreading factor</td></tr><tr><td><code class="">HW_SET_CODINGRATE</code></td><td><code class="">0x04</code></td><td>1 byte (5-8)</td><td>Set coding rate (4/5 to 4/8)</td></tr><tr><td><code class="">HW_SET_POWER</code></td><td><code class="">0x05</code></td><td>1 byte (dBm)</td><td>Set transmit power</td></tr><tr><td><code class="">HW_SET_SYNCWORD</code></td><td><code class="">0x08</code></td><td>2 bytes</td><td>Set sync word (SX126x format)</td></tr><tr><td><code class="">HW_SET_GNSS_ENABLE</code></td><td><code class="">0x09</code></td><td>1 byte (0=disable, 1=enable)</td><td>Enable/disable GNSS</td></tr></tbody></table><h4>System Commands</h4><table><thead><tr><th>Subcommand</th><th>Value</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td><code class="">HW_GET_CONFIG</code></td><td><code class="">0x06</code></td><td>None</td><td>Get current configuration (returns via GETHARDWARE)</td></tr><tr><td><code class="">HW_SAVE_CONFIG</code></td><td><code class="">0x07</code></td><td>None</td><td>Save configuration to flash memory</td></tr><tr><td><code class="">HW_RESET_CONFIG</code></td><td><code class="">0xFF</code></td><td>None</td><td>Reset to factory defaults</td></tr></tbody></table><h3>Bandwidth Values</h3><table><thead><tr><th>Value</th><th>Bandwidth</th><th>Description</th></tr></thead><tbody><tr><td><code class="">0</code></td><td>7.8 kHz</td><td>Maximum range, minimum data rate</td></tr><tr><td><code class="">1</code></td><td>10.4 kHz</td><td>Good range, moderate data rate</td></tr><tr><td><code class="">2</code></td><td>15.6 kHz</td><td>Balanced performance</td></tr><tr><td><code class="">3</code></td><td>20.8 kHz</td><td>Higher data rate, reduced range</td></tr><tr><td><code class="">4</code></td><td>31.25 kHz</td><td>Fast transmission, shorter range</td></tr><tr><td><code class="">5</code></td><td>41.7 kHz</td><td>Very fast, limited range</td></tr><tr><td><code class="">6</code></td><td>62.5 kHz</td><td>High speed, urban ranges</td></tr><tr><td><code class="">7</code></td><td>125 kHz</td><td>Maximum speed, short range</td></tr><tr><td><code class="">8</code></td><td>250 kHz</td><td>Ultra-fast, very short range</td></tr></tbody></table><h3>Examples</h3><p><strong>Set Frequency to 915 MHz:</strong></p><pre><code class="">C0 06 01 42 5C 00 00 C0
</code></pre><p>(0x42 0x5C 0x00 0x00 = 915.0 as IEEE 754 float)</p><p><strong>Set Spreading Factor to 12:</strong></p><pre><code class="">C0 06 03 0C C0
</code></pre><p><strong>Set Power to 20 dBm:</strong></p><pre><code class="">C0 06 05 14 C0
</code></pre><p><strong>Save Configuration:</strong></p><pre><code class="">C0 06 07 C0
</code></pre><h2>17.3. GETHARDWARE Command Reference</h2><p>GETHARDWARE commands query system status and configuration.</p><h3>Command Format</h3><pre><code class="">FEND + 0x07 + Subcommand + FEND
</code></pre><h3>Subcommands</h3><table><thead><tr><th>Subcommand</th><th>Value</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="">HW_QUERY_CONFIG</code></td><td><code class="">0x01</code></td><td>Radio configuration</td><td>Query current LoRa settings</td></tr><tr><td><code class="">HW_QUERY_BATTERY</code></td><td><code class="">0x02</code></td><td>Battery voltage</td><td>Query battery voltage (4 bytes, float)</td></tr><tr><td><code class="">HW_QUERY_BOARD</code></td><td><code class="">0x03</code></td><td>Board information</td><td>Query board type and name</td></tr><tr><td><code class="">HW_QUERY_GNSS</code></td><td><code class="">0x04</code></td><td>GNSS status</td><td>Query GNSS configuration and status</td></tr><tr><td><code class="">HW_QUERY_ALL</code></td><td><code class="">0xFF</code></td><td>Everything</td><td>Query all hardware information</td></tr></tbody></table><h3>Response Format</h3><p>Responses use the same frame format as commands:</p><pre><code class="">FEND + 0x07 + Subcommand + [response data] + FEND
</code></pre><h3>Response Data Formats</h3><h4>Configuration Query (HW_QUERY_CONFIG)</h4><p>Returns 16 bytes:</p><pre><code class="">[4 bytes frequency] [1 byte bandwidth] [1 byte SF] [1 byte CR] [1 byte power] [2 bytes syncword] [1 byte GNSS enabled] [4 bytes reserved]
</code></pre><h4>Battery Query (HW_QUERY_BATTERY)</h4><p>Returns 4 bytes (IEEE 754 float, volts)</p><h4>Board Query (HW_QUERY_BOARD)</h4><p>Returns variable length string (board name)</p><h4>GNSS Query (HW_QUERY_GNSS)</h4><p>Returns 8 bytes:</p><pre><code class="">[1 byte enabled] [1 byte satellites] [4 bytes latitude] [2 bytes longitude]
</code></pre><h3>Examples</h3><p><strong>Query Configuration:</strong></p><pre><code class="">C0 07 01 C0
</code></pre><p>Response: <code class="">C0 07 01 [16 bytes of config data] C0</code></p><p><strong>Query Battery Voltage:</strong></p><pre><code class="">C0 07 02 C0
</code></pre><p>Response: <code class="">C0 07 02 [4 bytes voltage as float] C0</code></p><h2>17.4. REST API Reference</h2><p>LoRaTNCX provides a comprehensive REST API for configuration and monitoring.</p><h3>Base URL</h3><pre><code class="">http://[device-ip]:80/api/
</code></pre><h3>Endpoints</h3><h4>System Status</h4><p><strong>GET /api/status</strong> Returns overall system status.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;uptime&quot;: 12345,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;board&quot;: &quot;Heltec WiFi LoRa 32 V4&quot;,
  &quot;wifi&quot;: {
    &quot;mode&quot;: &quot;AP&quot;,
    &quot;ssid&quot;: &quot;LoRaTNCX-1234&quot;,
    &quot;ip&quot;: &quot;192.168.4.1&quot;
  },
  &quot;battery&quot;: {
    &quot;voltage&quot;: 3.85,
    &quot;percentage&quot;: 78
  }
}
</code></pre><p><strong>GET /api/system</strong> Returns detailed system information.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;firmware&quot;: {
    &quot;version&quot;: &quot;1.0.0&quot;,
    &quot;build_date&quot;: &quot;2025-01-01&quot;,
    &quot;esp32&quot;: {
      &quot;chip_model&quot;: &quot;ESP32-S3&quot;,
      &quot;chip_revision&quot;: 1,
      &quot;cpu_freq&quot;: 240,
      &quot;flash_size&quot;: 8388608
    }
  },
  &quot;memory&quot;: {
    &quot;free_heap&quot;: 245760,
    &quot;min_free_heap&quot;: 234567,
    &quot;total_psram&quot;: 4194304,
    &quot;free_psram&quot;: 4194304
  },
  &quot;network&quot;: {
    &quot;tcp_clients&quot;: 2,
    &quot;max_tcp_clients&quot;: 4
  }
}
</code></pre><h4>LoRa Configuration</h4><p><strong>GET /api/lora/config</strong> Returns current LoRa radio configuration.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;frequency&quot;: 915.0,
  &quot;bandwidth&quot;: 125.0,
  &quot;spreadingFactor&quot;: 12,
  &quot;codingRate&quot;: 7,
  &quot;power&quot;: 20,
  &quot;syncWord&quot;: 5130,
  &quot;preambleLength&quot;: 8
}
</code></pre><p><strong>POST /api/lora/config</strong> Updates LoRa radio configuration.</p><p><strong>Request Body:</strong></p><pre><code class="language-json">{
  &quot;frequency&quot;: 868.0,
  &quot;bandwidth&quot;: 125.0,
  &quot;spreadingFactor&quot;: 9,
  &quot;codingRate&quot;: 7,
  &quot;power&quot;: 17,
  &quot;syncWord&quot;: 29099
}
</code></pre><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;success&quot;: true,
  &quot;message&quot;: &quot;Configuration updated&quot;,
  &quot;reboot_required&quot;: false
}
</code></pre><h4>WiFi Configuration</h4><p><strong>GET /api/wifi/config</strong> Returns current WiFi configuration.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;mode&quot;: &quot;AP&quot;,
  &quot;ap&quot;: {
    &quot;ssid&quot;: &quot;LoRaTNCX-1234&quot;,
    &quot;password&quot;: &quot;loratncx&quot;,
    &quot;channel&quot;: 1,
    &quot;hidden&quot;: false
  },
  &quot;sta&quot;: {
    &quot;ssid&quot;: &quot;&quot;,
    &quot;password&quot;: &quot;&quot;,
    &quot;ip&quot;: &quot;&quot;,
    &quot;gateway&quot;: &quot;&quot;,
    &quot;subnet&quot;: &quot;&quot;
  }
}
</code></pre><p><strong>POST /api/wifi/config</strong> Updates WiFi configuration.</p><p><strong>Request Body:</strong></p><pre><code class="language-json">{
  &quot;mode&quot;: &quot;STA&quot;,
  &quot;sta&quot;: {
    &quot;ssid&quot;: &quot;MyWiFi&quot;,
    &quot;password&quot;: &quot;mypassword&quot;
  }
}
</code></pre><h4>GNSS Configuration</h4><p><strong>GET /api/gnss/config</strong> Returns GNSS configuration.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;enabled&quot;: true,
  &quot;tcp_port&quot;: 10110,
  &quot;baud_rate&quot;: 9600
}
</code></pre><p><strong>POST /api/gnss/config</strong> Updates GNSS configuration.</p><p><strong>Request Body:</strong></p><pre><code class="language-json">{
  &quot;enabled&quot;: true,
  &quot;tcp_port&quot;: 10110
}
</code></pre><p><strong>GET /api/gnss/status</strong> Returns GNSS status and position information.</p><p><strong>Response:</strong></p><pre><code class="language-json">{
  &quot;enabled&quot;: true,
  &quot;fix&quot;: true,
  &quot;satellites&quot;: 8,
  &quot;latitude&quot;: 42.3601,
  &quot;longitude&quot;: -71.0589,
  &quot;altitude&quot;: 10.5,
  &quot;hdop&quot;: 1.2,
  &quot;speed&quot;: 0.0,
  &quot;course&quot;: 0.0,
  &quot;last_update&quot;: 1234567890
}
</code></pre><h3>HTTP Status Codes</h3><table><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody><tr><td>200</td><td>Success</td></tr><tr><td>400</td><td>Bad Request (invalid parameters)</td></tr><tr><td>404</td><td>Not Found</td></tr><tr><td>500</td><td>Internal Server Error</td></tr></tbody></table><h3>Authentication</h3><p>Currently, no authentication is required. All endpoints are publicly accessible.</p><h2>17.5. Pin Configurations</h2><h3>Heltec WiFi LoRa 32 V3</h3><table><thead><tr><th>Function</th><th>GPIO</th><th>Notes</th></tr></thead><tbody><tr><td><strong>LoRa Radio</strong></td><td></td><td></td></tr><tr><td>SCLK</td><td>9</td><td>SPI clock</td></tr><tr><td>MISO</td><td>11</td><td>SPI master in slave out</td></tr><tr><td>MOSI</td><td>10</td><td>SPI master out slave in</td></tr><tr><td>CS</td><td>8</td><td>SPI chip select</td></tr><tr><td>DIO0</td><td>14</td><td>Radio interrupt 0</td></tr><tr><td>RST</td><td>12</td><td>Radio reset</td></tr><tr><td>DIO1</td><td>14</td><td>Radio interrupt 1 (same as DIO0)</td></tr><tr><td>BUSY</td><td>13</td><td>Radio busy indicator</td></tr><tr><td><strong>Display</strong></td><td></td><td></td></tr><tr><td>SDA</td><td>17</td><td>I2C data (OLED)</td></tr><tr><td>SCL</td><td>18</td><td>I2C clock (OLED)</td></tr><tr><td>RST</td><td>21</td><td>OLED reset</td></tr><tr><td><strong>Battery</strong></td><td></td><td></td></tr><tr><td>ADC</td><td>1</td><td>Battery voltage measurement</td></tr><tr><td>CTRL</td><td>37</td><td>Battery measurement control</td></tr><tr><td><strong>User Interface</strong></td><td></td><td></td></tr><tr><td>BUTTON</td><td>0</td><td>User button (boot button)</td></tr><tr><td><strong>GNSS</strong></td><td></td><td>Not available (external only)</td></tr></tbody></table><h3>Heltec WiFi LoRa 32 V4</h3><table><thead><tr><th>Function</th><th>GPIO</th><th>Notes</th></tr></thead><tbody><tr><td><strong>LoRa Radio</strong></td><td></td><td></td></tr><tr><td>SCLK</td><td>9</td><td>SPI clock</td></tr><tr><td>MISO</td><td>11</td><td>SPI master in slave out</td></tr><tr><td>MOSI</td><td>10</td><td>SPI master out slave in</td></tr><tr><td>CS</td><td>8</td><td>SPI chip select</td></tr><tr><td>DIO0</td><td>14</td><td>Radio interrupt 0</td></tr><tr><td>RST</td><td>12</td><td>Radio reset</td></tr><tr><td>DIO1</td><td>14</td><td>Radio interrupt 1 (same as DIO0)</td></tr><tr><td>BUSY</td><td>13</td><td>Radio busy indicator</td></tr><tr><td><strong>Power Amplifier</strong></td><td></td><td></td></tr><tr><td>PA_EN</td><td>2</td><td>PA enable</td></tr><tr><td>PA_TX_EN</td><td>46</td><td>PA transmit enable</td></tr><tr><td>PA_POWER</td><td>7</td><td>PA power control</td></tr><tr><td><strong>Display</strong></td><td></td><td></td></tr><tr><td>SDA</td><td>17</td><td>I2C data (OLED)</td></tr><tr><td>SCL</td><td>18</td><td>I2C clock (OLED)</td></tr><tr><td>RST</td><td>21</td><td>OLED reset</td></tr><tr><td><strong>Battery</strong></td><td></td><td></td></tr><tr><td>ADC</td><td>1</td><td>Battery voltage measurement</td></tr><tr><td>CTRL</td><td>37</td><td>Battery measurement control</td></tr><tr><td><strong>GNSS</strong></td><td></td><td></td></tr><tr><td>RX</td><td>39</td><td>GNSS TX → MCU RX</td></tr><tr><td>TX</td><td>38</td><td>MCU TX → GNSS RX</td></tr><tr><td>CTRL</td><td>34</td><td>GNSS power control (LOW = enable)</td></tr><tr><td>WAKE</td><td>40</td><td>GNSS wake signal</td></tr><tr><td>PPS</td><td>41</td><td>GNSS pulse per second</td></tr><tr><td>RST</td><td>42</td><td>GNSS reset</td></tr><tr><td><strong>User Interface</strong></td><td></td><td></td></tr><tr><td>BUTTON</td><td>0</td><td>User button (boot button)</td></tr></tbody></table><h3>Arduino Pin Mapping</h3><p>The firmware uses Arduino pin numbers, which map to ESP32 GPIO numbers as follows:</p><table><thead><tr><th>Arduino Pin</th><th>ESP32 GPIO</th><th>Function</th></tr></thead><tbody><tr><td>0</td><td>GPIO0</td><td>User button</td></tr><tr><td>1</td><td>GPIO1</td><td>Battery ADC</td></tr><tr><td>2</td><td>GPIO2</td><td>PA enable (V4)</td></tr><tr><td>7</td><td>GPIO7</td><td>PA power (V4)</td></tr><tr><td>8</td><td>GPIO8</td><td>LoRa CS</td></tr><tr><td>9</td><td>GPIO9</td><td>LoRa SCLK</td></tr><tr><td>10</td><td>GPIO10</td><td>LoRa MOSI</td></tr><tr><td>11</td><td>GPIO11</td><td>LoRa MISO</td></tr><tr><td>12</td><td>GPIO12</td><td>LoRa RST</td></tr><tr><td>13</td><td>GPIO13</td><td>LoRa BUSY</td></tr><tr><td>14</td><td>GPIO14</td><td>LoRa DIO0/DIO1</td></tr><tr><td>17</td><td>GPIO17</td><td>OLED SDA</td></tr><tr><td>18</td><td>GPIO18</td><td>OLED SCL</td></tr><tr><td>21</td><td>GPIO21</td><td>OLED RST</td></tr><tr><td>34</td><td>GPIO34</td><td>GNSS CTRL (V4)</td></tr><tr><td>37</td><td>GPIO37</td><td>Battery CTRL</td></tr><tr><td>38</td><td>GPIO38</td><td>GNSS TX (V4)</td></tr><tr><td>39</td><td>GPIO39</td><td>GNSS RX (V4)</td></tr><tr><td>40</td><td>GPIO40</td><td>GNSS WAKE (V4)</td></tr><tr><td>41</td><td>GPIO41</td><td>GNSS PPS (V4)</td></tr><tr><td>42</td><td>GPIO42</td><td>GNSS RST (V4)</td></tr><tr><td>46</td><td>GPIO46</td><td>PA TX enable (V4)</td></tr></tbody></table><h2>17.6. Factory Test Procedures</h2><h3>Hardware Test Requirements</h3><p><strong>Equipment Needed:</strong></p><ul><li>Heltec WiFi LoRa 32 V3 or V4 board</li><li>USB cable</li><li>Two SMA antennas (for range testing)</li><li>GNSS antenna (V4 only)</li><li>Multimeter (for voltage testing)</li><li>Oscilloscope (optional, for signal analysis)</li></ul><p><strong>Software Requirements:</strong></p><ul><li>PlatformIO IDE or Core</li><li>Python 3.7+ with pyserial</li><li>Terminal emulator (minicom, screen, or PuTTY)</li></ul><h3>Basic Functionality Tests</h3><h4>1. Power and Boot Test</h4><pre><code class="language-bash"># Connect board via USB
# Monitor serial output
platformio device monitor --environment heltec_wifi_lora_32_V4

# Expected output:
# === LoRaTNCX Starting ===
# Initializing SPIFFS...
# Board: Heltec WiFi LoRa 32 V4
# Radio initialized successfully
# WiFi AP mode started: LoRaTNCX-XXXX
# Web server started on port 80
# Ready for KISS connections
</code></pre><h4>2. OLED Display Test</h4><ul><li>Verify display powers on and shows LoRaTNCX splash screen</li><li>Check that status information updates correctly</li><li>Test button functionality (if available)</li></ul><h4>3. Battery Voltage Test</h4><pre><code class="language-bash"># Query battery voltage
python3 tools/loratncx_config.py /dev/ttyACM0 --get-battery

# Expected: Battery Voltage: X.XXV (XX% estimated)
# Verify voltage is reasonable (3.0-4.2V range)
</code></pre><h4>4. WiFi Functionality Test</h4><pre><code class="language-bash"># Scan for WiFi networks
nmcli device wifi list | grep LoRaTNCX

# Connect to AP
nmcli device wifi connect LoRaTNCX-XXXX password loratncx

# Test web interface
curl http://192.168.4.1/api/status
</code></pre><h3>Radio Functionality Tests</h3><h4>5. LoRa Configuration Test</h4><pre><code class="language-bash"># Test configuration commands
python3 tools/loratncx_config.py /dev/ttyACM0 --get-config

# Test parameter changes
python3 tools/loratncx_config.py /dev/ttyACM0 --frequency 915.0
python3 tools/loratncx_config.py /dev/ttyACM0 --power 10
python3 tools/loratncx_config.py /dev/ttyACM0 --save
</code></pre><h4>6. KISS Protocol Test</h4><pre><code class="language-bash"># Test basic KISS connectivity
python3 test/kiss_test.py --port /dev/ttyACM0 --test-basic

# Test parameter validation
python3 test/kiss_test.py --port /dev/ttyACM0 --test-config
</code></pre><h4>7. Range and Performance Test</h4><p><strong>Setup:</strong></p><ol><li>Connect two LoRaTNCX devices</li><li>Configure identical parameters (frequency, SF, BW, CR)</li><li>Place devices 10-100 meters apart (line of sight)</li></ol><p><strong>Test Commands:</strong></p><pre><code class="language-bash"># Device 1: Send test packets
python3 test/kiss_test.py --port /dev/ttyACM0 --send-test

# Device 2: Receive and verify
python3 test/kiss_test.py --port /dev/ttyACM1 --receive-test

# Expected: 100% packet success rate at close range
# Expected: &gt;90% success rate at maximum range
</code></pre><h3>GNSS Test (V4 Only)</h3><h4>8. GNSS Functionality Test</h4><pre><code class="language-bash"># Enable GNSS
python3 tools/loratncx_config.py /dev/ttyACM0 --gnss-enable true

# Wait 2-3 minutes for satellite acquisition
# Check GNSS status
python3 tools/loratncx_config.py /dev/ttyACM0 --get-gnss

# Test NMEA output
telnet 192.168.4.1 10110
# Should see NMEA sentences like:
# $GPGGA,123456.00,4236.0100,N,07105.8900,W,1,08,1.2,10.5,M,,,,*47
</code></pre><h3>Comprehensive Test Suite</h3><h4>Automated Test Script</h4><pre><code class="language-bash">#!/bin/bash
# comprehensive_test.sh

echo &quot;=== LoRaTNCX Comprehensive Factory Test ===&quot;

# Test 1: Basic connectivity
echo &quot;Test 1: Basic connectivity...&quot;
platformio run --target upload --environment heltec_wifi_lora_32_V4
sleep 5
if platformio device monitor --environment heltec_wifi_lora_32_V4 --quiet --exit-char &#39;q&#39; | grep -q &quot;Ready for KISS&quot;; then
    echo &quot;✓ Basic connectivity test passed&quot;
else
    echo &quot;✗ Basic connectivity test failed&quot;
    exit 1
fi

# Test 2: Configuration
echo &quot;Test 2: Configuration test...&quot;
python3 tools/loratncx_config.py /dev/ttyACM0 --get-config &gt; /dev/null
if [ $? -eq 0 ]; then
    echo &quot;✓ Configuration test passed&quot;
else
    echo &quot;✗ Configuration test failed&quot;
    exit 1
fi

# Test 3: KISS protocol
echo &quot;Test 3: KISS protocol test...&quot;
python3 test/kiss_test.py --port /dev/ttyACM0 --test-basic &gt; /dev/null
if [ $? -eq 0 ]; then
    echo &quot;✓ KISS protocol test passed&quot;
else
    echo &quot;✗ KISS protocol test failed&quot;
    exit 1
fi

# Test 4: Web interface
echo &quot;Test 4: Web interface test...&quot;
curl -s http://192.168.4.1/api/status | jq .version &gt; /dev/null
if [ $? -eq 0 ]; then
    echo &quot;✓ Web interface test passed&quot;
else
    echo &quot;✗ Web interface test failed&quot;
    exit 1
fi

echo &quot;=== All tests passed! ===&quot;
</code></pre><h3>Test Result Documentation</h3><p><strong>Test Report Template:</strong></p><pre><code class="">LoRaTNCX Factory Test Report
============================

Board Information:
- Board Type: Heltec WiFi LoRa 32 V4
- Serial Number: [board serial]
- Firmware Version: [version]
- Test Date: [date]

Test Results:
- [ ] Power and boot test
- [ ] OLED display test  
- [ ] Battery voltage test
- [ ] WiFi functionality test
- [ ] LoRa configuration test
- [ ] KISS protocol test
- [ ] Range and performance test
- [ ] GNSS functionality test (V4 only)

Performance Metrics:
- Transmit Power: [dBm]
- Receive Sensitivity: [dBm]
- Range Test Distance: [meters]
- Packet Success Rate: [%]
- Battery Life: [hours]

Issues Found:
- [List any issues or deviations from expected behavior]

Tested By: [Name]
Approved: [ ] Yes [ ] No
</code></pre><h2>17.7. Documentation Changelog</h2><h3>Version 1.0.0 - November 2025</h3><ul><li>Initial release of LoRaTNCX User Manual (AI generated)</li></ul><h2>17.8. License and Credits</h2><h3>License</h3><p>Copyright © 2025 S. Miller KC1AWV</p><p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p><p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p><p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p><h3>Credits and Acknowledgments</h3><p><strong>Project Author:</strong></p><ul><li>S. Miller KC1AWV - Primary human oversight and maintainer</li></ul><p><strong>Hardware:</strong></p><ul><li>Heltec Automation™ - WiFi LoRa 32 V3/V4 boards</li><li>Semtech - SX1262 LoRa radio chipset</li></ul><p><strong>Software Libraries:</strong></p><ul><li><strong>RadioLib</strong> (v7.4.0) - LoRa radio control and modulation</li><li><strong>U8g2</strong> (v2.35.30) - OLED display driver</li><li><strong>ESPAsyncWebServer</strong> (v3.6.0) - Asynchronous HTTP server</li><li><strong>ArduinoJson</strong> (v7.0.0) - JSON parsing and generation</li><li><strong>TinyGPSPlus</strong> (v1.1.0) - NMEA sentence parsing</li></ul><p><strong>Development Tools:</strong></p><ul><li><strong>PlatformIO</strong> - Build system and IDE integration</li><li><strong>Arduino Framework</strong> - ESP32 development framework</li><li><strong>FreeRTOS</strong> - Real-time operating system</li></ul><p><strong>Testing and Validation:</strong></p><ul><li>Python serial communication libraries</li><li>KISS protocol test frameworks</li><li>Amateur radio community testing</li></ul><p><strong>Documentation:</strong></p><ul><li>Comprehensive user manual with 17 detailed sections</li><li>API reference and protocol documentation</li><li>Factory test procedures and troubleshooting guides</li></ul><h3>Contributing</h3><p>LoRaTNCX is an open-source project released under the MIT License. Contributions are welcome and encouraged. Please see Section 16 (Development and Customization) for detailed contribution guidelines.</p><p><strong>Ways to Contribute:</strong></p><ul><li>Bug reports and feature requests</li><li>Code contributions and improvements</li><li>Documentation updates and translations</li><li>Hardware testing and validation</li><li>Community support and tutorials</li></ul><h3>Disclaimer</h3><p>This software is provided for experimental and educational purposes in the Amateur Radio service. Users are responsible for compliance with all applicable laws, regulations, and licensing requirements in their jurisdiction.</p><p><strong>Important Safety Notice:</strong></p><ul><li>Amateur Radio operation requires appropriate licensing</li><li>LoRaTNCX is not certified for commercial or critical applications</li><li>Users assume all responsibility for proper operation and compliance</li></ul><hr><p><strong>This concludes the LoRaTNCX User Manual.</strong></p><hr><p><a href="development-customization">← Previous: Development and Customization</a> | <a href="/manual">Back to Main Manual</a></p>`,188),Ip=[xp],Np=pe({__name:"17-appendices",setup(e,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,o)=>($(),te("div",Ep,Ip))}}),qp=[{path:"/",component:Fd},{path:"/flash",component:gu},{path:"/manual",component:nu,children:[{path:"",component:Su},{path:"introduction",component:Cu},{path:"getting-started",component:Au},{path:"hardware-overview",component:xu},{path:"software-architecture",component:ku},{path:"installation-setup",component:Ou},{path:"configuration",component:Vu},{path:"lora-radio-configuration",component:Xu},{path:"wifi-networking",component:ju},{path:"web-interface",component:Zu},{path:"kiss-protocol-usage",component:op},{path:"gnss-support",component:ap},{path:"applications-integration",component:up},{path:"testing-validation",component:hp},{path:"troubleshooting",component:bp},{path:"advanced-topics",component:wp},{path:"development-customization",component:Tp},{path:"appendices",component:Np}]},{path:"/:path(.*)",component:Vd}],_s=Qc({history:Tc("/"),routes:qp}),Cs=$l(rd);Cs.use(_s);const eo=window.location.search;if(eo&&eo.startsWith("?/")){const e=eo.slice(2).split("&")[0];_s.push(e),window.history.replaceState(null,"",e)}Cs.mount("#app");export{ei as _};
