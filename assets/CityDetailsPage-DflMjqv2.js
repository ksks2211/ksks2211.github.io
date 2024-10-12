import{g as c,H as h,y as e,W as l,V as g,L as y,X as S,Y as v}from"./index-cZ1D_KhZ.js";import{b as C,t as E}from"./stringUtils-ClFdsDEA.js";import{u as I}from"./useTocNavigation-DbdrChml.js";import{u as w,S as T,a as R}from"./ContainedImage-FgybEEsa.js";import{e as N}from"./AppRoutes-BQwMejlb.js";import{u as k}from"./useTheme-mn5kcuAL.js";const p="#ffffff00",x=t=>{const[s,o]=c.useState(p),a=k();return c.useEffect(()=>{const n=document.documentElement,r=getComputedStyle(n).getPropertyValue(t);o(r||p)},[a,t]),s};function L({city:t}){const s=c.useRef(null);return c.useEffect(()=>{const o=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ksks2211/utterances","data-repo-id":"R_kgDOKUYlIw","data-category":"Announcements","data-category-id":"DIC_kwDOKUYlI84CjR0X","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"light","data-lang":"en","data-loading":"lazy",crossOrigin:"anonymous",async:!0}).forEach(([r,i])=>{o.setAttribute(r,i)});const n=s.current;return(n==null?void 0:n.childNodes.length)===0&&(n==null||n.append(o)),()=>{o.remove(),n&&(n.innerHTML="")}},[t]),e.jsx(l,{ref:s,sx:{marginTop:"3.9rem",padding:"0 1.5rem",width:"100%"}})}const z=h.memo(L),Y=g("iframe")`
  position: relative;
  z-index: 1;
`,D={triggerOnce:!0,threshold:.4};function O({src:t,...s}){const[o,a]=c.useState(!1),[n,r]=c.useState(!1),[i,d]=c.useState(!1),{ref:u,inView:f}=w(D),j=()=>{d(!0),a(!1)},b=()=>{r(!0),a(!1),d(!1)};return c.useEffect(()=>{f&&(()=>{i||a(!0)})()},[f,i]),e.jsxs(T,{ref:u,children:[(o||i)&&e.jsx(Y,{src:t,width:"100%",height:"100%",loading:"lazy",onLoad:j,onError:b,...s}),o&&e.jsx(R,{variant:"rectangular",width:"100%",height:"100%",className:"img-alt img-loading"}),n&&e.jsx(l,{width:"100%",height:"100%",className:"img-alt img-error",children:"Not Found..."})]})}const V={width:{xs:"100%",sm:"90%",lg:"100%"},maxWidth:"375px",aspectRatio:"3/2",margin:"auto"};function $(t){return e.jsx(l,{sx:V,...t,children:e.jsx(O,{src:`https://www.google.com/maps?q=${40.776676},${-73.971321}&z=10&output=embed`,width:"100%",height:"100%",loading:"lazy"})})}const G=h.memo($),H={display:"flex",flexDirection:{xs:"column",lg:"row-reverse"}},B={width:{xs:"100%",lg:"50%"},padding:"1rem",display:"flex",alignItems:"center"},F={width:{xs:"100%",lg:"50%"},padding:"1rem"},M=g(l)`
  &::first-letter {
    font-size: 3em; /* 첫 글자를 크게 만듦 */
    font-weight: bold; /* 굵게 설정 */
    float: left; /* 첫 글자를 왼쪽에 고정 */
    line-height: 1; /* 줄 간격 조정 */
  }

  overflow-wrap: normal;
`,U="New York, often called New York City or NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors. The city comprises five boroughs, each coextensive with a respective county. New York is a global center of finance and commerce, culture, technology, entertainment and media, academics and scientific output, the arts and fashion, and, as home to the headquarters of the United Nations, international diplomacy.";function W({city:t}){return e.jsxs(l,{sx:H,children:[e.jsx(l,{sx:B,children:e.jsx(G,{})}),e.jsx(M,{className:"description",sx:F,"data-city":t,children:U})]})}const _=h.memo(W),A=(t,s,o)=>({width:s||"100%",height:t?"100%":o||"100%"});function q({children:t,width:s,height:o,threshold:a}){const{ref:n,inView:r}=w({triggerOnce:!0,threshold:a||.3}),i=A(r,s,o);return typeof t=="function"?e.jsx(l,{sx:i,ref:n,children:t(r)}):e.jsx(l,{ref:n,sx:i,children:r?t:e.jsx(y,{size:"3rem",height:o})})}const K="300px",P=g(l)`
  --section-background: #f6f7fb;

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.3rem;

  // tmp
  min-height: 300px;

  .section-title {
    padding: 1.8rem 0.4rem 1rem;
    span {
      display: block;
      height: 110%;

      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      border-bottom-color: ${({theme:t})=>t.palette.grey[400]};
      border-bottom-style: solid;
    }
  }

  .section-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    background-color: var(--section-bg);
  }
`,X=(t,s)=>{const o=t==="lg";return{".section-title":{fontSize:o?"1.65rem":"1.25rem",fontWeight:o?900:500,color:o?S(.05,s):void 0,span:{borderBottomWidth:o?0:"1px",fontFamily:o?"Roboto":void 0}}}},m=h.forwardRef(({title:t,children:s,size:o="md"},a)=>{const n=c.useRef(null),r=x("--accent-color"),i=x("--header-height"),d=X(o,r);return c.useImperativeHandle(a,()=>({moveTo:()=>{if(n.current){const{top:u}=n.current.getBoundingClientRect(),f=window.scrollY+u-N(i);window.scrollTo({top:f,behavior:"smooth"})}},readTop:()=>{if(n.current){const{top:u}=n.current.getBoundingClientRect();return u}return 0},getTitle:()=>t})),e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:n}),e.jsx(q,{height:K,threshold:.5,children:e.jsxs(P,{sx:d,children:[e.jsx("h2",{className:"section-title",children:e.jsx("span",{children:t})}),e.jsx("div",{className:"section-content",children:s})]})},t)]})});function ne(){const{city:t}=C(),s=c.useRef({}),{tocRef:o,setFocusedSection:a}=I(),{scrollY:n}=v();c.useEffect(()=>{const i=d=>{s.current&&s.current[d]&&s.current[d].moveTo()};return o.current=i,()=>{o.current=null}},[o]),c.useEffect(()=>{if(s.current)for(const[i,d]of Object.entries(s.current)){const u=d.readTop();if(u>20&&u<window.innerHeight*2/5){a(i);break}}},[n,a]),c.useEffect(()=>(a(t||null),()=>{a(null)}),[t,a]);const r=c.useCallback(i=>{s.current&&i&&(s.current[i.getTitle()]=i)},[]);return t?e.jsxs(l,{marginBottom:"10rem",children:[e.jsx(m,{title:E(t),size:"lg",ref:r,children:e.jsx(_,{city:t})}),e.jsx(m,{title:"Demographics",ref:r}),e.jsx(m,{title:"Economy",ref:r}),e.jsx(m,{title:"Climate",ref:r}),e.jsx(m,{title:"Geography",ref:r}),e.jsx(m,{title:"History",ref:r}),e.jsxs(m,{title:"Gallery",ref:r,children:["The name of the city : ",t]}),e.jsx(z,{city:t})]}):e.jsx(y,{})}export{ne as default};
