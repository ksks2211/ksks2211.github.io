const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Layout-C7_EAbYC.js","assets/index-DyaJpTGQ.js","assets/index-CA6Ueer2.css","assets/index-B-4LrsjG.js","assets/useTheme-DBirkZFE.js","assets/MainPage-WpgH69vN.js","assets/stringUtils-AV9mQpy6.js","assets/index-BI7cPHsf.js","assets/Container-CBOoJQ6I.js","assets/proxy-CfqvhCh-.js","assets/CityDetailsPage-Cv4JEXTa.js","assets/useTocNavigation-CUOiTL1Q.js","assets/NotFoundPage-DqOZVSX4.js"])))=>i.map(i=>d[i]);
var Wt=t=>{throw TypeError(t)};var vt=(t,e,r)=>e.has(t)||Wt("Cannot "+r);var o=(t,e,r)=>(vt(t,e,"read from private field"),r?r.call(t):e.get(t)),O=(t,e,r)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),b=(t,e,r,n)=>(vt(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),m=(t,e,r)=>(vt(t,e,"access private method"),r);import{S as Qe,r as $,s as At,a as lt,n as He,i as Yt,b as qt,t as Ke,f as We,c as Ye,d as Xt,e as me,g as A,u as qe,h as ft,j as Lt,k as Ft,l as ot,m as B,o as rt,p as Xe,q as Ze,v as Je,w as we,x as Ve,M as ke,y as p,L as Ae,E as Zt,z as Ee,A as tr,B as er,C as Oe,_ as dt,R as rr,D as q,F as ut}from"./index-DyaJpTGQ.js";var R,h,it,T,G,X,I,at,Z,J,Q,H,U,V,g,tt,Et,Ot,Tt,xt,Rt,Ct,St,Te,be,nr=(be=class extends Qe{constructor(e,r){super();O(this,g);O(this,R);O(this,h);O(this,it);O(this,T);O(this,G);O(this,X);O(this,I);O(this,at);O(this,Z);O(this,J);O(this,Q);O(this,H);O(this,U);O(this,V,new Set);this.options=r,b(this,R,e),b(this,I,null),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(o(this,h).addObserver(this),Jt(o(this,h),this.options)?m(this,g,tt).call(this):this.updateResult(),m(this,g,xt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Pt(o(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Pt(o(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,m(this,g,Rt).call(this),m(this,g,Ct).call(this),o(this,h).removeObserver(this)}setOptions(e,r){const n=this.options,i=o(this,h);if(this.options=o(this,R).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof $(this.options.enabled,o(this,h))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");m(this,g,St).call(this),o(this,h).setOptions(this.options),n._defaulted&&!At(this.options,n)&&o(this,R).getQueryCache().notify({type:"observerOptionsUpdated",query:o(this,h),observer:this});const s=this.hasListeners();s&&Vt(o(this,h),i,this.options,n)&&m(this,g,tt).call(this),this.updateResult(r),s&&(o(this,h)!==i||$(this.options.enabled,o(this,h))!==$(n.enabled,o(this,h))||lt(this.options.staleTime,o(this,h))!==lt(n.staleTime,o(this,h)))&&m(this,g,Et).call(this);const a=m(this,g,Ot).call(this);s&&(o(this,h)!==i||$(this.options.enabled,o(this,h))!==$(n.enabled,o(this,h))||a!==o(this,U))&&m(this,g,Tt).call(this,a)}getOptimisticResult(e){const r=o(this,R).getQueryCache().build(o(this,R),e),n=this.createResult(r,e);return ir(this,n)&&(b(this,T,n),b(this,X,this.options),b(this,G,o(this,h).state)),n}getCurrentResult(){return o(this,T)}trackResult(e,r){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),r==null||r(i),e[i])})}),n}trackProp(e){o(this,V).add(e)}getCurrentQuery(){return o(this,h)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const r=o(this,R).defaultQueryOptions(e),n=o(this,R).getQueryCache().build(o(this,R),r);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,r))}fetch(e){return m(this,g,tt).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),o(this,T)))}createResult(e,r){var Kt;const n=o(this,h),i=this.options,s=o(this,T),a=o(this,G),u=o(this,X),l=e!==n?e.state:o(this,it),{state:y}=e;let c={...y},d=!1,v;if(r._optimisticResults){const C=this.hasListeners(),_t=!C&&Jt(e,r),Ge=C&&Vt(e,n,r,i);(_t||Ge)&&(c={...c,...Ye(y.data,e.options)}),r._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:w,errorUpdatedAt:x,status:E}=c;if(r.select&&c.data!==void 0)if(s&&c.data===(a==null?void 0:a.data)&&r.select===o(this,at))v=o(this,Z);else try{b(this,at,r.select),v=r.select(c.data),v=Xt(s==null?void 0:s.data,v,r),b(this,Z,v),b(this,I,null)}catch(C){b(this,I,C)}else v=c.data;if(r.placeholderData!==void 0&&v===void 0&&E==="pending"){let C;if(s!=null&&s.isPlaceholderData&&r.placeholderData===(u==null?void 0:u.placeholderData))C=s.data;else if(C=typeof r.placeholderData=="function"?r.placeholderData((Kt=o(this,J))==null?void 0:Kt.state.data,o(this,J)):r.placeholderData,r.select&&C!==void 0)try{C=r.select(C),b(this,I,null)}catch(_t){b(this,I,_t)}C!==void 0&&(E="success",v=Xt(s==null?void 0:s.data,C,r),d=!0)}o(this,I)&&(w=o(this,I),v=o(this,Z),x=Date.now(),E="error");const S=c.fetchStatus==="fetching",P=E==="pending",Y=E==="error",N=P&&S,z=v!==void 0;return{status:E,fetchStatus:c.fetchStatus,isPending:P,isSuccess:E==="success",isError:Y,isInitialLoading:N,isLoading:N,data:v,dataUpdatedAt:c.dataUpdatedAt,error:w,errorUpdatedAt:x,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>l.dataUpdateCount||c.errorUpdateCount>l.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:Y&&!z,isPaused:c.fetchStatus==="paused",isPlaceholderData:d,isRefetchError:Y&&z,isStale:Ut(e,r),refetch:this.refetch}}updateResult(e){const r=o(this,T),n=this.createResult(o(this,h),this.options);if(b(this,G,o(this,h).state),b(this,X,this.options),o(this,G).data!==void 0&&b(this,J,o(this,h)),At(n,r))return;b(this,T,n);const i={},s=()=>{if(!r)return!0;const{notifyOnChangeProps:a}=this.options,u=typeof a=="function"?a():a;if(u==="all"||!u&&!o(this,V).size)return!0;const f=new Set(u??o(this,V));return this.options.throwOnError&&f.add("error"),Object.keys(o(this,T)).some(l=>{const y=l;return o(this,T)[y]!==r[y]&&f.has(y)})};(e==null?void 0:e.listeners)!==!1&&s()&&(i.listeners=!0),m(this,g,Te).call(this,{...i,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&m(this,g,xt).call(this)}},R=new WeakMap,h=new WeakMap,it=new WeakMap,T=new WeakMap,G=new WeakMap,X=new WeakMap,I=new WeakMap,at=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,H=new WeakMap,U=new WeakMap,V=new WeakMap,g=new WeakSet,tt=function(e){m(this,g,St).call(this);let r=o(this,h).fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(He)),r},Et=function(){m(this,g,Rt).call(this);const e=lt(this.options.staleTime,o(this,h));if(Yt||o(this,T).isStale||!qt(e))return;const n=Ke(o(this,T).dataUpdatedAt,e)+1;b(this,Q,setTimeout(()=>{o(this,T).isStale||this.updateResult()},n))},Ot=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(o(this,h)):this.options.refetchInterval)??!1},Tt=function(e){m(this,g,Ct).call(this),b(this,U,e),!(Yt||$(this.options.enabled,o(this,h))===!1||!qt(o(this,U))||o(this,U)===0)&&b(this,H,setInterval(()=>{(this.options.refetchIntervalInBackground||We.isFocused())&&m(this,g,tt).call(this)},o(this,U)))},xt=function(){m(this,g,Et).call(this),m(this,g,Tt).call(this,m(this,g,Ot).call(this))},Rt=function(){o(this,Q)&&(clearTimeout(o(this,Q)),b(this,Q,void 0))},Ct=function(){o(this,H)&&(clearInterval(o(this,H)),b(this,H,void 0))},St=function(){const e=o(this,R).getQueryCache().build(o(this,R),this.options);if(e===o(this,h))return;const r=o(this,h);b(this,h,e),b(this,it,e.state),this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))},Te=function(e){me.batch(()=>{e.listeners&&this.listeners.forEach(r=>{r(o(this,T))}),o(this,R).getQueryCache().notify({query:o(this,h),type:"observerResultsUpdated"})})},be);function sr(t,e){return $(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Jt(t,e){return sr(t,e)||t.state.data!==void 0&&Pt(t,e,e.refetchOnMount)}function Pt(t,e,r){if($(e.enabled,t)!==!1){const n=typeof r=="function"?r(t):r;return n==="always"||n!==!1&&Ut(t,e)}return!1}function Vt(t,e,r,n){return(t!==e||$(n.enabled,t)===!1)&&(!r.suspense||t.state.status!=="error")&&Ut(t,r)}function Ut(t,e){return $(e.enabled,t)!==!1&&t.isStaleByTime(lt(e.staleTime,t))}function ir(t,e){return!At(t.getCurrentResult(),e)}var xe=A.createContext(!1),ar=()=>A.useContext(xe);xe.Provider;function or(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var ur=A.createContext(or()),cr=()=>A.useContext(ur);function lr(t,e){return typeof t=="function"?t(...e):!!t}var fr=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},hr=t=>{A.useEffect(()=>{t.clearReset()},[t])},dr=({result:t,errorResetBoundary:e,throwOnError:r,query:n})=>t.isError&&!e.isReset()&&!t.isFetching&&n&&lr(r,[t.error,n]),pr=t=>{t.suspense&&(typeof t.staleTime!="number"&&(t.staleTime=1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},gr=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,yr=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()});function _r(t,e,r){var l,y,c,d;const n=qe(),i=ar(),s=cr(),a=n.defaultQueryOptions(t);(y=(l=n.getDefaultOptions().queries)==null?void 0:l._experimental_beforeQuery)==null||y.call(l,a),a._optimisticResults=i?"isRestoring":"optimistic",pr(a),fr(a,s),hr(s);const[u]=A.useState(()=>new e(n,a)),f=u.getOptimisticResult(a);if(A.useSyncExternalStore(A.useCallback(v=>{const w=i?()=>{}:u.subscribe(me.batchCalls(v));return u.updateResult(),w},[u,i]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),A.useEffect(()=>{u.setOptions(a,{listeners:!1})},[a,u]),gr(a,f))throw yr(a,u,s);if(dr({result:f,errorResetBoundary:s,throwOnError:a.throwOnError,query:n.getQueryCache().get(a.queryHash)}))throw f.error;return(d=(c=n.getDefaultOptions().queries)==null?void 0:c._experimental_afterQuery)==null||d.call(c,a,f),a.notifyOnChangeProps?f:u.trackResult(f)}function vr(t,e){return _r(t,nr)}function Re(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var M=Array.isArray,br=1/0,kt=ft?ft.prototype:void 0,te=kt?kt.toString:void 0;function Ce(t){if(typeof t=="string")return t;if(M(t))return Re(t,Ce)+"";if(Lt(t))return te?te.call(t):"";var e=t+"";return e=="0"&&1/t==-br?"-0":e}function mr(t){return t}var wr="[object AsyncFunction]",Ar="[object Function]",Er="[object GeneratorFunction]",Or="[object Proxy]";function Se(t){if(!Ft(t))return!1;var e=ot(t);return e==Ar||e==Er||e==wr||e==Or}var bt=B["__core-js_shared__"],ee=function(){var t=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Tr(t){return!!ee&&ee in t}var xr=Function.prototype,Rr=xr.toString;function W(t){if(t!=null){try{return Rr.call(t)}catch{}try{return t+""}catch{}}return""}var Cr=/[\\^$.*+?()[\]{}|]/g,Sr=/^\[object .+?Constructor\]$/,Pr=Function.prototype,Ir=Object.prototype,$r=Pr.toString,Mr=Ir.hasOwnProperty,jr=RegExp("^"+$r.call(Mr).replace(Cr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Dr(t){if(!Ft(t)||Tr(t))return!1;var e=Se(t)?jr:Sr;return e.test(W(t))}function Lr(t,e){return t==null?void 0:t[e]}function k(t,e){var r=Lr(t,e);return Dr(r)?r:void 0}var It=k(B,"WeakMap"),Fr=9007199254740991,Ur=/^(?:0|[1-9]\d*)$/;function Pe(t,e){var r=typeof t;return e=e??Fr,!!e&&(r=="number"||r!="symbol"&&Ur.test(t))&&t>-1&&t%1==0&&t<e}function Ie(t,e){return t===e||t!==t&&e!==e}var Br=9007199254740991;function Bt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Br}function Nt(t){return t!=null&&Bt(t.length)&&!Se(t)}var Nr=Object.prototype;function zr(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Nr;return t===r}function Gr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Qr="[object Arguments]";function re(t){return rt(t)&&ot(t)==Qr}var $e=Object.prototype,Hr=$e.hasOwnProperty,Kr=$e.propertyIsEnumerable,Me=re(function(){return arguments}())?re:function(t){return rt(t)&&Hr.call(t,"callee")&&!Kr.call(t,"callee")};function Wr(){return!1}var je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=je&&typeof module=="object"&&module&&!module.nodeType&&module,Yr=ne&&ne.exports===je,se=Yr?B.Buffer:void 0,qr=se?se.isBuffer:void 0,$t=qr||Wr,Xr="[object Arguments]",Zr="[object Array]",Jr="[object Boolean]",Vr="[object Date]",kr="[object Error]",tn="[object Function]",en="[object Map]",rn="[object Number]",nn="[object Object]",sn="[object RegExp]",an="[object Set]",on="[object String]",un="[object WeakMap]",cn="[object ArrayBuffer]",ln="[object DataView]",fn="[object Float32Array]",hn="[object Float64Array]",dn="[object Int8Array]",pn="[object Int16Array]",gn="[object Int32Array]",yn="[object Uint8Array]",_n="[object Uint8ClampedArray]",vn="[object Uint16Array]",bn="[object Uint32Array]",_={};_[fn]=_[hn]=_[dn]=_[pn]=_[gn]=_[yn]=_[_n]=_[vn]=_[bn]=!0;_[Xr]=_[Zr]=_[cn]=_[Jr]=_[ln]=_[Vr]=_[kr]=_[tn]=_[en]=_[rn]=_[nn]=_[sn]=_[an]=_[on]=_[un]=!1;function mn(t){return rt(t)&&Bt(t.length)&&!!_[ot(t)]}function wn(t){return function(e){return t(e)}}var De=typeof exports=="object"&&exports&&!exports.nodeType&&exports,et=De&&typeof module=="object"&&module&&!module.nodeType&&module,An=et&&et.exports===De,mt=An&&Xe.process,ie=function(){try{var t=et&&et.require&&et.require("util").types;return t||mt&&mt.binding&&mt.binding("util")}catch{}}(),ae=ie&&ie.isTypedArray,Le=ae?wn(ae):mn,En=Object.prototype,On=En.hasOwnProperty;function Tn(t,e){var r=M(t),n=!r&&Me(t),i=!r&&!n&&$t(t),s=!r&&!n&&!i&&Le(t),a=r||n||i||s,u=a?Gr(t.length,String):[],f=u.length;for(var l in t)On.call(t,l)&&!(a&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Pe(l,f)))&&u.push(l);return u}function xn(t,e){return function(r){return t(e(r))}}var Rn=xn(Object.keys,Object),Cn=Object.prototype,Sn=Cn.hasOwnProperty;function Pn(t){if(!zr(t))return Rn(t);var e=[];for(var r in Object(t))Sn.call(t,r)&&r!="constructor"&&e.push(r);return e}function zt(t){return Nt(t)?Tn(t):Pn(t)}var In=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$n=/^\w*$/;function Gt(t,e){if(M(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Lt(t)?!0:$n.test(t)||!In.test(t)||e!=null&&t in Object(e)}var nt=k(Object,"create");function Mn(){this.__data__=nt?nt(null):{},this.size=0}function jn(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Dn="__lodash_hash_undefined__",Ln=Object.prototype,Fn=Ln.hasOwnProperty;function Un(t){var e=this.__data__;if(nt){var r=e[t];return r===Dn?void 0:r}return Fn.call(e,t)?e[t]:void 0}var Bn=Object.prototype,Nn=Bn.hasOwnProperty;function zn(t){var e=this.__data__;return nt?e[t]!==void 0:Nn.call(e,t)}var Gn="__lodash_hash_undefined__";function Qn(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=nt&&e===void 0?Gn:e,this}function K(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}K.prototype.clear=Mn;K.prototype.delete=jn;K.prototype.get=Un;K.prototype.has=zn;K.prototype.set=Qn;function Hn(){this.__data__=[],this.size=0}function pt(t,e){for(var r=t.length;r--;)if(Ie(t[r][0],e))return r;return-1}var Kn=Array.prototype,Wn=Kn.splice;function Yn(t){var e=this.__data__,r=pt(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Wn.call(e,r,1),--this.size,!0}function qn(t){var e=this.__data__,r=pt(e,t);return r<0?void 0:e[r][1]}function Xn(t){return pt(this.__data__,t)>-1}function Zn(t,e){var r=this.__data__,n=pt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function D(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}D.prototype.clear=Hn;D.prototype.delete=Yn;D.prototype.get=qn;D.prototype.has=Xn;D.prototype.set=Zn;var st=k(B,"Map");function Jn(){this.size=0,this.__data__={hash:new K,map:new(st||D),string:new K}}function Vn(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function gt(t,e){var r=t.__data__;return Vn(e)?r[typeof e=="string"?"string":"hash"]:r.map}function kn(t){var e=gt(this,t).delete(t);return this.size-=e?1:0,e}function ts(t){return gt(this,t).get(t)}function es(t){return gt(this,t).has(t)}function rs(t,e){var r=gt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function L(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}L.prototype.clear=Jn;L.prototype.delete=kn;L.prototype.get=ts;L.prototype.has=es;L.prototype.set=rs;var ns="Expected a function";function Qt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(ns);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var a=t.apply(this,n);return r.cache=s.set(i,a)||s,a};return r.cache=new(Qt.Cache||L),r}Qt.Cache=L;var ss=500;function is(t){var e=Qt(t,function(n){return r.size===ss&&r.clear(),n}),r=e.cache;return e}var as=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,os=/\\(\\)?/g,us=is(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(as,function(r,n,i,s){e.push(i?s.replace(os,"$1"):n||r)}),e});function cs(t){return t==null?"":Ce(t)}function Fe(t,e){return M(t)?t:Gt(t,e)?[t]:us(cs(t))}var ls=1/0;function yt(t){if(typeof t=="string"||Lt(t))return t;var e=t+"";return e=="0"&&1/t==-ls?"-0":e}function Ue(t,e){e=Fe(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[yt(e[r++])];return r&&r==n?t:void 0}function fs(t,e,r){var n=t==null?void 0:Ue(t,e);return n===void 0?r:n}function hs(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}function ds(){this.__data__=new D,this.size=0}function ps(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function gs(t){return this.__data__.get(t)}function ys(t){return this.__data__.has(t)}var _s=200;function vs(t,e){var r=this.__data__;if(r instanceof D){var n=r.__data__;if(!st||n.length<_s-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new L(n)}return r.set(t,e),this.size=r.size,this}function j(t){var e=this.__data__=new D(t);this.size=e.size}j.prototype.clear=ds;j.prototype.delete=ps;j.prototype.get=gs;j.prototype.has=ys;j.prototype.set=vs;function bs(t,e){for(var r=-1,n=t==null?0:t.length,i=0,s=[];++r<n;){var a=t[r];e(a,r,t)&&(s[i++]=a)}return s}function ms(){return[]}var ws=Object.prototype,As=ws.propertyIsEnumerable,oe=Object.getOwnPropertySymbols,Es=oe?function(t){return t==null?[]:(t=Object(t),bs(oe(t),function(e){return As.call(t,e)}))}:ms;function Os(t,e,r){var n=e(t);return M(t)?n:hs(n,r(t))}function ue(t){return Os(t,zt,Es)}var Mt=k(B,"DataView"),jt=k(B,"Promise"),Dt=k(B,"Set"),ce="[object Map]",Ts="[object Object]",le="[object Promise]",fe="[object Set]",he="[object WeakMap]",de="[object DataView]",xs=W(Mt),Rs=W(st),Cs=W(jt),Ss=W(Dt),Ps=W(It),F=ot;(Mt&&F(new Mt(new ArrayBuffer(1)))!=de||st&&F(new st)!=ce||jt&&F(jt.resolve())!=le||Dt&&F(new Dt)!=fe||It&&F(new It)!=he)&&(F=function(t){var e=ot(t),r=e==Ts?t.constructor:void 0,n=r?W(r):"";if(n)switch(n){case xs:return de;case Rs:return ce;case Cs:return le;case Ss:return fe;case Ps:return he}return e});var pe=B.Uint8Array,Is="__lodash_hash_undefined__";function $s(t){return this.__data__.set(t,Is),this}function Ms(t){return this.__data__.has(t)}function ht(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new L;++e<r;)this.add(t[e])}ht.prototype.add=ht.prototype.push=$s;ht.prototype.has=Ms;function js(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function Ds(t,e){return t.has(e)}var Ls=1,Fs=2;function Be(t,e,r,n,i,s){var a=r&Ls,u=t.length,f=e.length;if(u!=f&&!(a&&f>u))return!1;var l=s.get(t),y=s.get(e);if(l&&y)return l==e&&y==t;var c=-1,d=!0,v=r&Fs?new ht:void 0;for(s.set(t,e),s.set(e,t);++c<u;){var w=t[c],x=e[c];if(n)var E=a?n(x,w,c,e,t,s):n(w,x,c,t,e,s);if(E!==void 0){if(E)continue;d=!1;break}if(v){if(!js(e,function(S,P){if(!Ds(v,P)&&(w===S||i(w,S,r,n,s)))return v.push(P)})){d=!1;break}}else if(!(w===x||i(w,x,r,n,s))){d=!1;break}}return s.delete(t),s.delete(e),d}function Us(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}function Bs(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Ns=1,zs=2,Gs="[object Boolean]",Qs="[object Date]",Hs="[object Error]",Ks="[object Map]",Ws="[object Number]",Ys="[object RegExp]",qs="[object Set]",Xs="[object String]",Zs="[object Symbol]",Js="[object ArrayBuffer]",Vs="[object DataView]",ge=ft?ft.prototype:void 0,wt=ge?ge.valueOf:void 0;function ks(t,e,r,n,i,s,a){switch(r){case Vs:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Js:return!(t.byteLength!=e.byteLength||!s(new pe(t),new pe(e)));case Gs:case Qs:case Ws:return Ie(+t,+e);case Hs:return t.name==e.name&&t.message==e.message;case Ys:case Xs:return t==e+"";case Ks:var u=Us;case qs:var f=n&Ns;if(u||(u=Bs),t.size!=e.size&&!f)return!1;var l=a.get(t);if(l)return l==e;n|=zs,a.set(t,e);var y=Be(u(t),u(e),n,i,s,a);return a.delete(t),y;case Zs:if(wt)return wt.call(t)==wt.call(e)}return!1}var ti=1,ei=Object.prototype,ri=ei.hasOwnProperty;function ni(t,e,r,n,i,s){var a=r&ti,u=ue(t),f=u.length,l=ue(e),y=l.length;if(f!=y&&!a)return!1;for(var c=f;c--;){var d=u[c];if(!(a?d in e:ri.call(e,d)))return!1}var v=s.get(t),w=s.get(e);if(v&&w)return v==e&&w==t;var x=!0;s.set(t,e),s.set(e,t);for(var E=a;++c<f;){d=u[c];var S=t[d],P=e[d];if(n)var Y=a?n(P,S,d,e,t,s):n(S,P,d,t,e,s);if(!(Y===void 0?S===P||i(S,P,r,n,s):Y)){x=!1;break}E||(E=d=="constructor")}if(x&&!E){var N=t.constructor,z=e.constructor;N!=z&&"constructor"in t&&"constructor"in e&&!(typeof N=="function"&&N instanceof N&&typeof z=="function"&&z instanceof z)&&(x=!1)}return s.delete(t),s.delete(e),x}var si=1,ye="[object Arguments]",_e="[object Array]",ct="[object Object]",ii=Object.prototype,ve=ii.hasOwnProperty;function ai(t,e,r,n,i,s){var a=M(t),u=M(e),f=a?_e:F(t),l=u?_e:F(e);f=f==ye?ct:f,l=l==ye?ct:l;var y=f==ct,c=l==ct,d=f==l;if(d&&$t(t)){if(!$t(e))return!1;a=!0,y=!1}if(d&&!y)return s||(s=new j),a||Le(t)?Be(t,e,r,n,i,s):ks(t,e,f,r,n,i,s);if(!(r&si)){var v=y&&ve.call(t,"__wrapped__"),w=c&&ve.call(e,"__wrapped__");if(v||w){var x=v?t.value():t,E=w?e.value():e;return s||(s=new j),i(x,E,r,n,s)}}return d?(s||(s=new j),ni(t,e,r,n,i,s)):!1}function Ht(t,e,r,n,i){return t===e?!0:t==null||e==null||!rt(t)&&!rt(e)?t!==t&&e!==e:ai(t,e,r,n,Ht,i)}var oi=1,ui=2;function ci(t,e,r,n){var i=r.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var a=r[i];if(a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<s;){a=r[i];var u=a[0],f=t[u],l=a[1];if(a[2]){if(f===void 0&&!(u in t))return!1}else{var y=new j,c;if(!(c===void 0?Ht(l,f,oi|ui,n,y):c))return!1}}return!0}function Ne(t){return t===t&&!Ft(t)}function li(t){for(var e=zt(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,Ne(i)]}return e}function ze(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}function fi(t){var e=li(t);return e.length==1&&e[0][2]?ze(e[0][0],e[0][1]):function(r){return r===t||ci(r,t,e)}}function hi(t,e){return t!=null&&e in Object(t)}function di(t,e,r){e=Fe(e,t);for(var n=-1,i=e.length,s=!1;++n<i;){var a=yt(e[n]);if(!(s=t!=null&&r(t,a)))break;t=t[a]}return s||++n!=i?s:(i=t==null?0:t.length,!!i&&Bt(i)&&Pe(a,i)&&(M(t)||Me(t)))}function pi(t,e){return t!=null&&di(t,e,hi)}var gi=1,yi=2;function _i(t,e){return Gt(t)&&Ne(e)?ze(yt(t),e):function(r){var n=fs(r,t);return n===void 0&&n===e?pi(r,t):Ht(e,n,gi|yi)}}function vi(t){return function(e){return e==null?void 0:e[t]}}function bi(t){return function(e){return Ue(e,t)}}function mi(t){return Gt(t)?vi(yt(t)):bi(t)}function wi(t){return typeof t=="function"?t:t==null?mr:typeof t=="object"?M(t)?_i(t[0],t[1]):fi(t):mi(t)}function Ai(t){return function(e,r,n){for(var i=-1,s=Object(e),a=n(e),u=a.length;u--;){var f=a[++i];if(r(s[f],f,s)===!1)break}return e}}var Ei=Ai();function Oi(t,e){return t&&Ei(t,e,zt)}function Ti(t,e){return function(r,n){if(r==null)return r;if(!Nt(r))return t(r,n);for(var i=r.length,s=-1,a=Object(r);++s<i&&n(a[s],s,a)!==!1;);return r}}var xi=Ti(Oi);function Ri(t,e){var r=-1,n=Nt(t)?Array(t.length):[];return xi(t,function(i,s,a){n[++r]=e(i,s,a)}),n}function Ci(t,e){var r=M(t)?Re:Ri;return r(t,wi(e))}const Si=t=>{const{scrollBarWidth:e}=Ze();A.useLayoutEffect(()=>{if(document.body.scrollHeight>window.innerHeight&&t){const{overflow:n,marginRight:i}=window.getComputedStyle(document.body);return document.body.style.overflow="hidden",document.body.style.marginRight=`${e}px`,()=>{document.body.style.overflow=n,document.body.style.marginRight=i}}},[t,e])};async function Pi(t){const e=Je[t].getCityDemographics;try{const{data:r}=await we.get(e);return r}catch(r){const n=r instanceof Error?r.message:"An unknown error occurred";throw console.error(r),new Error(n)}}async function Yi(){const t=Ve.getMenu;try{const{data:e}=await we.get(t);return e}catch(e){const r=e instanceof Error?e.message:"An unknown error occurred";throw console.error(e),new Error(r)}}const Ii=()=>{const t=A.useContext(ke);if(!t)throw new Error("Modal Context is not found!");return t};function $i(t){return vr({queryKey:["city",t],queryFn:()=>Pi(t),staleTime:1/0,enabled:!!t})}function Mi(t){return new Intl.NumberFormat("en-US").format(t)}function ji(t){if(t.length===0)throw new Error("Array is empty");return t.sort(),{startAt:t[0],endAt:t[t.length-1]}}function qi(t){const e=t.match(/\d+/)||["0"];return parseFloat(e[0])}function Di({query:t,Component:e,...r}){const{isLoading:n,error:i,data:s,refetch:a}=t;return n?p.jsx(Ae,{}):i?p.jsx(Zt,{error:i,resetErrorBoundary:a}):s===void 0?p.jsx(Zt,{error:new Error("Not Found"),resetErrorBoundary:a}):p.jsx(e,{data:s,...r})}function Li({data:t}){const{populations:e}=t,{startAt:r,endAt:n}=ji(Ci(e,"Year")),{openModal:i,isModalVisible:s,closeModal:a,setIsUserTriggered:u}=Ii();Si(s);const{search:f}=Ee(),[l]=tr(),y=er();A.useEffect(()=>{const d=l.get("id");d===null&&s?a():d!==null&&!s&&(console.log("Open modal"),i(p.jsx("h3",{children:"What I passed to the modal"})))},[a,s,f,y,i,l]);const c=()=>{l.set("id","123"),y(`?${l.toString()}`,{replace:!1}),u(!0)};return p.jsxs("div",{children:[p.jsxs("h1",{children:["Population of Seoul (",r," ~ ",n,")"]}),e.map(d=>p.jsxs("div",{children:[d.Year," : ",Mi(d.Population)]},d.Year)),p.jsx(Oe,{to:"/",children:"Main"}),p.jsx("button",{onClick:c,children:"Modal"})]})}function Fi(){const t=$i("seoul");return p.jsx(Di,{query:t,Component:Li})}const Ui=A.lazy(()=>dt(()=>import("./Layout-C7_EAbYC.js").then(t=>t.L),__vite__mapDeps([0,1,2,3,4]))),Bi=A.lazy(()=>dt(()=>import("./MainPage-WpgH69vN.js"),__vite__mapDeps([5,1,2,6,3,7,8,9]))),Ni=A.lazy(()=>dt(()=>import("./CityDetailsPage-Cv4JEXTa.js"),__vite__mapDeps([10,1,2,6,11,7,4]))),zi=A.lazy(()=>dt(()=>import("./NotFoundPage-DqOZVSX4.js"),__vite__mapDeps([12,1,2]))),Gi=()=>{const{pathname:t}=Ee();A.useEffect(()=>(window.history.scrollRestoration="manual",window.scrollTo({top:0,behavior:"instant"}),()=>{window.history.scrollRestoration="auto"}),[t])},Qi=()=>(Gi(),p.jsxs(rr,{children:[p.jsxs(q,{path:"/",element:p.jsx(ut,{children:p.jsx(Ui,{})}),children:[p.jsx(q,{index:!0,element:p.jsx(ut,{children:p.jsx(Bi,{})})}),p.jsx(q,{path:"/:city",element:p.jsx(ut,{children:p.jsx(Ni,{})})}),p.jsx(q,{path:"example",element:p.jsxs("div",{children:[p.jsx(Oe,{to:"/demographics",children:"demographics"}),p.jsx(Ae,{})]})}),p.jsx(q,{path:"demographics",element:p.jsx(Fi,{})})]}),p.jsx(q,{path:"*",element:p.jsx(ut,{children:p.jsx(zi,{})})})]})),Xi=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"}));export{Xi as A,Di as Q,Nt as a,Pe as b,Ie as c,M as d,qi as e,Me as f,k as g,hs as h,mr as i,Re as j,Ue as k,wn as l,Ri as m,wi as n,vr as o,Yi as p,cs as t,Si as u};
