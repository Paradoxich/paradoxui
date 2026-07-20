import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-Bqq-F1qZ.js";import{c as w}from"./cn-MEeMP3_e.js";function A({items:g,label:b,trigger:M,position:z="bottom",triggerClassName:T}){const[o,i]=s.useState(!1),h=s.useId(),y=s.useRef(null),v=s.useRef(null),m=s.useRef([]),n=g.map((e,t)=>e.disabled?-1:t).filter(e=>e>=0),l=e=>{var t;e!==void 0&&((t=m.current[e])==null||t.focus())},x=()=>{i(!0),requestAnimationFrame(()=>{n.length>0&&l(n[0])})},p=(e=!0)=>{var t;i(!1),e&&((t=v.current)==null||t.focus())};s.useEffect(()=>{if(!o)return;const e=t=>{var r;(r=y.current)!=null&&r.contains(t.target)||i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]);const q=e=>{const t=m.current.findIndex(O=>O===document.activeElement),r=n.indexOf(t);e.key==="Escape"?(e.preventDefault(),p()):e.key==="ArrowDown"?(e.preventDefault(),l(n[(r+1)%n.length])):e.key==="ArrowUp"?(e.preventDefault(),l(n[(r-1+n.length)%n.length])):e.key==="Home"?(e.preventDefault(),l(n[0])):e.key==="End"?(e.preventDefault(),l(n[n.length-1])):e.key==="Tab"&&i(!1)},K=e=>{e.key==="ArrowDown"&&(e.preventDefault(),x())};return a.jsxs("span",{ref:y,className:"relative inline-flex",children:[a.jsx("button",{ref:v,type:"button","aria-haspopup":"menu","aria-expanded":o,"aria-controls":o?h:void 0,"aria-label":b,onClick:()=>o?p():x(),onKeyDown:K,className:T,children:M}),o&&a.jsx("div",{id:h,role:"menu","aria-label":b,onKeyDown:q,className:w("absolute right-0 z-50 min-w-[8rem]",z==="bottom"?"top-full mt-1":"bottom-full mb-1","rounded-md border border-card bg-surface-control p-1 shadow-soft backdrop-blur-md"),children:g.map((e,t)=>a.jsxs("button",{ref:r=>{m.current[t]=r},type:"button",role:"menuitem",tabIndex:-1,disabled:e.disabled,onClick:()=>{p(),e.onSelect()},className:w("flex h-10 w-full items-center gap-inline-gap rounded-sm px-inline-gap text-left text-body-small","transition-colors duration-normal","focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus","disabled:cursor-not-allowed disabled:opacity-50",e.tone==="critical"?"text-critical hover:bg-surface-critical":"text-primary hover:bg-surface-sunken"),children:[e.icon,e.label]},e.label))})]})}A.__docgenInfo={description:`A small dropdown action menu — a trigger button that opens a \`role="menu"\`
panel. Keyboard: Enter/Space/ArrowDown open and focus the first item;
arrows cycle; Home/End jump; Escape closes and returns focus to the
trigger. Closes on outside click and on selection.`,methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items in display order."},label:{required:!0,tsType:{name:"string"},description:"Accessible name for the trigger button."},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the trigger button (e.g. a chevron icon)."},position:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:"Where the panel opens relative to the trigger.",defaultValue:{value:"'bottom'",computed:!1}},triggerClassName:{required:!1,tsType:{name:"string"},description:"Class applied to the trigger button."}}};const F={title:"Components/Menu",component:A,tags:["autodocs"]},f=a.jsx("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-secondary",children:a.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c={args:{label:"Item actions",trigger:f,triggerClassName:"flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay",items:[{label:"Copy text",onSelect:()=>{}},{label:"Duplicate",onSelect:()=>{}},{label:"Delete",onSelect:()=>{},tone:"critical"}]}},u={args:{label:"Item actions",trigger:f,triggerClassName:"flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay",items:[{label:"Copy text",onSelect:()=>{}},{label:"Edit",onSelect:()=>{},disabled:!0},{label:"Delete",onSelect:()=>{},tone:"critical"}]}},d={args:{label:"Item actions",trigger:f,position:"top",triggerClassName:"flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay",items:[{label:"Copy text",onSelect:()=>{}},{label:"Delete",onSelect:()=>{},tone:"critical"}]}};var D,S,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Item actions',
    trigger: chevron,
    triggerClassName: 'flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay',
    items: [{
      label: 'Copy text',
      onSelect: () => {}
    }, {
      label: 'Duplicate',
      onSelect: () => {}
    }, {
      label: 'Delete',
      onSelect: () => {},
      tone: 'critical'
    }]
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,j,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Item actions',
    trigger: chevron,
    triggerClassName: 'flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay',
    items: [{
      label: 'Copy text',
      onSelect: () => {}
    }, {
      label: 'Edit',
      onSelect: () => {},
      disabled: true
    }, {
      label: 'Delete',
      onSelect: () => {},
      tone: 'critical'
    }]
  }
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,E,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Item actions',
    trigger: chevron,
    position: 'top',
    triggerClassName: 'flex size-8 items-center justify-center rounded-full transition-colors duration-normal hover:bg-surface-overlay',
    items: [{
      label: 'Copy text',
      onSelect: () => {}
    }, {
      label: 'Delete',
      onSelect: () => {},
      tone: 'critical'
    }]
  }
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const U=["Default","WithDisabledItem","OpensUpward"];export{c as Default,d as OpensUpward,u as WithDisabledItem,U as __namedExportsOrder,F as default};
