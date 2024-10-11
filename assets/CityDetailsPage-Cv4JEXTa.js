import{g as a,y as t,W as d,L as g,V as x,H as b,X as j,Y as y}from"./index-DyaJpTGQ.js";import{b as T,t as C}from"./stringUtils-AV9mQpy6.js";import{u as R}from"./useTocNavigation-CUOiTL1Q.js";import{e as v}from"./AppRoutes-C5O3_JXX.js";import{u as w}from"./index-BI7cPHsf.js";import{u as E}from"./useTheme-DBirkZFE.js";const m="#ffffff00",h=e=>{const[r,o]=a.useState(m),c=E();return a.useEffect(()=>{const s=document.documentElement,n=getComputedStyle(s).getPropertyValue(e);o(n||m)},[c,e]),r},S=(e,r,o)=>({width:r||"100%",height:e?"100%":o||"100%"});function V({children:e,width:r,height:o,threshold:c}){const{ref:s,inView:n}=w({triggerOnce:!0,threshold:c||.3}),i=S(n,r,o);return typeof e=="function"?t.jsx(d,{sx:i,ref:s,children:e(n)}):t.jsx(d,{ref:s,sx:i,children:n?e:t.jsx(g,{size:"3rem",height:o})})}const H="300px",k=x(d)`
  --section-background: #f6f7fb;

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.3rem;

  // tmp
  height: 400px;

  .section-title {
    padding: 1.8rem 0.4rem 1rem;
    span {
      display: block;
      height: 110%;

      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      border-bottom-color: ${({theme:e})=>e.palette.grey[400]};
      border-bottom-style: solid;
    }
  }

  .section-content {
    width: 100%;
    height: 100%;
    border-radius: 12px;

    background-color: var(--section-background);
  }
`,B=(e,r)=>{const o=e==="lg";return{".section-title":{fontSize:o?"1.65rem":"1.25rem",fontWeight:o?900:500,color:o?j(.05,r):void 0,span:{borderBottomWidth:o?0:"1px",fontFamily:o?"Roboto":void 0}}}},l=b.forwardRef(({title:e,children:r,size:o="md"},c)=>{const s=a.useRef(null),n=h("--accent-color"),i=h("--header-height"),u=B(o,n);return a.useImperativeHandle(c,()=>({moveTo:()=>{if(s.current){const{top:f}=s.current.getBoundingClientRect(),p=window.scrollY+f-v(i);window.scrollTo({top:p,behavior:"smooth"})}},readTop:()=>{if(s.current){const{top:f}=s.current.getBoundingClientRect();return f}return 0},getTitle:()=>e})),t.jsxs(t.Fragment,{children:[t.jsx("span",{ref:s}),t.jsx(V,{height:H,threshold:.5,children:t.jsxs(k,{sx:u,children:[t.jsx("h2",{className:"section-title",children:t.jsx("span",{children:e})}),t.jsx("div",{className:"section-content",children:r})]})},e)]})});function I(){const{city:e}=T(),r=a.useRef({}),{tocRef:o,setFocusedSection:c}=R(),{scrollY:s}=y();a.useEffect(()=>{const i=u=>{r.current&&r.current[u]&&r.current[u].moveTo()};return o.current=i,()=>{o.current=null}},[o]),a.useEffect(()=>{if(r.current)for(const[i,u]of Object.entries(r.current)){const f=u.readTop();if(f>20&&f<window.innerHeight*2/5){c(i);break}}},[s,c]),a.useEffect(()=>(c(e||null),()=>{c(null)}),[e,c]);const n=a.useCallback(i=>{r.current&&i&&(r.current[i.getTitle()]=i)},[]);return e?t.jsxs(d,{marginBottom:"10rem",children:[t.jsx(l,{title:C(e),size:"lg",ref:n}),t.jsx(l,{title:"Demographics",ref:n}),t.jsx(l,{title:"Economy",ref:n}),t.jsx(l,{title:"Climate",ref:n}),t.jsx(l,{title:"Geography",ref:n}),t.jsx(l,{title:"History",ref:n}),t.jsxs(l,{title:"Gallery",ref:n,children:["The name of the city : ",e]})]}):t.jsx(g,{})}export{I as default};
