import{g as m,a4 as rt,a5 as ot,a6 as at,y as p,a7 as _,a8 as z,a9 as B,V as b,aa as ct,ab as A,ac as L,ad as lt,ae as ut,af as dt,W as C,a0 as I,a1 as pt,B as ft}from"./index-DyaJpTGQ.js";import{u as gt,a as mt,t as O}from"./stringUtils-AV9mQpy6.js";import{c as ht}from"./index-B-4LrsjG.js";import{u as yt}from"./index-BI7cPHsf.js";import{Q as bt}from"./AppRoutes-C5O3_JXX.js";import{s as xt,u as vt,a as $t,C as St}from"./Container-CBOoJQ6I.js";import{m as T}from"./proxy-CfqvhCh-.js";function Ct(t,e){var n,i,r;return m.isValidElement(t)&&e.indexOf(t.type.muiName??((r=(i=(n=t.type)==null?void 0:n._payload)==null?void 0:i.value)==null?void 0:r.muiName))!==-1}const kt=(t,e)=>t.filter(n=>e.includes(n)),S=(t,e,n)=>{const i=t.keys[0];Array.isArray(e)?e.forEach((r,s)=>{n((o,f)=>{s<=t.keys.length-1&&(s===0?Object.assign(o,f):o[t.up(t.keys[s])]=f)},r)}):e&&typeof e=="object"?(Object.keys(e).length>t.keys.length?t.keys:kt(t.keys,Object.keys(e))).forEach(s=>{if(t.keys.includes(s)){const o=e[s];o!==void 0&&n((f,c)=>{i===s?Object.assign(f,c):f[t.up(s)]=c},o)}}):(typeof e=="number"||typeof e=="string")&&n((r,s)=>{Object.assign(r,s)},e)};function h(t){return t?`Level${t}`:""}function P(t){return t.unstable_level>0&&t.container}function Gt(t){return function(n){return`var(--Grid-${n}Spacing${h(t.unstable_level)})`}}function k(t){return function(n){return t.unstable_level===0?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${h(t.unstable_level-1)})`}}function $(t){return t.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${h(t.unstable_level-1)})`}const jt=({theme:t,ownerState:e})=>{const n=k(e),i={};return S(t.breakpoints,e.size,(r,s)=>{let o={};s==="grow"&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / ${$(e)} - (${$(e)} - ${s}) * (${n("column")} / ${$(e)}))`}),r(i,o)}),i},wt=({theme:t,ownerState:e})=>{const n=k(e),i={};return S(t.breakpoints,e.offset,(r,s)=>{let o={};s==="auto"&&(o={marginLeft:"auto"}),typeof s=="number"&&(o={marginLeft:s===0?"0px":`calc(100% * ${s} / ${$(e)} + ${n("column")} * ${s} / ${$(e)})`}),r(i,o)}),i},Nt=({theme:t,ownerState:e})=>{if(!e.container)return{};const n=P(e)?{[`--Grid-columns${h(e.unstable_level)}`]:$(e)}:{"--Grid-columns":12};return S(t.breakpoints,e.columns,(i,r)=>{i(n,{[`--Grid-columns${h(e.unstable_level)}`]:r})}),n},Rt=({theme:t,ownerState:e})=>{if(!e.container)return{};const n=k(e),i=P(e)?{[`--Grid-rowSpacing${h(e.unstable_level)}`]:n("row")}:{};return S(t.breakpoints,e.rowSpacing,(r,s)=>{var o;r(i,{[`--Grid-rowSpacing${h(e.unstable_level)}`]:typeof s=="string"?s:(o=t.spacing)==null?void 0:o.call(t,s)})}),i},Pt=({theme:t,ownerState:e})=>{if(!e.container)return{};const n=k(e),i=P(e)?{[`--Grid-columnSpacing${h(e.unstable_level)}`]:n("column")}:{};return S(t.breakpoints,e.columnSpacing,(r,s)=>{var o;r(i,{[`--Grid-columnSpacing${h(e.unstable_level)}`]:typeof s=="string"?s:(o=t.spacing)==null?void 0:o.call(t,s)})}),i},Et=({theme:t,ownerState:e})=>{if(!e.container)return{};const n={};return S(t.breakpoints,e.direction,(i,r)=>{i(n,{flexDirection:r})}),n},Mt=({ownerState:t})=>{const e=Gt(t);return{minWidth:0,boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",...t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},gap:`${e("row")} ${e("column")}`}}},It=t=>{const e=[];return Object.entries(t).forEach(([n,i])=>{i!==!1&&i!==void 0&&e.push(`grid-${n}-${String(i)}`)}),e},Ot=(t,e="xs")=>{function n(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(n(t))return[`spacing-${e}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const i=[];return Object.entries(t).forEach(([r,s])=>{n(s)&&i.push(`spacing-${r}-${String(s)}`)}),i}return[]},Tt=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([e,n])=>`direction-${e}-${n}`):[`direction-xs-${String(t)}`],_t=rt(),zt=xt("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>e.root});function Bt(t){return vt({props:t,name:"MuiGrid",defaultTheme:_t})}function At(t={}){const{createStyledComponent:e=zt,useThemeProps:n=Bt,componentName:i="MuiGrid"}=t,r=(c,l)=>{const{container:g,direction:u,spacing:a,wrap:d,size:x}=c,G={root:["root",g&&"container",d!=="wrap"&&`wrap-xs-${String(d)}`,...Tt(u),...It(x),...g?Ot(a,l.breakpoints.keys[0]):[]]};return z(G,j=>B(i,j),{})};function s(c,l,g=()=>!0){const u={};return c===null||(Array.isArray(c)?c.forEach((a,d)=>{a!==null&&g(a)&&l.keys[d]&&(u[l.keys[d]]=a)}):typeof c=="object"?Object.keys(c).forEach(a=>{const d=c[a];d!=null&&g(d)&&(u[a]=d)}):u[l.keys[0]]=c),u}const o=e(Nt,Pt,Rt,jt,Et,Mt,wt),f=m.forwardRef(function(l,g){const u=ot(),a=n(l),d=at(a),{className:x,children:G,columns:j=12,container:D=!1,component:H="div",direction:V="row",wrap:X="wrap",size:K={},offset:F={},spacing:w=0,rowSpacing:Q=w,columnSpacing:q=w,unstable_level:v=0,...J}=d,Y=s(K,u.breakpoints,y=>y!==!1),Z=s(F,u.breakpoints),tt=l.columns??(v?void 0:j),et=l.spacing??(v?void 0:w),nt=l.rowSpacing??l.spacing??(v?void 0:Q),it=l.columnSpacing??l.spacing??(v?void 0:q),E={...d,level:v,columns:tt,container:D,direction:V,wrap:X,spacing:et,rowSpacing:nt,columnSpacing:it,size:Y,offset:Z},st=r(E,u);return p.jsx(o,{ref:g,as:H,ownerState:E,className:_(st.root,x),...J,children:m.Children.map(G,y=>{var M;return m.isValidElement(y)&&Ct(y,["Grid"])?m.cloneElement(y,{unstable_level:((M=y.props)==null?void 0:M.unstable_level)??v+1}):y})})});return f.muiName="Grid",f}function Lt(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Wt(t){return parseFloat(t)}const W=At({createStyledComponent:b("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(t,e)=>e.root}),componentName:"MuiGrid2",useThemeProps:t=>$t({props:t,name:"MuiGrid2"})});function Ut(t){return B("MuiSkeleton",t)}ct("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Dt=t=>{const{classes:e,variant:n,animation:i,hasChildren:r,width:s,height:o}=t;return z({root:["root",n,i,r&&"withChildren",r&&!s&&"fitContent",r&&!o&&"heightAuto"]},Ut,e)},N=A`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,R=A`
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
`,Ht=typeof N!="string"?L`
        animation: ${N} 2s ease-in-out 0.5s infinite;
      `:null,Vt=typeof R!="string"?L`
        animation: ${R} 2s linear 0.5s infinite;
      `:null,Xt=b("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.animation!==!1&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})(lt(({theme:t})=>{const e=Lt(t.shape.borderRadius)||"px",n=Wt(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ut(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${e}/${Math.round(n/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:i})=>i.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:i})=>i.hasChildren&&!i.width,style:{maxWidth:"fit-content"}},{props:({ownerState:i})=>i.hasChildren&&!i.height,style:{height:"auto"}},{props:{animation:"pulse"},style:Ht||{animation:`${N} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:{"&::after":Vt||{animation:`${R} 2s linear 0.5s infinite`}}}]}})),Kt=m.forwardRef(function(e,n){const i=dt({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:o="span",height:f,style:c,variant:l="text",width:g,...u}=i,a={...i,animation:r,component:o,variant:l,hasChildren:!!u.children},d=Dt(a);return p.jsx(Xt,{as:o,ref:n,className:_(d.root,s),ownerState:a,...u,style:{width:g,height:f,...c}})}),Ft=b(C)`
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
    background-color: ${({theme:t})=>I(t.palette.primary.light,.5)};
  }

  .img-error {
    background-color: ${({theme:t})=>I(t.palette.warning.light,.5)};
  }
`,Qt=b("img")`
  position: relative;
  object-fit: cover;
  z-index: 1;
`,qt={triggerOnce:!0,threshold:.4};function Jt({src:t,...e}){const[n,i]=m.useState(!1),[r,s]=m.useState(!1),[o,f]=m.useState(!1),{ref:c,inView:l}=yt(qt),g=()=>{f(!0),i(!1)},u=()=>{s(!0),i(!1),f(!1)};return m.useEffect(()=>{l&&(()=>{o||i(!0)})()},[l,o]),p.jsxs(Ft,{ref:c,children:[(n||o)&&p.jsx(Qt,{src:t,width:"100%",height:"100%",loading:"lazy",onLoad:g,onError:u,...e}),n&&p.jsx(Kt,{variant:"rectangular",width:"100%",height:"100%",className:"img-alt img-loading"}),r&&p.jsx(C,{width:"100%",height:"100%",className:"img-alt img-error",children:"Not Found..."})]})}const Yt=b(W)`
  .photo-frame {
    border-radius: 18px;
    overflow: hidden;
  }
`,Zt=b(C)`
  --underline-thickness: 5px;
  --text-color: ${pt.white};

  height: 100%;
  width: 100%;
  aspect-ratio: 540/312;
  position: relative;

  .photo-caption {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);

    transition: inherit;
    cursor: pointer;
    font-weight: 900;
    font-size: 2rem;
    z-index: 2;
  }

  .caption-text {
    position: relative;
    color: var(--text-color);
    transition: inherit;

    &::before {
      display: block;
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;

      right: 100%;
      background-color: var(--text-color);
      transition: 0.5s ease-out;

      border-bottom: var(--underline-thickness) solid var(--text-color);
    }
  }

  // Highlight text
  &.underline-visible {
    &:hover {
      .caption-text::before {
        opacity: 1;
        right: 0;
      }
    }
  }

  &.navigating {
    .caption-text {
      transform: scale(1.15);
    }
    .caption-text::before {
      opacity: 1;
      right: 0;
    }
  }
`,te=b(C)`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
`,ee={hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},ne={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},ie={size:{xs:12,sm:6},sx:{transition:".8s",padding:1}};function se(t,e){return t===e||e==="all"}const U=500,re={transition:`${U/1e3}s`};function oe({data:t}){const e=mt()||"all",n=t.flatMap(a=>a.items),i=ft(),[r,s]=m.useState(!1),[o,f]=m.useState(void 0),c=({currentTarget:a})=>{a.classList.add("underline-visible")},l=({currentTarget:a})=>{a.classList.remove("underline-visible")},g=a=>{if(r)return;s(!0);const d=a.currentTarget,x=d.dataset.city;f(x),c({currentTarget:d}),setTimeout(()=>{i(`/${x}`)},U)},u=n.filter(a=>se(a.continent,e));return p.jsxs(St,{maxWidth:"md",sx:{paddingBottom:"7rem"},children:[p.jsxs(te,{component:"h2",children:["Region : ",O(e)]}),p.jsx(T.ul,{initial:"hidden",animate:"visible",variants:ne,children:p.jsx(W,{container:!0,spacing:0,margin:1,children:u.map(a=>p.jsx(Yt,{...ie,children:p.jsx(T.li,{variants:ee,children:p.jsxs(Zt,{className:ht("photo-frame",{navigating:r&&o===a.title}),"data-city":a.title,onClick:g,onTouchStart:c,onMouseOver:c,onMouseOut:l,onTouchEnd:l,sx:re,children:[p.jsx(Jt,{src:a.img,alt:a.title,width:"100%"}),p.jsx("div",{className:"photo-caption",children:p.jsx("h3",{className:"caption-text",children:O(a.title)})})]})})},a.title))})})]})}function ge(){const t=gt();return p.jsx(bt,{query:t,Component:oe})}export{oe as MainPage,ge as default};
