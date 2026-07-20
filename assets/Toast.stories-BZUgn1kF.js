import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as q}from"./cn-MEeMP3_e.js";const E={default:["bg-surface-inverse","text-inverse","border-transparent"].join(" "),positive:["bg-fill-positive","text-on-accent","border-transparent"].join(" "),warning:["bg-fill-warning","text-on-accent","border-transparent"].join(" "),critical:["bg-fill-critical","text-on-accent","border-transparent"].join(" ")},L={default:"ℹ",positive:"✓",warning:"⚠",critical:"✕"};function T({tone:s="default",title:o,description:l,actions:c=[],onClose:d,className:N,ref:C,...R}){return e.jsxs("div",{ref:C,className:q("flex items-start gap-3","px-4 py-3","rounded-lg","border","shadow-lg","min-w-[280px] max-w-sm",E[s],N),role:"alert","aria-live":"assertive",...R,children:[e.jsx("span",{className:"text-base flex-shrink-0 mt-0.5","aria-hidden":"true",children:L[s]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[o&&e.jsx("p",{className:"font-semibold text-sm leading-tight",children:o}),l&&e.jsx("p",{className:"text-sm opacity-90 mt-0.5",children:l}),c.length>0&&e.jsx("div",{className:"mt-2 flex items-center gap-4",children:c.map(n=>e.jsx("button",{type:"button",onClick:n.onClick,className:"text-sm font-semibold underline underline-offset-2 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded",children:n.label},n.label))})]}),d&&e.jsx("button",{onClick:d,className:"flex-shrink-0 opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current rounded","aria-label":"Dismiss notification",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})}T.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"union",raw:"'default' | 'positive' | 'warning' | 'critical'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'critical'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ToastAction"}],raw:"ToastAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const S={title:"Components/Toast",component:T,tags:["autodocs"],argTypes:{tone:{control:"select",options:["default","positive","warning","critical"]}}},t={args:{tone:"default",title:"Notification",description:"Your changes have been saved."}},a={args:{tone:"positive",title:"Positive",description:"Entry added to your journal."}},i={args:{tone:"warning",title:"Heads up",description:"Your trial ends in 2 days."}},r={args:{tone:"critical",title:"Critical",description:"Failed to save your changes."}};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tone: 'default',
    title: 'Notification',
    description: 'Your changes have been saved.'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,g,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tone: 'positive',
    title: 'Positive',
    description: 'Entry added to your journal.'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,h,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    title: 'Heads up',
    description: 'Your trial ends in 2 days.'
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,j,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tone: 'critical',
    title: 'Critical',
    description: 'Failed to save your changes.'
  }
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const H=["Default","Positive","Warning","Critical"];export{r as Critical,t as Default,a as Positive,i as Warning,H as __namedExportsOrder,S as default};
