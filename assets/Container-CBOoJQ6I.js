import{as as W,a5 as k,a4 as v,ak as c,g as T,y as R,a7 as $,a8 as G,a9 as M,aj as P,ai as S,V as y}from"./index-DyaJpTGQ.js";import{g as j}from"./index-B-4LrsjG.js";const E=W();function x({props:s,name:e,defaultTheme:a,themeId:n}){let i=k(a);return n&&(i=i[n]||i),j({theme:i,name:e,props:s})}const L=v(),N=E("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[`maxWidth${c(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),U=s=>x({props:s,name:"MuiContainer",defaultTheme:L}),z=(s,e)=>{const a=r=>M(e,r),{classes:n,fixed:i,disableGutters:l,maxWidth:t}=s,o={root:["root",t&&`maxWidth${c(String(t))}`,i&&"fixed",l&&"disableGutters"]};return G(o,a,n)};function D(s={}){const{createStyledComponent:e=N,useThemeProps:a=U,componentName:n="MuiContainer"}=s,i=e(({theme:t,ownerState:o})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:o})=>o.fixed&&Object.keys(t.breakpoints.values).reduce((r,u)=>{const p=u,d=t.breakpoints.values[p];return d!==0&&(r[t.breakpoints.up(p)]={maxWidth:`${d}${t.breakpoints.unit}`}),r},{}),({theme:t,ownerState:o})=>({...o.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...o.maxWidth&&o.maxWidth!=="xs"&&{[t.breakpoints.up(o.maxWidth)]:{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`}}}));return T.forwardRef(function(o,r){const u=a(o),{className:p,component:d="div",disableGutters:f=!1,fixed:b=!1,maxWidth:g="lg",classes:H,...h}=u,m={...u,component:d,disableGutters:f,fixed:b,maxWidth:g},C=z(m,n);return R.jsx(i,{as:d,ownerState:m,className:$(C.root,p),ref:r,...h})})}function w({props:s,name:e}){return x({props:s,name:e,defaultTheme:P,themeId:S})}const V=D({createStyledComponent:y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[`maxWidth${c(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),useThemeProps:s=>w({props:s,name:"MuiContainer"})});export{V as C,w as a,E as s,x as u};
