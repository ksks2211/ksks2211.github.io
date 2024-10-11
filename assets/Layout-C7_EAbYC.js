const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Header-4t37lzT8.js","assets/index-DyaJpTGQ.js","assets/index-CA6Ueer2.css","assets/index-B-4LrsjG.js","assets/useTheme-DBirkZFE.js","assets/AppRoutes-C5O3_JXX.js","assets/Navbar-D5ZJ-Jmt.js","assets/stringUtils-AV9mQpy6.js","assets/proxy-CfqvhCh-.js","assets/Sidebar-C0QY2uDJ.js","assets/useTocNavigation-CUOiTL1Q.js","assets/Footer-DyLuvslE.js","assets/Container-CBOoJQ6I.js"])))=>i.map(i=>d[i]);
import{g as f,G as Z,H as S,I as P,J as w,K as Y,N as R,O as j,P as $,Q as I,T as M,U as q,V as h,W as v,X as ee,y as d,Y as X,Z as U,$ as te,a0 as ne,a1 as se,_ as O,a2 as re,F as k,a3 as ae}from"./index-DyaJpTGQ.js";import{g as oe,c as T}from"./index-B-4LrsjG.js";import{u as B}from"./useTheme-DBirkZFE.js";import{u as ie}from"./AppRoutes-C5O3_JXX.js";const le=typeof window<"u"?f.useLayoutEffect:f.useEffect;function ce(e,r,o,t,s){const[n,i]=f.useState(()=>s&&o?o(e).matches:t?t(e).matches:r);return le(()=>{if(!o)return;const a=o(e),l=()=>{i(a.matches)};return l(),a.addEventListener("change",l),()=>{a.removeEventListener("change",l)}},[e,o]),n}const F=f.useSyncExternalStore;function de(e,r,o,t,s){const n=f.useCallback(()=>r,[r]),i=f.useMemo(()=>{if(s&&o)return()=>o(e).matches;if(t!==null){const{matches:u}=t(e);return()=>u}return n},[n,e,t,s,o]),[a,l]=f.useMemo(()=>{if(o===null)return[n,()=>()=>{}];const u=o(e);return[()=>u.matches,p=>(u.addEventListener("change",p),()=>{u.removeEventListener("change",p)})]},[n,o,e]);return F(l,a,i)}function m(e,r={}){const o=Z(),t=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:s=!1,matchMedia:n=t?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:a=!1}=oe({name:"MuiUseMediaQuery",props:r,theme:o});let l=typeof e=="function"?e(o):e;return l=l.replace(/^@media( ?)/m,""),(F!==void 0?de:ce)(l,s,n,i,a)}function G(e,r){if(e==null)return{};var o={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(r.includes(t))continue;o[t]=e[t]}return o}function ue(e,r){return e.classList?!!r&&e.classList.contains(r):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+r+" ")!==-1}function pe(e,r){e.classList?e.classList.add(r):ue(e,r)||(typeof e.className=="string"?e.className=e.className+" "+r:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+r))}function A(e,r){return e.replace(new RegExp("(^|\\s)"+r+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function fe(e,r){e.classList?e.classList.remove(r):typeof e.className=="string"?e.className=A(e.className,r):e.setAttribute("class",A(e.className&&e.className.baseVal||"",r))}const H={disabled:!1},Q=S.createContext(null);var W=function(r){return r.scrollTop},C="unmounted",b="exited",E="entering",N="entered",L="exiting",g=function(e){P(r,e);function r(t,s){var n;n=e.call(this,t,s)||this;var i=s,a=i&&!i.isMounting?t.enter:t.appear,l;return n.appearStatus=null,t.in?a?(l=b,n.appearStatus=E):l=N:t.unmountOnExit||t.mountOnEnter?l=C:l=b,n.state={status:l},n.nextCallback=null,n}r.getDerivedStateFromProps=function(s,n){var i=s.in;return i&&n.status===C?{status:b}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(s){var n=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==E&&i!==N&&(n=E):(i===E||i===N)&&(n=L)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var s=this.props.timeout,n,i,a;return n=i=a=s,s!=null&&typeof s!="number"&&(n=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:n,enter:i,appear:a}},o.updateStatus=function(s,n){if(s===void 0&&(s=!1),n!==null)if(this.cancelNextCallback(),n===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this);i&&W(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===b&&this.setState({status:C})},o.performEnter=function(s){var n=this,i=this.props.enter,a=this.context?this.context.isMounting:s,l=this.props.nodeRef?[a]:[w.findDOMNode(this),a],c=l[0],u=l[1],p=this.getTimeouts(),x=a?p.appear:p.enter;if(!s&&!i||H.disabled){this.safeSetState({status:N},function(){n.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:E},function(){n.props.onEntering(c,u),n.onTransitionEnd(x,function(){n.safeSetState({status:N},function(){n.props.onEntered(c,u)})})})},o.performExit=function(){var s=this,n=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:w.findDOMNode(this);if(!n||H.disabled){this.safeSetState({status:b},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:L},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:b},function(){s.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(s,n){n=this.setNextCallback(n),this.setState(s,n)},o.setNextCallback=function(s){var n=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,n.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(s,n){this.setNextCallback(n);var i=this.props.nodeRef?this.props.nodeRef.current:w.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}s!=null&&setTimeout(this.nextCallback,s)},o.render=function(){var s=this.state.status;if(s===C)return null;var n=this.props,i=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=G(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return S.createElement(Q.Provider,{value:null},typeof i=="function"?i(s,a):S.cloneElement(S.Children.only(i),a))},r}(S.Component);g.contextType=Q;g.propTypes={};function y(){}g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y};g.UNMOUNTED=C;g.EXITED=b;g.ENTERING=E;g.ENTERED=N;g.EXITING=L;var he=function(r,o){return r&&o&&o.split(" ").forEach(function(t){return pe(r,t)})},_=function(r,o){return r&&o&&o.split(" ").forEach(function(t){return fe(r,t)})},D=function(e){P(r,e);function r(){for(var t,s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1];t.removeClasses(u,"exit"),t.addClass(u,p?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(a,l)},t.onEntering=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1],x=p?"appear":"enter";t.addClass(u,x,"active"),t.props.onEntering&&t.props.onEntering(a,l)},t.onEntered=function(a,l){var c=t.resolveArguments(a,l),u=c[0],p=c[1],x=p?"appear":"enter";t.removeClasses(u,x),t.addClass(u,x,"done"),t.props.onEntered&&t.props.onEntered(a,l)},t.onExit=function(a){var l=t.resolveArguments(a),c=l[0];t.removeClasses(c,"appear"),t.removeClasses(c,"enter"),t.addClass(c,"exit","base"),t.props.onExit&&t.props.onExit(a)},t.onExiting=function(a){var l=t.resolveArguments(a),c=l[0];t.addClass(c,"exit","active"),t.props.onExiting&&t.props.onExiting(a)},t.onExited=function(a){var l=t.resolveArguments(a),c=l[0];t.removeClasses(c,"exit"),t.addClass(c,"exit","done"),t.props.onExited&&t.props.onExited(a)},t.resolveArguments=function(a,l){return t.props.nodeRef?[t.props.nodeRef.current,a]:[a,l]},t.getClassNames=function(a){var l=t.props.classNames,c=typeof l=="string",u=c&&l?l+"-":"",p=c?""+u+a:l[a],x=c?p+"-active":l[a+"Active"],K=c?p+"-done":l[a+"Done"];return{baseClassName:p,activeClassName:x,doneClassName:K}},t}var o=r.prototype;return o.addClass=function(s,n,i){var a=this.getClassNames(n)[i+"ClassName"],l=this.getClassNames("enter"),c=l.doneClassName;n==="appear"&&i==="done"&&c&&(a+=" "+c),i==="active"&&s&&W(s),a&&(this.appliedClasses[n][i]=a,he(s,a))},o.removeClasses=function(s,n){var i=this.appliedClasses[n],a=i.base,l=i.active,c=i.done;this.appliedClasses[n]={},a&&_(s,a),l&&_(s,l),c&&_(s,c)},o.render=function(){var s=this.props;s.classNames;var n=G(s,["classNames"]);return S.createElement(g,Y({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(S.Component);D.defaultProps={classNames:""};D.propTypes={};function ve(){const e=B(),r=m(e.breakpoints.down("xs")),o=m(e.breakpoints.up("xs")),t=m(e.breakpoints.up("sm")),s=m(e.breakpoints.up("md")),n=m(e.breakpoints.up("lg")),i=m(e.breakpoints.up("xl")),a=m(e.breakpoints.between("xs","sm")),l=m(e.breakpoints.between("sm","md")),c=m(e.breakpoints.between("md","lg"));return{isDownMd:m(e.breakpoints.down("md")),isXs:r,isSm:o,isMd:t,isLg:s,isXl:n,isXXl:i,isXsRange:r,isSmRange:a,isMdRange:l,isLgRange:c,isXlRange:n}}function me(){const e=R(s=>s.layoutState.isHeaderVisible),r=j();return{isHeaderVisible:e,showHeader:()=>{r($(!0))},hideHeader:()=>{r($(!1))}}}function ge(){const e=R(s=>s.layoutState.isNavOpen),r=j();return{isNavOpen:e,closeNav:()=>{r(I(!1))},openNav:()=>{r(I(!0))}}}function xe(){const e=R(s=>s.layoutState.isOverlayOpen),r=j();return{isOverlayOpen:e,openOverlay:()=>{r(M(!0))},closeOverlay:()=>{r(M(!1))}}}function be(e){return q({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}const Ee=h(v)`
  --common-white: ${({theme:e})=>e.palette.common.white};
  --background-color: ${({"data-btn-color":e})=>e};
  --background-color-hover: ${({"data-btn-color":e})=>ee(.15,e)};

  cursor: pointer;
  background-color: var(--background-color);
  &:hover {
    background-color: var(--background-color-hover);
  }
  svg {
    border-radius: 50%;
    display: block;
    width: var(--icon-btn-size);
    height: var(--icon-btn-size);
    padding: var(--icon-btn-padding);
    fill: var(--common-white);
  }
`;function Se({Icon:e,btnColor:r,sx:o,onClick:t,...s}){const n=B(),i=typeof r=="function"?r(n):r;return d.jsx(Ee,{"data-btn-color":i,sx:o,onClick:t,...s,children:d.jsx(e,{})})}const z="30px",ye={position:"fixed",zIndex:10,bottom:z,left:`calc(100vw - ${z} - var(--scrollbar-width))`,transition:"bottom .3s, opacity .3s, transform .3s",WebkitTapHighlightColor:"transparent",WebkitTouchCallout:"none",opacity:0,transform:"scale(.2) translateX(-100%)",transformOrigin:"-50% 50%",borderRadius:"50%","&.btn-appear":{transform:"scale(1.1) translateX(-100%)",opacity:1}},Ne=500;function Ce({targetEl:e}){const[r,o]=f.useState(!1),{scrollY:t}=X();f.useEffect(()=>{t>Ne?o(!0):o(!1)},[t]);const s=()=>{e===void 0&&(e=window),e==null||e.scrollTo({top:0,behavior:"smooth"})};return d.jsx(Se,{Icon:be,btnColor:n=>n.custom.accentColor,className:T({"btn-appear":r}),sx:ye,onClick:s})}const we=h(v)`
  width: 100%;
  flex-shrink: 0;
`;function ke({children:e}){return d.jsx(we,{children:e})}const V=30,Oe=h(v)`
  width: 100%;
  min-height: var(--header-height);

  position: sticky;
  top: 0;
  z-index: 10;

  transition: transform 0.3s ease-in-out, min-height 0.3s ease-out;

  transform: translateY(0);

  &.hidden-header {
    transform: translateY(calc(-1 * var(--header-height)));
  }
`,Te=(e,r,o,t,s,n)=>{f.useEffect(()=>{if(e===!1){r();return}window.innerHeight/2<=t?s+V<t?o():s-V>t&&r():r(),n(t)},[o,e,s,t,n,r])};function _e({isSmallScreen:e,scrollY:r,children:o}){const{isHeaderVisible:t,showHeader:s,hideHeader:n}=me(),[i,a]=f.useState(r);return Te(e,s,n,r,i,a),d.jsx(Oe,{className:T({"hidden-header":!t}),children:o})}const Le=h(v)`
  position: fixed;
  top: 0;

  height: 100vh;
  z-index: 100;

  overflow: auto;

  min-width: var(--sidebar-width);

  margin-left: calc(-1 * var(--sidebar-width));

  transform: translateX(0);

  &.navbar-open {
    transform: translateX(var(--sidebar-width));
  }

  transition: transform 0.3s ease-out;
`;function Re({isNavbarOpen:e,children:r}){return d.jsx(Le,{className:T({"navbar-open":e}),children:r})}const je=h(v)`
  background-color: var(--main-background);
  flex-grow: 1;
  height: 100%;
  margin-left: 0;

  &.large-screen {
    margin-left: var(--sidebar-width);
  }
`;function De({isLargeScreen:e,children:r}){return d.jsx(je,{className:T({"large-screen":e}),children:r})}const $e=h(v)`
  position: relative;
  flex-basis: var(--sidebar-width);
  flex-shrink: 0;
  flex-grow: 0;
`;function Ie({children:e}){return d.jsx($e,{children:e})}const We=h(v)`
  width: 100%;
  min-height: var(--footer-height);

  background-color: var(--footer-background);
  display: flex;
  justify-content: center;
  text-align: center;

  .footer-content-bottom {
    font-size: 0.9rem;
    color: ${({theme:e})=>e.palette.grey[700]};
  }
`,Je=h(v)`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  position: relative;

  height: var(--header-height);
  width: 100%;
  background-color: var(--header-background);
  backdrop-filter: blur(1.6px);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
`,Ke=h("button")`
  --left-gap: 8px;

  position: absolute;
  left: var(--left-gap);

  /* Disable tap highlight on the overlay */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  border: none;
  cursor: pointer;

  svg {
    border-radius: 50%;
    display: block;
    width: var(--icon-btn-size);
    height: var(--icon-btn-size);
    padding: var(--icon-btn-padding);
  }

  &:hover::after {
    content: "";
    position: absolute;
    width: 12px;

    /* background-color: green; */
    top: 130%;
    left: 50%;

    /* border-top: 10px solid black; */
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid ${e=>e.theme.palette.grey[900]}e0;
    transform: translate(-50%, -100%);
    animation: show-up 0.3s forwards;
  }

  &:hover::before {
    content: "Open Sidebar";
    position: absolute;
    top: 130%;
    left: calc(-1 * var(--left-gap) / 2);

    white-space: nowrap;
    font-size: 0.85rem;
    padding: 8px;
    color: ${e=>e.theme.palette.common.white};
    border-radius: 5px;
    font-weight: 700;

    background-color: ${e=>e.theme.palette.grey[900]}e0;

    animation: show-up 0.3s forwards;
  }
`,Me=h(v)`
  --transition-duration: ${U}ms;
  position: relative;
  height: 100%;

  margin-right: 0;
  transition: 0s;

  .overlay-enter {
    opacity: 0;
  }
  .overlay-enter-active {
    opacity: 1;
    transition: opacity var(--transition-duration);
  }
  .overlay-exit {
    opacity: 1;
    overflow-y: hidden;
  }
  .overlay-exit-active {
    opacity: 0;
    transition: opacity var(--transition-duration);
    overflow-y: hidden;
  }
`,Ae=h(v)`
  ${e=>e["data-small-screen"]||te}

  background-color: var(--background-color);
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  min-width: 300px;

  /* overflow: hidden; */
`,J=h(v)`
  background-color: var(--content-background);
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--footer-height) - var(--header-height));
`;J.displayName="ContentSlot";const He=h(v)`
  height: 100%;
  width: var(--sidebar-width);

  background-color: var(--navbar-background);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  &.navbar-open {
    overflow-y: auto;
  }

  .navbar-upper-area {
    position: sticky;
    top: 0;
    height: var(--header-height);

    width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 20;

    .navbar-close-btn {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: var(--header-height);
      cursor: pointer;

      svg {
        border-radius: 50%;
        display: block;
        backdrop-filter: blur(2px);
        background-color: ${ne(se.black,.04)};
        width: var(--icon-btn-size);
        height: var(--icon-btn-size);
        padding: var(--icon-btn-padding);
      }
    }
  }

  .navbar-main-area {
    margin-bottom: calc(var(--header-height) * 2);
  }
`;He.displayName="StyledNavbar";const ze=f.lazy(()=>O(()=>import("./Header-4t37lzT8.js"),__vite__mapDeps([0,1,2,3,4,5]))),Ve=f.lazy(()=>O(()=>import("./Navbar-D5ZJ-Jmt.js"),__vite__mapDeps([6,1,2,3,7,5,8,4]))),Pe=f.lazy(()=>O(()=>import("./Sidebar-C0QY2uDJ.js"),__vite__mapDeps([9,1,2,7,5,3,10]))),Xe=f.lazy(()=>O(()=>import("./Footer-DyLuvslE.js"),__vite__mapDeps([11,1,2,12,3,4,5]))),Ue=()=>{const{isDownMd:e,isXl:r}=ve(),{isNavOpen:o,closeNav:t,openNav:s}=ge(),{isOverlayOpen:n,closeOverlay:i,openOverlay:a}=xe(),{scrollY:l}=X(),c=f.useRef(null);ie(o);const u=()=>{t(),i()},p=()=>{o?(t(),i()):(s(),a())};return d.jsxs(Me,{children:[d.jsx(D,{in:n,timeout:U,classNames:"overlay",unmountOnExit:!0,nodeRef:c,children:d.jsx(re,{onClick:u,overlayRef:c,sx:{cursor:"pointer"}})}),d.jsx(Re,{isNavbarOpen:o,children:d.jsx(k,{children:d.jsx(Ve,{handleClose:u,isNavbarOpen:o})})}),d.jsxs(Ae,{"data-small-screen":e,children:[d.jsx(_e,{isSmallScreen:e,scrollY:l,children:d.jsx(k,{children:d.jsx(ze,{handleToggle:p,isLargeScreen:r})})}),d.jsxs(J,{children:[d.jsx(De,{isLargeScreen:r,children:d.jsx(ae,{})}),!e&&d.jsx(Ie,{children:d.jsx(k,{children:d.jsx(Pe,{})})})]}),d.jsx(ke,{children:d.jsx(k,{children:d.jsx(Xe,{})})})]}),d.jsx(Ce,{})]})},Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"}));export{Ze as L,Je as S,Ke as a,He as b,We as c};
