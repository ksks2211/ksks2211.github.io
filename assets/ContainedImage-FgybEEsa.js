import{ae as L,a9 as O,af as M,ag as V,V as I,ah as B,ai as N,g as u,aj as T,y as v,a7 as W,a8 as z,W as U,a0 as j}from"./index-cZ1D_KhZ.js";function X(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(t){return parseFloat(t)}function F(t){return O("MuiSkeleton",t)}L("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=t=>{const{classes:e,variant:n,animation:r,hasChildren:o,width:i,height:a}=t;return z({root:["root",n,r,o&&"withChildren",o&&!i&&"fitContent",o&&!a&&"heightAuto"]},F,e)},C=M`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,R=M`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,D=typeof C!="string"?V`
        animation: ${C} 2s ease-in-out 0.5s infinite;
      `:null,P=typeof R!="string"?V`
        animation: ${R} 2s linear 0.5s infinite;
      `:null,q=I("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(B(({theme:t})=>{const e=X(t.shape.borderRadius)||"px",n=_(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:N(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:r})=>r.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:r})=>r.hasChildren&&!r.width,style:{maxWidth:"fit-content"}},{props:({ownerState:r})=>r.hasChildren&&!r.height,style:{height:"auto"}},{props:{animation:"pulse"},style:D||{animation:`${C} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:{"&::after":P||{animation:`${R} 2s linear 0.5s infinite`}}}]}})),G=u.forwardRef(function(e,n){const r=T({props:e,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:a="span",height:s,style:l,variant:d="text",width:c,...h}=r,p={...r,animation:o,component:a,variant:d,hasChildren:!!h.children},m=K(p);return v.jsx(q,{as:a,ref:n,className:W(m.root,i),ownerState:p,...h,style:{width:c,height:s,...l}})});var x=new Map,b=new WeakMap,A=0,H=void 0;function J(t){return t?(b.has(t)||(A+=1,b.set(t,A.toString())),b.get(t)):"0"}function Q(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?J(t.root):t[e]}`).toString()}function Y(t){const e=Q(t);let n=x.get(e);if(!n){const r=new Map;let o;const i=new IntersectionObserver(a=>{a.forEach(s=>{var l;const d=s.isIntersecting&&o.some(c=>s.intersectionRatio>=c);t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(l=r.get(s.target))==null||l.forEach(c=>{c(d,s)})})},t);o=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:r},x.set(e,n)}return n}function Z(t,e,n={},r=H){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:o,observer:i,elements:a}=Y(n),s=a.get(t)||[];return a.has(t)||a.set(t,s),s.push(e),i.observe(t),function(){s.splice(s.indexOf(e),1),s.length===0&&(a.delete(t),i.unobserve(t)),a.size===0&&(i.disconnect(),x.delete(o))}}function tt({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:a,initialInView:s,fallbackInView:l,onChange:d}={}){var c;const[h,p]=u.useState(null),m=u.useRef(),[y,k]=u.useState({inView:!!s,entry:void 0});m.current=d,u.useEffect(()=>{if(a||!h)return;let g;return g=Z(h,(E,S)=>{k({inView:E,entry:S}),m.current&&m.current(E,S),S.isIntersecting&&i&&g&&(g(),g=void 0)},{root:o,rootMargin:r,threshold:t,trackVisibility:n,delay:e},l),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,h,o,r,i,a,n,l,e]);const w=(c=y.entry)==null?void 0:c.target,$=u.useRef();!h&&w&&!i&&!a&&$.current!==w&&($.current=w,k({inView:!!s,entry:void 0}));const f=[p,y.inView,y.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const et=I(U)`
  position: relative;
  width: 100%;
  height: 100%;

  .img-alt {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({theme:t})=>t.palette.grey[700]};
  }

  .img-loading {
    background-color: ${({theme:t})=>j(t.palette.primary.light,.5)};
  }

  .img-error {
    background-color: ${({theme:t})=>j(t.palette.warning.light,.5)};
  }
`,nt=I("img")`
  position: relative;
  object-fit: cover;
  z-index: 1;
`,rt={triggerOnce:!0,threshold:.4};function at({src:t,...e}){const[n,r]=u.useState(!1),[o,i]=u.useState(!1),[a,s]=u.useState(!1),{ref:l,inView:d}=tt(rt),c=()=>{s(!0),r(!1)},h=()=>{i(!0),r(!1),s(!1)};return u.useEffect(()=>{d&&(()=>{a||r(!0)})()},[d,a]),v.jsxs(et,{ref:l,children:[(n||a)&&v.jsx(nt,{src:t,width:"100%",height:"100%",loading:"lazy",onLoad:c,onError:h,...e}),n&&v.jsx(G,{variant:"rectangular",width:"100%",height:"100%",className:"img-alt img-loading"}),o&&v.jsx(U,{width:"100%",height:"100%",className:"img-alt img-error",children:"Not Found..."})]})}export{at as C,et as S,G as a,tt as u};
