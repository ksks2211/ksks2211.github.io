import{a9 as T,aa as S,V as B,ak as c,ad as j,g as w,af as k,y as n,a7 as W,al as M,a8 as R,U as E,am as L,B as P}from"./index-DyaJpTGQ.js";import{S as U,a as A}from"./Layout-C7_EAbYC.js";import"./index-B-4LrsjG.js";import"./useTheme-DBirkZFE.js";import"./AppRoutes-C5O3_JXX.js";function H(r){return T("MuiTypography",r)}S("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const N={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},O=M(),D=r=>{const{align:a,gutterBottom:t,noWrap:e,paragraph:s,variant:p,classes:i}=r,o={root:["root",p,r.align!=="inherit"&&`align${c(a)}`,t&&"gutterBottom",e&&"noWrap",s&&"paragraph"]};return R(o,H,i)},I=B("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${c(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(j(({theme:r})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,e])=>t!=="inherit"&&e&&typeof e=="object").map(([t,e])=>({props:{variant:t},style:e})),...Object.entries(r.palette).filter(([,t])=>t&&t.main).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((a=r.palette)==null?void 0:a.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${c(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},$=w.forwardRef(function(a,t){const{color:e,...s}=k({props:a,name:"MuiTypography"}),p=!N[e],i=O({...s,...p&&{color:e}}),{align:o="inherit",className:g,component:h,gutterBottom:f=!1,noWrap:v=!1,paragraph:y=!1,variant:l="body1",variantMapping:u=x,...m}=i,d={...i,align:o,color:e,className:g,component:h,gutterBottom:f,noWrap:v,paragraph:y,variant:l,variantMapping:u},b=h||(y?"p":u[l]||x[l])||"span",C=D(d);return n.jsx(I,{as:b,ref:t,className:W(C.root,g),...m,ownerState:d,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...m.style}})});function z(r){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",x2:"20",y1:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"6",y2:"6"},child:[]},{tag:"line",attr:{x1:"4",x2:"20",y1:"18",y2:"18"},child:[]}]})(r)}const F={fontFamily:["Fredoka"],fontSize:"1.6rem",fontWeight:"700",whiteSpace:"nowrap",color:L[900],sx:{userSelect:"none",cursor:"pointer"}},V="City Insights";function Q({handleToggle:r,isLargeScreen:a}){const t=P(),e=()=>{t("/")};return n.jsxs(U,{children:[n.jsx($,{variant:"h2",...F,onClick:e,children:V}),n.jsx(A,{onClick:r,className:"menu-btn icon-btn","data-large-screen":a,children:n.jsx(z,{})})]})}export{Q as default};
