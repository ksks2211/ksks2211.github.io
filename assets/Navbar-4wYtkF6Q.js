import{g as o,y as i,U as N,V as B,W as G,ao as $,B as T,ap as D}from"./index-CnZ7neNp.js";import{c as b}from"./index-Cv1dy4BU.js";import{t as z,u as U,a as W,c as A}from"./stringUtils-BssfpDtv.js";import{M as F,u as P,P as H,a as V,L as _,m as K}from"./proxy-DAdOYJfM.js";import{Q}from"./AppRoutes-BuMek3Vj.js";import{b as q}from"./Layout-CgKsfGXm.js";import"./useTheme-gV9l_mcP.js";class Y extends o.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=t.offsetHeight||0,s.width=t.offsetWidth||0,s.top=t.offsetTop,s.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function J({children:e,isPresent:r}){const t=o.useId(),s=o.useRef(null),h=o.useRef({width:0,height:0,top:0,left:0}),{nonce:f}=o.useContext(F);return o.useInsertionEffect(()=>{const{width:u,height:n,top:c,left:p}=h.current;if(r||!s.current||!u||!n)return;s.current.dataset.motionPopId=t;const a=document.createElement("style");return f&&(a.nonce=f),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${n}px !important;
            top: ${c}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[r]),i.jsx(Y,{isPresent:r,childRef:s,sizeRef:h,children:o.cloneElement(e,{ref:s})})}const O=({children:e,initial:r,isPresent:t,onExitComplete:s,custom:h,presenceAffectsLayout:f,mode:u})=>{const n=P(X),c=o.useId(),p=o.useMemo(()=>({id:c,initial:r,isPresent:t,custom:h,onExitComplete:a=>{n.set(a,!0);for(const d of n.values())if(!d)return;s&&s()},register:a=>(n.set(a,!1),()=>n.delete(a))}),f?[Math.random()]:[t]);return o.useMemo(()=>{n.forEach((a,d)=>n.set(d,!1))},[t]),o.useEffect(()=>{!t&&!n.size&&s&&s()},[t]),u==="popLayout"&&(e=i.jsx(J,{isPresent:t,children:e})),i.jsx(H.Provider,{value:p,children:e})};function X(){return new Map}const C=e=>e.key||"";function M(e){const r=[];return o.Children.forEach(e,t=>{o.isValidElement(t)&&r.push(t)}),r}const Z=({children:e,exitBeforeEnter:r,custom:t,initial:s=!0,onExitComplete:h,presenceAffectsLayout:f=!0,mode:u="sync"})=>{const n=o.useMemo(()=>M(e),[e]),c=n.map(C),p=o.useRef(!0),a=o.useRef(n),d=P(()=>new Map),[g,y]=o.useState(n),[x,L]=o.useState(n);V(()=>{p.current=!1,a.current=n;for(let m=0;m<x.length;m++){const l=C(x[m]);c.includes(l)?d.delete(l):d.get(l)!==!0&&d.set(l,!1)}},[x,c.length,c.join("-")]);const w=[];if(n!==g){let m=[...n];for(let l=0;l<x.length;l++){const v=x[l],R=C(v);c.includes(R)||(m.splice(l,0,v),w.push(v))}u==="wait"&&w.length&&(m=w),L(M(m)),y(n);return}const{forceRender:j}=o.useContext(_);return i.jsx(i.Fragment,{children:x.map(m=>{const l=C(m),v=n===x||c.includes(l),R=()=>{if(d.has(l))d.set(l,!0);else return;let k=!0;d.forEach(S=>{S||(k=!1)}),k&&(j==null||j(),L(a.current),h&&h())};return i.jsx(O,{isPresent:v,initial:!p.current||s?void 0:!1,custom:v?void 0:t,presenceAffectsLayout:f,mode:u,onExitComplete:v?void 0:R,children:m},l)})})};function ee(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(e)}function te(e){return N({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(e)}const I="46px",E="16px",ne=B(G)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .row {
    height: ${I};
    line-height: ${I};
  }

  .title-section {
    padding-left: ${E};
    position: relative;

    font-size: 1.26rem;
    z-index: 10;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: space-between;

    // highlight for selected menu
    &.selected::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 2.4px;
      height: 100%;
      background-color: var(--accent-color);
      transform: scaleY(0.75);
    }

    .list-title {
      cursor: pointer;

      flex-grow: 1;

      &:hover {
        text-decoration: underline;
      }
    }

    .toggle-btn {
      flex-shrink: 0;
      flex-grow: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--header-height);
      height: 100%;
      svg {
        width: calc(var(--icon-btn-size) / 2);
        height: calc(var(--icon-btn-size) / 2);
      }
    }
  }

  .menu-items-area {
    overflow: hidden;
    font-size: 0.98rem;
    color: ${$[700]};
  }

  .menu-item {
    cursor: pointer;

    margin-left: ${E};
    margin-right: calc(var(--header-height) / 2);
    padding-left: ${E};

    position: relative;
    font-family: "Roboto";
    z-index: 1;

    &:hover {
      background-color: ${$[100]};
    }
    &.selected {
      font-weight: 700;
    }
  }
`,se={initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"}},oe=({data:e,handleNavClose:r,initialIsOpen:t,selectedCategory:s,selectedSubCategory:h})=>{const[f,u]=o.useState(t),n=T(),c=e.title===s;o.useEffect(()=>{s===e.title||!s&&t?u(!0):t||u(!1)},[e.title,t,s]);const p=()=>{n(`/${e.link}`),r()},a=()=>{u(g=>!g)},d=({currentTarget:g})=>{const y=g.dataset.sub;n(`/${y}`),r()};return i.jsxs(ne,{children:[i.jsxs("div",{className:b("title-section row",{selected:c}),children:[i.jsx("h3",{className:b("list-title","text-hover-effect",{selected:c}),onClick:p,children:z(e.title)}),i.jsx("button",{className:"toggle-btn icon-btn",onClick:a,children:f?i.jsx(te,{}):i.jsx(ee,{})})]}),i.jsx(Z,{children:f&&i.jsx(K.ul,{className:"menu-items-area",...se,children:e.items.map((g,y)=>i.jsx("li",{onClick:d,className:b("menu-item","row","text-hover-effect",{selected:g.title===h}),"data-sub":g.title,children:z(g.title)},y))})})]})};function ie({handleClose:e,isNavbarOpen:r,data:t}){const s=o.useRef(null);o.useEffect(()=>{const c=s.current;c&&r&&c.scrollTo({top:0,behavior:"instant"})},[r]);const h=W(),{city:f,region:u}=A(),n=h||u;return i.jsxs(q,{ref:s,className:b({"navbar-open":r}),children:[i.jsx("div",{className:"navbar-upper-area",children:i.jsx("button",{className:"navbar-close-btn icon-btn",children:i.jsx(D,{onClick:e})})}),i.jsx("div",{className:"navbar-main-area",children:t.map((c,p)=>i.jsx(oe,{data:c,handleNavClose:e,initialIsOpen:n?n===c.title:p===0,selectedCategory:n,selectedSubCategory:f},p))})]})}function fe({handleClose:e,isNavbarOpen:r}){const t=U();return i.jsx(Q,{query:t,Component:ie,handleClose:e,isNavbarOpen:r})}export{ie as Navbar,fe as default};
