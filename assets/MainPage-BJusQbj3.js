import{g as h,a4 as X,a5 as Y,a6 as Z,y as f,a7 as ee,a8 as te,a9 as ne,V as v,W as O,a1 as ie,B as se}from"./index-cZ1D_KhZ.js";import{u as re,a as oe,t as E}from"./stringUtils-ClFdsDEA.js";import{c as ae}from"./index-Dvc3hXL-.js";import{C as ce}from"./ContainedImage-FgybEEsa.js";import{Q as le}from"./AppRoutes-BQwMejlb.js";import{s as ue,u as de,a as fe,C as pe}from"./Container-FtXxgl59.js";import{m as T}from"./proxy-CZABRRSl.js";function ge(e,t){var n,s,o;return h.isValidElement(e)&&t.indexOf(e.type.muiName??((o=(s=(n=e.type)==null?void 0:n._payload)==null?void 0:s.value)==null?void 0:o.muiName))!==-1}const me=(e,t)=>e.filter(n=>t.includes(n)),$=(e,t,n)=>{const s=e.keys[0];Array.isArray(t)?t.forEach((o,i)=>{n((a,p)=>{i<=e.keys.length-1&&(i===0?Object.assign(a,p):a[e.up(e.keys[i])]=p)},o)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:me(e.keys,Object.keys(t))).forEach(i=>{if(e.keys.includes(i)){const a=t[i];a!==void 0&&n((p,c)=>{s===i?Object.assign(p,c):p[e.up(i)]=c},a)}}):(typeof t=="number"||typeof t=="string")&&n((o,i)=>{Object.assign(o,i)},t)};function m(e){return e?`Level${e}`:""}function N(e){return e.unstable_level>0&&e.container}function ye(e){return function(n){return`var(--Grid-${n}Spacing${m(e.unstable_level)})`}}function S(e){return function(n){return e.unstable_level===0?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${m(e.unstable_level-1)})`}}function G(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${m(e.unstable_level-1)})`}const he=({theme:e,ownerState:t})=>{const n=S(t),s={};return $(e.breakpoints,t.size,(o,i)=>{let a={};i==="grow"&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),i==="auto"&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof i=="number"&&(a={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / ${G(t)} - (${G(t)} - ${i}) * (${n("column")} / ${G(t)}))`}),o(s,a)}),s},xe=({theme:e,ownerState:t})=>{const n=S(t),s={};return $(e.breakpoints,t.offset,(o,i)=>{let a={};i==="auto"&&(a={marginLeft:"auto"}),typeof i=="number"&&(a={marginLeft:i===0?"0px":`calc(100% * ${i} / ${G(t)} + ${n("column")} * ${i} / ${G(t)})`}),o(s,a)}),s},be=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=N(t)?{[`--Grid-columns${m(t.unstable_level)}`]:G(t)}:{"--Grid-columns":12};return $(e.breakpoints,t.columns,(s,o)=>{s(n,{[`--Grid-columns${m(t.unstable_level)}`]:o})}),n},Ge=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=S(t),s=N(t)?{[`--Grid-rowSpacing${m(t.unstable_level)}`]:n("row")}:{};return $(e.breakpoints,t.rowSpacing,(o,i)=>{var a;o(s,{[`--Grid-rowSpacing${m(t.unstable_level)}`]:typeof i=="string"?i:(a=e.spacing)==null?void 0:a.call(e,i)})}),s},$e=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=S(t),s=N(t)?{[`--Grid-columnSpacing${m(t.unstable_level)}`]:n("column")}:{};return $(e.breakpoints,t.columnSpacing,(o,i)=>{var a;o(s,{[`--Grid-columnSpacing${m(t.unstable_level)}`]:typeof i=="string"?i:(a=e.spacing)==null?void 0:a.call(e,i)})}),s},ve=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return $(e.breakpoints,t.direction,(s,o)=>{s(n,{flexDirection:o})}),n},Se=({ownerState:e})=>{const t=ye(e);return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`${t("row")} ${t("column")}`}}},Ce=e=>{const t=[];return Object.entries(e).forEach(([n,s])=>{s!==!1&&s!==void 0&&t.push(`grid-${n}-${String(s)}`)}),t},je=(e,t="xs")=>{function n(s){return s===void 0?!1:typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"&&s>0}if(n(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const s=[];return Object.entries(e).forEach(([o,i])=>{n(i)&&s.push(`spacing-${o}-${String(i)}`)}),s}return[]},ke=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,n])=>`direction-${t}-${n}`):[`direction-xs-${String(e)}`],Ne=X(),Pe=ue("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function _e(e){return de({props:e,name:"MuiGrid",defaultTheme:Ne})}function Ee(e={}){const{createStyledComponent:t=Pe,useThemeProps:n=_e,componentName:s="MuiGrid"}=e,o=(c,l)=>{const{container:g,direction:d,spacing:r,wrap:u,size:x}=c,C={root:["root",g&&"container",u!=="wrap"&&`wrap-xs-${String(u)}`,...ke(d),...Ce(x),...g?je(r,l.breakpoints.keys[0]):[]]};return te(C,j=>ne(s,j),{})};function i(c,l,g=()=>!0){const d={};return c===null||(Array.isArray(c)?c.forEach((r,u)=>{r!==null&&g(r)&&l.keys[u]&&(d[l.keys[u]]=r)}):typeof c=="object"?Object.keys(c).forEach(r=>{const u=c[r];u!=null&&g(u)&&(d[r]=u)}):d[l.keys[0]]=c),d}const a=t(be,$e,Ge,he,ve,Se,xe),p=h.forwardRef(function(l,g){const d=Y(),r=n(l),u=Z(r),{className:x,children:C,columns:j=12,container:R=!1,component:B="div",direction:W="row",wrap:A="wrap",size:w={},offset:I={},spacing:k=0,rowSpacing:L=k,columnSpacing:D=k,unstable_level:b=0,...H}=u,Q=i(w,d.breakpoints,y=>y!==!1),U=i(I,d.breakpoints),q=l.columns??(b?void 0:j),K=l.spacing??(b?void 0:k),F=l.rowSpacing??l.spacing??(b?void 0:L),J=l.columnSpacing??l.spacing??(b?void 0:D),P={...u,level:b,columns:q,container:R,direction:W,wrap:A,spacing:K,rowSpacing:F,columnSpacing:J,size:Q,offset:U},V=o(P,d);return f.jsx(a,{ref:g,as:B,ownerState:P,className:ee(V.root,x),...H,children:h.Children.map(C,y=>{var _;return h.isValidElement(y)&&ge(y,["Grid"])?h.cloneElement(y,{unstable_level:((_=y.props)==null?void 0:_.unstable_level)??b+1}):y})})});return p.muiName="Grid",p}const M=Ee({createStyledComponent:v("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>fe({props:e,name:"MuiGrid2"})}),Te=v(M)`
  .photo-frame {
    border-radius: 18px;
    overflow: hidden;
  }
`,Oe=v(O)`
  --underline-thickness: 5px;
  --text-color: ${ie.white};

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
`,Me=v(O)`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
`,ze={hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},Re={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},Be={size:{xs:12,sm:6},sx:{transition:".8s",padding:1}};function We(e,t){return e===t||t==="all"}const z=500,Ae={transition:`${z/1e3}s`};function we({data:e}){const t=oe()||"all",n=e.flatMap(r=>r.items),s=se(),[o,i]=h.useState(!1),[a,p]=h.useState(void 0),c=({currentTarget:r})=>{r.classList.add("underline-visible")},l=({currentTarget:r})=>{r.classList.remove("underline-visible")},g=r=>{if(o)return;i(!0);const u=r.currentTarget,x=u.dataset.city;p(x),c({currentTarget:u}),setTimeout(()=>{s(`/${x}`)},z)},d=n.filter(r=>We(r.continent,t));return f.jsxs(pe,{maxWidth:"md",sx:{paddingBottom:"7rem"},children:[f.jsxs(Me,{component:"h2",children:["Region : ",E(t)]}),f.jsx(T.ul,{initial:"hidden",animate:"visible",variants:Re,children:f.jsx(M,{container:!0,spacing:0,margin:1,children:d.map(r=>f.jsx(Te,{...Be,children:f.jsx(T.li,{variants:ze,children:f.jsxs(Oe,{className:ae("photo-frame",{navigating:o&&a===r.title}),"data-city":r.title,onClick:g,onTouchStart:c,onMouseOver:c,onMouseOut:l,onTouchEnd:l,sx:Ae,children:[f.jsx(ce,{src:r.img,alt:r.title,width:"100%"}),f.jsx("div",{className:"photo-caption",children:f.jsx("h3",{className:"caption-text",children:E(r.title)})})]})})},r.title))})})]})}function Ke(){const e=re();return f.jsx(le,{query:e,Component:we})}export{we as MainPage,Ke as default};
