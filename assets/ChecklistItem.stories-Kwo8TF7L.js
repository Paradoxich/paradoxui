import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as w}from"./cn-MEeMP3_e.js";function f(){return e.jsx("svg",{viewBox:"0 0 12 12",fill:"none",className:"size-3 text-icon-positive","aria-hidden":"true",children:e.jsx("path",{d:"M2 6.5L4.5 9L10 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function j(){return e.jsxs("svg",{viewBox:"0 0 12 12",fill:"none",className:"size-3 text-icon-warning","aria-hidden":"true",children:[e.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("path",{d:"M6 3.5V6.5",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"}),e.jsx("circle",{cx:"6",cy:"8.5",r:"0.75",fill:"currentColor"})]})}function r({tone:t="positive",className:x,ref:g,children:y,...k}){return e.jsxs("li",{ref:g,className:w("flex w-full items-center gap-inline-gap","border-b border-divider-subtle","first:border-t","p-inline-gap",x),...k,children:[e.jsx("span",{className:"flex size-3 shrink-0 items-center justify-center",children:t==="warning"?e.jsx(j,{}):e.jsx(f,{})}),e.jsxs("span",{className:"min-w-0 flex-1 text-body-small text-body-secondary",children:[e.jsx("span",{className:"sr-only",children:t==="warning"?"Caution: ":""}),y]})]})}r.__docgenInfo={description:'A single row in a checklist: leading status icon + text. Rows draw a\nhairline bottom border; wrap them in a `<ul>` with `role="list"`.\nThe tone is also conveyed via an sr-only prefix so it doesn\'t rely\non color alone.',methods:[],displayName:"ChecklistItem",props:{tone:{required:!1,tsType:{name:"union",raw:"'positive' | 'warning'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"}]},description:"Visual treatment of the leading icon.\n- `positive` — green checkmark\n- `warning` — amber alert",defaultValue:{value:"'positive'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Components/ChecklistItem",component:r,tags:["autodocs"],argTypes:{tone:{control:"select",options:["positive","warning"]}},decorators:[t=>e.jsx("ul",{role:"list",style:{maxWidth:400,listStyle:"none",padding:0},children:e.jsx(t,{})})]},n={args:{children:"Works with the tools you already use"}},s={args:{tone:"warning",children:"Needs more storage than your current plan includes"}},i={render:()=>e.jsxs("ul",{role:"list",style:{maxWidth:400,listStyle:"none",padding:0},children:[e.jsx(r,{children:"Low maintenance once set up"}),e.jsx(r,{children:"Excellent keyboard support"}),e.jsx(r,{tone:"warning",children:"May outgrow the free tier quickly"})]})};var o,a,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Works with the tools you already use'
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,d,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'Needs more storage than your current plan includes'
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ul role="list" style={{
    maxWidth: 400,
    listStyle: 'none',
    padding: 0
  }}>
      <ChecklistItem>Low maintenance once set up</ChecklistItem>
      <ChecklistItem>Excellent keyboard support</ChecklistItem>
      <ChecklistItem tone="warning">
        May outgrow the free tier quickly
      </ChecklistItem>
    </ul>
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const L=["Positive","Caution","List"];export{s as Caution,i as List,n as Positive,L as __namedExportsOrder,I as default};
