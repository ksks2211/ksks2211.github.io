import{g as s,y as o,V as u,W as l}from"./index-CnZ7neNp.js";import{t as m,b as f}from"./stringUtils-BssfpDtv.js";import{c as g}from"./index-Cv1dy4BU.js";import{u as h}from"./useTocNavigation-Df4T0BGz.js";import"./AppRoutes-BuMek3Vj.js";const x=u(l)`
  --padding-top: 3.5rem;
  width: 100%;

  // stick to the top
  position: sticky;
  top: var(--header-height);

  padding: var(--padding-top) 1rem 0 1rem;
  ul {
    max-height: calc(
      100vh - var(--header-height) - var(--footer-height) + var(--padding-top)
    );
    overflow: auto;

    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

    padding: 0 0 1rem;
    li {
      cursor: pointer;
      font-size: 0.95rem;
      padding: 0.27rem 0 0.27rem 1rem;
      color: ${({theme:t})=>t.palette.grey[700]};

      transition: 0.3s;
      &:not(:first-of-type):hover,
      &:not(:first-of-type).focused {
        font-weight: 700;
        transform: translateX(-2px);
      }
    }

    li:first-of-type {
      font-size: 1.2rem;
      font-weight: 900;
      text-align: center;
      margin-bottom: 0.5rem;
      padding: 10px 0;
      background-color: ${({theme:t})=>t.palette.grey[200]};

      &.focused {
        color: var(--accent-color);
      }
    }
  }
`;function y({city:t}){const{tocRef:e,focusedSection:c}=h(),i=s.useRef(null),n=()=>{i.current&&(clearTimeout(i.current),i.current=null)};s.useEffect(()=>()=>{n()},[t]);const d=[m(t),"Demographics","Economy","Climate","Geography","History","Gallery"],p=({currentTarget:r})=>{const a=r.dataset.topic||t;e.current&&e.current(a),setTimeout(()=>{e.current&&e.current(a)},450),n(),i.current=setTimeout(()=>{e.current&&e.current(a)},900)};return o.jsx(x,{className:"bottom",children:o.jsx("ul",{children:d.map(r=>o.jsx("li",{"data-topic":r,onClick:p,className:g({focused:c===r}),children:r},r))})})}function k(){const{city:t}=f();return t?o.jsx(y,{city:t}):o.jsx("div",{children:"sidebar"})}export{k as default};
